// Generated public types for this Wildberries endpoint.
import type { WbJsonValue } from "../../../schema.js";

/**
 * Параметры метода «Получить все сборочные задания для повторной отгрузки».
 *
 * Метод возвращает все [сборочные задания](/openapi/orders-fbs#tag/Sborochnye-zadaniya-FBS/paths/~1api~1v3~1orders/get), требующие повторной отгрузки.
 *
 * Повторная отгрузка требуется, если поставка была отсканирована в пункте приёмки, но при этом в ней всё ещё есть неотсканированные товары. Спустя определённое время необходимо доставить эти товары заново. Данные сборочные задания можно перевести в [другую активную поставку](/openapi/orders-fbs#tag/Postavki-FBS/paths/~1api~1marketplace~1v3~1supplies~1%7BsupplyId%7D~1orders/patch).
 *
 * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца для методов сборочных заданий, поставок, пропусков и настроек автовозврата FBS:
 *
 * | Период | Лимит | Интервал | Всплеск |
 * | --- | --- | --- | --- |
 * | 1 мин | 300 запросов | 200 мс | 20 запросов |
 *
 * Один запрос с кодами ответов 4XX учитывается как 10 запросов
 *
 * GET /api/v3/supplies/orders/reshipment
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/orders-fbs
 */
export type GetApiV3SuppliesOrdersReshipmentInput = undefined;
/**
 * Успешный ответ метода «Получить все сборочные задания для повторной отгрузки».
 *
 * 200: Успешно.
 */
export type GetApiV3SuppliesOrdersReshipmentResponse = {
  /**
   * Список сборочных заданий
   */
  readonly orders?: readonly {
    /**
     * ID поставки
     */
    readonly supplyID?: WbJsonValue;

    /**
     * ID сборочного задания
     */
    readonly orderID?: WbJsonValue;
  }[];
};
