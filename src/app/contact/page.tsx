import type { Metadata } from "next";
import { Phone, Mail, MapPin, MessageCircle, Clock } from "lucide-react";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import { site } from "@/lib/data";
import { accentBg, type Accent } from "@/lib/accent";

export const metadata: Metadata = {
  title: "Contact Us | Overseas Education Consultants Near You – Apex EduAbroad",
  description:
    "Get in touch with Apex EduAbroad, Visakhapatnam's trusted overseas education consultancy, for a free consultation — by phone, WhatsApp, or email.",
};

const contactCards: {
  icon: typeof Phone;
  title: string;
  value: string;
  href?: string;
  accent: Accent;
}[] = [
  {
    icon: Phone,
    title: "Call Us",
    value: `${site.phoneDisplay} / ${site.phoneDisplay2}`,
    href: `tel:+${site.phoneRaw}`,
    accent: "blue",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    value: "Chat with a counselor",
    href: `https://wa.me/${site.phoneRaw}?text=${encodeURIComponent(site.whatsappMessage)}`,
    accent: "orange",
  },
  {
    icon: Mail,
    title: "Email Us",
    value: site.email,
    href: `mailto:${site.email}`,
    accent: "violet",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    value: site.address,
    href: site.googleMapsUrl,
    accent: "flame",
  },
  {
    icon: Clock,
    title: "Working Hours",
    value: site.workingHours,
    href: undefined,
    accent: "magenta",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get In Touch"
        title="Let's plan your study-abroad journey"
        description="Book a free consultation — no pressure, no obligation. Just honest guidance on your options."
      />

      <section className="bg-surface py-24">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.2fr]">
            <div>
              <Reveal>
                <h2 className="font-display bg-brand-gradient bg-clip-text text-2xl text-transparent">
                  Reach us directly
                </h2>
              </Reveal>
              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1">
                {contactCards.map((card, i) => (
                  <Reveal key={card.title} delay={i * 0.06}>
                    {card.href ? (
                      <a
                        href={card.href}
                        target={card.href.startsWith("http") ? "_blank" : undefined}
                        rel={card.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-colors hover:border-slate-300"
                      >
                        <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-white ${accentBg[card.accent]}`}>
                          <card.icon size={20} />
                        </div>
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                            {card.title}
                          </p>
                          <p className="mt-1 text-sm font-medium text-brand-deep">
                            {card.value}
                          </p>
                        </div>
                      </a>
                    ) : (
                      <div className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                        <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-white ${accentBg[card.accent]}`}>
                          <card.icon size={20} />
                        </div>
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                            {card.title}
                          </p>
                          <p className="mt-1 text-sm font-medium text-brand-deep">
                            {card.value}
                          </p>
                        </div>
                      </div>
                    )}
                  </Reveal>
                ))}
              </div>
            </div>

            <Reveal delay={0.1}>
              <div>
                <h2 className="font-display bg-brand-gradient bg-clip-text text-2xl text-transparent">
                  Send us a message
                </h2>
                <p className="mt-2 text-sm text-slate-500">
                  Fill out the form and our team will get back to you within one business day.
                </p>
                <div className="mt-6">
                  <ContactForm />
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
