import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import type { Service } from "@/lib/data";
import { accentText, type Accent } from "@/lib/accent";

export default function ServiceCard({
  service,
  index = 0,
  accent = "magenta",
}: {
  service: Service;
  index?: number;
  accent?: Accent;
}) {
  return (
    <Reveal delay={index * 0.06}>
      <Link
        href={`/services#${service.slug}`}
        className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
      >
        <div className="relative h-44 w-full overflow-hidden">
          <Image
            src={`/services/${service.slug}.jpg`}
            alt={service.title}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="flex flex-1 flex-col p-7">
          <h3 className="font-display text-lg text-brand-deep">
            {service.title}
          </h3>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-500">
            {service.short}
          </p>
          <span className={`mt-5 inline-flex items-center gap-1 text-sm font-semibold ${accentText[accent]}`}>
            Learn more
            <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </div>
      </Link>
    </Reveal>
  );
}
