import type { Metadata } from "next";
import { Users2, LineChart, ClipboardCheck } from "lucide-react";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import CTASection from "@/components/CTASection";
import { exams } from "@/lib/data";
import { accentText, type Accent } from "@/lib/accent";

const examRotation: Accent[] = ["blue", "violet", "magenta", "flame", "orange"];

export const metadata: Metadata = {
  title: "IELTS, TOEFL, PTE & GRE Coaching | Apex EduAbroad",
  description:
    "Structured coaching for IELTS, TOEFL, PTE, Duolingo, GRE, GMAT, and SAT with mock tests and personalised feedback.",
};

const approach = [
  {
    icon: ClipboardCheck,
    title: "Diagnostic First",
    description: "We assess your current level before designing a study plan, so you're not wasting time on what you already know.",
  },
  {
    icon: Users2,
    title: "Small Batches",
    description: "Focused group sizes mean more speaking practice and faster, more specific feedback.",
  },
  {
    icon: LineChart,
    title: "Score Tracking",
    description: "Regular mock tests track your progress and flag exactly where to focus next.",
  },
];

export default function TestPreparationPage() {
  return (
    <>
      <PageHero
        eyebrow="Test Preparation"
        title="Score higher, with less guesswork"
        description="Structured coaching for every major English proficiency and standardized test — built around your target score and timeline."
      />

      <section className="bg-surface py-24">
        <Container>
          <SectionHeading
            eyebrow="Exams We Cover"
            title="Coaching for every major test"
            accent="violet"
          />
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {exams.map((exam, i) => {
              const accent = examRotation[i % examRotation.length];
              return (
                <Reveal key={exam.name} delay={i * 0.06}>
                  <div className="h-full rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
                    <h3 className="font-display text-2xl text-brand-deep">
                      {exam.name}
                    </h3>
                    <p className={`mt-1 text-xs font-medium uppercase tracking-wide ${accentText[accent]}`}>
                      {exam.fullName}
                    </p>
                    <p className="mt-4 text-sm leading-relaxed text-slate-500">
                      {exam.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="bg-brand-deep py-24">
        <Container>
          <SectionHeading
            eyebrow="Our Approach"
            title="Coaching designed around your score, not a fixed curriculum"
            light
          />
          <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-3">
            {approach.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.08}>
                <div className="text-center">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-brand-blue">
                    <item.icon size={24} />
                  </div>
                  <h3 className="mt-5 font-display text-lg text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/70">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        title="Not sure which test you need?"
        description="Tell us your target country and course, and we'll recommend the right exam and timeline."
      />
    </>
  );
}
