export type ClientLogo = {
  name: string;
  logo: string;       // public URL, e.g. /logos/eurobet.svg
  url?: string;       // optional external link
  darkLogo?: string;  // optional variant for dark mode
};

export const CLIENTS: ClientLogo[] = [
  { name: "Coinbase",    logo: "/logos/coinbase.webp",     url: "https://www.eurobet.it" },
  { name: "Tetrapak",     logo: "/logos/tetrapak.webp",       url: "https://entaingroup.com" },
  { name: "Mastercard",   logo: "/logos/mastercard.webp",  url: "https://www.mastercard.com" },
  { name: "Accenture",    logo: "/logos/accenture.webp",   url: "https://www.accenture.com" },
  { name: "Entain",       logo: "/logos/entain.webp",       url: "https://entaingroup.com" },
  { name: "Eurobet",      logo: "/logos/eurobet.webp",      url: "https://www.eurobet.it" },
  { name: "Ricardo",      logo: "/logos/ricardo.webp",     url: "https://www.ricardo.com" },
];
