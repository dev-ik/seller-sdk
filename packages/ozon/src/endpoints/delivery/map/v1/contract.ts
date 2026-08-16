import { array, boolean, object, string, type Schema } from "@safe-shape/core";
import { integerSchema } from "../../../../contracts/integer.js";
import { deliveryCoordinatesSchema } from "../../shared/v1/contract.js";
import type {
  GetDeliveryMapV1Response,
  OzonDeliveryMapCluster,
} from "./types.js";

const viewportSchema = object({
  left_bottom: deliveryCoordinatesSchema.optional(),
  right_top: deliveryCoordinatesSchema.optional(),
});

const clusterSchema: Schema<OzonDeliveryMapCluster> = object({
  coordinate: deliveryCoordinatesSchema.optional(),
  is_same_building: boolean().optional(),
  map_point_ids: array(string()).optional(),
  points_count: integerSchema.optional(),
  viewport: viewportSchema.optional(),
});

export const getDeliveryMapV1ResponseSchema: Schema<GetDeliveryMapV1Response> =
  object({ clusters: array(clusterSchema).optional() });
