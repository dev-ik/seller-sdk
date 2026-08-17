// Generated public types for this Wildberries endpoint.
/**
 * Параметры метода «Установить цены и скидки».
 *
 * Метод устанавливает цены и скидки для товаров.
 *
 * Чтобы установить цены для размеров товара, используйте [отдельный метод](/openapi/work-with-products#tag/Ceny-i-skidki/paths/~1api~1v2~1upload~1task~1size/post).
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
 * POST /api/v2/upload/task
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/items
 */
export type PostApiV2UploadTaskInput = {
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
       * Цена. Валюту можно получить с помощью методов [Получить товары с ценами](./work-with-products#tag/Ceny-i-skidki/paths/~1api~1v2~1list~1goods~1filter/get) и [Получить товары с ценами по артикулам](./work-with-products#tag/Ceny-i-skidki/paths/~1api~1v2~1list~1goods~1filter/post), поле `currencyIsoCode4217`
       *
       * Пример: `999`.
       */
      readonly price?: number;

      /**
       * Скидка, %
       *
       * Пример: `30`.
       */
      readonly discount?: number;
    }[];
  };
};
/**
 * Успешный ответ метода «Установить цены и скидки».
 *
 * 200: Успешно.
 *
 * 208: Такая загрузка уже есть.
 */
export type PostApiV2UploadTaskResponse =
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
