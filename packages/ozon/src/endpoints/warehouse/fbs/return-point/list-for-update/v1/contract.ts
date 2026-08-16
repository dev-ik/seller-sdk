import { array, boolean, object, type Schema } from "@safe-shape/core";
import { integerSchema } from "../../../../../../contracts/integer.js";
import { warehouseReturnPointSchema } from "../../shared/v1/contract.js";
import type { ListReturnPointsForWarehouseUpdateV1Response } from "./types.js";

export const listReturnPointsForWarehouseUpdateV1ResponseSchema: Schema<ListReturnPointsForWarehouseUpdateV1Response> =
  object({
    has_next: boolean().optional(),
    is_selected_point_available: boolean().optional(),
    last_id: integerSchema.optional(),
    points: array(warehouseReturnPointSchema).optional(),
  });
