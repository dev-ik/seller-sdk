// Generated public types for this Wildberries endpoint.
import type { WbJsonValue } from "../../../schema.js";

/**
 * Параметры метода «Создание карточек товаров».
 *
 * Метод создаёт карточки товаров c указанием описаний и характеристик товаров.
 *
 *  Есть две формы запроса: для создания отдельных и объединённых карточек товаров
 *
 * Габариты товаров можно указать только в `сантиметрах`, вес товара с упаковкой — в `килограммах`.
 *
 * Создание карточки товара происходит асинхронно. Синхронизация новой карточки с сервисами может занимать до 30 минут. В течение этого времени невозможно добавить остатки на склады и настроить цены.
 *
 * Одним запросом можно создать максимум 100 отдельных карточек товаров или 100 групп [объединённых](/knowledge-base/articles/019d49a4-1320-71bb-9dac-8ba07e7177ce/rabota-s-tovarami#obuedinenie-i-razuedinenie-kartochek-tovarov) карточек товаров по 30 карточек в каждой. Максимальный размер запроса 10 Мб.
 *
 * Если ответ `Успешно` (`200`), но какие-то карточки не создались, проверьте [список несозданных карточек товаров](/openapi/work-with-products#tag/listings/paths/~1content~1v2~1cards~1error~1list/post).
 *
 * В песочнице карточка товара создаётся сразу, без ожидания.
 *
 * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца:
 *
 * | Период | Лимит | Интервал | Всплеск |
 * | --- | --- | --- | --- |
 * | 1 мин | 10 запросов | 6 сек | 5 запросов |
 *
 * POST /content/v2/cards/upload
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/items
 */
export type PostContentV2CardsUploadInput = {
  /**
   * Тело запроса.
   *
   * Отдельные карточки товаров или группы объединённых карточек товаров
   */
  readonly body?: readonly {
    /**
     * ID предмета
     */
    readonly subjectID: number;

    /**
     * [Объединённые](/knowledge-base/articles/019d49a4-1320-71bb-9dac-8ba07e7177ce/rabota-s-tovarami#obuedinenie-i-razuedinenie-kartochek-tovarov) карточки товаров.
     * Чтобы создать отдельную карточку, передайте только один объект
     */
    readonly variants: readonly {
      /**
       * Бренд
       */
      readonly brand?: string;

      /**
       * Наименование товара
       *
       * Максимальная длина: 60.
       */
      readonly title?: string;

      /**
       * Описание товара.
       *
       * Максимальное количество символов зависит от категории товара
       *
       * Стандарт — 2000, минимум — 1000, максимум — 5000
       *
       * Подробно о **правилах заполнения карточки товара** в [Справочном центре](https://seller.wildberries.ru/instructions/ru/ru/material/how-to-create-card) на портале продавцов
       */
      readonly description?: string;

      /**
       * Артикул продавца
       *
       * Максимальная длина: 72.
       */
      readonly vendorCode: string;

      /**
       * Подтверждение, что на товар нанесён обязательный код маркировки [Честного знака](https://честныйзнак.рф/):
       *  - `true` — продавец подтверждает, что на товар нанесён обязательный код маркировки.
       *  - `false` — продавец не подтверждает, что на товар нанесён обязательный код маркировки. Передайте в запросе `true`, чтобы подтвердить наличие на товаре обязательного кода маркировки. Карточка товара не пройдёт модерацию, если нет подтверждения продавца о том, что обязательный код маркировки нанесён на товар.
       *
       * Чтобы проверить, является ли код маркировки [Честного знака](https://честныйзнак.рф/) обязательным, используйте метод [Список карточек товаров](./work-with-products#tag/listings/paths/~1content~1v2~1get~1cards~1list/post), поле ответа `needKiz`
       *
       * Значение по умолчанию: `false`.
       */
      readonly kizMarked?: boolean;

      /**
       * Оптовая продажа
       */
      readonly wholesale?: {
        /**
         * Предназначена ли карточка товара для оптовой продажи
         */
        readonly enabled?: boolean;

        /**
         * Количество единиц товара в упаковке
         *
         * Формат: `uint64`.
         */
        readonly quantum?: number;
      };

      /**
       * Габариты и вес товара **c упаковкой**.
       *
       * Укажите в `сантиметрах` и `килограммах` для любого товара.
       *
       * Если данные не указаны, автоматически сгенерируются нулевые значения длины, ширины, высоты и веса.
       *
       * Синхронизация данных новой карточки с сервисом может занимать до 30 минут
       */
      readonly dimensions?: {
        /**
         * Длина, см
         */
        readonly length?: number;

        /**
         * Ширина, см
         */
        readonly width?: number;

        /**
         * Высота, см
         */
        readonly height?: number;

        /**
         * Вес, кг
         * Количество знаков после запятой <=3
         */
        readonly weightBrutto?: number;
      };

      /**
       * Массив размеров.
       *
       * Если не указать для размерного товара (обувь, одежда и др.), сгенерируется автоматически с `techSize` = "A", `wbSize` = "1" и баркодом
       */
      readonly sizes?: readonly {
        /**
         * Размер товара (например, XL, 45)
         */
        readonly techSize?: string;

        /**
         * Российский размер товара
         */
        readonly wbSize?: string;

        /**
         * Цена товара
         */
        readonly price?: number;

        /**
         * Массив баркодов для размера.
         *
         * Если не указать, сгенерируется автоматически.
         *
         * Позволяет связать несколько баркодов с одним размером, например, для разных партий товара
         */
        readonly skus?: readonly string[];
      }[];

      /**
       * Характеристики товара.
       *
       * Можно получить методом [Характеристики предмета](./work-with-products#tag/categoriesSubcategoriesAndCharacteristics/paths/~1content~1v2~1object~1charcs~1%7BsubjectId%7D/get)
       */
      readonly characteristics?: readonly {
        /**
         * ID характеристики
         */
        readonly id: number;

        /**
         * Значения характеристики.
         *
         * Тип данных — массив строк или число — зависит от типа характеристики, см. описание поля `charcType` в методе [Характеристики предмета](./work-with-products#tag/categoriesSubcategoriesAndCharacteristics/paths/~1content~1v2~1object~1charcs~1%7BsubjectId%7D/get).
         *
         * Допустимое количество значений отображено в поле `maxCount` того же метода
         */
        readonly value: WbJsonValue;
      }[];
    }[];
  }[];
};
/**
 * Успешный ответ метода «Создание карточек товаров».
 *
 * 200: Успешно.
 */
export type PostContentV2CardsUploadResponse = {
  /**
   * Данные ответа
   *
   * Пример: `null`.
   */
  readonly data?: Readonly<Record<string, never>> | null;

  /**
   * Флаг ошибки
   */
  readonly error?: boolean;

  /**
   * Описание ошибки
   */
  readonly errorText?: string;

  /**
   * Дополнительные ошибки
   */
  readonly additionalErrors?:
    | {
        /** Описание отсутствует в OpenAPI WB. */ readonly string?: string;
      }
    | null
    | string
    | null
    | {
        /** Описание отсутствует в OpenAPI WB. */ readonly error: string;
      };
};
