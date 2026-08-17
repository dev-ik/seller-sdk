// Generated public types for this Wildberries endpoint.
import type { WbJsonValue } from "../../../schema.js";

/**
 * Параметры метода «Закрепить номера ДТ за сборочными заданиями».
 *
 * Метод обновляет номера ДТ — деклараций на товары — и коды стран происхождения товаров в [идентификаторах маркировки сборочных заданий](/openapi/in-store-pickup#tag/inStorePickupLabelIdentifiers/operation/postV3ClickCollectOrdersMetaDetails). У одного сборочного задания может быть только один номер ДТ.
 *
 * Закрепить номер ДТ можно, только если выполняются все условия:
 *  - сборочное задание имеет признак B2B-продажи — `"isB2b":true` в ответе метода [получения новых сборочных заданий](/openapi/in-store-pickup#tag/inStorePickupAssemblyOrders/operation/getV3ClickCollectOrdersNew)
 *  - сборочное задание находится в [статусах](/openapi/in-store-pickup#tag/inStorePickupAssemblyOrders/operation/postV3ClickCollectOrdersStatusInfo) `confirm` или `prepare`
 *  - поле `customsDeclaration` есть в [идентификаторах маркировки сборочного задания](/openapi/in-store-pickup#tag/inStorePickupLabelIdentifiers/operation/postV3ClickCollectOrdersMetaDetails)
 *
 * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца для всех методов закрепления идентификаторов маркировки Самовывоз:
 *
 * | Период | Лимит | Интервал | Всплеск |
 * | --- | --- | --- | --- |
 * | 1 мин | 20 запросов | 3 сек | 500 запросов |
 *
 * Один запрос с кодами ответов 4XX учитывается как 10 запросов
 *
 * POST /api/marketplace/v3/click-collect/orders/meta/customs-declaration
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/in-store-pickup
 */
export type PostV3ClickCollectOrdersMetaCustomsDeclarationInput = {
  /**
   * Тело запроса.
   */
  readonly body: {
    /**
     * Максимальное количество элементов: 1000.
     */
    readonly orders: readonly {
      /**
       * Номер ДТ
       *
       * Пример: `"10704010/010624/0000302"`.
       *
       * Минимальная длина: 17.
       *
       * Максимальная длина: 29.
       */
      readonly customsDeclaration: string;

      /**
       * ID сборочного задания
       */
      readonly orderId: number;

      /**
       * Числовой код страны происхождения товара из [Общероссийского классификатора стран мира](https://esnsi.gosuslugi.ru/classifiers/16269). Необходимо указывать только для сборочных заданий с признаком B2B-продажи "isB2b":true
       *
       * Пример: `"643"`.
       *
       * Максимальная длина: 3.
       */
      readonly originCountryCode: string;
    }[];
  };
};
/**
 * Успешный ответ метода «Закрепить номера ДТ за сборочными заданиями».
 *
 * 200: Успешно.
 */
export type PostV3ClickCollectOrdersMetaCustomsDeclarationResponse = {
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
      readonly code: number;

      /**
       * - `NotFound` — сборочное задание не найдено
       * - `StatusMismatch` — операция невозможна для этого статуса сборочного задания
       * - `OrderNotB2B` — операция доступна только для сборочных заданий с признаком B2B-продажи `"isB2b":true`
       * - `InvalidOriginCountryCode` — некорректный код страны происхождения товара
       *
       * Пример: `"NotFound"`.
       */
      readonly detail: string;
    }[];
  }[];
};
