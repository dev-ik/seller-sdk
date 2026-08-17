// Generated public types for this Wildberries endpoint.
/**
 * Параметры метода «Детализация обработанной загрузки».
 *
 * Метод возвращает информацию о товарах и об ошибках в товарах в обработанной загрузке.
 *
 *  Обработанная загрузка — это загрузка цен и скидок для товаров (/openapi/work-with-products#tag/Ceny-i-skidki/paths/~1api~1v2~1upload~1task/post), цен для размеров товаров (/openapi/work-with-products#tag/Ceny-i-skidki/paths/~1api~1v2~1upload~1task~1size/post) скидок WB Клуба (/openapi/work-with-products#tag/Ceny-i-skidki/paths/~1api~1v2~1upload~1task~1club-discount/post) и оптовых скидок для B2B-продаж (/openapi/work-with-products#tag/Ceny-i-skidki/operation/postV1UploadTaskB2bWholesale).
 *
 * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца для всех методов категории Цены и скидки:
 *
 * | Тип | Период | Лимит | Интервал | Всплеск |
 * | --- | --- | --- | --- | --- |
 * | Персональный | 6 сек | 10 запросов | 600 мс | 5 запросов |
 * | Сервисный | 6 сек | 10 запросов | 600 мс | 5 запросов |
 * | Базовый с секретом | 6 сек | 10 запросов | 600 мс | 5 запросов |
 * | Базовый | 1 ч | 4 запроса | 15 мин | 1 запрос |
 *
 * GET /api/v2/history/goods/task
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/items
 */
export type GetApiV2HistoryGoodsTaskInput = {
  /**
   * Параметры строки запроса.
   */
  readonly query: {
    /**
     * Сколько элементов вывести на одной странице (пагинация)
     *
     * Формат: `uint`.
     *
     * Пример: `10`.
     *
     * Максимальное значение: 1000.
     */
    readonly limit: number;

    /**
     * Сколько элементов пропустить. Например, для значения `10` ответ начнется с 11 элемента
     *
     * Формат: `uint`.
     *
     * Пример: `0`.
     *
     * Минимальное значение: 0.
     */
    readonly offset?: number;

    /**
     * ID загрузки
     *
     * Пример: `146567`.
     */
    readonly uploadID: number;
  };
};
/**
 * Успешный ответ метода «Детализация обработанной загрузки».
 *
 * 200: Успешно.
 */
export type GetApiV2HistoryGoodsTaskResponse = {
  /**
   * Данные ответа
   */
  readonly data?: {
    /**
     * ID загрузки
     *
     * Пример: `3235236546`.
     */
    readonly uploadID?: number | null;

    /**
     * Информация о товарах в загрузке
     */
    readonly historyGoods?:
      | readonly {
          /**
           * Артикул WB
           *
           * Пример: `544833232`.
           */
          readonly nmID?: number;

          /**
           * Артикул продавца
           *
           * Пример: `"34552332"`.
           */
          readonly vendorCode?: string;

          /**
           * ID размера. В методах Контента это поле `chrtID`
           *
           * Пример: `54483342`.
           */
          readonly sizeID?: number | null;

          /**
           * Размер
           *
           * Пример: `"42"`.
           */
          readonly techSizeName?: string;

          /**
           * Цена
           *
           * Пример: `1500`.
           */
          readonly price?: number | null;

          /**
           * Валюта, по стандарту ISO 4217
           *
           * Пример: `"RUB"`.
           */
          readonly currencyIsoCode4217?: string;

          /**
           * Скидка, %
           *
           * Пример: `25`.
           */
          readonly discount?: number;

          /**
           * Скидка WB Клуба, %
           *
           * Пример: `5`.
           */
          readonly clubDiscount?: number | null;

          /** Описание отсутствует в OpenAPI WB. */
          readonly status?: number;

          /**
           * Текст ошибки. Например:
           *  - `You can't change the item price. Item was added to the Sale due to high inventory` — ошибка возникает, если товар попал под распродажу по [индексу остатка](https://seller.wildberries.ru/instructions/ru/ru/material/A-1159).
           *  - `The new price is several times lower than the current price. Item has been moved to Price Quarantine` — ошибка возникает, если новая цена со скидкой хотя бы в 3 раза меньше старой. Вы можете изменить цену или скидку с помощью API либо вывести товар из карантина в [личном кабинете](https://seller.wildberries.ru/discount-and-prices/quarantine).
           *
           * Пример: `"You can't change the item price. Item was added to the Sale due to high inventory"`.
           */
          readonly errorText?: string | null;
        }[]
      | null;
  };
};
