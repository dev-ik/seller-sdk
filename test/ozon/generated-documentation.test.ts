import { readFile, readdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";
import { ozonDomainAliases } from "../../packages/ozon/src/domain-methods.js";

const projectDirectory = fileURLToPath(new URL("../..", import.meta.url));

describe("generated Ozon documentation", () => {
  it("documents every public domain method and reference entry", async () => {
    const manifest = JSON.parse(
      await readFile(
        path.join(projectDirectory, "docs/ozon/endpoints.json"),
        "utf8",
      ),
    ) as {
      operations: readonly { sdkMethod: string; documentation: string }[];
    };
    const [domainApi, reference] = await Promise.all([
      readFile(
        path.join(
          projectDirectory,
          "packages/ozon/src/domain-api.generated.ts",
        ),
        "utf8",
      ),
      readFile(
        path.join(projectDirectory, "docs/ozon/API-REFERENCE.md"),
        "utf8",
      ),
    ]);

    for (const operation of manifest.operations) {
      expect(domainApi).toContain(`readonly ${operation.sdkMethod}:`);
      expect(domainApi).toContain(
        `@see [Ozon Seller API](${operation.documentation})`,
      );
      expect(reference).toContain(`### \`${operation.sdkMethod}\``);
    }

    const aliases = Object.values(ozonDomainAliases).flatMap((domainAliases) =>
      Object.entries(domainAliases),
    );
    for (const [alias, versionedMethod] of aliases) {
      expect(domainApi).toContain(`readonly ${alias}:`);
      expect(reference).toContain(`\`${alias}\` → \`${versionedMethod}\``);
    }

    expect(domainApi.match(/@see \[Ozon Seller API\]/g)).toHaveLength(
      manifest.operations.length + aliases.length,
    );
    expect(reference.match(/^### `/gm)).toHaveLength(
      manifest.operations.length,
    );
  });

  it("keeps OpenAPI descriptions on request fields", async () => {
    const endpointDirectory = path.join(
      projectDirectory,
      "packages/ozon/src/endpoints",
    );
    const files = await readdir(endpointDirectory, { recursive: true });
    const typeFiles = files.filter((fileName) => fileName.endsWith("types.ts"));
    const sources = await Promise.all(
      typeFiles.map((fileName) =>
        readFile(path.join(endpointDirectory, fileName), "utf8"),
      ),
    );
    const markerCount = sources.reduce(
      (total, source) =>
        total + (source.match(/seller-sdk:ozon-openapi/g)?.length ?? 0),
      0,
    );

    expect(markerCount).toBeGreaterThanOrEqual(1_400);
  });

  it("keeps unambiguous OpenAPI enum descriptions on OzonValues", async () => {
    const values = await readFile(
      path.join(projectDirectory, "packages/ozon/src/values.ts"),
      "utf8",
    );

    expect(values).toContain("/** Все товары, кроме архивных. */");
    expect(values).toContain('All: "ALL"');
    expect(values).toContain("/** Товары, которые видны покупателям. */");
    expect(values).toContain('Visible: "VISIBLE"');

    const documentedProperties = values.match(/^ {4}\/\*\* .* \*\/$/gm);
    expect(documentedProperties?.length).toBeGreaterThanOrEqual(800);
  });

  it("does not lift a deprecated response field onto its operation", async () => {
    const [domainApi, productInfoTypes] = await Promise.all([
      readFile(
        path.join(
          projectDirectory,
          "packages/ozon/src/domain-api.generated.ts",
        ),
        "utf8",
      ),
      readFile(
        path.join(
          projectDirectory,
          "packages/ozon/src/endpoints/product/info/list/types.ts",
        ),
        "utf8",
      ),
    ]);
    const methodPosition = domainApi.indexOf("readonly getProductInfoList:");
    const documentationStart = domainApi.lastIndexOf("/**", methodPosition);
    const methodDocumentation = domainApi.slice(
      documentationStart,
      methodPosition,
    );

    expect(methodPosition).toBeGreaterThan(0);
    expect(methodDocumentation).not.toContain("@deprecated");
    expect(productInfoTypes).toContain(
      "@deprecated Поле помечено устаревшим в OpenAPI Ozon.",
    );
  });
});
