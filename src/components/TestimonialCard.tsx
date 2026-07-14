import { Quote } from "lucide-react";
import Reveal from "./Reveal";
import type { Testimonial } from "@/lib/data";
import { accentBg, accentText, type Accent } from "@/lib/accent";

export default function TestimonialCard({
  testimonial,
  index = 0,
  accent = "violet",
}: {
  testimonial: Testimonial;
  index?: number;
  accent?: Accent;
}) {
  return (
    <Reveal delay={index * 0.06}>
      <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
        <Quote className={`${accentText[accent]} opacity-60`} size={28} />
        <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-700">
          “{testimonial.quote}”
        </p>
        <div className="mt-6 flex items-center gap-3 border-t border-slate-200 pt-4">
          <div className={`flex h-10 w-10 items-center justify-center rounded-full font-display text-sm text-white ${accentBg[accent]}`}>
            {testimonial.name.charAt(0)}
          </div>
          <div>
            <p className="text-sm font-semibold text-brand-deep">
              {testimonial.name}{" "}
              <span className="ml-1">{testimonial.flag}</span>
            </p>
            <p className="text-xs text-slate-500">{testimonial.university}</p>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
