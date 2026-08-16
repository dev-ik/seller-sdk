import { array, object, string } from "@safe-shape/core";
import { describe, expect, it } from "vitest";
import { ResponseValidationError } from "../../../packages/core/src/index.js";
import { parseOzonResponse } from "../../../packages/ozon/src/parse-response.js";

const proofSchema = object({
  result: object({
    id: string(),
  }),
});

describe("SafeShape response boundary", () => {
  it("returns a typed validated response", () => {
    const result = parseOzonResponse(
      proofSchema,
      { result: { id: "product-1" } },
      "ozon.proof",
    );

    expect(result.result.id).toBe("product-1");
  });

  it("translates SafeShape failures without retaining raw input", () => {
    const rawSecret = "raw-secret-value";

    try {
      parseOzonResponse(
        proofSchema,
        { result: { id: 10 }, extra: rawSecret },
        "ozon.proof",
      );
      throw new Error("Expected response validation to fail.");
    } catch (error) {
      expect(error).toBeInstanceOf(ResponseValidationError);
      const validationError = error as ResponseValidationError;
      expect(validationError.operationId).toBe("ozon.proof");
      expect(validationError.issues.map((issue) => issue.path)).toEqual([
        ["result", "id"],
      ]);
      expect(JSON.stringify(validationError)).not.toContain(rawSecret);
    }
  });

  it("normalizes undocumented nulls and additional response properties", () => {
    const result = parseOzonResponse(
      object({
        result: object({
          id: string(),
          optional_note: string().optional(),
        }),
      }),
      {
        result: {
          id: "product-1",
          optional_note: null,
          received_at_sorting_center: "2026-08-16T10:00:00Z",
        },
        future_root_field: true,
      },
      "ozon.compatible-response",
    );

    expect(result).toEqual({ result: { id: "product-1" } });
  });

  it("preserves null when the response contract explicitly allows it", () => {
    const result = parseOzonResponse(
      object({ expires_at: string().nullable().optional() }),
      { expires_at: null },
      "ozon.explicit-null",
    );

    expect(result).toEqual({ expires_at: null });
  });

  it("does not normalize nulls in required properties or array items", () => {
    expect(() =>
      parseOzonResponse(
        object({ result: object({ id: string() }) }),
        { result: { id: null } },
        "ozon.required-null",
      ),
    ).toThrow(ResponseValidationError);

    expect(() =>
      parseOzonResponse(
        object({ items: array(object({ id: string() })) }),
        { items: [null] },
        "ozon.null-array-item",
      ),
    ).toThrow(ResponseValidationError);
  });
});
