// Builds a static export of the site for Hostinger shared hosting.
//
// The /api/contact route handler can't exist in a static export (Next.js
// errors on any Route Handler that reads the request body), so it's moved
// out of src/app for the duration of this build and restored afterward —
// even if the build fails. The Vercel deployment is untouched; it still
// serves that route for the exported site's contact form to call.

import { existsSync, renameSync } from "node:fs";
import { spawnSync } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

const rootDir = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const apiDir = path.join(rootDir, "src", "app", "api");
const apiBackupDir = path.join(rootDir, "src", "app", "__api-excluded-from-static-build");

const contactApiUrl = process.env.NEXT_PUBLIC_CONTACT_API_URL;
if (!contactApiUrl) {
  console.error(
    "NEXT_PUBLIC_CONTACT_API_URL is not set. Set it to your Vercel deployment's " +
      "contact endpoint, e.g. https://apexeduabroad.vercel.app/api/contact"
  );
  process.exit(1);
}

let moved = false;
let exitCode = 0;
try {
  if (existsSync(apiDir)) {
    renameSync(apiDir, apiBackupDir);
    moved = true;
  }

  const result = spawnSync("npx", ["next", "build"], {
    cwd: rootDir,
    stdio: "inherit",
    shell: true,
    env: { ...process.env, STATIC_EXPORT: "true" },
  });

  exitCode = result.status ?? 1;
} finally {
  if (moved) {
    renameSync(apiBackupDir, apiDir);
  }
}

if (exitCode !== 0) {
  process.exit(exitCode);
}

console.log("\nStatic export ready in ./out — upload its contents to Hostinger's public_html.");
