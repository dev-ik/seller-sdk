import { execFileSync } from "node:child_process";
import { mkdtempSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const projectDirectory = dirname(dirname(fileURLToPath(import.meta.url)));
const temporaryDirectory = mkdtempSync(join(tmpdir(), "seller-sdk-pack-"));

try {
  execFileSync(
    "npm",
    [
      "pack",
      "--dry-run",
      "--workspace",
      "@seller-sdk/ozon",
      "--workspace",
      "seller-sdk",
    ],
    {
      cwd: projectDirectory,
      stdio: "inherit",
      env: {
        ...process.env,
        npm_config_cache: join(temporaryDirectory, "npm-cache"),
      },
    },
  );
} finally {
  rmSync(temporaryDirectory, { recursive: true, force: true });
}
