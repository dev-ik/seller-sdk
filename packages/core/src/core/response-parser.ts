import { ResponseValidationError } from "../errors/response-validation-error.js";

export async function parseJsonResponse(
  response: Response,
  operationId: string,
): Promise<unknown> {
  const text = await response.text();
  if (text.length === 0) return null;

  try {
    return JSON.parse(text) as unknown;
  } catch (cause) {
    if (!response.ok) return null;

    throw new ResponseValidationError(
      `Ozon API returned invalid JSON for operation ${operationId}.`,
      {
        operationId,
        cause,
        issues: [
          {
            code: "invalid_json",
            path: [],
            message: "Expected a valid JSON response body.",
            expected: "JSON",
            received: "invalid JSON",
          },
        ],
      },
    );
  }
}
