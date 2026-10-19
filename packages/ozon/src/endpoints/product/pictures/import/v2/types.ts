export type ImportProductPicturesV2Request = {
  /**
   * Информация о товарах.
   *
   * Максимум элементов: `100`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly items?: ReadonlyArray<{
    /**
     * Идентификатор товара в системе продавца — артикул.
     *
     * <!-- seller-sdk:ozon-openapi -->
     */
    readonly offer_id: string;
    /**
     * Главное изображение товара.
     *
     * <!-- seller-sdk:ozon-openapi -->
     */
    readonly primary_image?: string;
    /**
     * Маркетинговый цвет.
     *
     * <!-- seller-sdk:ozon-openapi -->
     */
    readonly color_image?: string;
    /**
     * Список ссылок на изображения. Изображения в массиве расположены в порядке их расположения на
     * сайте. Первое изображение в массиве будет главным, если в запросе не передано `primary_image`.
     *
     * Максимум элементов: `50`.
     *
     * <!-- seller-sdk:ozon-openapi -->
     */
    readonly images?: ReadonlyArray<string>;
  }>;
};

export type ImportProductPicturesV2Response = {
  readonly task_id?: number;
};
