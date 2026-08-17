// Generated public types for this Wildberries endpoint.
/**
 * Параметры метода «Создать новую поставку».
 *
 * Метод создаёт новую [поставку](/openapi/orders-fbs#tag/Postavki-FBS/paths/~1api~1v3~1supplies~1%7BsupplyId%7D/get).
 *
 * Ограничения:
 * - Только для [сборочных заданий](/openapi/orders-fbs#tag/Sborochnye-zadaniya-FBS/paths/~1api~1v3~1orders/get) по модели FBS.
 * - При добавлении в поставку все передаваемые сборочные задания в [статусе](/openapi/orders-fbs#tag/Sborochnye-zadaniya-FBS/paths/~1api~1v3~1orders~1status/post) `new` будут автоматически переведены в статус `confirm` — на сборке.
 * - Если вы переведёте сборочное задание в статус `cancel` — отмена продавцом, прикрепленное сборочное задание автоматически удалится из поставки.
 * - Поставку можно собрать только из сборочных заданий (заказов) одного габаритного типа `cargoType`. Новая поставка не обладает габаритным признаком, она приобретает габаритный признак первого заказа, добавленного в поставку.
 *
 * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца для методов сборочных заданий, поставок, пропусков и настроек автовозврата FBS:
 *
 * | Период | Лимит | Интервал | Всплеск |
 * | --- | --- | --- | --- |
 * | 1 мин | 300 запросов | 200 мс | 20 запросов |
 *
 * Один запрос с кодами ответов 4XX учитывается как 10 запросов
 *
 * POST /api/v3/supplies
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/orders-fbs
 */
export type PostApiV3SuppliesInput = {
  /**
   * Тело запроса.
   */
  readonly body: {
    /**
     * Наименование поставки
     *
     * Пример: `"Тестовая поставка"`.
     *
     * Минимальная длина: 1.
     *
     * Максимальная длина: 128.
     */
    readonly name?: string;
  };
};
/**
 * Успешный ответ метода «Создать новую поставку».
 *
 * 201: Создано.
 */
export type PostApiV3SuppliesResponse = {
  /**
   * ID поставки
   *
   * Пример: `"WB-GI-1234567"`.
   */
  readonly id?: string;
};
