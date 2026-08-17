// Generated public types for this Wildberries endpoint.
/**
 * Параметры метода «Получить идентификаторы маркировки сборочных заданий».
 *
 * Метод возвращает идентификаторы маркировки [сборочных заданий ](/openapi/in-store-pickup#tag/inStorePickupAssemblyOrders) и статусы их проверки.
 *
 * Перечень идентификаторов маркировки, доступных для сборочного задания, можно получить в [списке новых сборочных заданий](/openapi/in-store-pickup#tag/inStorePickupAssemblyOrders/operation/getV3ClickCollectOrdersNew), поле `requiredMeta`. Если поле `requiredMeta` не содержит какой-либо идентификатор маркировки, значит, у сборочного задания не может быть этого идентификатора — и добавить его нельзя.
 *
 * Возможные идентификаторы маркировки:
 *  - `imei` — [IMEI](/openapi/in-store-pickup#tag/inStorePickupLabelIdentifiers/operation/postV3ClickCollectOrdersMetaImei)
 *  - `uin` — [УИН](/openapi/in-store-pickup#tag/inStorePickupLabelIdentifiers/operation/postV3ClickCollectOrdersMetaUin)
 *  - `gtin` — [GTIN](/openapi/in-store-pickup#tag/inStorePickupLabelIdentifiers/operation/postV3ClickCollectOrdersMetaGtin)
 *  - `sgtin` — [код маркировки](/openapi/in-store-pickup#tag/inStorePickupLabelIdentifiers/operation/postV3ClickCollectOrdersMetaSgtin)
 *  - `customsDeclaration` — [номер ДТ](/openapi/in-store-pickup#tag/inStorePickupLabelIdentifiers/operation/postV3ClickCollectOrdersMetaCustomsDeclaration)
 *  - `originCountryCode` — [числовой код страны происхождения товара](/openapi/in-store-pickup#tag/inStorePickupLabelIdentifiers/operation/postV3ClickCollectOrdersMetaCustomsDeclaration) из [Общероссийского классификатора стран мира](https://esnsi.gosuslugi.ru/classifiers/16269)
 *
 * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца для всех методов получения и удаления идентификаторов маркировки Самовывоз:
 *
 * | Период | Лимит | Интервал | Всплеск |
 * | --- | --- | --- | --- |
 * | 1 мин | 150 запросов | 400 мс | 20 запросов |
 *
 * Один запрос с кодами ответов 4XX учитывается как 10 запросов
 *
 * POST /api/marketplace/v3/click-collect/orders/meta/details
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/in-store-pickup
 */
