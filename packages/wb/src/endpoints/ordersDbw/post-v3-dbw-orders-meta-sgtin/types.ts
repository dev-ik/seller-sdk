// Generated public types for this Wildberries endpoint.
/**
 * Параметры метода «Закрепить коды маркировки Честного знака за сборочными заданиями».
 *
 * Метод обновляет код маркировки [Честного знака](https://честныйзнак.рф/) в [идентификаторах маркировки сборочных заданий](/openapi/orders-dbw#tag/dbwLabelIdentifiers/operation/postV3DbwOrdersMetaDetails).
 *
 * Закрепить код маркировки можно только за сборочным заданием в [статусе](/openapi/orders-dbw#tag/dbwAssemblyOrders/operation/postV3DbwOrdersStatus) `confirm` и если в [идентификаторах маркировки сборочного задания](/openapi/orders-dbw#tag/dbwLabelIdentifiers/operation/postV3DbwOrdersMetaDetails) есть поле `sgtin`.
 *
 * Получить загруженные маркировки можно в [идентификаторах маркировки сборочного задания](/openapi/orders-dbw#tag/dbwLabelIdentifiers/operation/postV3DbwOrdersMetaDetails).
 *
 * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца для следующих методов DBW:
 *
 *  получение и обновление списка контактов
 *  получение и удаление идентификаторов маркировки
 *  методы сборочных заданий
 *
 *
 * | Период | Лимит | Интервал | Всплеск |
 * | --- | --- | --- | --- |
 * | 1 мин | 300 запросов | 200 мс | 20 запросов |
 *
 * Один запрос с кодами ответов 4XX учитывается как 10 запросов
 *
 * POST /api/marketplace/v3/dbw/orders/meta/sgtin
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/orders-dbw
 */
export type PostV3DbwOrdersMetaSgtinInput = {
  /**
   * Тело запроса.
   */
  readonly body: {
    /**
     * Максимальное количество элементов: 1000.
     */
    readonly orders: readonly {
      /**
       * ID сборочного задания
       *
       * Пример: `123456`.
       */
      readonly orderId: number;

      /**
       * Массив кодов маркировки. Допускается от 16 до 135 символов для кода одной маркировки
       *
       * Пример: `["123456789012345678","1234567890123456"]`.
       *
       * Минимальное количество элементов: 1.
       *
       * Максимальное количество элементов: 24.
       */
      readonly sgtins: readonly string[];
    }[];
  };
};
/**
 * Успешный ответ метода «Закрепить коды маркировки Честного знака за сборочными заданиями».
 *
 * 200: Успешно.
 */
export type PostV3DbwOrdersMetaSgtinResponse = {
  /**
   * Уникальный ID запроса, содержащего ошибки.
   */
  readonly requestId?: string;

  /** Описание отсутствует в OpenAPI WB. */
  readonly results: readonly {
    /**
     * Детали ошибки
     */
    readonly errors?: readonly {
      /**
       * Код ошибки:
       *  - `404`
       *  - `409`
       *
       * Пример: `404`.
       */
      readonly code: number;

      /**
       * - `NotFound` — сборочное задание не найдено
       * - `StatusMismatch` — операция невозможна для этого статуса сборочного задания
       * - `ImeiIsNotFilled` — не заполнен IMEI
       * - `MetaValidationFail` — ошибки валидации идентификаторов маркировки
       *
       * Пример: `"NotFound"`.
       */
      readonly detail: string;

      /**
       * Детали ошибки валидации идентификаторов маркировки
       */
      readonly metaDetails?: readonly {
        /**
         * Идентификатор маркировки
         *
         * Пример: `"sgtin"`.
         */
        readonly key: string;

        /**
         * Значение идентификатора маркировки
         *
         * Пример: `"1234567890"`.
         */
        readonly value?: string | null;

        /**
         * Статус проверки:
         * - `sgtin`
         *  - `sgtinInvalidFormat` — Неверный формат маркировки
         *  - `sgtinNotFound` — Маркировка не найдена в [Честном знаке](https://chestnyznak.ru)
         *  - `sgtinEmitted` — Маркировка эмитирована
         *  - `sgtinApplied` — Не пройдена процедура Ввод в оборот
         *  - `sgtinWrittenOff` — Списан
         *  - `sgtinRetired` — Выбыл
         *  - `sgtinWithdrawn` — Выбыл
         *  - `sgtinDisaggregation` — Расформирован
         *  - `sgtinDisaggregated` — Расформирован
         *  - `sgtinAppliedNotPaid` — Не оплачен
         *  - `pending` — Маркировка на проверке
         *
         * Пример: `"sgtinEmitted"`.
         */
        readonly decision: string;
      }[];
    }[];

    /**
     * Есть ли ошибки
     *
     * Пример: `true`.
     */
    readonly isError: boolean;

    /**
     * ID сборочного задания с успешно обновлёнными данными
     *
     * Пример: `123456`.
     */
    readonly orderId: number;
  }[];
};
