import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";

const projectDirectory = fileURLToPath(new URL("../../", import.meta.url));

function checkRelease(args: string[], fetchImplementation: string) {
  return spawnSync(
    process.execPath,
    [
      "--import",
      `data:text/javascript,${encodeURIComponent(`globalThis.fetch = ${fetchImplementation};`)}`,
      "scripts/check-release.mjs",
      ...args,
    ],
    {
      cwd: projectDirectory,
      encoding: "utf8",
      env: { ...process.env, REQUIRE_RELEASE_TAG: "false" },
    },
  );
}

describe("release metadata checks", () => {
  it("checks metadata without accessing npm in ordinary CI", () => {
    const result = checkRelease(
      [],
      '() => { throw new Error("Unexpected network access"); }',
    );
    expect(result.status, result.stderr).toBe(0);
  });

  it("allows an unpublished version when preparing a release", () => {
    const result = checkRelease(
      ["--unpublished"],
      "async () => new Response(null, { status: 404 })",
    );
    expect(result.status, result.stderr).toBe(0);
  });

  it("rejects an already published version", () => {
    const result = checkRelease(
      ["--unpublished"],
      "async () => new Response(null, { status: 200 })",
    );
    expect(result.status).not.toBe(0);
    expect(result.stderr).toContain("уже опубликован в npm");
  });

  it("fails closed when the registry is unavailable", () => {
    const result = checkRelease(
      ["--unpublished"],
      "async () => new Response(null, { status: 503 })",
    );
    expect(result.status).not.toBe(0);
    expect(result.stderr).toContain("HTTP 503");
  });
});
