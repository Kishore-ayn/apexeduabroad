import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import Container from "./Container";
import { areasServed, countries, navLinks, services, site } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-brand-deep text-white/80">
      <Container className="grid grid-cols-1 gap-10 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white p-1.5">
              <Image
                src="/logo.jpeg"
                alt={site.name}
                width={1254}
                height={1254}
                className="h-full w-full rounded-md object-contain"
              />
            </span>
            <p className="font-display text-xl text-white">
              Apex <span className="bg-cta-gradient bg-clip-text text-transparent">EduAbroad</span>
            </p>
          </div>
          <p className="mt-4 text-sm leading-relaxed">
            Trusted guidance for students building their future abroad — from
            first consultation to life on campus.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-white">
            Explore
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition-colors hover:bg-cta-gradient hover:bg-clip-text hover:text-transparent">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-white">
            Destinations
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            {countries.slice(0, 6).map((c) => (
              <li key={c.slug}>
                <Link href={`/destinations/${c.slug}`} className="transition-colors hover:bg-cta-gradient hover:bg-clip-text hover:text-transparent">
                  {c.name}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/destinations" className="text-white/80 transition-colors hover:bg-cta-gradient hover:bg-clip-text hover:text-transparent">
                View all →
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-white">
            Contact
          </p>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <Phone size={16} className="mt-0.5 shrink-0 text-white/80" />
              <span className="flex flex-col">
                <a href={`tel:+${site.phoneRaw}`} className="transition-colors hover:bg-cta-gradient hover:bg-clip-text hover:text-transparent">
                  {site.phoneDisplay}
                </a>
                <a href={`tel:+${site.phoneRaw2}`} className="transition-colors hover:bg-cta-gradient hover:bg-clip-text hover:text-transparent">
                  {site.phoneDisplay2}
                </a>
              </span>
            </li>
            <li className="flex items-start gap-2">
              <Mail size={16} className="mt-0.5 shrink-0 text-white/80" />
              <a href={`mailto:${site.email}`} className="transition-colors hover:bg-cta-gradient hover:bg-clip-text hover:text-transparent">
                {site.email}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin size={16} className="mt-0.5 shrink-0 text-white/80" />
              <a
                href={site.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:bg-cta-gradient hover:bg-clip-text hover:text-transparent"
              >
                {site.address}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <Clock size={16} className="mt-0.5 shrink-0 text-white/80" />
              <span>{site.workingHours}</span>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10 py-6">
        <Container className="flex flex-col items-center gap-3 text-xs text-white/50">
          <p className="text-center leading-relaxed">
            Serving students across {areasServed.join(", ")}, and beyond.
          </p>
          <div className="flex flex-col items-center justify-between gap-3 sm:flex-row sm:w-full">
            <p>© {new Date().getFullYear()} Apex EduAbroad. All rights reserved.</p>
            <p>Services: {services.slice(0, 3).map((s) => s.title).join(" · ")} and more</p>
          </div>
        </Container>
      </div>
    </footer>
  );
}
