import { stats } from "@/lib/data";
import Container from "./Container";
import Reveal from "./Reveal";

export default function StatsBar() {
  return (
    <section className="bg-surface py-16">
      <Container className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
        {stats.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 0.08}>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm">
              <p className="font-display bg-brand-gradient bg-clip-text text-3xl text-transparent sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-2 text-xs uppercase tracking-wide text-slate-500 sm:text-sm">
                {stat.label}
              </p>
            </div>
          </Reveal>
        ))}
      </Container>
    </section>
  );
}
