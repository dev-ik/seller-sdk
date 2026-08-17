// Generated public types for this Wildberries endpoint.
import type { WbJsonValue } from "../../../schema.js";

/**
 * Параметры метода «Закрепить GTIN за сборочными заданиями».
 *
 * Метод обновляет GTIN, уникальный ID товара в Беларуси, в [идентификаторах маркировки сборочных заданий](/openapi/in-store-pickup#tag/inStorePickupLabelIdentifiers/operation/postV3ClickCollectOrdersMetaDetails). У одного сборочного задания может быть только один GTIN.
 *
 * Закрепить GTIN можно только за сборочным заданием в [статусе](/openapi/in-store-pickup#tag/inStorePickupAssemblyOrders/operation/postV3ClickCollectOrdersStatusInfo) `confirm` и если в [идентификаторах маркировки сборочного задания](/openapi/in-store-pickup#tag/inStorePickupLabelIdentifiers/operation/postV3ClickCollectOrdersMetaDetails) есть поле `gtin`.
 *
 * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца для всех методов закрепления идентификаторов маркировки Самовывоз:
 *
 * | Период | Лимит | Интервал | Всплеск |
 * | --- | --- | --- | --- |
 * | 1 мин | 20 запросов | 3 сек | 500 запросов |
 *
 * Один запрос с кодами ответов 4XX учитывается как 10 запросов
 *
 * POST /api/marketplace/v3/click-collect/orders/meta/gtin
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/in-store-pickup
 */
export type PostV3ClickCollectOrdersMetaGtinInput = {
  /**
   * Тело запроса.
   */
  readonly body: {
    /**
     * Максимальное количество элементов: 1000.
     */
    readonly orders: readonly {
      /**
       * GTIN
       *
       * Пример: `"1234567890123"`.
       *
       * Минимальная длина: 13.
       *
       * Максимальная длина: 13.
       */
      readonly gtin: string;

      /**
       * ID сборочного задания
       *
       * Пример: `123456`.
       */
      readonly orderId: number;
    }[];
  };
};
/**
 * Успешный ответ метода «Закрепить GTIN за сборочными заданиями».
 *
 * 200: Успешно.
 */
export type PostV3ClickCollectOrdersMetaGtinResponse = {
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
       * Код ошибки
       *
       * Пример: `404`.
       */
      readonly code: number;

      /**
       * - `NotFound` — сборочное задание не найдено
       * - `IncorrectRequestBody` — неправильный запрос
       * - `IncorrectRequest` — передан некорректный параметр
       *
       * Пример: `"NotFound"`.
       */
      readonly detail: string;
    }[];
  }[];
};
