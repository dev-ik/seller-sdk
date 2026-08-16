import { literal, object, string, union, type Schema } from "@safe-shape/core";
import type { GetFbpAcceptanceActV1Response } from "./types.js";

export const getFbpAcceptanceActV1ResponseSchema: Schema<GetFbpAcceptanceActV1Response> =
  object({
    cdn_url: string().optional(),
    error: union([
      literal("ERROR_REASON_UNSPECIFIED"),
      literal("INVALID_COMPANY"),
      literal("FILE_NOT_FOUND"),
      literal("GENERATE_TIMEOUT_REACHED"),
      literal("GENERATION_ERROR"),
    ]).optional(),
    status: union([
      literal("STATUS_UNSPECIFIED"),
      literal("NOT_EXIST"),
      literal("PROCESSING"),
      literal("EXIST"),
      literal("ERROR"),
    ]).optional(),
  });
