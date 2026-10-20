/**
 * Screens captured from each live product (public/work/<slug>/), used as the
 * frames of the contact sheet. Desktop captures are 1440×900, phone captures
 * 390×844. SRS Classes has none while its site shows a "launching soon" page.
 */
export interface Shot {
  src: string;
  kind: 'desktop' | 'phone';
  alt: string;
}

const desktop = (slug: string, n: number, name: string): Shot[] =>
  Array.from({ length: n }, (_, i) => ({
    src: `/work/${slug}/d${i + 1}.webp`,
    kind: 'desktop',
    alt: `${name}, desktop screen ${i + 1}`,
  }));

const phone = (slug: string, name: string): Shot[] =>
  [1, 2].map((i) => ({
    src: `/work/${slug}/m${i}.webp`,
    kind: 'phone',
    alt: `${name} on a phone, screen ${i}`,
  }));

export const shots: Record<string, Shot[]> = {
  prescripto: [...desktop('prescripto', 5, 'Prescripto'), ...phone('prescripto', 'Prescripto')],
  cryptofolio: [...desktop('cryptofolio', 2, 'Cryptofolio'), ...phone('cryptofolio', 'Cryptofolio')],
  'axiora-learning': [...desktop('axiora-learning', 4, 'Axiora Learning'), ...phone('axiora-learning', 'Axiora Learning')],
  evaa: [...desktop('evaa', 5, 'EVAA Enterprises'), ...phone('evaa', 'EVAA Enterprises')],
  prsnn: [...desktop('prsnn', 5, 'Prsnn'), ...phone('prsnn', 'Prsnn')],
};

export const SIZE = {
  desktop: { width: 1440, height: 900 },
  phone: { width: 390, height: 844 },
} as const;
