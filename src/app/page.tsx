import { ShieldCheck, Users, Sparkles, Landmark } from "lucide-react";
import Container from "@/components/Container";
import Button from "@/components/Button";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import StatsBar from "@/components/StatsBar";
import ServiceCard from "@/components/ServiceCard";
import CountryCard from "@/components/CountryCard";
import ProcessTimeline from "@/components/ProcessTimeline";
import TestimonialCard from "@/components/TestimonialCard";
import CTASection from "@/components/CTASection";
import WaveDivider from "@/components/WaveDivider";
import { countries, services, testimonials } from "@/lib/data";

const valueProps = [
  {
    icon: Users,
    title: "Personalized Counseling",
    description: "Every plan is built around your profile, budget, and goals — not a generic checklist.",
  },
  {
    icon: ShieldCheck,
    title: "End-to-End Support",
    description: "From your first consultation to landing abroad, we stay with you at every step.",
  },
  {
    icon: Sparkles,
    title: "Scholarship Assistance",
    description: "We actively match you against scholarships and funding options you qualify for.",
  },
  {
    icon: Landmark,
    title: "Proven Track Record",
    description: "Years of experience placing students in universities across the globe.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-brand-gradient">
        <div className="pointer-events-none absolute inset-0 bg-black/10" />
        <Container className="relative py-28 sm:py-36">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <p className="mb-5 inline-flex items-center rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-white">
                Overseas Education Consultancy
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="font-display text-4xl leading-[1.1] text-white sm:text-5xl lg:text-6xl">
                Your Global Education Journey, Guided by Experts
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mx-auto mt-6 max-w-xl text-lg text-white/70">
                Apex EduAbroad helps ambitious students turn a study-abroad dream
                into an offer letter — with honest counseling, meticulous
                applications, and support that continues long after your visa
                is stamped.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button href="/contact" variant="primary">
                  Book Free Consultation
                </Button>
                <Button href="/destinations" variant="ghost">
                  Explore Destinations
                </Button>
              </div>
            </Reveal>
          </div>
        </Container>
        <WaveDivider className="relative" />
      </section>

      <StatsBar />

      {/* Why choose us */}
      <section className="bg-white py-24">
        <Container>
          <SectionHeading
            eyebrow="Why Apex EduAbroad"
            title="Guidance that puts your future first"
            description="We combine deep counseling expertise with meticulous execution — so every application reflects your best possible profile."
            accent="violet"
          />
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {valueProps.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.08}>
                <div className="h-full rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-violet text-white">
                    <item.icon size={24} />
                  </div>
                  <h3 className="mt-5 font-display text-lg text-brand-deep">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Services */}
      <section className="bg-surface py-24">
        <Container>
          <SectionHeading
            eyebrow="What We Do"
            title="Complete support, every step of the way"
            description="From choosing the right course to settling into life abroad — a single team you can rely on."
            accent="magenta"
          />
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <ServiceCard key={service.slug} service={service} index={i} accent="magenta" />
            ))}
          </div>
          <Reveal delay={0.2}>
            <div className="mt-12 text-center">
              <Button href="/services" variant="secondary">
                View All Services
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Destinations */}
      <section className="bg-white py-24">
        <Container>
          <SectionHeading
            eyebrow="Where You Can Study"
            title="Popular study destinations"
            description="We guide applications across the world's leading study destinations — matched to your goals and budget."
            accent="flame"
          />
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {countries.slice(0, 8).map((country, i) => (
              <CountryCard key={country.slug} country={country} index={i} accent="flame" />
            ))}
          </div>
          <Reveal delay={0.2}>
            <div className="mt-12 text-center">
              <Button href="/destinations" variant="secondary">
                View All Destinations
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Process */}
      <section className="bg-brand-deep py-24">
        <Container>
          <SectionHeading
            eyebrow="How It Works"
            title="Your path to studying abroad"
            description="A clear, structured process from the first conversation to your first day on campus."
            light
          />
          <div className="mt-14">
            <ProcessTimeline accent="blue" />
          </div>
        </Container>
      </section>

      {/* Testimonials */}
      <section className="bg-surface py-24">
        <Container>
          <SectionHeading
            eyebrow="Success Stories"
            title="Students who found their path with us"
            accent="violet"
          />
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {testimonials.slice(0, 4).map((t, i) => (
              <TestimonialCard key={t.name} testimonial={t} index={i} accent="violet" />
            ))}
          </div>
          <Reveal delay={0.2}>
            <div className="mt-12 text-center">
              <Button href="/success-stories" variant="secondary">
                Read More Stories
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
