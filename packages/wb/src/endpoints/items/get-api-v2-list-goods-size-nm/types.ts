// Generated public types for this Wildberries endpoint.
/**
 * Параметры метода «Получить размеры товара с ценами».
 *
 * Метод возвращает информацию обо всех размерах одного товара: цены, валюту, общие скидки и скидки для [WB Клуба](/openapi/work-with-products#tag/Ceny-i-skidki/paths/~1api~1v2~1upload~1task~1club-discount/post).
 *
 * Работает только для товаров из категорий, где можно устанавливать цены отдельно для разных размеров. Для таких товаров `"editableSizePrice":true`.
 *
 * Чтобы получить информацию о самом товаре, используйте [отдельный метод](/openapi/work-with-products#tag/Ceny-i-skidki/paths/~1api~1v2~1list~1goods~1filter/get).
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
 * GET /api/v2/list/goods/size/nm
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/items
 */
export type GetApiV2ListGoodsSizeNmInput = {
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
     * Артикул WB
     *
     * Пример: `1`.
     */
    readonly nmID: number;
  };
};
/**
 * Успешный ответ метода «Получить размеры товара с ценами».
 *
 * 200: Успешно.
 */
export type GetApiV2ListGoodsSizeNmResponse = {
  /**
   * Данные ответа
   */
  readonly data?: {
    /**
     * Размеры товара
     */
    readonly listGoods?:
      | readonly {
          /**
           * Артикул WB
           *
           * Пример: `123`.
           */
          readonly nmID?: number;

          /**
           * ID размера. Можно получить с помощью метода [Получение списка товаров по артикулам](./work-with-products#tag/Ceny-i-skidki/paths/~1api~1v2~1list~1goods~1filter/get), поле `sizeID`. В методах Контента это поле `chrtID`
           *
           * Пример: `98989887`.
           */
          readonly sizeID?: number;

          /**
           * Артикул продавца
           *
           * Пример: `"34552332"`.
           */
          readonly vendorCode?: string;

          /**
           * Цена
           *
           * Пример: `1000`.
           */
          readonly price?: number;

          /**
           * Валюта, по стандарту ISO 4217
           *
           * Пример: `"RUB"`.
           */
          readonly currencyIsoCode4217?: string;

          /**
           * Цена со скидкой
           *
           * Пример: `700`.
           */
          readonly discountedPrice?: number;

          /**
           * Цена со скидкой, включая скидку WB Клуба
           *
           * Пример: `665`.
           */
          readonly clubDiscountedPrice?: number;

          /**
           * Скидка, %
           *
           * Пример: `30`.
           */
          readonly discount?: number;

          /**
           * Скидка WB Клуба, %
           *
           * Пример: `5`.
           */
          readonly clubDiscount?: number;

          /**
           * Размер товара
           *
           * Пример: `"42"`.
           */
          readonly techSizeName?: string;

          /**
           * Можно ли устанавливать цены отдельно для разных размеров (зависит от категории товара):
           *  - `true` — можно
           *  - `false` — нельзя
           *
           * Пример: `true`.
           */
          readonly editableSizePrice?: boolean;

          /**
           * Признак неликвидного товара:
           *  - `true` — неликвидный товар с [низким индексом остатка](https://seller.wildberries.ru/instructions/ru/ru/material/stocks-index?categoryId=e324ce0f-9a2a-4b8d-8fd1-72f751b09b3b&goBackOption=prevRoute#%D1%83%D1%80%D0%BE%D0%B2%D0%BD%D0%B8-%D0%B8%D0%BD%D0%B4%D0%B5%D0%BA%D1%81%D0%B0-%D0%BE%D1%81%D1%82%D0%B0%D1%82%D0%BA%D0%B0)
           *  - Поле отсутствует — ликвидный товар
           *
           * Пример: `true`.
           */
          readonly isBadTurnover?: boolean;
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
   */
  readonly errorText?: string;
};
