import { processSteps } from "@/lib/data";
import Reveal from "./Reveal";
import { accentText, type Accent } from "@/lib/accent";

export default function ProcessTimeline({ accent = "blue" }: { accent?: Accent }) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
      {processSteps.map((step, i) => (
        <Reveal key={step.step} delay={i * 0.08}>
          <div className="relative h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <span className={`font-display text-4xl opacity-40 ${accentText[accent]}`}>
              {step.step}
            </span>
            <h3 className="mt-3 font-display text-lg text-brand-deep">
              {step.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-500">
              {step.description}
            </p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