export type PostV3ClickCollectOrdersMetaDetailsInput = {
  /**
   * Тело запроса.
   */
  readonly body: {
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
 * Успешный ответ метода «Получить идентификаторы маркировки сборочных заданий».
 *
 * 200: Успешно.
 */
export type PostV3ClickCollectOrdersMetaDetailsResponse = {
  /**
   * Уникальный ID запроса
   *
   * Пример: `"f1787bd2d1fdс35d6f537316514у4a05"`.
   */
  readonly requestId: string;

  /**
   * Идентификаторы маркировки сборочных заданий и статусы их валидации
   */
  readonly orders: readonly {
    /**
     * ID сборочного задания
     *
     * Пример: `123456`.
     */
    readonly orderId: number;

    /**
     * Есть ли ошибки
     *
     * Пример: `false`.
     */
    readonly isError: boolean;

    /**
     * Информация об ошибке
     *
     * Пример: `[]`.
     */
    readonly errors?: readonly {
      /**
       * Код ошибки
       *
       * Пример: `404`.
       */
      readonly code: number;

      /**
       * Дополнительная информация об ошибке
       *
       * Пример: `"NotFound"`.
       */
      readonly detail: string;
    }[];

    /**
     * Идентификаторы маркировки и статусы их валидации
     */
    readonly metaDetails: readonly {
      /**
       * Идентификатор маркировки:
       *  - `imei` — [IMEI](./in-store-pickup#tag/inStorePickupLabelIdentifiers/operation/postV3ClickCollectOrdersMetaImei)
       *  - `uin` — [УИН](./in-store-pickup#tag/inStorePickupLabelIdentifiers/operation/postV3ClickCollectOrdersMetaUin)
       *  - `gtin` — [GTIN](./in-store-pickup#tag/inStorePickupLabelIdentifiers/operation/postV3ClickCollectOrdersMetaGtin)
       *  - `sgtin` — [код маркировки](./in-store-pickup#tag/inStorePickupLabelIdentifiers/operation/postV3ClickCollectOrdersMetaSgtin)
       *  - `customsDeclaration` — [номер ДТ](./in-store-pickup#tag/inStorePickupLabelIdentifiers/operation/postV3ClickCollectOrdersMetaCustomsDeclaration)
       *  - `originCountryCode` — [числовой код страны происхождения товара](./in-store-pickup#tag/inStorePickupLabelIdentifiers/operation/postV3ClickCollectOrdersMetaCustomsDeclaration) из [Общероссийского классификатора стран мира](https://esnsi.gosuslugi.ru/classifiers/16269)
       *
       * Пример: `"imei"`.
       */
      readonly key: string;

      /**
       * Значение идентификатора маркировки
       *
       * Пример: `"359876543210025"`.
       */
      readonly value?: string | null;

      /**
       * Статусы проверки идентификатора маркировки.
       *
       * - `imei`
       *  - `filled` — Маркировка закреплена за сборочным заданием, проверка не требуется
       *  - `optional` — Маркировка не закреплена за сборочным заданием и не обязательна. Проверка пройдена
       *  - `deadlineExceeded` — Проверка маркировки не завершена и будет продолжена. Проверка может завершиться и успешно, и неуспешно
       *  - `imeiMaySell` — Товар допущен к продаже. Проверка пройдена
       *  - `imeiSoldB2B` — Товар продан покупателю B2B, допущен к продаже повторно. Проверка пройдена
       *  - `pending` — Проверка маркировки продолжается. Дождитесь изменения статуса проверки
       *  - `required` — Маркировка обязательна и не закреплена за сборочным заданием. Проверка не пройдена
       *  - `imeiInvalidFormat` — Указан неверный формат маркировки. Проверка не пройдена
       *  - `imeiAlreadySold` — Товар с этим IMEI уже продан. Проверка не пройдена
       * - `uin`
       *  - `filled` — Маркировка закреплена за сборочным заданием, проверка не требуется
       *  - `optional` — Маркировка не закреплена за сборочным заданием и не обязательна. Проверка пройдена
       *  - `required` — Маркировка обязательна и не закреплена за сборочным заданием. Проверка не пройдена
       *
       * - `sgtin`
       *  - `filled` — Маркировка закреплена за сборочным заданием, проверка не требуется
       *  - `optional` — Маркировка не закреплена за сборочным заданием и не обязательна. Проверка пройдена
       *  - `deadlineExceeded` — Проверка маркировки не завершена и будет продолжена. Проверка может завершиться и успешно, и неуспешно
       *  - `sgtinIntroduced` — Товар допущен к продаже. Проверка пройдена
       *  - `sgtinSoldB2B` — Товар продан покупателю B2B, допущен к продаже повторно. Проверка пройдена
       *  - `pending` — Проверка маркировки продолжается. Дождитесь изменения статуса проверки
       *  - `required` — Маркировка обязательна и не закреплена за сборочным заданием. Проверка не пройдена
       *  - `sgtinInvalidFormat` — Указан неверный формат маркировки. Проверка не пройдена
       *  - `sgtinNotFound` — Маркировка не найдена в [Честном знаке](https://chestnyznak.ru). Проверка не пройдена
       *  - `sgtinEmitted` — Маркировка эмитирована. Проверка не пройдена
       *  - `sgtinApplied` — Не пройдена процедура Ввод в оборот. Проверка не пройдена
       *  - `sgtinWrittenOff` — Списан. Проверка не пройдена
       *  - `sgtinRetired` — Выбыл. Проверка не пройдена
       *  - `sgtinWithdrawn` — Выбыл. Проверка не пройдена
       *  - `sgtinDisaggregated` — Расформирован. Проверка не пройдена
       *  - `sgtinDisaggregation` — Расформирован. Проверка не пройдена
       *  - `sgtinAppliedNotPaid` — Не оплачен. Проверка не пройдена
       * - `gtin`
       *  - `filled` — Маркировка закреплена за сборочным заданием, проверка не требуется
       *  - `optional` — Маркировка не закреплена за сборочным заданием и не обязательна. Проверка пройдена
       *  - `required` — Маркировка обязательна и не закреплена за сборочным заданием. Проверка не пройдена
       * - `customsDeclaration`
       *  - `filled` — Маркировка закреплена за сборочным заданием, проверка не требуется
       *  - `optional` — Маркировка не закреплена за сборочным заданием и не обязательна. Проверка пройдена
       *  - `required` — Маркировка обязательна и не закреплена за сборочным заданием. Проверка не пройдена
       *
       * Пример: `"imeiInvalidFormat"`.
       */
      readonly decision: string;
    }[];
  }[];
};
