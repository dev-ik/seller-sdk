// Generated public types for this Wildberries endpoint.
/**
 * Параметры метода «Установить цены для размеров».
 *
 * Метод устанавливает цены отдельно для размеров товаров.
 *
 * Работает только для товаров из категорий, где можно устанавливать цены отдельно для разных размеров. Для [таких товаров](/openapi/work-with-products#tag/Ceny-i-skidki/paths/~1api~1v2~1list~1goods~1size~1nm/get) `"editableSizePrice":true`.
 *
 * Чтобы установить цены и скидки для самих товаров, используйте [отдельный метод](/openapi/work-with-products#tag/Ceny-i-skidki/paths/~1api~1v2~1upload~1task/post).
 *
 *  Получить информацию о процессе установки цен и скидок можно с помощью методов состояния (/openapi/work-with-products#tag/Ceny-i-skidki/paths/~1api~1v2~1history~1tasks/get) и детализации (/openapi/work-with-products#tag/Ceny-i-skidki/paths/~1api~1v2~1history~1goods~1task/get) обработанной загрузки.
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
 * POST /api/v2/upload/task/size
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/items
 */
export type PostApiV2UploadTaskSizeInput = {
  /**
   * Тело запроса.
   */
  readonly body: {
    /** Описание отсутствует в OpenAPI WB. */
    readonly data: readonly {
      /**
       * Артикул WB
       *
       * Пример: `123`.
       */
      readonly nmID: number;

      /**
       * ID размера. Можно получить с помощью методов [Получить товары с ценами](./work-with-products#tag/Ceny-i-skidki/paths/~1api~1v2~1list~1goods~1filter/get) и [Получить товары с ценами по артикулам](./work-with-products#tag/Ceny-i-skidki/paths/~1api~1v2~1list~1goods~1filter/post), поле `sizeID`. В методах Контента это поле `chrtID`
       *
       * Пример: `98989887`.
       */
      readonly sizeID: number;

      /**
       * Цена. Валюту можно получить с помощью методов [Получить товары с ценами](./work-with-products#tag/Ceny-i-skidki/paths/~1api~1v2~1list~1goods~1filter/get) и [Получить товары с ценами по артикулам](./work-with-products#tag/Ceny-i-skidki/paths/~1api~1v2~1list~1goods~1filter/post), поле `currencyIsoCode4217`
       *
       * Пример: `999`.
       */
      readonly price: number;
    }[];
  };
};
/**
 * Успешный ответ метода «Установить цены для размеров».
 *
 * 200: Успешно.
 *
 * 208: Такая загрузка уже есть.
 */
export type PostApiV2UploadTaskSizeResponse =
  | {
      /**
       * Данные ответа
       */
      readonly data?: {
        /**
         * ID загрузки
         */
        readonly id?: number;

        /**
         * Флаг дублирования загрузки: `true` — такая загрузка уже есть
         *
         * Пример: `false`.
         */
        readonly alreadyExists?: boolean;
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
    }
  | {
      /**
       * Данные ответа
       */
      readonly data?: {
        /**
         * ID загрузки
         */
        readonly id?: number;

        /**
         * Флаг дублирования загрузки: `true` — такая загрузка уже есть
         */
        readonly alreadyExists?: boolean;
      };

      /**
       * Флаг ошибки
       */
      readonly error?: boolean;

      /**
       * Текст ошибки
       */
      readonly errorText?: string;
    };
