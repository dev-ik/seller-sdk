// Generated public types for this Wildberries endpoint.
/**
 * Параметры метода «Получить товары в карантине».
 *
 * Метод возвращает информацию о товарах в карантине.
 *
 * Если новая цена товара со скидкой будет минимум в 3 раза меньше старой, товар попадёт в [карантин](https://seller.wildberries.ru/instructions/ru/ru/material/price-quarantine) и будет продаваться по старой цене. Ошибка об этом будет в ответах методов [состояний загрузок](/openapi/work-with-products#tag/Ceny-i-skidki/paths/~1api~1v2~1history~1tasks/get).
 *
 * Вы можете изменить цену или скидку с помощью API либо вывести товар из карантина в [личном кабинете](https://seller.wildberries.ru/discount-and-prices/quarantine).
 *
 * Для товаров с [поразмерной установкой цен](/openapi/work-with-products#tag/Ceny-i-skidki/paths/~1api~1v2~1upload~1task~1size/post) карантин не применяется.
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
 * GET /api/v2/quarantine/goods
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/items
 */
export type GetApiV2QuarantineGoodsInput = {
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
  };
};
/**
 * Успешный ответ метода «Получить товары в карантине».
 *
 * 200: Успешно.
 */
export type GetApiV2QuarantineGoodsResponse = {
  /**
   * Данные ответа
   */
  readonly data?: {
    /**
     * Информация о товарах в карантине
     */
    readonly quarantineGoods?: readonly {
      /**
       * Артикул WB
       *
       * Пример: `206025152`.
       */
      readonly nmID?: number;

      /**
       * Не используется
       *
       * Пример: `null`.
       */
      readonly sizeID?: number | null;

      /**
       * Не используется
       *
       * Пример: `""`.
       */
      readonly techSizeName?: string;

      /**
       * Валюта по стандарту ISO 4217
       *
       * Пример: `"RUB"`.
       */
      readonly currencyIsoCode4217?: string;

      /**
       * Новая цена продавца до скидки
       *
       * Формат: `float`.
       *
       * Пример: `134`.
       */
      readonly newPrice?: number | null;

      /**
       * Текущая цена продавца до скидки
       *
       * Формат: `float`.
       *
       * Пример: `4000`.
       */
      readonly oldPrice?: number;

      /**
       * Новая скидка продавца, %
       *
       * Пример: `25`.
       */
      readonly newDiscount?: number | null;

      /**
       * Текущая скидка продавца, %
       *
       * Пример: `25`.
       */
      readonly oldDiscount?: number;

      /**
       * Разница: `newPrice` * (1 - `newDiscount` / 100) - `oldPrice` * (1 - `oldDiscount` / 100)
       *
       * Формат: `float`.
       *
       * Пример: `-2899.5`.
       */
      readonly priceDiff?: number;
    }[];
  } | null;

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
