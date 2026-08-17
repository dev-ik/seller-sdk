// Generated public types for this Wildberries endpoint.
import type { WbJsonValue } from "../../../schema.js";

/**
 * Параметры метода «Отменить сборочные задания».
 *
 * Переводит [сборочные задания](/openapi/in-store-pickup#tag/inStorePickupAssemblyOrders) из [статусов](/openapi/in-store-pickup#tag/inStorePickupAssemblyOrders/operation/postV3ClickCollectOrdersStatusInfo) `new`, `confirm`, `prepare` в статус `cancel` — отменено продавцом.
 *
 * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца:
 *
 * | Период | Лимит | Интервал | Всплеск |
 * | --- | --- | --- | --- |
 * | 1 сек | 1 запрос | 1 сек | 10 запросов |
 *
 * Один запрос с кодами ответов 4XX учитывается как 10 запросов
 *
 * POST /api/marketplace/v3/click-collect/orders/status/cancel
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/in-store-pickup
 */
export type PostV3ClickCollectOrdersStatusCancelInput = {
  /**
   * Тело запроса.
   */
  readonly body?: {
    /**
     * Список ID сборочных заданий
     *
     * Пример: `[123456,234567,345678]`.
     *
     * Максимальное количество элементов: 1000.
     */
    readonly ordersIds: readonly number[];
  };
};
/**
 * Успешный ответ метода «Отменить сборочные задания».
 *
 * 200: Успешно.
 */
export type PostV3ClickCollectOrdersStatusCancelResponse = {
  /**
   * Уникальный ID запроса
   *
   * Пример: `"f1787bd2d1fdс35d6f537316514у4a05"`.
   */
  readonly requestId: WbJsonValue;

  /** Описание отсутствует в OpenAPI WB. */
  readonly results: readonly {
    /**
     * ID сборочного задания
     *
     * Пример: `123456`.
     */
    readonly orderId: number;

    /**
     * Есть ли ошибки
     *
     * Пример: `true`.
     */
    readonly isError: boolean;

    /**
     * Детали ошибки
     */
    readonly errors?: readonly {
      /**
       * Код ошибки:
       *  - `404`
       *  - `409`
       *  - `400`
       *
       * Пример: `404`.
       */
      readonly code?: number;

      /**
       * - `NotFound` — сборочное задание не найдено
       * - `StatusMismatch` — операция невозможна для этого статуса сборочного задания
       * - `ImeiIsNotFilled` — не заполнен IMEI
       * - `OrderNotB2B` — операция доступна только для сборочных заданий с признаком B2B-продажи `"isB2b":true`
       * - `InvalidOriginCountryCode` — некорректный код страны происхождения товара
       *
       * Пример: `"NotFound"`.
       */
      readonly detail?: string;
    }[];
  }[];
};
