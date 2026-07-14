import type { Metadata } from "next";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import CountryCard from "@/components/CountryCard";
import CTASection from "@/components/CTASection";
import { countries } from "@/lib/data";
import type { Accent } from "@/lib/accent";

const rotation: Accent[] = ["flame", "violet", "blue", "magenta", "orange"];

export const metadata: Metadata = {
  title: "Study Destinations | USA, UK, Canada, Australia & More – Apex EduAbroad",
  description:
    "Explore study destinations including the USA, UK, Canada, Australia, Germany, Ireland, New Zealand, France, Dubai (UAE), Singapore, and other European countries.",
};

export default function DestinationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Study Destinations"
        title="Find the right country for your goals"
        description="Every destination offers a different mix of cost, career outcomes, and lifestyle. We help you weigh the trade-offs against what matters most to you."
      />

      <section className="bg-surface py-24">
        <Container>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {countries.map((country, i) => (
              <CountryCard
                key={country.slug}
                country={country}
                index={i}
                accent={rotation[i % rotation.length]}
              />
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        title="Still deciding where to study?"
        description="Talk to a counselor and we'll help you compare destinations based on your budget, scores, and career goals."
      />
    </>
  );
}
