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
            <li className="flex items-start gap-2">
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                  <path d="M12 2.163c3.204 3.615 5.012 8.232 5.012 13.061 0 4.829-1.808 9.446-5.012 13.061" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M12 12.75a5.25 5.25 0 1 0 0 10.5 5.25 5.25 0 0 0 0-10.5zm0 2.25a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" stroke="currentColor" strokeWidth="1.5"/>
                </svg>
                <span className="flex flex-col">
                  <span className="text-white/80">Instagram</span>
                  <span className="text-xs text-white/60">{site.instagram}</span>
                </span>
              </a>
            </li>
            <li className="flex items-start gap-2">
              <a
                href={site.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="text-white">
                  <path d="M22.675 0h-20.35A2.675 2.675 0 0 0 0 2.675v18.65C0 23.325 2.675 26 5.35 26h5.175V14.7h-3.5v-3.5h3.5V9.502c0-3.006 1.981-4.75 4.525-4.75 1.375 0 2.686.15 2.85.25v2.413h-2.05c-1.5 0-1.795.725-1.795 1.75v2.25h3.35l-.45 3.5h-2.9v14.65H22.675c2.675 0 4.825-2.675 4.825-5.35V2.675A2.675 2.675 0 0 0 22.675 0z"/>
                </svg>
                <span className="flex flex-col">
                  <span className="text-white/80">Facebook</span>
                  <span className="text-xs text-white/60">{site.facebook}</span>
                </span>
              </a>
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
