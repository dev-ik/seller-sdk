import { array, object, type Schema } from "@safe-shape/core";
import { dropOffPointSchema } from "../../../../shared/v1/contract.js";
import type { ListDropOffPointsForWarehouseUpdateV1Response } from "./types.js";

export const listDropOffPointsForWarehouseUpdateV1ResponseSchema: Schema<ListDropOffPointsForWarehouseUpdateV1Response> =
  object({ points: array(dropOffPointSchema).optional() });
