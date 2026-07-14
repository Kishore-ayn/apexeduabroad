import Image from "next/image";
import { ExternalLink, GraduationCap, MapPin } from "lucide-react";
import Reveal from "./Reveal";
import { accentBg, type Accent } from "@/lib/accent";

export type University = {
  id: string;
  name: string;
  city: string;
  state: string;
  website: string;
  type: "Public" | "Private";
  popularPrograms: string[];
  qsRanking: number | null;
  logo?: string | null;
};

const typeAccent: Record<"Public" | "Private", Accent> = {
  Public: "blue",
  Private: "violet",
};

export default function UniversityCard({
  university,
  index = 0,
}: {
  university: University;
  index?: number;
}) {
  const accent = typeAccent[university.type];

  return (
    <Reveal delay={Math.min(index, 8) * 0.04} className="h-full">
      <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
        <div className="relative flex h-36 items-center justify-center bg-cream-50 px-8 py-6">
          <span
            className={`absolute right-4 top-4 rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-white ${accentBg[accent]}`}
          >
            {university.type}
          </span>

          {university.logo ? (
            <Image
              src={university.logo}
              alt={`${university.name} logo`}
              width={160}
              height={80}
              className="max-h-full w-auto max-w-full object-contain transition-transform duration-500 ease-out group-hover:scale-105"
            />
          ) : (
            <GraduationCap className="text-navy-950/20" size={40} strokeWidth={1.5} />
          )}
        </div>

        <div className="flex flex-1 flex-col p-5">
          <h3 className="font-display text-lg leading-snug text-navy-950">{university.name}</h3>

          <p className="mt-1.5 flex items-center gap-1.5 text-xs text-ink-500">
            <MapPin size={13} className="shrink-0" />
            {university.city}, {university.state}
          </p>

          {university.qsRanking && (
            <div className="mt-2">
              <span className="inline-flex items-center gap-1 rounded-full bg-brand-flame/10 px-2.5 py-1 text-xs font-semibold text-brand-flame">
                QS World Ranking #{university.qsRanking}
              </span>
            </div>
          )}

          <a
            href={university.website}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto inline-flex items-center gap-1.5 pt-3 text-sm font-semibold text-navy-950 transition-colors hover:text-brand-orange"
          >
            Visit Website
            <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </Reveal>
  );
}
