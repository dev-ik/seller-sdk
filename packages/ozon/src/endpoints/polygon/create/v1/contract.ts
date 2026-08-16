import { object, type Schema } from "@safe-shape/core";
import { integerSchema } from "../../../../contracts/integer.js";
import type { CreateDeliveryPolygonV1Response } from "./types.js";

export const createDeliveryPolygonV1ResponseSchema: Schema<CreateDeliveryPolygonV1Response> =
  object({ polygon_id: integerSchema.optional() });
