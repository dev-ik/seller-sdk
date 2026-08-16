import { array, object, string, type Schema } from "@safe-shape/core";
import { carriageContainerSummarySchema } from "../../shared/v1/contract.js";
import type { ListCarriageContainersV1Response } from "./types.js";

export const listCarriageContainersV1ResponseSchema: Schema<ListCarriageContainersV1Response> =
  object({
    containers: array(carriageContainerSummarySchema).optional(),
    cursor: string().optional(),
  });
