import { array, object, string, type Schema } from "@safe-shape/core";
import { integerSchema } from "../../../../../../contracts/integer.js";
import type { GetCarriageContainerStatusesV1Response } from "./types.js";

export const getCarriageContainerStatusesV1ResponseSchema: Schema<GetCarriageContainerStatusesV1Response> =
  object({
    containers: array(
      object({
        container_id: integerSchema.optional(),
        status: string().optional(),
      }),
    ).optional(),
  });
