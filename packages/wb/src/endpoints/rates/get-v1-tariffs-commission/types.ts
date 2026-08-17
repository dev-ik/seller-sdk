// Generated public types for this Wildberries endpoint.
/**
 * Параметры метода «Комиссия по категориям товаров».
 *
 * Метод возвращает данные о [комиссии](https://seller.wildberries.ru/dynamic-product-categories/commission) WB по [родительским категориям товаров](/openapi/work-with-products#tag/categoriesSubcategoriesAndCharacteristics/paths/~1content~1v2~1object~1parent~1all/get) согласно модели продаж.
 *
 * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца:
 *
 * | Тип | Период | Лимит | Интервал | Всплеск |
 * | --- | --- | --- | --- | --- |
 * | Персональный | 1 мин | 1 запрос | 1 мин | 2 запроса |
 * | Сервисный | 1 мин | 1 запрос | 1 мин | 2 запроса |
 * | Базовый с секретом | 1 мин | 1 запрос | 1 мин | 2 запроса |
 * | Базовый | 1 ч | 5 запросов | 12 мин | 1 запрос |
 *
 * GET /api/v1/tariffs/commission
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/rates
 */
export type GetV1TariffsCommissionInput = {
  /**
   * Параметры строки запроса.
   */
  readonly query?: {
    /**
     * Язык полей ответа `parentName` и `subjectName`:
     *  - `ru` — русский
     *  - `en` — английский
     *  - `zh` — китайский
     *
     * Пример: `"ru"`.
     */
    readonly locale?: string;
  };
};
/**
 * Успешный ответ метода «Комиссия по категориям товаров».
 *
 * 200: Успешно.
 */
export type GetV1TariffsCommissionResponse =
  | {
      /**
       * Список комиссий
       */
      readonly report?: readonly {
        /**
         * Комиссия по модели **Бронирование**, %
         */
        readonly kgvpBooking?: number;

        /**
         * Комиссия по модели **Маркетплейс** (`FBS`), %
         */
        readonly kgvpMarketplace?: number;

        /**
         * Комиссия по модели **Самовывоз из магазина продавца** (`C&C`), %
         */
        readonly kgvpPickup?: number;

        /**
         * Комиссия по моделям **Витрина** (`DBS`) и **Курьер WB** (`DBW`), %
         */
        readonly kgvpSupplier?: number;

        /**
         * Комиссия по модели **Витрина экспресс** (`EDBS`), %
         */
        readonly kgvpSupplierExpress?: number;

        /**
         * Комиссия по модели **Склад WB** (`FBW`), %
         */
        readonly paidStorageKgvp?: number;

        /**
         * ID родительской категории
         */
        readonly parentID?: number;

        /**
         * Название родительской категории
         */
        readonly parentName?: string;

        /**
         * ID предмета
         */
        readonly subjectID?: number;

        /**
         * Название предмета
         */
        readonly subjectName?: string;
      }[];
    }
  | {
      /**
       * Список комиссий
       */
      readonly report?: readonly {
        /**
         * Комиссия для продавцов из Китая, %
         */
        readonly kgvpChina?: number;

        /**
         * ID родительской категории
         */
        readonly parentID?: number;

        /**
         * Название родительской категории
         */
        readonly parentName?: string;

        /**
         * ID предмета
         */
        readonly subjectID?: number;

        /**
         * Название предмета
         */
        readonly subjectName?: string;
      }[];
    }
  | {
      /**
       * Список комиссий
       */
      readonly report?: readonly {
        /**
         * Комиссия для продавцов из Турции, %
         */
        readonly kgvpTurkey?: number;

        /**
         * ID родительской категории
         */
        readonly parentID?: number;

        /**
         * Название родительской категории
         */
        readonly parentName?: string;

        /**
         * ID предмета
         */
        readonly subjectID?: number;

        /**
         * Название предмета
         */
        readonly subjectName?: string;
      }[];
    }
  | {
      /**
       * Список комиссий
       */
      readonly report?: readonly {
        /**
         * Комиссия по модели **Маркетплейс** (`FBS`), %
         */
        readonly kgvpMarketplaceUz?: number;

        /**
         * Комиссия по модели **Склад WB** (`FBW`), %
         */
        readonly kgvpPaidStorageUz?: number;

        /**
         * Комиссия по модели **Витрина** (`DBS`), %
         */
        readonly kgvpSupplierUz?: number;

        /**
         * ID родительской категории
         */
        readonly parentID?: number;

        /**
         * Название родительской категории
         */
        readonly parentName?: string;

        /**
         * ID предмета
         */
        readonly subjectID?: number;

        /**
         * Название предмета
         */
        readonly subjectName?: string;
      }[];
    }
  | {
      /**
       * Список комиссий
       */
      readonly report?: readonly {
        /**
         * Комиссия для продавцов из ОАЭ, %
         */
        readonly kgvpUAE?: number;

        /**
         * ID родительской категории
         */
        readonly parentID?: number;

        /**
         * Название родительской категории
         */
        readonly parentName?: string;

        /**
         * ID предмета
         */
        readonly subjectID?: number;

        /**
         * Название предмета
         */
        readonly subjectName?: string;
      }[];
    };
