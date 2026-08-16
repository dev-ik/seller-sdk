import type { Transport } from "#internal-core";
import { parseOzonResponse } from "../../../../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../../../../request-options.js";
import { getCarriageContainerDocumentsV1ResponseSchema } from "./contract.js";
import type {
  GetCarriageContainerDocumentsV1Request,
  GetCarriageContainerDocumentsV1Response,
} from "./types.js";

export const GET_CARRIAGE_CONTAINER_DOCUMENTS_V1_OPERATION_ID =
  "CarriageContainerDocumentGet";

export async function executeGetCarriageContainerDocumentsV1(
  transport: Transport,
  input: GetCarriageContainerDocumentsV1Request,
  options: OzonRequestOptions = {},
): Promise<GetCarriageContainerDocumentsV1Response> {
  const response = await transport.request({
    operationId: GET_CARRIAGE_CONTAINER_DOCUMENTS_V1_OPERATION_ID,
    method: "POST",
    path: "/v1/carriage/container/document/get",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });
  return parseOzonResponse(
    getCarriageContainerDocumentsV1ResponseSchema,
    response.body,
    GET_CARRIAGE_CONTAINER_DOCUMENTS_V1_OPERATION_ID,
  );
}
