export interface GetEtgbDeclarationsV1Request {
  /**
   * Фильтр по периоду создания деклараций.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly date: {
    /**
     * Дата начала.
     *
     * Формат: `date-time`.
     *
     * <!-- seller-sdk:ozon-openapi -->
     */
    readonly from: string;

    /**
     * Дата окончания.
     *
     * Формат: `date-time`.
     *
     * <!-- seller-sdk:ozon-openapi -->
     */
    readonly to: string;
  };
}
export interface OzonEtgbDeclaration {
  readonly date?: string;
  readonly number?: string;
  readonly url?: string;
}
export interface OzonEtgbPosting {
  readonly etgb?: OzonEtgbDeclaration;
  readonly posting_number?: string;
}
export interface GetEtgbDeclarationsV1Response {
  readonly result?: readonly OzonEtgbPosting[];
}
