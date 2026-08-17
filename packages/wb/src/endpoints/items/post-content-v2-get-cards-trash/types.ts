// Generated public types for this Wildberries endpoint.
import type { WbJsonValue } from "../../../schema.js";

/**
 * Параметры метода «Список карточек товаров в корзине».
 *
 * Метод возвращает список карточек товаров в корзине.
 *
 * Чтобы получить **больше 100** карточек товаров, используйте пагинацию.
 *  1. Сделайте первый запрос:
 *
 *
 *  {
 *  "settings": {
 *  "sort": {
 *  "ascending": true
 *  },
 *  "cursor": {
 *  "limit": 100
 *  }
 *  }
 *  }
 *  Чтобы получать только карточки товаров, которые были перенесены в корзину после выгрузки, используйте сортировку по возрастанию: `"sort":{"ascending":true}`.
 *  2. Скопируйте `"trashedAt":"***","nmID":***` из `cursor` ответа и вставьте в `cursor` запроса.
 *  3. Повторите запрос.
 *  4. Повторяйте пункты 2 и 3, пока значение `total` в ответе не станет меньше, чем значение `limit` в запросе. Это будет означать, что вы получили все карточки.
 *
 * Чтобы получать только карточки товаров, которые были перенесены в корзину после предыдущей выгрузки данных:
 *  1. Сохраните поля `"cursor":{"trashedAt":"***","nmID":***}` из последнего ответа предыдущей выгрузки. При выгрузке используйте сортировку по возрастанию: `"sort":{"ascending":true}`.
 *  2. Укажите в первом запросе сохранённые поля `"cursor":{"trashedAt":"***","nmID":"***"}`. Продолжайте использовать сортировку по возрастанию.
 *  3. Сохраните поля `"cursor":{"trashedAt":"***","nmID":***}` из последнего ответа текущей выгрузки.
 *
 *
 * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца для всех методов категории Контент:
 *
 * | Период | Лимит | Интервал | Всплеск |
 * | --- | --- | --- | --- |
 * | 1 мин | 100 запросов | 600 мс | 5 запросов |
 *
 * Исключение — методы:
 *
 *  создания карточек товаров (/openapi/work-with-products#tag/listingItems/paths/~1content~1v2~1cards~1upload/post)
 *  создания карточек товаров с присоединением (/openapi/work-with-products#tag/listingItems/paths/~1content~1v2~1cards~1upload~1add/post)
 *  редактирования карточек товаров (/openapi/work-with-products#tag/listings/paths/~1content~1v2~1cards~1update/post)
 *  восстановления карточек товаров из корзины (/openapi/work-with-products#tag/listings/paths/~1content~1v2~1cards~1recover/post)
 *  получения списка рекомендаций в карточках товаров (/openapi/work-with-products#tag/recommendations/operation/postV1RecommendationsList)
 *  установки рекомендаций для товаров (/openapi/work-with-products#tag/recommendations/operation/postV1RecommendationsSet)
 *
 * POST /content/v2/get/cards/trash
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/items
 */
export type PostContentV2GetCardsTrashInput = {
  /**
   * Параметры строки запроса.
   */
  readonly query?: {
    /**
     * Язык полей ответа `name`, `value` и `object`:
     *  - `ru` — русский
     *  - `en` — английский
     *  - `zh` — китайский
     *
     * Не используется в песочнице. Данные песочницы возвращаются только на русском языке
     */
    readonly locale?: "ru" | "en" | "zh";
  } /**
   * Тело запроса.
   */;
  readonly body: {
    /**
     * Настройки
     */
    readonly settings?: {
      /**
       * Параметр сортировки
       */
      readonly sort?: {
        /**
         * Сортировать по `trashedAt`:
         *  - `false` — по убыванию
         *  - `true` — по возрастанию
         *
         * Значение по умолчанию: `false`.
         */
        readonly ascending?: boolean;
      };

      /**
       * Пагинатор
       */
      readonly cursor?: {
        /**
         * Сколько карточек товаров выдать в ответе
         *
         * Значение по умолчанию: `10`.
         *
         * Максимальное значение: 100.
         */
        readonly limit?: number;

        /**
         * Дата и время помещения в корзину
         */
        readonly trashedAt?: string;

        /**
         * Артикул WB, с которого надо запрашивать следующий список карточек товаров
         */
        readonly nmID?: number;
      };

      /**
       * Параметры фильтрации
       */
      readonly filter?: {
        /**
         * Поиск по артикулу продавца, артикулу WB, баркоду
         */
        readonly textSearch?: string;
      };
    };
  };
};
/**
 * Успешный ответ метода «Список карточек товаров в корзине».
 *
 * 200: Успешно.
 */
