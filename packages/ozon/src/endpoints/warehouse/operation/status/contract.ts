import { literal, object, string, union, type Schema } from "@safe-shape/core";
import { integerSchema } from "../../../../contracts/integer.js";
import type { GetFbsWarehouseOperationStatusResponse } from "./types.js";

const operationStatusSchema = union([
  literal("UNSPECIFIED"),
  literal("IN_PROGRESS"),
  literal("SUCCESS"),
  literal("ERROR"),
]);
const operationTypeSchema = union([
  literal("UNSPECIFIED"),
  literal("CREATE_FBS_WAREHOUSE"),
  literal("UPDATE_FBS_WAREHOUSE"),
  literal("SET_FIRST_MILE"),
  literal("WAREHOUSE_ENABLE_DISABLE"),
  literal("WAREHOUSE_PAUSE_UNPAUSE"),
]);

export const getFbsWarehouseOperationStatusResponseSchema: Schema<GetFbsWarehouseOperationStatusResponse> =
  object({
    error: object({
      code: string().optional(),
      message: string().optional(),
    }).optional(),
    result: object({ entity_id: integerSchema.optional() }).optional(),
    status: operationStatusSchema.optional(),
    type: operationTypeSchema.optional(),
  });
