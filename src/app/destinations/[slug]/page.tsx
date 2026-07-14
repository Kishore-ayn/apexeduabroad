import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Check, CalendarDays, BookOpen } from "lucide-react";
import Link from "next/link";
import Container from "@/components/Container";
import Button from "@/components/Button";
import Reveal from "@/components/Reveal";
import CTASection from "@/components/CTASection";
import WaveDivider from "@/components/WaveDivider";
import { countries } from "@/lib/data";

export function generateStaticParams() {
  return countries.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const country = countries.find((c) => c.slug === slug);
  if (!country) return {};
  return {
    title: `Study in ${country.name} | Apex EduAbroad`,
    description: country.hook,
  };
}

export default async function CountryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const country = countries.find((c) => c.slug === slug);
  if (!country) notFound();

  return (
    <>
      <section className="relative overflow-hidden bg-brand-gradient">
        <div className="pointer-events-none absolute inset-0 bg-black/10" />
        <Container className="relative py-20 sm:py-28">
          <Reveal>
            <Link
              href="/destinations"
              className="text-xs font-semibold uppercase tracking-[0.2em] text-white/80 hover:text-white"
            >
              ← All Destinations
            </Link>
          </Reveal>
          <Reveal delay={0.06}>
            <h1 className="mt-4 font-display text-4xl text-white sm:text-5xl">
              Study in {country.name}
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-5 max-w-2xl text-white/70">{country.hook}</p>
          </Reveal>
        </Container>
        <WaveDivider className="relative" />
      </section>

      <section className="bg-surface py-24">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <Reveal>
                <h2 className="font-display bg-brand-gradient bg-clip-text text-2xl text-transparent">
                  Why study in {country.name}?
                </h2>
                <ul className="mt-6 space-y-4">
                  {country.highlights.map((point) => (
                    <li key={point} className="flex items-start gap-3 text-slate-700">
                      <Check size={18} className="mt-0.5 shrink-0 text-brand-flame" />
                      <span className="leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>

            <Reveal delay={0.1}>
              <div className="space-y-6 rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
                <div>
                  <div className="flex items-center gap-2 text-brand-flame">
                    <BookOpen size={18} />
                    <p className="text-xs font-semibold uppercase tracking-wide">
                      Popular Courses
                    </p>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {country.popularCourses.map((course) => (
                      <span
                        key={course}
                        className="rounded-full bg-surface px-3 py-1 text-xs font-medium text-slate-700"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="border-t border-slate-200 pt-6">
                  <div className="flex items-center gap-2 text-brand-flame">
                    <CalendarDays size={18} />
                    <p className="text-xs font-semibold uppercase tracking-wide">
                      Typical Intakes
                    </p>
                  </div>
                  <p className="mt-3 text-sm text-slate-700">{country.intakes}</p>
                </div>
                <Button href="/contact" variant="primary" className="w-full">
                  Get Free Consultation
                </Button>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <CTASection
        title={`Ready to explore ${country.name}?`}
        description="Talk to a counselor about your eligibility, costs, and timelines for this destination."
      />
    </>
  );
}
