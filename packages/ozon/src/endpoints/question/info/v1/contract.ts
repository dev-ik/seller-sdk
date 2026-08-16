import type { Schema } from "@safe-shape/core";
import { questionSchema } from "../../shared/contract.js";
import type { GetQuestionInfoV1Response } from "./types.js";

export const getQuestionInfoV1ResponseSchema: Schema<GetQuestionInfoV1Response> =
  questionSchema;
