import { array, boolean, object, type Schema } from "@safe-shape/core";
import { returnV1Schema } from "../../shared/v1/contract.js";
import type { ListReturnsV1Response } from "./types.js";
export const listReturnsV1ResponseSchema: Schema<ListReturnsV1Response> =
  object({
    has_next: boolean().optional(),
    returns: array(returnV1Schema).optional(),
  });
