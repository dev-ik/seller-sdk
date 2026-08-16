import { array, object, type Schema } from "@safe-shape/core";
import { certificateParameterRequirementV2Schema } from "../../../shared/v2/contract.js";
import type { GetProductCertificateParamsV2Response } from "./types.js";

export const getProductCertificateParamsV2ResponseSchema: Schema<GetProductCertificateParamsV2Response> =
  object({ params: array(certificateParameterRequirementV2Schema).optional() });
