// Generated public types for this Wildberries endpoint.
/**
 * Параметры метода «История статусов для сборочных заданий трансграничных поставок».
 *
 * Метод возвращает историю [статусов](/openapi/orders-fbs#tag/Sborochnye-zadaniya-FBS/paths/~1api~1v3~1orders~1status/post) для [сборочных заданий](/openapi/orders-fbs#tag/Sborochnye-zadaniya-FBS/paths/~1api~1v3~1orders/get) трансграничных поставок.
 *
 * В песочнице этот метод всегда возвращает ответ 200.
 *
 * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца для методов сборочных заданий, поставок, пропусков и настроек автовозврата FBS:
 *
 * | Период | Лимит | Интервал | Всплеск |
 * | --- | --- | --- | --- |
 * | 1 мин | 300 запросов | 200 мс | 20 запросов |
 *
 * Один запрос с кодами ответов 4XX учитывается как 10 запросов
 *
 * POST /api/v3/orders/status/history
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/orders-fbs
 */
export type PostApiV3OrdersStatusHistoryInput = {
  /**
   * Тело запроса.
   */
  readonly body?: {
    /**
     * ID сборочных заданий
     *
     * Пример: `[123456789,987654321]`.
     *
     * Минимальное количество элементов: 1.
     *
     * Максимальное количество элементов: 100.
     */
    readonly orders?: readonly number[];
  };
};
/**
 * Успешный ответ метода «История статусов для сборочных заданий трансграничных поставок».
 *
 * 200: Успешно.
 */
export type PostApiV3OrdersStatusHistoryResponse = {
  /**
   * Список сборочных заданий
   */
  readonly orders?: readonly {
    /**
     * Планируемая дата доставки, [RFC3339](https://datatracker.ietf.org/doc/html/rfc3339)
     *
     * Формат: `date-time`.
     */
    readonly deliveryDate?: string;

    /**
     * Статусы
     */
    readonly statuses?: readonly {
      /**
       * Дата присвоения статуса
       *
       * Пример: `null`.
       */
      readonly date?: string | null;

      /**
       * Статус-код сборочного задания/заказа:
       *  - `dispatched_to_delivery_service` — Продавец передал заказ в службу доставки в своей стране
       *  - `on_way_to_delivery_service` — Заказ едет на склад службы доставки в стране продавца
       *  - `accepted_by_carrier` — Товар принят перевозчиком
       *  - `assembling` — Отправлен на сборку
       *  - `assembled` — Собран на складе
       *  - `sorted` — Отсортирован
       *  - `replaced_at_warehouse` — Замена на складе
       *  - `prepared_for_shipment` — Подготовлен к отгрузке
       *  - `in_search` — На поиске
       *  - `arrived_at_dct` — Поступил в распределительный центр-транзит
       *  - `arrived_at_sct` — Поступил в сортировочный центр-транзит
       *  - `arrived_at_dc` — Поступил в распределительный центр
       *  - `arrived_at_sc` — Поступил в сортировочный центр
       *  - `prepared_for_shipment_at_sc` — Подготовлен к отгрузке в сортировочном центре
       *  - `shipped_at_sc` — Отгружено сортировочным центром
       *  - `shipped_at_dct` — Отгружен распределительным центром — транзит
       *  - `shipped_at_dc` — Отгружен распределительным центром
       *  - `delivered_at_sc` — Доставлен в сортировочный/распределительный центр (СЦ/РЦ)
       *  - `on_way_to_sc` — В пути в сортировочный центр
       *  - `on_way_to_dc` — В пути в распределительный центр
       *  - `on_way_to_pp` — В пути на пункт выдачи
       *  - `arrived_at_pp` — Прибыл на пункт выдачи
       *  - `accepted_at_pp` — Приёмка в пункте выдачи
       *  - `ready_for_pick_up` — Готов к выдаче
       *  - `arrived_at_pp` — Поступил на пункт выдачи заказов (ПВЗ)
       *  - `received_by_client` — Получен клиентом
       *  - `delivered_at_parcel_locker` — Доставлен в постамат
       *  - `canceled_by_client` — Покупатель отменил заказ при получении
       *  - `cancel_after_expiration` — Отмена по сроку хранения
       *  - `at_courier` — Передан курьеру
       *  - `moved_to_return_box` — Перемещен в возвратную коробку
       *  - `accepted_for_return` — Принят к возврату на ПВЗ
       *  - `created` — Оформлен
       *  - `canceled_by_seller` — Отменен продавцом
       *  - `dispatched_by_seller` — Отгружено по данным продавца
       *  - `delivered` — Заказ выдан
       *  - `on_way` — В пути
       *  - `arrived_at_wb_wh` — Поступил на склад WB
       *  - `dispatched_from_wh` — Отправлен со склада
       *  - `customs_clearance` — Таможенное оформление
       *  - `customs_clearance_completed` — Выпущен таможней
       *  - `departed_from_origin_country` — Отправлен из страны продавца
       *  - `arrived_in_destination_country` — Прибытие в страну назначения
       *  - `on_way_to_wb_sc` — Отправлен до сортировочного центра (СЦ) WB
       *  - `accepted_at_wb_sc` — Принят СЦ WB
       *  - `canceled` — Отмена
       *  - `failed_to_reach_client` — Не дозвонились до клиента
       *
       * Пример: `"SORTED"`.
       */
      readonly code?: string;
    }[];

    /**
     * ID сборочного задания
     *
     * Пример: `123456789`.
     */
    readonly orderID?: number;
  }[];
};
