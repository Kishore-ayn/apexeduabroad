import Container from "./Container";
import Reveal from "./Reveal";
import WaveDivider from "./WaveDivider";

export default function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-brand-gradient">
      <div className="pointer-events-none absolute inset-0 bg-black/10" />
      <Container className="relative py-20 sm:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
              {eyebrow}
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="font-display text-4xl leading-tight text-white sm:text-5xl">
              {title}
            </h1>
          </Reveal>
          {description && (
            <Reveal delay={0.16}>
              <p className="mx-auto mt-5 max-w-xl text-white/70">
                {description}
              </p>
            </Reveal>
          )}
        </div>
      </Container>
      <WaveDivider className="relative" />
    </section>
  );
}
