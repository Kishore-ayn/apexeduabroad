"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import clsx from "clsx";
import UniversityCard, { type University } from "./UniversityCard";

type TypeFilter = "All" | "Public" | "Private";

const typeFilters: TypeFilter[] = ["All", "Public", "Private"];

export default function UniversityFilterList({
  universities,
}: {
  universities: University[];
}) {
  const [query, setQuery] = useState("");
  const [typeFilter, setTypeFilter] = useState<TypeFilter>("All");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return universities.filter((u) => {
      if (typeFilter !== "All" && u.type !== typeFilter) return false;
      if (!q) return true;
      return (
        u.name.toLowerCase().includes(q) ||
        u.city.toLowerCase().includes(q) ||
        u.popularPrograms.some((p) => p.toLowerCase().includes(q))
      );
    });
  }, [universities, query, typeFilter]);

  return (
    <div>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative w-full sm:max-w-sm">
          <Search
            size={18}
            className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
          />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search university, city, or program"
            className="w-full rounded-full border border-slate-200 bg-white py-2.5 pl-10 pr-4 text-sm text-slate-900 outline-none focus:border-brand-blue"
          />
        </div>

        <div className="flex gap-2">
          {typeFilters.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setTypeFilter(t)}
              className={clsx(
                "rounded-full px-4 py-2 text-sm font-semibold transition-colors",
                typeFilter === t
                  ? "bg-brand-blue text-white"
                  : "bg-white text-slate-600 border border-slate-200 hover:border-brand-blue hover:text-brand-blue"
              )}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      <p className="mt-4 text-sm text-slate-500">
        Showing {filtered.length} of {universities.length} universities
      </p>

      {filtered.length > 0 ? (
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((u, i) => (
            <UniversityCard key={u.id} university={u} index={i} />
          ))}
        </div>
      ) : (
        <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-10 text-center text-sm text-slate-500">
          No universities match your search. Try a different keyword or filter.
        </div>
      )}
    </div>
  );
}
