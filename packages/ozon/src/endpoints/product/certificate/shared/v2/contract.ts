import {
  boolean,
  literal,
  object,
  string,
  union,
  type Schema,
} from "@safe-shape/core";
import type {
  OzonCertificateAccordanceTypeV2,
  OzonCertificateProductTypeV2,
  OzonCertificateTypeV2,
} from "./types.js";

export const certificateAccordanceTypeV2Schema: Schema<OzonCertificateAccordanceTypeV2> =
  union([
    literal("UNKNOWN"),
    literal("EAEU"),
    literal("NATIONAL"),
    literal("TECHNICAL_REGULATIONS_RF"),
    literal("TECHNICAL_REGULATIONS_CU"),
    literal("GOST"),
    literal("CHEMICAL_PRODUCTS"),
    literal("SAFETY_DATA_SHEET"),
    literal("REJECTION_LETTER"),
  ]);

export const certificateTypeV2Schema: Schema<OzonCertificateTypeV2> = union([
  literal("UNKNOWN"),
  literal("CERTIFICATE_OF_CONFORMITY"),
  literal("DECLARATION"),
  literal("CERTIFICATE_OF_REGISTRATION"),
  literal("REGISTRATION_CERTIFICATE"),
  literal("REFUSED_LETTER"),
  literal("VETERINARY_COVER_DOCUMENT"),
  literal("SAFETY_DATA_SHEET"),
]);

export const certificateProductTypeV2Schema: Schema<OzonCertificateProductTypeV2> =
  union([
    literal("UNKNOWN"),
    literal("PRODUCTS_SUBJECT_TO_REGISTRATION"),
    literal("PESTICIDE"),
    literal("AGROCHEMICAL"),
    literal("FEED_ADDITIVE"),
    literal("MEDICAL_PRODUCT"),
    literal("MEDICINE"),
    literal("VETERINARY_DRUG"),
    literal("PHARMACEUTICAL_SUBSTANCE"),
  ]);

export const certificateParameterRequirementV2Schema = object({
  name: string().optional(),
  required: boolean().optional(),
});
