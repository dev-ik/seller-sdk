import {
  array,
  boolean,
  literal,
  object,
  string,
  union,
  type Schema,
} from "@safe-shape/core";
import type { CreateFbpAcceptanceActV1Response } from "./types.js";

export const createFbpAcceptanceActV1ResponseSchema: Schema<CreateFbpAcceptanceActV1Response> =
  object({
    errors: array(
      union([
        literal("CREATE_ACT_ERROR_REASON_UNSPECIFIED"),
        literal("INVALID_ORDER_TYPE"),
      ]),
    ).optional(),
    file_uuid: string().optional(),
    is_success: boolean().optional(),
  });
