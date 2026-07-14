export type Accent = "blue" | "violet" | "magenta" | "flame" | "orange";

export const accentBg: Record<Accent, string> = {
  blue: "bg-brand-blue",
  violet: "bg-brand-violet",
  magenta: "bg-brand-magenta",
  flame: "bg-brand-flame",
  orange: "bg-brand-orange",
};

export const accentText: Record<Accent, string> = {
  blue: "text-brand-blue",
  violet: "text-brand-violet",
  magenta: "text-brand-magenta",
  flame: "text-brand-flame",
  orange: "text-brand-orange",
};

export const accentBgSoft: Record<Accent, string> = {
  blue: "bg-brand-blue/10",
  violet: "bg-brand-violet/10",
  magenta: "bg-brand-magenta/10",
  flame: "bg-brand-flame/10",
  orange: "bg-brand-orange/10",
};