export type PostContentV2GetCardsTrashResponse = {
  /**
   * Массив карточек товаров
   */
  readonly cards?: readonly {
    /**
     * Артикул WB
     */
    readonly nmID?: number;

    /**
     * Артикул продавца
     */
    readonly vendorCode?: string;

    /**
     * Есть ли подтверждение от продавца, что обязательный код маркировки [Честного знака](https://честныйзнак.рф/) нанесён на товар:
     *  - `true` — да
     *  - `false` — нет
     *
     * Чтобы проверить, является ли код маркировки [Честного знака](https://честныйзнак.рф/) обязательным, используйте метод [Список карточек товаров](./work-with-products#tag/listings/paths/~1content~1v2~1get~1cards~1list/post), поле ответа `needKiz`
     *
     * Значение по умолчанию: `false`.
     */
    readonly kizMarked?: boolean;

    /**
     * ID предмета
     */
    readonly subjectID?: number;

    /**
     * Название предмета
     */
    readonly subjectName?: string;

    /**
     * Массив фото
     */
    readonly photos?: readonly {
      /**
       * URL фото `900x1200`
       */
      readonly big?: string;

      /**
       * URL фото `248x328`
       */
      readonly c246x328?: string;

      /**
       * URL фото `516x688`
       */
      readonly c516x688?: string;

      /**
       * URL фото `600x600`
       */
      readonly square?: string;

      /**
       * URL фото `75x100`
       */
      readonly tm?: string;
    }[];

    /**
     * URL видео
     */
    readonly video?: string;

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
     * Массив размеров
     */
    readonly sizes?: readonly {
      /**
       * ID размера
       */
      readonly chrtID?: number;

      /**
       * Размер товара
       */
      readonly techSize?: string;

      /**
       * Российский размер товара
       */
      readonly wbSize?: string;

      /**
       * Массив баркодов
       */
      readonly skus?: readonly string[];
    }[];

    /**
     * Габариты и вес товара c упаковкой, см и кг
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

      /**
       * Потенциальная некорректность габаритов товара:
       *
       * - `true` — не выявлена. `"isValid":true` не гарантирует, что размеры указаны корректно. В отдельных случаях (например, при создании новой категории товаров) `"isValid":true` будет возвращаться при любых значениях, кроме нулевых.
       *
       * - `false` — указанные габариты значительно отличаются от средних по категории (предмету). Рекомендуется перепроверить, правильно ли указаны размеры товара в упаковке в `сантиметрах`. Функциональность карточки товара, в том числе начисление логистики и хранения, при этом ограничена не будет. Логистика и хранение продолжают начисляться — по текущим габаритам. Также `"isValid":false` возвращается при отсутствии значений или нулевом значении любой стороны.
       */
      readonly isValid?: boolean;
    };

    /**
     * Характеристики
     */
    readonly characteristics?:
      | readonly {
          /**
           * ID характеристики
           */
          readonly id?: number;

          /**
           * Название характеристики
           */
          readonly name?: string;

          /**
           * Значение характеристики. Тип значения зависит от типа характеристики
           */
          readonly value?: WbJsonValue;
        }[]
      | null;

    /**
     * Date and time the item was listed
     */
    readonly createdAt?: string;

    /**
     * Дата и время помещения в корзину
     */
    readonly trashedAt?: string;
  }[];

  /**
   * Пагинатор
   */
  readonly cursor?: {
    /**
     * Дата и время, с которых надо запрашивать следующий список карточек товаров
     */
    readonly trashedAt?: string;

    /**
     * Артикул WB, с которого надо запрашивать следующий список карточек товаров
     */
    readonly nmID?: number;

    /**
     * Количество возвращённых карточек товаров
     */
    readonly total?: number;
  };
};
