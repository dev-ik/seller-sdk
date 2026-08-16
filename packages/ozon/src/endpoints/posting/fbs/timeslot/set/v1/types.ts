export interface SetFbsPostingTimeslotRequest {
  /**
   * Новый период для даты доставки.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly new_timeslot: {
    /**
     * Дата начала периода. Формат: `YYYY-MM-DDTHH:mm:ss.sssZ`.
     *
     * Формат: `date-time`.
     *
     * <!-- seller-sdk:ozon-openapi -->
     */
    readonly from: string;

    /**
     * Дата конца периода. Формат: `YYYY-MM-DDTHH:mm:ss.sssZ`.
     *
     * Формат: `date-time`.
     *
     * <!-- seller-sdk:ozon-openapi -->
     */
    readonly to: string;
  };

  /**
   * Номер отправления.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly posting_number: string;
}

export interface SetFbsPostingTimeslotResponse {
  readonly result?: boolean;
}
