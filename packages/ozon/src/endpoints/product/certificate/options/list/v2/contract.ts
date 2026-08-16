import { array, object, type Schema } from "@safe-shape/core";
import { certificateParameterRequirementV2Schema } from "../../../shared/v2/contract.js";
import type { ListProductCertificateOptionsV2Response } from "./types.js";

export const listProductCertificateOptionsV2ResponseSchema: Schema<ListProductCertificateOptionsV2Response> =
  object({ option: array(certificateParameterRequirementV2Schema).optional() });
