import { array, object, string, type Schema } from "@safe-shape/core";
import { integerSchema } from "../../../../contracts/integer.js";
import type {
  ListDeliveryPolygonsV1Response,
  OzonDeliveryPolygon,
} from "./types.js";

const polygonSchema: Schema<OzonDeliveryPolygon> = object({
  coordinates: string().optional(),
  polygon_id: integerSchema.optional(),
  time: integerSchema.optional(),
});

export const listDeliveryPolygonsV1ResponseSchema: Schema<ListDeliveryPolygonsV1Response> =
  object({ polygons: array(polygonSchema).optional() });
