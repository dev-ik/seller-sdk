import { boolean, object, type Schema } from "@safe-shape/core";
import type { CheckDeliveryAvailabilityV1Response } from "./types.js";

export const checkDeliveryAvailabilityV1ResponseSchema: Schema<CheckDeliveryAvailabilityV1Response> =
  object({ is_possible: boolean().optional() });
