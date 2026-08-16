import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const projectDirectory = dirname(dirname(fileURLToPath(import.meta.url)));
const rootPackage = readJson("package.json");
const ozonPackage = readJson("packages/ozon/package.json");
const umbrellaPackage = readJson("packages/seller-sdk/package.json");
const versions = new Set([
  rootPackage.version,
  ozonPackage.version,
  umbrellaPackage.version,
]);

if (versions.size !== 1) {
  throw new Error(
    `Версии workspace-пакетов не совпадают: ${[...versions].join(", ")}.`,
  );
}

const version = ozonPackage.version;
if (typeof version !== "string" || !/^\d+\.\d+\.\d+$/.test(version)) {
  throw new Error(`Некорректная версия релиза: ${String(version)}.`);
}
if (version === "0.0.0") {
  throw new Error("Версия публикуемого пакета не должна оставаться 0.0.0.");
}

for (const packageJson of [ozonPackage, umbrellaPackage]) {
  if (packageJson.license !== "MIT") {
    throw new Error(`В ${packageJson.name} должна быть указана лицензия MIT.`);
  }
  if (!packageJson.files?.includes("LICENSE")) {
    throw new Error(`LICENSE не включён в tarball ${packageJson.name}.`);
  }
  if (
    packageJson.repository?.url !==
    "git+https://github.com/dev-ik/seller-sdk.git"
  ) {
    throw new Error(`Некорректный repository URL для ${packageJson.name}.`);
  }
  if (packageJson.publishConfig?.registry !== "https://registry.npmjs.org/") {
    throw new Error(`Некорректный npm registry для ${packageJson.name}.`);
  }
}

const changelog = readFileSync(join(projectDirectory, "CHANGELOG.md"), "utf8");
if (!changelog.includes(`## ${version}`)) {
  throw new Error(`В CHANGELOG.md отсутствует раздел для версии ${version}.`);
}

const tag = process.env["GITHUB_REF_NAME"];
if (process.env["REQUIRE_RELEASE_TAG"] === "true" && tag !== `v${version}`) {
  throw new Error(`Тег ${tag} не соответствует версии v${version}.`);
}

console.log(`Метаданные релиза v${version} согласованы.`);

function readJson(relativePath) {
  return JSON.parse(readFileSync(join(projectDirectory, relativePath), "utf8"));
}
