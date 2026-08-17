// Generated public types for this Wildberries endpoint.
import type { WbJsonValue } from "../../../schema.js";

/**
 * Параметры метода «Сообщить, что сборочные задания готовы к выдаче».
 *
 * Метод переводит [сборочные задания](/openapi/in-store-pickup#tag/inStorePickupAssemblyOrders) из [статуса](/openapi/in-store-pickup#tag/inStorePickupAssemblyOrders/operation/postV3ClickCollectOrdersStatusInfo) `confirm` — на сборке — в статус `prepare` — готово к выдаче.
 *
 * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца:
 *
 * | Период | Лимит | Интервал | Всплеск |
 * | --- | --- | --- | --- |
 * | 1 сек | 1 запрос | 1 сек | 10 запросов |
 *
 * Один запрос с кодами ответов 4XX учитывается как 10 запросов
 *
 * POST /api/marketplace/v3/click-collect/orders/status/prepare
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/in-store-pickup
 */
export type PostV3ClickCollectOrdersStatusPrepareInput = {
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
 * Успешный ответ метода «Сообщить, что сборочные задания готовы к выдаче».
 *
 * 200: Успешно.
 */
export type PostV3ClickCollectOrdersStatusPrepareResponse = {
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
     */
    readonly orderId: number;

    /**
     * Есть ли ошибки
     */
    readonly isError: boolean;

    /**
     * Детали ошибки
     */
    readonly errors?: readonly {
      /**
       * Код ошибки
       */
      readonly code: number;

      /**
       * - `NotFound` — сборочное задание не найдено
       * - `StatusMismatch` — операция невозможна для этого статуса сборочного задания
       * - `MetaValidationFail` — идентификаторы маркировки не прошли проверку
       */
      readonly detail: string;

      /**
       * Ошибки проверки идентификаторов маркировки
       */
      readonly metaDetails?: readonly {
        /**
         * Идентификатор маркировки
         *
         * Пример: `"uin"`.
         */
        readonly key?: string;

        /**
         * Значение идентификатора маркировки
         *
         * Пример: `null`.
         */
        readonly value?: string | null;

        /**
         * Ошибки проверки идентификаторов маркировки.
         *
         * - `imei`
         *  - `pending` — Проверка маркировки продолжается. Дождитесь изменения статуса проверки
         *  - `required` — Маркировка обязательна и не закреплена за сборочным заданием
         *  - `imeiInvalidFormat` — Указан неверный формат маркировки
         *  - `imeiAlreadySold` — Товар с этим IMEI уже продан
         * - `uin`
         *  - `required` — Маркировка обязательна и не закреплена за сборочным заданием
         * - `sgtin`
         *  - `pending` — Проверка маркировки продолжается. Дождитесь изменения статуса проверки
         *  - `required` — Маркировка обязательна и не закреплена за сборочным заданием
         *  - `sgtinInvalidFormat` — Указан неверный формат маркировки
         *  - `sgtinNotFound` — Маркировка не найдена в [Честном знаке](https://chestnyznak.ru)
         *  - `sgtinEmitted` — Маркировка эмитирована
         *  - `sgtinApplied` — Не пройдена процедура Ввод в оборот
         *  - `sgtinWrittenOff` — Списан
         *  - `sgtinRetired` — Выбыл
         *  - `sgtinWithdrawn` — Выбыл
         *  - `sgtinDisaggregated` — Расформирован
         *  - `sgtinDisaggregation` — Расформирован
         *  - `sgtinAppliedNotPaid` — Не оплачен
         * - `gtin`
         *  - `required` — Маркировка обязательна и не закреплена за сборочным заданием
         * - `expiration`
         *  - `required` — Маркировка обязательна и не закреплена за сборочным заданием
         * - `customsDeclaration`
         *  - `required` — Маркировка обязательна и не закреплена за сборочным заданием
         *
         * Пример: `"uinMaySell"`.
         */
        readonly decision?: string;
      }[];
    }[];
  }[];
};
