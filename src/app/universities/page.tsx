import type { Metadata } from "next";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import UniversityCountryCard from "@/components/UniversityCountryCard";
import CTASection from "@/components/CTASection";
import { countries, enabledCountrySlugs } from "@/data/universities";
import type { Accent } from "@/lib/accent";

const rotation: Accent[] = ["flame", "violet", "blue", "magenta", "orange"];

export const metadata: Metadata = {
  title: "Universities | Explore Top Universities by Destination – Apex EduAbroad",
  description:
    "Browse top universities across the USA, UK, Canada, Australia, Germany, Ireland, New Zealand, France, Singapore, Dubai (UAE), and more.",
};

export default function UniversitiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Universities"
        title="Explore universities by destination"
        description="Pick a country to browse real, accredited universities — filter by type and program to shortlist your options."
      />

      <section className="bg-surface py-24">
        <Container>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {countries.map((country, i) => (
              <UniversityCountryCard
                key={country.slug}
                country={country}
                index={i}
                accent={rotation[i % rotation.length]}
                enabled={enabledCountrySlugs.includes(country.slug)}
              />
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        title="Not sure which university fits you?"
        description="Talk to a counselor and we'll help you shortlist universities based on your scores, budget, and career goals."
      />
    </>
  );
}
