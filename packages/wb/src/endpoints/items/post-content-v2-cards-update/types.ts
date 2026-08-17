// Generated public types for this Wildberries endpoint.
import type { WbJsonValue } from "../../../schema.js";

/**
 * Параметры метода «Редактирование карточек товаров».
 *
 * Метод обновляет данные карточек товаров. Также используйте его, чтобы добавлять новые размеры.
 *
 *  Карточка товара перезаписывается при обновлении. Поэтому в запросе нужно передать в том числе те параметры карточки, которые вы не собираетесь обновлять. Их значения можно получить в списке карточек товаров (/openapi/work-with-products#tag/listings/paths/~1content~1v2~1get~1cards~1list/post) и списке карточек товаров в корзине (/openapi/work-with-products#tag/listings/paths/~1content~1v2~1get~1cards~1trash/post).
 *
 * С помощью этого метода нельзя обновлять или удалять:
 *  - баркоды размеров товара. Можно только добавить дополнительные баркоды
 *  - параметры `photos`, `video` и `tags`
 *  - цены товаров. Цену можно задать, только если вы добавляете новые размеры
 *
 * При добавлении нового размера укажите его цену через параметр `price`. Если в запросе не указан `price`, цена размера будет `0` — в этом случае изменить её можно будет с помощью методов:
 *  - [Установить цены и скидки](/openapi/work-with-products#tag/Ceny-i-skidki/paths/~1api~1v2~1upload~1task/post), если у [товара](/openapi/work-with-products#tag/Ceny-i-skidki/paths/~1api~1v2~1list~1goods~1filter/get) `"editablePriceSize":false`
 *  - [Установить цены для размеров](/openapi/work-with-products#tag/Ceny-i-skidki/paths/~1api~1v2~1upload~1task~1size/post), если у [товара](/openapi/work-with-products#tag/Ceny-i-skidki/paths/~1api~1v2~1list~1goods~1filter/get) `"editablePriceSize":true`
 *
 * Габариты товаров можно указать только в `сантиметрах`, вес товара с упаковкой — в `килограммах`.
 *
 * Одним запросом можно отредактировать максимум 3000 карточек товаров (`nmID`). Максимальный размер запроса 10 Мб.
 *
 * Если ответ `Успешно` (`200`), но какие-то карточки не обновились, проверьте [список несозданных карточек товаров](/openapi/work-with-products#tag/listings/paths/~1content~1v2~1cards~1error~1list/post).
 *
 * Синхронизация данных с сервисами может занимать до 30 минут. В течение этого времени невозможно добавить остатки на склады и настроить цены.
 *
 * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца:
 *
 * | Период | Лимит | Интервал | Всплеск |
 * | --- | --- | --- | --- |
 * | 1 мин | 10 запросов | 6 сек | 5 запросов |
 *
 * POST /content/v2/cards/update
 *
 * Источник: https://dev.wildberries.ru/docs/openapi/items
 */
export type PostContentV2CardsUpdateInput = {
  /**
   * Тело запроса.
   *
   * Пример: `[{"nmID":11111111,"vendorCode":"wbiz72wmro","kizMarked":true,"brand":"","title":"Свитер женский оверсайз с горлом","description":"12345","dimensions":{"length":35,"width":40,"height":15,"weightBrutto":3},"characteristics":[{"id":14177450,"value":["хлопок 50% акрил 50%"]},{"id":50,"value":["свободный крой"]}],"sizes":[{"chrtID":12345678,"techSize":"ONE SIZE","wbSize":"78-90","skus":["123487653460134"]}]}]`.
   */
  readonly body?: readonly {
    /**
     * Артикул WB
     */
    readonly nmID: number;

    /**
     * Артикул продавца
     */
    readonly vendorCode: string;

    /**
     * Подтверждение, что на товар нанесён обязательный код маркировки [Честного знака](https://честныйзнак.рф/):
     *  - `true` — продавец подтверждает, что на товар нанесён обязательный код маркировки.
     *  - `false` — продавец подтверждает, что на товар нанесён обязательный код маркировки. Передайте в запросе `true`, чтобы подтвердить наличие на товаре обязательного кода маркировки. Карточка товара не пройдёт модерацию, если нет подтверждения продавца о том, что обязательный код маркировки нанесён на товар.
     *
     * Чтобы проверить, является ли код маркировки [Честного знака](https://честныйзнак.рф/) обязательным, используйте метод [Список карточек товаров](./work-with-products#tag/listings/paths/~1content~1v2~1get~1cards~1list/post), поле ответа `needKiz`
     *
     * Значение по умолчанию: `false`.
     */
    readonly kizMarked?: boolean;

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
     * Габариты и вес товара **c упаковкой**.
     *
     * Укажите в `сантиметрах` и `килограммах` для любого товара.
     *
     * Синхронизация новых данных с сервисом может занимать до 30 минут
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

    /**
     * Массив размеров
     *
     * Для безразмерного товара всё равно нужно передавать данный массив без параметров (wbSize и techSize), но с баркодом
     */
    readonly sizes: readonly {
      /**
       * ID размера для данного артикула WB
       *
       * Обязателен к заполнению для существующих размеров
       *
       * Для добавляемых размеров не указывается
       */
      readonly chrtID?: number;

      /**
       * Размер товара (например, XL, S, 45)
       */
      readonly techSize?: string;

      /**
       * Российский размер товара
       */
      readonly wbSize?: string;

      /**
       * Цена товара, ₽
       *
       * Указывается при добавлении размера
       */
      readonly price?: number;

      /**
       * Баркоды
       */
      readonly skus?: readonly string[];
    }[];
  }[];
};
/**
 * Успешный ответ метода «Редактирование карточек товаров».
 *
 * 200: Успешно.
 */
export type PostContentV2CardsUpdateResponse = {
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
