import { array, boolean, object, type Schema } from "@safe-shape/core";
import { integerSchema } from "../../../../../../contracts/integer.js";
import { warehouseReturnPointSchema } from "../../../return-point/shared/v1/contract.js";
import type { GetFbsWarehouseReturnMileInfoV1Response } from "./types.js";

export const getFbsWarehouseReturnMileInfoV1ResponseSchema: Schema<GetFbsWarehouseReturnMileInfoV1Response> =
  object({
    return_mile_settings: array(
      object({
        is_return_mile_required: boolean().optional(),
        return_point: warehouseReturnPointSchema.optional(),
        warehouse_id: integerSchema.optional(),
      }),
    ).optional(),
  });
