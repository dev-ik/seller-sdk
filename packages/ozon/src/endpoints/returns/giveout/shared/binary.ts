import type { TransportResponse } from "#internal-core";
import { ResponseValidationError } from "#internal-core";
export function parseGiveoutBinary(
  response: TransportResponse,
  operationId: string,
): ArrayBuffer {
  if (response.body instanceof ArrayBuffer) return response.body;
  throw new ResponseValidationError(
    `Ozon API returned a non-binary giveout document for operation ${operationId}.`,
    {
      operationId,
      issues: [
        {
          code: "invalid_type",
          path: [],
          message: "Expected an ArrayBuffer response body.",
          expected: "ArrayBuffer",
          received: typeof response.body,
        },
      ],
    },
  );
}
