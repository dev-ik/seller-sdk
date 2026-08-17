// Generated public types for this Wildberries endpoint.
/**
 * Параметры метода «Детализация необработанной загрузки».
 *
 * Метод возвращает информацию о товарах и ошибках в товарах из загрузки в обработке.
 *
 *  Необработанная загрузка — это загрузка скидок в календаре акций (/openapi/promotion#tag/promoCalendar). Такие скидки применятся к товарам только в момент старта акции.
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
 * GET /api/v2/buffer/goods/task
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/items
 */
export type GetApiV2BufferGoodsTaskInput = {
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
 * Успешный ответ метода «Детализация необработанной загрузки».
 *
 * 200: Успешно.
 */
export type GetApiV2BufferGoodsTaskResponse = {
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
    readonly bufferGoods?:
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
          readonly sizeID?: number;

          /**
           * Размер
           *
           * Пример: `"XXL"`.
           */
          readonly techSizeName?: string;

          /**
           * Цена
           *
           * Пример: `1500`.
           */
          readonly price?: number;

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
          readonly clubDiscount?: number;

          /** Описание отсутствует в OpenAPI WB. */
          readonly status?: number;

          /**
           * Текст ошибки
           *
           * Пример: `null`.
           */
          readonly errorText?: string | null;
        }[]
      | null;
  };

  /**
   * Флаг ошибки
   *
   * Пример: `false`.
   */
  readonly error?: boolean;

  /**
   * Текст ошибки
   *
   * Пример: `""`.
   */
  readonly errorText?: string;
};
