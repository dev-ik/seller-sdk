import { ConfigurationError, type Transport } from "#internal-core";
import { parseOzonResponse } from "../../../parse-response.js";
import {
  toTransportRequestOptions,
  type OzonRequestOptions,
} from "../../../request-options.js";
import { listProductsResponseSchema } from "./contract.js";
import type { ListProductsRequest, ListProductsResponse } from "./types.js";

export const LIST_PRODUCTS_OPERATION_ID = "ProductAPI_GetProductList";
const LIST_PRODUCTS_FILTER_FIELDS = new Set([
  "offer_id",
  "product_id",
  "skus",
  "visibility",
]);

export async function executeListProducts(
  transport: Transport,
  input: ListProductsRequest,
  options: OzonRequestOptions = {},
): Promise<ListProductsResponse> {
  validateListProductsRequest(input);

  const response = await transport.request({
    operationId: LIST_PRODUCTS_OPERATION_ID,
    method: "POST",
    path: "/v3/product/list",
    body: input,
    retrySafety: "safe",
    ...toTransportRequestOptions(options),
  });

  return parseOzonResponse(
    listProductsResponseSchema,
    response.body,
    LIST_PRODUCTS_OPERATION_ID,
  );
}

function validateListProductsRequest(input: unknown): void {
  if (typeof input !== "object" || input === null || Array.isArray(input)) {
    throw new ConfigurationError(
      "Invalid request for Ozon operation ProductAPI_GetProductList.",
      [
        {
          code: "invalid_type",
          path: [],
          message: "Expected a request object with filter and limit.",
          expected: "object",
          received: input === null ? "null" : typeof input,
        },
      ],
    );
  }

  const request = input as Partial<ListProductsRequest>;
  const issues = [];

  if (
    typeof request.filter !== "object" ||
    request.filter === null ||
    Array.isArray(request.filter)
  ) {
    issues.push({
      code: "invalid_type",
      path: ["filter"],
      message:
        "Expected a filter object. Use an empty object to list all products.",
      expected: "object",
      received:
        request.filter === undefined ? "missing" : typeof request.filter,
    });
  } else {
    for (const field of Object.keys(request.filter)) {
      if (LIST_PRODUCTS_FILTER_FIELDS.has(field)) continue;
      issues.push({
        code: "unrecognized_key",
        path: ["filter", field],
        message: `Unsupported product list filter field: ${field}.`,
        expected: [...LIST_PRODUCTS_FILTER_FIELDS].join(" | "),
        received: field,
      });
    }
  }

  if (
    !Number.isInteger(request.limit) ||
    (request.limit ?? 0) < 1 ||
    (request.limit ?? 0) > 1_000
  ) {
    issues.push({
      code: "invalid_value",
      path: ["limit"],
      message: "Expected an integer from 1 to 1000.",
      expected: "integer from 1 to 1000",
      received: request.limit === undefined ? "missing" : String(request.limit),
    });
  }

  if (issues.length > 0) {
    throw new ConfigurationError(
      "Invalid request for Ozon operation ProductAPI_GetProductList.",
      issues,
    );
  }
}
