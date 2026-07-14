import type { Metadata } from "next";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import TestimonialCard from "@/components/TestimonialCard";
import StatsBar from "@/components/StatsBar";
import CTASection from "@/components/CTASection";
import { testimonials } from "@/lib/data";
import type { Accent } from "@/lib/accent";

const rotation: Accent[] = ["violet", "blue", "magenta", "flame", "orange"];

export const metadata: Metadata = {
  title: "Student Success Stories | Apex EduAbroad",
  description:
    "Read stories from students Apex EduAbroad has guided to universities in Canada, the UK, Australia, Germany, Singapore, Dubai, and beyond.",
};

export default function SuccessStoriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Success Stories"
        title="Real students, real journeys abroad"
        description="Every story here started with the same free consultation you can book today."
      />

      <section className="bg-surface py-24">
        <Container>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <TestimonialCard
                key={t.name}
                testimonial={t}
                index={i}
                accent={rotation[i % rotation.length]}
              />
            ))}
          </div>
        </Container>
      </section>

      <StatsBar />

      <CTASection
        title="Your success story could start here"
        description="Book a free consultation and take the first step toward your own offer letter."
      />
    </>
  );
}
