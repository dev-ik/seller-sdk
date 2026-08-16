import { number } from "@safe-shape/core";

/** @internal */
export const integerSchema = number().refine(Number.isInteger, {
  message: "Expected an integer.",
  expected: "integer",
});
