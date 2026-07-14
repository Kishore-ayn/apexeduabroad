"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import clsx from "clsx";
import Container from "./Container";
import Button from "./Button";
import { navLinks, site } from "@/lib/data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={clsx(
        "sticky top-0 z-50 bg-brand-deep/95 backdrop-blur-sm transition-shadow duration-300",
        scrolled && "shadow-lg shadow-black/10"
      )}
    >
      <Container className="flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white p-1.5">
            <Image
              src="/logo.jpeg"
              alt={site.name}
              width={1254}
              height={1254}
              className="h-full w-full rounded-md object-contain"
              priority
            />
          </span>
          <span className="hidden font-display text-lg text-white sm:inline">
            Apex <span className="bg-cta-gradient bg-clip-text text-transparent">EduAbroad</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-5 xl:gap-6 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="whitespace-nowrap text-sm font-medium text-white/90 transition-colors hover:bg-cta-gradient hover:bg-clip-text hover:text-transparent"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={`tel:+${site.phoneRaw2}`}
            className="group hidden items-center gap-2 whitespace-nowrap text-sm font-medium text-white/90 2xl:flex"
          >
            <Phone size={16} className="shrink-0 transition-colors group-hover:text-brand-orange" />
            <span className="transition-colors group-hover:bg-cta-gradient group-hover:bg-clip-text group-hover:text-transparent">
              {site.phoneDisplay2}
            </span>
          </a>
          <Button href="/contact" variant="primary" className="whitespace-nowrap">
            Free Consultation
          </Button>
        </div>

        <button
          className="text-white lg:hidden"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </Container>

      {open && (
        <div className="border-t border-white/10 bg-brand-deep lg:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="group rounded-lg px-3 py-3 text-sm font-medium text-white/90 hover:bg-white/10"
              >
                <span className="transition-colors group-hover:bg-cta-gradient group-hover:bg-clip-text group-hover:text-transparent">
                  {link.label}
                </span>
              </Link>
            ))}
            <div className="mt-3 flex flex-col gap-3 px-3">
              <a
                href={`tel:+${site.phoneRaw2}`}
                className="flex items-center gap-2 text-sm font-medium text-white/90"
              >
                <Phone size={16} />
                {site.phoneDisplay2}
              </a>
              <Button href="/contact" variant="primary" className="w-full">
                Free Consultation
              </Button>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
