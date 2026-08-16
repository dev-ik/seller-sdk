import { array, boolean, object, type Schema } from "@safe-shape/core";
import { integerSchema } from "../../../../../../../contracts/integer.js";
import { fbpDraftValidationErrorSchema } from "../../../shared/v1/contract.js";
import type { EditFbpDirectTplDeliveryDraftV1Response } from "./types.js";

export const editFbpDirectTplDeliveryDraftV1ResponseSchema: Schema<EditFbpDirectTplDeliveryDraftV1Response> =
  object({
    error: object({
      errors: array(fbpDraftValidationErrorSchema).optional(),
    }).optional(),
    is_error: boolean().optional(),
    row_version: integerSchema.optional(),
  });
