import { array, object, type Schema } from "@safe-shape/core";
import { integerSchema } from "../../../../../contracts/integer.js";
import { deliveryCoordinatesSchema } from "../../../shared/v1/contract.js";
import type {
  ListDeliveryPointsV1Response,
  OzonDeliveryPointListItem,
} from "./types.js";

const pointSchema: Schema<OzonDeliveryPointListItem> = object({
  coordinate: deliveryCoordinatesSchema.optional(),
  map_point_id: integerSchema.optional(),
});

export const listDeliveryPointsV1ResponseSchema: Schema<ListDeliveryPointsV1Response> =
  object({ points: array(pointSchema).optional() });
