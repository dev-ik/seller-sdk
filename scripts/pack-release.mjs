import { execFileSync } from "node:child_process";
import { mkdirSync, readFileSync, rmSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const projectDirectory = dirname(dirname(fileURLToPath(import.meta.url)));
const outputDirectory = join(projectDirectory, "release-artifacts");
const packageDirectories = [
  join(projectDirectory, "packages", "ozon"),
  join(projectDirectory, "packages", "wb"),
  join(projectDirectory, "packages", "seller-sdk"),
];

rmSync(outputDirectory, { recursive: true, force: true });
mkdirSync(outputDirectory, { recursive: true });

for (const packageDirectory of packageDirectories) {
  execFileSync("pnpm", ["pack", "--pack-destination", outputDirectory], {
    cwd: packageDirectory,
    stdio: "inherit",
  });
}

const versions = packageDirectories.map((packageDirectory) =>
  JSON.parse(readFileSync(join(packageDirectory, "package.json"), "utf8")),
);
console.log(
  `Prepared release artifacts for ${versions.map(({ name, version }) => `${name}@${version}`).join(" and ")}.`,
);
