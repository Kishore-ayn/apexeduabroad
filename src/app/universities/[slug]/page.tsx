import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Clock } from "lucide-react";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import Button from "@/components/Button";
import CTASection from "@/components/CTASection";
import UniversityFilterList from "@/components/UniversityFilterList";
import type { University } from "@/components/UniversityCard";
import { countries, universitiesByCountry, enabledCountrySlugs } from "@/data/universities";

const universitiesBySlug = universitiesByCountry as Record<string, University[]>;

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
    title: `Universities in ${country.name} | Apex EduAbroad`,
    description: `Browse ${country.universityCount} accredited universities in ${country.name}, filterable by type and program.`,
  };
}

export default async function CountryUniversitiesPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const country = countries.find((c) => c.slug === slug);
  if (!country) notFound();

  const isEnabled = enabledCountrySlugs.includes(slug);
  const universities = universitiesBySlug[slug] ?? [];

  if (!isEnabled) {
    return (
      <>
        <PageHero
          eyebrow="Universities"
          title={`Universities in ${country.name}`}
          description="This destination's university list is being finalized."
        />
        <section className="bg-surface py-24">
          <Container>
            <div className="mx-auto flex max-w-lg flex-col items-center gap-4 rounded-2xl border border-slate-200 bg-white p-10 text-center shadow-sm">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-blue/10 text-brand-blue">
                <Clock size={26} />
              </div>
              <h2 className="font-display text-xl text-brand-deep">Coming soon</h2>
              <p className="text-sm text-slate-500">
                We&apos;re still finalizing the university list for {country.name}. In the
                meantime, talk to a counselor for the latest recommendations, or check out
                the destinations already live.
              </p>
              <div className="mt-2 flex flex-col gap-3 sm:flex-row">
                <Button href="/universities" variant="secondary">
                  Back to Universities
                </Button>
                <Button href="/contact" variant="primary">
                  Talk to a Counselor
                </Button>
              </div>
            </div>
          </Container>
        </section>
      </>
    );
  }

  return (
    <>
      <PageHero
        eyebrow="Universities"
        title={`Universities in ${country.name}`}
        description={`Browse ${country.universityCount} accredited universities in ${country.name} — filter by type or search by program to shortlist your options.`}
      />

      <section className="bg-surface py-24">
        <Container>
          <div className="mb-8 rounded-2xl border border-brand-blue/20 bg-brand-blue/5 p-4 text-sm text-slate-600">
            University details shown here (rankings, programs) are for guidance only.
            Tuition and intake dates are being verified with each university and will be
            added soon —{" "}
            <Link href="/contact" className="font-semibold text-brand-blue hover:text-brand-deep">
              contact a counselor
            </Link>{" "}
            for the latest information.
          </div>

          <UniversityFilterList universities={universities} />
        </Container>
      </section>

      <CTASection
        title={`Ready to apply in ${country.name}?`}
        description="Book a free consultation and we'll help you shortlist the right universities and manage every application deadline."
      />
    </>
  );
}
