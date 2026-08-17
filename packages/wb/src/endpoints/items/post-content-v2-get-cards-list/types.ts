// Generated public types for this Wildberries endpoint.
import type { WbJsonValue } from "../../../schema.js";

/**
 * Параметры метода «Список карточек товаров».
 *
 * Метод возвращает список созданных карточек товаров.
 *
 *  В ответе метода не будет карточек, находящихся в корзине. Получить такие карточки можно через отдельный метод (/openapi/work-with-products#tag/listings/paths/~1content~1v2~1get~1cards~1trash/post)
 *
 * Чтобы получить **больше 100** карточек товаров, используйте пагинацию:
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
 *  },
 *  "filter": {
 *  "withPhoto": -1
 *  }
 *  }
 *  }
 *  Чтобы после выгрузки получать только новые или обновлённые карточки товаров, используйте сортировку по возрастанию: `"sort":{"ascending":true}`.
 *  2. Скопируйте `"updatedAt":"***","nmID":"***"` из `cursor` ответа и вставьте в `cursor` запроса.
 *  3. Повторите запрос.
 *  4. Повторяйте пункты 2 и 3, пока значение `total` в ответе не станет меньше, чем значение `limit` в запросе. Это будет означать, что вы получили все карточки.
 *
 * Чтобы получать только карточки товаров, которые были созданы или обновлены после предыдущей выгрузки данных:
 *  1. Сохраните поля `"cursor":{"updatedAt":"***","nmID":"***"}` из последнего ответа предыдущей выгрузки. При выгрузке используйте сортировку по возрастанию: `"sort":{"ascending":true}`.
 *  2. Укажите в первом запросе сохранённые поля `"cursor":{"updatedAt":"***","nmID":"***"}`. Продолжайте использовать сортировку по возрастанию.
 *  3. Сохраните поля `"cursor":{"updatedAt":"***","nmID":"***"}` из последнего ответа текущей выгрузки.
 *
 * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца:
 *
 * | Период | Лимит | Интервал | Всплеск |
 * | --- | --- | --- | --- |
 * | 1 мин | 100 запросов | 600 мс | 5 запросов |
 *
 * POST /content/v2/get/cards/list
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/items
 */
export type PostContentV2GetCardsListInput = {
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
     *
     * Пример: `"ru"`.
     */
    readonly locale?: string;
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
         * Сортировать по полю `updatedAt`:
         *  - `false` — по убыванию
         *  - `true` — по возрастанию
         *
         * Значение по умолчанию: `false`.
         */
        readonly ascending?: boolean;
      };

      /**
       * Параметры фильтрации
       */
      readonly filter?: {
        /**
         * Фильтр по фото:
         *  * `-1` — любые карточки товаров
         *  * `0` — только карточки без фото. С [16 июня](/release-notes?id=531) — любые карточки товаров
         *  * `1` — только карточки с фото
         *  * `2` — только карточки без фото. С [16 июня](/release-notes?id=531)
         *
         * Значение по умолчанию: `0`.
         */
        readonly withPhoto?: -1 | 0 | 1 | 2;

        /**
         * Поиск по артикулу продавца, артикулу WB, баркоду
         */
        readonly textSearch?: string;

        /**
         * Поиск по ID ярлыков
         */
        readonly tagIDs?: readonly number[];

        /**
         * Фильтр по категории:
         *  - `true` — только разрешённые
         *  - `false` — все
         *
         *  Не используется в песочнице
         */
        readonly allowedCategoriesOnly?: boolean;

        /**
         * Поиск по ID предметов
         */
        readonly objectIDs?: readonly number[];

        /**
         * Поиск по брендам
         */
        readonly brands?: readonly string[];

        /**
         * Поиск по [ID для объединённых карточек товаров](/knowledge-base/articles/019d49a4-1320-71bb-9dac-8ba07e7177ce/rabota-s-tovarami#obuedinenie-i-razuedinenie-kartochek-tovarov)
         */
        readonly imtID?: number;
      };

      /**
       * Курсор
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
         * Дата и время изменения
         */
        readonly updatedAt?: string | null;

        /**
         * Артикул WB, с которого надо запрашивать следующий список карточек товаров
         */
        readonly nmID?: number;
      };
    };
  };
};
/**
 * Успешный ответ метода «Список карточек товаров».
 *
 * 200: Успешно.
 */
export type PostContentV2GetCardsListResponse = {
  /**
   * Список карточек товаров
   */
  readonly cards?: readonly {
    /**
     * Артикул WB
     */
    readonly nmID?: number;

    /**
     * ID для [объединённых](/knowledge-base/articles/019d49a4-1320-71bb-9dac-8ba07e7177ce/rabota-s-tovarami#obuedinenie-i-razuedinenie-kartochek-tovarov) карточек товаров.
     * Един для всех артикулов WB группы объединённых карточек.
     * У каждой карточки товара есть `imtID`, даже если она не объединена с другими карточками
     */
    readonly imtID?: number;

    /**
     * Внутренний технический ID карточки товара
     *
     * Формат: `UUID`.
     */
    readonly nmUUID?: string;

    /**
     * ID предмета
     */
    readonly subjectID?: number;

    /**
     * Название предмета
     */
    readonly subjectName?: string;

    /**
     * Артикул продавца
     */
    readonly vendorCode?: string;

    /**
     * Бренд
     */
    readonly brand?: string;

    /**
     * Наименование товара
     */
    readonly title?: string;

    /**
     * Описание товара
     */
    readonly description?: string;

    /**
     * Требуется ли код маркировки [Честного знака](https://честныйзнак.рф/) для этого товара:
     *  - `false` — не требуется
     *  - `true` — требуется
     */
    readonly needKiz?: boolean;

    /**
     * Есть ли подтверждение от продавца, что обязательный код маркировки [Честного знака](https://честныйзнак.рф/) нанесён на товар:
     *  - `true` — да
     *  - `false` — нет
     *
     * Является ли код маркировки [Честного знака](https://честныйзнак.рф/) обязательным, указано в поле `needKiz`
     *
     * Значение по умолчанию: `false`.
     */
    readonly kizMarked?: boolean;

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
    readonly characteristics?: readonly {
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
    }[];

    /**
     * Размеры товара
     */
    readonly sizes?: readonly {
      /**
       * Числовой ID размера для данного артикула WB
       */
      readonly chrtID?: number;

      /**
       * Размер товара (А, XXL, 57 и др.)
       */
      readonly techSize?: string;

      /**
       * Российский размер товара
       */
      readonly wbSize?: string;

      /**
       * Баркод товара
       */
      readonly skus?: readonly string[];
    }[];

    /**
     * Ярлыки
     */
    readonly tags?: readonly {
      /**
       * ID ярлыка
       */
      readonly id?: number;

      /**
       * Название ярлыка
       */
      readonly name?: string;

      /**
       * Цвет ярлыка.
       *
       * Доступные цвета:
       * - `D1CFD7` — серый
       * - `FEE0E0` — красный
       * - `ECDAFF` — фиолетовый
       * - `E4EAFF` — синий
       * - `DEF1DD` — зеленый
       * - `FFECC7` — желтый
       */
      readonly color?: string;
    }[];

    /**
     * Дата и время создания
     */
    readonly createdAt?: string;

    /**
     * Дата и время изменения
     */
    readonly updatedAt?: string;
  }[];

  /**
   * Пагинатор
   */
  readonly cursor?: {
    /**
     * Дата и время, с которых надо запрашивать следующий список карточек товаров
     */
    readonly updatedAt?: string;

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
