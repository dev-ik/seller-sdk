import type { SellerSdkErrorCode } from "./seller-sdk-error.js";
import type { ValidationIssue } from "./validation-issue.js";

export type SellerSdkErrorDetailsCode = SellerSdkErrorCode | "unknown_error";

/**
 * Безопасное сериализуемое представление ошибки Seller SDK.
 *
 * В объект намеренно не включаются stack, cause, credentials и HTTP-заголовки.
 */
export interface SellerSdkErrorDetails {
  readonly isSellerSdkError: boolean;
  readonly name: string;
  readonly code: SellerSdkErrorDetailsCode;
  readonly message: string;
  readonly operationId?: string;
  readonly status?: number;
  readonly requestId?: string;
  readonly apiCode?: string;
  readonly apiMessage?: string;
  readonly retryAfterMs?: number;
  readonly timeoutMs?: number;
  readonly issues?: readonly ValidationIssue[];
}

const SELLER_SDK_ERROR_CODES = new Set<SellerSdkErrorCode>([
  "configuration_error",
  "api_error",
  "authentication_error",
  "rate_limit_error",
  "network_error",
  "timeout_error",
  "response_validation_error",
]);

/**
 * Преобразует любую пойманную ошибку в единый безопасный формат.
 *
 * Проверка структурная, поэтому функция работает с ошибками focused-пакетов
 * `@seller-sdk/ozon`, `@seller-sdk/wb` и umbrella-пакета одновременно.
 */
export function toSellerSdkErrorDetails(error: unknown): SellerSdkErrorDetails {
  const record = toRecord(error);
  const code = readSellerSdkErrorCode(record?.["code"]);
  const isSellerSdkError = code !== undefined;
  const name = readNonEmptyString(record?.["name"]) ?? "UnknownError";
  const message =
    readNonEmptyString(record?.["message"]) ?? "An unknown error occurred.";
  const issues = readValidationIssues(record?.["issues"]);

  return Object.freeze({
    isSellerSdkError,
    name,
    code: code ?? "unknown_error",
    message,
    ...optionalString(record, "operationId"),
    ...optionalNumber(record, "status"),
    ...optionalString(record, "requestId"),
    ...optionalString(record, "apiCode"),
    ...optionalString(record, "apiMessage"),
    ...optionalNumber(record, "retryAfterMs"),
    ...optionalNumber(record, "timeoutMs"),
    ...(issues === undefined ? {} : { issues }),
  });
}

function toRecord(
  value: unknown,
): Readonly<Record<string, unknown>> | undefined {
  return typeof value === "object" && value !== null
    ? (value as Readonly<Record<string, unknown>>)
    : undefined;
}

function readSellerSdkErrorCode(
  value: unknown,
): SellerSdkErrorCode | undefined {
  return typeof value === "string" &&
    SELLER_SDK_ERROR_CODES.has(value as SellerSdkErrorCode)
    ? (value as SellerSdkErrorCode)
    : undefined;
}

function readNonEmptyString(value: unknown): string | undefined {
  return typeof value === "string" && value.length > 0 ? value : undefined;
}

function optionalString(
  record: Readonly<Record<string, unknown>> | undefined,
  key: string,
): Readonly<Record<string, string>> {
  const value = readNonEmptyString(record?.[key]);
  return value === undefined ? {} : { [key]: value };
}

function optionalNumber(
  record: Readonly<Record<string, unknown>> | undefined,
  key: string,
): Readonly<Record<string, number>> {
  const value = record?.[key];
  return typeof value === "number" && Number.isFinite(value)
    ? { [key]: value }
    : {};
}

function readValidationIssues(
  value: unknown,
): readonly ValidationIssue[] | undefined {
  if (!Array.isArray(value)) return undefined;
  const issues = value.flatMap((candidate) => {
    const issue = toRecord(candidate);
    const code = readNonEmptyString(issue?.["code"]);
    const message = readNonEmptyString(issue?.["message"]);
    const path = issue?.["path"];
    if (
      code === undefined ||
      message === undefined ||
      !Array.isArray(path) ||
      !path.every(
        (segment) => typeof segment === "string" || typeof segment === "number",
      )
    ) {
      return [];
    }
    const expected = readNonEmptyString(issue?.["expected"]);
    const received = readNonEmptyString(issue?.["received"]);
    return [
      Object.freeze({
        code,
        path: Object.freeze([...path]) as readonly (string | number)[],
        message,
        ...(expected === undefined ? {} : { expected }),
        ...(received === undefined ? {} : { received }),
      }),
    ];
  });
  return Object.freeze(issues);
}
