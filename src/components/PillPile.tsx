'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * Skill pills that drop into a pile and can be dragged and thrown (matter-js).
 *
 * Server-rendered as a plain wrapped row, which is also what reduced-motion
 * visitors keep. Physics starts only once the pile scrolls into view, and the
 * engine is loaded on demand. On touch screens dragging would fight page
 * scrolling, so a tap flicks a pill instead.
 */
export default function PillPile({ pills }: { pills: string[] }) {
  const box = useRef<HTMLDivElement>(null);
  const [live, setLive] = useState(false);

  useEffect(() => {
    const el = box.current;
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let cleanup = () => {};
    let started = false;

    const start = async () => {
      started = true;
      const Matter = await import('matter-js');
      const { Engine, Runner, Bodies, Body, Composite, Mouse, MouseConstraint, Events } = Matter;

      const items = Array.from(el.querySelectorAll<HTMLElement>('.pill'));
      const sizes = items.map((p) => ({ w: p.offsetWidth, h: p.offsetHeight }));
      setLive(true);

      const W = el.clientWidth;
      const H = el.clientHeight;
      const engine = Engine.create({ gravity: { y: 1.1 } });
      const wall = { isStatic: true, render: { visible: false } };
      Composite.add(engine.world, [
        Bodies.rectangle(W / 2, H + 50, W * 3, 100, wall),
        Bodies.rectangle(-50, H / 2 - 1500, 100, H + 3000, wall),
        Bodies.rectangle(W + 50, H / 2 - 1500, 100, H + 3000, wall),
      ]);

      const bodies = sizes.map(({ w, h }, i) =>
        Bodies.rectangle(w / 2 + Math.random() * Math.max(W - w, 1), -h - i * 55 - Math.random() * 80, w, h, {
          chamfer: { radius: h / 2 },
          angle: (Math.random() - 0.5) * 0.8,
          restitution: 0.35,
          friction: 0.25,
          frictionAir: 0.012,
          density: 0.002,
        }),
      );
      Composite.add(engine.world, bodies);

      const coarse = window.matchMedia('(pointer: coarse)').matches;
      const flicks: Array<() => void> = [];
      if (coarse) {
        items.forEach((item, i) => {
          const flick = () =>
            Body.setVelocity(bodies[i], { x: (Math.random() - 0.5) * 14, y: -16 - Math.random() * 6 });
          item.addEventListener('pointerdown', flick);
          flicks.push(() => item.removeEventListener('pointerdown', flick));
        });
      } else {
        const mouse = Mouse.create(el);
        // Let the page scroll with the wheel while the pointer is over the pile.
        const m = mouse as unknown as { mousewheel: EventListener };
        el.removeEventListener('wheel', m.mousewheel);
        el.removeEventListener('mousewheel', m.mousewheel);
        el.removeEventListener('DOMMouseScroll', m.mousewheel);
        Composite.add(
          engine.world,
          MouseConstraint.create(engine, { mouse, constraint: { stiffness: 0.18, render: { visible: false } } }),
        );
      }

      Events.on(engine, 'afterUpdate', () => {
        bodies.forEach((b, i) => {
          const { w, h } = sizes[i];
          items[i].style.transform = `translate(${b.position.x - w / 2}px, ${b.position.y - h / 2}px) rotate(${b.angle}rad)`;
        });
      });

      const runner = Runner.create();
      Runner.run(runner, engine);

      cleanup = () => {
        Runner.stop(runner);
        Composite.clear(engine.world, false);
        Engine.clear(engine);
        flicks.forEach((off) => off());
      };
    };

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          io.disconnect();
          start();
        }
      },
      { threshold: 0.3 },
    );
    io.observe(el);

    return () => {
      io.disconnect();
      cleanup();
    };
  }, []);

  return (
    <div ref={box} className={`pile ${live ? 'is-live' : ''}`}>
      {pills.map((p) => (
        <span key={p} className="pill">
          {p}
        </span>
      ))}
    </div>
  );
}
