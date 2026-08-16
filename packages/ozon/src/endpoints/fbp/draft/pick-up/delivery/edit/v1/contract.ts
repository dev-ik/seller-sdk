import { object, type Schema } from "@safe-shape/core";
import { integerSchema } from "../../../../../../../contracts/integer.js";
import type { EditFbpPickupDraftDeliveryV1Response } from "./types.js";

export const editFbpPickupDraftDeliveryV1ResponseSchema: Schema<EditFbpPickupDraftDeliveryV1Response> =
  object({ row_version: integerSchema.optional() });
