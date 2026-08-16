import { object, string, type Schema } from "@safe-shape/core";
import type { GetCarriageContainerDocumentsV1Response } from "./types.js";

export const getCarriageContainerDocumentsV1ResponseSchema: Schema<GetCarriageContainerDocumentsV1Response> =
  object({
    content_type: string().optional(),
    file_content: string().optional(),
    file_name: string().optional(),
  });
