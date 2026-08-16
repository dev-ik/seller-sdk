import { array, literal, object, union, type Schema } from "@safe-shape/core";
import { integerSchema } from "../../../../../../../contracts/integer.js";
import type { EditFbpDirectOrderTimeslotV1Response } from "./types.js";

export const editFbpDirectOrderTimeslotV1ResponseSchema: Schema<EditFbpDirectOrderTimeslotV1Response> =
  object({
    error_reasons: array(
      union([
        literal("RESERVE_FAILURE_TYPE_UNSPECIFIED"),
        literal("REQUEST_VALIDATION"),
        literal("INVALID_RESERVE"),
        literal("LOGISTICS_REASON"),
        literal("SCHEDULE_REASON"),
      ]),
    ).optional(),
    row_version: integerSchema.optional(),
  });
