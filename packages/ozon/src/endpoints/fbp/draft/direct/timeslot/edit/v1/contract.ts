import { array, literal, object, union, type Schema } from "@safe-shape/core";
import { integerSchema } from "../../../../../../../contracts/integer.js";
import type { EditFbpDirectTimeslotV1Response } from "./types.js";
const reason = union([
  literal("RESERVE_FAILURE_TYPE_UNSPECIFIED"),
  literal("REQUEST_VALIDATION"),
  literal("INVALID_RESERVE"),
  literal("LOGISTICS_REASON"),
  literal("SCHEDULE_REASON"),
  literal("NO_CAPACITY"),
]);
export const editFbpDirectTimeslotV1ResponseSchema: Schema<EditFbpDirectTimeslotV1Response> =
  object({
    error_reasons: array(reason).optional(),
    row_version: integerSchema.optional(),
  });
