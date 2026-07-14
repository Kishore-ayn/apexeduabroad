import type { Metadata } from "next";
import { HeartHandshake, Target, Eye, ShieldCheck, Users, Sparkles, Quote } from "lucide-react";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import StatsBar from "@/components/StatsBar";
import CTASection from "@/components/CTASection";
import { site } from "@/lib/data";

export const metadata: Metadata = {
  title: "About Us | Trusted Overseas Education Consultants – Apex EduAbroad",
  description:
    "Learn about Apex EduAbroad's mission to guide students through every stage of studying abroad with honest, personalized counseling.",
};

const values = [
  {
    icon: HeartHandshake,
    title: "Honesty First",
    description:
      "We tell you what will and won't work for your profile — even when it's not what you want to hear.",
  },
  {
    icon: Users,
    title: "Student-Centered",
    description:
      "Every recommendation starts with your goals, budget, and circumstances, never a one-size-fits-all script.",
  },
  {
    icon: ShieldCheck,
    title: "Meticulous Execution",
    description:
      "Applications, documentation, and visa filings handled with the attention to detail they deserve.",
  },
  {
    icon: Sparkles,
    title: "Long-Term Relationship",
    description:
      "We stay involved well past your offer letter — through visa filing, pre-departure, and beyond.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Apex EduAbroad"
        title="Guiding students to their global future, honestly"
        description="We started Apex EduAbroad with a simple belief: studying abroad should be guided by what's right for the student, not what's easiest to sell."
      />

      <section className="bg-brand-deep py-16">
        <Container>
          <Reveal>
            <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center">
              <Quote className="text-brand-blue" size={32} />
              <p className="font-display text-xl leading-relaxed text-white sm:text-2xl">
                {site.differentiator}
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="bg-white py-24">
        <Container>
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-blue">
                  Our Story
                </p>
                <h2 className="mt-3 font-display bg-brand-gradient bg-clip-text text-3xl text-transparent sm:text-4xl">
                  A consultancy built on trust, not targets
                </h2>
                <div className="mt-6 space-y-4 text-slate-500 leading-relaxed">
                  <p>
                    Apex EduAbroad was founded to close the gap between what
                    students are promised and what they actually experience
                    during their study-abroad journey. Too many students sign
                    up with agents chasing commissions from a handful of
                    universities — we work differently.
                  </p>
                  <p>
                    Our counselors take the time to understand each student&apos;s
                    academic background, financial situation, and long-term
                    career goals before recommending a single course or
                    country. That approach has helped us build lasting
                    relationships with students and families who trust us to
                    tell them the truth, not just what sounds good.
                  </p>
                  <p>
                    Today, our team supports students applying across the
                    world&apos;s leading study destinations — handling everything
                    from counseling and applications to visa filing and
                    settling in once they land.
                  </p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="grid grid-cols-2 gap-6">
                <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
                  <Target className="text-brand-violet" size={28} />
                  <h3 className="mt-4 font-display text-lg text-brand-deep">
                    Our Mission
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">
                    Our mission is to empower students with the right guidance, resources,
                    and opportunities to achieve their international education goals.
                    We provide personalised counselling, transparent support, and expert
                    assistance throughout the entire study abroad journey — from university
                    selection to successful admission and visa processing.
                  </p>
                </div>
                <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
                  <Eye className="text-brand-magenta" size={28} />
                  <h3 className="mt-4 font-display text-lg text-brand-deep">
                    Our Vision
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">
                    Our vision is to become a trusted global education partner, connecting 
                    students with world-class learning opportunities and helping them build
                    successful careers through international education.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <StatsBar />

      <section className="bg-surface py-24">
        <Container>
          <SectionHeading
            eyebrow="What We Stand For"
            title="The values behind every consultation"
            accent="magenta"
          />
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, i) => (
              <Reveal key={value.title} delay={i * 0.08}>
                <div className="h-full rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-magenta text-white">
                    <value.icon size={24} />
                  </div>
                  <h3 className="mt-5 font-display text-lg text-brand-deep">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">
                    {value.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
