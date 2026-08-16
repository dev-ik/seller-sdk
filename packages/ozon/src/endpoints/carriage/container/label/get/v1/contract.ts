import { array, object, string, type Schema } from "@safe-shape/core";
import { integerSchema } from "../../../../../../contracts/integer.js";
import type { GetCarriageContainerLabelsV1Response } from "./types.js";

export const getCarriageContainerLabelsV1ResponseSchema: Schema<GetCarriageContainerLabelsV1Response> =
  object({
    content: object({
      content_type: string().optional(),
      file_content: string().optional(),
      file_name: string().optional(),
    }).optional(),
    error_containers: array(
      object({
        container_id: integerSchema.optional(),
        error_message: string().optional(),
      }),
    ).optional(),
  });
