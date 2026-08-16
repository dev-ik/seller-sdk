import { array, object, type Schema } from "@safe-shape/core";
import { dropOffPointSchema } from "../../../../shared/v1/contract.js";
import type { ListDropOffPointsForWarehouseCreateV1Response } from "./types.js";

export const listDropOffPointsForWarehouseCreateV1ResponseSchema: Schema<ListDropOffPointsForWarehouseCreateV1Response> =
  object({ points: array(dropOffPointSchema).optional() });
