import type { Metadata } from "next";
import Image from "next/image";
import { Check } from "lucide-react";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import CTASection from "@/components/CTASection";
import { services, serviceChecklist } from "@/lib/data";
import { accentText, type Accent } from "@/lib/accent";

export const metadata: Metadata = {
  title: "Our Services | Study Abroad Consultancy Services – Apex EduAbroad",
  description:
    "Apex EduAbroad's full range of overseas education consultancy services: counselling, admissions, applications, test preparation, visa filing, scholarships, and post-arrival support.",
};

const rotation: Accent[] = ["magenta", "violet", "blue", "flame", "orange"];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Complete support, from first consultation to life abroad"
        description="Every service is built to remove a specific point of friction in the study-abroad process — so nothing is left to chance."
      />

      <section className="bg-surface py-24">
        <Container>
          <div className="space-y-10">
            {services.map((service, i) => {
              const accent = rotation[i % rotation.length];
              return (
                <Reveal key={service.slug} delay={i * 0.05}>
                  <div
                    id={service.slug}
                    className="grid scroll-mt-28 grid-cols-1 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm lg:grid-cols-[320px_1fr]"
                  >
                    <div className="relative h-56 w-full lg:h-full">
                      <Image
                        src={`/services/${service.slug}.jpg`}
                        alt={service.title}
                        fill
                        sizes="(min-width: 1024px) 320px, 100vw"
                        className="object-cover"
                      />
                    </div>
                    <div className="p-8 lg:p-10">
                      <h2 className="font-display text-2xl text-brand-deep">
                        {service.title}
                      </h2>
                      <p className="mt-3 max-w-2xl text-slate-500 leading-relaxed">
                        {service.description}
                      </p>
                      <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                        {service.bullets.map((bullet) => (
                          <li
                            key={bullet}
                            className="flex items-start gap-2 text-sm text-slate-700"
                          >
                            <Check size={16} className={`mt-0.5 shrink-0 ${accentText[accent]}`} />
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="bg-white py-24">
        <Container>
          <SectionHeading
            eyebrow="Full Range of Services"
            title="Everything you need, under one roof"
            description="A complete checklist of what we handle for every student, start to finish."
            accent="blue"
          />
          <div className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {serviceChecklist.map((item, i) => (
              <Reveal key={item} delay={i * 0.02}>
                <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-surface px-4 py-3 text-sm text-slate-700">
                  <Check size={16} className="shrink-0 text-brand-blue" />
                  {item}
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        title="Not sure which service you need?"
        description="Book a free consultation and we'll map out exactly what your journey requires."
      />
    </>
  );
}
