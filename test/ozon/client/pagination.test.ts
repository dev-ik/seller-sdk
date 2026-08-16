import { describe, expect, it } from "vitest";
import {
  collectOzonItems,
  paginateOzonItems,
  paginateOzonPages,
} from "../../../packages/ozon/src/index.js";

describe("Ozon pagination helpers", () => {
  it("iterates pages and items without accumulating them", async () => {
    const pages = paginateOzonPages({
      initialInput: 1,
      fetchPage: async (page) => ({ page, items: [page * 10] }),
      getNextInput: ({ input }) => (input < 3 ? input + 1 : undefined),
    });
    const pageNumbers = [];
    for await (const page of pages) pageNumbers.push(page.page);
    expect(pageNumbers).toEqual([1, 2, 3]);

    const items = paginateOzonItems({
      initialInput: 1,
      fetchPage: async (page) => ({ page, items: [page * 10] }),
      getNextInput: ({ input }) => (input < 3 ? input + 1 : undefined),
      getItems: (page) => page.items,
    });
    expect(await collectOzonItems(items, { limit: 2 })).toEqual([10, 20]);
  });

  it("requires explicit safe bounds for page and collection limits", async () => {
    await expect(
      paginateOzonPages({
        initialInput: 1,
        fetchPage: async (page) => page,
        getNextInput: () => undefined,
        maxPages: 0,
      }).next(),
    ).rejects.toThrow(RangeError);
    await expect(
      collectOzonItems(
        (async function* () {
          yield 1;
        })(),
        { limit: 0 },
      ),
    ).rejects.toThrow(RangeError);
  });
});
