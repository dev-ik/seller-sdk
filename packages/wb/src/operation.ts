import {
  ConfigurationError,
  type HttpMethod,
  type RetrySafety,
  type Transport,
} from "#internal-core";
import type { WbEnvironment } from "./configuration.js";
import type { WbRequestOptions } from "./request-options.js";
import { toTransportRequestOptions } from "./request-options.js";

export interface WbParameterDefinition {
  readonly name: string;
  readonly location: "path" | "query" | "header";
  readonly required: boolean;
  readonly array: boolean;
}

export interface WbOperationDefinition<TResponse> {
  readonly operationId: string;
  readonly method: HttpMethod;
  readonly path: string;
  readonly productionOrigin: string;
  readonly sandboxOrigin?: string;
  readonly parameters: readonly WbParameterDefinition[];
  readonly requestContentType?: "application/json" | "multipart/form-data";
  readonly retrySafety: RetrySafety;
  readonly responseType: "json" | "array-buffer" | "auto";
  readonly accept: string;
  readonly parseResponse: (status: number, input: unknown) => TResponse;
  readonly source: string;
  readonly verifiedAt: string;
}

export type WbOperationExecutor = <TInput, TResponse>(
  definition: WbOperationDefinition<TResponse>,
  input: TInput | undefined,
  options: WbRequestOptions,
) => Promise<TResponse>;

export interface WbOperationExecutionContext {
  readonly environment: WbEnvironment;
  readonly getTransport: (origin: string) => Transport;
}

/** @internal */
export function createWbOperationExecutor(
  context: WbOperationExecutionContext,
): WbOperationExecutor {
  return async <TInput, TResponse>(
    definition: WbOperationDefinition<TResponse>,
    input: TInput | undefined,
    options: WbRequestOptions,
  ): Promise<TResponse> => {
    const origin = selectOrigin(definition, context.environment);
    const mapped = mapRequest(definition, input);
    const response = await context.getTransport(origin).request({
      operationId: definition.operationId,
      method: definition.method,
      path: mapped.path,
      retrySafety: definition.retrySafety,
      accept: definition.accept,
      responseType: definition.responseType,
      ...(mapped.headers === undefined ? {} : { headers: mapped.headers }),
      ...(mapped.body === undefined ? {} : { body: mapped.body }),
      ...(definition.requestContentType === "multipart/form-data"
        ? { bodyEncoding: "form-data" as const }
        : {}),
      ...toTransportRequestOptions(options),
    });

    return definition.parseResponse(response.status, response.body);
  };
}

function selectOrigin<TResponse>(
  definition: WbOperationDefinition<TResponse>,
  environment: WbEnvironment,
): string {
  if (environment === "production") return definition.productionOrigin;
  if (definition.sandboxOrigin !== undefined) return definition.sandboxOrigin;

  throw new ConfigurationError(
    `Wildberries operation ${definition.operationId} is not documented for the sandbox environment.`,
  );
}

function mapRequest<TInput, TResponse>(
  definition: WbOperationDefinition<TResponse>,
  input: TInput | undefined,
): {
  readonly path: string;
  readonly headers?: Readonly<Record<string, string>>;
  readonly body?: unknown;
} {
  const record = toInputRecord(input, definition.operationId);
  const pathValues = readSection(record, "path", definition.operationId);
  const queryValues = readSection(record, "query", definition.operationId);
  const headerValues = readSection(record, "headers", definition.operationId);
  let path = definition.path;
  const query = new URLSearchParams();
  const headers: Record<string, string> = {};

  for (const parameter of definition.parameters) {
    const section =
      parameter.location === "path"
        ? pathValues
        : parameter.location === "query"
          ? queryValues
          : headerValues;
    const value = section?.[parameter.name];
    if (value === undefined) {
      if (parameter.required) {
        throw missingParameterError(definition.operationId, parameter);
      }
      continue;
    }

    if (parameter.location === "path") {
      path = path.replace(
        `{${parameter.name}}`,
        encodeURIComponent(String(value)),
      );
      continue;
    }
    if (parameter.location === "query") {
      if (parameter.array) {
        if (!Array.isArray(value)) {
          throw invalidParameterError(
            definition.operationId,
            parameter,
            "array",
          );
        }
        for (const item of value) query.append(parameter.name, String(item));
      } else {
        query.append(parameter.name, String(value));
      }
      continue;
    }
    headers[parameter.name] = String(value);
  }

  const queryString = query.toString();
  if (queryString.length > 0) path = `${path}?${queryString}`;

  const body = record?.["body"];
  if (
    definition.requestContentType === "multipart/form-data" &&
    body !== undefined &&
    !(body instanceof FormData)
  ) {
    throw new ConfigurationError(
      `Wildberries multipart body must be a FormData instance for operation ${definition.operationId}.`,
    );
  }

  return {
    path,
    ...(Object.keys(headers).length === 0 ? {} : { headers }),
    ...(body === undefined ? {} : { body }),
  };
}

function toInputRecord(
  input: unknown,
  operationId: string,
): Readonly<Record<string, unknown>> | undefined {
  if (input === undefined) return undefined;
  if (typeof input === "object" && input !== null && !Array.isArray(input)) {
    return input as Readonly<Record<string, unknown>>;
  }
  throw new ConfigurationError(
    `Wildberries operation ${operationId} expects an input object.`,
  );
}

function readSection(
  input: Readonly<Record<string, unknown>> | undefined,
  key: "path" | "query" | "headers",
  operationId: string,
): Readonly<Record<string, unknown>> | undefined {
  const value = input?.[key];
  if (value === undefined) return undefined;
  if (typeof value === "object" && value !== null && !Array.isArray(value)) {
    return value as Readonly<Record<string, unknown>>;
  }
  throw new ConfigurationError(
    `Wildberries operation ${operationId} expects ${key} to be an object.`,
  );
}

function missingParameterError(
  operationId: string,
  parameter: WbParameterDefinition,
): ConfigurationError {
  return new ConfigurationError(
    `Missing required Wildberries ${parameter.location} parameter ${parameter.name} for operation ${operationId}.`,
    [
      {
        code: "required",
        path: [parameter.location, parameter.name],
        message: "Expected a required parameter.",
        expected: "defined value",
        received: "undefined",
      },
    ],
  );
}

function invalidParameterError(
  operationId: string,
  parameter: WbParameterDefinition,
  expected: string,
): ConfigurationError {
  return new ConfigurationError(
    `Invalid Wildberries ${parameter.location} parameter ${parameter.name} for operation ${operationId}.`,
    [
      {
        code: "invalid_type",
        path: [parameter.location, parameter.name],
        message: `Expected ${expected}.`,
        expected,
      },
    ],
  );
}
