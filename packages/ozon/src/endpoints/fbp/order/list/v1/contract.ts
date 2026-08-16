import { array, boolean, object, type Schema } from "@safe-shape/core";
import { integerSchema } from "../../../../../contracts/integer.js";
import { fbpOrderDetailsSchema } from "../../shared/v1/contract.js";
import type { ListFbpOrdersV1Response } from "./types.js";

export const listFbpOrdersV1ResponseSchema: Schema<ListFbpOrdersV1Response> =
  object({
    has_next: boolean().optional(),
    items: array(fbpOrderDetailsSchema).optional(),
    last_id: integerSchema.optional(),
  });
