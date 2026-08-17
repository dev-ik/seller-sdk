import { readFile, readdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";

const projectDirectory = fileURLToPath(new URL("../..", import.meta.url));

describe("marketplace documentation boundaries", () => {
  it("keeps WB documentation independent from Ozon", async () => {
    const files = await focusedDocumentationFiles("wb");

    for (const file of files) {
      const source = await readFile(path.join(projectDirectory, file), "utf8");
      expect(source, file).not.toMatch(/ozon|озон/iu);
    }
  });

  it("keeps Ozon documentation independent from WB", async () => {
    const files = await focusedDocumentationFiles("ozon");

    for (const file of files) {
      const source = await readFile(path.join(projectDirectory, file), "utf8");
      expect(source, file).not.toMatch(
        /wildberries|вайлдберриз|@seller-sdk\/wb|\bWbClient\b|\bWbValues\b|\bwb\./iu,
      );
    }
  });

  it("documents both focused packages at umbrella entry points", async () => {
    const files = ["README.md", "packages/seller-sdk/README.md"];

    for (const file of files) {
      const source = await readFile(path.join(projectDirectory, file), "utf8");
      expect(source, file).toContain("@seller-sdk/ozon");
      expect(source, file).toContain("@seller-sdk/wb");
    }
  });
});

async function focusedDocumentationFiles(
  marketplace: "ozon" | "wb",
): Promise<readonly string[]> {
  const packageDirectory = path.join(
    projectDirectory,
    `packages/${marketplace}`,
  );
  const documentationDirectory = path.join(
    projectDirectory,
    `docs/${marketplace}`,
  );
  const packageFiles = (await readdir(packageDirectory, { recursive: true }))
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => `packages/${marketplace}/${fileName}`);
  const documentationFiles = (
    await readdir(documentationDirectory, { recursive: true })
  )
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => `docs/${marketplace}/${fileName}`);
  const sourceOfTruth =
    marketplace === "ozon"
      ? "docs/OZON-SOURCE-OF-TRUTH.md"
      : "docs/WB-SOURCE-OF-TRUTH.md";

  return [...packageFiles, sourceOfTruth, ...documentationFiles];
}
