import { readFile } from "node:fs/promises";

// Archived operations remain available to existing consumers. They are never
// merged into the byte-for-byte official snapshot or counted as current paths.
export async function readOzonSpecification() {
  const current = JSON.parse(
    await readFile(
      new URL("../docs/ozon/swagger.json", import.meta.url),
      "utf8",
    ),
  );
  const legacy = JSON.parse(
    await readFile(
      new URL("../docs/ozon/legacy-operations.json", import.meta.url),
      "utf8",
    ),
  );
  for (const path of Object.keys(legacy.paths)) {
    if (current.paths[path]) {
      throw new Error(
        `Archived Ozon path is present in the current snapshot: ${path}`,
      );
    }
  }
  return {
    ...current,
    paths: { ...legacy.paths, ...current.paths },
    components: {
      ...current.components,
      schemas: { ...legacy.components.schemas, ...current.components.schemas },
    },
  };
}
