// Generated public types for this Wildberries endpoint.
/**
 * Параметры метода «Получить товары с ценами».
 *
 * Метод возвращает информацию о товарах: цены, валюту, общие скидки, [скидки WB Клуба](/openapi/work-with-products#tag/Ceny-i-skidki/paths/~1api~1v2~1upload~1task~1club-discount/post) и [оптовые скидки для B2B-продаж](/openapi/work-with-products#tag/Ceny-i-skidki/operation/postV1UploadTaskB2bWholesale).
 *
 * В одном запросе можно указать только один артикул.
 *
 * Чтобы получить информацию обо всех товарах продавца, не указывая артикулы, установите `limit=1000`, в параметре `offset` установите смещение по количеству записей. Количество нужно рассчитать по формуле: `offset` плюс `limit` из предыдущего запроса. Повторяйте запрос, пока вы не получите ответ с пустым массивом.
 *
 * Используйте отдельные методы, чтобы получить информацию:
 *  - о [нескольких товарах по артикулам](/openapi/work-with-products#tag/Ceny-i-skidki/paths/~1api~1v2~1list~1goods~1filter/post)
 *  - о [размерах товара](/openapi/work-with-products#tag/Ceny-i-skidki/paths/~1api~1v2~1list~1goods~1size~1nm/get)
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
 * GET /api/v2/list/goods/filter
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/items
 */
export type GetApiV2ListGoodsFilterInput = {
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
     * Артикул WB для поиска товара
     *
     * Пример: `44589768676`.
     */
    readonly filterNmID?: number;
  };
};
/**
 * Успешный ответ метода «Получить товары с ценами».
 *
 * 200: Успешно.
 */
export type GetApiV2ListGoodsFilterResponse = {
  /**
   * Данные ответа
   */
  readonly data: {
    /**
     * Информация о товарах
     */
    readonly listGoods: readonly {
      /**
       * Артикул WB
       *
       * Пример: `98486`.
       */
      readonly nmID?: number;

      /**
       * Артикул продавца
       *
       * Пример: `"07326060"`.
       */
      readonly vendorCode?: string;

      /**
       * Размер
       */
      readonly sizes?: readonly {
        /**
         * ID размера. В методах Контента это поле `chrtID`
         *
         * Формат: `int64`.
         *
         * Пример: `3123515574`.
         */
        readonly sizeID: number;

        /**
         * Цена
         *
         * Пример: `500`.
         */
        readonly price: number;

        /**
         * Цена со скидкой
         *
         * Пример: `350`.
         */
        readonly discountedPrice: number;

        /**
         * Цена со скидкой, включая скидку WB Клуба
         *
         * Пример: `332.5`.
         */
        readonly clubDiscountedPrice: number;

        /**
         * Размер товара
         *
         * Пример: `"42"`.
         */
        readonly techSizeName: string;
      }[];

      /**
       * Валюта, по стандарту ISO 4217
       *
       * Пример: `"RUB"`.
       */
      readonly currencyIsoCode4217?: string;

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
       * Можно ли устанавливать цены отдельно для разных размеров (зависит от категории товара):
       *  - `true` — можно
       *  - `false` — нельзя
       *
       * Пример: `true`.
       */
      readonly editableSizePrice?: boolean;

      /**
       * Оптовые скидки разных уровней для B2B
       */
      readonly wholesaleDiscountThreshold?: readonly {
        /**
         * Минимальное количество единиц товара для скидки
         *
         * Пример: `10`.
         */
        readonly minQuantity: number;

        /**
         * Скидка, %
         *
         * Пример: `10`.
         */
        readonly wholesaleDiscount: number;

        /**
         * Уровень скидки
         *
         * Пример: `1`.
         */
        readonly level: number;
      }[];

      /**
       * Признак неликвидного товара:
       *  - `true` — неликвидный товар с [низким индексом остатка](https://seller.wildberries.ru/instructions/ru/ru/material/stocks-index?categoryId=e324ce0f-9a2a-4b8d-8fd1-72f751b09b3b&goBackOption=prevRoute#%D1%83%D1%80%D0%BE%D0%B2%D0%BD%D0%B8-%D0%B8%D0%BD%D0%B4%D0%B5%D0%BA%D1%81%D0%B0-%D0%BE%D1%81%D1%82%D0%B0%D1%82%D0%BA%D0%B0)
       *  - Поле отсутствует — ликвидный товар
       *
       * Пример: `true`.
       */
      readonly isBadTurnover?: boolean;
    }[];
  };

  /**
   * Флаг ошибки
   *
   * Пример: `false`.
   */
  readonly error: boolean;

  /**
   * Текст ошибки
   *
   * Пример: `""`.
   */
  readonly errorText: string;
};
