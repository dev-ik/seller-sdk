import { object, type Schema } from "@safe-shape/core";
import { integerSchema } from "../../../../../../../contracts/integer.js";
import type { EditFbpDropOffOrderDeliveryV1Response } from "./types.js";

export const editFbpDropOffOrderDeliveryV1ResponseSchema: Schema<EditFbpDropOffOrderDeliveryV1Response> =
  object({ row_version: integerSchema.optional() });
