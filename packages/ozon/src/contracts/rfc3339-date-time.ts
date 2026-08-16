import { string } from "@safe-shape/core";

/** @internal */
export const rfc3339DateTimeSchema = string().refine(
  (value) =>
    /^\d{4}-\d{2}-\d{2}[Tt]\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:[Zz]|[+-]\d{2}:\d{2})$/.test(
      value,
    ) && !Number.isNaN(Date.parse(value)),
  {
    message: "Expected an RFC 3339 date-time string.",
    expected: "RFC 3339 date-time string",
  },
);
