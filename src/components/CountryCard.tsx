import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";
import type { Country } from "@/lib/data";
import { accentText, type Accent } from "@/lib/accent";

export default function CountryCard({
  country,
  index = 0,
  accent = "flame",
}: {
  country: Country;
  index?: number;
  accent?: Accent;
}) {
  return (
    <Reveal delay={index * 0.05}>
      <Link
        href={`/destinations/${country.slug}`}
        className="group relative flex h-60 flex-col justify-end overflow-hidden rounded-2xl shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
      >
        <Image
          src={`/destinations/${country.slug}.jpg`}
          alt={country.name}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/25 to-black/5 transition-opacity duration-300 group-hover:from-black/90" />
        <div className="relative z-10 p-5">
          <h3 className="font-display text-xl text-white drop-shadow-sm">
            {country.name}
          </h3>
          <span className="mt-2 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wide text-white/90">
            Explore
            <ArrowRight
              size={14}
              className={`${accentText[accent]} transition-transform duration-300 group-hover:translate-x-1`}
            />
          </span>
        </div>
      </Link>
    </Reveal>
  );
}
