import { array, object, string, type Schema } from "@safe-shape/core";
import { integerSchema } from "../../../../../contracts/integer.js";
import type { GetDeliveryMethodReturnSettingsResponse } from "./types.js";

export const getDeliveryMethodReturnSettingsResponseSchema: Schema<GetDeliveryMethodReturnSettingsResponse> =
  object({
    settings: object({
      courier_details: object({
        contact_days: integerSchema.optional(),
      }).optional(),
      post_office_zipcode: string().optional(),
      transport_company_details: object({
        transport_company_names: array(string()).optional(),
        zipcode: string().optional(),
      }).optional(),
    }).optional(),
  });
