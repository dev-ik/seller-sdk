// Generated public types for this Wildberries endpoint.
/**
 * Параметры метода «Характеристики предмета».
 *
 * Метод возвращает параметры характеристик предмета: названия, типы данных, единицы измерения и так далее. В запросе необходимо указать ID [предмета](/openapi/work-with-products#tag/categoriesSubcategoriesAndCharacteristics/paths/~1content~1v2~1object~1all/get).
 *
 *  Для получения значений характеристик Цвет (/openapi/work-with-products#tag/categoriesSubcategoriesAndCharacteristics/paths/~1content~1v2~1directory~1colors/get), Пол (/openapi/work-with-products#tag/categoriesSubcategoriesAndCharacteristics/paths/~1content~1v2~1directory~1kinds/get), Страна производства (/openapi/work-with-products#tag/categoriesSubcategoriesAndCharacteristics/paths/~1content~1v2~1directory~1countries/get), Сезон (/openapi/work-with-products#tag/categoriesSubcategoriesAndCharacteristics/paths/~1content~1v2~1directory~1seasons/get), Ставка НДС (/openapi/work-with-products#tag/categoriesSubcategoriesAndCharacteristics/paths/~1content~1v2~1directory~1vat/get) и ТНВЭД-код (/openapi/work-with-products#tag/categoriesSubcategoriesAndCharacteristics/paths/~1content~1v2~1directory~1tnved/get) используйте отдельные методы
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
 * GET /content/v2/object/charcs/{subjectId}
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/items
 */
export type GetContentV2ObjectCharcsSubjectIdInput = {
  /**
   * Параметры пути.
   */
  readonly path: {
    /**
     * ID предмета
     *
     * Пример: `105`.
     */
    readonly subjectId: number;
  } /**
   * Параметры строки запроса.
   */;
  readonly query?: {
    /**
     * Язык полей ответа `subjectName` и `name`:
     *  - `ru` — русский
     *  - `en` — английский
     *  - `zh` — китайский
     *
     * Не используется в песочнице. Данные песочницы возвращаются только на русском языке
     *
     * Пример: `"en"`.
     */
    readonly locale?: string;
  };
};
/**
 * Успешный ответ метода «Характеристики предмета».
 *
 * 200: Успешно.
 */
export type GetContentV2ObjectCharcsSubjectIdResponse = {
  /**
   * Данные
   */
  readonly data?: readonly {
    /**
     * ID характеристики
     */
    readonly charcID?: number;

    /**
     * Название предмета
     */
    readonly subjectName?: string;

    /**
     * ID предмета
     */
    readonly subjectID?: number;

    /**
     * Название характеристики
     */
    readonly name?: string;

    /**
     * - `true` — характеристику необходимо обязательно указать в карточке товара
     * - `false` — характеристику необязательно указывать
     */
    readonly required?: boolean;

    /**
     * Единица измерения
     */
    readonly unitName?: string;

    /**
     * Максимальное количество значений, которое можно присвоить характеристике при [создании](./work-with-products#tag/listingItems) или [редактировании](./work-with-products#tag/listings/paths/~1content~1v2~1cards~1update/post) карточек товаров.
     *
     * Используется только для характеристик с `"charcType":1` — массив строк.
     *
     * Характеристикам с `"charcType":4` — число, можно присвоить только одно значение.
     *
     * Если `"maxCount":0`, количество значений не ограничено
     */
    readonly maxCount?: number;

    /**
     * Характеристика популярна у пользователей (true - да, false - нет)
     */
    readonly popular?: boolean;

    /**
     * Тип данных характеристики, который необходимо использовать при [создании](./work-with-products#tag/listingItems) или [редактировании](./work-with-products#tag/listings/paths/~1content~1v2~1cards~1update/post) карточек товаров:
     *  - `1` — массив строк
     *  - `4` — число (целое либо с десятичной дробью)
     *  - `0` — характеристика не используется
     */
    readonly charcType?: number;

    /**
     * Ключевая характеристика. Является ли характеристика значимой для покупателей:
     *  - `true` — да
     *  - `false` — нет
     */
    readonly hasFilter?: boolean;

    /**
     * Признак [меняющейся характеристики](/knowledge-base/articles/019d49a4-1320-71bb-9dac-8ba07e7177ce/rabota-s-tovarami#obuedinenie-i-razuedinenie-kartochek-tovarov). Значение размечает характеристики, по которым варианты отличаются друг от друга:
     *  - `true` — варианты товара отличаются по этой характеристике
     *  - `false` — варианты товара не отличаются по этой характеристике
     */
    readonly isVariable?: boolean;

    /**
     * Как передать характеристику в запросах на [cоздание](./work-with-products#tag/listingItems/paths/~1content~1v2~1cards~1upload/post), [создание с присоединением](./work-with-products#tag/listingItems/paths/~1content~1v2~1cards~1upload~1add/post) и [редактирование](./work-with-products#tag/listings/paths/~1content~1v2~1cards~1update/post) карточек товара:
     *  - `true` — в соответствующем параметре запроса
     *  - `false` — внутри массива `characteristics`
     */
    readonly existNamedField?: boolean;
  }[];

  /**
   * Флаг наличия ошибки
   */
  readonly error?: boolean;

  /**
   * Текст ошибки
   */
  readonly errorText?: string;

  /**
   * Дополнительные ошибки
   */
  readonly additionalErrors?: string | null;
};
