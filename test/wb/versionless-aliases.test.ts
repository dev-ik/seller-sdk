import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";
import { WB_OPERATION_ALIASES, WbClient } from "../../packages/wb/src/index.js";

const projectDirectory = fileURLToPath(new URL("../..", import.meta.url));
const VERSION_SEGMENT = /V\d+(?=[A-Z]|$)/g;

interface ManifestOperation {
  readonly domain: string;
  readonly methodName: string;
  readonly status: string;
}

interface ManifestAlias {
  readonly domain: string;
  readonly alias: string;
  readonly methodName: string;
}

interface WbManifest {
  readonly operationCount: number;
  readonly aliasCount: number;
  readonly operations: readonly ManifestOperation[];
  readonly aliases: readonly ManifestAlias[];
}

type RuntimeDomain = Readonly<Record<string, unknown>>;

describe("WB versionless operation aliases", () => {
  it("covers every versioned operation and keeps every exact method callable", async () => {
    const manifest = JSON.parse(
      await readFile(
        path.join(projectDirectory, "docs/wb/endpoints.json"),
        "utf8",
      ),
    ) as WbManifest;
    const wb = new WbClient({ token: "test-wb-token" });
    const runtimeClient = wb as unknown as Readonly<
      Record<string, RuntimeDomain>
    >;
    const runtimeAliases = WB_OPERATION_ALIASES as Readonly<
      Record<string, Readonly<Record<string, string>>>
    >;
    const aliasesByName = new Map(
      manifest.aliases.map((entry) => [
        `${entry.domain}.${entry.alias}`,
        entry,
      ]),
    );

    expect(manifest.operations).toHaveLength(manifest.operationCount);
    expect(manifest.aliases).toHaveLength(manifest.aliasCount);
    expect(manifest.aliasCount).toBe(282);
    expect(aliasesByName.size).toBe(manifest.aliasCount);

    for (const operation of manifest.operations) {
      expect(
        runtimeClient[operation.domain]?.[operation.methodName],
      ).toBeTypeOf("function");

      const alias = operation.methodName.replace(VERSION_SEGMENT, "");
      if (alias === operation.methodName) continue;

      expect(
        aliasesByName.has(`${operation.domain}.${alias}`),
        `${operation.domain}.${operation.methodName}`,
      ).toBe(true);
    }

    for (const entry of manifest.aliases) {
      expect(entry.alias).not.toMatch(VERSION_SEGMENT);
      expect(runtimeClient[entry.domain]?.[entry.alias]).toBeTypeOf("function");
      expect(
        runtimeClient[entry.domain]?.[entry.methodName],
        `${entry.domain}.${entry.methodName}`,
      ).toBeTypeOf("function");
      expect(runtimeAliases[entry.domain]?.[entry.alias]).toBe(
        entry.methodName,
      );
    }
  });

  it("selects the newest non-deprecated contract for colliding aliases", async () => {
    const manifest = JSON.parse(
      await readFile(
        path.join(projectDirectory, "docs/wb/endpoints.json"),
        "utf8",
      ),
    ) as WbManifest;
    const operationsByAlias = new Map<string, ManifestOperation[]>();

    for (const operation of manifest.operations) {
      const alias = operation.methodName.replace(VERSION_SEGMENT, "");
      if (alias === operation.methodName) continue;
      const key = `${operation.domain}.${alias}`;
      operationsByAlias.set(key, [
        ...(operationsByAlias.get(key) ?? []),
        operation,
      ]);
    }

    for (const entry of manifest.aliases) {
      const candidates = operationsByAlias.get(
        `${entry.domain}.${entry.alias}`,
      )!;
      const current = candidates.filter(
        (operation) => operation.status !== "deprecated",
      );
      const eligible = current.length > 0 ? current : candidates;
      const expected = [...eligible].sort(
        (left, right) =>
          readVersion(right.methodName) - readVersion(left.methodName),
      )[0]!;

      expect(entry.methodName, `${entry.domain}.${entry.alias}`).toBe(
        expected.methodName,
      );
    }
  });
});

function readVersion(methodName: string): number {
  return Math.max(
    0,
    ...Array.from(methodName.matchAll(/V(\d+)(?=[A-Z]|$)/g), (match) =>
      Number(match[1]),
    ),
  );
}
