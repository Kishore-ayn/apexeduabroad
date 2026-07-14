import clsx from "clsx";
import Reveal from "./Reveal";
import { accentText, type Accent } from "@/lib/accent";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
  accent = "blue",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  light?: boolean;
  accent?: Accent;
}) {
  return (
    <Reveal>
      <div
        className={clsx(
          "max-w-2xl",
          align === "center" ? "mx-auto text-center" : "text-left"
        )}
      >
        {eyebrow && (
          <p
            className={clsx(
              "mb-3 text-xs font-semibold uppercase tracking-[0.2em]",
              light ? "text-white/80" : accentText[accent]
            )}
          >
            {eyebrow}
          </p>
        )}
        <h2
          className={clsx(
            "font-display text-3xl leading-tight sm:text-4xl",
            light
              ? "text-white"
              : "bg-brand-gradient bg-clip-text text-transparent"
          )}
        >
          {title}
        </h2>
        {description && (
          <p
            className={clsx(
              "mt-4 text-base leading-relaxed",
              light ? "text-white/80" : "text-slate-500"
            )}
          >
            {description}
          </p>
        )}
      </div>
    </Reveal>
  );
}
