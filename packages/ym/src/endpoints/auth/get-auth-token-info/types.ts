// Generated public types for this Yandex Market endpoint.
type AuthApiKeyDTO = {
  readonly name: string;
  readonly authScopes: readonly AuthApiKeyScopeType[];
};
type AuthApiKeyScopeType =
  | "ALL_METHODS"
  | "ALL_METHODS_READ_ONLY"
  | "INVENTORY_AND_ORDER_PROCESSING"
  | "INVENTORY_AND_ORDER_PROCESSING_READ_ONLY"
  | "PRICING"
  | "PRICING_READ_ONLY"
  | "OFFERS_AND_CARDS_MANAGEMENT"
  | "OFFERS_AND_CARDS_MANAGEMENT_READ_ONLY"
  | "PROMOTION"
  | "PROMOTION_READ_ONLY"
  | "FINANCE_AND_ACCOUNTING"
  | "COMMUNICATION"
  | "SETTINGS_MANAGEMENT"
  | "SUPPLIES_MANAGEMENT_READ_ONLY";
type AuthApiResponseStatusType = "OK" | "ERROR";
type AuthGetTokenInfoResponse = {
  readonly status: AuthApiResponseStatusType;
  readonly result?: AuthTokenDTO;
};
type AuthTokenDTO = { readonly apiKey: AuthApiKeyDTO };

/**
 * Параметры метода «Получение информации о токене авторизации».
 *
 * Метод доступен только для Api-Key-токена.
 *
 * Возвращает информацию о переданном токене авторизации.
 *
 * POST /v2/auth/token
 *
 * Источник: https://yandex.ru/dev/market/partner-api/doc/ru/
 */
export type GetAuthTokenInfoInput = undefined;
/**
 * Успешный ответ метода «Получение информации о токене авторизации».
 *
 * 200: Информация о токене авторизации.
 */
export type GetAuthTokenInfoResponse = AuthGetTokenInfoResponse;
