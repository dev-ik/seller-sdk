// Generated public types for this Wildberries endpoint.
/**
 * Параметры метода «Передать поставку в доставку».
 *
 * Метод закрывает [поставку](/openapi/orders-fbs#tag/Postavki-FBS/paths/~1api~1v3~1supplies~1%7BsupplyId%7D/get) и переводит все [сборочные задания](/openapi/orders-fbs#tag/Sborochnye-zadaniya-FBS/paths/~1api~1v3~1orders/get) в ней в [статус](/openapi/orders-fbs#tag/Sborochnye-zadaniya-FBS/paths/~1api~1v3~1orders~1status/post) `complete` — в доставке. После закрытия поставки добавить новые сборочные задания к ней нельзя.
 *
 * Если поставка не была передана в доставку, то при приёмке первого товара поставка автоматически закроется.
 *
 * Передать поставку в доставку можно, только если в ней:
 *  - есть хотя бы одно сборочное задание
 *  - для всех сборочных заданий указана обязательная маркировка
 *  - маркировка всех сборочных заданий прошла проверку
 *
 * Если поставка содержит сборочные задания с обязательным УИН, убедитесь, что вы заранее создали и загрузили спецификацию с договором на доставку. [ГИИС ДМДК](https://minfin.gov.ru/ru/perfomance/jewels/dmdk) требуется около 30 минут для обработки изменений в статусах УИН.
 *
 * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца для методов сборочных заданий, поставок, пропусков и настроек автовозврата FBS:
 *
 * | Период | Лимит | Интервал | Всплеск |
 * | --- | --- | --- | --- |
 * | 1 мин | 300 запросов | 200 мс | 20 запросов |
 *
 * Один запрос с кодами ответов 4XX учитывается как 10 запросов
 *
 * PATCH /api/v3/supplies/{supplyId}/deliver
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/orders-fbs
 */
export type PatchApiV3SuppliesSupplyIdDeliverInput = {
  /**
   * Параметры пути.
   */
  readonly path: {
    /**
     * ID поставки
     *
     * Пример: `"WB-GI-1234567"`.
     */
    readonly supplyId: string;
  };
};
/**
 * Успешный ответ метода «Передать поставку в доставку».
 *
 * 204: Передано в доставку.
 */
export type PatchApiV3SuppliesSupplyIdDeliverResponse = undefined;
