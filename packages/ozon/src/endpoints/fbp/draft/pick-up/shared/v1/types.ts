export interface OzonFbpPickupDetails {
  /**
   * Адрес.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly address: string;

  /**
   * Комментарий.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly comment: string;

  /**
   * Дата доставки.
   *
   * Формат: `date-time`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly date: string;

  /**
   * ФИО отправителя.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly sender_name: string;

  /**
   * Номер телефона отправителя.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly sender_phone: string;
}
