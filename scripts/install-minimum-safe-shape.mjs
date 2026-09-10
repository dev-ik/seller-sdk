import { execFileSync } from "node:child_process";
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

const projectDirectory = fileURLToPath(new URL("../", import.meta.url));
const manifests = [
  "package.json",
  "packages/ozon/package.json",
  "packages/wb/package.json",
  "packages/ym/package.json",
  "packages/seller-sdk/package.json",
].map((path) => {
  const url = new URL(`../${path}`, import.meta.url);
  const manifest = JSON.parse(readFileSync(url, "utf8"));
  const dependencies = manifest.dependencies?.["@safe-shape/core"]
    ? manifest.dependencies
    : manifest.devDependencies;
  return { url, manifest, dependencies };
});
const range = manifests[0].dependencies?.["@safe-shape/core"];
if (
  typeof range !== "string" ||
  !/^\^\d+\.\d+\.\d+$/.test(range) ||
  manifests.some(
    ({ dependencies }) => dependencies?.["@safe-shape/core"] !== range,
  )
) {
  throw new Error("SafeShape must use the same ^x.y.z range in every package.");
}

const minimum = range.slice(1);
// Run only in a disposable checkout: this updates manifests and the lockfile.
for (const { url, manifest, dependencies } of manifests) {
  dependencies["@safe-shape/core"] = minimum;
  writeFileSync(url, `${JSON.stringify(manifest, null, 2)}\n`);
}
execFileSync("pnpm", ["install", "--no-frozen-lockfile"], {
  cwd: projectDirectory,
  stdio: "inherit",
});
for (const { url } of manifests) {
  const installed = JSON.parse(
    readFileSync(
      new URL("node_modules/@safe-shape/core/package.json", url),
      "utf8",
    ),
  );
  if (installed.version !== minimum) {
    throw new Error(
      `Expected SafeShape ${minimum}, installed ${installed.version}.`,
    );
  }
}
console.log(`Testing minimum supported SafeShape ${minimum}.`);
