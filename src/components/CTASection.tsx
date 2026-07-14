import Container from "./Container";
import Button from "./Button";
import Reveal from "./Reveal";
import WaveDivider from "./WaveDivider";

export default function CTASection({
  title = "Ready to start your journey abroad?",
  description = "Book a free, no-obligation consultation with our counselors and take the first step toward your global education.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-brand-gradient pb-20">
      <WaveDivider topFill="white" />
      <Container className="relative pt-6 sm:pt-10">
        <Reveal>
          <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 rounded-3xl border border-white/20 bg-white/10 px-8 py-14 text-center backdrop-blur-sm">
            <h2 className="font-display text-3xl text-white sm:text-4xl">
              {title}
            </h2>
            <p className="max-w-xl text-white/70">{description}</p>
            <div className="mt-2 flex flex-col gap-4 sm:flex-row">
              <Button href="/contact" variant="primary">
                Book Free Consultation
              </Button>
              <Button href="/services" variant="ghost">
                Explore Our Services
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
