import { createHash } from "node:crypto";
import { readFile } from "node:fs/promises";
import { describe, expect, it } from "vitest";

interface SwaggerMetadata {
  readonly sha256: string;
  readonly bytes: number;
  readonly openapiVersion: string;
  readonly documentVersion: string;
  readonly paths: number;
  readonly operations: number;
  readonly schemas: number;
}

describe("local Ozon OpenAPI source", () => {
  it("matches its verified metadata", async () => {
    const specificationUrl = new URL(
      "../../docs/ozon/swagger.json",
      import.meta.url,
    );
    const metadataUrl = new URL(
      "../../docs/ozon/swagger.meta.json",
      import.meta.url,
    );
    const specificationText = await readFile(specificationUrl, "utf8");
    const specification = JSON.parse(specificationText) as {
      readonly openapi: string;
      readonly info: { readonly version: number };
      readonly paths: Readonly<Record<string, unknown>>;
      readonly components: {
        readonly schemas: Readonly<Record<string, unknown>>;
      };
    };
    const metadata = JSON.parse(
      await readFile(metadataUrl, "utf8"),
    ) as SwaggerMetadata;
    const operationCount = Object.values(specification.paths).reduce<number>(
      (count, pathItem) =>
        count +
        Object.keys(pathItem as object).filter((method) =>
          ["get", "post", "put", "patch", "delete"].includes(method),
        ).length,
      0,
    );

    expect(Buffer.byteLength(specificationText)).toBe(metadata.bytes);
    expect(createHash("sha256").update(specificationText).digest("hex")).toBe(
      metadata.sha256,
    );
    expect(specification.openapi).toBe(metadata.openapiVersion);
    expect(String(specification.info.version)).toBe(metadata.documentVersion);
    expect(Object.keys(specification.paths)).toHaveLength(metadata.paths);
    expect(operationCount).toBe(metadata.operations);
    expect(Object.keys(specification.components.schemas)).toHaveLength(
      metadata.schemas,
    );
  });
});
