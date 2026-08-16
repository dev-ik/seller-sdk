import { array, object, string, type Schema } from "@safe-shape/core";
import { integerSchema } from "../../../../contracts/integer.js";
import type { GetProductPicturesResponse } from "./types.js";

const pictureError = object({
  message: string().optional(),
  url: string().optional(),
});

const pictureInfo = object({
  product_id: integerSchema.optional(),
  primary_photo: array(string()).optional(),
  photo: array(string()).optional(),
  color_photo: array(string()).optional(),
  errors: array(pictureError).optional(),
});

export const getProductPicturesResponseSchema: Schema<GetProductPicturesResponse> =
  object({
    items: array(pictureInfo).optional(),
  });
