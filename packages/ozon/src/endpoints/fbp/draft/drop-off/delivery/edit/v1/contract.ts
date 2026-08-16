import { object, type Schema } from "@safe-shape/core";
import { integerSchema } from "../../../../../../../contracts/integer.js";
import type { EditFbpDropOffDeliveryV1Response } from "./types.js";
export const editFbpDropOffDeliveryV1ResponseSchema: Schema<EditFbpDropOffDeliveryV1Response> =
  object({ row_version: integerSchema.optional() });
