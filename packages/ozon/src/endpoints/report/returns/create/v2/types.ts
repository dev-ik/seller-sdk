import type {
  OzonCreateReportResponse,
  OzonReportLanguage,
} from "../../../shared/types.js";
export type OzonReturnReportStatus =
  | "DisputeOpened"
  | "OnSellerApproval"
  | "ArrivedAtReturnPlace"
  | "OnSellerClarification"
  | "OnSellerClarificationAfterPartialCompensation"
  | "OfferedPartialCompensation"
  | "ReturnMoneyApproved"
  | "PartialCompensationReturned"
  | "CancelledDisputeNotOpen"
  | "Rejected"
  | "CrmRejected"
  | "Cancelled"
  | "Approved"
  | "ApprovedByOzon"
  | "ReceivedBySeller"
  | "MovingToSeller"
  | "ReturnCompensated"
  | "ReturningToSellerByCourier"
  | "Utilizing"
  | "Utilized"
  | "MoneyReturned"
  | "PartialCompensationInProcess"
  | "DisputeYouOpened"
  | "CompensationRejected"
  | "DisputeOpening"
  | "CompensationOffered"
  | "WaitingCompensation"
  | "SendingError"
  | "CompensationRejectedBySla"
  | "CompensationRejectedBySeller"
  | "MovingToOzon"
  | "ReturnedToOzon"
  | "MoneyReturnedBySystem"
  | "WaitingShipment";

export interface CreateReturnsReportV2Request {
  /**
   * Фильтр.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly filter: {
    /**
     * Дата, с которой данные отображаются в отчёте. Доступно только за последние три месяца.
     *
     * Формат: `date-time`.
     *
     * <!-- seller-sdk:ozon-openapi -->
     */
    readonly date_from: string;

    /**
     * Дата, по которую данные отображаются в отчёте. Доступно только за последние три месяца.
     *
     * Формат: `date-time`.
     *
     * <!-- seller-sdk:ozon-openapi -->
     */
    readonly date_to: string;

    /**
     * Фильтр по схеме работы: - `FBS` — возвраты на свой склад. - `FBO` — возвраты на склад
     * маркетплейса. - `ALL` — все возвраты.
     *
     * <!-- seller-sdk:ozon-openapi -->
     */
    readonly delivery_schema?: "FBS" | "FBO" | "ALL";

    /**
     * Фильтр по статусу возврата: - `DisputeOpened` — открыт спор с покупателем; - `OnSellerApproval`
     * — на согласовании у продавца; - `ArrivedAtReturnPlace` — в пункте выдачи; -
     * `OnSellerClarification` — на уточнении у продавца; -
     * `OnSellerClarificationAfterPartialCompensation` — на уточнении у продавца после частичной
     * компенсации; - `OfferedPartialCompensation` — предложена частичная компенсация; -
     * `ReturnMoneyApproved` — одобрен возврат денег; - `PartialCompensationReturned` — вернули часть
     * денег; - `CancelledDisputeNotOpen` — возврат отклонён, спор не открыт; - `Rejected` — заявка
     * отклонена; - `CrmRejected` — заявка отклонена Ozon; - `Cancelled` — заявка отменена; -
     * `Approved` — заявка…
     *
     * <!-- seller-sdk:ozon-openapi -->
     */
    readonly status: OzonReturnReportStatus;
  };

  /**
   * Язык ответа: - `RU` — русский, - `EN` — английский.
   *
   * Пример: `DEFAULT`.
   *
   * <!-- seller-sdk:ozon-openapi -->
   */
  readonly language?: OzonReportLanguage;
}
export type CreateReturnsReportV2Response = OzonCreateReportResponse;
