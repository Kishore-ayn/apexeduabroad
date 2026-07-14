// Aggregates every per-country university list into a single lookup, keyed
// by the same country slugs used in src/lib/data.ts (`countries[].slug`), so
// this data can be joined against the existing destinations content.

import { universities as usa } from "./usa";
import { universities as uk } from "./uk";
import { universities as canada } from "./canada";
import { universities as australia } from "./australia";
import { universities as germany } from "./germany";
import { universities as ireland } from "./ireland";
import { universities as newZealand } from "./new-zealand";
import { universities as france } from "./france";
import { universities as singapore } from "./singapore";
import { universities as uae } from "./uae";
import { universities as otherEuropeanCountries } from "./other-european-countries";

export const universitiesByCountry = {
  usa,
  uk,
  canada,
  australia,
  germany,
  ireland,
  "new-zealand": newZealand,
  france,
  singapore,
  uae,
  "other-european-countries": otherEuropeanCountries,
};

// Metadata for rendering country cards — mirrors the slugs/flags used in
// src/lib/data.ts `countries` so both datasets can be joined by slug.
export const countries = [
  { name: "United States", slug: "usa", flagEmoji: "🇺🇸", universityCount: usa.length },
  { name: "United Kingdom", slug: "uk", flagEmoji: "🇬🇧", universityCount: uk.length },
  { name: "Canada", slug: "canada", flagEmoji: "🇨🇦", universityCount: canada.length },
  { name: "Australia", slug: "australia", flagEmoji: "🇦🇺", universityCount: australia.length },
  { name: "Germany", slug: "germany", flagEmoji: "🇩🇪", universityCount: germany.length },
  { name: "Ireland", slug: "ireland", flagEmoji: "🇮🇪", universityCount: ireland.length },
  { name: "New Zealand", slug: "new-zealand", flagEmoji: "🇳🇿", universityCount: newZealand.length },
  { name: "France", slug: "france", flagEmoji: "🇫🇷", universityCount: france.length },
  { name: "Singapore", slug: "singapore", flagEmoji: "🇸🇬", universityCount: singapore.length },
  { name: "Dubai, UAE", slug: "uae", flagEmoji: "🇦🇪", universityCount: uae.length },
  {
    name: "Other European Countries",
    slug: "other-european-countries",
    flagEmoji: "🇪🇺",
    universityCount: otherEuropeanCountries.length,
  },
];

// Staged rollout: the Universities section is being built out one country
// at a time. Add a slug here once its page has been reviewed and approved —
// everything else renders a "coming soon" state instead of the full list.
export const enabledCountrySlugs = [
  "canada",
  "usa",
  "uk",
  "australia",
  "germany",
  "ireland",
  "new-zealand",
  "france",
  "singapore",
  "uae",
  "other-european-countries",
];

export default universitiesByCountry;
