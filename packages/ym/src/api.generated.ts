// This file is generated from docs/ym/openapi/**/*.yaml.
// Run `pnpm update:ym` instead of editing it manually.

import type { YmOperationExecutor } from "./operation.js";
import type { YmRequestOptions } from "./request-options.js";
import { executeGetAuthTokenInfo } from "./endpoints/auth/get-auth-token-info/execute.js";
import type { GetAuthTokenInfoResponse } from "./endpoints/auth/get-auth-token-info/types.js";
export type {
  GetAuthTokenInfoInput,
  GetAuthTokenInfoResponse,
} from "./endpoints/auth/get-auth-token-info/types.js";
import { executePutBidsForBusiness } from "./endpoints/bids/put-bids-for-business/execute.js";
import type {
  PutBidsForBusinessInput,
  PutBidsForBusinessResponse,
} from "./endpoints/bids/put-bids-for-business/types.js";
export type {
  PutBidsForBusinessInput,
  PutBidsForBusinessResponse,
} from "./endpoints/bids/put-bids-for-business/types.js";
import { executePutBidsForCampaign } from "./endpoints/bids/put-bids-for-campaign/execute.js";
import type {
  PutBidsForCampaignInput,
  PutBidsForCampaignResponse,
} from "./endpoints/bids/put-bids-for-campaign/types.js";
export type {
  PutBidsForCampaignInput,
  PutBidsForCampaignResponse,
} from "./endpoints/bids/put-bids-for-campaign/types.js";
import { executeGetBidsInfoForBusiness } from "./endpoints/bids/get-bids-info-for-business/execute.js";
import type {
  GetBidsInfoForBusinessInput,
  GetBidsInfoForBusinessResponse,
} from "./endpoints/bids/get-bids-info-for-business/types.js";
export type {
  GetBidsInfoForBusinessInput,
  GetBidsInfoForBusinessResponse,
} from "./endpoints/bids/get-bids-info-for-business/types.js";
import { executeGetBidsRecommendations } from "./endpoints/bids/get-bids-recommendations/execute.js";
import type {
  GetBidsRecommendationsInput,
  GetBidsRecommendationsResponse,
} from "./endpoints/bids/get-bids-recommendations/types.js";
export type {
  GetBidsRecommendationsInput,
  GetBidsRecommendationsResponse,
} from "./endpoints/bids/get-bids-recommendations/types.js";
import { executeGetBusinessSettings } from "./endpoints/businesses/get-business-settings/execute.js";
import type {
  GetBusinessSettingsInput,
  GetBusinessSettingsResponse,
} from "./endpoints/businesses/get-business-settings/types.js";
export type {
  GetBusinessSettingsInput,
  GetBusinessSettingsResponse,
} from "./endpoints/businesses/get-business-settings/types.js";
import { executeDeleteOffers } from "./endpoints/businessOfferMappings/delete-offers/execute.js";
import type {
  DeleteOffersInput,
  DeleteOffersResponse,
} from "./endpoints/businessOfferMappings/delete-offers/types.js";
export type {
  DeleteOffersInput,
  DeleteOffersResponse,
} from "./endpoints/businessOfferMappings/delete-offers/types.js";
import { executeGetOfferMappings } from "./endpoints/businessOfferMappings/get-offer-mappings/execute.js";
import type {
  GetOfferMappingsInput,
  GetOfferMappingsResponse,
} from "./endpoints/businessOfferMappings/get-offer-mappings/types.js";
export type {
  GetOfferMappingsInput,
  GetOfferMappingsResponse,
} from "./endpoints/businessOfferMappings/get-offer-mappings/types.js";
import { executeUpdateOfferMappings } from "./endpoints/businessOfferMappings/update-offer-mappings/execute.js";
import type {
  UpdateOfferMappingsInput,
  UpdateOfferMappingsResponse,
} from "./endpoints/businessOfferMappings/update-offer-mappings/types.js";
export type {
  UpdateOfferMappingsInput,
  UpdateOfferMappingsResponse,
} from "./endpoints/businessOfferMappings/update-offer-mappings/types.js";
import { executeAddOffersToArchive } from "./endpoints/businessOfferMappings/add-offers-to-archive/execute.js";
import type {
  AddOffersToArchiveInput,
  AddOffersToArchiveResponse,
} from "./endpoints/businessOfferMappings/add-offers-to-archive/types.js";
export type {
  AddOffersToArchiveInput,
  AddOffersToArchiveResponse,
} from "./endpoints/businessOfferMappings/add-offers-to-archive/types.js";
import { executeDeleteOffersFromArchive } from "./endpoints/businessOfferMappings/delete-offers-from-archive/execute.js";
import type {
  DeleteOffersFromArchiveInput,
  DeleteOffersFromArchiveResponse,
} from "./endpoints/businessOfferMappings/delete-offers-from-archive/types.js";
export type {
  DeleteOffersFromArchiveInput,
  DeleteOffersFromArchiveResponse,
} from "./endpoints/businessOfferMappings/delete-offers-from-archive/types.js";
import { executeGenerateOfferBarcodes } from "./endpoints/businessOfferMappings/generate-offer-barcodes/execute.js";
import type {
  GenerateOfferBarcodesInput,
  GenerateOfferBarcodesResponse,
} from "./endpoints/businessOfferMappings/generate-offer-barcodes/types.js";
export type {
  GenerateOfferBarcodesInput,
  GenerateOfferBarcodesResponse,
} from "./endpoints/businessOfferMappings/generate-offer-barcodes/types.js";
import { executeGetCampaigns } from "./endpoints/campaigns/get-campaigns/execute.js";
import type {
  GetCampaignsInput,
  GetCampaignsResponse,
} from "./endpoints/campaigns/get-campaigns/types.js";
export type {
  GetCampaignsInput,
  GetCampaignsResponse,
} from "./endpoints/campaigns/get-campaigns/types.js";
import { executeGetCampaign } from "./endpoints/campaigns/get-campaign/execute.js";
import type {
  GetCampaignInput,
  GetCampaignResponse,
} from "./endpoints/campaigns/get-campaign/types.js";
export type {
  GetCampaignInput,
  GetCampaignResponse,
} from "./endpoints/campaigns/get-campaign/types.js";
import { executeGetCampaignSettings } from "./endpoints/campaigns/get-campaign-settings/execute.js";
import type {
  GetCampaignSettingsInput,
  GetCampaignSettingsResponse,
} from "./endpoints/campaigns/get-campaign-settings/types.js";
export type {
  GetCampaignSettingsInput,
  GetCampaignSettingsResponse,
} from "./endpoints/campaigns/get-campaign-settings/types.js";
import { executeGetCategoriesTree } from "./endpoints/categories/get-categories-tree/execute.js";
import type {
  GetCategoriesTreeInput,
  GetCategoriesTreeResponse,
} from "./endpoints/categories/get-categories-tree/types.js";
export type {
  GetCategoriesTreeInput,
  GetCategoriesTreeResponse,
} from "./endpoints/categories/get-categories-tree/types.js";
import { executeGetCategoriesMaxSaleQuantum } from "./endpoints/categories/get-categories-max-sale-quantum/execute.js";
import type {
  GetCategoriesMaxSaleQuantumInput,
  GetCategoriesMaxSaleQuantumResponse,
} from "./endpoints/categories/get-categories-max-sale-quantum/types.js";
export type {
  GetCategoriesMaxSaleQuantumInput,
  GetCategoriesMaxSaleQuantumResponse,
} from "./endpoints/categories/get-categories-max-sale-quantum/types.js";
import { executeCreateChat } from "./endpoints/chats/create-chat/execute.js";
import type {
  CreateChatInput,
  CreateChatResponse,
} from "./endpoints/chats/create-chat/types.js";
export type {
  CreateChatInput,
  CreateChatResponse,
} from "./endpoints/chats/create-chat/types.js";
import { executeGetChats } from "./endpoints/chats/get-chats/execute.js";
import type {
  GetChatsInput,
  GetChatsResponse,
} from "./endpoints/chats/get-chats/types.js";
export type {
  GetChatsInput,
  GetChatsResponse,
} from "./endpoints/chats/get-chats/types.js";
import { executeGetChat } from "./endpoints/chats/get-chat/execute.js";
import type {
  GetChatInput,
  GetChatResponse,
} from "./endpoints/chats/get-chat/types.js";
export type {
  GetChatInput,
  GetChatResponse,
} from "./endpoints/chats/get-chat/types.js";
import { executeSendFileToChat } from "./endpoints/chats/send-file-to-chat/execute.js";
import type {
  SendFileToChatInput,
  SendFileToChatResponse,
} from "./endpoints/chats/send-file-to-chat/types.js";
export type {
  SendFileToChatInput,
  SendFileToChatResponse,
} from "./endpoints/chats/send-file-to-chat/types.js";
import { executeSendMessageToChat } from "./endpoints/chats/send-message-to-chat/execute.js";
import type {
  SendMessageToChatInput,
  SendMessageToChatResponse,
} from "./endpoints/chats/send-message-to-chat/types.js";
export type {
  SendMessageToChatInput,
  SendMessageToChatResponse,
} from "./endpoints/chats/send-message-to-chat/types.js";
import { executeGetChatMessage } from "./endpoints/chats/get-chat-message/execute.js";
import type {
  GetChatMessageInput,
  GetChatMessageResponse,
} from "./endpoints/chats/get-chat-message/types.js";
export type {
  GetChatMessageInput,
  GetChatMessageResponse,
} from "./endpoints/chats/get-chat-message/types.js";
import { executeGetChatHistory } from "./endpoints/chats/get-chat-history/execute.js";
import type {
  GetChatHistoryInput,
  GetChatHistoryResponse,
} from "./endpoints/chats/get-chat-history/types.js";
export type {
  GetChatHistoryInput,
  GetChatHistoryResponse,
} from "./endpoints/chats/get-chat-history/types.js";
import { executeGetCategoryContentParameters } from "./endpoints/content/get-category-content-parameters/execute.js";
import type {
  GetCategoryContentParametersInput,
  GetCategoryContentParametersResponse,
} from "./endpoints/content/get-category-content-parameters/types.js";
export type {
  GetCategoryContentParametersInput,
  GetCategoryContentParametersResponse,
} from "./endpoints/content/get-category-content-parameters/types.js";
import { executeGetOfferCardsContentStatus } from "./endpoints/content/get-offer-cards-content-status/execute.js";
import type {
  GetOfferCardsContentStatusInput,
  GetOfferCardsContentStatusResponse,
} from "./endpoints/content/get-offer-cards-content-status/types.js";
export type {
  GetOfferCardsContentStatusInput,
  GetOfferCardsContentStatusResponse,
} from "./endpoints/content/get-offer-cards-content-status/types.js";
import { executeUpdateOfferContent } from "./endpoints/content/update-offer-content/execute.js";
import type {
  UpdateOfferContentInput,
  UpdateOfferContentResponse,
} from "./endpoints/content/update-offer-content/types.js";
export type {
  UpdateOfferContentInput,
  UpdateOfferContentResponse,
} from "./endpoints/content/update-offer-content/types.js";
import { executeGetDeliveryOptions } from "./endpoints/deliveryOptions/get-delivery-options/execute.js";
import type {
  GetDeliveryOptionsInput,
  GetDeliveryOptionsResponse,
} from "./endpoints/deliveryOptions/get-delivery-options/types.js";
export type {
  GetDeliveryOptionsInput,
  GetDeliveryOptionsResponse,
} from "./endpoints/deliveryOptions/get-delivery-options/types.js";
import { executeGetReturnDeliveryOptions } from "./endpoints/deliveryOptions/get-return-delivery-options/execute.js";
import type {
  GetReturnDeliveryOptionsInput,
  GetReturnDeliveryOptionsResponse,
} from "./endpoints/deliveryOptions/get-return-delivery-options/types.js";
export type {
  GetReturnDeliveryOptionsInput,
  GetReturnDeliveryOptionsResponse,
} from "./endpoints/deliveryOptions/get-return-delivery-options/types.js";
import { executeGetDeliveryServices } from "./endpoints/deliveryServices/get-delivery-services/execute.js";
import type { GetDeliveryServicesResponse } from "./endpoints/deliveryServices/get-delivery-services/types.js";
export type {
  GetDeliveryServicesInput,
  GetDeliveryServicesResponse,
} from "./endpoints/deliveryServices/get-delivery-services/types.js";
import { executeGetGoodsFeedbacks } from "./endpoints/goodsFeedback/get-goods-feedbacks/execute.js";
import type {
  GetGoodsFeedbacksInput,
  GetGoodsFeedbacksResponse,
} from "./endpoints/goodsFeedback/get-goods-feedbacks/types.js";
export type {
  GetGoodsFeedbacksInput,
  GetGoodsFeedbacksResponse,
} from "./endpoints/goodsFeedback/get-goods-feedbacks/types.js";
import { executeSkipGoodsFeedbacksReaction } from "./endpoints/goodsFeedback/skip-goods-feedbacks-reaction/execute.js";
import type {
  SkipGoodsFeedbacksReactionInput,
  SkipGoodsFeedbacksReactionResponse,
} from "./endpoints/goodsFeedback/skip-goods-feedbacks-reaction/types.js";
export type {
  SkipGoodsFeedbacksReactionInput,
  SkipGoodsFeedbacksReactionResponse,
} from "./endpoints/goodsFeedback/skip-goods-feedbacks-reaction/types.js";
import { executeUpdateGoodsFeedbackComment } from "./endpoints/goodsFeedback/update-goods-feedback-comment/execute.js";
import type {
  UpdateGoodsFeedbackCommentInput,
  UpdateGoodsFeedbackCommentResponse,
} from "./endpoints/goodsFeedback/update-goods-feedback-comment/types.js";
export type {
  UpdateGoodsFeedbackCommentInput,
  UpdateGoodsFeedbackCommentResponse,
} from "./endpoints/goodsFeedback/update-goods-feedback-comment/types.js";
import { executeDeleteGoodsFeedbackComment } from "./endpoints/goodsFeedback/delete-goods-feedback-comment/execute.js";
import type {
  DeleteGoodsFeedbackCommentInput,
  DeleteGoodsFeedbackCommentResponse,
} from "./endpoints/goodsFeedback/delete-goods-feedback-comment/types.js";
export type {
  DeleteGoodsFeedbackCommentInput,
  DeleteGoodsFeedbackCommentResponse,
} from "./endpoints/goodsFeedback/delete-goods-feedback-comment/types.js";
import { executeGetGoodsFeedbackComments } from "./endpoints/goodsFeedback/get-goods-feedback-comments/execute.js";
import type {
  GetGoodsFeedbackCommentsInput,
  GetGoodsFeedbackCommentsResponse,
} from "./endpoints/goodsFeedback/get-goods-feedback-comments/types.js";
export type {
  GetGoodsFeedbackCommentsInput,
  GetGoodsFeedbackCommentsResponse,
} from "./endpoints/goodsFeedback/get-goods-feedback-comments/types.js";
import { executeGetGoodsFeedbacksUrbanads } from "./endpoints/goodsFeedback/get-goods-feedbacks-urbanads/execute.js";
import type {
  GetGoodsFeedbacksUrbanadsInput,
  GetGoodsFeedbacksUrbanadsResponse,
} from "./endpoints/goodsFeedback/get-goods-feedbacks-urbanads/types.js";
export type {
  GetGoodsFeedbacksUrbanadsInput,
  GetGoodsFeedbacksUrbanadsResponse,
} from "./endpoints/goodsFeedback/get-goods-feedbacks-urbanads/types.js";
import { executeGetGoodsQuestions } from "./endpoints/goodsQuestions/get-goods-questions/execute.js";
import type {
  GetGoodsQuestionsInput,
  GetGoodsQuestionsResponse,
} from "./endpoints/goodsQuestions/get-goods-questions/types.js";
export type {
  GetGoodsQuestionsInput,
  GetGoodsQuestionsResponse,
} from "./endpoints/goodsQuestions/get-goods-questions/types.js";
import { executeGetGoodsQuestionAnswers } from "./endpoints/goodsQuestions/get-goods-question-answers/execute.js";
import type {
  GetGoodsQuestionAnswersInput,
  GetGoodsQuestionAnswersResponse,
} from "./endpoints/goodsQuestions/get-goods-question-answers/types.js";
export type {
  GetGoodsQuestionAnswersInput,
  GetGoodsQuestionAnswersResponse,
} from "./endpoints/goodsQuestions/get-goods-question-answers/types.js";
import { executeUpdateGoodsQuestionTextEntity } from "./endpoints/goodsQuestions/update-goods-question-text-entity/execute.js";
import type {
  UpdateGoodsQuestionTextEntityInput,
  UpdateGoodsQuestionTextEntityResponse,
} from "./endpoints/goodsQuestions/update-goods-question-text-entity/types.js";
export type {
  UpdateGoodsQuestionTextEntityInput,
  UpdateGoodsQuestionTextEntityResponse,
} from "./endpoints/goodsQuestions/update-goods-question-text-entity/types.js";
import { executeGetGoodsStats } from "./endpoints/goodsStats/get-goods-stats/execute.js";
import type {
  GetGoodsStatsInput,
  GetGoodsStatsResponse,
} from "./endpoints/goodsStats/get-goods-stats/types.js";
export type {
  GetGoodsStatsInput,
  GetGoodsStatsResponse,
} from "./endpoints/goodsStats/get-goods-stats/types.js";
import { executeAddHiddenOffers } from "./endpoints/hiddenOffers/add-hidden-offers/execute.js";
import type {
  AddHiddenOffersInput,
  AddHiddenOffersResponse,
} from "./endpoints/hiddenOffers/add-hidden-offers/types.js";
export type {
  AddHiddenOffersInput,
  AddHiddenOffersResponse,
} from "./endpoints/hiddenOffers/add-hidden-offers/types.js";
import { executeGetHiddenOffers } from "./endpoints/hiddenOffers/get-hidden-offers/execute.js";
import type {
  GetHiddenOffersInput,
  GetHiddenOffersResponse,
} from "./endpoints/hiddenOffers/get-hidden-offers/types.js";
export type {
  GetHiddenOffersInput,
  GetHiddenOffersResponse,
} from "./endpoints/hiddenOffers/get-hidden-offers/types.js";
import { executeDeleteHiddenOffers } from "./endpoints/hiddenOffers/delete-hidden-offers/execute.js";
import type {
  DeleteHiddenOffersInput,
  DeleteHiddenOffersResponse,
} from "./endpoints/hiddenOffers/delete-hidden-offers/types.js";
export type {
  DeleteHiddenOffersInput,
  DeleteHiddenOffersResponse,
} from "./endpoints/hiddenOffers/delete-hidden-offers/types.js";
import { executeGetLogisticPoints } from "./endpoints/logisticPoints/get-logistic-points/execute.js";
import type {
  GetLogisticPointsInput,
  GetLogisticPointsResponse,
} from "./endpoints/logisticPoints/get-logistic-points/types.js";
export type {
  GetLogisticPointsInput,
  GetLogisticPointsResponse,
} from "./endpoints/logisticPoints/get-logistic-points/types.js";
import { executeGetCampaignOffers } from "./endpoints/offers/get-campaign-offers/execute.js";
import type {
  GetCampaignOffersInput,
  GetCampaignOffersResponse,
} from "./endpoints/offers/get-campaign-offers/types.js";
export type {
  GetCampaignOffersInput,
  GetCampaignOffersResponse,
} from "./endpoints/offers/get-campaign-offers/types.js";
import { executeUpdateCampaignOffers } from "./endpoints/offers/update-campaign-offers/execute.js";
import type {
  UpdateCampaignOffersInput,
  UpdateCampaignOffersResponse,
} from "./endpoints/offers/update-campaign-offers/types.js";
export type {
  UpdateCampaignOffersInput,
  UpdateCampaignOffersResponse,
} from "./endpoints/offers/update-campaign-offers/types.js";
import { executeDeleteCampaignOffers } from "./endpoints/offers/delete-campaign-offers/execute.js";
import type {
  DeleteCampaignOffersInput,
  DeleteCampaignOffersResponse,
} from "./endpoints/offers/delete-campaign-offers/types.js";
export type {
  DeleteCampaignOffersInput,
  DeleteCampaignOffersResponse,
} from "./endpoints/offers/delete-campaign-offers/types.js";
import { executeGetOfferRecommendations } from "./endpoints/offers/get-offer-recommendations/execute.js";
import type {
  GetOfferRecommendationsInput,
  GetOfferRecommendationsResponse,
} from "./endpoints/offers/get-offer-recommendations/types.js";
export type {
  GetOfferRecommendationsInput,
  GetOfferRecommendationsResponse,
} from "./endpoints/offers/get-offer-recommendations/types.js";
import { executeGetOperations } from "./endpoints/operations/get-operations/execute.js";
import type {
  GetOperationsInput,
  GetOperationsResponse,
} from "./endpoints/operations/get-operations/types.js";
export type {
  GetOperationsInput,
  GetOperationsResponse,
} from "./endpoints/operations/get-operations/types.js";
import { executeGetOrderBusinessBuyerInfo } from "./endpoints/orderBusinessInformation/get-order-business-buyer-info/execute.js";
import type {
  GetOrderBusinessBuyerInfoInput,
  GetOrderBusinessBuyerInfoResponse,
} from "./endpoints/orderBusinessInformation/get-order-business-buyer-info/types.js";
export type {
  GetOrderBusinessBuyerInfoInput,
  GetOrderBusinessBuyerInfoResponse,
} from "./endpoints/orderBusinessInformation/get-order-business-buyer-info/types.js";
import { executeGetOrderBusinessDocumentsInfo } from "./endpoints/orderBusinessInformation/get-order-business-documents-info/execute.js";
import type {
  GetOrderBusinessDocumentsInfoInput,
  GetOrderBusinessDocumentsInfoResponse,
} from "./endpoints/orderBusinessInformation/get-order-business-documents-info/types.js";
export type {
  GetOrderBusinessDocumentsInfoInput,
  GetOrderBusinessDocumentsInfoResponse,
} from "./endpoints/orderBusinessInformation/get-order-business-documents-info/types.js";
import { executeSetOrderDeliveryDate } from "./endpoints/orderDelivery/set-order-delivery-date/execute.js";
import type {
  SetOrderDeliveryDateInput,
  SetOrderDeliveryDateResponse,
} from "./endpoints/orderDelivery/set-order-delivery-date/types.js";
export type {
  SetOrderDeliveryDateInput,
  SetOrderDeliveryDateResponse,
} from "./endpoints/orderDelivery/set-order-delivery-date/types.js";
import { executeSetOrderDeliveryTrackCode } from "./endpoints/orderDelivery/set-order-delivery-track-code/execute.js";
import type {
  SetOrderDeliveryTrackCodeInput,
  SetOrderDeliveryTrackCodeResponse,
} from "./endpoints/orderDelivery/set-order-delivery-track-code/types.js";
export type {
  SetOrderDeliveryTrackCodeInput,
  SetOrderDeliveryTrackCodeResponse,
} from "./endpoints/orderDelivery/set-order-delivery-track-code/types.js";
import { executeGetOrderBuyerInfo } from "./endpoints/orderDelivery/get-order-buyer-info/execute.js";
import type {
  GetOrderBuyerInfoInput,
  GetOrderBuyerInfoResponse,
} from "./endpoints/orderDelivery/get-order-buyer-info/types.js";
export type {
  GetOrderBuyerInfoInput,
  GetOrderBuyerInfoResponse,
} from "./endpoints/orderDelivery/get-order-buyer-info/types.js";
import { executeVerifyOrderEac } from "./endpoints/orderDelivery/verify-order-eac/execute.js";
import type {
  VerifyOrderEacInput,
  VerifyOrderEacResponse,
} from "./endpoints/orderDelivery/verify-order-eac/types.js";
export type {
  VerifyOrderEacInput,
  VerifyOrderEacResponse,
} from "./endpoints/orderDelivery/verify-order-eac/types.js";
import { executeUpdateOrderStorageLimit } from "./endpoints/orderDelivery/update-order-storage-limit/execute.js";
import type {
  UpdateOrderStorageLimitInput,
  UpdateOrderStorageLimitResponse,
} from "./endpoints/orderDelivery/update-order-storage-limit/types.js";
export type {
  UpdateOrderStorageLimitInput,
  UpdateOrderStorageLimitResponse,
} from "./endpoints/orderDelivery/update-order-storage-limit/types.js";
import { executeGenerateOrderLabel } from "./endpoints/orderLabels/generate-order-label/execute.js";
import type {
  GenerateOrderLabelInput,
  GenerateOrderLabelResponse,
} from "./endpoints/orderLabels/generate-order-label/types.js";
export type {
  GenerateOrderLabelInput,
  GenerateOrderLabelResponse,
} from "./endpoints/orderLabels/generate-order-label/types.js";
import { executeGenerateOrderLabels } from "./endpoints/orderLabels/generate-order-labels/execute.js";
import type {
  GenerateOrderLabelsInput,
  GenerateOrderLabelsResponse,
} from "./endpoints/orderLabels/generate-order-labels/types.js";
export type {
  GenerateOrderLabelsInput,
  GenerateOrderLabelsResponse,
} from "./endpoints/orderLabels/generate-order-labels/types.js";
import { executeGetOrderLabelsData } from "./endpoints/orderLabels/get-order-labels-data/execute.js";
import type {
  GetOrderLabelsDataInput,
  GetOrderLabelsDataResponse,
} from "./endpoints/orderLabels/get-order-labels-data/types.js";
export type {
  GetOrderLabelsDataInput,
  GetOrderLabelsDataResponse,
} from "./endpoints/orderLabels/get-order-labels-data/types.js";
import { executeGetOrder } from "./endpoints/orders/get-order/execute.js";
import type {
  GetOrderInput,
  GetOrderResponse,
} from "./endpoints/orders/get-order/types.js";
export type {
  GetOrderInput,
  GetOrderResponse,
} from "./endpoints/orders/get-order/types.js";
import { executeGetOrders } from "./endpoints/orders/get-orders/execute.js";
import type {
  GetOrdersInput,
  GetOrdersResponse,
} from "./endpoints/orders/get-orders/types.js";
export type {
  GetOrdersInput,
  GetOrdersResponse,
} from "./endpoints/orders/get-orders/types.js";
import { executeGetBusinessOrders } from "./endpoints/orders/get-business-orders/execute.js";
import type {
  GetBusinessOrdersInput,
  GetBusinessOrdersResponse,
} from "./endpoints/orders/get-business-orders/types.js";
export type {
  GetBusinessOrdersInput,
  GetBusinessOrdersResponse,
} from "./endpoints/orders/get-business-orders/types.js";
import { executeProvideOrderItemIdentifiers } from "./endpoints/orders/provide-order-item-identifiers/execute.js";
import type {
  ProvideOrderItemIdentifiersInput,
  ProvideOrderItemIdentifiersResponse,
} from "./endpoints/orders/provide-order-item-identifiers/types.js";
export type {
  ProvideOrderItemIdentifiersInput,
  ProvideOrderItemIdentifiersResponse,
} from "./endpoints/orders/provide-order-item-identifiers/types.js";
import { executeUpdateOrderItems } from "./endpoints/orders/update-order-items/execute.js";
import type {
  UpdateOrderItemsInput,
  UpdateOrderItemsResponse,
} from "./endpoints/orders/update-order-items/types.js";
export type {
  UpdateOrderItemsInput,
  UpdateOrderItemsResponse,
} from "./endpoints/orders/update-order-items/types.js";
import { executeUpdateOrderStatus } from "./endpoints/orders/update-order-status/execute.js";
import type {
  UpdateOrderStatusInput,
  UpdateOrderStatusResponse,
} from "./endpoints/orders/update-order-status/types.js";
export type {
  UpdateOrderStatusInput,
  UpdateOrderStatusResponse,
} from "./endpoints/orders/update-order-status/types.js";
import { executeUpdateOrderStatuses } from "./endpoints/orders/update-order-statuses/execute.js";
import type {
  UpdateOrderStatusesInput,
  UpdateOrderStatusesResponse,
} from "./endpoints/orders/update-order-statuses/types.js";
export type {
  UpdateOrderStatusesInput,
  UpdateOrderStatusesResponse,
} from "./endpoints/orders/update-order-statuses/types.js";
import { executeSetOrderShipmentBoxes } from "./endpoints/orders/set-order-shipment-boxes/execute.js";
import type {
  SetOrderShipmentBoxesInput,
  SetOrderShipmentBoxesResponse,
} from "./endpoints/orders/set-order-shipment-boxes/types.js";
export type {
  SetOrderShipmentBoxesInput,
  SetOrderShipmentBoxesResponse,
} from "./endpoints/orders/set-order-shipment-boxes/types.js";
import { executeAcceptOrderCancellation } from "./endpoints/orders/accept-order-cancellation/execute.js";
import type {
  AcceptOrderCancellationInput,
  AcceptOrderCancellationResponse,
} from "./endpoints/orders/accept-order-cancellation/types.js";
export type {
  AcceptOrderCancellationInput,
  AcceptOrderCancellationResponse,
} from "./endpoints/orders/accept-order-cancellation/types.js";
import { executeProvideOrderDigitalCodes } from "./endpoints/orders/provide-order-digital-codes/execute.js";
import type {
  ProvideOrderDigitalCodesInput,
  ProvideOrderDigitalCodesResponse,
} from "./endpoints/orders/provide-order-digital-codes/types.js";
export type {
  ProvideOrderDigitalCodesInput,
  ProvideOrderDigitalCodesResponse,
} from "./endpoints/orders/provide-order-digital-codes/types.js";
import { executeSetOrderBoxLayout } from "./endpoints/orders/set-order-box-layout/execute.js";
import type {
  SetOrderBoxLayoutInput,
  SetOrderBoxLayoutResponse,
} from "./endpoints/orders/set-order-box-layout/types.js";
export type {
  SetOrderBoxLayoutInput,
  SetOrderBoxLayoutResponse,
} from "./endpoints/orders/set-order-box-layout/types.js";
import { executeUpdateExternalOrderId } from "./endpoints/orders/update-external-order-id/execute.js";
import type {
  UpdateExternalOrderIdInput,
  UpdateExternalOrderIdResponse,
} from "./endpoints/orders/update-external-order-id/types.js";
export type {
  UpdateExternalOrderIdInput,
  UpdateExternalOrderIdResponse,
} from "./endpoints/orders/update-external-order-id/types.js";
import { executeGetOrderIdentifiersStatus } from "./endpoints/orders/get-order-identifiers-status/execute.js";
import type {
  GetOrderIdentifiersStatusInput,
  GetOrderIdentifiersStatusResponse,
} from "./endpoints/orders/get-order-identifiers-status/types.js";
export type {
  GetOrderIdentifiersStatusInput,
  GetOrderIdentifiersStatusResponse,
} from "./endpoints/orders/get-order-identifiers-status/types.js";
import { executeCreateOrder } from "./endpoints/orders/create-order/execute.js";
import type {
  CreateOrderInput,
  CreateOrderResponse,
} from "./endpoints/orders/create-order/types.js";
export type {
  CreateOrderInput,
  CreateOrderResponse,
} from "./endpoints/orders/create-order/types.js";
import { executeUpdateOrder } from "./endpoints/orders/update-order/execute.js";
import type {
  UpdateOrderInput,
  UpdateOrderResponse,
} from "./endpoints/orders/update-order/types.js";
export type {
  UpdateOrderInput,
  UpdateOrderResponse,
} from "./endpoints/orders/update-order/types.js";
import { executeGetOrderUpdateOptions } from "./endpoints/orders/get-order-update-options/execute.js";
import type {
  GetOrderUpdateOptionsInput,
  GetOrderUpdateOptionsResponse,
} from "./endpoints/orders/get-order-update-options/types.js";
export type {
  GetOrderUpdateOptionsInput,
  GetOrderUpdateOptionsResponse,
} from "./endpoints/orders/get-order-update-options/types.js";
import { executeGetOrdersStats } from "./endpoints/ordersStats/get-orders-stats/execute.js";
import type {
  GetOrdersStatsInput,
  GetOrdersStatsResponse,
} from "./endpoints/ordersStats/get-orders-stats/types.js";
export type {
  GetOrdersStatsInput,
  GetOrdersStatsResponse,
} from "./endpoints/ordersStats/get-orders-stats/types.js";
import { executeGetOutletLicenses } from "./endpoints/outletLicenses/get-outlet-licenses/execute.js";
import type {
  GetOutletLicensesInput,
  GetOutletLicensesResponse,
} from "./endpoints/outletLicenses/get-outlet-licenses/types.js";
export type {
  GetOutletLicensesInput,
  GetOutletLicensesResponse,
} from "./endpoints/outletLicenses/get-outlet-licenses/types.js";
import { executeDeleteOutletLicenses } from "./endpoints/outletLicenses/delete-outlet-licenses/execute.js";
import type {
  DeleteOutletLicensesInput,
  DeleteOutletLicensesResponse,
} from "./endpoints/outletLicenses/delete-outlet-licenses/types.js";
export type {
  DeleteOutletLicensesInput,
  DeleteOutletLicensesResponse,
} from "./endpoints/outletLicenses/delete-outlet-licenses/types.js";
import { executeUpdateOutletLicenses } from "./endpoints/outletLicenses/update-outlet-licenses/execute.js";
import type {
  UpdateOutletLicensesInput,
  UpdateOutletLicensesResponse,
} from "./endpoints/outletLicenses/update-outlet-licenses/types.js";
export type {
  UpdateOutletLicensesInput,
  UpdateOutletLicensesResponse,
} from "./endpoints/outletLicenses/update-outlet-licenses/types.js";
import { executeCreateOutlet } from "./endpoints/outlets/create-outlet/execute.js";
import type {
  CreateOutletInput,
  CreateOutletResponse,
} from "./endpoints/outlets/create-outlet/types.js";
export type {
  CreateOutletInput,
  CreateOutletResponse,
} from "./endpoints/outlets/create-outlet/types.js";
import { executeGetOutlets } from "./endpoints/outlets/get-outlets/execute.js";
import type {
  GetOutletsInput,
  GetOutletsResponse,
} from "./endpoints/outlets/get-outlets/types.js";
export type {
  GetOutletsInput,
  GetOutletsResponse,
} from "./endpoints/outlets/get-outlets/types.js";
import { executeUpdateOutlet } from "./endpoints/outlets/update-outlet/execute.js";
import type {
  UpdateOutletInput,
  UpdateOutletResponse,
} from "./endpoints/outlets/update-outlet/types.js";
export type {
  UpdateOutletInput,
  UpdateOutletResponse,
} from "./endpoints/outlets/update-outlet/types.js";
import { executeGetOutlet } from "./endpoints/outlets/get-outlet/execute.js";
import type {
  GetOutletInput,
  GetOutletResponse,
} from "./endpoints/outlets/get-outlet/types.js";
export type {
  GetOutletInput,
  GetOutletResponse,
} from "./endpoints/outlets/get-outlet/types.js";
import { executeDeleteOutlet } from "./endpoints/outlets/delete-outlet/execute.js";
import type {
  DeleteOutletInput,
  DeleteOutletResponse,
} from "./endpoints/outlets/delete-outlet/types.js";
export type {
  DeleteOutletInput,
  DeleteOutletResponse,
} from "./endpoints/outlets/delete-outlet/types.js";
import { executeGetBusinessQuarantineOffers } from "./endpoints/priceQuarantine/get-business-quarantine-offers/execute.js";
import type {
  GetBusinessQuarantineOffersInput,
  GetBusinessQuarantineOffersResponse,
} from "./endpoints/priceQuarantine/get-business-quarantine-offers/types.js";
export type {
  GetBusinessQuarantineOffersInput,
  GetBusinessQuarantineOffersResponse,
} from "./endpoints/priceQuarantine/get-business-quarantine-offers/types.js";
import { executeConfirmBusinessPrices } from "./endpoints/priceQuarantine/confirm-business-prices/execute.js";
import type {
  ConfirmBusinessPricesInput,
  ConfirmBusinessPricesResponse,
} from "./endpoints/priceQuarantine/confirm-business-prices/types.js";
export type {
  ConfirmBusinessPricesInput,
  ConfirmBusinessPricesResponse,
} from "./endpoints/priceQuarantine/confirm-business-prices/types.js";
import { executeGetCampaignQuarantineOffers } from "./endpoints/priceQuarantine/get-campaign-quarantine-offers/execute.js";
import type {
  GetCampaignQuarantineOffersInput,
  GetCampaignQuarantineOffersResponse,
} from "./endpoints/priceQuarantine/get-campaign-quarantine-offers/types.js";
export type {
  GetCampaignQuarantineOffersInput,
  GetCampaignQuarantineOffersResponse,
} from "./endpoints/priceQuarantine/get-campaign-quarantine-offers/types.js";
import { executeConfirmCampaignPrices } from "./endpoints/priceQuarantine/confirm-campaign-prices/execute.js";
import type {
  ConfirmCampaignPricesInput,
  ConfirmCampaignPricesResponse,
} from "./endpoints/priceQuarantine/confirm-campaign-prices/types.js";
export type {
  ConfirmCampaignPricesInput,
  ConfirmCampaignPricesResponse,
} from "./endpoints/priceQuarantine/confirm-campaign-prices/types.js";
import { executeUpdateBusinessPrices } from "./endpoints/prices/update-business-prices/execute.js";
import type {
  UpdateBusinessPricesInput,
  UpdateBusinessPricesResponse,
} from "./endpoints/prices/update-business-prices/types.js";
export type {
  UpdateBusinessPricesInput,
  UpdateBusinessPricesResponse,
} from "./endpoints/prices/update-business-prices/types.js";
import { executeUpdatePrices } from "./endpoints/prices/update-prices/execute.js";
import type {
  UpdatePricesInput,
  UpdatePricesResponse,
} from "./endpoints/prices/update-prices/types.js";
export type {
  UpdatePricesInput,
  UpdatePricesResponse,
} from "./endpoints/prices/update-prices/types.js";
import { executeGetPrices } from "./endpoints/prices/get-prices/execute.js";
import type {
  GetPricesInput,
  GetPricesResponse,
} from "./endpoints/prices/get-prices/types.js";
export type {
  GetPricesInput,
  GetPricesResponse,
} from "./endpoints/prices/get-prices/types.js";
import { executeGetPricesByOfferIds } from "./endpoints/prices/get-prices-by-offer-ids/execute.js";
import type {
  GetPricesByOfferIdsInput,
  GetPricesByOfferIdsResponse,
} from "./endpoints/prices/get-prices-by-offer-ids/types.js";
export type {
  GetPricesByOfferIdsInput,
  GetPricesByOfferIdsResponse,
} from "./endpoints/prices/get-prices-by-offer-ids/types.js";
import { executeGetDefaultPrices } from "./endpoints/prices/get-default-prices/execute.js";
import type {
  GetDefaultPricesInput,
  GetDefaultPricesResponse,
} from "./endpoints/prices/get-default-prices/types.js";
export type {
  GetDefaultPricesInput,
  GetDefaultPricesResponse,
} from "./endpoints/prices/get-default-prices/types.js";
import { executeGetPromos } from "./endpoints/promos/get-promos/execute.js";
import type {
  GetPromosInput,
  GetPromosResponse,
} from "./endpoints/promos/get-promos/types.js";
export type {
  GetPromosInput,
  GetPromosResponse,
} from "./endpoints/promos/get-promos/types.js";
import { executeGetPromoOffers } from "./endpoints/promos/get-promo-offers/execute.js";
import type {
  GetPromoOffersInput,
  GetPromoOffersResponse,
} from "./endpoints/promos/get-promo-offers/types.js";
export type {
  GetPromoOffersInput,
  GetPromoOffersResponse,
} from "./endpoints/promos/get-promo-offers/types.js";
import { executeUpdatePromoOffers } from "./endpoints/promos/update-promo-offers/execute.js";
import type {
  UpdatePromoOffersInput,
  UpdatePromoOffersResponse,
} from "./endpoints/promos/update-promo-offers/types.js";
export type {
  UpdatePromoOffersInput,
  UpdatePromoOffersResponse,
} from "./endpoints/promos/update-promo-offers/types.js";
import { executeDeletePromoOffers } from "./endpoints/promos/delete-promo-offers/execute.js";
import type {
  DeletePromoOffersInput,
  DeletePromoOffersResponse,
} from "./endpoints/promos/delete-promo-offers/types.js";
export type {
  DeletePromoOffersInput,
  DeletePromoOffersResponse,
} from "./endpoints/promos/delete-promo-offers/types.js";
import { executeGetQualityRatings } from "./endpoints/ratings/get-quality-ratings/execute.js";
import type {
  GetQualityRatingsInput,
  GetQualityRatingsResponse,
} from "./endpoints/ratings/get-quality-ratings/types.js";
export type {
  GetQualityRatingsInput,
  GetQualityRatingsResponse,
} from "./endpoints/ratings/get-quality-ratings/types.js";
import { executeGetQualityRatingDetails } from "./endpoints/ratings/get-quality-rating-details/execute.js";
import type {
  GetQualityRatingDetailsInput,
  GetQualityRatingDetailsResponse,
} from "./endpoints/ratings/get-quality-rating-details/types.js";
export type {
  GetQualityRatingDetailsInput,
  GetQualityRatingDetailsResponse,
} from "./endpoints/ratings/get-quality-rating-details/types.js";
import { executeSearchRegionsByName } from "./endpoints/regions/search-regions-by-name/execute.js";
import type {
  SearchRegionsByNameInput,
  SearchRegionsByNameResponse,
} from "./endpoints/regions/search-regions-by-name/types.js";
export type {
  SearchRegionsByNameInput,
  SearchRegionsByNameResponse,
} from "./endpoints/regions/search-regions-by-name/types.js";
import { executeSearchRegionsById } from "./endpoints/regions/search-regions-by-id/execute.js";
import type {
  SearchRegionsByIdInput,
  SearchRegionsByIdResponse,
} from "./endpoints/regions/search-regions-by-id/types.js";
export type {
  SearchRegionsByIdInput,
  SearchRegionsByIdResponse,
} from "./endpoints/regions/search-regions-by-id/types.js";
import { executeSearchRegionChildren } from "./endpoints/regions/search-region-children/execute.js";
import type {
  SearchRegionChildrenInput,
  SearchRegionChildrenResponse,
} from "./endpoints/regions/search-region-children/types.js";
export type {
  SearchRegionChildrenInput,
  SearchRegionChildrenResponse,
} from "./endpoints/regions/search-region-children/types.js";
import { executeGetRegionsCodes } from "./endpoints/regions/get-regions-codes/execute.js";
import type { GetRegionsCodesResponse } from "./endpoints/regions/get-regions-codes/types.js";
export type {
  GetRegionsCodesInput,
  GetRegionsCodesResponse,
} from "./endpoints/regions/get-regions-codes/types.js";
import { executeGetReportInfo } from "./endpoints/reports/get-report-info/execute.js";
import type {
  GetReportInfoInput,
  GetReportInfoResponse,
} from "./endpoints/reports/get-report-info/types.js";
export type {
  GetReportInfoInput,
  GetReportInfoResponse,
} from "./endpoints/reports/get-report-info/types.js";
import { executeGenerateUnitedNettingReport } from "./endpoints/reports/generate-united-netting-report/execute.js";
import type {
  GenerateUnitedNettingReportInput,
  GenerateUnitedNettingReportResponse,
} from "./endpoints/reports/generate-united-netting-report/types.js";
export type {
  GenerateUnitedNettingReportInput,
  GenerateUnitedNettingReportResponse,
} from "./endpoints/reports/generate-united-netting-report/types.js";
import { executeGenerateUnitedMarketplaceServicesReport } from "./endpoints/reports/generate-united-marketplace-services-report/execute.js";
import type {
  GenerateUnitedMarketplaceServicesReportInput,
  GenerateUnitedMarketplaceServicesReportResponse,
} from "./endpoints/reports/generate-united-marketplace-services-report/types.js";
export type {
  GenerateUnitedMarketplaceServicesReportInput,
  GenerateUnitedMarketplaceServicesReportResponse,
} from "./endpoints/reports/generate-united-marketplace-services-report/types.js";
import { executeGenerateUnitedOrdersReport } from "./endpoints/reports/generate-united-orders-report/execute.js";
import type {
  GenerateUnitedOrdersReportInput,
  GenerateUnitedOrdersReportResponse,
} from "./endpoints/reports/generate-united-orders-report/types.js";
export type {
  GenerateUnitedOrdersReportInput,
  GenerateUnitedOrdersReportResponse,
} from "./endpoints/reports/generate-united-orders-report/types.js";
import { executeGenerateUnitedReturnsReport } from "./endpoints/reports/generate-united-returns-report/execute.js";
import type {
  GenerateUnitedReturnsReportInput,
  GenerateUnitedReturnsReportResponse,
} from "./endpoints/reports/generate-united-returns-report/types.js";
export type {
  GenerateUnitedReturnsReportInput,
  GenerateUnitedReturnsReportResponse,
} from "./endpoints/reports/generate-united-returns-report/types.js";
import { executeGenerateGoodsRealizationReport } from "./endpoints/reports/generate-goods-realization-report/execute.js";
import type {
  GenerateGoodsRealizationReportInput,
  GenerateGoodsRealizationReportResponse,
} from "./endpoints/reports/generate-goods-realization-report/types.js";
export type {
  GenerateGoodsRealizationReportInput,
  GenerateGoodsRealizationReportResponse,
} from "./endpoints/reports/generate-goods-realization-report/types.js";
import { executeGenerateStocksOnWarehousesReport } from "./endpoints/reports/generate-stocks-on-warehouses-report/execute.js";
import type {
  GenerateStocksOnWarehousesReportInput,
  GenerateStocksOnWarehousesReportResponse,
} from "./endpoints/reports/generate-stocks-on-warehouses-report/types.js";
export type {
  GenerateStocksOnWarehousesReportInput,
  GenerateStocksOnWarehousesReportResponse,
} from "./endpoints/reports/generate-stocks-on-warehouses-report/types.js";
import { executeGenerateStocksReport } from "./endpoints/reports/generate-stocks-report/execute.js";
import type {
  GenerateStocksReportInput,
  GenerateStocksReportResponse,
} from "./endpoints/reports/generate-stocks-report/types.js";
export type {
  GenerateStocksReportInput,
  GenerateStocksReportResponse,
} from "./endpoints/reports/generate-stocks-report/types.js";
import { executeGenerateGoodsMovementReport } from "./endpoints/reports/generate-goods-movement-report/execute.js";
import type {
  GenerateGoodsMovementReportInput,
  GenerateGoodsMovementReportResponse,
} from "./endpoints/reports/generate-goods-movement-report/types.js";
export type {
  GenerateGoodsMovementReportInput,
  GenerateGoodsMovementReportResponse,
} from "./endpoints/reports/generate-goods-movement-report/types.js";
import { executeGenerateShowsSalesReport } from "./endpoints/reports/generate-shows-sales-report/execute.js";
import type {
  GenerateShowsSalesReportInput,
  GenerateShowsSalesReportResponse,
} from "./endpoints/reports/generate-shows-sales-report/types.js";
export type {
  GenerateShowsSalesReportInput,
  GenerateShowsSalesReportResponse,
} from "./endpoints/reports/generate-shows-sales-report/types.js";
import { executeGenerateCompetitorsPositionReport } from "./endpoints/reports/generate-competitors-position-report/execute.js";
import type {
  GenerateCompetitorsPositionReportInput,
  GenerateCompetitorsPositionReportResponse,
} from "./endpoints/reports/generate-competitors-position-report/types.js";
export type {
  GenerateCompetitorsPositionReportInput,
  GenerateCompetitorsPositionReportResponse,
} from "./endpoints/reports/generate-competitors-position-report/types.js";
import { executeGenerateGoodsPricesReport } from "./endpoints/reports/generate-goods-prices-report/execute.js";
import type {
  GenerateGoodsPricesReportInput,
  GenerateGoodsPricesReportResponse,
} from "./endpoints/reports/generate-goods-prices-report/types.js";
export type {
  GenerateGoodsPricesReportInput,
  GenerateGoodsPricesReportResponse,
} from "./endpoints/reports/generate-goods-prices-report/types.js";
import { executeGenerateGoodsTurnoverReport } from "./endpoints/reports/generate-goods-turnover-report/execute.js";
import type {
  GenerateGoodsTurnoverReportInput,
  GenerateGoodsTurnoverReportResponse,
} from "./endpoints/reports/generate-goods-turnover-report/types.js";
export type {
  GenerateGoodsTurnoverReportInput,
  GenerateGoodsTurnoverReportResponse,
} from "./endpoints/reports/generate-goods-turnover-report/types.js";
import { executeGenerateBoostConsolidatedReport } from "./endpoints/reports/generate-boost-consolidated-report/execute.js";
import type {
  GenerateBoostConsolidatedReportInput,
  GenerateBoostConsolidatedReportResponse,
} from "./endpoints/reports/generate-boost-consolidated-report/types.js";
export type {
  GenerateBoostConsolidatedReportInput,
  GenerateBoostConsolidatedReportResponse,
} from "./endpoints/reports/generate-boost-consolidated-report/types.js";
import { executeGenerateShipmentListDocumentReport } from "./endpoints/reports/generate-shipment-list-document-report/execute.js";
import type {
  GenerateShipmentListDocumentReportInput,
  GenerateShipmentListDocumentReportResponse,
} from "./endpoints/reports/generate-shipment-list-document-report/types.js";
export type {
  GenerateShipmentListDocumentReportInput,
  GenerateShipmentListDocumentReportResponse,
} from "./endpoints/reports/generate-shipment-list-document-report/types.js";
import { executeGenerateShelfsStatisticsReport } from "./endpoints/reports/generate-shelfs-statistics-report/execute.js";
import type {
  GenerateShelfsStatisticsReportInput,
  GenerateShelfsStatisticsReportResponse,
} from "./endpoints/reports/generate-shelfs-statistics-report/types.js";
export type {
  GenerateShelfsStatisticsReportInput,
  GenerateShelfsStatisticsReportResponse,
} from "./endpoints/reports/generate-shelfs-statistics-report/types.js";
import { executeGenerateMassOrderLabelsReport } from "./endpoints/reports/generate-mass-order-labels-report/execute.js";
import type {
  GenerateMassOrderLabelsReportInput,
  GenerateMassOrderLabelsReportResponse,
} from "./endpoints/reports/generate-mass-order-labels-report/types.js";
export type {
  GenerateMassOrderLabelsReportInput,
  GenerateMassOrderLabelsReportResponse,
} from "./endpoints/reports/generate-mass-order-labels-report/types.js";
import { executeGenerateGoodsFeedbackReport } from "./endpoints/reports/generate-goods-feedback-report/execute.js";
import type {
  GenerateGoodsFeedbackReportInput,
  GenerateGoodsFeedbackReportResponse,
} from "./endpoints/reports/generate-goods-feedback-report/types.js";
export type {
  GenerateGoodsFeedbackReportInput,
  GenerateGoodsFeedbackReportResponse,
} from "./endpoints/reports/generate-goods-feedback-report/types.js";
import { executeGenerateShowsBoostReport } from "./endpoints/reports/generate-shows-boost-report/execute.js";
import type {
  GenerateShowsBoostReportInput,
  GenerateShowsBoostReportResponse,
} from "./endpoints/reports/generate-shows-boost-report/types.js";
export type {
  GenerateShowsBoostReportInput,
  GenerateShowsBoostReportResponse,
} from "./endpoints/reports/generate-shows-boost-report/types.js";
import { executeGenerateBannersStatisticsReport } from "./endpoints/reports/generate-banners-statistics-report/execute.js";
import type {
  GenerateBannersStatisticsReportInput,
  GenerateBannersStatisticsReportResponse,
} from "./endpoints/reports/generate-banners-statistics-report/types.js";
export type {
  GenerateBannersStatisticsReportInput,
  GenerateBannersStatisticsReportResponse,
} from "./endpoints/reports/generate-banners-statistics-report/types.js";
import { executeGenerateClosureDocumentsReport } from "./endpoints/reports/generate-closure-documents-report/execute.js";
import type {
  GenerateClosureDocumentsReportInput,
  GenerateClosureDocumentsReportResponse,
} from "./endpoints/reports/generate-closure-documents-report/types.js";
export type {
  GenerateClosureDocumentsReportInput,
  GenerateClosureDocumentsReportResponse,
} from "./endpoints/reports/generate-closure-documents-report/types.js";
import { executeGenerateJewelryFiscalReport } from "./endpoints/reports/generate-jewelry-fiscal-report/execute.js";
import type {
  GenerateJewelryFiscalReportInput,
  GenerateJewelryFiscalReportResponse,
} from "./endpoints/reports/generate-jewelry-fiscal-report/types.js";
export type {
  GenerateJewelryFiscalReportInput,
  GenerateJewelryFiscalReportResponse,
} from "./endpoints/reports/generate-jewelry-fiscal-report/types.js";
import { executeGenerateSalesGeographyReport } from "./endpoints/reports/generate-sales-geography-report/execute.js";
import type {
  GenerateSalesGeographyReportInput,
  GenerateSalesGeographyReportResponse,
} from "./endpoints/reports/generate-sales-geography-report/types.js";
export type {
  GenerateSalesGeographyReportInput,
  GenerateSalesGeographyReportResponse,
} from "./endpoints/reports/generate-sales-geography-report/types.js";
import { executeGenerateKeyIndicatorsReport } from "./endpoints/reports/generate-key-indicators-report/execute.js";
import type {
  GenerateKeyIndicatorsReportInput,
  GenerateKeyIndicatorsReportResponse,
} from "./endpoints/reports/generate-key-indicators-report/types.js";
export type {
  GenerateKeyIndicatorsReportInput,
  GenerateKeyIndicatorsReportResponse,
} from "./endpoints/reports/generate-key-indicators-report/types.js";
import { executeGenerateClosureDocumentsDetalizationReport } from "./endpoints/reports/generate-closure-documents-detalization-report/execute.js";
import type {
  GenerateClosureDocumentsDetalizationReportInput,
  GenerateClosureDocumentsDetalizationReportResponse,
} from "./endpoints/reports/generate-closure-documents-detalization-report/types.js";
export type {
  GenerateClosureDocumentsDetalizationReportInput,
  GenerateClosureDocumentsDetalizationReportResponse,
} from "./endpoints/reports/generate-closure-documents-detalization-report/types.js";
import { executeGenerateMarketingDetalizationReport } from "./endpoints/reports/generate-marketing-detalization-report/execute.js";
import type {
  GenerateMarketingDetalizationReportInput,
  GenerateMarketingDetalizationReportResponse,
} from "./endpoints/reports/generate-marketing-detalization-report/types.js";
export type {
  GenerateMarketingDetalizationReportInput,
  GenerateMarketingDetalizationReportResponse,
} from "./endpoints/reports/generate-marketing-detalization-report/types.js";
import { executeGenerateBarcodesReport } from "./endpoints/reports/generate-barcodes-report/execute.js";
import type {
  GenerateBarcodesReportInput,
  GenerateBarcodesReportResponse,
} from "./endpoints/reports/generate-barcodes-report/types.js";
export type {
  GenerateBarcodesReportInput,
  GenerateBarcodesReportResponse,
} from "./endpoints/reports/generate-barcodes-report/types.js";
import { executeGetReturns } from "./endpoints/returns/get-returns/execute.js";
import type {
  GetReturnsInput,
  GetReturnsResponse,
} from "./endpoints/returns/get-returns/types.js";
export type {
  GetReturnsInput,
  GetReturnsResponse,
} from "./endpoints/returns/get-returns/types.js";
import { executeGetReturn } from "./endpoints/returns/get-return/execute.js";
import type {
  GetReturnInput,
  GetReturnResponse,
} from "./endpoints/returns/get-return/types.js";
export type {
  GetReturnInput,
  GetReturnResponse,
} from "./endpoints/returns/get-return/types.js";
import { executeSetReturnDecision } from "./endpoints/returns/set-return-decision/execute.js";
import type {
  SetReturnDecisionInput,
  SetReturnDecisionResponse,
} from "./endpoints/returns/set-return-decision/types.js";
export type {
  SetReturnDecisionInput,
  SetReturnDecisionResponse,
} from "./endpoints/returns/set-return-decision/types.js";
import { executeSubmitReturnDecision } from "./endpoints/returns/submit-return-decision/execute.js";
import type {
  SubmitReturnDecisionInput,
  SubmitReturnDecisionResponse,
} from "./endpoints/returns/submit-return-decision/types.js";
export type {
  SubmitReturnDecisionInput,
  SubmitReturnDecisionResponse,
} from "./endpoints/returns/submit-return-decision/types.js";
import { executeGetReturnAvailableDecisions } from "./endpoints/returns/get-return-available-decisions/execute.js";
import type {
  GetReturnAvailableDecisionsInput,
  GetReturnAvailableDecisionsResponse,
} from "./endpoints/returns/get-return-available-decisions/types.js";
export type {
  GetReturnAvailableDecisionsInput,
  GetReturnAvailableDecisionsResponse,
} from "./endpoints/returns/get-return-available-decisions/types.js";
import { executeGetReturnApplication } from "./endpoints/returns/get-return-application/execute.js";
import type {
  GetReturnApplicationInput,
  GetReturnApplicationResponse,
} from "./endpoints/returns/get-return-application/types.js";
export type {
  GetReturnApplicationInput,
  GetReturnApplicationResponse,
} from "./endpoints/returns/get-return-application/types.js";
import { executeGetReturnPhoto } from "./endpoints/returns/get-return-photo/execute.js";
import type {
  GetReturnPhotoInput,
  GetReturnPhotoResponse,
} from "./endpoints/returns/get-return-photo/types.js";
export type {
  GetReturnPhotoInput,
  GetReturnPhotoResponse,
} from "./endpoints/returns/get-return-photo/types.js";
import { executeCreateReturn } from "./endpoints/returns/create-return/execute.js";
import type {
  CreateReturnInput,
  CreateReturnResponse,
} from "./endpoints/returns/create-return/types.js";
export type {
  CreateReturnInput,
  CreateReturnResponse,
} from "./endpoints/returns/create-return/types.js";
import { executeCancelReturn } from "./endpoints/returns/cancel-return/execute.js";
import type {
  CancelReturnInput,
  CancelReturnResponse,
} from "./endpoints/returns/cancel-return/types.js";
export type {
  CancelReturnInput,
  CancelReturnResponse,
} from "./endpoints/returns/cancel-return/types.js";
import { executeDownloadShipmentReceptionTransferAct } from "./endpoints/shipments/download-shipment-reception-transfer-act/execute.js";
import type {
  DownloadShipmentReceptionTransferActInput,
  DownloadShipmentReceptionTransferActResponse,
} from "./endpoints/shipments/download-shipment-reception-transfer-act/types.js";
export type {
  DownloadShipmentReceptionTransferActInput,
  DownloadShipmentReceptionTransferActResponse,
} from "./endpoints/shipments/download-shipment-reception-transfer-act/types.js";
import { executeGetShipment } from "./endpoints/shipments/get-shipment/execute.js";
import type {
  GetShipmentInput,
  GetShipmentResponse,
} from "./endpoints/shipments/get-shipment/types.js";
export type {
  GetShipmentInput,
  GetShipmentResponse,
} from "./endpoints/shipments/get-shipment/types.js";
import { executeGetShipmentOrdersInfo } from "./endpoints/shipments/get-shipment-orders-info/execute.js";
import type {
  GetShipmentOrdersInfoInput,
  GetShipmentOrdersInfoResponse,
} from "./endpoints/shipments/get-shipment-orders-info/types.js";
export type {
  GetShipmentOrdersInfoInput,
  GetShipmentOrdersInfoResponse,
} from "./endpoints/shipments/get-shipment-orders-info/types.js";
import { executeConfirmShipment } from "./endpoints/shipments/confirm-shipment/execute.js";
import type {
  ConfirmShipmentInput,
  ConfirmShipmentResponse,
} from "./endpoints/shipments/confirm-shipment/types.js";
export type {
  ConfirmShipmentInput,
  ConfirmShipmentResponse,
} from "./endpoints/shipments/confirm-shipment/types.js";
import { executeDownloadShipmentAct } from "./endpoints/shipments/download-shipment-act/execute.js";
import type {
  DownloadShipmentActInput,
  DownloadShipmentActResponse,
} from "./endpoints/shipments/download-shipment-act/types.js";
export type {
  DownloadShipmentActInput,
  DownloadShipmentActResponse,
} from "./endpoints/shipments/download-shipment-act/types.js";
import { executeDownloadShipmentInboundAct } from "./endpoints/shipments/download-shipment-inbound-act/execute.js";
import type {
  DownloadShipmentInboundActInput,
  DownloadShipmentInboundActResponse,
} from "./endpoints/shipments/download-shipment-inbound-act/types.js";
export type {
  DownloadShipmentInboundActInput,
  DownloadShipmentInboundActResponse,
} from "./endpoints/shipments/download-shipment-inbound-act/types.js";
import { executeDownloadShipmentTransportationWaybill } from "./endpoints/shipments/download-shipment-transportation-waybill/execute.js";
import type {
  DownloadShipmentTransportationWaybillInput,
  DownloadShipmentTransportationWaybillResponse,
} from "./endpoints/shipments/download-shipment-transportation-waybill/types.js";
export type {
  DownloadShipmentTransportationWaybillInput,
  DownloadShipmentTransportationWaybillResponse,
} from "./endpoints/shipments/download-shipment-transportation-waybill/types.js";
import { executeDownloadShipmentDiscrepancyAct } from "./endpoints/shipments/download-shipment-discrepancy-act/execute.js";
import type {
  DownloadShipmentDiscrepancyActInput,
  DownloadShipmentDiscrepancyActResponse,
} from "./endpoints/shipments/download-shipment-discrepancy-act/types.js";
export type {
  DownloadShipmentDiscrepancyActInput,
  DownloadShipmentDiscrepancyActResponse,
} from "./endpoints/shipments/download-shipment-discrepancy-act/types.js";
import { executeSetShipmentPalletsCount } from "./endpoints/shipments/set-shipment-pallets-count/execute.js";
import type {
  SetShipmentPalletsCountInput,
  SetShipmentPalletsCountResponse,
} from "./endpoints/shipments/set-shipment-pallets-count/types.js";
export type {
  SetShipmentPalletsCountInput,
  SetShipmentPalletsCountResponse,
} from "./endpoints/shipments/set-shipment-pallets-count/types.js";
import { executeDownloadShipmentPalletLabels } from "./endpoints/shipments/download-shipment-pallet-labels/execute.js";
import type {
  DownloadShipmentPalletLabelsInput,
  DownloadShipmentPalletLabelsResponse,
} from "./endpoints/shipments/download-shipment-pallet-labels/types.js";
export type {
  DownloadShipmentPalletLabelsInput,
  DownloadShipmentPalletLabelsResponse,
} from "./endpoints/shipments/download-shipment-pallet-labels/types.js";
import { executeSearchShipments } from "./endpoints/shipments/search-shipments/execute.js";
import type {
  SearchShipmentsInput,
  SearchShipmentsResponse,
} from "./endpoints/shipments/search-shipments/types.js";
export type {
  SearchShipmentsInput,
  SearchShipmentsResponse,
} from "./endpoints/shipments/search-shipments/types.js";
import { executeTransferOrdersFromShipment } from "./endpoints/shipments/transfer-orders-from-shipment/execute.js";
import type {
  TransferOrdersFromShipmentInput,
  TransferOrdersFromShipmentResponse,
} from "./endpoints/shipments/transfer-orders-from-shipment/types.js";
export type {
  TransferOrdersFromShipmentInput,
  TransferOrdersFromShipmentResponse,
} from "./endpoints/shipments/transfer-orders-from-shipment/types.js";
import { executeUpdateStocks } from "./endpoints/stocks/update-stocks/execute.js";
import type {
  UpdateStocksInput,
  UpdateStocksResponse,
} from "./endpoints/stocks/update-stocks/types.js";
export type {
  UpdateStocksInput,
  UpdateStocksResponse,
} from "./endpoints/stocks/update-stocks/types.js";
import { executeGetStocks } from "./endpoints/stocks/get-stocks/execute.js";
import type {
  GetStocksInput,
  GetStocksResponse,
} from "./endpoints/stocks/get-stocks/types.js";
export type {
  GetStocksInput,
  GetStocksResponse,
} from "./endpoints/stocks/get-stocks/types.js";
import { executeUpdateStocksOnPartnerWarehouses } from "./endpoints/stocks/update-stocks-on-partner-warehouses/execute.js";
import type {
  UpdateStocksOnPartnerWarehousesInput,
  UpdateStocksOnPartnerWarehousesResponse,
} from "./endpoints/stocks/update-stocks-on-partner-warehouses/types.js";
export type {
  UpdateStocksOnPartnerWarehousesInput,
  UpdateStocksOnPartnerWarehousesResponse,
} from "./endpoints/stocks/update-stocks-on-partner-warehouses/types.js";
import { executeGetStocksOnPartnerWarehouses } from "./endpoints/stocks/get-stocks-on-partner-warehouses/execute.js";
import type {
  GetStocksOnPartnerWarehousesInput,
  GetStocksOnPartnerWarehousesResponse,
} from "./endpoints/stocks/get-stocks-on-partner-warehouses/types.js";
export type {
  GetStocksOnPartnerWarehousesInput,
  GetStocksOnPartnerWarehousesResponse,
} from "./endpoints/stocks/get-stocks-on-partner-warehouses/types.js";
import { executeGetSupplyRequests } from "./endpoints/supplyRequests/get-supply-requests/execute.js";
import type {
  GetSupplyRequestsInput,
  GetSupplyRequestsResponse,
} from "./endpoints/supplyRequests/get-supply-requests/types.js";
export type {
  GetSupplyRequestsInput,
  GetSupplyRequestsResponse,
} from "./endpoints/supplyRequests/get-supply-requests/types.js";
import { executeGetSupplyRequestItems } from "./endpoints/supplyRequests/get-supply-request-items/execute.js";
import type {
  GetSupplyRequestItemsInput,
  GetSupplyRequestItemsResponse,
} from "./endpoints/supplyRequests/get-supply-request-items/types.js";
export type {
  GetSupplyRequestItemsInput,
  GetSupplyRequestItemsResponse,
} from "./endpoints/supplyRequests/get-supply-request-items/types.js";
import { executeGetSupplyRequestDocuments } from "./endpoints/supplyRequests/get-supply-request-documents/execute.js";
import type {
  GetSupplyRequestDocumentsInput,
  GetSupplyRequestDocumentsResponse,
} from "./endpoints/supplyRequests/get-supply-request-documents/types.js";
export type {
  GetSupplyRequestDocumentsInput,
  GetSupplyRequestDocumentsResponse,
} from "./endpoints/supplyRequests/get-supply-request-documents/types.js";
import { executeCalculateTariffs } from "./endpoints/tariffs/calculate-tariffs/execute.js";
import type {
  CalculateTariffsInput,
  CalculateTariffsResponse,
} from "./endpoints/tariffs/calculate-tariffs/types.js";
export type {
  CalculateTariffsInput,
  CalculateTariffsResponse,
} from "./endpoints/tariffs/calculate-tariffs/types.js";
import { executeGetWarehouses } from "./endpoints/warehouses/get-warehouses/execute.js";
import type {
  GetWarehousesInput,
  GetWarehousesResponse,
} from "./endpoints/warehouses/get-warehouses/types.js";
export type {
  GetWarehousesInput,
  GetWarehousesResponse,
} from "./endpoints/warehouses/get-warehouses/types.js";
import { executeGetPagedWarehouses } from "./endpoints/warehouses/get-paged-warehouses/execute.js";
import type {
  GetPagedWarehousesInput,
  GetPagedWarehousesResponse,
} from "./endpoints/warehouses/get-paged-warehouses/types.js";
export type {
  GetPagedWarehousesInput,
  GetPagedWarehousesResponse,
} from "./endpoints/warehouses/get-paged-warehouses/types.js";
import { executeGetPartnerWarehouses } from "./endpoints/warehouses/get-partner-warehouses/execute.js";
import type {
  GetPartnerWarehousesInput,
  GetPartnerWarehousesResponse,
} from "./endpoints/warehouses/get-partner-warehouses/types.js";
export type {
  GetPartnerWarehousesInput,
  GetPartnerWarehousesResponse,
} from "./endpoints/warehouses/get-partner-warehouses/types.js";
import { executeGetFulfillmentWarehouses } from "./endpoints/warehouses/get-fulfillment-warehouses/execute.js";
import type {
  GetFulfillmentWarehousesInput,
  GetFulfillmentWarehousesResponse,
} from "./endpoints/warehouses/get-fulfillment-warehouses/types.js";
export type {
  GetFulfillmentWarehousesInput,
  GetFulfillmentWarehousesResponse,
} from "./endpoints/warehouses/get-fulfillment-warehouses/types.js";
import { executeUpdateWarehouseStatus } from "./endpoints/warehouses/update-warehouse-status/execute.js";
import type {
  UpdateWarehouseStatusInput,
  UpdateWarehouseStatusResponse,
} from "./endpoints/warehouses/update-warehouse-status/types.js";
export type {
  UpdateWarehouseStatusInput,
  UpdateWarehouseStatusResponse,
} from "./endpoints/warehouses/update-warehouse-status/types.js";
import { executeUpdateWarehouseModelStatus } from "./endpoints/warehouses/update-warehouse-model-status/execute.js";
import type {
  UpdateWarehouseModelStatusInput,
  UpdateWarehouseModelStatusResponse,
} from "./endpoints/warehouses/update-warehouse-model-status/types.js";
export type {
  UpdateWarehouseModelStatusInput,
  UpdateWarehouseModelStatusResponse,
} from "./endpoints/warehouses/update-warehouse-model-status/types.js";

export const YmApiHost = {
  Partner: "https://api.partner.market.yandex.ru",
} as const;
export type YmApiHost = (typeof YmApiHost)[keyof typeof YmApiHost];
export const YM_API_ORIGINS = ["https://api.partner.market.yandex.ru"] as const;
export type YmApiOrigin = (typeof YM_API_ORIGINS)[number];

export interface YmAuthApi {
  /**
   * Получение информации о токене авторизации
   *
   * Метод доступен только для Api-Key-токена.
   *
   * Возвращает информацию о переданном токене авторизации.
   *
   * POST /v2/auth/token
   *
   * Разделы YM: auth, fby, fbs, dbs, express, laas.
   *
   * @see https://yandex.ru/dev/market/partner-api/doc/ru/
   */
  readonly getAuthTokenInfo: (
    options?: YmRequestOptions,
  ) => Promise<GetAuthTokenInfoResponse>;
}

export interface YmBidsApi {
  /**
   * Включение буста продаж и установка ставок
   *
   * Запускает буст продаж — создает и включает кампанию, добавляет в нее товары и назначает на них ставки.
   *
   * Как в кабинете выглядит кампания, созданная через API
   *
   * ![](../../_images/api-boost.png)
   *
   * При первом использовании запроса Маркет: создаст единую на все магазины бизнес-аккаунта кампанию, добавит в нее товары с указанными ставками, включит для них ценовую стратегию и запустит продвижение. Повторное использование запроса позволит обновить ставки на товары в этой кампании или добавить новые. Подробнее о ценовой стратегии читайте в [Справке Маркета для продавцов](https://yandex.ru/support/marketplace/marketing/campaigns.html#price-strategy).
   *
   * Если товара с указанным SKU нет, он будет проигнорирован. Если в будущем в каталоге появится товар с таким SKU, он автоматически будет добавлен в кампанию с указанной ставкой.
   *
   * Запрос всегда работает с одной и той же созданной через API кампанией. Если в кабинете удалить ее, при следующем выполнении запроса Маркет создаст новую. Другими кампаниями управлять через API не получится. У созданной через API кампании всегда наибольший приоритет над остальными — изменить его нельзя.
   *
   * Выполнение запроса включает кампанию и ценовую стратегию, если они были отключены.
   *
   * Внести другие изменения в созданную через API кампанию можно в кабинете:
   *
   * * выключить или включить кампанию;
   * * изменить ее название;
   * * выключить или включить ценовую стратегию.
   *
   * Чтобы остановить продвижение отдельных товаров и удалить их из кампании, передайте для них нулевую ставку в параметре `bid`.
   *
   * Подробнее о том, как работает буст продаж, читайте в [Справке Маркета для продавцов](https://yandex.ru/support/marketplace/marketing/campaigns.html).
   *
   * Узнать расходы на буст продаж можно с помощью запроса [POST v2/campaigns/{campaignId}/stats/orders](../../reference/orders-stats/getOrdersStats.md). Сумма содержится в поле `bidFee`.
   *
   * Данные обновляются не мгновенно
   *
   * Это занимает до нескольких минут.
   *
   * PUT /v2/businesses/{businessId}/bids
   *
   * Разделы YM: bids, dbs, fbs, fby, express.
   *
   * @see https://yandex.ru/dev/market/partner-api/doc/ru/
   */
  readonly putBidsForBusiness: (
    input: PutBidsForBusinessInput,
    options?: YmRequestOptions,
  ) => Promise<PutBidsForBusinessResponse>;
  /**
   * Включение буста продаж и установка ставок для магазина
   *
   * Запускает буст продаж в указанном магазине — создает и включает кампанию, добавляет в нее товары и назначает на них ставки.
   *
   * При первом использовании запроса Маркет: создаст кампанию, добавит в нее товары с указанными ставками для заданного магазина, включит для них ценовую стратегию и запустит продвижение. Повторное использование запроса позволит обновить ставки на товары в этой кампании или добавить новые. Подробнее о ценовой стратегии читайте в [Справке Маркета для продавцов](https://yandex.ru/support/marketplace/marketing/campaigns.html#price-strategy).
   *
   * Если товара с указанным SKU нет, он будет проигнорирован. Если в будущем в каталоге появится товар с таким SKU, он автоматически будет добавлен в кампанию с указанной ставкой.
   *
   * Запрос всегда работает с одной и той же кампанией, созданной через этот запрос или [PUT v2/businesses/{businessId}/bids](/reference/bids/putBidsForBusiness). Если в кабинете удалить ее, при следующем выполнении запроса Маркет создаст новую. У созданной через API кампании всегда наибольший приоритет над остальными — изменить его нельзя.
   *
   * Выполнение запроса включает кампанию и ценовую стратегию, если они были отключены.
   *
   * Внести другие изменения в созданную через API кампанию можно в кабинете:
   *
   * * выключить или включить кампанию;
   * * изменить ее название;
   * * выключить или включить ценовую стратегию.
   *
   * Чтобы остановить продвижение отдельных товаров и удалить их из кампании, передайте для них нулевую ставку в параметре `bid`.
   *
   * Подробнее о том, как работает буст продаж, читайте в [Справке Маркета для продавцов](https://yandex.ru/support/marketplace/marketing/campaigns.html).
   *
   * Узнать расходы на буст продаж можно с помощью запроса [POST v2/campaigns/{campaignId}/stats/orders](../../reference/orders-stats/getOrdersStats.md). Сумма содержится в поле `bidFee`.
   *
   * Данные обновляются не мгновенно
   *
   * Это занимает до нескольких минут.
   *
   * PUT /v2/campaigns/{campaignId}/bids
   *
   * Разделы YM: bids, dbs, fbs, express, fby.
   *
   * @see https://yandex.ru/dev/market/partner-api/doc/ru/
   */
  readonly putBidsForCampaign: (
    input: PutBidsForCampaignInput,
    options?: YmRequestOptions,
  ) => Promise<PutBidsForCampaignResponse>;
  /**
   * Информация об установленных ставках
   *
   * Возвращает значения ставок для заданных товаров.
   *
   * Получить информацию по кампаниям, созданным в кабинете, не получится
   *
   * В ответе возвращаются значения только тех ставок, которые вы установили через запрос [PUT v2/businesses/{businessId}/bids](../../reference/bids/putBidsForBusiness.md).
   *
   * POST /v2/businesses/{businessId}/bids/info
   *
   * Разделы YM: bids, dbs, fbs, fby, express.
   *
   * @see https://yandex.ru/dev/market/partner-api/doc/ru/
   */
  readonly getBidsInfoForBusiness: (
    input: GetBidsInfoForBusinessInput,
    options?: YmRequestOptions,
  ) => Promise<GetBidsInfoForBusinessResponse>;
  /**
   * Рекомендованные ставки для заданных товаров
   *
   * Возвращает рекомендованные ставки для заданных товаров, что обеспечивает вашим предложениям определенную долю показов, и дополнительные инструменты продвижения.
   *
   * Для одного товара может возвращаться одна рекомендованная ставка или несколько. Во втором случае разные ставки предназначены для достижения разной доли показов и получения дополнительных инструментов продвижения.
   *
   * Если товар только добавлен в каталог, но пока не продается, рекомендованной ставки для него не будет.
   *
   * В одном запросе может быть максимум 1500 товаров.
   *
   * POST /v2/businesses/{businessId}/bids/recommendations
   *
   * Разделы YM: bids, dbs, fbs, fby, express.
   *
   * @see https://yandex.ru/dev/market/partner-api/doc/ru/
   */
  readonly getBidsRecommendations: (
    input: GetBidsRecommendationsInput,
    options?: YmRequestOptions,
  ) => Promise<GetBidsRecommendationsResponse>;
}

export interface YmBusinessesApi {
  /**
   * Настройки кабинета
   *
   * Возвращает информацию о настройках кабинета, идентификатор которого указан в запросе.
   *
   * POST /v2/businesses/{businessId}/settings
   *
   * Разделы YM: businesses, dbs, fbs, fby, express, laas.
   *
   * @see https://yandex.ru/dev/market/partner-api/doc/ru/
   */
  readonly getBusinessSettings: (
    input: GetBusinessSettingsInput,
    options?: YmRequestOptions,
  ) => Promise<GetBusinessSettingsResponse>;
}

export interface YmBusinessOfferMappingsApi {
  /**
   * Удаление товаров из каталога
   *
   * Удаляет товары из каталога.
   *
   * POST /v2/businesses/{businessId}/offer-mappings/delete
   *
   * Разделы YM: business-offer-mappings, dbs, fby, fbs, express, laas.
   *
   * @see https://yandex.ru/dev/market/partner-api/doc/ru/
   */
  readonly deleteOffers: (
    input: DeleteOffersInput,
    options?: YmRequestOptions,
  ) => Promise<DeleteOffersResponse>;
  /**
   * Информация о товарах в каталоге
   *
   * Возвращает список товаров в каталоге, их категории на Маркете и характеристики каждого товара.
   *
   * Можно использовать тремя способами:
   * * задать список интересующих SKU;
   * * задать фильтр — в этом случае результаты возвращаются постранично;
   * * не передавать тело запроса, чтобы получить список всех товаров в каталоге.
   *
   * Чтобы получить категорийные характеристики товаров, воспользуйтесь методом [POST v2/businesses/{businessId}/offer-cards](../../reference/content/getOfferCardsContentStatus.md).
   *
   * POST /v2/businesses/{businessId}/offer-mappings
   *
   * Разделы YM: business-offer-mappings, dbs, fby, fbs, express, laas.
   *
   * @see https://yandex.ru/dev/market/partner-api/doc/ru/
   */
  readonly getOfferMappings: (
    input: GetOfferMappingsInput,
    options?: YmRequestOptions,
  ) => Promise<GetOfferMappingsResponse>;
  /**
   * Добавление товаров в каталог и изменение информации о них
   *
   * Добавляет товары в каталог и передает:
   *
   * * их [листовые категории](*list-categories) на Маркете и категорийные характеристики;
   * * основные характеристики;
   * * цены на товары в кабинете.
   *
   * Также объединяет товары на карточке, редактирует и удаляет информацию об уже добавленных товарах, в том числе цены в кабинете и категории товаров.
   *
   * Список категорий Маркета можно получить с помощью запроса [POST v2/categories/tree](../../reference/categories/getCategoriesTree.md), а характеристики товаров по категориям с помощью [POST v2/category/{categoryId}/parameters](../../reference/content/getCategoryContentParameters.md).
   *
   * Добавить новый товар
   *
   * Передайте его с новым идентификатором, который раньше никогда не использовался в каталоге.
   *
   * Обязательно укажите параметры: `offerId`, `name`, `marketCategoryId`, `pictures`, `vendor`, `description`.
   *
   * Старайтесь сразу передать как можно больше информации — она потребуется Маркету для подбора подходящей карточки или создания новой.
   *
   * Если известно, какой карточке на Маркете соответствует товар, можно сразу указать идентификатор этой карточки (SKU на Маркете) в поле `marketSKU`.
   *
   * **Для продавцов Market Yandex Go:**
   *
   * Когда вы добавляете товары в каталог, указывайте значения параметров `name` и `description` на русском языке. Чтобы на витрине они отображались и на другом языке, еще раз выполните запрос `POST v2/businesses/{businessId}/offer-mappings/update`, где укажите:
   *
   * * язык в параметре `language`;
   * * значения параметров `name` и `description` на указанном языке.
   *
   * Повторно передавать остальные характеристики товара не нужно.
   *
   * Изменить информацию о товаре
   *
   * Передайте новые данные, указав в `offerId` SKU товара в вашей системе.
   *
   * Поля, в которых ничего не меняется, можно не передавать.
   *
   * Удалить переданные ранее параметры товара
   *
   * В `deleteParameters` укажите значения параметров, которые хотите удалить. Можно передать сразу несколько значений.
   *
   * Для параметров с типом `string` также можно передать пустое значение.
   *
   * Параметр `offerId` (SKU товара в вашей системе) должен быть **уникальным** для всех товаров, которые вы передаете.
   *
   * Правила использования SKU
   *
   * * У каждого товара SKU должен быть свой.
   *
   * * Уже заданный SKU нельзя освободить и использовать заново для другого товара. Каждый товар должен получать новый идентификатор, до того никогда не использовавшийся в вашем каталоге.
   *
   * SKU товара можно изменить в кабинете продавца на Маркете. О том, как это сделать, читайте [в Справке Маркета для продавцов](https://yandex.ru/support2/marketplace/ru/assortment/operations/edit-sku).
   *
   * Данные в каталоге обновляются не мгновенно
   *
   * Это занимает до нескольких минут.
   *
   * POST /v2/businesses/{businessId}/offer-mappings/update
   *
   * Разделы YM: business-offer-mappings, dbs, fby, fbs, express, laas.
   *
   * @see https://yandex.ru/dev/market/partner-api/doc/ru/
   */
  readonly updateOfferMappings: (
    input: UpdateOfferMappingsInput,
    options?: YmRequestOptions,
  ) => Promise<UpdateOfferMappingsResponse>;
  /**
   * Добавление товаров в архив
   *
   * Помещает товары в архив. Товары, помещенные в архив, скрыты с витрины во всех магазинах кабинета.
   *
   * В архив нельзя отправить товар, который хранится на складе Маркета
   *
   * Вначале такой товар нужно распродать или вывезти.
   *
   * POST /v2/businesses/{businessId}/offer-mappings/archive
   *
   * Разделы YM: business-offer-mappings, dbs, fby, fbs, express.
   *
   * @see https://yandex.ru/dev/market/partner-api/doc/ru/
   */
  readonly addOffersToArchive: (
    input: AddOffersToArchiveInput,
    options?: YmRequestOptions,
  ) => Promise<AddOffersToArchiveResponse>;
  /**
   * Удаление товаров из архива
   *
   * Восстанавливает товары из архива.
   *
   * POST /v2/businesses/{businessId}/offer-mappings/unarchive
   *
   * Разделы YM: business-offer-mappings, dbs, fby, fbs, express.
   *
   * @see https://yandex.ru/dev/market/partner-api/doc/ru/
   */
  readonly deleteOffersFromArchive: (
    input: DeleteOffersFromArchiveInput,
    options?: YmRequestOptions,
  ) => Promise<DeleteOffersFromArchiveResponse>;
  /**
   * Генерация штрихкодов
   *
   * Генерирует штрихкоды и присваивает их указанным товарам.
   *
   * Если у товара на упаковке уже есть штрихкод производителя, передайте его в параметре `barcodes` в методе [POST v2/businesses/{businessId}/offer-mappings/update](../../reference/business-offer-mappings/updateOfferMappings.md). Генерировать новый не нужно.
   *
   * POST /v1/businesses/{businessId}/offer-mappings/barcodes/generate
   *
   * Разделы YM: business-offer-mappings, dbs, fby, fbs, express, laas.
   *
   * @see https://yandex.ru/dev/market/partner-api/doc/ru/
   */
  readonly generateOfferBarcodes: (
    input: GenerateOfferBarcodesInput,
    options?: YmRequestOptions,
  ) => Promise<GenerateOfferBarcodesResponse>;
}

export interface YmCampaignsApi {
  /**
   * Список магазинов пользователя
   *
   * **Для Api-Key-токена:** возвращает список магазинов в кабинете, для которого выдан токен. Нельзя получить список только подагентских магазинов.
   *
   * **Для OAuth-токена:** возвращает список магазинов, к которым имеет доступ пользователь — владелец токена авторизации, использованного в запросе. Для агентских пользователей список состоит из подагентских магазинов.
   *
   * Ограничение для параметра `pageSize`
   *
   * Не передавайте значение больше 100.
   *
   * GET /v2/campaigns
   *
   * Разделы YM: campaigns, dbs, express, fbs, fby, laas.
   *
   * @see https://yandex.ru/dev/market/partner-api/doc/ru/
   */
  readonly getCampaigns: (
    input?: GetCampaignsInput,
    options?: YmRequestOptions,
  ) => Promise<GetCampaignsResponse>;
  /**
   * Информация о магазине
   *
   * Возвращает информацию о магазине.
   *
   * GET /v2/campaigns/{campaignId}
   *
   * Разделы YM: campaigns, dbs, express, fbs, fby, laas.
   *
   * @see https://yandex.ru/dev/market/partner-api/doc/ru/
   */
  readonly getCampaign: (
    input: GetCampaignInput,
    options?: YmRequestOptions,
  ) => Promise<GetCampaignResponse>;
  /**
   * Настройки магазина
   *
   * Возвращает информацию о настройках магазина, идентификатор которого указан в запросе.
   *
   * GET /v2/campaigns/{campaignId}/settings
   *
   * Разделы YM: campaigns, dbs, fbs, express, fby, laas.
   *
   * @see https://yandex.ru/dev/market/partner-api/doc/ru/
   */
  readonly getCampaignSettings: (
    input: GetCampaignSettingsInput,
    options?: YmRequestOptions,
  ) => Promise<GetCampaignSettingsResponse>;
}

export interface YmCategoriesApi {
  /**
   * Дерево категорий
   *
   * Возвращает дерево категорий Маркета.
   *
   * POST /v2/categories/tree
   *
   * Разделы YM: categories, fby, fbs, dbs, express, laas.
   *
   * @see https://yandex.ru/dev/market/partner-api/doc/ru/
   */
  readonly getCategoriesTree: (
    input?: GetCategoriesTreeInput,
    options?: YmRequestOptions,
  ) => Promise<GetCategoriesTreeResponse>;
  /**
   * Лимит на установку кванта продажи и минимального количества товаров в заказе
   *
   * Возвращает лимит на установку [кванта](*quantum) и минимального количества товаров в заказе, которые вы можете задать для товаров указанных категорий.
   *
   * Если вы передадите значение кванта или минимального количества товаров выше установленного Маркетом ограничения, товар будет скрыт с витрины.
   *
   * Подробнее о том, как продавать товары по несколько штук, читайте [в Справке Маркета для продавцов](https://yandex.ru/support2/marketplace/ru/assortment/fields/quantum).
   *
   * POST /v2/categories/max-sale-quantum
   *
   * Разделы YM: categories, fby, fbs, dbs, express.
   *
   * @see https://yandex.ru/dev/market/partner-api/doc/ru/
   *
   * @deprecated Метод помечен устаревшим в OpenAPI YM (деградация с 2027-01-18, отключение 2027-04-05; официальная замена не указана.
   */
  readonly getCategoriesMaxSaleQuantum: (
    input: GetCategoriesMaxSaleQuantumInput,
    options?: YmRequestOptions,
  ) => Promise<GetCategoriesMaxSaleQuantumResponse>;
}

export interface YmChatsApi {
  /**
   * Создание нового чата с покупателем
   *
   * Создает новый чат с покупателем и возвращает информацию о нем или созданном ранее.
   *
   * Типы чатов, которые может начать продавец:
   *
   * * по заказам;
   * * по возвратам (доступны только для FBY-, FBS- и Экспресс-магазинов).
   *
   * POST /v2/businesses/{businessId}/chats/new
   *
   * Разделы YM: chats, dbs, fbs, fby, express.
   *
   * @see https://yandex.ru/dev/market/partner-api/doc/ru/
   */
  readonly createChat: (
    input: CreateChatInput,
    options?: YmRequestOptions,
  ) => Promise<CreateChatResponse>;
  /**
   * Получение доступных чатов
   *
   * Возвращает чаты с покупателями.
   *
   * Подключите API-уведомления
   *
   * Маркет отправит вам запрос [POST notification](../../push-notifications/reference/sendNotification.md), когда появится новый чат или сообщение.
   *
   * [{#T}](../../push-notifications/index.md)
   *
   * POST /v2/businesses/{businessId}/chats
   *
   * Разделы YM: chats, dbs, fbs, fby, express.
   *
   * @see https://yandex.ru/dev/market/partner-api/doc/ru/
   */
  readonly getChats: (
    input: GetChatsInput,
    options?: YmRequestOptions,
  ) => Promise<GetChatsResponse>;
  /**
   * Получение чата по идентификатору
   *
   * Возвращает чат по его идентификатору.
   *
   * Подключите API-уведомления
   *
   * Маркет отправит вам запрос [POST notification](../../push-notifications/reference/sendNotification.md), когда появится новый чат или сообщение.
   *
   * [{#T}](../../push-notifications/index.md)
   *
   * GET /v2/businesses/{businessId}/chat
   *
   * Разделы YM: chats, dbs, fbs, fby, express.
   *
   * @see https://yandex.ru/dev/market/partner-api/doc/ru/
   */
  readonly getChat: (
    input: GetChatInput,
    options?: YmRequestOptions,
  ) => Promise<GetChatResponse>;
  /**
   * Отправка файла в чат
   *
   * Отправляет файл в чат с покупателем.
   *
   * POST /v2/businesses/{businessId}/chats/file/send
   *
   * Разделы YM: chats, dbs, fbs, fby, express.
   *
   * @see https://yandex.ru/dev/market/partner-api/doc/ru/
   */
  readonly sendFileToChat: (
    input: SendFileToChatInput,
    options?: YmRequestOptions,
  ) => Promise<SendFileToChatResponse>;
  /**
   * Отправка сообщения в чат
   *
   * Отправляет сообщение в чат с покупателем.
   *
   * POST /v2/businesses/{businessId}/chats/message
   *
   * Разделы YM: chats, dbs, fbs, fby, express.
   *
   * @see https://yandex.ru/dev/market/partner-api/doc/ru/
   */
  readonly sendMessageToChat: (
    input: SendMessageToChatInput,
    options?: YmRequestOptions,
  ) => Promise<SendMessageToChatResponse>;
  /**
   * Получение сообщения в чате
   *
   * Возвращает сообщение по его идентификатору.
   *
   * Подключите API-уведомления
   *
   * Маркет отправит вам запрос [POST notification](../../push-notifications/reference/sendNotification.md), когда появится новый чат или сообщение.
   *
   * [{#T}](../../push-notifications/index.md)
   *
   * GET /v2/businesses/{businessId}/chats/message
   *
   * Разделы YM: chats, dbs, fbs, fby, express.
   *
   * @see https://yandex.ru/dev/market/partner-api/doc/ru/
   */
  readonly getChatMessage: (
    input: GetChatMessageInput,
    options?: YmRequestOptions,
  ) => Promise<GetChatMessageResponse>;
  /**
   * Получение истории сообщений в чате
   *
   * Возвращает историю сообщений в чате с покупателем.
   *
   * POST /v2/businesses/{businessId}/chats/history
   *
   * Разделы YM: chats, dbs, fbs, fby, express.
   *
   * @see https://yandex.ru/dev/market/partner-api/doc/ru/
   */
  readonly getChatHistory: (
    input: GetChatHistoryInput,
    options?: YmRequestOptions,
  ) => Promise<GetChatHistoryResponse>;
}

export interface YmContentApi {
  /**
   * Списки характеристик товаров по категориям
   *
   * Возвращает список характеристик с допустимыми значениями для заданной [листовой категории](*list-category).
   *
   * Поля в ответе определяют правила передачи характеристики в методах:
   * - [POST v2/businesses/{businessId}/offer-mappings/update](../../reference/business-offer-mappings/updateOfferMappings.md)
   * - [POST v2/businesses/{businessId}/offer-cards/update](../../reference/content/updateOfferContent.md)
   *
   * POST /v2/category/{categoryId}/parameters
   *
   * Разделы YM: content, dbs, fby, fbs, express, laas.
   *
   * @see https://yandex.ru/dev/market/partner-api/doc/ru/
   */
  readonly getCategoryContentParameters: (
    input: GetCategoryContentParametersInput,
    options?: YmRequestOptions,
  ) => Promise<GetCategoryContentParametersResponse>;
  /**
   * Получение информации о заполненности карточек магазина
   *
   * Возвращает сведения о состоянии контента для заданных товаров:
   *
   * * создана ли карточка товара и в каком она статусе;
   * * рейтинг карточки — на сколько процентов она заполнена;
   * * переданные характеристики товаров;
   * * есть ли ошибки или предупреждения, связанные с контентом;
   * * рекомендации по заполнению карточки.
   *
   * Чтобы получить другие характеристики товаров, воспользуйтесь методом [POST v2/businesses/{businessId}/offer-mappings](../../reference/business-offer-mappings/getOfferMappings.md).
   *
   * POST /v2/businesses/{businessId}/offer-cards
   *
   * Разделы YM: content, dbs, fby, fbs, express, laas.
   *
   * @see https://yandex.ru/dev/market/partner-api/doc/ru/
   */
  readonly getOfferCardsContentStatus: (
    input: GetOfferCardsContentStatusInput,
    options?: YmRequestOptions,
  ) => Promise<GetOfferCardsContentStatusResponse>;
  /**
   * Редактирование категорийных характеристик товара
   *
   * Редактирует характеристики товара, которые специфичны для категории, к которой он относится.
   *
   * Здесь только то, что относится к конкретной категории
   *
   * Если вам нужно изменить основные параметры товара (название, описание, изображения, видео, производитель, штрихкод), воспользуйтесь запросом [POST v2/businesses/{businessId}/offer-mappings/update](../../reference/business-offer-mappings/updateOfferMappings.md).
   *
   * Чтобы удалить характеристики, которые заданы в параметрах с типом `string`, передайте пустое значение.
   *
   * Данные в каталоге обновляются не мгновенно
   *
   * Это занимает до нескольких минут.
   *
   * POST /v2/businesses/{businessId}/offer-cards/update
   *
   * Разделы YM: content, dbs, fby, fbs, express, laas.
   *
   * @see https://yandex.ru/dev/market/partner-api/doc/ru/
   */
  readonly updateOfferContent: (
    input: UpdateOfferContentInput,
    options?: YmRequestOptions,
  ) => Promise<UpdateOfferContentResponse>;
}

export interface YmDeliveryOptionsApi {
  /**
   * Получение доступных вариантов доставки заказов
   *
   * Возвращает список вариантов для доставки заказов. Выберите подходящий вариант доставки из ответа и передайте его при создании заказа.
   *
   * Укажите `courierDelivery` для курьерской доставки или `pickupDelivery` для доставки в пункт выдачи. Не передавайте оба параметра одновременно.
   *
   * POST /v1/campaigns/{campaignId}/delivery-options
   *
   * Разделы YM: delivery-options, laas.
   *
   * @see https://yandex.ru/dev/market/partner-api/doc/ru/
   */
  readonly getDeliveryOptions: (
    input: GetDeliveryOptionsInput,
    options?: YmRequestOptions,
  ) => Promise<GetDeliveryOptionsResponse>;
  /**
   * Получение подходящих для возврата пунктов выдачи
   *
   * Возвращает список идентификаторов пунктов выдачи, которые могут принять возврат указанных товаров.
   *
   * POST /v1/campaigns/{campaignId}/return-delivery-options
   *
   * Разделы YM: delivery-options, laas.
   *
   * @see https://yandex.ru/dev/market/partner-api/doc/ru/
   */
  readonly getReturnDeliveryOptions: (
    input: GetReturnDeliveryOptionsInput,
    options?: YmRequestOptions,
  ) => Promise<GetReturnDeliveryOptionsResponse>;
}

export interface YmDeliveryServicesApi {
  /**
   * Справочник служб доставки
   *
   * Возвращает справочник служб доставки: идентификаторы и наименования.
   *
   * GET /v2/delivery/services
   *
   * Разделы YM: delivery-services, fbs, dbs, express.
   *
   * @see https://yandex.ru/dev/market/partner-api/doc/ru/
   */
  readonly getDeliveryServices: (
    options?: YmRequestOptions,
  ) => Promise<GetDeliveryServicesResponse>;
}

export interface YmGoodsFeedbackApi {
  /**
   * Получение отзывов о товарах продавца
   *
   * Возвращает отзывы о товарах продавца по указанным фильтрам. **Исключение:** отзывы, которые удалили покупатели или Маркет.
   *
   * Вы также можете настроить API-уведомления
   *
   * Маркет отправит вам [запрос](../../push-notifications/reference/sendNotification.md), когда появится новый отзыв. А полную информацию о нем можно получить с помощью этого метода.
   *
   * [{#T}](../../push-notifications/index.md)
   *
   * Результаты возвращаются постранично.
   *
   * Отзывы расположены в порядке публикации, поэтому вы можете передавать определенный идентификатор страницы в `pageToken`, если вы получали его ранее.
   *
   * POST /v2/businesses/{businessId}/goods-feedback
   *
   * Разделы YM: goods-feedback, fby, fbs, dbs, express.
   *
   * @see https://yandex.ru/dev/market/partner-api/doc/ru/
   */
  readonly getGoodsFeedbacks: (
    input: GetGoodsFeedbacksInput,
    options?: YmRequestOptions,
  ) => Promise<GetGoodsFeedbacksResponse>;
  /**
   * Пропуск реакции на отзывы
   *
   * Пропускает реакцию на отзыв — параметр `needReaction` принимает значение `false` в методе получения всех отзывов [POST v2/businesses/{businessId}/goods-feedback](../../reference/goods-feedback/getGoodsFeedbacks.md).
   *
   * POST /v2/businesses/{businessId}/goods-feedback/skip-reaction
   *
   * Разделы YM: goods-feedback, fby, fbs, dbs, express.
   *
   * @see https://yandex.ru/dev/market/partner-api/doc/ru/
   */
  readonly skipGoodsFeedbacksReaction: (
    input: SkipGoodsFeedbacksReactionInput,
    options?: YmRequestOptions,
  ) => Promise<SkipGoodsFeedbacksReactionResponse>;
  /**
   * Добавление нового или изменение созданного комментария
   *
   * Добавляет новый комментарий магазина или изменяет комментарий, который магазин оставлял ранее.
   *
   * Для создания комментария к отзыву передайте только идентификатор отзыва `feedbackId`.
   *
   * Чтобы добавить комментарий к другому комментарию, передайте:
   *
   * * `feedbackId` — идентификатор отзыва;
   * * `comment.parentId` — идентификатор родительского комментария.
   *
   * Чтобы изменить комментарий, передайте:
   *
   * * `feedbackId`— идентификатор отзыва;
   * * `comment.id` — идентификатор комментария, который нужно изменить.
   *
   * Если передать одновременно `comment.parentId` и `comment.id`, будет изменен существующий комментарий.
   *
   * POST /v2/businesses/{businessId}/goods-feedback/comments/update
   *
   * Разделы YM: goods-feedback, fby, fbs, dbs, express.
   *
   * @see https://yandex.ru/dev/market/partner-api/doc/ru/
   */
  readonly updateGoodsFeedbackComment: (
    input: UpdateGoodsFeedbackCommentInput,
    options?: YmRequestOptions,
  ) => Promise<UpdateGoodsFeedbackCommentResponse>;
  /**
   * Удаление комментария к отзыву
   *
   * Удаляет комментарий магазина.
   *
   * POST /v2/businesses/{businessId}/goods-feedback/comments/delete
   *
   * Разделы YM: goods-feedback, fby, fbs, dbs, express.
   *
   * @see https://yandex.ru/dev/market/partner-api/doc/ru/
   */
  readonly deleteGoodsFeedbackComment: (
    input: DeleteGoodsFeedbackCommentInput,
    options?: YmRequestOptions,
  ) => Promise<DeleteGoodsFeedbackCommentResponse>;
  /**
   * Получение комментариев к отзыву
   *
   * Возвращает комментарии к отзыву, кроме:
   *
   * * тех, которые удалили пользователи или Маркет;
   * * комментариев к удаленным отзывам.
   *
   * Идентификатор родительского комментария `parentId` возвращается только для ответов на другие комментарии, но не для ответов на отзывы.
   *
   * Вы также можете настроить API-уведомления
   *
   * Маркет отправит вам [запрос](../../push-notifications/reference/sendNotification.md), когда появится новый комментарий. А полную информацию о нем можно получить с помощью этого метода.
   *
   * [{#T}](../../push-notifications/index.md)
   *
   * Результаты возвращаются постранично.
   *
   * Комментарии расположены в порядке публикации, поэтому вы можете передавать определенный идентификатор страницы в `pageToken`, если вы получали его ранее.
   *
   * POST /v2/businesses/{businessId}/goods-feedback/comments
   *
   * Разделы YM: goods-feedback, fby, fbs, dbs, express.
   *
   * @see https://yandex.ru/dev/market/partner-api/doc/ru/
   */
  readonly getGoodsFeedbackComments: (
    input: GetGoodsFeedbackCommentsInput,
    options?: YmRequestOptions,
  ) => Promise<GetGoodsFeedbackCommentsResponse>;
  /**
   * Получение отзывов о товарах для рекламодателей
   *
   * Возвращает отзывы о товарах бренда по указанным фильтрам. **Исключение:** отзывы, которые удалили покупатели или Маркет.
   *
   * Результаты возвращаются постранично.
   *
   * Отзывы расположены в порядке публикации, поэтому вы можете передавать определенный идентификатор страницы в `pageToken`, если вы получали его ранее.
   *
   * POST /v1/businesses/{businessId}/goods-feedback-advertiser
   *
   * Разделы YM: goods-feedback, fby, fbs, dbs, express.
   *
   * @see https://yandex.ru/dev/market/partner-api/doc/ru/
   */
  readonly getGoodsFeedbacksUrbanads: (
    input: GetGoodsFeedbacksUrbanadsInput,
    options?: YmRequestOptions,
  ) => Promise<GetGoodsFeedbacksUrbanadsResponse>;
}

export interface YmGoodsQuestionsApi {
  /**
   * Получение вопросов о товарах продавца
   *
   * Возвращает вопросы о товарах продавца по указанным фильтрам.
   *
   * Вы также можете настроить API-уведомления
   *
   * Маркет отправит вам [запрос](../../push-notifications/reference/sendNotification.md), когда появится новый вопрос. А полную информацию о нем можно получить с помощью этого метода.
   *
   * [{#T}](../../push-notifications/index.md)
   *
   * Результаты возвращаются постранично, одна страница содержит не более 50 вопросов.
   *
   * POST /v1/businesses/{businessId}/goods-questions
   *
   * Разделы YM: goods-questions, fby, fbs, dbs, express.
   *
   * @see https://yandex.ru/dev/market/partner-api/doc/ru/
   */
  readonly getGoodsQuestions: (
    input: GetGoodsQuestionsInput,
    options?: YmRequestOptions,
  ) => Promise<GetGoodsQuestionsResponse>;
  /**
   * Получение ответов на вопрос
   *
   * Возвращает ответы на вопрос о товаре по указанным фильтрам.
   *
   * Вы также можете настроить API-уведомления
   *
   * Маркет отправит вам [запрос](../../push-notifications/reference/sendNotification.md), когда появится новый ответ или комментарий. А полную информацию о них можно получить с помощью этого метода.
   *
   * [{#T}](../../push-notifications/index.md)
   *
   * Результаты возвращаются постранично, одна страница содержит не более 50 ответов.
   *
   * POST /v1/businesses/{businessId}/goods-questions/answers
   *
   * Разделы YM: goods-questions, fby, fbs, dbs, express.
   *
   * @see https://yandex.ru/dev/market/partner-api/doc/ru/
   */
  readonly getGoodsQuestionAnswers: (
    input: GetGoodsQuestionAnswersInput,
    options?: YmRequestOptions,
  ) => Promise<GetGoodsQuestionAnswersResponse>;
  /**
   * Создание, изменение и удаление ответа или комментария
   *
   * Создание, изменение и удаление ответа или комментария.
   *
   * POST /v1/businesses/{businessId}/goods-questions/update
   *
   * Разделы YM: goods-questions, fby, fbs, dbs, express.
   *
   * @see https://yandex.ru/dev/market/partner-api/doc/ru/
   */
  readonly updateGoodsQuestionTextEntity: (
    input: UpdateGoodsQuestionTextEntityInput,
    options?: YmRequestOptions,
  ) => Promise<UpdateGoodsQuestionTextEntityResponse>;
}

export interface YmGoodsStatsApi {
  /**
   * Отчет по товарам
   *
   * Возвращает подробный отчет по товарам, которые вы разместили на Маркете. С помощью отчета вы можете узнать, например, об остатках на складе, об условиях хранения ваших товаров и т. д.
   *
   * POST /v2/campaigns/{campaignId}/stats/skus
   *
   * Разделы YM: goods-stats, fby, fbs, express, dbs.
   *
   * @see https://yandex.ru/dev/market/partner-api/doc/ru/
   */
  readonly getGoodsStats: (
    input: GetGoodsStatsInput,
    options?: YmRequestOptions,
  ) => Promise<GetGoodsStatsResponse>;
}

export interface YmHiddenOffersApi {
  /**
   * Скрытие товаров и настройки скрытия
   *
   * Скрывает товары магазина на Маркете.
   *
   * Данные в каталоге обновляются не мгновенно
   *
   * Это занимает до нескольких минут.
   *
   * POST /v2/campaigns/{campaignId}/hidden-offers
   *
   * Разделы YM: hidden-offers, fby, fbs, dbs, express.
   *
   * @see https://yandex.ru/dev/market/partner-api/doc/ru/
   */
  readonly addHiddenOffers: (
    input: AddHiddenOffersInput,
    options?: YmRequestOptions,
  ) => Promise<AddHiddenOffersResponse>;
  /**
   * Информация о скрытых вами товарах
   *
   * Возвращает список скрытых вами товаров для заданного магазина.
   *
   * В списке будут товары, скрытые любым способом — через API, с помощью YML-фида, в кабинете и так далее.
   *
   * GET /v2/campaigns/{campaignId}/hidden-offers
   *
   * Разделы YM: hidden-offers, fby, fbs, dbs, express.
   *
   * @see https://yandex.ru/dev/market/partner-api/doc/ru/
   */
  readonly getHiddenOffers: (
    input: GetHiddenOffersInput,
    options?: YmRequestOptions,
  ) => Promise<GetHiddenOffersResponse>;
  /**
   * Возобновление показа товаров
   *
   * Возобновляет показ скрытых вами товаров магазина на Маркете.
   *
   * Данные в каталоге обновляются не мгновенно
   *
   * Это занимает до нескольких минут.
   *
   * POST /v2/campaigns/{campaignId}/hidden-offers/delete
   *
   * Разделы YM: hidden-offers, fby, fbs, dbs, express.
   *
   * @see https://yandex.ru/dev/market/partner-api/doc/ru/
   */
  readonly deleteHiddenOffers: (
    input: DeleteHiddenOffersInput,
    options?: YmRequestOptions,
  ) => Promise<DeleteHiddenOffersResponse>;
}

export interface YmLogisticPointsApi {
  /**
   * Получение точек ПВЗ Маркета
   *
   * Возвращает список пунктов выдачи заказов Маркета.
   *
   * Регулярно запрашивайте эту информацию, чтобы в системе магазина хранить актуальные данные. Например, раз в день.
   *
   * POST /v1/businesses/{businessId}/logistics-points
   *
   * Разделы YM: logistic-points, laas.
   *
   * @see https://yandex.ru/dev/market/partner-api/doc/ru/
   */
  readonly getLogisticPoints: (
    input: GetLogisticPointsInput,
    options?: YmRequestOptions,
  ) => Promise<GetLogisticPointsResponse>;
}

export interface YmOffersApi {
  /**
   * Информация о товарах, которые размещены в заданном магазине
   *
   * Возвращает список товаров, которые размещены в заданном магазине. Для каждого товара указываются параметры размещения.
   *
   * POST /v2/campaigns/{campaignId}/offers
   *
   * Разделы YM: offers, dbs, fby, fbs, express, laas.
   *
   * @see https://yandex.ru/dev/market/partner-api/doc/ru/
   */
  readonly getCampaignOffers: (
    input: GetCampaignOffersInput,
    options?: YmRequestOptions,
  ) => Promise<GetCampaignOffersResponse>;
  /**
   * Изменение условий продажи товаров в магазине
   *
   * Изменяет параметры размещения товаров в конкретном магазине: доступность товара и применяемый НДС.
   *
   * POST /v2/campaigns/{campaignId}/offers/update
   *
   * Разделы YM: offers, dbs, fby, fbs, express, laas.
   *
   * @see https://yandex.ru/dev/market/partner-api/doc/ru/
   */
  readonly updateCampaignOffers: (
    input: UpdateCampaignOffersInput,
    options?: YmRequestOptions,
  ) => Promise<UpdateCampaignOffersResponse>;
  /**
   * Удаление товаров из ассортимента магазина
   *
   * Удаляет заданные товары из заданного магазина.
   *
   * Запрос удаляет товары из конкретного магазина
   *
   * На продажи в других магазинах и на наличие товара в общем каталоге он не влияет.
   *
   * Товар не получится удалить, если он хранится на складах Маркета.
   *
   * POST /v2/campaigns/{campaignId}/offers/delete
   *
   * Разделы YM: offers, dbs, fby, fbs, express, laas.
   *
   * @see https://yandex.ru/dev/market/partner-api/doc/ru/
   */
  readonly deleteCampaignOffers: (
    input: DeleteCampaignOffersInput,
    options?: YmRequestOptions,
  ) => Promise<DeleteCampaignOffersResponse>;
  /**
   * Рекомендации Маркета, касающиеся цен
   *
   * Метод возвращает рекомендации нескольких типов.
   *
   * 1. Порог для привлекательной цены.
   * 2. Оценка привлекательности цен на витрине.
   *
   * Рекомендации показывают, какие цены нужно установить, чтобы привлечь покупателя.
   *
   * В запросе можно использовать фильтры. Результаты возвращаются постранично.
   *
   * POST /v2/businesses/{businessId}/offers/recommendations
   *
   * Разделы YM: offers, dbs, fby, fbs, express.
   *
   * @see https://yandex.ru/dev/market/partner-api/doc/ru/
   */
  readonly getOfferRecommendations: (
    input: GetOfferRecommendationsInput,
    options?: YmRequestOptions,
  ) => Promise<GetOfferRecommendationsResponse>;
}

export interface YmOperationsApi {
  /**
   * Получение статусов операций
   *
   * Возвращает статусы запущенных операций по их идентификаторам.
   *
   * POST /v1/businesses/{businessId}/operations
   *
   * Разделы YM: operations, laas.
   *
   * @see https://yandex.ru/dev/market/partner-api/doc/ru/
   */
  readonly getOperations: (
    input: GetOperationsInput,
    options?: YmRequestOptions,
  ) => Promise<GetOperationsResponse>;
}

export interface YmOrderBusinessInformationApi {
  /**
   * Информация о покупателе — юридическом лице
   *
   * Возвращает информацию о покупателе по идентификатору заказа.
   *
   * Как получить информацию о покупателе, который является физическим лицом
   *
   * Воспользуйтесь запросом [GET v2/campaigns/{campaignId}/orders/{orderId}/buyer](../../reference/order-delivery/getOrderBuyerInfo.md).
   *
   * Получить данные можно, только если заказ находится в статусе `PROCESSING`, `DELIVERY`, `PICKUP` или `DELIVERED`.
   *
   * POST /v2/campaigns/{campaignId}/orders/{orderId}/business-buyer
   *
   * Разделы YM: order-business-information, fbs, fby, dbs, express.
   *
   * @see https://yandex.ru/dev/market/partner-api/doc/ru/
   */
  readonly getOrderBusinessBuyerInfo: (
    input: GetOrderBusinessBuyerInfoInput,
    options?: YmRequestOptions,
  ) => Promise<GetOrderBusinessBuyerInfoResponse>;
  /**
   * Информация о документах
   *
   * Возвращает информацию о документах по идентификатору заказа.
   *
   * Получить данные можно после того, как заказ перейдет в статус `DELIVERED`.
   *
   * POST /v2/campaigns/{campaignId}/orders/{orderId}/documents
   *
   * Разделы YM: order-business-information, fbs, fby, dbs, express.
   *
   * @see https://yandex.ru/dev/market/partner-api/doc/ru/
   */
  readonly getOrderBusinessDocumentsInfo: (
    input: GetOrderBusinessDocumentsInfoInput,
    options?: YmRequestOptions,
  ) => Promise<GetOrderBusinessDocumentsInfoResponse>;
}

export interface YmOrderDeliveryApi {
  /**
   * Изменение даты доставки заказа
   *
   * Метод изменяет дату доставки заказа в статусе `PROCESSING` или `DELIVERY`. Для заказов с другими статусами дату доставки изменить нельзя.
   *
   * PUT /v2/campaigns/{campaignId}/orders/{orderId}/delivery/date
   *
   * Разделы YM: order-delivery, dbs.
   *
   * @see https://yandex.ru/dev/market/partner-api/doc/ru/
   */
  readonly setOrderDeliveryDate: (
    input: SetOrderDeliveryDateInput,
    options?: YmRequestOptions,
  ) => Promise<SetOrderDeliveryDateResponse>;
  /**
   * Передача трек‑номера посылки
   *
   * Передает Маркету трек‑номер, по которому покупатель может отследить посылку со своим заказом через службу доставки. Если покупатели смогут узнать, на каком этапе доставки находятся их заказы, доверие покупателей к вашему магазину может возрасти.
   *
   * Передать трек‑номер можно, только если заказ находится в статусе `PROCESSING`, `DELIVERY` или `PICKUP`.
   *
   * POST /v2/campaigns/{campaignId}/orders/{orderId}/delivery/track
   *
   * Разделы YM: order-delivery, dbs.
   *
   * @see https://yandex.ru/dev/market/partner-api/doc/ru/
   */
  readonly setOrderDeliveryTrackCode: (
    input: SetOrderDeliveryTrackCodeInput,
    options?: YmRequestOptions,
  ) => Promise<SetOrderDeliveryTrackCodeResponse>;
  /**
   * Информация о покупателе — физическом лице
   *
   * Возвращает информацию о покупателе по идентификатору заказа.
   *
   * Как получить информацию о покупателе, который является юридическим лицом
   *
   * Воспользуйтесь запросом [POST v2/campaigns/{campaignId}/orders/{orderId}/business-buyer](../../reference/order-business-information/getOrderBusinessBuyerInfo.md).
   *
   * Получить данные можно, только если заказ находится в статусе `PROCESSING`, `DELIVERY` или `PICKUP`.
   *
   * GET /v2/campaigns/{campaignId}/orders/{orderId}/buyer
   *
   * Разделы YM: order-delivery, dbs.
   *
   * @see https://yandex.ru/dev/market/partner-api/doc/ru/
   */
  readonly getOrderBuyerInfo: (
    input: GetOrderBuyerInfoInput,
    options?: YmRequestOptions,
  ) => Promise<GetOrderBuyerInfoResponse>;
  /**
   * Передача кода подтверждения
   *
   * Отправляет Маркету код подтверждения для его проверки.
   *
   * **Если у магазина настроена работа с кодами подтверждения:**
   *
   * В параметре `delivery`, вложенном в `order`, возвращается параметр `eacType` с типом `Enum` (тип кода подтверждения для передачи заказа) в методах:
   *
   * * [POST v1/businesses/{businessId}/orders](../../reference/orders/getBusinessOrders.md);
   * * [PUT v2/campaigns/{campaignId}/orders/{orderId}/status](../../reference/orders/updateOrderStatus.md).
   *
   * Возможные значения:
   *
   * * `MERCHANT_TO_COURIER` (временно не возвращается) — продавец передает код курьеру для получения невыкупа;
   * * `COURIER_TO_MERCHANT` — курьер передает код продавцу для получения заказа.
   *
   * Параметр `eacType` возвращается при статусах заказа `COURIER_FOUND`, `COURIER_ARRIVED_TO_SENDER` и `DELIVERY_SERVICE_UNDELIVERED`. Если заказ в других статусах, параметр может отсутствовать.
   *
   * PUT /v2/campaigns/{campaignId}/orders/{orderId}/verifyEac
   *
   * Разделы YM: order-delivery, express.
   *
   * @see https://yandex.ru/dev/market/partner-api/doc/ru/
   */
  readonly verifyOrderEac: (
    input: VerifyOrderEacInput,
    options?: YmRequestOptions,
  ) => Promise<VerifyOrderEacResponse>;
  /**
   * Продление срока хранения заказа
   *
   * Продлевает срок хранения заказа в пункте выдачи продавца.
   *
   * Заказ должен быть в статусе `PICKUP`. Продлить срок можно только один раз, не больше чем на 30 дней.
   *
   * Новый срок хранения можно получить в параметре `outletStorageLimitDate` в ответе метода [POST v1/businesses/{businessId}/orders](../../reference/orders/getBusinessOrders.md).
   *
   * PUT /v2/campaigns/{campaignId}/orders/{orderId}/delivery/storage-limit
   *
   * Разделы YM: order-delivery, dbs.
   *
   * @see https://yandex.ru/dev/market/partner-api/doc/ru/
   */
  readonly updateOrderStorageLimit: (
    input: UpdateOrderStorageLimitInput,
    options?: YmRequestOptions,
  ) => Promise<UpdateOrderStorageLimitResponse>;
}

export interface YmOrderLabelsApi {
  /**
   * Готовый ярлык‑наклейка для коробки в заказе
   *
   * Формирует ярлык‑наклейку для коробки в заказе и возвращает ярлык в PDF‑файле.
   *
   * Чтобы на ярлыке отображался внешний идентификатор заказа, передайте его в методе [POST v2/campaigns/{campaignId}/orders/{orderId}/external-id](../../reference/orders/updateExternalOrderId.md).
   *
   * GET /v2/campaigns/{campaignId}/orders/{orderId}/delivery/shipments/{shipmentId}/boxes/{boxId}/label
   *
   * Разделы YM: order-labels, fbs, dbs, express.
   *
   * @see https://yandex.ru/dev/market/partner-api/doc/ru/
   */
  readonly generateOrderLabel: (
    input: GenerateOrderLabelInput,
    options?: YmRequestOptions,
  ) => Promise<GenerateOrderLabelResponse>;
  /**
   * Готовые ярлыки‑наклейки на все коробки в одном заказе
   *
   * Возвращает PDF-файл с ярлыками, которые нужно наклеить на коробки перед отгрузкой. Подробно о том, зачем они нужны и как выглядят, рассказано [в Справке Маркета для продавцов](https://yandex.ru/support/marketplace/orders/fbs/packaging/marking.html).
   *
   * На вход нужно передать идентификатор заказа и один необязательный параметр, который управляет версткой PDF-файла.
   *
   * Чтобы на ярлыке отображался внешний идентификатор заказа, передайте его в методе [POST v2/campaigns/{campaignId}/orders/{orderId}/external-id](../../reference/orders/updateExternalOrderId.md).
   *
   * GET /v2/campaigns/{campaignId}/orders/{orderId}/delivery/labels
   *
   * Разделы YM: order-labels, fbs, dbs, express.
   *
   * @see https://yandex.ru/dev/market/partner-api/doc/ru/
   */
  readonly generateOrderLabels: (
    input: GenerateOrderLabelsInput,
    options?: YmRequestOptions,
  ) => Promise<GenerateOrderLabelsResponse>;
  /**
   * Данные для самостоятельного изготовления ярлыков
   *
   * Возвращает информацию на ярлыках, которые клеятся на коробки в заказе.
   *
   * GET /v2/campaigns/{campaignId}/orders/{orderId}/delivery/labels/data
   *
   * Разделы YM: order-labels, fbs, dbs, express.
   *
   * @see https://yandex.ru/dev/market/partner-api/doc/ru/
   */
  readonly getOrderLabelsData: (
    input: GetOrderLabelsDataInput,
    options?: YmRequestOptions,
  ) => Promise<GetOrderLabelsDataResponse>;
}

export interface YmOrdersApi {
  /**
   * Информация об одном заказе в магазине
   *
   * Возвращает информацию о заказе в магазине.
   *
   * Вы также можете настроить API-уведомления
   *
   * Маркет отправит вам [запрос](../../push-notifications/reference/sendNotification.md), когда появится новый заказ или изменится его статус. А полную информацию можно получить с помощью метода [POST v1/businesses/{businessId}/orders](../../reference/orders/getBusinessOrders.md).
   *
   * [{#T}](../../push-notifications/index.md)
   *
   * Получить более подробную информацию о покупателе и его номере телефона можно с помощью запроса [GET v2/campaigns/{campaignId}/orders/{orderId}/buyer](../../reference/order-delivery/getOrderBuyerInfo.md).
   *
   * GET /v2/campaigns/{campaignId}/orders/{orderId}
   *
   * Разделы YM: orders, fby, fbs, dbs, express, laas.
   *
   * @see https://yandex.ru/dev/market/partner-api/doc/ru/
   *
   * @deprecated Метод помечен устаревшим в OpenAPI YM (деградация с 2027-01-18, отключение 2027-04-12. Замена: `ym.orders.getBusinessOrders(...)` для `POST /v1/businesses/{businessId}/orders`.
   */
  readonly getOrder: (
    input: GetOrderInput,
    options?: YmRequestOptions,
  ) => Promise<GetOrderResponse>;
  /**
   * Информация о заказах в магазине
   *
   * Возвращает информацию о заказах в магазине. Запрос можно использовать для отслеживания заказов и их статусов.
   *
   * По умолчанию данные о тестовых заказах не приходят. Чтобы их получить, передайте значение `true` в параметре `fake`.
   *
   * Вы также можете настроить API-уведомления
   *
   * Маркет отправит вам [запрос](../../push-notifications/reference/sendNotification.md), когда появится новый заказ или изменится его статус. А полную информацию можно получить с помощью метода [POST v1/businesses/{businessId}/orders](../../reference/orders/getBusinessOrders.md).
   *
   * [{#T}](../../push-notifications/index.md)
   *
   * Доступна фильтрация по параметрам:
   *
   * * дата оформления заказа;
   *
   * * дата и время обновления заказа;
   *
   * * дата отгрузки;
   *
   * * статусы заказов (`statuses`);
   *
   * * этапы обработки или причины отмены (`substatuses`);
   *
   * * идентификаторы заказов;
   *
   * * тип заказа (настоящий или тестовый).
   *
   * Не возвращается информация о заказах, которые доставили или отменили больше 30 дней назад. Как ее получить:
   *
   * * [POST v1/businesses/{businessId}/orders](../../reference/orders/getBusinessOrders.md);
   * * [POST v2/campaigns/{campaignId}/stats/orders](../../reference/orders-stats/getOrdersStats.md).
   *
   * Максимальный диапазон дат за один запрос — 30 дней (передается в параметрах `fromDate` и `toDate`). Если их не передать, возвращается информация за последние 30 дней.
   *
   * Результаты возвращаются постранично. Для навигации используйте параметры `pageToken` и `limit`.
   *
   * Получить более подробную информацию о покупателе и его номере телефона можно с помощью запроса [GET v2/campaigns/{campaignId}/orders/{orderId}/buyer](../../reference/order-delivery/getOrderBuyerInfo.md).
   *
   * GET /v2/campaigns/{campaignId}/orders
   *
   * Разделы YM: orders, fbs, dbs, fby, express, laas.
   *
   * @see https://yandex.ru/dev/market/partner-api/doc/ru/
   *
   * @deprecated Метод помечен устаревшим в OpenAPI YM (деградация с 2027-01-18, отключение 2027-04-12. Замена: `ym.orders.getBusinessOrders(...)` для `POST /v1/businesses/{businessId}/orders`.
   */
  readonly getOrders: (
    input: GetOrdersInput,
    options?: YmRequestOptions,
  ) => Promise<GetOrdersResponse>;
  /**
   * Информация о заказах в кабинете
   *
   * Возвращает информацию о заказах в кабинете. Запрос можно использовать для отслеживания заказов и их статусов.
   *
   * Вы также можете настроить API-уведомления
   *
   * Маркет отправит вам [запрос](../../push-notifications/reference/sendNotification.md), когда появится новый заказ или изменится его статус. А полную информацию можно получить с помощью этого метода.
   *
   * [{#T}](../../push-notifications/index.md)
   *
   * Доступна фильтрация по параметрам:
   *
   * * дата оформления заказа;
   *
   * * дата и время обновления заказа;
   *
   * * дата отгрузки;
   *
   * * статусы заказов (`statuses`);
   *
   * * этапы обработки или причины отмены (`substatuses`);
   *
   * * идентификаторы кампаний;
   *
   * * идентификаторы заказов;
   *
   * * внешние идентификаторы заказов;
   *
   * * тип заказа (настоящий или тестовый);
   *
   * * модели размещения;
   *
   * * наличие запросов от покупателей на отмену заказа.
   *
   * Максимальный диапазон дат за один запрос — 30 дней (передается в параметрах `fromDate` и `toDate`). Если их не передать, возвращается информация за последние 30 дней.
   *
   * Результаты возвращаются постранично. Для навигации используйте параметры `pageToken` и `limit`.
   *
   * Получить более подробную информацию о покупателе и его номере телефона можно с помощью запроса [GET v2/campaigns/{campaignId}/orders/{orderId}/buyer](../../reference/order-delivery/getOrderBuyerInfo.md).
   *
   * POST /v1/businesses/{businessId}/orders
   *
   * Разделы YM: orders, fbs, dbs, fby, express, laas.
   *
   * @see https://yandex.ru/dev/market/partner-api/doc/ru/
   */
  readonly getBusinessOrders: (
    input: GetBusinessOrdersInput,
    options?: YmRequestOptions,
  ) => Promise<GetBusinessOrdersResponse>;
  /**
   * Передача кодов маркировки единиц товара
   *
   * Если вы работаете по модели FBS
   *
   * Используйте метод [PUT v2/campaigns/{campaignId}/orders/{orderId}/boxes](../../reference/orders/setOrderBoxLayout.md).
   *
   * Передает Маркету коды маркировки для единиц товара в указанном заказе. Подробнее о работе с маркируемыми товарами читайте в [Справке продавца на Маркете](https://yandex.ru/support/marketplace/orders/cz.html).
   *
   * Маркировка товаров в системе [«Честный ЗНАК»](https://честныйзнак.рф/) **необязательна** для заказов от физических лиц, но **обязательна** для заказов от бизнеса.
   *
   * Для модели DBS коды маркировки в системе [«Честный ЗНАК»](https://честныйзнак.рф/) не проверяются в ГИС МТ — проверка выполняется только для моделей FBS и Экспресс.
   *
   * Принимаются коды следующих типов:
   *
   * * Коды в системе [«Честный ЗНАК»](https://честныйзнак.рф/) или [«ASL BELGISI»](https://aslbelgisi.uz) (для продавцов :no-translate[Market Yandex Go]).
   * * УИН для ювелирных изделий.
   * * РНПТ и ГТД для импортных прослеживаемых товаров.
   *
   * Для каждой позиции в заказе, требующей маркировки, нужно передать список кодов — по одному для каждой единицы товара. Например, если в заказе две пары тапочек и одна пара туфель, получится список из двух кодов для первой позиции и список из одного кода для второй.
   *
   * PUT /v2/campaigns/{campaignId}/orders/{orderId}/identifiers
   *
   * Разделы YM: orders, dbs.
   *
   * @see https://yandex.ru/dev/market/partner-api/doc/ru/
   */
  readonly provideOrderItemIdentifiers: (
    input: ProvideOrderItemIdentifiersInput,
    options?: YmRequestOptions,
  ) => Promise<ProvideOrderItemIdentifiersResponse>;
  /**
   * Удаление товаров из заказа или уменьшение их числа
   *
   * Если вы работаете по модели FBS
   *
   * Используйте метод [PUT v2/campaigns/{campaignId}/orders/{orderId}/boxes](../../reference/orders/setOrderBoxLayout.md).
   *
   * Удаляет один или несколько товаров из заказа, если магазин не может поставить их все.
   *
   * Заказ должен находится в статусе `"status": "PROCESSING"` этапа обработки `"substatus": "STARTED"`. Изменить состав нельзя после передачи статуса `"substatus": "READY_TO_SHIP"`.
   *
   * Уменьшить количество одинаковых товаров
   *
   * Передайте обновленное значение в параметре `count`.
   *
   * Удалить товар из заказа
   *
   * Передайте значение `0` в параметре `count` или не передавайте `item`.
   *
   * Нельзя удалить или уменьшить количество товара, если он:
   *
   * * добавлен по акции;
   * * составляет 99% стоимости заказа;
   * * единственный товар в заказе.
   *
   * В таком случае отмените заказ — в методе [PUT v2/campaigns/{campaignId}/orders/{orderId}/status](../../reference/orders/updateOrderStatus.md) передайте статус заказа `CANCELLED` с причиной отмены `SHOP_FAILED`.
   *
   * ### Как вернутся деньги {#money}
   *
   * Если покупатель оплатил товар при оформлении, Маркет вернет ему деньги за удаленные из заказа товары в течение двух дней:
   *
   * * при оплате банковской картой — с момента, когда магазин переведет заказ в статус `SHIPPED`;
   *
   * * при оплате через :no-translate[Apple Pay] или :no-translate[Google Pay] — с момента, когда магазин удалит товар из заказа.
   *
   * PUT /v2/campaigns/{campaignId}/orders/{orderId}/items
   *
   * Разделы YM: orders, dbs.
   *
   * @see https://yandex.ru/dev/market/partner-api/doc/ru/
   */
  readonly updateOrderItems: (
    input: UpdateOrderItemsInput,
    options?: YmRequestOptions,
  ) => Promise<UpdateOrderItemsResponse>;
  /**
   * Изменение статуса одного заказа
   *
   * Изменяет статус заказа. Возможные изменения статусов:
   *
   * * Если магазин подтвердил и подготовил заказ к отправке, то заказ из статуса `"status": "PROCESSING"` и этапа обработки `"substatus": "STARTED"` нужно перевести в статус `"status": "PROCESSING"` и этап обработки `"substatus": "READY_TO_SHIP"`.
   * * Если магазин подтвердил заказ, но не может его выполнить (например, товар числится в базе, но отсутствует на складе или нет нужного цвета), то заказ из статуса `"status": "PROCESSING"` и этапа обработки `"substatus": "STARTED"` нужно перевести в статус `"status": "CANCELLED"` с причиной отмены заказа `"substatus": "SHOP_FAILED"`.
   * * Если магазин подготовил заказ к отгрузке, но не может его выполнить (например, последний товар был поврежден или оказался с браком), то заказ из статуса `"status": "PROCESSING"` и этапа обработки `"substatus": "READY_TO_SHIP"` нужно перевести в статус `"status": "CANCELLED"` с причиной отмены заказа `"substatus": "SHOP_FAILED"`.
   *
   * Полная информация о статусной модели DBS-заказов: [Как изменяются статусы заказов](../../concepts/dbs-order-status-model.md).
   *
   * **Как подтвердить LaaS-заказ**
   *
   * Для подтверждения черновика заказа передайте статус `"status": "PROCESSING"` с подстатусом `"substatus": "STARTED"`.
   *
   * Подтверждение заказа, созданного с параметром `draft` равным `false`, не требуется.
   *
   * **Как отменить LaaS-заказ**
   *
   * Передайте статус `"status": "CANCELLED"` с причиной отмены заказа `"substatus": "SHOP_FAILED"`.
   *
   * При успешном выполнении запроса отмена произойдет через некоторое время. [Как проверить статус операции](../../reference/operations/getOperations.md)
   *
   * PUT /v2/campaigns/{campaignId}/orders/{orderId}/status
   *
   * Разделы YM: orders, fbs, dbs, laas, express.
   *
   * @see https://yandex.ru/dev/market/partner-api/doc/ru/
   */
  readonly updateOrderStatus: (
    input: UpdateOrderStatusInput,
    options?: YmRequestOptions,
  ) => Promise<UpdateOrderStatusResponse>;
  /**
   * Изменение статусов нескольких заказов
   *
   * Изменяет статусы нескольких заказов.
   *
   * Возможные изменения статусов:
   *
   * * Если магазин подтвердил и подготовил заказ к отправке, то заказ из статуса `"status": "PROCESSING"`и этапа обработки `"substatus": "STARTED"` нужно перевести в статус `"status": "PROCESSING"` и этап обработки `"substatus": "READY_TO_SHIP"`.
   * * Если магазин подтвердил заказ, но не может его выполнить (например, товар числится в базе, но отсутствует на складе или нет нужного цвета), то заказ из статуса `"status": "PROCESSING"` и этапа обработки `"substatus": "STARTED"` нужно перевести в статус `"status": "CANCELLED"` с причиной отмены заказа `"substatus": "SHOP_FAILED"`.
   * * Если магазин подготовил заказ к отгрузке, но не может его выполнить (например, последний товар был поврежден или оказался с браком), то заказ из статуса `"status": "PROCESSING"` и этапа обработки `"substatus": "READY_TO_SHIP"` нужно перевести в статус `"status": "CANCELLED"` с причиной отмены заказа `"substatus": "SHOP_FAILED"`.
   *
   * Полная информация о статусной модели DBS-заказов: [Как изменяются статусы заказов](../../concepts/dbs-order-status-model.md).
   *
   * **Как подтвердить LaaS-заказ**
   *
   * Для подтверждения черновика заказа передайте статус `"status": "PROCESSING"` с подстатусом `"substatus": "STARTED"`.
   *
   * Подтверждение заказа, созданного с параметром `draft` равным `false`, не требуется.
   *
   * **Как отменить LaaS-заказ**
   *
   * Передайте статус `"status": "CANCELLED"` с причиной отмены заказа `"substatus": "SHOP_FAILED"`.
   *
   * При успешном выполнении запроса отмена произойдет через некоторое время. [Как проверить статус операции](../../reference/operations/getOperations.md)
   *
   * POST /v2/campaigns/{campaignId}/orders/status-update
   *
   * Разделы YM: orders, fbs, dbs, laas, express.
   *
   * @see https://yandex.ru/dev/market/partner-api/doc/ru/
   */
  readonly updateOrderStatuses: (
    input: UpdateOrderStatusesInput,
    options?: YmRequestOptions,
  ) => Promise<UpdateOrderStatusesResponse>;
  /**
   * Передача количества грузовых мест в заказе
   *
   * Отгружаемый Маркету заказ может не влезть в одну коробку или упаковку — в этом случае получается, что он занимает несколько грузовых мест.
   *
   * Количество грузовых мест нужно обязательно передавать Маркету, если оно не равно 1. Это делается перед переводом его в статус **Готов к отгрузке**. Подробно о том, что в какой момент нужно передавать, рассказано в [пошаговой инструкции](../../step-by-step/fbs.md).
   *
   * Метод устроен немного нестандартно: количество задается длиной массива пустых объектов.
   *
   * Раньше метод требовал передачи большего количества данных. Запросы, оформленные по старому образцу, работают, но лучше делать по-новому.
   *
   * Как было раньше
   *
   * Структура тела PUT-запроса:
   *
   * ```text translate=no
   * {
   * "boxes":
   * [
   * {
   * "fulfilmentId": "{string}",
   * "weight": {int64},
   * "width": {int64},
   * "height": {int64},
   * "depth": {int64},
   * "items":
   * [
   * {
   * "id": {int64},
   * "count": {int32}
   * },
   * ...
   * ]
   * },
   * ...
   * ]
   * }
   * ```
   * | **Параметр** | **Тип** | **Значение** |
   * | ----------- | ----------- | ----------- |
   * | `boxes` | | Список грузовых мест. |
   *
   * **Параметры, вложенные в `boxes`**
   * | **Параметр** | **Тип** | **Значение** |
   * | ----------- | ----------- | ----------- |
   * | `fulfilmentId` | :no-translate[String] | Идентификатор грузового места в системе магазина. Сформируйте идентификатор по шаблону: `номер заказа на Маркете-номер грузового места`. Например, `7206821‑1, 7206821‑2` и т. д. |
   * | `weight` | :no-translate[Int64] | Масса брутто грузового места (суммарная масса упаковки и содержимого) в граммах. |
   * | `width` | :no-translate[Int64] | Ширина грузового места в сантиметрах. |
   * | `height` | :no-translate[Int64] | Высота грузового места в сантиметрах. |
   * | `depth` | :no-translate[Int64] | Глубина грузового места в сантиметрах. |
   * | `items` | :no-translate[Int64] | Список товаров в грузовом месте. |
   *
   * **Параметры, вложенные в `items`**
   * | **Параметр** | **Тип** | **Значение** |
   * | ----------- | ----------- | ----------- |
   * | `id` | :no-translate[Int64] | Идентификатор товара в рамках заказа. |
   * | `count` | :no-translate[Int32] | Количество единиц товара в грузовом месте. |
   *
   * PUT /v2/campaigns/{campaignId}/orders/{orderId}/delivery/shipments/{shipmentId}/boxes
   *
   * Разделы YM: orders, dbs.
   *
   * @see https://yandex.ru/dev/market/partner-api/doc/ru/
   *
   * @deprecated Метод помечен устаревшим в OpenAPI YM (деградация с 2027-01-18, отключение 2027-04-05. Замена: `ym.orders.setOrderBoxLayout(...)` для `PUT /v2/campaigns/{campaignId}/orders/{orderId}/boxes`.
   */
  readonly setOrderShipmentBoxes: (
    input: SetOrderShipmentBoxesInput,
    options?: YmRequestOptions,
  ) => Promise<SetOrderShipmentBoxesResponse>;
  /**
   * Отмена заказа покупателем
   *
   * Подтверждает или отклоняет заявку покупателя на отмену заказа, который передан службе доставки.
   *
   * Покупатель может отменить заказ в течение его обработки или доставки. Если заказ еще обрабатывается (статус `PROCESSING`), вам не нужно подтверждать отмену заказа — он будет отменен автоматически.
   *
   * Если заказ уже передан службе доставки (статус `DELIVERY` или `PICKUP`) и пользователь отменил его, вы можете предупредить службу об отмене в течение 48 часов.
   *
   * * Служба доставки узнала об отмене до передачи заказа покупателю — подтвердите отмену с помощью запроса [PUT v2/campaigns/{campaignId}/orders/{orderId}/cancellation/accept](../../reference/orders/acceptOrderCancellation.md).
   * * Заказ уже доставлен — отклоните отмену с помощью этого же запроса. Тогда у покупателя останется заказ, и деньги за него возвращаться не будут.
   *
   * **Как узнать об отмененных заказах:**
   *
   * * Передайте параметр `onlyWaitingForCancellationApprove` в запросе [POST v1/businesses/{businessId}/orders](../../reference/orders/getBusinessOrders.md).
   * * В кабинете или через почту — на нее придет уведомление об отмене.
   * * Подключите API-уведомления. Маркет отправит вам запрос [POST notification](../../push-notifications/reference/sendNotification.md), когда появится новая заявка на отмену заказа. [{#T}](../../push-notifications/index.md)
   *
   * Если в течение 48 часов вы не подтвердите или отклоните отмену, заказ будет отменен автоматически.
   *
   * PUT /v2/campaigns/{campaignId}/orders/{orderId}/cancellation/accept
   *
   * Разделы YM: orders, dbs.
   *
   * @see https://yandex.ru/dev/market/partner-api/doc/ru/
   */
  readonly acceptOrderCancellation: (
    input: AcceptOrderCancellationInput,
    options?: YmRequestOptions,
  ) => Promise<AcceptOrderCancellationResponse>;
  /**
   * Передача ключей цифровых товаров
   *
   * Передает ключи цифровых товаров, которые покупатель заказал и оплатил. После выполнения запроса Маркет отправит ему письмо с ключами и инструкциями по активации. Если письмо будет доставлено, Маркет переведет заказ в финальный статус `DELIVERED`.
   *
   * После передачи кода покупателю статус заказа изменится не сразу
   *
   * Подключите API-уведомления — Маркет отправит вам запрос [POST notification](../../push-notifications/reference/sendNotification.md), когда заказ перейдет в статус `DELIVERED`.
   *
   * [{#T}](../../push-notifications/index.md)
   *
   * Ключ нужно передать в течение 30 минут после перехода заказа в статус `PROCESSING`.
   *
   * Если в один заказ входят несколько ключей, передавайте их все в одном запросе.
   *
   * Каждый товар с уникальным `id` передавайте в виде отдельного элемента в массиве `items`, а ключи товара — в массиве `codes`.
   *
   * Пример
   *
   * ```json translate=no
   * {
   * "items": [
   * {
   * "id": 1,
   * "codes": [
   * "code1", "code2", "code3"
   * ],
   * "slip": "slip",
   * "activate_till": "2025-02-18"
   * },
   * {
   * "id": 2,
   * "codes": [
   * "code4", "code5", "code6"
   * ],
   * "slip": "slip",
   * "activate_till": "2025-02-18"
   * }
   * ]
   * }
   * ```
   *
   * POST /v2/campaigns/{campaignId}/orders/{orderId}/deliverDigitalGoods
   *
   * Разделы YM: orders, dbs.
   *
   * @see https://yandex.ru/dev/market/partner-api/doc/ru/
   */
  readonly provideOrderDigitalCodes: (
    input: ProvideOrderDigitalCodesInput,
    options?: YmRequestOptions,
  ) => Promise<ProvideOrderDigitalCodesResponse>;
  /**
   * Подготовка заказа
   *
   * Подходит и для DBS
   *
   * Запрос предназначен для работы с FBS-заказами, но вы можете использовать его для обработки DBS-заказов, если это удобно.
   *
   * Позволяет выполнить три операции:
   *
   * * передать Маркету информацию о распределении товаров по коробкам;
   * * передать Маркету коды маркировки для товаров;
   * * удалить товар из заказа, если его не оказалось на складе.
   *
   * Если нужно что-то поправить в переданных данных, просто повторите запрос — это можно делать сколько угодно раз до перевода заказа в статус **Готов к отгрузке**. ⚠️ Если вы меняете раскладку уже после печати и расклейки ярлыков, не забудьте перепечатать их и наклеить заново.
   *
   * Как передать информацию о распределении товаров
   *
   * В этом запросе вам нужно передать Маркету список коробок и указать, какие именно товары лежат в каждой из них. Коробки могут быть двух типов:
   *
   * * **Содержащие товары целиком.** Такая коробка может содержать сколько угодно единиц любых товаров.
   *
   * * **Содержащие часть товара.** Такие коробки содержат по одной части одного товара. Например, одна содержит внешний блок кондиционера, а другая — внутренний блок.
   *
   * ⚠️ Одна коробка не может содержать и товары целиком, и части товаров.
   *
   * Как передавать коды маркировки и получать статус их проверки
   *
   * Маркировка товаров в системе [«Честный ЗНАК»](https://честныйзнак.рф/) необязательна для заказов от физических лиц
   *
   * Для заказов от бизнеса все еще нужно передавать коды маркировки.
   *
   * Если в заказе есть товары, подлежащие маркировке, в запросе нужно передать соответствующие уникальные коды. [Что такое маркировка](https://yandex.ru/support/marketplace/orders/cz.html)
   *
   * Принимаются коды следующих типов:
   *
   * * Коды в системе [«Честный ЗНАК»](https://честныйзнак.рф/) или [«ASL BELGISI»](https://aslbelgisi.uz) (для продавцов :no-translate[Market Yandex Go]).
   * * УИН для ювелирных изделий.
   * * РНПТ и ГТД для импортных прослеживаемых товаров.
   *
   * Для каждой позиции в заказе, требующей маркировки, нужно передать список кодов — по одному для каждой единицы товара. Например, если в заказе две пары тапочек и одна пара туфель, получится список из двух кодов для первой позиции и список из одного кода для второй.
   *
   * Если товар едет в нескольких коробках, код маркировки нужно передать для каждой из них.
   *
   * Если вы работаете по модели FBS, EXPRESS
   *
   * Для заказов, в которых есть ювелирные изделия или товары с маркировкой в системе :no-translate[«Честный ЗНАК»], перевод в статус `READY_TO_SHIP` становится доступен, только когда:
   *
   * 1. Вы передадите Маркету :no-translate[УИНы] по каждому ювелирному изделию в заказе и коды в системе :no-translate[«Честный ЗНАК»] по всем товарам в заказе, для которых обязательна эта маркировка.
   * 2. Все коды маркировки успешно пройдут проверку. [Как получить статусы проверки](../../reference/orders/getOrderIdentifiersStatus.md)
   *
   * Как удалить товар из заказа
   *
   * Чтобы удалить товар из заказа:
   *
   * 1. Добавьте в запрос `allowRemove: true`.
   * 2. Передайте распределение по коробкам без товара, который нужно удалить.
   *
   * Удаление нельзя отменить
   *
   * Эта операция необратима: покупатель сразу получит уведомление, а состав заказа изменится.
   *
   * Чтобы удалить позицию целиком, не передавайте соответствующий `OrderBoxLayoutItemDTO`. Чтобы уменьшить количество товара, передайте уменьшенное значение в поле `fullCount`.
   *
   * Нельзя удалить или уменьшить количество товара, если он:
   *
   * * добавлен по акции;
   * * составляет 99% стоимости заказа;
   * * единственный товар в заказе.
   *
   * Если вы не можете отгрузить такой товар, отмените заказ. Для этого отправьте запрос методом [PUT v2/campaigns/{campaignId}/orders/{orderId}/status](../../reference/orders/updateOrderStatus.md) и передайте статус заказа `CANCELLED` с причиной отмены `SHOP_FAILED`.
   *
   * Увеличить заказ нельзя
   *
   * С помощью запроса нельзя увеличить количество одинаковых товаров, добавить новые товары в заказ или заменить один товар другим.
   *
   * ## Примеры
   *
   * Товар умещается в коробку
   *
   * Вот как будет выглядеть запрос, если в одной коробке едут:
   *
   * * три единицы одного товара, требующего маркировки;
   * * одна единица другого товара, не требущего маркировки.
   *
   * ```json translate=no
   * {
   * "boxes": [
   * {
   * "items": [
   * {
   * "id": 123456,
   * "fullCount": 3,
   * "instances": [
   * {
   * "cis": "01030410947874432155Qbag!\u001d93Zjqw"
   * },
   * {
   * "cis": "010304109478gftJ14545762!\u001dhGt264"
   * },
   * {
   * "cis": "010304109478fRs28323ks23!\u001dhet201"
   * }
   * ]
   * },
   * {
   * "id": 654321,
   * "fullCount": 1
   * }
   * ]
   * }
   * ]
   * }
   * ```
   *
   * Товар едет в разных коробках
   *
   * Вот как будет выглядеть запрос, если товар едет в двух коробках:
   *
   * ```json translate=no
   * {
   * "boxes": [
   * {
   * "items": [
   * {
   * "id": 123456,
   * "partialCount": {
   * "current": 1,
   * "total": 2
   * },
   * "instances": [
   * {
   * "cis": "01030410947874432155Qbag!\u001d93Zjqw"
   * }
   * ]
   * }
   * ]
   * },
   * {
   * "items": [
   * {
   * "id": 123456,
   * "partialCount": {
   * "current": 2,
   * "total": 2
   * },
   * "instances": [
   * {
   * "cis": "01030410947874432155Qbag!\u001d93Zjqw"
   * }
   * ]
   * }
   * ]
   * }
   * ]
   * }
   * ```
   *
   * Одинаковые товары, где каждый едет в нескольких коробках
   *
   * Вот как будет выглядеть запрос, если каждый из двух одинаковых товаров едет в двух коробках:
   *
   * ```json translate=no
   * {
   * "boxes": [
   * {
   * "items": [
   * {
   * "id": 123456,
   * "partialCount": {
   * "current": 1,
   * "total": 2
   * },
   * "instances": [
   * {
   * "cis": "01030410947874432155Qbag!\u001d93Zjqw"
   * }
   * ]
   * }
   * ]
   * },
   * {
   * "items": [
   * {
   * "id": 123456,
   * "partialCount": {
   * "current": 2,
   * "total": 2
   * },
   * "instances": [
   * {
   * "cis": "01030410947874432155Qbag!\u001d93Zjqw"
   * }
   * ]
   * }
   * ]
   * },
   * {
   * "items": [
   * {
   * "id": 123456,
   * "partialCount": {
   * "current": 1,
   * "total": 2
   * },
   * "instances": [
   * {
   * "cis": "01030410947874432155Qbag!\u001d93Zjqw"
   * }
   * ]
   * }
   * ]
   * },
   * {
   * "items": [
   * {
   * "id": 123456,
   * "partialCount": {
   * "current": 2,
   * "total": 2
   * },
   * "instances": [
   * {
   * "cis": "01030410947874432155Qbag!\u001d93Zjqw"
   * }
   * ]
   * }
   * ]
   * }
   * ]
   * }
   * ```
   *
   * Разные товары в разных коробках
   *
   * Вот как будет выглядеть запрос, если два разных товара разложены по разным коробкам:
   *
   * ```json translate=no
   * {
   * "boxes": [
   * {
   * "items": [
   * {
   * "id": 123456,
   * "fullCount": 1
   * }
   * ]
   * },
   * {
   * "items": [
   * {
   * "id": 654321,
   * "fullCount": 1
   * }
   * ]
   * }
   * ]
   * }
   * ```
   *
   * PUT /v2/campaigns/{campaignId}/orders/{orderId}/boxes
   *
   * Разделы YM: orders, fbs, express, dbs.
   *
   * @see https://yandex.ru/dev/market/partner-api/doc/ru/
   */
  readonly setOrderBoxLayout: (
    input: SetOrderBoxLayoutInput,
    options?: YmRequestOptions,
  ) => Promise<SetOrderBoxLayoutResponse>;
  /**
   * Передача внешнего идентификатора заказа
   *
   * Передает Маркету идентификатор заказа в системе магазина.
   *
   * Его нельзя передавать:
   *
   * * больше одного раза;
   * * после перехода заказа в статус `PROCESSING` с подстатусом `READY_TO_SHIP`.
   *
   * Этот идентификатор отражается в документах отгрузки: акте приема-передачи, листе сборки и ярлыках.
   *
   * В штрихкодах могут быть только символы ASCII
   *
   * Если во внешнем идентификаторе вы используете другие символы, на ярлыке в штрихкоде будет отображаться идентификатор заказа Маркета.
   *
   * POST /v2/campaigns/{campaignId}/orders/{orderId}/external-id
   *
   * Разделы YM: orders, fbs, dbs, express.
   *
   * @see https://yandex.ru/dev/market/partner-api/doc/ru/
   */
  readonly updateExternalOrderId: (
    input: UpdateExternalOrderIdInput,
    options?: YmRequestOptions,
  ) => Promise<UpdateExternalOrderIdResponse>;
  /**
   * Статусы проверки кодов маркировки
   *
   * Возвращает статусы проверки кодов маркировки в заказе.
   *
   * Заказ, в котором есть ювелирные изделия или товары с обязательной маркировкой в системе [«Честный ЗНАК»](https://честныйзнак.рф/), можно перевести в статус `READY_TO_SHIP`, только когда:
   *
   * 1. В методе [PUT v2/campaigns/{campaignId}/orders/{orderId}/boxes](../../reference/orders/setOrderBoxLayout.md) вы передадите Маркету:
   *
   * * [УИНы](:no-translate[*uin]) по каждому ювелирному изделию в заказе;
   *
   * * коды маркировки в системе :no-translate[«Честный ЗНАК»] по всем товарам в заказе, для которых она обязательна.
   * 2. Все коды маркировки успешно пройдут проверку.
   *
   * POST /v2/campaigns/{campaignId}/orders/{orderId}/identifiers/status
   *
   * Разделы YM: orders, fbs, express, laas.
   *
   * @see https://yandex.ru/dev/market/partner-api/doc/ru/
   */
  readonly getOrderIdentifiersStatus: (
    input: GetOrderIdentifiersStatusInput,
    options?: YmRequestOptions,
  ) => Promise<GetOrderIdentifiersStatusResponse>;
  /**
   * Создание заказа
   *
   * Создает новый заказ, если на складе Маркета есть нужное количество товаров.
   *
   * Укажите `courierDelivery` для курьерской доставки или `pickupDelivery` для доставки в пункт выдачи. Не передавайте оба параметра одновременно.
   *
   * Значение параметра `draft`:
   *
   * * `true` — Маркет создаст заказ в статусе `RESERVED` и будет ждать подтверждения от магазина. Когда будете готовы, передайте статус `PROCESSING` с подстатусом `STARTED` в методе [PUT v2/campaigns/{campaignId}/orders/{orderId}/status](../../reference/orders/updateOrderStatus.md). Если не сделать это в течение часа после создания заказа, Маркет отменит его.
   * * `false` — Маркет создаст заказ в статусе `PROCESSING` с подстатусом `STARTED`, подтверждение не требуется.
   *
   * Значение параметра `fake`:
   *
   * * `true` — тестовый заказ. Позволяет проверить работу магазина и его API на [тестовых заказах](../../concepts/sandbox.md). Такой заказ не будет отгружен и не влияет на остатки.
   * * `false` — настоящий заказ.
   *
   * Перед вызовом метода
   *
   * Получите доступные варианты доставки — [POST v2/campaigns/{campaignId}/delivery-options](../../reference/delivery-options/getDeliveryOptions.md).
   *
   * POST /v1/campaigns/{campaignId}/orders/create
   *
   * Разделы YM: orders, laas.
   *
   * @see https://yandex.ru/dev/market/partner-api/doc/ru/
   */
  readonly createOrder: (
    input: CreateOrderInput,
    options?: YmRequestOptions,
  ) => Promise<CreateOrderResponse>;
  /**
   * Изменение заказа
   *
   * Изменяет в заказе:
   *
   * * данные получателя;
   * * интервал дат курьерской доставки.
   *
   * Передавайте только ту информацию, которую хотите изменить. При необходимости вы можете отредактировать и данные получателя, и интервал доставки одновременно.
   *
   * Заказ можно изменить в любом статусе до вручения покупателю или отмены (`DELIVERED` или `CANCELLED`).
   *
   * Данные заказа обновляются не мгновенно
   *
   * Изменения применяются в течение нескольких минут и только в случае успешного завершения операции. [Как проверить статус операции](../../reference/operations/getOperations.md)
   *
   * POST /v1/campaigns/{campaignId}/orders/update
   *
   * Разделы YM: orders, laas.
   *
   * @see https://yandex.ru/dev/market/partner-api/doc/ru/
   */
  readonly updateOrder: (
    input: UpdateOrderInput,
    options?: YmRequestOptions,
  ) => Promise<UpdateOrderResponse>;
  /**
   * Получение временных интервалов для изменения заказа
   *
   * Возвращает список доступных интервалов для изменения даты и времени курьерской доставки.
   *
   * POST /v1/campaigns/{campaignId}/orders/update-options
   *
   * Разделы YM: orders, laas.
   *
   * @see https://yandex.ru/dev/market/partner-api/doc/ru/
   */
  readonly getOrderUpdateOptions: (
    input: GetOrderUpdateOptionsInput,
    options?: YmRequestOptions,
  ) => Promise<GetOrderUpdateOptionsResponse>;
}

export interface YmOrdersStatsApi {
  /**
   * Детальная информация по заказам
   *
   * Возвращает информацию по заказам на Маркете, в которых есть ваши товары.
   *
   * С помощью нее вы можете собрать статистику по вашим заказам и узнать, например, какие из товаров чаще всего возвращаются покупателями, какие, наоборот, пользуются большим спросом и т. п.
   *
   * Информация по созданным или обновленным заказам может появиться с задержкой до 40 минут
   *
   * Чтобы получить данные без задержки, используйте метод [POST v1/businesses/{businessId}/orders](../../reference/orders/getBusinessOrders.md).
   *
   * В одном запросе можно получить информацию не более чем по 200 заказам.
   *
   * POST /v2/campaigns/{campaignId}/stats/orders
   *
   * Разделы YM: orders-stats, fby, fbs, dbs, express.
   *
   * @see https://yandex.ru/dev/market/partner-api/doc/ru/
   */
  readonly getOrdersStats: (
    input: GetOrdersStatsInput,
    options?: YmRequestOptions,
  ) => Promise<GetOrdersStatsResponse>;
}

export interface YmOutletLicensesApi {
  /**
   * Информация о лицензиях для точек продаж
   *
   * Возвращает информацию о лицензиях для точек продаж.
   *
   * GET /v2/campaigns/{campaignId}/outlets/licenses
   *
   * Разделы YM: outlet-licenses, dbs.
   *
   * @see https://yandex.ru/dev/market/partner-api/doc/ru/
   */
  readonly getOutletLicenses: (
    input: GetOutletLicensesInput,
    options?: YmRequestOptions,
  ) => Promise<GetOutletLicensesResponse>;
  /**
   * Удаление лицензий для точек продаж
   *
   * Удаляет информацию о лицензиях для точек продаж.
   *
   * DELETE /v2/campaigns/{campaignId}/outlets/licenses
   *
   * Разделы YM: outlet-licenses, dbs.
   *
   * @see https://yandex.ru/dev/market/partner-api/doc/ru/
   */
  readonly deleteOutletLicenses: (
    input: DeleteOutletLicensesInput,
    options?: YmRequestOptions,
  ) => Promise<DeleteOutletLicensesResponse>;
  /**
   * Создание и изменение лицензий для точек продаж
   *
   * Передает информацию о новых и существующих лицензиях для точек продаж. Поддерживаются только лицензии на розничную продажу алкоголя.
   *
   * Чтобы размещать алкогольную продукцию на Маркете, надо также прислать гарантийное письмо (если вы еще не делали этого раньше) и правильно оформить предложения в прайс-листе. Далее информация о лицензиях проходит проверку.
   *
   * POST /v2/campaigns/{campaignId}/outlets/licenses
   *
   * Разделы YM: outlet-licenses, dbs.
   *
   * @see https://yandex.ru/dev/market/partner-api/doc/ru/
   */
  readonly updateOutletLicenses: (
    input: UpdateOutletLicensesInput,
    options?: YmRequestOptions,
  ) => Promise<UpdateOutletLicensesResponse>;
}

export interface YmOutletsApi {
  /**
   * Создание точки продаж
   *
   * Создает точку продаж магазина на Маркете.
   *
   * POST /v2/campaigns/{campaignId}/outlets
   *
   * Разделы YM: outlets, dbs.
   *
   * @see https://yandex.ru/dev/market/partner-api/doc/ru/
   */
  readonly createOutlet: (
    input: CreateOutletInput,
    options?: YmRequestOptions,
  ) => Promise<CreateOutletResponse>;
  /**
   * Информация о нескольких точках продаж
   *
   * Возвращает список точек продаж магазина.
   *
   * GET /v2/campaigns/{campaignId}/outlets
   *
   * Разделы YM: outlets, dbs.
   *
   * @see https://yandex.ru/dev/market/partner-api/doc/ru/
   */
  readonly getOutlets: (
    input: GetOutletsInput,
    options?: YmRequestOptions,
  ) => Promise<GetOutletsResponse>;
  /**
   * Изменение информации о точке продаж
   *
   * Изменяет информацию о точке продаж магазина на Маркете.
   *
   * PUT /v2/campaigns/{campaignId}/outlets/{outletId}
   *
   * Разделы YM: outlets, dbs.
   *
   * @see https://yandex.ru/dev/market/partner-api/doc/ru/
   */
  readonly updateOutlet: (
    input: UpdateOutletInput,
    options?: YmRequestOptions,
  ) => Promise<UpdateOutletResponse>;
  /**
   * Информация об одной точке продаж
   *
   * Возвращает информацию о точках продаж магазина.
   *
   * GET /v2/campaigns/{campaignId}/outlets/{outletId}
   *
   * Разделы YM: outlets, dbs.
   *
   * @see https://yandex.ru/dev/market/partner-api/doc/ru/
   */
  readonly getOutlet: (
    input: GetOutletInput,
    options?: YmRequestOptions,
  ) => Promise<GetOutletResponse>;
  /**
   * Удаление точки продаж
   *
   * Удаляет точку продаж магазина на Маркете.
   *
   * DELETE /v2/campaigns/{campaignId}/outlets/{outletId}
   *
   * Разделы YM: outlets, dbs.
   *
   * @see https://yandex.ru/dev/market/partner-api/doc/ru/
   */
  readonly deleteOutlet: (
    input: DeleteOutletInput,
    options?: YmRequestOptions,
  ) => Promise<DeleteOutletResponse>;
}

export interface YmPriceQuarantineApi {
  /**
   * Список товаров, находящихся в карантине по цене в кабинете
   *
   * Возвращает список товаров, которые находятся в карантине по цене, установленной для всех магазинов кабинета.
   *
   * Проверьте цену каждого из товаров, который попал в карантин. Если ошибки нет и цена правильная, подтвердите ее с помощью запроса [POST v2/businesses/{businessId}/price-quarantine/confirm](../../reference/price-quarantine/confirmBusinessPrices.md). Если цена в самом деле ошибочная, установите верную с помощью запроса [POST v2/businesses/{businessId}/offer-prices/updates](../../reference/prices/updateBusinessPrices.md).
   *
   * Что такое карантин?
   *
   * Товар попадает в карантин, если его цена меняется слишком резко или слишком сильно отличается от рыночной. [Подробнее](https://yandex.ru/support/marketplace/assortment/operations/prices.html#quarantine)
   *
   * В запросе можно использовать фильтры.
   *
   * Результаты возвращаются постранично.
   *
   * POST /v2/businesses/{businessId}/price-quarantine
   *
   * Разделы YM: price-quarantine, dbs, fby, fbs, express.
   *
   * @see https://yandex.ru/dev/market/partner-api/doc/ru/
   */
  readonly getBusinessQuarantineOffers: (
    input: GetBusinessQuarantineOffersInput,
    options?: YmRequestOptions,
  ) => Promise<GetBusinessQuarantineOffersResponse>;
  /**
   * Удаление товара из карантина по цене в кабинете
   *
   * Подтверждает во всех магазинах цену на товары, которые попали в карантин, и удаляет их из карантина.
   *
   * Товар попадает в карантин, если его цена меняется слишком резко. [Как настроить карантин](https://yandex.ru/support/marketplace/assortment/operations/prices.html#quarantine)
   *
   * Чтобы увидеть список товаров, которые попали в карантин, используйте запрос [POST v2/businesses/{businessId}/price-quarantine](getBusinessQuarantineOffers.md).
   *
   * POST /v2/businesses/{businessId}/price-quarantine/confirm
   *
   * Разделы YM: price-quarantine, dbs, fby, fbs, express.
   *
   * @see https://yandex.ru/dev/market/partner-api/doc/ru/
   */
  readonly confirmBusinessPrices: (
    input: ConfirmBusinessPricesInput,
    options?: YmRequestOptions,
  ) => Promise<ConfirmBusinessPricesResponse>;
  /**
   * Список товаров, находящихся в карантине по цене в магазине
   *
   * Возвращает список товаров, которые находятся в карантине по цене, установленной в заданном магазине.
   *
   * Проверьте цену каждого из товаров, который попал в карантин. Если ошибки нет и цена правильная, подтвердите ее с помощью запроса [POST v2/campaigns/{campaignId}/price-quarantine/confirm](../../reference/price-quarantine/confirmCampaignPrices.md). Если цена в самом деле ошибочная, установите верную с помощью запроса [POST v2/campaigns/{campaignId}/offer-prices/updates](../../reference/prices/updatePrices.md).
   *
   * Что такое карантин?
   *
   * Товар попадает в карантин, если его цена меняется слишком резко или слишком сильно отличается от рыночной. [Подробнее](https://yandex.ru/support/marketplace/assortment/operations/prices.html#quarantine)
   *
   * В запросе можно использовать фильтры.
   *
   * Результаты возвращаются постранично.
   *
   * POST /v2/campaigns/{campaignId}/price-quarantine
   *
   * Разделы YM: price-quarantine, dbs, fby, fbs, express.
   *
   * @see https://yandex.ru/dev/market/partner-api/doc/ru/
   */
  readonly getCampaignQuarantineOffers: (
    input: GetCampaignQuarantineOffersInput,
    options?: YmRequestOptions,
  ) => Promise<GetCampaignQuarantineOffersResponse>;
  /**
   * Удаление товара из карантина по цене в магазине
   *
   * Подтверждает в заданном магазине цену на товары, которые попали в карантин, и удаляет их из карантина.
   *
   * Товар попадает в карантин, если его цена меняется слишком резко. [Как настроить карантин](https://yandex.ru/support/marketplace/assortment/operations/prices.html#quarantine)
   *
   * Чтобы увидеть список товаров, которые попали в карантин, используйте запрос [POST v2/campaigns/{campaignId}/price-quarantine](getCampaignQuarantineOffers.md).
   *
   * POST /v2/campaigns/{campaignId}/price-quarantine/confirm
   *
   * Разделы YM: price-quarantine, dbs, fby, fbs, express.
   *
   * @see https://yandex.ru/dev/market/partner-api/doc/ru/
   */
  readonly confirmCampaignPrices: (
    input: ConfirmCampaignPricesInput,
    options?: YmRequestOptions,
  ) => Promise<ConfirmCampaignPricesResponse>;
}

export interface YmPricesApi {
  /**
   * Установка цен на товары для всех магазинов
   *
   * Устанавливает цены, которые действуют во всех магазинах. Чтобы получить рекомендации Маркета, касающиеся цен, выполните запрос [POST v2/businesses/{businessId}/offers/recommendations](../../reference/offers/getOfferRecommendations.md).
   *
   * При необходимости передавайте НДС с помощью параметра `vat` в запросе [POST v2/campaigns/{campaignId}/offers/update](../../reference/offers/updateCampaignOffers.md).
   *
   * Данные в каталоге обновляются не мгновенно
   *
   * Это занимает до нескольких минут.
   *
   * POST /v2/businesses/{businessId}/offer-prices/updates
   *
   * Разделы YM: prices, fby, fbs, dbs, express, laas.
   *
   * @see https://yandex.ru/dev/market/partner-api/doc/ru/
   */
  readonly updateBusinessPrices: (
    input: UpdateBusinessPricesInput,
    options?: YmRequestOptions,
  ) => Promise<UpdateBusinessPricesResponse>;
  /**
   * Установка цен на товары в конкретном магазине
   *
   * Устанавливает цены на товары в магазине. Чтобы получить рекомендации Маркета, касающиеся цен, выполните запрос [POST v2/businesses/{businessId}/offers/recommendations](../../reference/offers/getOfferRecommendations.md).
   *
   * Метод только для отдельных магазинов
   *
   * Вам доступен этот метод, если в кабинете продавца на Маркете есть возможность установить уникальные цены в отдельных магазинах. Как это проверить — в методе [POST v2/businesses/{businessId}/settings](../../reference/businesses/getBusinessSettings.md) в параметре `onlyDefaultPrice` возвращается значение `false`.
   *
   * В ином случае используйте метод управления ценами, которые действуют во всех магазинах, — [POST v2/businesses/{businessId}/offer-prices/updates](../../reference/prices/updateBusinessPrices.md).
   *
   * Данные в каталоге обновляются не мгновенно
   *
   * Это занимает до нескольких минут.
   *
   * POST /v2/campaigns/{campaignId}/offer-prices/updates
   *
   * Разделы YM: prices, fby, fbs, dbs, express, laas.
   *
   * @see https://yandex.ru/dev/market/partner-api/doc/ru/
   */
  readonly updatePrices: (
    input: UpdatePricesInput,
    options?: YmRequestOptions,
  ) => Promise<UpdatePricesResponse>;
  /**
   * Список цен
   *
   * Возвращает список цен, установленных вами на товары любым способом: например, через API или в файле с каталогом.
   *
   * Способы установки цен описаны [в Справке Маркета для продавцов](https://yandex.ru/support/marketplace/assortment/operations/prices.html).
   *
   * GET /v2/campaigns/{campaignId}/offer-prices
   *
   * Разделы YM: prices, fby, fbs, dbs, express.
   *
   * @see https://yandex.ru/dev/market/partner-api/doc/ru/
   *
   * @deprecated Метод помечен устаревшим в OpenAPI YM (деградация с 2027-01-18, отключение 2027-04-05. Замена: `ym.prices.getPricesByOfferIds(...)` для `POST /v2/campaigns/{campaignId}/offer-prices`.
   */
  readonly getPrices: (
    input: GetPricesInput,
    options?: YmRequestOptions,
  ) => Promise<GetPricesResponse>;
  /**
   * Просмотр цен на указанные товары в конкретном магазине
   *
   * Возвращает список цен на указанные товары в магазине.
   *
   * Метод только для отдельных магазинов
   *
   * Используйте этот метод, только если в кабинете установлены уникальные цены в отдельных магазинах.
   *
   * Для просмотра цен, которые действуют во всех магазинах, используйте [POST v2/businesses/{businessId}/offer-mappings](../../reference/business-offer-mappings/getOfferMappings.md).
   *
   * POST /v2/campaigns/{campaignId}/offer-prices
   *
   * Разделы YM: prices, fby, fbs, dbs, express, laas.
   *
   * @see https://yandex.ru/dev/market/partner-api/doc/ru/
   */
  readonly getPricesByOfferIds: (
    input: GetPricesByOfferIdsInput,
    options?: YmRequestOptions,
  ) => Promise<GetPricesByOfferIdsResponse>;
  /**
   * Просмотр цен на указанные товары во всех магазинах
   *
   * Возвращает список цен, которые вы установили для всех магазинов любым способом. Например, через API или с помощью Excel-шаблона.
   *
   * О способах установки цен читайте [в Справке Маркета для продавцов](https://yandex.ru/support/marketplace/assortment/operations/prices.html).
   *
   * POST /v2/businesses/{businessId}/offer-prices
   *
   * Разделы YM: prices, fby, fbs, dbs, express, laas.
   *
   * @see https://yandex.ru/dev/market/partner-api/doc/ru/
   */
  readonly getDefaultPrices: (
    input: GetDefaultPricesInput,
    options?: YmRequestOptions,
  ) => Promise<GetDefaultPricesResponse>;
}

export interface YmPromosApi {
  /**
   * Получение списка акций
   *
   * Возвращает информацию об акциях Маркета. Не возвращает данные об акциях, которые создал продавец.
   *
   * По умолчанию возвращаются акции, в которых продавец участвует или может принять участие.
   *
   * Чтобы получить текущие или завершенные акции, передайте параметр `participation`.
   *
   * Типы акций, которые возвращаются в ответе:
   *
   * * прямая скидка;
   * * флеш-акция;
   * * скидка по промокоду.
   *
   * POST /v2/businesses/{businessId}/promos
   *
   * Разделы YM: promos, fby, fbs, dbs, express.
   *
   * @see https://yandex.ru/dev/market/partner-api/doc/ru/
   */
  readonly getPromos: (
    input: GetPromosInput,
    options?: YmRequestOptions,
  ) => Promise<GetPromosResponse>;
  /**
   * Получение списка товаров, которые участвуют или могут участвовать в акции
   *
   * Возвращает список товаров, которые участвуют или могут участвовать в акции.
   *
   * Условия участия в акциях могут меняться
   *
   * Например, `maxPromoPrice`.
   *
   * Установленные цены меняться не будут — `price` и `promoPrice`.
   *
   * POST /v2/businesses/{businessId}/promos/offers
   *
   * Разделы YM: promos, fby, fbs, dbs, express.
   *
   * @see https://yandex.ru/dev/market/partner-api/doc/ru/
   */
  readonly getPromoOffers: (
    input: GetPromoOffersInput,
    options?: YmRequestOptions,
  ) => Promise<GetPromoOffersResponse>;
  /**
   * Добавление товаров в акцию или изменение их цен
   *
   * Добавляет товары в акцию или изменяет цены на товары, которые участвуют в акции.
   *
   * Изменения начинают действовать в течение 4–6 часов. Узнать, применились ли они, можно с помощью параметра `processing` в ответе метода [POST v2/businesses/{businessId}/promos](../../reference/promos/getPromos.md).
   *
   * POST /v2/businesses/{businessId}/promos/offers/update
   *
   * Разделы YM: promos, fby, fbs, dbs, express.
   *
   * @see https://yandex.ru/dev/market/partner-api/doc/ru/
   */
  readonly updatePromoOffers: (
    input: UpdatePromoOffersInput,
    options?: YmRequestOptions,
  ) => Promise<UpdatePromoOffersResponse>;
  /**
   * Удаление товаров из акции
   *
   * Убирает товары из акции.
   *
   * Изменения начинают действовать в течение 4–6 часов. Узнать, применились ли они, можно с помощью параметра `processing` в ответе метода [POST v2/businesses/{businessId}/promos](../../reference/promos/getPromos.md).
   *
   * POST /v2/businesses/{businessId}/promos/offers/delete
   *
   * Разделы YM: promos, fby, fbs, dbs, express.
   *
   * @see https://yandex.ru/dev/market/partner-api/doc/ru/
   */
  readonly deletePromoOffers: (
    input: DeletePromoOffersInput,
    options?: YmRequestOptions,
  ) => Promise<DeletePromoOffersResponse>;
}

export interface YmRatingsApi {
  /**
   * Индекс качества магазинов
   *
   * Возвращает значение индекса качества магазинов и его составляющие.
   *
   * Подробнее об индексе качества читайте [в Справке Маркета для продавцов](https://yandex.ru/support2/marketplace/ru/quality/score/).
   *
   * POST /v2/businesses/{businessId}/ratings/quality
   *
   * Разделы YM: ratings, fby, fbs, dbs, express.
   *
   * @see https://yandex.ru/dev/market/partner-api/doc/ru/
   */
  readonly getQualityRatings: (
    input: GetQualityRatingsInput,
    options?: YmRequestOptions,
  ) => Promise<GetQualityRatingsResponse>;
  /**
   * Заказы, которые повлияли на индекс качества
   *
   * Возвращает список заказов, которые повлияли на индекс качества магазина. Чтобы узнать значение индекса качества, выполните запрос [POST v2/businesses/{businessId}/ratings/quality](../../reference/ratings/getQualityRatings.md).
   *
   * POST /v2/campaigns/{campaignId}/ratings/quality/details
   *
   * Разделы YM: ratings, fbs, dbs, express.
   *
   * @see https://yandex.ru/dev/market/partner-api/doc/ru/
   */
  readonly getQualityRatingDetails: (
    input: GetQualityRatingDetailsInput,
    options?: YmRequestOptions,
  ) => Promise<GetQualityRatingDetailsResponse>;
}

export interface YmRegionsApi {
  /**
   * Поиск регионов по их имени
   *
   * Возвращает информацию о регионе, удовлетворяющем заданным в запросе условиям поиска.
   *
   * Если найдено несколько регионов, удовлетворяющих условиям поиска, возвращается информация по каждому найденному региону (но не более десяти регионов) для возможности определения нужного региона по родительским регионам.
   *
   * GET /v2/regions
   *
   * Разделы YM: regions, fby, fbs, dbs, express, laas.
   *
   * @see https://yandex.ru/dev/market/partner-api/doc/ru/
   */
  readonly searchRegionsByName: (
    input: SearchRegionsByNameInput,
    options?: YmRequestOptions,
  ) => Promise<SearchRegionsByNameResponse>;
  /**
   * Информация о регионе
   *
   * Возвращает информацию о регионе.
   *
   * GET /v2/regions/{regionId}
   *
   * Разделы YM: regions, fby, fbs, dbs, express, laas.
   *
   * @see https://yandex.ru/dev/market/partner-api/doc/ru/
   */
  readonly searchRegionsById: (
    input: SearchRegionsByIdInput,
    options?: YmRequestOptions,
  ) => Promise<SearchRegionsByIdResponse>;
  /**
   * Информация о дочерних регионах
   *
   * Возвращает информацию о регионах, являющихся дочерними по отношению к региону, идентификатор которого указан в запросе.
   *
   * GET /v2/regions/{regionId}/children
   *
   * Разделы YM: regions, fby, fbs, dbs, express, laas.
   *
   * @see https://yandex.ru/dev/market/partner-api/doc/ru/
   */
  readonly searchRegionChildren: (
    input: SearchRegionChildrenInput,
    options?: YmRequestOptions,
  ) => Promise<SearchRegionChildrenResponse>;
  /**
   * Список допустимых кодов стран
   *
   * Возвращает список стран с их кодами в формате :no-translate[ISO 3166-1 alpha-2].
   *
   * Страна производства `countryCode` понадобится при продаже товаров из-за рубежа для бизнеса. [Инструкция](../../step-by-step/business-info.md)
   *
   * POST /v2/regions/countries
   *
   * Разделы YM: regions, fby, fbs, dbs, express, laas.
   *
   * @see https://yandex.ru/dev/market/partner-api/doc/ru/
   */
  readonly getRegionsCodes: (
    options?: YmRequestOptions,
  ) => Promise<GetRegionsCodesResponse>;
}

export interface YmReportsApi {
  /**
   * Получение заданного отчета или документа
   *
   * Возвращает статус генерации заданного отчета или документа и, если он готов, ссылку для скачивания.
   *
   * Чтобы воспользоваться этим запросом, вначале нужно запустить генерацию отчета или документа. [Инструкция](../../step-by-step/reports.md)
   *
   * GET /v2/reports/info/{reportId}
   *
   * Разделы YM: reports, fby, dbs, fbs, express, laas.
   *
   * @see https://yandex.ru/dev/market/partner-api/doc/ru/
   */
  readonly getReportInfo: (
    input: GetReportInfoInput,
    options?: YmRequestOptions,
  ) => Promise<GetReportInfoResponse>;
  /**
   * Отчет по платежам
   *
   * Запускает генерацию отчета по платежам за заданный период. [Что это за отчет](https://yandex.ru/support/marketplace/ru/accounting/transactions#all-pay)
   *
   * Узнать статус генерации и получить ссылку на готовый отчет можно с помощью запроса [GET v2/reports/info/{reportId}](../../reference/reports/getReportInfo.md).
   *
   * Тип отчета зависит от того, какие поля заполнены в запросе:
   *
   * #|
   * || **Тип отчета** | **Какие поля нужны** | **Комментарий** ||
   * || О платежах за период | `dateFrom` и `dateTo` |
   * В отчет попадают все платежи, которые были выплачены и начислены в выбранный период.
   *
   * Пример: если перевод выполнен 31 августа и зачислен 1 сентября, он попадет в отчет за оба месяца.
   * ||
   * || О платежном поручении | `bankOrderId` и `bankOrderDateTime` |—||
   * || [О баллах Маркета](*баллы_маркета) | `monthOfYear` |—||
   * |#
   *
   * Заказать отчеты нескольких типов одним запросом нельзя.
   *
   * POST /v2/reports/united-netting/generate
   *
   * Разделы YM: reports, fby, dbs, fbs, express.
   *
   * @see https://yandex.ru/dev/market/partner-api/doc/ru/
   */
  readonly generateUnitedNettingReport: (
    input: GenerateUnitedNettingReportInput,
    options?: YmRequestOptions,
  ) => Promise<GenerateUnitedNettingReportResponse>;
  /**
   * Отчет по стоимости услуг
   *
   * Запускает генерацию отчета по стоимости услуг за заданный период. [Что это за отчет](https://yandex.ru/support/marketplace/ru/accounting/transactions#reports)
   *
   * Тип отчета зависит от того, какие поля заполнены в запросе:
   *
   * |**Тип отчета** |**Какие поля нужны** |
   * |-----------------------------|---------------------------------|
   * |По дате начисления услуги |`dateFrom` и `dateTo` |
   * |По дате формирования акта |`year` и `month` |
   *
   * Заказать отчеты обоих типов одним запросом нельзя.
   *
   * Узнать статус генерации и получить ссылку на готовый отчет можно с помощью запроса [GET v2/reports/info/{reportId}](../../reference/reports/getReportInfo.md).
   *
   * POST /v2/reports/united-marketplace-services/generate
   *
   * Разделы YM: reports, fby, dbs, fbs, express, laas.
   *
   * @see https://yandex.ru/dev/market/partner-api/doc/ru/
   */
  readonly generateUnitedMarketplaceServicesReport: (
    input: GenerateUnitedMarketplaceServicesReportInput,
    options?: YmRequestOptions,
  ) => Promise<GenerateUnitedMarketplaceServicesReportResponse>;
  /**
   * Отчет по заказам
   *
   * Запускает генерацию отчета по заказам за заданный период. [Что это за отчет](https://yandex.ru/support/marketplace/ru/accounting/transactions#get-report)
   *
   * Узнать статус генерации и получить ссылку на готовый отчет можно с помощью запроса [GET v2/reports/info/{reportId}](../../reference/reports/getReportInfo.md).
   *
   * POST /v2/reports/united-orders/generate
   *
   * Разделы YM: reports, fby, fbs, dbs, express.
   *
   * @see https://yandex.ru/dev/market/partner-api/doc/ru/
   */
  readonly generateUnitedOrdersReport: (
    input: GenerateUnitedOrdersReportInput,
    options?: YmRequestOptions,
  ) => Promise<GenerateUnitedOrdersReportResponse>;
  /**
   * Отчет по невыкупам и возвратам
   *
   * Запускает генерацию сводного отчета по невыкупам и возвратам за заданный период. [Что это за отчет](https://yandex.ru/support/marketplace/ru/orders/returns/logistic#rejected-orders)
   *
   * Отчет содержит информацию о невыкупах и возвратах за указанный период, а также о тех, которые готовы к выдаче.
   *
   * Узнать статус генерации и получить ссылку на готовый отчет можно с помощью запроса [GET v2/reports/info/{reportId}](../../reference/reports/getReportInfo.md).
   *
   * POST /v2/reports/united-returns/generate
   *
   * Разделы YM: reports, fby, fbs, dbs, express, laas.
   *
   * @see https://yandex.ru/dev/market/partner-api/doc/ru/
   */
  readonly generateUnitedReturnsReport: (
    input: GenerateUnitedReturnsReportInput,
    options?: YmRequestOptions,
  ) => Promise<GenerateUnitedReturnsReportResponse>;
  /**
   * Отчет по реализации
   *
   * Запускает генерацию отчета по реализации за заданный период. [Что это за отчет](https://yandex.ru/support/marketplace/ru/accounting/transactions#sales-report)
   *
   * Узнать статус генерации и получить ссылку на готовый отчет можно с помощью запроса [GET v2/reports/info/{reportId}](../../reference/reports/getReportInfo.md).
   *
   * - FBY, FBS, Экспресс
   *
   * - DBS
   *
   * POST /v2/reports/goods-realization/generate
   *
   * Разделы YM: reports, fby, fbs, express, dbs.
   *
   * @see https://yandex.ru/dev/market/partner-api/doc/ru/
   */
  readonly generateGoodsRealizationReport: (
    input: GenerateGoodsRealizationReportInput,
    options?: YmRequestOptions,
  ) => Promise<GenerateGoodsRealizationReportResponse>;
  /**
   * Отчет по остаткам на складах
   *
   * Запускает генерацию отчета по остаткам на складах. [Что это за отчет](https://yandex.ru/support/marketplace/ru/storage/logistics#remains-history)
   *
   * Когда использовать этот метод
   *
   * Метод актуален:
   *
   * * для моделей FBY и LaaS;
   * * для моделей FBS, DBS и Экспресс, если в кабинете есть группы складов.
   *
   * Если в кабинете нет групп складов и вы работаете с моделями FBS, DBS или Экспресс, используйте метод [POST v3/businesses/{businessId}/reports/stocks/generate](../../reference/reports/generateStocksReport.md). [Что такое группы складов и зачем они нужны](https://yandex.ru/support/marketplace/assortment/operations/stocks.html#unified-stocks).
   *
   * **Какая информация вернется:**
   *
   * * Для моделей FBY и LaaS, если указать `campaignId`, — об остатках на складах Маркета.
   * * Для остальных моделей, если указать `campaignId`, — об остатках на соответствующем складе магазина.
   * * Для остальных моделей, если указать `businessId`, — об остатках на всех складах магазинов в кабинете, кроме FBY и LaaS. Используйте фильтр `campaignIds`, чтобы указать определенные магазины.
   *
   * ⚠️ Не передавайте одновременно `campaignId` и `businessId`.
   *
   * Узнать статус генерации и получить ссылку на готовый отчет можно с помощью запроса [GET v2/reports/info/{reportId}](../../reference/reports/getReportInfo.md).
   *
   * - Склад Маркета
   *
   * - Склад магазина
   *
   * - Все склады магазинов в кабинете, кроме FBY и LaaS
   *
   * POST /v2/reports/stocks-on-warehouses/generate
   *
   * Разделы YM: reports, fby, fbs, dbs, express, laas.
   *
   * @see https://yandex.ru/dev/market/partner-api/doc/ru/
   */
  readonly generateStocksOnWarehousesReport: (
    input: GenerateStocksOnWarehousesReportInput,
    options?: YmRequestOptions,
  ) => Promise<GenerateStocksOnWarehousesReportResponse>;
  /**
   * Отчет по остаткам на складах партнера
   *
   * Запускает генерацию отчета по остаткам на складах магазинов в кабинете. [Что это за отчет](https://yandex.ru/support/marketplace/ru/storage/logistics#remains-history)
   *
   * **Какая информация вернется:**
   *
   * * Об остатках на всех складах магазинов в кабинете (модели DBS, FBS и Экспресс).
   * * По каждому товару — ваш SKU, название, модель работы, склад, доступное для заказа количество, резерв, цену и статус.
   *
   * Узнать статус генерации и получить ссылку на готовый отчет можно с помощью запроса [GET v2/reports/info/{reportId}](../../reference/reports/getReportInfo.md).
   *
   * - Все склады магазинов в кабинете
   *
   * Метод подходит, только если в кабинете нет групп складов
   *
   * Если в кабинете есть группы складов, используйте метод [POST v2/reports/stocks-on-warehouses/generate](../../reference/reports/generateStocksOnWarehousesReport.md). [Что такое группы складов и зачем они нужны](https://yandex.ru/support/marketplace/assortment/operations/stocks.html#unified-stocks).
   *
   * POST /v3/businesses/{businessId}/reports/stocks/generate
   *
   * Разделы YM: reports, fbs, dbs, express.
   *
   * @see https://yandex.ru/dev/market/partner-api/doc/ru/
   */
  readonly generateStocksReport: (
    input: GenerateStocksReportInput,
    options?: YmRequestOptions,
  ) => Promise<GenerateStocksReportResponse>;
  /**
   * Отчет по движению товаров
   *
   * Запускает генерацию отчета по движению товаров. [Что это за отчет](https://yandex.ru/support/marketplace/analytics/reports-fby-fbs.html#flow)
   *
   * Узнать статус генерации и получить ссылку на готовый отчет можно с помощью запроса [GET v2/reports/info/{reportId}](../../reference/reports/getReportInfo.md).
   *
   * POST /v2/reports/goods-movement/generate
   *
   * Разделы YM: reports, fby, laas.
   *
   * @see https://yandex.ru/dev/market/partner-api/doc/ru/
   */
  readonly generateGoodsMovementReport: (
    input: GenerateGoodsMovementReportInput,
    options?: YmRequestOptions,
  ) => Promise<GenerateGoodsMovementReportResponse>;
  /**
   * Отчет «Аналитика продаж»
   *
   * Запускает генерацию отчета «Аналитика продаж» за заданный период. [Что это за отчет](https://yandex.ru/support/marketplace/analytics/shows-sales.html)
   *
   * Узнать статус генерации и получить ссылку на готовый отчет можно с помощью запроса [GET v2/reports/info/{reportId}](../../reference/reports/getReportInfo.md).
   *
   * POST /v2/reports/shows-sales/generate
   *
   * Разделы YM: reports, fby, dbs, fbs, express.
   *
   * @see https://yandex.ru/dev/market/partner-api/doc/ru/
   */
  readonly generateShowsSalesReport: (
    input: GenerateShowsSalesReportInput,
    options?: YmRequestOptions,
  ) => Promise<GenerateShowsSalesReportResponse>;
  /**
   * Отчет «Конкурентная позиция»
   *
   * Запускает генерацию отчета «Конкурентная позиция» за заданный период. [Что это за отчет](https://yandex.ru/support2/marketplace/ru/analytics/competitors.html)
   *
   * Узнать статус генерации и получить ссылку на готовый отчет можно с помощью запроса [GET v2/reports/info/{reportId}](../../reference/reports/getReportInfo.md).
   *
   * Значение -1 в отчете
   *
   * Если в CSV-файле в столбце :no-translate[**POSITION**] стоит -1, в этот день не было заказов с товарами в указанной категории.
   *
   * POST /v2/reports/competitors-position/generate
   *
   * Разделы YM: reports, fby, dbs, fbs, express.
   *
   * @see https://yandex.ru/dev/market/partner-api/doc/ru/
   */
  readonly generateCompetitorsPositionReport: (
    input: GenerateCompetitorsPositionReportInput,
    options?: YmRequestOptions,
  ) => Promise<GenerateCompetitorsPositionReportResponse>;
  /**
   * Отчет «Цены»
   *
   * Запускает генерацию отчета «Цены».
   *
   * **Какая информация вернется:**
   *
   * * если передать `businessId` — по единым ценам кабинета;
   * * если [включены магазинные цены](*onlyDefaultPrice-false) и указать `campaignId` — по ценам в соответствующем магазине.
   *
   * Узнать статус генерации и получить ссылку на готовый отчет можно с помощью запроса [GET v2/reports/info/{reportId}](../../reference/reports/getReportInfo.md).
   *
   * - Цены во всех магазинах кабинета
   *
   * - Магазинные цены
   *
   * POST /v2/reports/goods-prices/generate
   *
   * Разделы YM: reports, fby, fbs, dbs, express.
   *
   * @see https://yandex.ru/dev/market/partner-api/doc/ru/
   */
  readonly generateGoodsPricesReport: (
    input: GenerateGoodsPricesReportInput,
    options?: YmRequestOptions,
  ) => Promise<GenerateGoodsPricesReportResponse>;
  /**
   * Отчет по оборачиваемости
   *
   * Запускает генерацию отчета по оборачиваемости за заданную дату. [Что это за отчет](https://yandex.ru/support/marketplace/ru/storage/logistics#turnover)
   *
   * Узнать статус генерации и получить ссылку на готовый отчет можно с помощью запроса [GET v2/reports/info/{reportId}](../../reference/reports/getReportInfo.md).
   *
   * POST /v2/reports/goods-turnover/generate
   *
   * Разделы YM: reports, fby.
   *
   * @see https://yandex.ru/dev/market/partner-api/doc/ru/
   */
  readonly generateGoodsTurnoverReport: (
    input: GenerateGoodsTurnoverReportInput,
    options?: YmRequestOptions,
  ) => Promise<GenerateGoodsTurnoverReportResponse>;
  /**
   * Отчет по бусту продаж
   *
   * Запускает генерацию сводного отчета по бусту продаж за заданный период. [Что такое буст продаж](https://yandex.ru/support/marketplace/ru/marketing/campaigns)
   *
   * Отчет содержит информацию по всем кампаниям, созданным и через API, и в кабинете.
   *
   * Узнать статус генерации и получить ссылку на готовый отчет можно с помощью запроса [GET v2/reports/info/{reportId}](../../reference/reports/getReportInfo.md).
   *
   * POST /v2/reports/boost-consolidated/generate
   *
   * Разделы YM: reports, fby, fbs, dbs, express.
   *
   * @see https://yandex.ru/dev/market/partner-api/doc/ru/
   */
  readonly generateBoostConsolidatedReport: (
    input: GenerateBoostConsolidatedReportInput,
    options?: YmRequestOptions,
  ) => Promise<GenerateBoostConsolidatedReportResponse>;
  /**
   * Получение листа сборки
   *
   * Запускает генерацию **листа сборки** для отгрузки.
   *
   * Чтобы на в листе сборки отображался внешний идентификатор заказа, передайте его в методе [POST v2/campaigns/{campaignId}/orders/{orderId}/external-id](../../reference/orders/updateExternalOrderId.md).
   *
   * Узнать статус генерации и получить ссылку на готовый документ можно с помощью запроса [GET v2/reports/info/{reportId}](../../reference/reports/getReportInfo.md).
   *
   * POST /v2/reports/documents/shipment-list/generate
   *
   * Разделы YM: reports, fbs.
   *
   * @see https://yandex.ru/dev/market/partner-api/doc/ru/
   */
  readonly generateShipmentListDocumentReport: (
    input: GenerateShipmentListDocumentReportInput,
    options?: YmRequestOptions,
  ) => Promise<GenerateShipmentListDocumentReportResponse>;
  /**
   * Отчет по полкам
   *
   * Запускает генерацию сводного отчета по полкам — рекламным блокам с баннером или видео и набором товаров. Подробнее о них читайте [в Справке Маркета для продавцов](https://yandex.ru/support2/marketplace/ru/marketing/shelf).
   *
   * Узнать статус генерации и получить ссылку на готовый отчет можно с помощью запроса [GET v2/reports/info/{reportId}](../../reference/reports/getReportInfo.md).
   *
   * POST /v2/reports/shelf-statistics/generate
   *
   * Разделы YM: reports, fby, fbs, dbs, express.
   *
   * @see https://yandex.ru/dev/market/partner-api/doc/ru/
   */
  readonly generateShelfsStatisticsReport: (
    input: GenerateShelfsStatisticsReportInput,
    options?: YmRequestOptions,
  ) => Promise<GenerateShelfsStatisticsReportResponse>;
  /**
   * Готовые ярлыки‑наклейки на все коробки в нескольких заказах
   *
   * Запускает генерацию PDF-файла с ярлыками для переданных заказов. Подробно о том, зачем они нужны и как выглядят, рассказано [в Справке Маркета для продавцов](https://yandex.ru/support/marketplace/orders/fbs/packaging/marking.html).
   *
   * Чтобы на ярлыке отображался внешний идентификатор заказа, передайте его в методе [POST v2/campaigns/{campaignId}/orders/{orderId}/external-id](../../reference/orders/updateExternalOrderId.md).
   *
   * Узнать статус генерации и получить ссылку на готовый файл можно с помощью запроса [GET v2/reports/info/{reportId}](../../reference/reports/getReportInfo.md).
   *
   * POST /v2/reports/documents/labels/generate
   *
   * Разделы YM: reports, fbs, dbs, express.
   *
   * @see https://yandex.ru/dev/market/partner-api/doc/ru/
   */
  readonly generateMassOrderLabelsReport: (
    input: GenerateMassOrderLabelsReportInput,
    options?: YmRequestOptions,
  ) => Promise<GenerateMassOrderLabelsReportResponse>;
  /**
   * Отчет по отзывам о товарах
   *
   * Запускает генерацию отчета по отзывам о товарах. [Что это за отчет](https://yandex.ru/support/marketplace/ru/marketing/plus-reviews#stat)
   *
   * Узнать статус генерации и получить ссылку на готовый отчет можно с помощью запроса [GET v2/reports/info/{reportId}](../../reference/reports/getReportInfo.md).
   *
   * POST /v2/reports/goods-feedback/generate
   *
   * Разделы YM: reports, fby, fbs, dbs, express.
   *
   * @see https://yandex.ru/dev/market/partner-api/doc/ru/
   */
  readonly generateGoodsFeedbackReport: (
    input: GenerateGoodsFeedbackReportInput,
    options?: YmRequestOptions,
  ) => Promise<GenerateGoodsFeedbackReportResponse>;
  /**
   * Отчет по бусту показов
   *
   * Запускает генерацию сводного отчета по бусту показов за заданный период. [Что такое буст показов](https://yandex.ru/support/marketplace/ru/marketing/boost-shows)
   *
   * Узнать статус генерации и получить ссылку на готовый отчет можно с помощью запроса [GET v2/reports/info/{reportId}](../../reference/reports/getReportInfo.md).
   *
   * POST /v2/reports/shows-boost/generate
   *
   * Разделы YM: reports, fby, fbs, dbs, express.
   *
   * @see https://yandex.ru/dev/market/partner-api/doc/ru/
   */
  readonly generateShowsBoostReport: (
    input: GenerateShowsBoostReportInput,
    options?: YmRequestOptions,
  ) => Promise<GenerateShowsBoostReportResponse>;
  /**
   * Отчет по охватному продвижению
   *
   * Запускает генерацию сводного отчета по охватному продвижению. Что это за отчет: [для баннеров](https://yandex.ru/support/marketplace/ru/marketing/advertising-tools/banner#statistics), [для пуш-уведомлений](https://yandex.ru/support/marketplace/ru/marketing/advertising-tools/push-notifications#statistics).
   *
   * Узнать статус генерации и получить ссылку на готовый отчет можно с помощью запроса [GET v2/reports/info/{reportId}](../../reference/reports/getReportInfo.md).
   *
   * POST /v2/reports/banners-statistics/generate
   *
   * Разделы YM: reports, fby, fbs, dbs, express.
   *
   * @see https://yandex.ru/dev/market/partner-api/doc/ru/
   */
  readonly generateBannersStatisticsReport: (
    input: GenerateBannersStatisticsReportInput,
    options?: YmRequestOptions,
  ) => Promise<GenerateBannersStatisticsReportResponse>;
  /**
   * Закрывающие документы
   *
   * Возвращает ZIP-архив с закрывающими документами в формате PDF за указанный месяц.
   *
   * Состав документов в зависимости от типа договора
   *
   * * **Договор на размещение**
   *
   * * [акт об оказанных услугах](*acts-main-act)
   * * [счет-фактура](*acts-main-invoice)
   * * [сводный отчет по данным статистики](*acts-main-report)
   * * [отчет об исполнении поручения и о зачете взаимных требований](*acts-main-agent) (отчет агента)
   *
   * * **Договор на продвижение** (в России не заключается после 30 сентября 2024 года)
   *
   * * [акт об оказании услуг](*acts-discounts-act)
   * * [счет-фактура](*acts-discounts-invoice), если этого требует схема налогообложения
   *
   * * **Договор на маркетинг**
   *
   * * [акт об оказанных услугах](*acts-marketing-act)
   * * [счет-фактура](*acts-main-invoice)
   * * [счет-фактура на аванс](*acts-marketing-invoice)
   * * [выписка по лицевому счету](*acts-marketing-account)
   * * [детализация к акту](*acts-marketing-details)
   *
   * Узнать статус генерации и получить ссылку на архив можно с помощью запроса [GET v2/reports/info/{reportId}](../../reference/reports/getReportInfo.md).
   *
   * POST /v2/reports/closure-documents/generate
   *
   * Разделы YM: reports, fby, dbs, fbs, express, laas.
   *
   * @see https://yandex.ru/dev/market/partner-api/doc/ru/
   */
  readonly generateClosureDocumentsReport: (
    input: GenerateClosureDocumentsReportInput,
    options?: YmRequestOptions,
  ) => Promise<GenerateClosureDocumentsReportResponse>;
  /**
   * Отчет по заказам с ювелирными изделиями
   *
   * Запускает генерацию отчета по заказам с ювелирными изделиями.
   *
   * Узнать статус генерации и получить ссылку на готовый отчет можно с помощью запроса [GET v2/reports/info/{reportId}](../../reference/reports/getReportInfo.md).
   *
   * POST /v2/reports/jewelry-fiscal/generate
   *
   * Разделы YM: reports, fby, fbs, dbs, express.
   *
   * @see https://yandex.ru/dev/market/partner-api/doc/ru/
   */
  readonly generateJewelryFiscalReport: (
    input: GenerateJewelryFiscalReportInput,
    options?: YmRequestOptions,
  ) => Promise<GenerateJewelryFiscalReportResponse>;
  /**
   * Отчет по географии продаж
   *
   * Запускает генерацию отчета по географии продаж. [Что это за отчет](https://yandex.ru/support/marketplace/ru/analytics/sales-geography)
   *
   * Узнать статус генерации и получить ссылку на готовый отчет можно с помощью запроса [GET v2/reports/info/{reportId}](../../reference/reports/getReportInfo.md).
   *
   * POST /v2/reports/sales-geography/generate
   *
   * Разделы YM: reports, fby, fbs, dbs, express.
   *
   * @see https://yandex.ru/dev/market/partner-api/doc/ru/
   */
  readonly generateSalesGeographyReport: (
    input: GenerateSalesGeographyReportInput,
    options?: YmRequestOptions,
  ) => Promise<GenerateSalesGeographyReportResponse>;
  /**
   * Отчет по ключевым показателям
   *
   * Запускает генерацию отчета по ключевым показателям. [Что это за отчет](https://yandex.ru/support/marketplace/ru/analytics/key-metrics)
   *
   * Узнать статус генерации и получить ссылку на готовый отчет можно с помощью запроса [GET v2/reports/info/{reportId}](../../reference/reports/getReportInfo.md).
   *
   * POST /v2/reports/key-indicators/generate
   *
   * Разделы YM: reports, fby, fbs, dbs, express.
   *
   * @see https://yandex.ru/dev/market/partner-api/doc/ru/
   */
  readonly generateKeyIndicatorsReport: (
    input: GenerateKeyIndicatorsReportInput,
    options?: YmRequestOptions,
  ) => Promise<GenerateKeyIndicatorsReportResponse>;
  /**
   * Отчет по схождению с закрывающими документами
   *
   * Запускает генерацию отчета по схождению с закрывающими документами в зависимости от типа договора.
   *
   * Узнать статус генерации и получить ссылку на готовый отчет можно с помощью запроса [GET v2/reports/info/{reportId}](../../reference/reports/getReportInfo.md).
   *
   * - Договор на размещение
   *
   * - Договор на продвижение
   *
   * POST /v2/reports/closure-documents/detalization/generate
   *
   * Разделы YM: reports, fby, dbs, fbs, express, laas.
   *
   * @see https://yandex.ru/dev/market/partner-api/doc/ru/
   */
  readonly generateClosureDocumentsDetalizationReport: (
    input: GenerateClosureDocumentsDetalizationReportInput,
    options?: YmRequestOptions,
  ) => Promise<GenerateClosureDocumentsDetalizationReportResponse>;
  /**
   * Отчет по счету маркетинга
   *
   * Запускает генерацию отчета по счету маркетинга.
   *
   * Узнать статус генерации и получить ссылку на готовый отчет можно с помощью запроса [GET v2/reports/info/{reportId}](../../reference/reports/getReportInfo.md).
   *
   * POST /v1/businesses/{businessId}/reports/marketing-detalization/generate
   *
   * Разделы YM: reports, fby, dbs, fbs, express, laas.
   *
   * @see https://yandex.ru/dev/market/partner-api/doc/ru/
   */
  readonly generateMarketingDetalizationReport: (
    input: GenerateMarketingDetalizationReportInput,
    options?: YmRequestOptions,
  ) => Promise<GenerateMarketingDetalizationReportResponse>;
  /**
   * Получение файла со штрихкодами
   *
   * Запускает генерацию PDF-файла со штрихкодами переданных товаров или товаров в указанной заявке на поставку.
   *
   * Файл не получится сгенерировать, если в нем будет более 1 500 штрихкодов.
   *
   * Узнать статус генерации и получить ссылку на готовый файл можно с помощью запроса [GET v2/reports/info/{reportId}](../../reference/reports/getReportInfo.md).
   *
   * POST /v1/reports/documents/barcodes/generate
   *
   * Разделы YM: reports, fby, laas.
   *
   * @see https://yandex.ru/dev/market/partner-api/doc/ru/
   */
  readonly generateBarcodesReport: (
    input: GenerateBarcodesReportInput,
    options?: YmRequestOptions,
  ) => Promise<GenerateBarcodesReportResponse>;
}

export interface YmReturnsApi {
  /**
   * Список невыкупов и возвратов
   *
   * Получает список невыкупов и возвратов.
   *
   * Чтобы получить информацию по одному невыкупу или возврату, выполните запрос [GET v2/campaigns/{campaignId}/orders/{orderId}/returns/{returnId}](../../reference/returns/getReturn.md).
   *
   * Подключите API-уведомления
   *
   * Маркет отправит вам запрос [POST notification](../../push-notifications/reference/sendNotification.md), когда появится новый невыкуп или возврат.
   *
   * [{#T}](../../push-notifications/index.md)
   *
   * GET /v2/campaigns/{campaignId}/returns
   *
   * Разделы YM: returns, fbs, dbs, express, fby, laas.
   *
   * @see https://yandex.ru/dev/market/partner-api/doc/ru/
   */
  readonly getReturns: (
    input: GetReturnsInput,
    options?: YmRequestOptions,
  ) => Promise<GetReturnsResponse>;
  /**
   * Информация о невыкупе или возврате
   *
   * Получает информацию по одному невыкупу или возврату.
   *
   * Подключите API-уведомления
   *
   * Маркет отправит вам запрос [POST notification](../../push-notifications/reference/sendNotification.md), когда появится новый невыкуп или возврат.
   *
   * [{#T}](../../push-notifications/index.md)
   *
   * GET /v2/campaigns/{campaignId}/orders/{orderId}/returns/{returnId}
   *
   * Разделы YM: returns, fbs, dbs, express, fby, laas.
   *
   * @see https://yandex.ru/dev/market/partner-api/doc/ru/
   */
  readonly getReturn: (
    input: GetReturnInput,
    options?: YmRequestOptions,
  ) => Promise<GetReturnResponse>;
  /**
   * Принятие или изменение решения по возврату
   *
   * Выбирает решение по возврату от покупателя. После этого для подтверждения решения нужно выполнить запрос [POST v2/campaigns/{campaignId}/orders/{orderId}/returns/{returnId}/decision/submit](../../reference/returns/submitReturnDecision.md).
   *
   * POST /v2/campaigns/{campaignId}/orders/{orderId}/returns/{returnId}/decision
   *
   * Разделы YM: returns, dbs.
   *
   * @see https://yandex.ru/dev/market/partner-api/doc/ru/
   *
   * @deprecated Метод помечен устаревшим в OpenAPI YM (деградация с 2027-01-18, отключение 2027-04-05. Замена: `ym.returns.submitReturnDecision(...)` для `POST /v2/campaigns/{campaignId}/orders/{orderId}/returns/{returnId}/decision/submit`.
   */
  readonly setReturnDecision: (
    input: SetReturnDecisionInput,
    options?: YmRequestOptions,
  ) => Promise<SetReturnDecisionResponse>;
  /**
   * Передача решения по возврату
   *
   * Позволяет передать список решений по возврату.
   *
   * Перед вызовом метода
   *
   * Получите список доступных решений — [POST v1/businesses/{businessId}/returns/decisions](../../reference/returns/getReturnAvailableDecisions.md).
   *
   * POST /v2/campaigns/{campaignId}/orders/{orderId}/returns/{returnId}/decision/submit
   *
   * Разделы YM: returns, dbs, fbs, express, fby.
   *
   * @see https://yandex.ru/dev/market/partner-api/doc/ru/
   */
  readonly submitReturnDecision: (
    input: SubmitReturnDecisionInput,
    options?: YmRequestOptions,
  ) => Promise<SubmitReturnDecisionResponse>;
  /**
   * Получение возможных решений по возврату
   *
   * Возвращает список доступных решений по возврату.
   *
   * POST /v1/businesses/{businessId}/returns/decisions
   *
   * Разделы YM: returns, dbs, fbs, express, fby.
   *
   * @see https://yandex.ru/dev/market/partner-api/doc/ru/
   */
  readonly getReturnAvailableDecisions: (
    input: GetReturnAvailableDecisionsInput,
    options?: YmRequestOptions,
  ) => Promise<GetReturnAvailableDecisionsResponse>;
  /**
   * Получение заявления на возврат
   *
   * Загружает заявление покупателя на возврат товара.
   *
   * GET /v2/campaigns/{campaignId}/orders/{orderId}/returns/{returnId}/application
   *
   * Разделы YM: returns, fbs, fby, dbs, express.
   *
   * @see https://yandex.ru/dev/market/partner-api/doc/ru/
   */
  readonly getReturnApplication: (
    input: GetReturnApplicationInput,
    options?: YmRequestOptions,
  ) => Promise<GetReturnApplicationResponse>;
  /**
   * Получение фотографий товаров в возврате
   *
   * Получает фотографии товаров, которые покупатель приложил к заявлению на возврат.
   *
   * Хеш изображения (`imageHash`) можно получить из ответов методов [GET v2/campaigns/{campaignId}/orders/{orderId}/returns/{returnId}](../../reference/returns/getReturn.md) и [GET v2/campaigns/{campaignId}/returns](../../reference/returns/getReturns.md) — в поле `images` решения по товару.
   *
   * Максимальный размер изображения — 50 МБ.
   *
   * Тип изображения можно определить по заголовку `Content-Type` в ответе.
   *
   * GET /v2/campaigns/{campaignId}/orders/{orderId}/returns/{returnId}/decision/{itemId}/image/{imageHash}
   *
   * Разделы YM: returns, fbs, dbs, express, fby.
   *
   * @see https://yandex.ru/dev/market/partner-api/doc/ru/
   */
  readonly getReturnPhoto: (
    input: GetReturnPhotoInput,
    options?: YmRequestOptions,
  ) => Promise<GetReturnPhotoResponse>;
  /**
   * Создание возврата
   *
   * Создает новый возврат.
   *
   * Это можно сделать только для заказа в статусе `DELIVERED`.
   *
   * Перед вызовом метода
   *
   * Проверьте, подходят ли пункты выдачи для возврата указанных товаров, — [POST v1/campaigns/{campaignId}/return-delivery-options](../../reference/delivery-options/getReturnDeliveryOptions.md).
   *
   * POST /v1/campaigns/{campaignId}/returns/create
   *
   * Разделы YM: returns, laas.
   *
   * @see https://yandex.ru/dev/market/partner-api/doc/ru/
   */
  readonly createReturn: (
    input: CreateReturnInput,
    options?: YmRequestOptions,
  ) => Promise<CreateReturnResponse>;
  /**
   * Отмена возврата
   *
   * Отменяет возврат.
   *
   * Это можно сделать только до принятия в пункте выдачи (`"shipmentStatus": "CREATED"`).
   *
   * Возврат отменяется не мгновенно
   *
   * Отмена возврата применяется в течение нескольких минут и только в случае успешного завершения операции. [Как проверить статус операции](../../reference/operations/getOperations.md)
   *
   * Используйте этот метод в подобных ситуациях
   *
   * Вы создали возврат, в котором указали 3 товара. Но покупатель передумал и решил вернуть только 2. Отмените возврат и создайте новый.
   *
   * POST /v1/campaigns/{campaignId}/returns/cancel
   *
   * Разделы YM: returns, laas.
   *
   * @see https://yandex.ru/dev/market/partner-api/doc/ru/
   */
  readonly cancelReturn: (
    input: CancelReturnInput,
    options?: YmRequestOptions,
  ) => Promise<CancelReturnResponse>;
}

export interface YmShipmentsApi {
  /**
   * Подтверждение ближайшей отгрузки и получение акта приема-передачи для нее
   *
   * Запрос подтверждает ближайшую отгрузку и возвращает акт приема-передачи в формате PDF.
   *
   * Подтверждение отгрузки доступно только после того, как она сформирована, иначе метод вернет код `400` и ошибку :no-translate["Closest shipment for reception transfer act generation not found."].
   *
   * Подробнее о приеме заказов и расписании отгрузок читайте [в Справке Маркета для продавцов](https://yandex.ru/support/marketplace/ru/orders/fbs/settings/shipment#schedule).
   *
   * Экспресс‑доставка
   *
   * Если ваш магазин подключен к экспресс‑доставке и вы отгружаете заказы курьерам [Яндекс Go](https://go.yandex/), подготавливать акт приема‑передачи не нужно.
   *
   * В акт входят собранные и готовые к отправке заказы, которые отгружаются в сортировочный центр или пункт приема либо передаются курьерам Маркета.
   *
   * При формировании акта Маркет автоматически находит и подставляет в шаблон следующие данные:
   *
   * Данные, из которых Маркет формирует акт
   *
   * #|
   * || **Данные в акте** | **Описание** ||
   * || Отправитель | Название вашего юридического лица, указанное в кабинете продавца на Маркете. ||
   * || Исполнитель | Название юридического лица сортировочного центра или службы доставки. ||
   * || № отправления в системе заказчика | Внешний идентификатор заказа продавца, который можно передать запросом [POST v2/campaigns/{campaignId}/orders/{orderId}/external-id](../../reference/orders/updateExternalOrderId.md). ||
   * || № отправления в системе исполнителя (субподрядчика) |
   * Идентификатор заказа на Маркете, как в выходных данных запроса:
   *
   * * [POST v1/businesses/{businessId}/orders](../../reference/orders/getBusinessOrders.md).||
   *
   * || Объявленная ценность |
   * Общая сумма заказа без учета стоимости доставки, как в выходных данных запроса:
   *
   * * [POST v1/businesses/{businessId}/orders](../../reference/orders/getBusinessOrders.md).||
   *
   * || Стоимость всех товаров в заказе | Стоимость всех заказанных товаров. ||
   *
   * || Вес |
   * Масса брутто грузового места (суммарная масса упаковки и содержимого), как в выходных данных запроса:
   *
   * * [POST v1/businesses/{businessId}/orders](../../reference/orders/getBusinessOrders.md).||
   *
   * || Количество мест |
   * Количество грузовых мест в заказе, как в выходных данных запроса:
   *
   * * [POST v1/businesses/{businessId}/orders](../../reference/orders/getBusinessOrders.md).||
   * |#
   *
   * Электронная подпись акта
   *
   * Если вы указываете параметр `signatory`, акт приема-передачи подписывается электронной подписью и становится электронным документом. В этом случае печатать и подписывать акт вручную не требуется — он уже имеет юридическую силу в электронном виде.
   *
   * Если параметр `signatory` не указан, акт нужно распечатать. В распечатанном акте укажите отправителя и исполнителя. Они должны подписать акт и указать фамилию и инициалы рядом с подписью. При необходимости также заполните реквизиты доверенности.
   *
   * Подробнее о работе с актами приема-передачи читайте [в Справке Маркета для продавцов](https://yandex.ru/support/marketplace/ru/orders/fbs/process#act).
   *
   * GET /v2/campaigns/{campaignId}/shipments/reception-transfer-act
   *
   * Разделы YM: shipments, fbs.
   *
   * @see https://yandex.ru/dev/market/partner-api/doc/ru/
   */
  readonly downloadShipmentReceptionTransferAct: (
    input: DownloadShipmentReceptionTransferActInput,
    options?: YmRequestOptions,
  ) => Promise<DownloadShipmentReceptionTransferActResponse>;
  /**
   * Получение информации об одной отгрузке
   *
   * Возвращает информацию об отгрузке по ее идентификатору.
   *
   * GET /v2/campaigns/{campaignId}/first-mile/shipments/{shipmentId}
   *
   * Разделы YM: shipments, fbs.
   *
   * @see https://yandex.ru/dev/market/partner-api/doc/ru/
   */
  readonly getShipment: (
    input: GetShipmentInput,
    options?: YmRequestOptions,
  ) => Promise<GetShipmentResponse>;
  /**
   * Получение информации о возможности печати ярлыков
   *
   * Возвращает информацию о возможности печати ярлыков-наклеек для заказов в отгрузке.
   *
   * GET /v2/campaigns/{campaignId}/first-mile/shipments/{shipmentId}/orders/info
   *
   * Разделы YM: shipments, fbs.
   *
   * @see https://yandex.ru/dev/market/partner-api/doc/ru/
   */
  readonly getShipmentOrdersInfo: (
    input: GetShipmentOrdersInfoInput,
    options?: YmRequestOptions,
  ) => Promise<GetShipmentOrdersInfoResponse>;
  /**
   * Подтверждение отгрузки
   *
   * Подтверждает отгрузку товаров в сортировочный центр или пункт приема заказов. Действие доступно только после того, как отгрузка сформирована.
   *
   * График отгрузок настраивается отдельно для каждого склада в личном кабинете и недоступен через API.
   * Проверить возможность подтверждения отгрузки можно с помощью метода [GET v2/campaigns/{campaignId}/shipments/{shipmentId}](../../reference/shipments/getShipment): среди доступных действий `availableActions` должно быть действие `CONFIRM`.
   * До наступления времени подтверждения метод вернет код `400` и ошибку :no-translate["Cutoff time for shipments has not been reached yet"].
   *
   * Подробнее о приеме заказов и расписании отгрузок читайте [в Справке Маркета для продавцов](https://yandex.ru/support/marketplace/ru/orders/fbs/settings/shipment#schedule).
   *
   * POST /v2/campaigns/{campaignId}/first-mile/shipments/{shipmentId}/confirm
   *
   * Разделы YM: shipments, fbs.
   *
   * @see https://yandex.ru/dev/market/partner-api/doc/ru/
   */
  readonly confirmShipment: (
    input: ConfirmShipmentInput,
    options?: YmRequestOptions,
  ) => Promise<ConfirmShipmentResponse>;
  /**
   * Получение акта приема-передачи
   *
   * Экспресс‑доставка
   *
   * Если ваш магазин подключен к экспресс‑доставке и вы отгружаете заказы курьерам [Яндекс Go](https://go.yandex/), подготавливать акт приема‑передачи не нужно.
   *
   * Запрос формирует акт приема-передачи заказов, входящих в отгрузку, и возвращает акт в формате PDF. В акте содержатся собранные и готовые к отправке заказы.
   *
   * Метод доступен только для подтвержденной отгрузки. Сначала подтвердите отгрузку запросом [POST v2/campaigns/{campaignId}/shipments/{shipmentId}/confirm](../../reference/shipments/confirmShipment.md), затем вызовите этот метод.
   *
   * При формировании акта Маркет автоматически находит и подставляет в шаблон следующие данные:
   *
   * Данные, из которых Маркет формирует акт
   *
   * #|
   * || **Данные в акте** | **Описание** ||
   * || Дата | Дата запроса. ||
   * || Отправитель | Название вашего юридического лица, указанное в кабинете продавца на Маркете. ||
   * || Исполнитель | Название юридического лица сортировочного центра или службы доставки. ||
   * || № отправления в системе заказчика | Внешний идентификатор заказа продавца, который можно передать запросом [POST v2/campaigns/{campaignId}/orders/{orderId}/external-id](../../reference/orders/updateExternalOrderId.md). ||
   * || № отправления в системе исполнителя (субподрядчика) |
   * Идентификатор заказа на Маркете, как в выходных данных запроса:
   *
   * * [POST v1/businesses/{businessId}/orders](../../reference/orders/getBusinessOrders.md).||
   *
   * || Объявленная ценность |
   * Общая сумма заказа без учета стоимости доставки, как в выходных данных запроса:
   *
   * * [POST v1/businesses/{businessId}/orders](../../reference/orders/getBusinessOrders.md).||
   *
   * || Вес |
   * Масса брутто грузового места (суммарная масса упаковки и содержимого), как в выходных данных запроса:
   *
   * * [POST v1/businesses/{businessId}/orders](../../reference/orders/getBusinessOrders.md).||
   *
   * || Количество мест |
   * Количество грузовых мест в заказе, как в выходных данных запроса:
   *
   * * [POST v1/businesses/{businessId}/orders](../../reference/orders/getBusinessOrders.md). ||
   * |#
   *
   * В распечатанном акте укажите отправителя и исполнителя. Они должны подписать акт и указать фамилию и инициалы рядом с подписью. При необходимости также заполните реквизиты доверенности.
   *
   * GET /v2/campaigns/{campaignId}/first-mile/shipments/{shipmentId}/act
   *
   * Разделы YM: shipments, fbs.
   *
   * @see https://yandex.ru/dev/market/partner-api/doc/ru/
   */
  readonly downloadShipmentAct: (
    input: DownloadShipmentActInput,
    options?: YmRequestOptions,
  ) => Promise<DownloadShipmentActResponse>;
  /**
   * Получение фактического акта приема-передачи
   *
   * Возвращает фактический акт приема-передачи для заданной отгрузки.
   *
   * Такой акт становится доступен спустя несколько часов после завершения отгрузки. Он может понадобиться, если после отгрузки обнаружатся расхождения.
   *
   * GET /v2/campaigns/{campaignId}/first-mile/shipments/{shipmentId}/inbound-act
   *
   * Разделы YM: shipments, fbs.
   *
   * @see https://yandex.ru/dev/market/partner-api/doc/ru/
   */
  readonly downloadShipmentInboundAct: (
    input: DownloadShipmentInboundActInput,
    options?: YmRequestOptions,
  ) => Promise<DownloadShipmentInboundActResponse>;
  /**
   * Получение транспортной накладной
   *
   * Возвращает транспортную накладную для заданной отгрузки, если Маркет забирает товары с вашего склада. Подробнее о таком способе отгрузки читайте [в Справке Маркета для продавцов](https://yandex.ru/support/marketplace/ru/orders/fbs/settings/shipment#at-your-warehouse).
   *
   * Накладная не возвращается, если вы привозите товары в ПВЗ или сортировочный центр.
   *
   * GET /v2/campaigns/{campaignId}/first-mile/shipments/{shipmentId}/transportation-waybill
   *
   * Разделы YM: shipments, fbs.
   *
   * @see https://yandex.ru/dev/market/partner-api/doc/ru/
   */
  readonly downloadShipmentTransportationWaybill: (
    input: DownloadShipmentTransportationWaybillInput,
    options?: YmRequestOptions,
  ) => Promise<DownloadShipmentTransportationWaybillResponse>;
  /**
   * Получение акта расхождений
   *
   * Возвращает акт расхождений для заданной отгрузки.
   *
   * GET /v2/campaigns/{campaignId}/first-mile/shipments/{shipmentId}/discrepancy-act
   *
   * Разделы YM: shipments, fbs.
   *
   * @see https://yandex.ru/dev/market/partner-api/doc/ru/
   */
  readonly downloadShipmentDiscrepancyAct: (
    input: DownloadShipmentDiscrepancyActInput,
    options?: YmRequestOptions,
  ) => Promise<DownloadShipmentDiscrepancyActResponse>;
  /**
   * Передача количества упаковок для доверительной приемки
   *
   * Передает Маркету количество упаковок в отгрузке для доверительной приемки. Подробнее о таком виде приемки читайте в [Справке Маркета для продавцов](https://yandex.ru/support/marketplace/orders/fbs/process.html#acceptance).
   *
   * Как передавать упаковки
   *
   * Передавайте количество упаковок, которые вы везете в отгрузке, а не сумму грузомест по заказам.
   *
   * **Пример:** в отгрузке 2 заказа, в каждом по 5 грузомест. Если вы везете их в 2 палетах — передайте в запросе `2`, а не `10`.
   *
   * Получить PDF-файл с ярлыками для упаковок можно с помощью метода [GET v2/campaigns/{campaignId}/first-mile/shipments/{shipmentId}/pallet/labels](../../reference/shipments/downloadShipmentPalletLabels.md).
   *
   * PUT /v2/campaigns/{campaignId}/first-mile/shipments/{shipmentId}/pallets
   *
   * Разделы YM: shipments, fbs.
   *
   * @see https://yandex.ru/dev/market/partner-api/doc/ru/
   */
  readonly setShipmentPalletsCount: (
    input: SetShipmentPalletsCountInput,
    options?: YmRequestOptions,
  ) => Promise<SetShipmentPalletsCountResponse>;
  /**
   * Ярлыки для доверительной приемки
   *
   * PDF-файл с ярлыками на каждую упаковку в отгрузке для доверительной приемки. Подробнее о таком виде приемки читайте в [Справке Маркета для продавцов](https://yandex.ru/support/marketplace/orders/fbs/process.html#acceptance).
   *
   * Распечатайте по несколько копий каждого ярлыка: на одну упаковку нужно наклеить минимум 2 ярлыка с разных сторон.
   *
   * Количество упаковок в отгрузке передается в методе [PUT v2/campaigns/{campaignId}/first-mile/shipments/{shipmentId}/pallets](../../reference/shipments/setShipmentPalletsCount.md).
   *
   * GET /v2/campaigns/{campaignId}/first-mile/shipments/{shipmentId}/pallet/labels
   *
   * Разделы YM: shipments, fbs.
   *
   * @see https://yandex.ru/dev/market/partner-api/doc/ru/
   */
  readonly downloadShipmentPalletLabels: (
    input: DownloadShipmentPalletLabelsInput,
    options?: YmRequestOptions,
  ) => Promise<DownloadShipmentPalletLabelsResponse>;
  /**
   * Получение информации о нескольких отгрузках
   *
   * Возвращает информацию об отгрузках по заданным параметрам:
   *
   * * дате;
   * * статусу;
   * * идентификаторам заказов.
   *
   * Результаты возвращаются постранично.
   *
   * PUT /v2/campaigns/{campaignId}/first-mile/shipments
   *
   * Разделы YM: shipments, fbs.
   *
   * @see https://yandex.ru/dev/market/partner-api/doc/ru/
   */
  readonly searchShipments: (
    input: SearchShipmentsInput,
    options?: YmRequestOptions,
  ) => Promise<SearchShipmentsResponse>;
  /**
   * Перенос заказов в следующую отгрузку
   *
   * Переносит указанные заказы из указанной отгрузки в следующую отгрузку. [Что такое отгрузка?](https://yandex.ru/support/marketplace/orders/fbs/process.html#ship)
   *
   * Используйте этот запрос, если не успеваете собрать и упаковать заказы вовремя.
   *
   * Такие переносы снижают индекс качества магазина
   *
   * Этот запрос предназначен для исключительных случаев. Если вы будете переносить заказы слишком часто, магазин столкнется с ограничениями. [Что за ограничения?](https://yandex.ru/support/marketplace/quality/score/fbs.html)
   *
   * Переносить заказы можно, если до формирования отгрузки осталось больше получаса.
   *
   * Перенос происходит не мгновенно, а занимает несколько минут.
   *
   * POST /v2/campaigns/{campaignId}/first-mile/shipments/{shipmentId}/orders/transfer
   *
   * Разделы YM: shipments, fbs.
   *
   * @see https://yandex.ru/dev/market/partner-api/doc/ru/
   */
  readonly transferOrdersFromShipment: (
    input: TransferOrdersFromShipmentInput,
    options?: YmRequestOptions,
  ) => Promise<TransferOrdersFromShipmentResponse>;
}

export interface YmStocksApi {
  /**
   * Передача информации об остатках
   *
   * Передает данные об остатках товаров на витрине.
   *
   * Когда использовать этот метод
   *
   * Метод актуален только для кабинетов с группами складов. Если в кабинете нет групп складов, используйте метод [POST v3/businesses/{businessId}/offers/stocks/update](../../reference/stocks/updateStocksOnPartnerWarehouses.md). [Что такое группы складов и зачем они нужны](https://yandex.ru/support/marketplace/assortment/operations/stocks.html#unified-stocks).
   *
   * Для группы складов передавайте остатки только для **одного любого склада**. Информация для остальных складов в этой группе обновится автоматически.
   *
   * Обязательно указывайте SKU **в точности** так, как он указан в каталоге. Например, _557722_ и _0557722_ — это два разных SKU.
   *
   * Данные в каталоге обновляются не мгновенно
   *
   * Это занимает до нескольких минут.
   *
   * PUT /v2/campaigns/{campaignId}/offers/stocks
   *
   * Разделы YM: stocks, fbs, dbs, express.
   *
   * @see https://yandex.ru/dev/market/partner-api/doc/ru/
   */
  readonly updateStocks: (
    input: UpdateStocksInput,
    options?: YmRequestOptions,
  ) => Promise<UpdateStocksResponse>;
  /**
   * Информация об остатках и оборачиваемости
   *
   * Возвращает данные об остатках товаров (для всех моделей) и об [оборачиваемости](*turnover) товаров (для модели FBY).
   *
   * Когда использовать этот метод
   *
   * Метод актуален:
   *
   * * для моделей FBY и LaaS;
   * * для моделей FBS, DBS и Экспресс, если в кабинете есть группы складов.
   *
   * Если в кабинете нет групп складов и вы работаете с моделями FBS, DBS или Экспресс, используйте метод [POST v3/businesses/{businessId}/offers/stocks](../../reference/stocks/getStocksOnPartnerWarehouses.md). [Что такое группы складов и зачем они нужны](https://yandex.ru/support/marketplace/assortment/operations/stocks.html#unified-stocks).
   *
   * По умолчанию данные по оборачивамости не возращаются
   *
   * Чтобы они были в ответе, передавайте `true` в поле `withTurnover`.
   *
   * **Для моделей FBY и LaaS:** информация об остатках может возвращаться с нескольких складов Маркета, у которых будут разные `warehouseId`. Получить список складов Маркета можно с помощью метода [GET v2/warehouses](../../reference/warehouses/getFulfillmentWarehouses.md).
   *
   * **Для модели FBS:** в ответе может вернуться не только партнерский склад, но и склад возвратов Маркета. Это возможно, если возврат поступил в указанную продавцом точку возвратов и долго не был забран.
   *
   * [//]: <> (turnover: Среднее количество дней, за которое товар продается. Подробно об оборачиваемости рассказано в Справке Маркета для продавцов https://yandex.ru/support/marketplace/analytics/turnover.html.)
   *
   * POST /v2/campaigns/{campaignId}/offers/stocks
   *
   * Разделы YM: stocks, fby, fbs, dbs, express, laas.
   *
   * @see https://yandex.ru/dev/market/partner-api/doc/ru/
   */
  readonly getStocks: (
    input: GetStocksInput,
    options?: YmRequestOptions,
  ) => Promise<GetStocksResponse>;
  /**
   * Передача информации об остатках
   *
   * Передает данные об остатках товаров на витрине.
   *
   * Обязательно указывайте SKU **в точности** так, как он указан в каталоге. Например, _557722_ и _0557722_ — это два разных SKU.
   *
   * Данные в каталоге обновляются не мгновенно
   *
   * Это занимает до нескольких минут.
   *
   * Метод подходит, только если в кабинете нет групп складов
   *
   * Если в кабинете есть группы складов, используйте метод [PUT v2/campaigns/{campaignId}/offers/stocks](../../reference/stocks/updateStocks.md). [Что такое группы складов и зачем они нужны](https://yandex.ru/support/marketplace/assortment/operations/stocks.html#unified-stocks).
   *
   * POST /v3/businesses/{businessId}/offers/stocks/update
   *
   * Разделы YM: stocks, fbs, dbs, express.
   *
   * @see https://yandex.ru/dev/market/partner-api/doc/ru/
   */
  readonly updateStocksOnPartnerWarehouses: (
    input: UpdateStocksOnPartnerWarehousesInput,
    options?: YmRequestOptions,
  ) => Promise<UpdateStocksOnPartnerWarehousesResponse>;
  /**
   * Информация об остатках
   *
   * Возвращает данные об остатках товаров на складе кабинета.
   *
   * Метод подходит, только если в кабинете нет групп складов
   *
   * Если в кабинете есть группы складов, используйте метод [POST v2/campaigns/{campaignId}/offers/stocks](../../reference/stocks/getStocks.md). [Что такое группы складов и зачем они нужны](https://yandex.ru/support/marketplace/assortment/operations/stocks.html#unified-stocks).
   *
   * POST /v3/businesses/{businessId}/offers/stocks
   *
   * Разделы YM: stocks, fbs, dbs, express.
   *
   * @see https://yandex.ru/dev/market/partner-api/doc/ru/
   */
  readonly getStocksOnPartnerWarehouses: (
    input: GetStocksOnPartnerWarehousesInput,
    options?: YmRequestOptions,
  ) => Promise<GetStocksOnPartnerWarehousesResponse>;
}

export interface YmSupplyRequestsApi {
  /**
   * Получение информации о заявках на поставку, вывоз и утилизацию
   *
   * По указанным фильтрам возвращает заявки на поставку, вывоз и утилизацию, а также информацию по ним.
   *
   * POST /v2/campaigns/{campaignId}/supply-requests
   *
   * Разделы YM: supply-requests, fby, laas.
   *
   * @see https://yandex.ru/dev/market/partner-api/doc/ru/
   */
  readonly getSupplyRequests: (
    input: GetSupplyRequestsInput,
    options?: YmRequestOptions,
  ) => Promise<GetSupplyRequestsResponse>;
  /**
   * Получение товаров в заявке на поставку, вывоз или утилизацию
   *
   * Возвращает список товаров в заявке и информацию по ним.
   *
   * POST /v2/campaigns/{campaignId}/supply-requests/items
   *
   * Разделы YM: supply-requests, fby, laas.
   *
   * @see https://yandex.ru/dev/market/partner-api/doc/ru/
   */
  readonly getSupplyRequestItems: (
    input: GetSupplyRequestItemsInput,
    options?: YmRequestOptions,
  ) => Promise<GetSupplyRequestItemsResponse>;
  /**
   * Получение документов по заявке на поставку, вывоз или утилизацию
   *
   * Возвращает документы по заявке.
   *
   * POST /v2/campaigns/{campaignId}/supply-requests/documents
   *
   * Разделы YM: supply-requests, fby, laas.
   *
   * @see https://yandex.ru/dev/market/partner-api/doc/ru/
   */
  readonly getSupplyRequestDocuments: (
    input: GetSupplyRequestDocumentsInput,
    options?: YmRequestOptions,
  ) => Promise<GetSupplyRequestDocumentsResponse>;
}

export interface YmTariffsApi {
  /**
   * Калькулятор стоимости услуг
   *
   * Рассчитывает стоимость услуг Маркета для товаров с заданными параметрами. Порядок товаров в запросе и ответе сохраняется, чтобы определить,
   * для какого товара рассчитана стоимость услуги.
   *
   * Обратите внимание: калькулятор осуществляет примерные расчеты. Финальная стоимость для каждого заказа зависит от предоставленных услуг.
   *
   * Если у вас оформлена подписка, сниженный тариф применится в расчетах. Подробнее о подписке для продавцов читайте [в Справке Маркета для продавцов](https://yandex.ru/support/marketplace/ru/marketing/subscription).
   *
   * В запросе можно указать либо параметр `campaignId`, либо `sellingProgram`. Совместное использование параметров приведет к ошибке.
   *
   * POST /v2/tariffs/calculate
   *
   * Разделы YM: tariffs, fbs, fby, dbs, express.
   *
   * @see https://yandex.ru/dev/market/partner-api/doc/ru/
   */
  readonly calculateTariffs: (
    input: CalculateTariffsInput,
    options?: YmRequestOptions,
  ) => Promise<CalculateTariffsResponse>;
}

export interface YmWarehousesApi {
  /**
   * Список складов и групп складов
   *
   * Возвращает список складов и, если склады объединены, список групп складов. [Что такое группы складов и зачем они нужны](https://yandex.ru/support/marketplace/assortment/operations/stocks.html#unified-stocks)
   *
   * Среди прочего запрос позволяет определить идентификатор, который нужно использовать при передаче остатков для группы складов.
   *
   * GET /v2/businesses/{businessId}/warehouses
   *
   * Разделы YM: warehouses, fbs, dbs, express.
   *
   * @see https://yandex.ru/dev/market/partner-api/doc/ru/
   *
   * @deprecated Метод помечен устаревшим в OpenAPI YM (деградация с 2027-01-18, отключение 2027-04-05. Замена: `ym.warehouses.getPagedWarehouses(...)` для `POST /v2/businesses/{businessId}/warehouses`.
   */
  readonly getWarehouses: (
    input: GetWarehousesInput,
    options?: YmRequestOptions,
  ) => Promise<GetWarehousesResponse>;
  /**
   * Список складов
   *
   * Возвращает список складов и информацию о них.
   *
   * Когда использовать этот метод
   *
   * Метод актуален для кабинетов с группами складов. Если в кабинете нет групп складов, используйте метод [POST v3/businesses/{businessId}/warehouses](../../reference/warehouses/getPartnerWarehouses.md). [Что такое группы складов и зачем они нужны](https://yandex.ru/support/marketplace/assortment/operations/stocks.html#unified-stocks).
   *
   * POST /v2/businesses/{businessId}/warehouses
   *
   * Разделы YM: warehouses, fbs, dbs, express.
   *
   * @see https://yandex.ru/dev/market/partner-api/doc/ru/
   */
  readonly getPagedWarehouses: (
    input: GetPagedWarehousesInput,
    options?: YmRequestOptions,
  ) => Promise<GetPagedWarehousesResponse>;
  /**
   * Список складов
   *
   * Возвращает список складов кабинета и информацию о них.
   *
   * Для каждого склада возвращается список моделей работы (FBS, DBS, Экспресс) и доступность API для каждой модели.
   *
   * Метод подходит, только если в кабинете нет групп складов
   *
   * Метод возвращает только отдельные склады и не возвращает группы складов. Если в кабинете есть группы складов, используйте метод [POST v2/businesses/{businessId}/warehouses](../../reference/warehouses/getPagedWarehouses.md). [Что такое группы складов и зачем они нужны](https://yandex.ru/support/marketplace/assortment/operations/stocks.html#unified-stocks).
   *
   * POST /v3/businesses/{businessId}/warehouses
   *
   * Разделы YM: warehouses, fbs, dbs, express.
   *
   * @see https://yandex.ru/dev/market/partner-api/doc/ru/
   */
  readonly getPartnerWarehouses: (
    input: GetPartnerWarehousesInput,
    options?: YmRequestOptions,
  ) => Promise<GetPartnerWarehousesResponse>;
  /**
   * Идентификаторы фулфилмент-складов Маркета
   *
   * Возвращает список фулфилмент-складов Маркета с их идентификаторами.
   *
   * GET /v2/warehouses
   *
   * Разделы YM: warehouses, fby, laas.
   *
   * @see https://yandex.ru/dev/market/partner-api/doc/ru/
   */
  readonly getFulfillmentWarehouses: (
    input?: GetFulfillmentWarehousesInput,
    options?: YmRequestOptions,
  ) => Promise<GetFulfillmentWarehousesResponse>;
  /**
   * Изменение статуса склада
   *
   * Отключает или включает склад.
   *
   * После отключения склада товары, которые находятся на нем, скрываются через 15 минут. После включения они возвращаются на витрину через 15 минут, а если склад был выключен 30 дней или дольше — через 4 часа.
   *
   * POST /v2/campaigns/{campaignId}/warehouse/status
   *
   * Разделы YM: warehouses, fbs, dbs, express.
   *
   * @see https://yandex.ru/dev/market/partner-api/doc/ru/
   *
   * @deprecated Метод помечен устаревшим в OpenAPI YM (деградация с 2027-01-18, отключение 2027-04-05. Замена: `ym.warehouses.updateWarehouseModelStatus(...)` для `POST /v3/businesses/{businessId}/warehouse/models/status`.
   */
  readonly updateWarehouseStatus: (
    input: UpdateWarehouseStatusInput,
    options?: YmRequestOptions,
  ) => Promise<UpdateWarehouseStatusResponse>;
  /**
   * Включение/выключение модели работы склада
   *
   * Отключает или включает модель работы (FBS, DBS или Экспресс) для указанного склада.
   *
   * После отключения модели товары, которые работают по ней на данном складе, скрываются через 15 минут. После включения они возвращаются на витрину через 15 минут, а если модель была выключена 30 дней или дольше — через 4 часа.
   *
   * POST /v3/businesses/{businessId}/warehouse/models/status
   *
   * Разделы YM: warehouses, fbs, dbs, express.
   *
   * @see https://yandex.ru/dev/market/partner-api/doc/ru/
   */
  readonly updateWarehouseModelStatus: (
    input: UpdateWarehouseModelStatusInput,
    options?: YmRequestOptions,
  ) => Promise<UpdateWarehouseModelStatusResponse>;
}

export interface YmDomainApi {
  readonly auth: YmAuthApi;
  readonly bids: YmBidsApi;
  readonly businesses: YmBusinessesApi;
  readonly businessOfferMappings: YmBusinessOfferMappingsApi;
  readonly campaigns: YmCampaignsApi;
  readonly categories: YmCategoriesApi;
  readonly chats: YmChatsApi;
  readonly content: YmContentApi;
  readonly deliveryOptions: YmDeliveryOptionsApi;
  readonly deliveryServices: YmDeliveryServicesApi;
  readonly goodsFeedback: YmGoodsFeedbackApi;
  readonly goodsQuestions: YmGoodsQuestionsApi;
  readonly goodsStats: YmGoodsStatsApi;
  readonly hiddenOffers: YmHiddenOffersApi;
  readonly logisticPoints: YmLogisticPointsApi;
  readonly offers: YmOffersApi;
  readonly operations: YmOperationsApi;
  readonly orderBusinessInformation: YmOrderBusinessInformationApi;
  readonly orderDelivery: YmOrderDeliveryApi;
  readonly orderLabels: YmOrderLabelsApi;
  readonly orders: YmOrdersApi;
  readonly ordersStats: YmOrdersStatsApi;
  readonly outletLicenses: YmOutletLicensesApi;
  readonly outlets: YmOutletsApi;
  readonly priceQuarantine: YmPriceQuarantineApi;
  readonly prices: YmPricesApi;
  readonly promos: YmPromosApi;
  readonly ratings: YmRatingsApi;
  readonly regions: YmRegionsApi;
  readonly reports: YmReportsApi;
  readonly returns: YmReturnsApi;
  readonly shipments: YmShipmentsApi;
  readonly stocks: YmStocksApi;
  readonly supplyRequests: YmSupplyRequestsApi;
  readonly tariffs: YmTariffsApi;
  readonly warehouses: YmWarehousesApi;
}

/** @internal */
export function createYmDomainApi(execute: YmOperationExecutor): YmDomainApi {
  return Object.freeze({
    auth: Object.freeze({
      getAuthTokenInfo: (options: YmRequestOptions = {}) =>
        executeGetAuthTokenInfo(execute, options),
    }),
    bids: Object.freeze({
      putBidsForBusiness: (
        input: PutBidsForBusinessInput,
        options: YmRequestOptions = {},
      ) => executePutBidsForBusiness(execute, input, options),
      putBidsForCampaign: (
        input: PutBidsForCampaignInput,
        options: YmRequestOptions = {},
      ) => executePutBidsForCampaign(execute, input, options),
      getBidsInfoForBusiness: (
        input: GetBidsInfoForBusinessInput,
        options: YmRequestOptions = {},
      ) => executeGetBidsInfoForBusiness(execute, input, options),
      getBidsRecommendations: (
        input: GetBidsRecommendationsInput,
        options: YmRequestOptions = {},
      ) => executeGetBidsRecommendations(execute, input, options),
    }),
    businesses: Object.freeze({
      getBusinessSettings: (
        input: GetBusinessSettingsInput,
        options: YmRequestOptions = {},
      ) => executeGetBusinessSettings(execute, input, options),
    }),
    businessOfferMappings: Object.freeze({
      deleteOffers: (
        input: DeleteOffersInput,
        options: YmRequestOptions = {},
      ) => executeDeleteOffers(execute, input, options),
      getOfferMappings: (
        input: GetOfferMappingsInput,
        options: YmRequestOptions = {},
      ) => executeGetOfferMappings(execute, input, options),
      updateOfferMappings: (
        input: UpdateOfferMappingsInput,
        options: YmRequestOptions = {},
      ) => executeUpdateOfferMappings(execute, input, options),
      addOffersToArchive: (
        input: AddOffersToArchiveInput,
        options: YmRequestOptions = {},
      ) => executeAddOffersToArchive(execute, input, options),
      deleteOffersFromArchive: (
        input: DeleteOffersFromArchiveInput,
        options: YmRequestOptions = {},
      ) => executeDeleteOffersFromArchive(execute, input, options),
      generateOfferBarcodes: (
        input: GenerateOfferBarcodesInput,
        options: YmRequestOptions = {},
      ) => executeGenerateOfferBarcodes(execute, input, options),
    }),
    campaigns: Object.freeze({
      getCampaigns: (
        input?: GetCampaignsInput,
        options: YmRequestOptions = {},
      ) => executeGetCampaigns(execute, input, options),
      getCampaign: (input: GetCampaignInput, options: YmRequestOptions = {}) =>
        executeGetCampaign(execute, input, options),
      getCampaignSettings: (
        input: GetCampaignSettingsInput,
        options: YmRequestOptions = {},
      ) => executeGetCampaignSettings(execute, input, options),
    }),
    categories: Object.freeze({
      getCategoriesTree: (
        input?: GetCategoriesTreeInput,
        options: YmRequestOptions = {},
      ) => executeGetCategoriesTree(execute, input, options),
      getCategoriesMaxSaleQuantum: (
        input: GetCategoriesMaxSaleQuantumInput,
        options: YmRequestOptions = {},
      ) => executeGetCategoriesMaxSaleQuantum(execute, input, options),
    }),
    chats: Object.freeze({
      createChat: (input: CreateChatInput, options: YmRequestOptions = {}) =>
        executeCreateChat(execute, input, options),
      getChats: (input: GetChatsInput, options: YmRequestOptions = {}) =>
        executeGetChats(execute, input, options),
      getChat: (input: GetChatInput, options: YmRequestOptions = {}) =>
        executeGetChat(execute, input, options),
      sendFileToChat: (
        input: SendFileToChatInput,
        options: YmRequestOptions = {},
      ) => executeSendFileToChat(execute, input, options),
      sendMessageToChat: (
        input: SendMessageToChatInput,
        options: YmRequestOptions = {},
      ) => executeSendMessageToChat(execute, input, options),
      getChatMessage: (
        input: GetChatMessageInput,
        options: YmRequestOptions = {},
      ) => executeGetChatMessage(execute, input, options),
      getChatHistory: (
        input: GetChatHistoryInput,
        options: YmRequestOptions = {},
      ) => executeGetChatHistory(execute, input, options),
    }),
    content: Object.freeze({
      getCategoryContentParameters: (
        input: GetCategoryContentParametersInput,
        options: YmRequestOptions = {},
      ) => executeGetCategoryContentParameters(execute, input, options),
      getOfferCardsContentStatus: (
        input: GetOfferCardsContentStatusInput,
        options: YmRequestOptions = {},
      ) => executeGetOfferCardsContentStatus(execute, input, options),
      updateOfferContent: (
        input: UpdateOfferContentInput,
        options: YmRequestOptions = {},
      ) => executeUpdateOfferContent(execute, input, options),
    }),
    deliveryOptions: Object.freeze({
      getDeliveryOptions: (
        input: GetDeliveryOptionsInput,
        options: YmRequestOptions = {},
      ) => executeGetDeliveryOptions(execute, input, options),
      getReturnDeliveryOptions: (
        input: GetReturnDeliveryOptionsInput,
        options: YmRequestOptions = {},
      ) => executeGetReturnDeliveryOptions(execute, input, options),
    }),
    deliveryServices: Object.freeze({
      getDeliveryServices: (options: YmRequestOptions = {}) =>
        executeGetDeliveryServices(execute, options),
    }),
    goodsFeedback: Object.freeze({
      getGoodsFeedbacks: (
        input: GetGoodsFeedbacksInput,
        options: YmRequestOptions = {},
      ) => executeGetGoodsFeedbacks(execute, input, options),
      skipGoodsFeedbacksReaction: (
        input: SkipGoodsFeedbacksReactionInput,
        options: YmRequestOptions = {},
      ) => executeSkipGoodsFeedbacksReaction(execute, input, options),
      updateGoodsFeedbackComment: (
        input: UpdateGoodsFeedbackCommentInput,
        options: YmRequestOptions = {},
      ) => executeUpdateGoodsFeedbackComment(execute, input, options),
      deleteGoodsFeedbackComment: (
        input: DeleteGoodsFeedbackCommentInput,
        options: YmRequestOptions = {},
      ) => executeDeleteGoodsFeedbackComment(execute, input, options),
      getGoodsFeedbackComments: (
        input: GetGoodsFeedbackCommentsInput,
        options: YmRequestOptions = {},
      ) => executeGetGoodsFeedbackComments(execute, input, options),
      getGoodsFeedbacksUrbanads: (
        input: GetGoodsFeedbacksUrbanadsInput,
        options: YmRequestOptions = {},
      ) => executeGetGoodsFeedbacksUrbanads(execute, input, options),
    }),
    goodsQuestions: Object.freeze({
      getGoodsQuestions: (
        input: GetGoodsQuestionsInput,
        options: YmRequestOptions = {},
      ) => executeGetGoodsQuestions(execute, input, options),
      getGoodsQuestionAnswers: (
        input: GetGoodsQuestionAnswersInput,
        options: YmRequestOptions = {},
      ) => executeGetGoodsQuestionAnswers(execute, input, options),
      updateGoodsQuestionTextEntity: (
        input: UpdateGoodsQuestionTextEntityInput,
        options: YmRequestOptions = {},
      ) => executeUpdateGoodsQuestionTextEntity(execute, input, options),
    }),
    goodsStats: Object.freeze({
      getGoodsStats: (
        input: GetGoodsStatsInput,
        options: YmRequestOptions = {},
      ) => executeGetGoodsStats(execute, input, options),
    }),
    hiddenOffers: Object.freeze({
      addHiddenOffers: (
        input: AddHiddenOffersInput,
        options: YmRequestOptions = {},
      ) => executeAddHiddenOffers(execute, input, options),
      getHiddenOffers: (
        input: GetHiddenOffersInput,
        options: YmRequestOptions = {},
      ) => executeGetHiddenOffers(execute, input, options),
      deleteHiddenOffers: (
        input: DeleteHiddenOffersInput,
        options: YmRequestOptions = {},
      ) => executeDeleteHiddenOffers(execute, input, options),
    }),
    logisticPoints: Object.freeze({
      getLogisticPoints: (
        input: GetLogisticPointsInput,
        options: YmRequestOptions = {},
      ) => executeGetLogisticPoints(execute, input, options),
    }),
    offers: Object.freeze({
      getCampaignOffers: (
        input: GetCampaignOffersInput,
        options: YmRequestOptions = {},
      ) => executeGetCampaignOffers(execute, input, options),
      updateCampaignOffers: (
        input: UpdateCampaignOffersInput,
        options: YmRequestOptions = {},
      ) => executeUpdateCampaignOffers(execute, input, options),
      deleteCampaignOffers: (
        input: DeleteCampaignOffersInput,
        options: YmRequestOptions = {},
      ) => executeDeleteCampaignOffers(execute, input, options),
      getOfferRecommendations: (
        input: GetOfferRecommendationsInput,
        options: YmRequestOptions = {},
      ) => executeGetOfferRecommendations(execute, input, options),
    }),
    operations: Object.freeze({
      getOperations: (
        input: GetOperationsInput,
        options: YmRequestOptions = {},
      ) => executeGetOperations(execute, input, options),
    }),
    orderBusinessInformation: Object.freeze({
      getOrderBusinessBuyerInfo: (
        input: GetOrderBusinessBuyerInfoInput,
        options: YmRequestOptions = {},
      ) => executeGetOrderBusinessBuyerInfo(execute, input, options),
      getOrderBusinessDocumentsInfo: (
        input: GetOrderBusinessDocumentsInfoInput,
        options: YmRequestOptions = {},
      ) => executeGetOrderBusinessDocumentsInfo(execute, input, options),
    }),
    orderDelivery: Object.freeze({
      setOrderDeliveryDate: (
        input: SetOrderDeliveryDateInput,
        options: YmRequestOptions = {},
      ) => executeSetOrderDeliveryDate(execute, input, options),
      setOrderDeliveryTrackCode: (
        input: SetOrderDeliveryTrackCodeInput,
        options: YmRequestOptions = {},
      ) => executeSetOrderDeliveryTrackCode(execute, input, options),
      getOrderBuyerInfo: (
        input: GetOrderBuyerInfoInput,
        options: YmRequestOptions = {},
      ) => executeGetOrderBuyerInfo(execute, input, options),
      verifyOrderEac: (
        input: VerifyOrderEacInput,
        options: YmRequestOptions = {},
      ) => executeVerifyOrderEac(execute, input, options),
      updateOrderStorageLimit: (
        input: UpdateOrderStorageLimitInput,
        options: YmRequestOptions = {},
      ) => executeUpdateOrderStorageLimit(execute, input, options),
    }),
    orderLabels: Object.freeze({
      generateOrderLabel: (
        input: GenerateOrderLabelInput,
        options: YmRequestOptions = {},
      ) => executeGenerateOrderLabel(execute, input, options),
      generateOrderLabels: (
        input: GenerateOrderLabelsInput,
        options: YmRequestOptions = {},
      ) => executeGenerateOrderLabels(execute, input, options),
      getOrderLabelsData: (
        input: GetOrderLabelsDataInput,
        options: YmRequestOptions = {},
      ) => executeGetOrderLabelsData(execute, input, options),
    }),
    orders: Object.freeze({
      getOrder: (input: GetOrderInput, options: YmRequestOptions = {}) =>
        executeGetOrder(execute, input, options),
      getOrders: (input: GetOrdersInput, options: YmRequestOptions = {}) =>
        executeGetOrders(execute, input, options),
      getBusinessOrders: (
        input: GetBusinessOrdersInput,
        options: YmRequestOptions = {},
      ) => executeGetBusinessOrders(execute, input, options),
      provideOrderItemIdentifiers: (
        input: ProvideOrderItemIdentifiersInput,
        options: YmRequestOptions = {},
      ) => executeProvideOrderItemIdentifiers(execute, input, options),
      updateOrderItems: (
        input: UpdateOrderItemsInput,
        options: YmRequestOptions = {},
      ) => executeUpdateOrderItems(execute, input, options),
      updateOrderStatus: (
        input: UpdateOrderStatusInput,
        options: YmRequestOptions = {},
      ) => executeUpdateOrderStatus(execute, input, options),
      updateOrderStatuses: (
        input: UpdateOrderStatusesInput,
        options: YmRequestOptions = {},
      ) => executeUpdateOrderStatuses(execute, input, options),
      setOrderShipmentBoxes: (
        input: SetOrderShipmentBoxesInput,
        options: YmRequestOptions = {},
      ) => executeSetOrderShipmentBoxes(execute, input, options),
      acceptOrderCancellation: (
        input: AcceptOrderCancellationInput,
        options: YmRequestOptions = {},
      ) => executeAcceptOrderCancellation(execute, input, options),
      provideOrderDigitalCodes: (
        input: ProvideOrderDigitalCodesInput,
        options: YmRequestOptions = {},
      ) => executeProvideOrderDigitalCodes(execute, input, options),
      setOrderBoxLayout: (
        input: SetOrderBoxLayoutInput,
        options: YmRequestOptions = {},
      ) => executeSetOrderBoxLayout(execute, input, options),
      updateExternalOrderId: (
        input: UpdateExternalOrderIdInput,
        options: YmRequestOptions = {},
      ) => executeUpdateExternalOrderId(execute, input, options),
      getOrderIdentifiersStatus: (
        input: GetOrderIdentifiersStatusInput,
        options: YmRequestOptions = {},
      ) => executeGetOrderIdentifiersStatus(execute, input, options),
      createOrder: (input: CreateOrderInput, options: YmRequestOptions = {}) =>
        executeCreateOrder(execute, input, options),
      updateOrder: (input: UpdateOrderInput, options: YmRequestOptions = {}) =>
        executeUpdateOrder(execute, input, options),
      getOrderUpdateOptions: (
        input: GetOrderUpdateOptionsInput,
        options: YmRequestOptions = {},
      ) => executeGetOrderUpdateOptions(execute, input, options),
    }),
    ordersStats: Object.freeze({
      getOrdersStats: (
        input: GetOrdersStatsInput,
        options: YmRequestOptions = {},
      ) => executeGetOrdersStats(execute, input, options),
    }),
    outletLicenses: Object.freeze({
      getOutletLicenses: (
        input: GetOutletLicensesInput,
        options: YmRequestOptions = {},
      ) => executeGetOutletLicenses(execute, input, options),
      deleteOutletLicenses: (
        input: DeleteOutletLicensesInput,
        options: YmRequestOptions = {},
      ) => executeDeleteOutletLicenses(execute, input, options),
      updateOutletLicenses: (
        input: UpdateOutletLicensesInput,
        options: YmRequestOptions = {},
      ) => executeUpdateOutletLicenses(execute, input, options),
    }),
    outlets: Object.freeze({
      createOutlet: (
        input: CreateOutletInput,
        options: YmRequestOptions = {},
      ) => executeCreateOutlet(execute, input, options),
      getOutlets: (input: GetOutletsInput, options: YmRequestOptions = {}) =>
        executeGetOutlets(execute, input, options),
      updateOutlet: (
        input: UpdateOutletInput,
        options: YmRequestOptions = {},
      ) => executeUpdateOutlet(execute, input, options),
      getOutlet: (input: GetOutletInput, options: YmRequestOptions = {}) =>
        executeGetOutlet(execute, input, options),
      deleteOutlet: (
        input: DeleteOutletInput,
        options: YmRequestOptions = {},
      ) => executeDeleteOutlet(execute, input, options),
    }),
    priceQuarantine: Object.freeze({
      getBusinessQuarantineOffers: (
        input: GetBusinessQuarantineOffersInput,
        options: YmRequestOptions = {},
      ) => executeGetBusinessQuarantineOffers(execute, input, options),
      confirmBusinessPrices: (
        input: ConfirmBusinessPricesInput,
        options: YmRequestOptions = {},
      ) => executeConfirmBusinessPrices(execute, input, options),
      getCampaignQuarantineOffers: (
        input: GetCampaignQuarantineOffersInput,
        options: YmRequestOptions = {},
      ) => executeGetCampaignQuarantineOffers(execute, input, options),
      confirmCampaignPrices: (
        input: ConfirmCampaignPricesInput,
        options: YmRequestOptions = {},
      ) => executeConfirmCampaignPrices(execute, input, options),
    }),
    prices: Object.freeze({
      updateBusinessPrices: (
        input: UpdateBusinessPricesInput,
        options: YmRequestOptions = {},
      ) => executeUpdateBusinessPrices(execute, input, options),
      updatePrices: (
        input: UpdatePricesInput,
        options: YmRequestOptions = {},
      ) => executeUpdatePrices(execute, input, options),
      getPrices: (input: GetPricesInput, options: YmRequestOptions = {}) =>
        executeGetPrices(execute, input, options),
      getPricesByOfferIds: (
        input: GetPricesByOfferIdsInput,
        options: YmRequestOptions = {},
      ) => executeGetPricesByOfferIds(execute, input, options),
      getDefaultPrices: (
        input: GetDefaultPricesInput,
        options: YmRequestOptions = {},
      ) => executeGetDefaultPrices(execute, input, options),
    }),
    promos: Object.freeze({
      getPromos: (input: GetPromosInput, options: YmRequestOptions = {}) =>
        executeGetPromos(execute, input, options),
      getPromoOffers: (
        input: GetPromoOffersInput,
        options: YmRequestOptions = {},
      ) => executeGetPromoOffers(execute, input, options),
      updatePromoOffers: (
        input: UpdatePromoOffersInput,
        options: YmRequestOptions = {},
      ) => executeUpdatePromoOffers(execute, input, options),
      deletePromoOffers: (
        input: DeletePromoOffersInput,
        options: YmRequestOptions = {},
      ) => executeDeletePromoOffers(execute, input, options),
    }),
    ratings: Object.freeze({
      getQualityRatings: (
        input: GetQualityRatingsInput,
        options: YmRequestOptions = {},
      ) => executeGetQualityRatings(execute, input, options),
      getQualityRatingDetails: (
        input: GetQualityRatingDetailsInput,
        options: YmRequestOptions = {},
      ) => executeGetQualityRatingDetails(execute, input, options),
    }),
    regions: Object.freeze({
      searchRegionsByName: (
        input: SearchRegionsByNameInput,
        options: YmRequestOptions = {},
      ) => executeSearchRegionsByName(execute, input, options),
      searchRegionsById: (
        input: SearchRegionsByIdInput,
        options: YmRequestOptions = {},
      ) => executeSearchRegionsById(execute, input, options),
      searchRegionChildren: (
        input: SearchRegionChildrenInput,
        options: YmRequestOptions = {},
      ) => executeSearchRegionChildren(execute, input, options),
      getRegionsCodes: (options: YmRequestOptions = {}) =>
        executeGetRegionsCodes(execute, options),
    }),
    reports: Object.freeze({
      getReportInfo: (
        input: GetReportInfoInput,
        options: YmRequestOptions = {},
      ) => executeGetReportInfo(execute, input, options),
      generateUnitedNettingReport: (
        input: GenerateUnitedNettingReportInput,
        options: YmRequestOptions = {},
      ) => executeGenerateUnitedNettingReport(execute, input, options),
      generateUnitedMarketplaceServicesReport: (
        input: GenerateUnitedMarketplaceServicesReportInput,
        options: YmRequestOptions = {},
      ) =>
        executeGenerateUnitedMarketplaceServicesReport(execute, input, options),
      generateUnitedOrdersReport: (
        input: GenerateUnitedOrdersReportInput,
        options: YmRequestOptions = {},
      ) => executeGenerateUnitedOrdersReport(execute, input, options),
      generateUnitedReturnsReport: (
        input: GenerateUnitedReturnsReportInput,
        options: YmRequestOptions = {},
      ) => executeGenerateUnitedReturnsReport(execute, input, options),
      generateGoodsRealizationReport: (
        input: GenerateGoodsRealizationReportInput,
        options: YmRequestOptions = {},
      ) => executeGenerateGoodsRealizationReport(execute, input, options),
      generateStocksOnWarehousesReport: (
        input: GenerateStocksOnWarehousesReportInput,
        options: YmRequestOptions = {},
      ) => executeGenerateStocksOnWarehousesReport(execute, input, options),
      generateStocksReport: (
        input: GenerateStocksReportInput,
        options: YmRequestOptions = {},
      ) => executeGenerateStocksReport(execute, input, options),
      generateGoodsMovementReport: (
        input: GenerateGoodsMovementReportInput,
        options: YmRequestOptions = {},
      ) => executeGenerateGoodsMovementReport(execute, input, options),
      generateShowsSalesReport: (
        input: GenerateShowsSalesReportInput,
        options: YmRequestOptions = {},
      ) => executeGenerateShowsSalesReport(execute, input, options),
      generateCompetitorsPositionReport: (
        input: GenerateCompetitorsPositionReportInput,
        options: YmRequestOptions = {},
      ) => executeGenerateCompetitorsPositionReport(execute, input, options),
      generateGoodsPricesReport: (
        input: GenerateGoodsPricesReportInput,
        options: YmRequestOptions = {},
      ) => executeGenerateGoodsPricesReport(execute, input, options),
      generateGoodsTurnoverReport: (
        input: GenerateGoodsTurnoverReportInput,
        options: YmRequestOptions = {},
      ) => executeGenerateGoodsTurnoverReport(execute, input, options),
      generateBoostConsolidatedReport: (
        input: GenerateBoostConsolidatedReportInput,
        options: YmRequestOptions = {},
      ) => executeGenerateBoostConsolidatedReport(execute, input, options),
      generateShipmentListDocumentReport: (
        input: GenerateShipmentListDocumentReportInput,
        options: YmRequestOptions = {},
      ) => executeGenerateShipmentListDocumentReport(execute, input, options),
      generateShelfsStatisticsReport: (
        input: GenerateShelfsStatisticsReportInput,
        options: YmRequestOptions = {},
      ) => executeGenerateShelfsStatisticsReport(execute, input, options),
      generateMassOrderLabelsReport: (
        input: GenerateMassOrderLabelsReportInput,
        options: YmRequestOptions = {},
      ) => executeGenerateMassOrderLabelsReport(execute, input, options),
      generateGoodsFeedbackReport: (
        input: GenerateGoodsFeedbackReportInput,
        options: YmRequestOptions = {},
      ) => executeGenerateGoodsFeedbackReport(execute, input, options),
      generateShowsBoostReport: (
        input: GenerateShowsBoostReportInput,
        options: YmRequestOptions = {},
      ) => executeGenerateShowsBoostReport(execute, input, options),
      generateBannersStatisticsReport: (
        input: GenerateBannersStatisticsReportInput,
        options: YmRequestOptions = {},
      ) => executeGenerateBannersStatisticsReport(execute, input, options),
      generateClosureDocumentsReport: (
        input: GenerateClosureDocumentsReportInput,
        options: YmRequestOptions = {},
      ) => executeGenerateClosureDocumentsReport(execute, input, options),
      generateJewelryFiscalReport: (
        input: GenerateJewelryFiscalReportInput,
        options: YmRequestOptions = {},
      ) => executeGenerateJewelryFiscalReport(execute, input, options),
      generateSalesGeographyReport: (
        input: GenerateSalesGeographyReportInput,
        options: YmRequestOptions = {},
      ) => executeGenerateSalesGeographyReport(execute, input, options),
      generateKeyIndicatorsReport: (
        input: GenerateKeyIndicatorsReportInput,
        options: YmRequestOptions = {},
      ) => executeGenerateKeyIndicatorsReport(execute, input, options),
      generateClosureDocumentsDetalizationReport: (
        input: GenerateClosureDocumentsDetalizationReportInput,
        options: YmRequestOptions = {},
      ) =>
        executeGenerateClosureDocumentsDetalizationReport(
          execute,
          input,
          options,
        ),
      generateMarketingDetalizationReport: (
        input: GenerateMarketingDetalizationReportInput,
        options: YmRequestOptions = {},
      ) => executeGenerateMarketingDetalizationReport(execute, input, options),
      generateBarcodesReport: (
        input: GenerateBarcodesReportInput,
        options: YmRequestOptions = {},
      ) => executeGenerateBarcodesReport(execute, input, options),
    }),
    returns: Object.freeze({
      getReturns: (input: GetReturnsInput, options: YmRequestOptions = {}) =>
        executeGetReturns(execute, input, options),
      getReturn: (input: GetReturnInput, options: YmRequestOptions = {}) =>
        executeGetReturn(execute, input, options),
      setReturnDecision: (
        input: SetReturnDecisionInput,
        options: YmRequestOptions = {},
      ) => executeSetReturnDecision(execute, input, options),
      submitReturnDecision: (
        input: SubmitReturnDecisionInput,
        options: YmRequestOptions = {},
      ) => executeSubmitReturnDecision(execute, input, options),
      getReturnAvailableDecisions: (
        input: GetReturnAvailableDecisionsInput,
        options: YmRequestOptions = {},
      ) => executeGetReturnAvailableDecisions(execute, input, options),
      getReturnApplication: (
        input: GetReturnApplicationInput,
        options: YmRequestOptions = {},
      ) => executeGetReturnApplication(execute, input, options),
      getReturnPhoto: (
        input: GetReturnPhotoInput,
        options: YmRequestOptions = {},
      ) => executeGetReturnPhoto(execute, input, options),
      createReturn: (
        input: CreateReturnInput,
        options: YmRequestOptions = {},
      ) => executeCreateReturn(execute, input, options),
      cancelReturn: (
        input: CancelReturnInput,
        options: YmRequestOptions = {},
      ) => executeCancelReturn(execute, input, options),
    }),
    shipments: Object.freeze({
      downloadShipmentReceptionTransferAct: (
        input: DownloadShipmentReceptionTransferActInput,
        options: YmRequestOptions = {},
      ) => executeDownloadShipmentReceptionTransferAct(execute, input, options),
      getShipment: (input: GetShipmentInput, options: YmRequestOptions = {}) =>
        executeGetShipment(execute, input, options),
      getShipmentOrdersInfo: (
        input: GetShipmentOrdersInfoInput,
        options: YmRequestOptions = {},
      ) => executeGetShipmentOrdersInfo(execute, input, options),
      confirmShipment: (
        input: ConfirmShipmentInput,
        options: YmRequestOptions = {},
      ) => executeConfirmShipment(execute, input, options),
      downloadShipmentAct: (
        input: DownloadShipmentActInput,
        options: YmRequestOptions = {},
      ) => executeDownloadShipmentAct(execute, input, options),
      downloadShipmentInboundAct: (
        input: DownloadShipmentInboundActInput,
        options: YmRequestOptions = {},
      ) => executeDownloadShipmentInboundAct(execute, input, options),
      downloadShipmentTransportationWaybill: (
        input: DownloadShipmentTransportationWaybillInput,
        options: YmRequestOptions = {},
      ) =>
        executeDownloadShipmentTransportationWaybill(execute, input, options),
      downloadShipmentDiscrepancyAct: (
        input: DownloadShipmentDiscrepancyActInput,
        options: YmRequestOptions = {},
      ) => executeDownloadShipmentDiscrepancyAct(execute, input, options),
      setShipmentPalletsCount: (
        input: SetShipmentPalletsCountInput,
        options: YmRequestOptions = {},
      ) => executeSetShipmentPalletsCount(execute, input, options),
      downloadShipmentPalletLabels: (
        input: DownloadShipmentPalletLabelsInput,
        options: YmRequestOptions = {},
      ) => executeDownloadShipmentPalletLabels(execute, input, options),
      searchShipments: (
        input: SearchShipmentsInput,
        options: YmRequestOptions = {},
      ) => executeSearchShipments(execute, input, options),
      transferOrdersFromShipment: (
        input: TransferOrdersFromShipmentInput,
        options: YmRequestOptions = {},
      ) => executeTransferOrdersFromShipment(execute, input, options),
    }),
    stocks: Object.freeze({
      updateStocks: (
        input: UpdateStocksInput,
        options: YmRequestOptions = {},
      ) => executeUpdateStocks(execute, input, options),
      getStocks: (input: GetStocksInput, options: YmRequestOptions = {}) =>
        executeGetStocks(execute, input, options),
      updateStocksOnPartnerWarehouses: (
        input: UpdateStocksOnPartnerWarehousesInput,
        options: YmRequestOptions = {},
      ) => executeUpdateStocksOnPartnerWarehouses(execute, input, options),
      getStocksOnPartnerWarehouses: (
        input: GetStocksOnPartnerWarehousesInput,
        options: YmRequestOptions = {},
      ) => executeGetStocksOnPartnerWarehouses(execute, input, options),
    }),
    supplyRequests: Object.freeze({
      getSupplyRequests: (
        input: GetSupplyRequestsInput,
        options: YmRequestOptions = {},
      ) => executeGetSupplyRequests(execute, input, options),
      getSupplyRequestItems: (
        input: GetSupplyRequestItemsInput,
        options: YmRequestOptions = {},
      ) => executeGetSupplyRequestItems(execute, input, options),
      getSupplyRequestDocuments: (
        input: GetSupplyRequestDocumentsInput,
        options: YmRequestOptions = {},
      ) => executeGetSupplyRequestDocuments(execute, input, options),
    }),
    tariffs: Object.freeze({
      calculateTariffs: (
        input: CalculateTariffsInput,
        options: YmRequestOptions = {},
      ) => executeCalculateTariffs(execute, input, options),
    }),
    warehouses: Object.freeze({
      getWarehouses: (
        input: GetWarehousesInput,
        options: YmRequestOptions = {},
      ) => executeGetWarehouses(execute, input, options),
      getPagedWarehouses: (
        input: GetPagedWarehousesInput,
        options: YmRequestOptions = {},
      ) => executeGetPagedWarehouses(execute, input, options),
      getPartnerWarehouses: (
        input: GetPartnerWarehousesInput,
        options: YmRequestOptions = {},
      ) => executeGetPartnerWarehouses(execute, input, options),
      getFulfillmentWarehouses: (
        input?: GetFulfillmentWarehousesInput,
        options: YmRequestOptions = {},
      ) => executeGetFulfillmentWarehouses(execute, input, options),
      updateWarehouseStatus: (
        input: UpdateWarehouseStatusInput,
        options: YmRequestOptions = {},
      ) => executeUpdateWarehouseStatus(execute, input, options),
      updateWarehouseModelStatus: (
        input: UpdateWarehouseModelStatusInput,
        options: YmRequestOptions = {},
      ) => executeUpdateWarehouseModelStatus(execute, input, options),
    }),
  });
}

export const YM_OPERATION_METADATA = [
  {
    domain: "auth",
    methodName: "getAuthTokenInfo",
    operationId: "getAuthTokenInfo",
    method: "POST",
    path: "/v2/auth/token",
    productionOrigin: "https://api.partner.market.yandex.ru",
    retrySafety: "unsafe",
    resourceId: 256,
    resourceLimit: {
      path: "resp",
      none: { amount: 100, period: "hours", "period-duration": 1 },
      medium: { amount: 100, period: "hours", "period-duration": 1 },
    },
    source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
    verifiedAt: "2026-08-19",
  },
  {
    domain: "bids",
    methodName: "putBidsForBusiness",
    operationId: "putBidsForBusiness",
    method: "PUT",
    path: "/v2/businesses/{businessId}/bids",
    productionOrigin: "https://api.partner.market.yandex.ru",
    retrySafety: "unsafe",
    resourceId: 165,
    resourceLimit: {
      path: "resp",
      none: { amount: 500, period: "minutes", "period-duration": 1 },
      medium: { amount: 1000, period: "minutes", "period-duration": 1 },
    },
    source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
    verifiedAt: "2026-08-19",
  },
  {
    domain: "bids",
    methodName: "putBidsForCampaign",
    operationId: "putBidsForCampaign",
    method: "PUT",
    path: "/v2/campaigns/{campaignId}/bids",
    productionOrigin: "https://api.partner.market.yandex.ru",
    retrySafety: "unsafe",
    resourceId: 166,
    resourceLimit: {
      path: "resp",
      none: { amount: 1000, period: "minutes", "period-duration": 1 },
      medium: { amount: 1000, period: "minutes", "period-duration": 1 },
    },
    source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
    verifiedAt: "2026-08-19",
  },
  {
    domain: "bids",
    methodName: "getBidsInfoForBusiness",
    operationId: "getBidsInfoForBusiness",
    method: "POST",
    path: "/v2/businesses/{businessId}/bids/info",
    productionOrigin: "https://api.partner.market.yandex.ru",
    retrySafety: "unsafe",
    resourceId: 184,
    resourceLimit: {
      path: "resp",
      none: { amount: 500, period: "minutes", "period-duration": 1 },
      medium: { amount: 1000, period: "minutes", "period-duration": 1 },
    },
    source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
    verifiedAt: "2026-08-19",
  },
  {
    domain: "bids",
    methodName: "getBidsRecommendations",
    operationId: "getBidsRecommendations",
    method: "POST",
    path: "/v2/businesses/{businessId}/bids/recommendations",
    productionOrigin: "https://api.partner.market.yandex.ru",
    retrySafety: "unsafe",
    resourceId: 187,
    resourceLimit: {
      path: "resp",
      none: { amount: 500, period: "minutes", "period-duration": 1 },
      medium: { amount: 1000, period: "minutes", "period-duration": 1 },
    },
    source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
    verifiedAt: "2026-08-19",
  },
  {
    domain: "businesses",
    methodName: "getBusinessSettings",
    operationId: "getBusinessSettings",
    method: "POST",
    path: "/v2/businesses/{businessId}/settings",
    productionOrigin: "https://api.partner.market.yandex.ru",
    retrySafety: "unsafe",
    resourceId: 218,
    resourceLimit: {
      path: "resp",
      none: { amount: 100, period: "hours", "period-duration": 1 },
      medium: { amount: 100, period: "hours", "period-duration": 1 },
    },
    source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
    verifiedAt: "2026-08-19",
  },
  {
    domain: "businessOfferMappings",
    methodName: "deleteOffers",
    operationId: "deleteOffers",
    method: "POST",
    path: "/v2/businesses/{businessId}/offer-mappings/delete",
    productionOrigin: "https://api.partner.market.yandex.ru",
    retrySafety: "unsafe",
    resourceId: 171,
    resourceLimit: {
      path: "req.offerIds",
      none: { amount: 5000, period: "minutes", "period-duration": 1 },
      medium: { amount: 10000, period: "minutes", "period-duration": 1 },
    },
    source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
    verifiedAt: "2026-08-19",
  },
  {
    domain: "businessOfferMappings",
    methodName: "getOfferMappings",
    operationId: "getOfferMappings",
    method: "POST",
    path: "/v2/businesses/{businessId}/offer-mappings",
    productionOrigin: "https://api.partner.market.yandex.ru",
    retrySafety: "unsafe",
    resourceId: 169,
    resourceLimit: {
      path: "resp",
      none: { amount: 100, period: "minutes", "period-duration": 1 },
      medium: { amount: 600, period: "minutes", "period-duration": 1 },
    },
    source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
    verifiedAt: "2026-08-19",
  },
  {
    domain: "businessOfferMappings",
    methodName: "updateOfferMappings",
    operationId: "updateOfferMappings",
    method: "POST",
    path: "/v2/businesses/{businessId}/offer-mappings/update",
    productionOrigin: "https://api.partner.market.yandex.ru",
    retrySafety: "unsafe",
    resourceId: 170,
    resourceLimit: {
      path: "req.offerMappings",
      none: { amount: 5000, period: "minutes", "period-duration": 1 },
      medium: { amount: 10000, period: "minutes", "period-duration": 1 },
    },
    source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
    verifiedAt: "2026-08-19",
  },
  {
    domain: "businessOfferMappings",
    methodName: "addOffersToArchive",
    operationId: "addOffersToArchive",
    method: "POST",
    path: "/v2/businesses/{businessId}/offer-mappings/archive",
    productionOrigin: "https://api.partner.market.yandex.ru",
    retrySafety: "unsafe",
    resourceId: 205,
    resourceLimit: {
      path: "req.offerIds",
      none: { amount: 5000, period: "minutes", "period-duration": 1 },
      medium: { amount: 10000, period: "minutes", "period-duration": 1 },
    },
    source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
    verifiedAt: "2026-08-19",
  },
  {
    domain: "businessOfferMappings",
    methodName: "deleteOffersFromArchive",
    operationId: "deleteOffersFromArchive",
    method: "POST",
    path: "/v2/businesses/{businessId}/offer-mappings/unarchive",
    productionOrigin: "https://api.partner.market.yandex.ru",
    retrySafety: "unsafe",
    resourceId: 204,
    resourceLimit: {
      path: "req.offerIds",
      none: { amount: 5000, period: "minutes", "period-duration": 1 },
      medium: { amount: 10000, period: "minutes", "period-duration": 1 },
    },
    source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
    verifiedAt: "2026-08-19",
  },
  {
    domain: "businessOfferMappings",
    methodName: "generateOfferBarcodes",
    operationId: "generateOfferBarcodes",
    method: "POST",
    path: "/v1/businesses/{businessId}/offer-mappings/barcodes/generate",
    productionOrigin: "https://api.partner.market.yandex.ru",
    retrySafety: "unsafe",
    resourceId: 281,
    resourceLimit: {
      path: "req.offerIds",
      none: { amount: 5000, period: "minutes", "period-duration": 1 },
      medium: { amount: 10000, period: "minutes", "period-duration": 1 },
    },
    source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
    verifiedAt: "2026-08-19",
  },
  {
    domain: "campaigns",
    methodName: "getCampaigns",
    operationId: "getCampaigns",
    method: "GET",
    path: "/v2/campaigns",
    productionOrigin: "https://api.partner.market.yandex.ru",
    retrySafety: "safe",
    resourceId: 1,
    resourceLimit: {
      path: "resp",
      none: { amount: 1000, period: "hours", "period-duration": 1 },
      medium: { amount: 1000, period: "hours", "period-duration": 1 },
    },
    source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
    verifiedAt: "2026-08-19",
  },
  {
    domain: "campaigns",
    methodName: "getCampaign",
    operationId: "getCampaign",
    method: "GET",
    path: "/v2/campaigns/{campaignId}",
    productionOrigin: "https://api.partner.market.yandex.ru",
    retrySafety: "safe",
    resourceId: 2,
    resourceLimit: {
      path: "resp",
      none: { amount: 5000, period: "hours", "period-duration": 1 },
      medium: { amount: 5000, period: "hours", "period-duration": 1 },
    },
    source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
    verifiedAt: "2026-08-19",
  },
  {
    domain: "campaigns",
    methodName: "getCampaignSettings",
    operationId: "getCampaignSettings",
    method: "GET",
    path: "/v2/campaigns/{campaignId}/settings",
    productionOrigin: "https://api.partner.market.yandex.ru",
    retrySafety: "safe",
    resourceId: 25,
    resourceLimit: {
      path: "resp",
      none: { amount: 1000, period: "hours", "period-duration": 1 },
      medium: { amount: 1000, period: "hours", "period-duration": 1 },
    },
    source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
    verifiedAt: "2026-08-19",
  },
  {
    domain: "categories",
    methodName: "getCategoriesTree",
    operationId: "getCategoriesTree",
    method: "POST",
    path: "/v2/categories/tree",
    productionOrigin: "https://api.partner.market.yandex.ru",
    retrySafety: "unsafe",
    resourceId: 222,
    resourceLimit: {
      path: "resp",
      none: { amount: 50, period: "hours", "period-duration": 1 },
      medium: { amount: 100, period: "hours", "period-duration": 1 },
    },
    source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
    verifiedAt: "2026-08-19",
  },
  {
    domain: "categories",
    methodName: "getCategoriesMaxSaleQuantum",
    operationId: "getCategoriesMaxSaleQuantum",
    method: "POST",
    path: "/v2/categories/max-sale-quantum",
    productionOrigin: "https://api.partner.market.yandex.ru",
    retrySafety: "unsafe",
    resourceId: 225,
    resourceLimit: {
      path: "resp",
      none: { amount: 5000, period: "hours", "period-duration": 1 },
      medium: { amount: 5000, period: "hours", "period-duration": 1 },
    },
    deprecation: {
      "degradation-start-date": "2027-01-18",
      "shutdown-date": "2027-04-05",
    },
    source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
    verifiedAt: "2026-08-19",
  },
  {
    domain: "chats",
    methodName: "createChat",
    operationId: "createChat",
    method: "POST",
    path: "/v2/businesses/{businessId}/chats/new",
    productionOrigin: "https://api.partner.market.yandex.ru",
    retrySafety: "unsafe",
    resourceId: 207,
    resourceLimit: {
      path: "resp",
      none: { amount: 1000, period: "hours", "period-duration": 1 },
      medium: { amount: 1000, period: "hours", "period-duration": 1 },
    },
    source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
    verifiedAt: "2026-08-19",
  },
  {
    domain: "chats",
    methodName: "getChats",
    operationId: "getChats",
    method: "POST",
    path: "/v2/businesses/{businessId}/chats",
    productionOrigin: "https://api.partner.market.yandex.ru",
    retrySafety: "unsafe",
    resourceId: 208,
    resourceLimit: {
      path: "resp",
      none: { amount: 5000, period: "hours", "period-duration": 1 },
      medium: { amount: 5000, period: "hours", "period-duration": 1 },
    },
    source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
    verifiedAt: "2026-08-19",
  },
  {
    domain: "chats",
    methodName: "getChat",
    operationId: "getChat",
    method: "GET",
    path: "/v2/businesses/{businessId}/chat",
    productionOrigin: "https://api.partner.market.yandex.ru",
    retrySafety: "safe",
    resourceId: 249,
    resourceLimit: {
      path: "resp",
      none: { amount: 1000, period: "hours", "period-duration": 1 },
      medium: { amount: 1000, period: "hours", "period-duration": 1 },
    },
    source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
    verifiedAt: "2026-08-19",
  },
  {
    domain: "chats",
    methodName: "sendFileToChat",
    operationId: "sendFileToChat",
    method: "POST",
    path: "/v2/businesses/{businessId}/chats/file/send",
    productionOrigin: "https://api.partner.market.yandex.ru",
    retrySafety: "unsafe",
    resourceId: 209,
    resourceLimit: {
      path: "resp",
      none: { amount: 1000, period: "hours", "period-duration": 1 },
      medium: { amount: 1000, period: "hours", "period-duration": 1 },
    },
    source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
    verifiedAt: "2026-08-19",
  },
  {
    domain: "chats",
    methodName: "sendMessageToChat",
    operationId: "sendMessageToChat",
    method: "POST",
    path: "/v2/businesses/{businessId}/chats/message",
    productionOrigin: "https://api.partner.market.yandex.ru",
    retrySafety: "unsafe",
    resourceId: 210,
    resourceLimit: {
      path: "resp",
      none: { amount: 1000, period: "hours", "period-duration": 1 },
      medium: { amount: 1000, period: "hours", "period-duration": 1 },
    },
    source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
    verifiedAt: "2026-08-19",
  },
  {
    domain: "chats",
    methodName: "getChatMessage",
    operationId: "getChatMessage",
    method: "GET",
    path: "/v2/businesses/{businessId}/chats/message",
    productionOrigin: "https://api.partner.market.yandex.ru",
    retrySafety: "safe",
    resourceId: 248,
    resourceLimit: {
      path: "resp",
      none: { amount: 1000, period: "hours", "period-duration": 1 },
      medium: { amount: 1000, period: "hours", "period-duration": 1 },
    },
    source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
    verifiedAt: "2026-08-19",
  },
  {
    domain: "chats",
    methodName: "getChatHistory",
    operationId: "getChatHistory",
    method: "POST",
    path: "/v2/businesses/{businessId}/chats/history",
    productionOrigin: "https://api.partner.market.yandex.ru",
    retrySafety: "unsafe",
    resourceId: 211,
    resourceLimit: {
      path: "resp",
      none: { amount: 10000, period: "hours", "period-duration": 1 },
      medium: { amount: 10000, period: "hours", "period-duration": 1 },
    },
    source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
    verifiedAt: "2026-08-19",
  },
  {
    domain: "content",
    methodName: "getCategoryContentParameters",
    operationId: "getCategoryContentParameters",
    method: "POST",
    path: "/v2/category/{categoryId}/parameters",
    productionOrigin: "https://api.partner.market.yandex.ru",
    retrySafety: "unsafe",
    resourceId: 197,
    resourceLimit: {
      path: "resp",
      none: { amount: 100, period: "minutes", "period-duration": 1 },
      medium: { amount: 100, period: "minutes", "period-duration": 1 },
    },
    source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
    verifiedAt: "2026-08-19",
  },
  {
    domain: "content",
    methodName: "getOfferCardsContentStatus",
    operationId: "getOfferCardsContentStatus",
    method: "POST",
    path: "/v2/businesses/{businessId}/offer-cards",
    productionOrigin: "https://api.partner.market.yandex.ru",
    retrySafety: "unsafe",
    resourceId: 198,
    resourceLimit: {
      path: "resp",
      none: { amount: 100, period: "minutes", "period-duration": 1 },
      medium: { amount: 600, period: "minutes", "period-duration": 1 },
    },
    source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
    verifiedAt: "2026-08-19",
  },
  {
    domain: "content",
    methodName: "updateOfferContent",
    operationId: "updateOfferContent",
    method: "POST",
    path: "/v2/businesses/{businessId}/offer-cards/update",
    productionOrigin: "https://api.partner.market.yandex.ru",
    retrySafety: "unsafe",
    resourceId: 199,
    resourceLimit: {
      path: "req.offersContent",
      none: { amount: 5000, period: "minutes", "period-duration": 1 },
      medium: { amount: 10000, period: "minutes", "period-duration": 1 },
    },
    source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
    verifiedAt: "2026-08-19",
  },
  {
    domain: "deliveryOptions",
    methodName: "getDeliveryOptions",
    operationId: "getDeliveryOptions",
    method: "POST",
    path: "/v1/campaigns/{campaignId}/delivery-options",
    productionOrigin: "https://api.partner.market.yandex.ru",
    retrySafety: "unsafe",
    resourceId: 274,
    resourceLimit: {
      path: "resp",
      "parallel-limit-value": 10,
      none: { amount: 1000, period: "minutes", "period-duration": 1 },
      medium: { amount: 1000, period: "minutes", "period-duration": 1 },
    },
    source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
    verifiedAt: "2026-08-19",
  },
  {
    domain: "deliveryOptions",
    methodName: "getReturnDeliveryOptions",
    operationId: "getReturnDeliveryOptions",
    method: "POST",
    path: "/v1/campaigns/{campaignId}/return-delivery-options",
    productionOrigin: "https://api.partner.market.yandex.ru",
    retrySafety: "unsafe",
    resourceId: 276,
    resourceLimit: {
      path: "resp",
      none: { amount: 5000, period: "hours", "period-duration": 1 },
      medium: { amount: 5000, period: "hours", "period-duration": 1 },
    },
    source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
    verifiedAt: "2026-08-19",
  },
  {
    domain: "deliveryServices",
    methodName: "getDeliveryServices",
    operationId: "getDeliveryServices",
    method: "GET",
    path: "/v2/delivery/services",
    productionOrigin: "https://api.partner.market.yandex.ru",
    retrySafety: "safe",
    resourceId: 55,
    resourceLimit: {
      path: "resp",
      none: { amount: 5000, period: "hours", "period-duration": 1 },
      medium: { amount: 5000, period: "hours", "period-duration": 1 },
    },
    source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
    verifiedAt: "2026-08-19",
  },
  {
    domain: "goodsFeedback",
    methodName: "getGoodsFeedbacks",
    operationId: "getGoodsFeedbacks",
    method: "POST",
    path: "/v2/businesses/{businessId}/goods-feedback",
    productionOrigin: "https://api.partner.market.yandex.ru",
    retrySafety: "unsafe",
    resourceId: 233,
    resourceLimit: {
      path: "resp",
      none: { amount: 5000, period: "hours", "period-duration": 1 },
      medium: { amount: 10000, period: "hours", "period-duration": 1 },
    },
    source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
    verifiedAt: "2026-08-19",
  },
  {
    domain: "goodsFeedback",
    methodName: "skipGoodsFeedbacksReaction",
    operationId: "skipGoodsFeedbacksReaction",
    method: "POST",
    path: "/v2/businesses/{businessId}/goods-feedback/skip-reaction",
    productionOrigin: "https://api.partner.market.yandex.ru",
    retrySafety: "unsafe",
    resourceId: 234,
    resourceLimit: {
      path: "resp",
      none: { amount: 500, period: "hours", "period-duration": 1 },
      medium: { amount: 1000, period: "hours", "period-duration": 1 },
    },
    source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
    verifiedAt: "2026-08-19",
  },
  {
    domain: "goodsFeedback",
    methodName: "updateGoodsFeedbackComment",
    operationId: "updateGoodsFeedbackComment",
    method: "POST",
    path: "/v2/businesses/{businessId}/goods-feedback/comments/update",
    productionOrigin: "https://api.partner.market.yandex.ru",
    retrySafety: "unsafe",
    resourceId: 232,
    resourceLimit: {
      path: "resp",
      none: { amount: 1000, period: "hours", "period-duration": 1 },
      medium: { amount: 1000, period: "hours", "period-duration": 1 },
    },
    source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
    verifiedAt: "2026-08-19",
  },
  {
    domain: "goodsFeedback",
    methodName: "deleteGoodsFeedbackComment",
    operationId: "deleteGoodsFeedbackComment",
    method: "POST",
    path: "/v2/businesses/{businessId}/goods-feedback/comments/delete",
    productionOrigin: "https://api.partner.market.yandex.ru",
    retrySafety: "unsafe",
    resourceId: 231,
    resourceLimit: {
      path: "resp",
      none: { amount: 1000, period: "hours", "period-duration": 1 },
      medium: { amount: 1000, period: "hours", "period-duration": 1 },
    },
    source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
    verifiedAt: "2026-08-19",
  },
  {
    domain: "goodsFeedback",
    methodName: "getGoodsFeedbackComments",
    operationId: "getGoodsFeedbackComments",
    method: "POST",
    path: "/v2/businesses/{businessId}/goods-feedback/comments",
    productionOrigin: "https://api.partner.market.yandex.ru",
    retrySafety: "unsafe",
    resourceId: 230,
    resourceLimit: {
      path: "resp",
      none: { amount: 5000, period: "hours", "period-duration": 1 },
      medium: { amount: 10000, period: "hours", "period-duration": 1 },
    },
    source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
    verifiedAt: "2026-08-19",
  },
  {
    domain: "goodsFeedback",
    methodName: "getGoodsFeedbacksUrbanads",
    operationId: "getGoodsFeedbacksUrbanads",
    method: "POST",
    path: "/v1/businesses/{businessId}/goods-feedback-advertiser",
    productionOrigin: "https://api.partner.market.yandex.ru",
    retrySafety: "unsafe",
    resourceId: 288,
    resourceLimit: {
      path: "resp",
      none: { amount: 10000, period: "hours", "period-duration": 1 },
      medium: { amount: 10000, period: "hours", "period-duration": 1 },
    },
    source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
    verifiedAt: "2026-08-19",
  },
  {
    domain: "goodsQuestions",
    methodName: "getGoodsQuestions",
    operationId: "getGoodsQuestions",
    method: "POST",
    path: "/v1/businesses/{businessId}/goods-questions",
    productionOrigin: "https://api.partner.market.yandex.ru",
    retrySafety: "unsafe",
    resourceId: 285,
    resourceLimit: {
      path: "resp",
      none: { amount: 1000, period: "hours", "period-duration": 1 },
      medium: { amount: 5000, period: "hours", "period-duration": 1 },
    },
    source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
    verifiedAt: "2026-08-19",
  },
  {
    domain: "goodsQuestions",
    methodName: "getGoodsQuestionAnswers",
    operationId: "getGoodsQuestionAnswers",
    method: "POST",
    path: "/v1/businesses/{businessId}/goods-questions/answers",
    productionOrigin: "https://api.partner.market.yandex.ru",
    retrySafety: "unsafe",
    resourceId: 286,
    resourceLimit: {
      path: "resp",
      none: { amount: 1000, period: "hours", "period-duration": 1 },
      medium: { amount: 5000, period: "hours", "period-duration": 1 },
    },
    source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
    verifiedAt: "2026-08-19",
  },
  {
    domain: "goodsQuestions",
    methodName: "updateGoodsQuestionTextEntity",
    operationId: "updateGoodsQuestionTextEntity",
    method: "POST",
    path: "/v1/businesses/{businessId}/goods-questions/update",
    productionOrigin: "https://api.partner.market.yandex.ru",
    retrySafety: "unsafe",
    resourceId: 284,
    resourceLimit: {
      path: "resp",
      none: { amount: 500, period: "hours", "period-duration": 1 },
      medium: { amount: 1000, period: "hours", "period-duration": 1 },
    },
    source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
    verifiedAt: "2026-08-19",
  },
  {
    domain: "goodsStats",
    methodName: "getGoodsStats",
    operationId: "getGoodsStats",
    method: "POST",
    path: "/v2/campaigns/{campaignId}/stats/skus",
    productionOrigin: "https://api.partner.market.yandex.ru",
    retrySafety: "unsafe",
    resourceId: 125,
    resourceLimit: {
      path: "resp.result.shopSkus",
      none: { amount: 2000, period: "minutes", "period-duration": 1 },
      medium: { amount: 5000, period: "minutes", "period-duration": 1 },
    },
    source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
    verifiedAt: "2026-08-19",
  },
  {
    domain: "hiddenOffers",
    methodName: "addHiddenOffers",
    operationId: "addHiddenOffers",
    method: "POST",
    path: "/v2/campaigns/{campaignId}/hidden-offers",
    productionOrigin: "https://api.partner.market.yandex.ru",
    retrySafety: "unsafe",
    resourceId: 59,
    resourceLimit: {
      path: "req.hiddenOffers",
      none: { amount: 5000, period: "minutes", "period-duration": 1 },
      medium: { amount: 10000, period: "minutes", "period-duration": 1 },
    },
    source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
    verifiedAt: "2026-08-19",
  },
  {
    domain: "hiddenOffers",
    methodName: "getHiddenOffers",
    operationId: "getHiddenOffers",
    method: "GET",
    path: "/v2/campaigns/{campaignId}/hidden-offers",
    productionOrigin: "https://api.partner.market.yandex.ru",
    retrySafety: "safe",
    resourceId: 61,
    resourceLimit: {
      path: "resp",
      none: { amount: 100, period: "minutes", "period-duration": 1 },
      medium: { amount: 10000, period: "minutes", "period-duration": 1 },
    },
    source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
    verifiedAt: "2026-08-19",
  },
  {
    domain: "hiddenOffers",
    methodName: "deleteHiddenOffers",
    operationId: "deleteHiddenOffers",
    method: "POST",
    path: "/v2/campaigns/{campaignId}/hidden-offers/delete",
    productionOrigin: "https://api.partner.market.yandex.ru",
    retrySafety: "unsafe",
    resourceId: 242,
    resourceLimit: {
      path: "req.hiddenOffers",
      none: { amount: 5000, period: "minutes", "period-duration": 1 },
      medium: { amount: 10000, period: "minutes", "period-duration": 1 },
    },
    source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
    verifiedAt: "2026-08-19",
  },
  {
    domain: "logisticPoints",
    methodName: "getLogisticPoints",
    operationId: "getLogisticPoints",
    method: "POST",
    path: "/v1/businesses/{businessId}/logistics-points",
    productionOrigin: "https://api.partner.market.yandex.ru",
    retrySafety: "unsafe",
    resourceId: 277,
    resourceLimit: {
      path: "resp",
      none: { amount: 10000, period: "hours", "period-duration": 1 },
      medium: { amount: 10000, period: "hours", "period-duration": 1 },
    },
    source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
    verifiedAt: "2026-08-19",
  },
  {
    domain: "offers",
    methodName: "getCampaignOffers",
    operationId: "getCampaignOffers",
    method: "POST",
    path: "/v2/campaigns/{campaignId}/offers",
    productionOrigin: "https://api.partner.market.yandex.ru",
    retrySafety: "unsafe",
    resourceId: 181,
    resourceLimit: {
      path: "resp",
      none: { amount: 1000, period: "minutes", "period-duration": 1 },
      medium: { amount: 10000, period: "minutes", "period-duration": 1 },
    },
    source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
    verifiedAt: "2026-08-19",
  },
  {
    domain: "offers",
    methodName: "updateCampaignOffers",
    operationId: "updateCampaignOffers",
    method: "POST",
    path: "/v2/campaigns/{campaignId}/offers/update",
    productionOrigin: "https://api.partner.market.yandex.ru",
    retrySafety: "unsafe",
    resourceId: 183,
    resourceLimit: {
      path: "req.offers",
      none: { amount: 5000, period: "minutes", "period-duration": 1 },
      medium: { amount: 10000, period: "minutes", "period-duration": 1 },
    },
    source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
    verifiedAt: "2026-08-19",
  },
  {
    domain: "offers",
    methodName: "deleteCampaignOffers",
    operationId: "deleteCampaignOffers",
    method: "POST",
    path: "/v2/campaigns/{campaignId}/offers/delete",
    productionOrigin: "https://api.partner.market.yandex.ru",
    retrySafety: "unsafe",
    resourceId: 182,
    resourceLimit: {
      path: "req.offerIds",
      none: { amount: 5000, period: "minutes", "period-duration": 1 },
      medium: { amount: 10000, period: "minutes", "period-duration": 1 },
    },
    source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
    verifiedAt: "2026-08-19",
  },
  {
    domain: "offers",
    methodName: "getOfferRecommendations",
    operationId: "getOfferRecommendations",
    method: "POST",
    path: "/v2/businesses/{businessId}/offers/recommendations",
    productionOrigin: "https://api.partner.market.yandex.ru",
    retrySafety: "unsafe",
    resourceId: 191,
    resourceLimit: {
      path: "resp",
      none: { amount: 50, period: "minutes", "period-duration": 1 },
      medium: { amount: 100, period: "minutes", "period-duration": 1 },
    },
    source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
    verifiedAt: "2026-08-19",
  },
  {
    domain: "operations",
    methodName: "getOperations",
    operationId: "getOperations",
    method: "POST",
    path: "/v1/businesses/{businessId}/operations",
    productionOrigin: "https://api.partner.market.yandex.ru",
    retrySafety: "unsafe",
    resourceId: 279,
    resourceLimit: {
      path: "resp",
      none: { amount: 1000, period: "hours", "period-duration": 1 },
      medium: { amount: 1000, period: "hours", "period-duration": 1 },
    },
    source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
    verifiedAt: "2026-08-19",
  },
  {
    domain: "orderBusinessInformation",
    methodName: "getOrderBusinessBuyerInfo",
    operationId: "getOrderBusinessBuyerInfo",
    method: "POST",
    path: "/v2/campaigns/{campaignId}/orders/{orderId}/business-buyer",
    productionOrigin: "https://api.partner.market.yandex.ru",
    retrySafety: "unsafe",
    resourceId: 214,
    resourceLimit: {
      path: "resp",
      none: { amount: 3000, period: "hours", "period-duration": 1 },
      medium: { amount: 3000, period: "hours", "period-duration": 1 },
    },
    source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
    verifiedAt: "2026-08-19",
  },
  {
    domain: "orderBusinessInformation",
    methodName: "getOrderBusinessDocumentsInfo",
    operationId: "getOrderBusinessDocumentsInfo",
    method: "POST",
    path: "/v2/campaigns/{campaignId}/orders/{orderId}/documents",
    productionOrigin: "https://api.partner.market.yandex.ru",
    retrySafety: "unsafe",
    resourceId: 215,
    resourceLimit: {
      path: "resp",
      none: { amount: 3000, period: "hours", "period-duration": 1 },
      medium: { amount: 3000, period: "hours", "period-duration": 1 },
    },
    source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
    verifiedAt: "2026-08-19",
  },
  {
    domain: "orderDelivery",
    methodName: "setOrderDeliveryDate",
    operationId: "setOrderDeliveryDate",
    method: "PUT",
    path: "/v2/campaigns/{campaignId}/orders/{orderId}/delivery/date",
    productionOrigin: "https://api.partner.market.yandex.ru",
    retrySafety: "unsafe",
    resourceId: 138,
    resourceLimit: {
      path: "resp",
      none: { amount: 10000, period: "hours", "period-duration": 1 },
      medium: { amount: 10000, period: "hours", "period-duration": 1 },
    },
    source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
    verifiedAt: "2026-08-19",
  },
  {
    domain: "orderDelivery",
    methodName: "setOrderDeliveryTrackCode",
    operationId: "setOrderDeliveryTrackCode",
    method: "POST",
    path: "/v2/campaigns/{campaignId}/orders/{orderId}/delivery/track",
    productionOrigin: "https://api.partner.market.yandex.ru",
    retrySafety: "unsafe",
    resourceId: 136,
    resourceLimit: {
      path: "resp",
      none: { amount: 10000, period: "hours", "period-duration": 1 },
      medium: { amount: 10000, period: "hours", "period-duration": 1 },
    },
    source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
    verifiedAt: "2026-08-19",
  },
  {
    domain: "orderDelivery",
    methodName: "getOrderBuyerInfo",
    operationId: "getOrderBuyerInfo",
    method: "GET",
    path: "/v2/campaigns/{campaignId}/orders/{orderId}/buyer",
    productionOrigin: "https://api.partner.market.yandex.ru",
    retrySafety: "safe",
    resourceId: 130,
    resourceLimit: {
      path: "resp",
      none: { amount: 3000, period: "hours", "period-duration": 1 },
      medium: { amount: 3000, period: "hours", "period-duration": 1 },
    },
    source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
    verifiedAt: "2026-08-19",
  },
  {
    domain: "orderDelivery",
    methodName: "verifyOrderEac",
    operationId: "verifyOrderEac",
    method: "PUT",
    path: "/v2/campaigns/{campaignId}/orders/{orderId}/verifyEac",
    productionOrigin: "https://api.partner.market.yandex.ru",
    retrySafety: "unsafe",
    resourceId: 164,
    resourceLimit: {
      path: "resp",
      none: { amount: 10000, period: "hours", "period-duration": 1 },
      medium: { amount: 10000, period: "hours", "period-duration": 1 },
    },
    source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
    verifiedAt: "2026-08-19",
  },
  {
    domain: "orderDelivery",
    methodName: "updateOrderStorageLimit",
    operationId: "updateOrderStorageLimit",
    method: "PUT",
    path: "/v2/campaigns/{campaignId}/orders/{orderId}/delivery/storage-limit",
    productionOrigin: "https://api.partner.market.yandex.ru",
    retrySafety: "unsafe",
    resourceId: 154,
    resourceLimit: {
      path: "resp",
      none: { amount: 10000, period: "hours", "period-duration": 1 },
      medium: { amount: 10000, period: "hours", "period-duration": 1 },
    },
    source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
    verifiedAt: "2026-08-19",
  },
  {
    domain: "orderLabels",
    methodName: "generateOrderLabel",
    operationId: "generateOrderLabel",
    method: "GET",
    path: "/v2/campaigns/{campaignId}/orders/{orderId}/delivery/shipments/{shipmentId}/boxes/{boxId}/label",
    productionOrigin: "https://api.partner.market.yandex.ru",
    retrySafety: "safe",
    resourceId: 118,
    resourceLimit: {
      path: "resp",
      none: { amount: 10000, period: "hours", "period-duration": 1 },
      medium: { amount: 10000, period: "hours", "period-duration": 1 },
    },
    source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
    verifiedAt: "2026-08-19",
  },
  {
    domain: "orderLabels",
    methodName: "generateOrderLabels",
    operationId: "generateOrderLabels",
    method: "GET",
    path: "/v2/campaigns/{campaignId}/orders/{orderId}/delivery/labels",
    productionOrigin: "https://api.partner.market.yandex.ru",
    retrySafety: "safe",
    resourceId: 119,
    resourceLimit: {
      path: "resp",
      none: { amount: 10000, period: "hours", "period-duration": 1 },
      medium: { amount: 10000, period: "hours", "period-duration": 1 },
    },
    source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
    verifiedAt: "2026-08-19",
  },
  {
    domain: "orderLabels",
    methodName: "getOrderLabelsData",
    operationId: "getOrderLabelsData",
    method: "GET",
    path: "/v2/campaigns/{campaignId}/orders/{orderId}/delivery/labels/data",
    productionOrigin: "https://api.partner.market.yandex.ru",
    retrySafety: "safe",
    resourceId: 120,
    resourceLimit: {
      path: "resp",
      none: { amount: 10000, period: "hours", "period-duration": 1 },
      medium: { amount: 10000, period: "hours", "period-duration": 1 },
    },
    source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
    verifiedAt: "2026-08-19",
  },
  {
    domain: "orders",
    methodName: "getOrder",
    operationId: "getOrder",
    method: "GET",
    path: "/v2/campaigns/{campaignId}/orders/{orderId}",
    productionOrigin: "https://api.partner.market.yandex.ru",
    retrySafety: "safe",
    resourceId: 28,
    resourceLimit: {
      path: "resp",
      "parallel-limit-value": 6,
      none: { amount: 10000, period: "hours", "period-duration": 1 },
      medium: { amount: 10000, period: "hours", "period-duration": 1 },
    },
    deprecation: {
      "degradation-start-date": "2027-01-18",
      "shutdown-date": "2027-04-12",
      "replacement-operation-id": "getBusinessOrders",
    },
    source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
    verifiedAt: "2026-08-19",
  },
  {
    domain: "orders",
    methodName: "getOrders",
    operationId: "getOrders",
    method: "GET",
    path: "/v2/campaigns/{campaignId}/orders",
    productionOrigin: "https://api.partner.market.yandex.ru",
    retrySafety: "safe",
    resourceId: 27,
    resourceLimit: {
      path: "resp",
      "parallel-limit-value": 6,
      none: { amount: 10000, period: "hours", "period-duration": 1 },
      medium: { amount: 10000, period: "hours", "period-duration": 1 },
    },
    deprecation: {
      "degradation-start-date": "2027-01-18",
      "shutdown-date": "2027-04-12",
      "replacement-operation-id": "getBusinessOrders",
    },
    source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
    verifiedAt: "2026-08-19",
  },
  {
    domain: "orders",
    methodName: "getBusinessOrders",
    operationId: "getBusinessOrders",
    method: "POST",
    path: "/v1/businesses/{businessId}/orders",
    productionOrigin: "https://api.partner.market.yandex.ru",
    retrySafety: "unsafe",
    resourceId: 283,
    resourceLimit: {
      path: "resp",
      "parallel-limit-value": 6,
      none: { amount: 10000, period: "hours", "period-duration": 1 },
      medium: { amount: 10000, period: "hours", "period-duration": 1 },
    },
    source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
    verifiedAt: "2026-08-19",
  },
  {
    domain: "orders",
    methodName: "provideOrderItemIdentifiers",
    operationId: "provideOrderItemIdentifiers",
    method: "PUT",
    path: "/v2/campaigns/{campaignId}/orders/{orderId}/identifiers",
    productionOrigin: "https://api.partner.market.yandex.ru",
    retrySafety: "unsafe",
    resourceId: 179,
    resourceLimit: {
      path: "resp",
      none: { amount: 10000, period: "hours", "period-duration": 1 },
      medium: { amount: 10000, period: "hours", "period-duration": 1 },
    },
    source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
    verifiedAt: "2026-08-19",
  },
  {
    domain: "orders",
    methodName: "updateOrderItems",
    operationId: "updateOrderItems",
    method: "PUT",
    path: "/v2/campaigns/{campaignId}/orders/{orderId}/items",
    productionOrigin: "https://api.partner.market.yandex.ru",
    retrySafety: "unsafe",
    resourceId: 57,
    resourceLimit: {
      path: "resp",
      "parallel-limit-value": 6,
      none: { amount: 10000, period: "hours", "period-duration": 1 },
      medium: { amount: 10000, period: "hours", "period-duration": 1 },
    },
    source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
    verifiedAt: "2026-08-19",
  },
  {
    domain: "orders",
    methodName: "updateOrderStatus",
    operationId: "updateOrderStatus",
    method: "PUT",
    path: "/v2/campaigns/{campaignId}/orders/{orderId}/status",
    productionOrigin: "https://api.partner.market.yandex.ru",
    retrySafety: "unsafe",
    resourceId: 30,
    resourceLimit: {
      path: "resp",
      none: { amount: 10000, period: "hours", "period-duration": 1 },
      medium: { amount: 10000, period: "hours", "period-duration": 1 },
    },
    source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
    verifiedAt: "2026-08-19",
  },
  {
    domain: "orders",
    methodName: "updateOrderStatuses",
    operationId: "updateOrderStatuses",
    method: "POST",
    path: "/v2/campaigns/{campaignId}/orders/status-update",
    productionOrigin: "https://api.partner.market.yandex.ru",
    retrySafety: "unsafe",
    resourceId: 117,
    resourceLimit: {
      path: "resp.result.orders",
      none: { amount: 10000, period: "hours", "period-duration": 1 },
      medium: { amount: 10000, period: "hours", "period-duration": 1 },
    },
    source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
    verifiedAt: "2026-08-19",
  },
  {
    domain: "orders",
    methodName: "setOrderShipmentBoxes",
    operationId: "setOrderShipmentBoxes",
    method: "PUT",
    path: "/v2/campaigns/{campaignId}/orders/{orderId}/delivery/shipments/{shipmentId}/boxes",
    productionOrigin: "https://api.partner.market.yandex.ru",
    retrySafety: "unsafe",
    resourceId: 107,
    resourceLimit: {
      path: "resp",
      none: { amount: 10000, period: "hours", "period-duration": 1 },
      medium: { amount: 10000, period: "hours", "period-duration": 1 },
    },
    deprecation: {
      "degradation-start-date": "2027-01-18",
      "shutdown-date": "2027-04-05",
      "replacement-operation-id": "setOrderBoxLayout",
    },
    source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
    verifiedAt: "2026-08-19",
  },
  {
    domain: "orders",
    methodName: "acceptOrderCancellation",
    operationId: "acceptOrderCancellation",
    method: "PUT",
    path: "/v2/campaigns/{campaignId}/orders/{orderId}/cancellation/accept",
    productionOrigin: "https://api.partner.market.yandex.ru",
    retrySafety: "unsafe",
    resourceId: 137,
    resourceLimit: {
      path: "resp",
      none: { amount: 500, period: "hours", "period-duration": 1 },
      medium: { amount: 500, period: "hours", "period-duration": 1 },
    },
    source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
    verifiedAt: "2026-08-19",
  },
  {
    domain: "orders",
    methodName: "provideOrderDigitalCodes",
    operationId: "provideOrderDigitalCodes",
    method: "POST",
    path: "/v2/campaigns/{campaignId}/orders/{orderId}/deliverDigitalGoods",
    productionOrigin: "https://api.partner.market.yandex.ru",
    retrySafety: "unsafe",
    resourceId: 129,
    resourceLimit: {
      path: "resp",
      "parallel-limit-value": 6,
      none: { amount: 10000, period: "hours", "period-duration": 1 },
      medium: { amount: 10000, period: "hours", "period-duration": 1 },
    },
    source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
    verifiedAt: "2026-08-19",
  },
  {
    domain: "orders",
    methodName: "setOrderBoxLayout",
    operationId: "setOrderBoxLayout",
    method: "PUT",
    path: "/v2/campaigns/{campaignId}/orders/{orderId}/boxes",
    productionOrigin: "https://api.partner.market.yandex.ru",
    retrySafety: "unsafe",
    resourceId: 206,
    resourceLimit: {
      path: "resp",
      none: { amount: 10000, period: "hours", "period-duration": 1 },
      medium: { amount: 10000, period: "hours", "period-duration": 1 },
    },
    source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
    verifiedAt: "2026-08-19",
  },
  {
    domain: "orders",
    methodName: "updateExternalOrderId",
    operationId: "updateExternalOrderId",
    method: "POST",
    path: "/v2/campaigns/{campaignId}/orders/{orderId}/external-id",
    productionOrigin: "https://api.partner.market.yandex.ru",
    retrySafety: "unsafe",
    resourceId: 255,
    resourceLimit: {
      path: "resp",
      none: { amount: 1000, period: "hours", "period-duration": 1 },
      medium: { amount: 1000, period: "hours", "period-duration": 1 },
    },
    source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
    verifiedAt: "2026-08-19",
  },
  {
    domain: "orders",
    methodName: "getOrderIdentifiersStatus",
    operationId: "getOrderIdentifiersStatus",
    method: "POST",
    path: "/v2/campaigns/{campaignId}/orders/{orderId}/identifiers/status",
    productionOrigin: "https://api.partner.market.yandex.ru",
    retrySafety: "unsafe",
    resourceId: 259,
    resourceLimit: {
      path: "resp",
      none: { amount: 1000, period: "hours", "period-duration": 1 },
      medium: { amount: 1000, period: "hours", "period-duration": 1 },
    },
    source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
    verifiedAt: "2026-08-19",
  },
  {
    domain: "orders",
    methodName: "createOrder",
    operationId: "createOrder",
    method: "POST",
    path: "/v1/campaigns/{campaignId}/orders/create",
    productionOrigin: "https://api.partner.market.yandex.ru",
    retrySafety: "unsafe",
    resourceId: 269,
    resourceLimit: {
      path: "resp",
      none: { amount: 10000, period: "hours", "period-duration": 1 },
      medium: { amount: 10000, period: "hours", "period-duration": 1 },
    },
    source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
    verifiedAt: "2026-08-19",
  },
  {
    domain: "orders",
    methodName: "updateOrder",
    operationId: "updateOrder",
    method: "POST",
    path: "/v1/campaigns/{campaignId}/orders/update",
    productionOrigin: "https://api.partner.market.yandex.ru",
    retrySafety: "unsafe",
    resourceId: 273,
    resourceLimit: {
      path: "resp",
      none: { amount: 10000, period: "hours", "period-duration": 1 },
      medium: { amount: 10000, period: "hours", "period-duration": 1 },
    },
    source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
    verifiedAt: "2026-08-19",
  },
  {
    domain: "orders",
    methodName: "getOrderUpdateOptions",
    operationId: "getOrderUpdateOptions",
    method: "POST",
    path: "/v1/campaigns/{campaignId}/orders/update-options",
    productionOrigin: "https://api.partner.market.yandex.ru",
    retrySafety: "unsafe",
    resourceId: 280,
    resourceLimit: {
      path: "resp",
      none: { amount: 10000, period: "hours", "period-duration": 1 },
      medium: { amount: 10000, period: "hours", "period-duration": 1 },
    },
    source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
    verifiedAt: "2026-08-19",
  },
  {
    domain: "ordersStats",
    methodName: "getOrdersStats",
    operationId: "getOrdersStats",
    method: "POST",
    path: "/v2/campaigns/{campaignId}/stats/orders",
    productionOrigin: "https://api.partner.market.yandex.ru",
    retrySafety: "unsafe",
    resourceId: 124,
    resourceLimit: {
      path: "resp",
      none: { amount: 10000, period: "hours", "period-duration": 1 },
      medium: { amount: 10000, period: "hours", "period-duration": 1 },
    },
    source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
    verifiedAt: "2026-08-19",
  },
  {
    domain: "outletLicenses",
    methodName: "getOutletLicenses",
    operationId: "getOutletLicenses",
    method: "GET",
    path: "/v2/campaigns/{campaignId}/outlets/licenses",
    productionOrigin: "https://api.partner.market.yandex.ru",
    retrySafety: "safe",
    resourceId: 113,
    resourceLimit: {
      path: "resp",
      none: { amount: 100000, period: "hours", "period-duration": 1 },
      medium: { amount: 100000, period: "hours", "period-duration": 1 },
    },
    source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
    verifiedAt: "2026-08-19",
  },
  {
    domain: "outletLicenses",
    methodName: "deleteOutletLicenses",
    operationId: "deleteOutletLicenses",
    method: "DELETE",
    path: "/v2/campaigns/{campaignId}/outlets/licenses",
    productionOrigin: "https://api.partner.market.yandex.ru",
    retrySafety: "unsafe",
    resourceId: 112,
    resourceLimit: {
      path: "resp",
      none: { amount: 100000, period: "hours", "period-duration": 1 },
      medium: { amount: 100000, period: "hours", "period-duration": 1 },
    },
    source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
    verifiedAt: "2026-08-19",
  },
  {
    domain: "outletLicenses",
    methodName: "updateOutletLicenses",
    operationId: "updateOutletLicenses",
    method: "POST",
    path: "/v2/campaigns/{campaignId}/outlets/licenses",
    productionOrigin: "https://api.partner.market.yandex.ru",
    retrySafety: "unsafe",
    resourceId: 114,
    resourceLimit: {
      path: "resp",
      none: { amount: 100000, period: "hours", "period-duration": 1 },
      medium: { amount: 100000, period: "hours", "period-duration": 1 },
    },
    source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
    verifiedAt: "2026-08-19",
  },
  {
    domain: "outlets",
    methodName: "createOutlet",
    operationId: "createOutlet",
    method: "POST",
    path: "/v2/campaigns/{campaignId}/outlets",
    productionOrigin: "https://api.partner.market.yandex.ru",
    retrySafety: "unsafe",
    resourceId: 48,
    resourceLimit: {
      path: "resp",
      none: { amount: 35000, period: "hours", "period-duration": 1 },
      medium: { amount: 100000, period: "hours", "period-duration": 1 },
    },
    source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
    verifiedAt: "2026-08-19",
  },
  {
    domain: "outlets",
    methodName: "getOutlets",
    operationId: "getOutlets",
    method: "GET",
    path: "/v2/campaigns/{campaignId}/outlets",
    productionOrigin: "https://api.partner.market.yandex.ru",
    retrySafety: "safe",
    resourceId: 32,
    resourceLimit: {
      path: "resp.outlets",
      none: { amount: 100000, period: "hours", "period-duration": 1 },
      medium: { amount: 100000, period: "hours", "period-duration": 1 },
    },
    source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
    verifiedAt: "2026-08-19",
  },
  {
    domain: "outlets",
    methodName: "updateOutlet",
    operationId: "updateOutlet",
    method: "PUT",
    path: "/v2/campaigns/{campaignId}/outlets/{outletId}",
    productionOrigin: "https://api.partner.market.yandex.ru",
    retrySafety: "unsafe",
    resourceId: 49,
    resourceLimit: {
      path: "resp",
      none: { amount: 35000, period: "hours", "period-duration": 1 },
      medium: { amount: 100000, period: "hours", "period-duration": 1 },
    },
    source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
    verifiedAt: "2026-08-19",
  },
  {
    domain: "outlets",
    methodName: "getOutlet",
    operationId: "getOutlet",
    method: "GET",
    path: "/v2/campaigns/{campaignId}/outlets/{outletId}",
    productionOrigin: "https://api.partner.market.yandex.ru",
    retrySafety: "safe",
    resourceId: 33,
    resourceLimit: {
      path: "resp",
      none: { amount: 10000, period: "hours", "period-duration": 1 },
      medium: { amount: 10000, period: "hours", "period-duration": 1 },
    },
    source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
    verifiedAt: "2026-08-19",
  },
  {
    domain: "outlets",
    methodName: "deleteOutlet",
    operationId: "deleteOutlet",
    method: "DELETE",
    path: "/v2/campaigns/{campaignId}/outlets/{outletId}",
    productionOrigin: "https://api.partner.market.yandex.ru",
    retrySafety: "unsafe",
    resourceId: 47,
    resourceLimit: {
      path: "resp",
      none: { amount: 35000, period: "hours", "period-duration": 1 },
      medium: { amount: 100000, period: "hours", "period-duration": 1 },
    },
    source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
    verifiedAt: "2026-08-19",
  },
  {
    domain: "priceQuarantine",
    methodName: "getBusinessQuarantineOffers",
    operationId: "getBusinessQuarantineOffers",
    method: "POST",
    path: "/v2/businesses/{businessId}/price-quarantine",
    productionOrigin: "https://api.partner.market.yandex.ru",
    retrySafety: "unsafe",
    resourceId: 172,
    resourceLimit: {
      path: "resp",
      none: { amount: 5000, period: "minutes", "period-duration": 1 },
      medium: { amount: 10000, period: "minutes", "period-duration": 1 },
    },
    source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
    verifiedAt: "2026-08-19",
  },
  {
    domain: "priceQuarantine",
    methodName: "confirmBusinessPrices",
    operationId: "confirmBusinessPrices",
    method: "POST",
    path: "/v2/businesses/{businessId}/price-quarantine/confirm",
    productionOrigin: "https://api.partner.market.yandex.ru",
    retrySafety: "unsafe",
    resourceId: 173,
    resourceLimit: {
      path: "req.offerIds",
      none: { amount: 5000, period: "minutes", "period-duration": 1 },
      medium: { amount: 10000, period: "minutes", "period-duration": 1 },
    },
    source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
    verifiedAt: "2026-08-19",
  },
  {
    domain: "priceQuarantine",
    methodName: "getCampaignQuarantineOffers",
    operationId: "getCampaignQuarantineOffers",
    method: "POST",
    path: "/v2/campaigns/{campaignId}/price-quarantine",
    productionOrigin: "https://api.partner.market.yandex.ru",
    retrySafety: "unsafe",
    resourceId: 174,
    resourceLimit: {
      path: "resp",
      none: { amount: 5000, period: "minutes", "period-duration": 1 },
      medium: { amount: 10000, period: "minutes", "period-duration": 1 },
    },
    source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
    verifiedAt: "2026-08-19",
  },
  {
    domain: "priceQuarantine",
    methodName: "confirmCampaignPrices",
    operationId: "confirmCampaignPrices",
    method: "POST",
    path: "/v2/campaigns/{campaignId}/price-quarantine/confirm",
    productionOrigin: "https://api.partner.market.yandex.ru",
    retrySafety: "unsafe",
    resourceId: 175,
    resourceLimit: {
      path: "req.offerIds",
      none: { amount: 5000, period: "minutes", "period-duration": 1 },
      medium: { amount: 10000, period: "minutes", "period-duration": 1 },
    },
    source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
    verifiedAt: "2026-08-19",
  },
  {
    domain: "prices",
    methodName: "updateBusinessPrices",
    operationId: "updateBusinessPrices",
    method: "POST",
    path: "/v2/businesses/{businessId}/offer-prices/updates",
    productionOrigin: "https://api.partner.market.yandex.ru",
    retrySafety: "unsafe",
    resourceId: 177,
    resourceLimit: {
      path: "req.offers",
      none: { amount: 10000, period: "minutes", "period-duration": 1 },
      medium: { amount: 10000, period: "minutes", "period-duration": 1 },
    },
    source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
    verifiedAt: "2026-08-19",
  },
  {
    domain: "prices",
    methodName: "updatePrices",
    operationId: "updatePrices",
    method: "POST",
    path: "/v2/campaigns/{campaignId}/offer-prices/updates",
    productionOrigin: "https://api.partner.market.yandex.ru",
    retrySafety: "unsafe",
    resourceId: 64,
    resourceLimit: {
      path: "req.offers",
      "parallel-limit-value": 12,
      none: { amount: 10000, period: "minutes", "period-duration": 1 },
      medium: { amount: 10000, period: "minutes", "period-duration": 1 },
    },
    source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
    verifiedAt: "2026-08-19",
  },
  {
    domain: "prices",
    methodName: "getPrices",
    operationId: "getPrices",
    method: "GET",
    path: "/v2/campaigns/{campaignId}/offer-prices",
    productionOrigin: "https://api.partner.market.yandex.ru",
    retrySafety: "safe",
    resourceId: 63,
    resourceLimit: {
      path: "resp.result.offers",
      none: { amount: 150000, period: "minutes", "period-duration": 1 },
      medium: { amount: 150000, period: "minutes", "period-duration": 1 },
    },
    deprecation: {
      "degradation-start-date": "2027-01-18",
      "shutdown-date": "2027-04-05",
      "replacement-operation-id": "getPricesByOfferIds",
    },
    source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
    verifiedAt: "2026-08-19",
  },
  {
    domain: "prices",
    methodName: "getPricesByOfferIds",
    operationId: "getPricesByOfferIds",
    method: "POST",
    path: "/v2/campaigns/{campaignId}/offer-prices",
    productionOrigin: "https://api.partner.market.yandex.ru",
    retrySafety: "unsafe",
    resourceId: 176,
    resourceLimit: {
      path: "resp.result.offers",
      none: { amount: 10000, period: "minutes", "period-duration": 1 },
      medium: { amount: 100000, period: "minutes", "period-duration": 1 },
    },
    source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
    verifiedAt: "2026-08-19",
  },
  {
    domain: "prices",
    methodName: "getDefaultPrices",
    operationId: "getDefaultPrices",
    method: "POST",
    path: "/v2/businesses/{businessId}/offer-prices",
    productionOrigin: "https://api.partner.market.yandex.ru",
    retrySafety: "unsafe",
    resourceId: 261,
    resourceLimit: {
      path: "resp.result.offers",
      none: { amount: 5000, period: "minutes", "period-duration": 1 },
      medium: { amount: 10000, period: "minutes", "period-duration": 1 },
    },
    source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
    verifiedAt: "2026-08-19",
  },
  {
    domain: "promos",
    methodName: "getPromos",
    operationId: "getPromos",
    method: "POST",
    path: "/v2/businesses/{businessId}/promos",
    productionOrigin: "https://api.partner.market.yandex.ru",
    retrySafety: "unsafe",
    resourceId: 235,
    resourceLimit: {
      path: "resp",
      none: { amount: 1000, period: "hours", "period-duration": 1 },
      medium: { amount: 1000, period: "hours", "period-duration": 1 },
    },
    source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
    verifiedAt: "2026-08-19",
  },
  {
    domain: "promos",
    methodName: "getPromoOffers",
    operationId: "getPromoOffers",
    method: "POST",
    path: "/v2/businesses/{businessId}/promos/offers",
    productionOrigin: "https://api.partner.market.yandex.ru",
    retrySafety: "unsafe",
    resourceId: 236,
    resourceLimit: {
      path: "resp",
      none: { amount: 5000, period: "hours", "period-duration": 1 },
      medium: { amount: 5000, period: "hours", "period-duration": 1 },
    },
    source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
    verifiedAt: "2026-08-19",
  },
  {
    domain: "promos",
    methodName: "updatePromoOffers",
    operationId: "updatePromoOffers",
    method: "POST",
    path: "/v2/businesses/{businessId}/promos/offers/update",
    productionOrigin: "https://api.partner.market.yandex.ru",
    retrySafety: "unsafe",
    resourceId: 237,
    resourceLimit: {
      path: "resp",
      none: { amount: 5000, period: "hours", "period-duration": 1 },
      medium: { amount: 5000, period: "hours", "period-duration": 1 },
    },
    source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
    verifiedAt: "2026-08-19",
  },
  {
    domain: "promos",
    methodName: "deletePromoOffers",
    operationId: "deletePromoOffers",
    method: "POST",
    path: "/v2/businesses/{businessId}/promos/offers/delete",
    productionOrigin: "https://api.partner.market.yandex.ru",
    retrySafety: "unsafe",
    resourceId: 238,
    resourceLimit: {
      path: "resp",
      none: { amount: 5000, period: "hours", "period-duration": 1 },
      medium: { amount: 5000, period: "hours", "period-duration": 1 },
    },
    source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
    verifiedAt: "2026-08-19",
  },
  {
    domain: "ratings",
    methodName: "getQualityRatings",
    operationId: "getQualityRatings",
    method: "POST",
    path: "/v2/businesses/{businessId}/ratings/quality",
    productionOrigin: "https://api.partner.market.yandex.ru",
    retrySafety: "unsafe",
    resourceId: 239,
    resourceLimit: {
      path: "resp",
      none: { amount: 500, period: "hours", "period-duration": 1 },
      medium: { amount: 500, period: "hours", "period-duration": 1 },
    },
    source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
    verifiedAt: "2026-08-19",
  },
  {
    domain: "ratings",
    methodName: "getQualityRatingDetails",
    operationId: "getQualityRatingDetails",
    method: "POST",
    path: "/v2/campaigns/{campaignId}/ratings/quality/details",
    productionOrigin: "https://api.partner.market.yandex.ru",
    retrySafety: "unsafe",
    resourceId: 240,
    resourceLimit: {
      path: "resp",
      none: { amount: 5000, period: "hours", "period-duration": 1 },
      medium: { amount: 5000, period: "hours", "period-duration": 1 },
    },
    source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
    verifiedAt: "2026-08-19",
  },
  {
    domain: "regions",
    methodName: "searchRegionsByName",
    operationId: "searchRegionsByName",
    method: "GET",
    path: "/v2/regions",
    productionOrigin: "https://api.partner.market.yandex.ru",
    retrySafety: "safe",
    resourceId: 17,
    resourceLimit: {
      path: "resp.regions",
      none: { amount: 50000, period: "hours", "period-duration": 1 },
      medium: { amount: 50000, period: "hours", "period-duration": 1 },
    },
    source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
    verifiedAt: "2026-08-19",
  },
  {
    domain: "regions",
    methodName: "searchRegionsById",
    operationId: "searchRegionsById",
    method: "GET",
    path: "/v2/regions/{regionId}",
    productionOrigin: "https://api.partner.market.yandex.ru",
    retrySafety: "safe",
    resourceId: 18,
    resourceLimit: {
      path: "resp",
      none: { amount: 10000, period: "hours", "period-duration": 1 },
      medium: { amount: 10000, period: "hours", "period-duration": 1 },
    },
    source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
    verifiedAt: "2026-08-19",
  },
  {
    domain: "regions",
    methodName: "searchRegionChildren",
    operationId: "searchRegionChildren",
    method: "GET",
    path: "/v2/regions/{regionId}/children",
    productionOrigin: "https://api.partner.market.yandex.ru",
    retrySafety: "safe",
    resourceId: 31,
    resourceLimit: {
      path: "resp.regions.children",
      none: { amount: 1000, period: "hours", "period-duration": 1 },
      medium: { amount: 1000, period: "hours", "period-duration": 1 },
    },
    source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
    verifiedAt: "2026-08-19",
  },
  {
    domain: "regions",
    methodName: "getRegionsCodes",
    operationId: "getRegionsCodes",
    method: "POST",
    path: "/v2/regions/countries",
    productionOrigin: "https://api.partner.market.yandex.ru",
    retrySafety: "unsafe",
    resourceId: 254,
    resourceLimit: {
      path: "resp",
      none: { amount: 100, period: "hours", "period-duration": 1 },
      medium: { amount: 100, period: "hours", "period-duration": 1 },
    },
    source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
    verifiedAt: "2026-08-19",
  },
  {
    domain: "reports",
    methodName: "getReportInfo",
    operationId: "getReportInfo",
    method: "GET",
    path: "/v2/reports/info/{reportId}",
    productionOrigin: "https://api.partner.market.yandex.ru",
    retrySafety: "safe",
    resourceId: 188,
    resourceLimit: {
      path: "resp",
      none: { amount: 100, period: "minutes", "period-duration": 1 },
      medium: { amount: 100, period: "minutes", "period-duration": 1 },
    },
    source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
    verifiedAt: "2026-08-19",
  },
  {
    domain: "reports",
    methodName: "generateUnitedNettingReport",
    operationId: "generateUnitedNettingReport",
    method: "POST",
    path: "/v2/reports/united-netting/generate",
    productionOrigin: "https://api.partner.market.yandex.ru",
    retrySafety: "unsafe",
    resourceId: 189,
    resourceLimit: {
      path: "resp",
      none: { amount: 1, period: "minutes", "period-duration": 2 },
      medium: { amount: 1, period: "minutes", "period-duration": 1 },
    },
    source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
    verifiedAt: "2026-08-19",
  },
  {
    domain: "reports",
    methodName: "generateUnitedMarketplaceServicesReport",
    operationId: "generateUnitedMarketplaceServicesReport",
    method: "POST",
    path: "/v2/reports/united-marketplace-services/generate",
    productionOrigin: "https://api.partner.market.yandex.ru",
    retrySafety: "unsafe",
    resourceId: 192,
    resourceLimit: {
      path: "resp",
      none: { amount: 1, period: "minutes", "period-duration": 2 },
      medium: { amount: 1, period: "minutes", "period-duration": 1 },
    },
    source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
    verifiedAt: "2026-08-19",
  },
  {
    domain: "reports",
    methodName: "generateUnitedOrdersReport",
    operationId: "generateUnitedOrdersReport",
    method: "POST",
    path: "/v2/reports/united-orders/generate",
    productionOrigin: "https://api.partner.market.yandex.ru",
    retrySafety: "unsafe",
    resourceId: 212,
    resourceLimit: {
      path: "resp",
      none: { amount: 1, period: "minutes", "period-duration": 2 },
      medium: { amount: 1, period: "minutes", "period-duration": 1 },
    },
    source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
    verifiedAt: "2026-08-19",
  },
  {
    domain: "reports",
    methodName: "generateUnitedReturnsReport",
    operationId: "generateUnitedReturnsReport",
    method: "POST",
    path: "/v2/reports/united-returns/generate",
    productionOrigin: "https://api.partner.market.yandex.ru",
    retrySafety: "unsafe",
    resourceId: 244,
    resourceLimit: {
      path: "resp",
      none: { amount: 1, period: "minutes", "period-duration": 2 },
      medium: { amount: 1, period: "minutes", "period-duration": 1 },
    },
    source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
    verifiedAt: "2026-08-19",
  },
  {
    domain: "reports",
    methodName: "generateGoodsRealizationReport",
    operationId: "generateGoodsRealizationReport",
    method: "POST",
    path: "/v2/reports/goods-realization/generate",
    productionOrigin: "https://api.partner.market.yandex.ru",
    retrySafety: "unsafe",
    resourceId: 193,
    resourceLimit: {
      path: "resp",
      none: { amount: 1, period: "minutes", "period-duration": 2 },
      medium: { amount: 1, period: "minutes", "period-duration": 1 },
    },
    source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
    verifiedAt: "2026-08-19",
  },
  {
    domain: "reports",
    methodName: "generateStocksOnWarehousesReport",
    operationId: "generateStocksOnWarehousesReport",
    method: "POST",
    path: "/v2/reports/stocks-on-warehouses/generate",
    productionOrigin: "https://api.partner.market.yandex.ru",
    retrySafety: "unsafe",
    resourceId: 200,
    resourceLimit: {
      path: "resp",
      none: { amount: 1, period: "minutes", "period-duration": 2 },
      medium: { amount: 1, period: "minutes", "period-duration": 1 },
    },
    source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
    verifiedAt: "2026-08-19",
  },
  {
    domain: "reports",
    methodName: "generateStocksReport",
    operationId: "generateStocksReport",
    method: "POST",
    path: "/v3/businesses/{businessId}/reports/stocks/generate",
    productionOrigin: "https://api.partner.market.yandex.ru",
    retrySafety: "unsafe",
    resourceId: 294,
    resourceLimit: {
      path: "resp",
      none: { amount: 1, period: "minutes", "period-duration": 2 },
      medium: { amount: 1, period: "minutes", "period-duration": 1 },
    },
    source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
    verifiedAt: "2026-08-19",
  },
  {
    domain: "reports",
    methodName: "generateGoodsMovementReport",
    operationId: "generateGoodsMovementReport",
    method: "POST",
    path: "/v2/reports/goods-movement/generate",
    productionOrigin: "https://api.partner.market.yandex.ru",
    retrySafety: "unsafe",
    resourceId: 196,
    resourceLimit: {
      path: "resp",
      none: { amount: 1, period: "minutes", "period-duration": 2 },
      medium: { amount: 1, period: "minutes", "period-duration": 1 },
    },
    source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
    verifiedAt: "2026-08-19",
  },
  {
    domain: "reports",
    methodName: "generateShowsSalesReport",
    operationId: "generateShowsSalesReport",
    method: "POST",
    path: "/v2/reports/shows-sales/generate",
    productionOrigin: "https://api.partner.market.yandex.ru",
    retrySafety: "unsafe",
    resourceId: 203,
    resourceLimit: {
      path: "resp",
      none: { amount: 1, period: "minutes", "period-duration": 10 },
      medium: { amount: 1, period: "minutes", "period-duration": 6 },
    },
    source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
    verifiedAt: "2026-08-19",
  },
  {
    domain: "reports",
    methodName: "generateCompetitorsPositionReport",
    operationId: "generateCompetitorsPositionReport",
    method: "POST",
    path: "/v2/reports/competitors-position/generate",
    productionOrigin: "https://api.partner.market.yandex.ru",
    retrySafety: "unsafe",
    resourceId: 229,
    resourceLimit: {
      path: "resp",
      none: { amount: 1, period: "minutes", "period-duration": 10 },
      medium: { amount: 1, period: "minutes", "period-duration": 6 },
    },
    source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
    verifiedAt: "2026-08-19",
  },
  {
    domain: "reports",
    methodName: "generateGoodsPricesReport",
    operationId: "generateGoodsPricesReport",
    method: "POST",
    path: "/v2/reports/goods-prices/generate",
    productionOrigin: "https://api.partner.market.yandex.ru",
    retrySafety: "unsafe",
    resourceId: 272,
    resourceLimit: {
      path: "resp",
      none: { amount: 1, period: "minutes", "period-duration": 2 },
      medium: { amount: 1, period: "minutes", "period-duration": 1 },
    },
    source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
    verifiedAt: "2026-08-19",
  },
  {
    domain: "reports",
    methodName: "generateGoodsTurnoverReport",
    operationId: "generateGoodsTurnoverReport",
    method: "POST",
    path: "/v2/reports/goods-turnover/generate",
    productionOrigin: "https://api.partner.market.yandex.ru",
    retrySafety: "unsafe",
    resourceId: 213,
    resourceLimit: {
      path: "resp",
      none: { amount: 1, period: "minutes", "period-duration": 2 },
      medium: { amount: 1, period: "minutes", "period-duration": 1 },
    },
    source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
    verifiedAt: "2026-08-19",
  },
  {
    domain: "reports",
    methodName: "generateBoostConsolidatedReport",
    operationId: "generateBoostConsolidatedReport",
    method: "POST",
    path: "/v2/reports/boost-consolidated/generate",
    productionOrigin: "https://api.partner.market.yandex.ru",
    retrySafety: "unsafe",
    resourceId: 217,
    resourceLimit: {
      path: "resp",
      none: { amount: 1, period: "minutes", "period-duration": 2 },
      medium: { amount: 1, period: "minutes", "period-duration": 1 },
    },
    source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
    verifiedAt: "2026-08-19",
  },
  {
    domain: "reports",
    methodName: "generateShipmentListDocumentReport",
    operationId: "generateShipmentListDocumentReport",
    method: "POST",
    path: "/v2/reports/documents/shipment-list/generate",
    productionOrigin: "https://api.partner.market.yandex.ru",
    retrySafety: "unsafe",
    resourceId: 223,
    resourceLimit: {
      path: "resp",
      none: { amount: 200, period: "hours", "period-duration": 1 },
      medium: { amount: 200, period: "hours", "period-duration": 1 },
    },
    source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
    verifiedAt: "2026-08-19",
  },
  {
    domain: "reports",
    methodName: "generateShelfsStatisticsReport",
    operationId: "generateShelfsStatisticsReport",
    method: "POST",
    path: "/v2/reports/shelf-statistics/generate",
    productionOrigin: "https://api.partner.market.yandex.ru",
    retrySafety: "unsafe",
    resourceId: 226,
    resourceLimit: {
      path: "resp",
      none: { amount: 1, period: "minutes", "period-duration": 2 },
      medium: { amount: 1, period: "minutes", "period-duration": 1 },
    },
    source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
    verifiedAt: "2026-08-19",
  },
  {
    domain: "reports",
    methodName: "generateMassOrderLabelsReport",
    operationId: "generateMassOrderLabelsReport",
    method: "POST",
    path: "/v2/reports/documents/labels/generate",
    productionOrigin: "https://api.partner.market.yandex.ru",
    retrySafety: "unsafe",
    resourceId: 227,
    resourceLimit: {
      path: "resp",
      none: { amount: 1000, period: "hours", "period-duration": 1 },
      medium: { amount: 1000, period: "hours", "period-duration": 1 },
    },
    source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
    verifiedAt: "2026-08-19",
  },
  {
    domain: "reports",
    methodName: "generateGoodsFeedbackReport",
    operationId: "generateGoodsFeedbackReport",
    method: "POST",
    path: "/v2/reports/goods-feedback/generate",
    productionOrigin: "https://api.partner.market.yandex.ru",
    retrySafety: "unsafe",
    resourceId: 241,
    resourceLimit: {
      path: "resp",
      none: { amount: 1, period: "minutes", "period-duration": 10 },
      medium: { amount: 1, period: "minutes", "period-duration": 6 },
    },
    source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
    verifiedAt: "2026-08-19",
  },
  {
    domain: "reports",
    methodName: "generateShowsBoostReport",
    operationId: "generateShowsBoostReport",
    method: "POST",
    path: "/v2/reports/shows-boost/generate",
    productionOrigin: "https://api.partner.market.yandex.ru",
    retrySafety: "unsafe",
    resourceId: 257,
    resourceLimit: {
      path: "resp",
      none: { amount: 1, period: "minutes", "period-duration": 2 },
      medium: { amount: 1, period: "minutes", "period-duration": 1 },
    },
    source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
    verifiedAt: "2026-08-19",
  },
  {
    domain: "reports",
    methodName: "generateBannersStatisticsReport",
    operationId: "generateBannersStatisticsReport",
    method: "POST",
    path: "/v2/reports/banners-statistics/generate",
    productionOrigin: "https://api.partner.market.yandex.ru",
    retrySafety: "unsafe",
    resourceId: 258,
    resourceLimit: {
      path: "resp",
      none: { amount: 1, period: "minutes", "period-duration": 2 },
      medium: { amount: 1, period: "minutes", "period-duration": 1 },
    },
    source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
    verifiedAt: "2026-08-19",
  },
  {
    domain: "reports",
    methodName: "generateClosureDocumentsReport",
    operationId: "generateClosureDocumentsReport",
    method: "POST",
    path: "/v2/reports/closure-documents/generate",
    productionOrigin: "https://api.partner.market.yandex.ru",
    retrySafety: "unsafe",
    resourceId: 260,
    resourceLimit: {
      path: "resp",
      none: { amount: 1000, period: "hours", "period-duration": 1 },
      medium: { amount: 1000, period: "hours", "period-duration": 1 },
    },
    source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
    verifiedAt: "2026-08-19",
  },
  {
    domain: "reports",
    methodName: "generateJewelryFiscalReport",
    operationId: "generateJewelryFiscalReport",
    method: "POST",
    path: "/v2/reports/jewelry-fiscal/generate",
    productionOrigin: "https://api.partner.market.yandex.ru",
    retrySafety: "unsafe",
    resourceId: 262,
    resourceLimit: {
      path: "resp",
      none: { amount: 1, period: "minutes", "period-duration": 2 },
      medium: { amount: 1, period: "minutes", "period-duration": 1 },
    },
    source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
    verifiedAt: "2026-08-19",
  },
  {
    domain: "reports",
    methodName: "generateSalesGeographyReport",
    operationId: "generateSalesGeographyReport",
    method: "POST",
    path: "/v2/reports/sales-geography/generate",
    productionOrigin: "https://api.partner.market.yandex.ru",
    retrySafety: "unsafe",
    resourceId: 263,
    resourceLimit: {
      path: "resp",
      none: { amount: 1, period: "minutes", "period-duration": 2 },
      medium: { amount: 1, period: "minutes", "period-duration": 1 },
    },
    source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
    verifiedAt: "2026-08-19",
  },
  {
    domain: "reports",
    methodName: "generateKeyIndicatorsReport",
    operationId: "generateKeyIndicatorsReport",
    method: "POST",
    path: "/v2/reports/key-indicators/generate",
    productionOrigin: "https://api.partner.market.yandex.ru",
    retrySafety: "unsafe",
    resourceId: 264,
    resourceLimit: {
      path: "resp",
      none: { amount: 1, period: "minutes", "period-duration": 2 },
      medium: { amount: 1, period: "minutes", "period-duration": 1 },
    },
    source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
    verifiedAt: "2026-08-19",
  },
  {
    domain: "reports",
    methodName: "generateClosureDocumentsDetalizationReport",
    operationId: "generateClosureDocumentsDetalizationReport",
    method: "POST",
    path: "/v2/reports/closure-documents/detalization/generate",
    productionOrigin: "https://api.partner.market.yandex.ru",
    retrySafety: "unsafe",
    resourceId: 266,
    resourceLimit: {
      path: "resp",
      none: { amount: 1, period: "minutes", "period-duration": 2 },
      medium: { amount: 1, period: "minutes", "period-duration": 1 },
    },
    source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
    verifiedAt: "2026-08-19",
  },
  {
    domain: "reports",
    methodName: "generateMarketingDetalizationReport",
    operationId: "generateMarketingDetalizationReport",
    method: "POST",
    path: "/v1/businesses/{businessId}/reports/marketing-detalization/generate",
    productionOrigin: "https://api.partner.market.yandex.ru",
    retrySafety: "unsafe",
    resourceId: 293,
    resourceLimit: {
      path: "resp",
      none: { amount: 1, period: "minutes", "period-duration": 2 },
      medium: { amount: 1, period: "minutes", "period-duration": 1 },
    },
    source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
    verifiedAt: "2026-08-19",
  },
  {
    domain: "reports",
    methodName: "generateBarcodesReport",
    operationId: "generateBarcodesReport",
    method: "POST",
    path: "/v1/reports/documents/barcodes/generate",
    productionOrigin: "https://api.partner.market.yandex.ru",
    retrySafety: "unsafe",
    resourceId: 282,
    resourceLimit: {
      path: "resp",
      none: { amount: 100, period: "hours", "period-duration": 1 },
      medium: { amount: 1000, period: "hours", "period-duration": 1 },
    },
    source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
    verifiedAt: "2026-08-19",
  },
  {
    domain: "returns",
    methodName: "getReturns",
    operationId: "getReturns",
    method: "GET",
    path: "/v2/campaigns/{campaignId}/returns",
    productionOrigin: "https://api.partner.market.yandex.ru",
    retrySafety: "safe",
    resourceId: 148,
    resourceLimit: {
      path: "resp",
      none: { amount: 5000, period: "hours", "period-duration": 1 },
      medium: { amount: 5000, period: "hours", "period-duration": 1 },
    },
    source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
    verifiedAt: "2026-08-19",
  },
  {
    domain: "returns",
    methodName: "getReturn",
    operationId: "getReturn",
    method: "GET",
    path: "/v2/campaigns/{campaignId}/orders/{orderId}/returns/{returnId}",
    productionOrigin: "https://api.partner.market.yandex.ru",
    retrySafety: "safe",
    resourceId: 159,
    resourceLimit: {
      path: "resp",
      none: { amount: 7000, period: "hours", "period-duration": 1 },
      medium: { amount: 7000, period: "hours", "period-duration": 1 },
    },
    source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
    verifiedAt: "2026-08-19",
  },
  {
    domain: "returns",
    methodName: "setReturnDecision",
    operationId: "setReturnDecision",
    method: "POST",
    path: "/v2/campaigns/{campaignId}/orders/{orderId}/returns/{returnId}/decision",
    productionOrigin: "https://api.partner.market.yandex.ru",
    retrySafety: "unsafe",
    resourceId: 160,
    resourceLimit: {
      path: "resp",
      none: { amount: 1000, period: "hours", "period-duration": 1 },
      medium: { amount: 1000, period: "hours", "period-duration": 1 },
    },
    deprecation: {
      "degradation-start-date": "2027-01-18",
      "shutdown-date": "2027-04-05",
      "replacement-operation-id": "submitReturnDecision",
    },
    source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
    verifiedAt: "2026-08-19",
  },
  {
    domain: "returns",
    methodName: "submitReturnDecision",
    operationId: "submitReturnDecision",
    method: "POST",
    path: "/v2/campaigns/{campaignId}/orders/{orderId}/returns/{returnId}/decision/submit",
    productionOrigin: "https://api.partner.market.yandex.ru",
    retrySafety: "unsafe",
    resourceId: 161,
    resourceLimit: {
      path: "resp",
      none: { amount: 5000, period: "hours", "period-duration": 1 },
      medium: { amount: 5000, period: "hours", "period-duration": 1 },
    },
    source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
    verifiedAt: "2026-08-19",
  },
  {
    domain: "returns",
    methodName: "getReturnAvailableDecisions",
    operationId: "getReturnAvailableDecisions",
    method: "POST",
    path: "/v1/businesses/{businessId}/returns/decisions",
    productionOrigin: "https://api.partner.market.yandex.ru",
    retrySafety: "unsafe",
    resourceId: 287,
    resourceLimit: {
      path: "resp",
      none: { amount: 5000, period: "hours", "period-duration": 1 },
      medium: { amount: 5000, period: "hours", "period-duration": 1 },
    },
    source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
    verifiedAt: "2026-08-19",
  },
  {
    domain: "returns",
    methodName: "getReturnApplication",
    operationId: "getReturnApplication",
    method: "GET",
    path: "/v2/campaigns/{campaignId}/orders/{orderId}/returns/{returnId}/application",
    productionOrigin: "https://api.partner.market.yandex.ru",
    retrySafety: "safe",
    resourceId: 162,
    resourceLimit: {
      path: "resp",
      none: { amount: 5000, period: "hours", "period-duration": 1 },
      medium: { amount: 5000, period: "hours", "period-duration": 1 },
    },
    source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
    verifiedAt: "2026-08-19",
  },
  {
    domain: "returns",
    methodName: "getReturnPhoto",
    operationId: "getReturnPhoto",
    method: "GET",
    path: "/v2/campaigns/{campaignId}/orders/{orderId}/returns/{returnId}/decision/{itemId}/image/{imageHash}",
    productionOrigin: "https://api.partner.market.yandex.ru",
    retrySafety: "safe",
    resourceId: 163,
    resourceLimit: {
      path: "resp",
      none: { amount: 5000, period: "hours", "period-duration": 1 },
      medium: { amount: 5000, period: "hours", "period-duration": 1 },
    },
    source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
    verifiedAt: "2026-08-19",
  },
  {
    domain: "returns",
    methodName: "createReturn",
    operationId: "createReturn",
    method: "POST",
    path: "/v1/campaigns/{campaignId}/returns/create",
    productionOrigin: "https://api.partner.market.yandex.ru",
    retrySafety: "unsafe",
    resourceId: 270,
    resourceLimit: {
      path: "resp",
      none: { amount: 5000, period: "hours", "period-duration": 1 },
      medium: { amount: 5000, period: "hours", "period-duration": 1 },
    },
    source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
    verifiedAt: "2026-08-19",
  },
  {
    domain: "returns",
    methodName: "cancelReturn",
    operationId: "cancelReturn",
    method: "POST",
    path: "/v1/campaigns/{campaignId}/returns/cancel",
    productionOrigin: "https://api.partner.market.yandex.ru",
    retrySafety: "unsafe",
    resourceId: 271,
    resourceLimit: {
      path: "resp",
      none: { amount: 5000, period: "hours", "period-duration": 1 },
      medium: { amount: 5000, period: "hours", "period-duration": 1 },
    },
    source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
    verifiedAt: "2026-08-19",
  },
  {
    domain: "shipments",
    methodName: "downloadShipmentReceptionTransferAct",
    operationId: "downloadShipmentReceptionTransferAct",
    method: "GET",
    path: "/v2/campaigns/{campaignId}/shipments/reception-transfer-act",
    productionOrigin: "https://api.partner.market.yandex.ru",
    retrySafety: "safe",
    resourceId: 126,
    resourceLimit: {
      path: "resp",
      none: { amount: 200, period: "hours", "period-duration": 1 },
      medium: { amount: 200, period: "hours", "period-duration": 1 },
    },
    source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
    verifiedAt: "2026-08-19",
  },
  {
    domain: "shipments",
    methodName: "getShipment",
    operationId: "getShipment",
    method: "GET",
    path: "/v2/campaigns/{campaignId}/first-mile/shipments/{shipmentId}",
    productionOrigin: "https://api.partner.market.yandex.ru",
    retrySafety: "safe",
    resourceId: 133,
    resourceLimit: {
      path: "resp",
      none: { amount: 200, period: "hours", "period-duration": 1 },
      medium: { amount: 200, period: "hours", "period-duration": 1 },
    },
    source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
    verifiedAt: "2026-08-19",
  },
  {
    domain: "shipments",
    methodName: "getShipmentOrdersInfo",
    operationId: "getShipmentOrdersInfo",
    method: "GET",
    path: "/v2/campaigns/{campaignId}/first-mile/shipments/{shipmentId}/orders/info",
    productionOrigin: "https://api.partner.market.yandex.ru",
    retrySafety: "safe",
    resourceId: 139,
    resourceLimit: {
      path: "resp",
      none: { amount: 200, period: "hours", "period-duration": 1 },
      medium: { amount: 200, period: "hours", "period-duration": 1 },
    },
    source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
    verifiedAt: "2026-08-19",
  },
  {
    domain: "shipments",
    methodName: "confirmShipment",
    operationId: "confirmShipment",
    method: "POST",
    path: "/v2/campaigns/{campaignId}/first-mile/shipments/{shipmentId}/confirm",
    productionOrigin: "https://api.partner.market.yandex.ru",
    retrySafety: "unsafe",
    resourceId: 132,
    resourceLimit: {
      path: "resp",
      none: { amount: 200, period: "hours", "period-duration": 1 },
      medium: { amount: 200, period: "hours", "period-duration": 1 },
    },
    source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
    verifiedAt: "2026-08-19",
  },
  {
    domain: "shipments",
    methodName: "downloadShipmentAct",
    operationId: "downloadShipmentAct",
    method: "GET",
    path: "/v2/campaigns/{campaignId}/first-mile/shipments/{shipmentId}/act",
    productionOrigin: "https://api.partner.market.yandex.ru",
    retrySafety: "safe",
    resourceId: 134,
    resourceLimit: {
      path: "resp",
      none: { amount: 200, period: "hours", "period-duration": 1 },
      medium: { amount: 200, period: "hours", "period-duration": 1 },
    },
    source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
    verifiedAt: "2026-08-19",
  },
  {
    domain: "shipments",
    methodName: "downloadShipmentInboundAct",
    operationId: "downloadShipmentInboundAct",
    method: "GET",
    path: "/v2/campaigns/{campaignId}/first-mile/shipments/{shipmentId}/inbound-act",
    productionOrigin: "https://api.partner.market.yandex.ru",
    retrySafety: "safe",
    resourceId: 147,
    resourceLimit: {
      path: "resp",
      none: { amount: 200, period: "hours", "period-duration": 1 },
      medium: { amount: 200, period: "hours", "period-duration": 1 },
    },
    source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
    verifiedAt: "2026-08-19",
  },
  {
    domain: "shipments",
    methodName: "downloadShipmentTransportationWaybill",
    operationId: "downloadShipmentTransportationWaybill",
    method: "GET",
    path: "/v2/campaigns/{campaignId}/first-mile/shipments/{shipmentId}/transportation-waybill",
    productionOrigin: "https://api.partner.market.yandex.ru",
    retrySafety: "safe",
    resourceId: 140,
    resourceLimit: {
      path: "resp",
      none: { amount: 200, period: "hours", "period-duration": 1 },
      medium: { amount: 200, period: "hours", "period-duration": 1 },
    },
    source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
    verifiedAt: "2026-08-19",
  },
  {
    domain: "shipments",
    methodName: "downloadShipmentDiscrepancyAct",
    operationId: "downloadShipmentDiscrepancyAct",
    method: "GET",
    path: "/v2/campaigns/{campaignId}/first-mile/shipments/{shipmentId}/discrepancy-act",
    productionOrigin: "https://api.partner.market.yandex.ru",
    retrySafety: "safe",
    resourceId: 150,
    resourceLimit: {
      path: "resp",
      none: { amount: 200, period: "hours", "period-duration": 1 },
      medium: { amount: 200, period: "hours", "period-duration": 1 },
    },
    source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
    verifiedAt: "2026-08-19",
  },
  {
    domain: "shipments",
    methodName: "setShipmentPalletsCount",
    operationId: "setShipmentPalletsCount",
    method: "PUT",
    path: "/v2/campaigns/{campaignId}/first-mile/shipments/{shipmentId}/pallets",
    productionOrigin: "https://api.partner.market.yandex.ru",
    retrySafety: "unsafe",
    resourceId: 178,
    resourceLimit: {
      path: "resp",
      none: { amount: 200, period: "hours", "period-duration": 1 },
      medium: { amount: 200, period: "hours", "period-duration": 1 },
    },
    source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
    verifiedAt: "2026-08-19",
  },
  {
    domain: "shipments",
    methodName: "downloadShipmentPalletLabels",
    operationId: "downloadShipmentPalletLabels",
    method: "GET",
    path: "/v2/campaigns/{campaignId}/first-mile/shipments/{shipmentId}/pallet/labels",
    productionOrigin: "https://api.partner.market.yandex.ru",
    retrySafety: "safe",
    resourceId: 180,
    resourceLimit: {
      path: "resp",
      none: { amount: 200, period: "hours", "period-duration": 1 },
      medium: { amount: 200, period: "hours", "period-duration": 1 },
    },
    source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
    verifiedAt: "2026-08-19",
  },
  {
    domain: "shipments",
    methodName: "searchShipments",
    operationId: "searchShipments",
    method: "PUT",
    path: "/v2/campaigns/{campaignId}/first-mile/shipments",
    productionOrigin: "https://api.partner.market.yandex.ru",
    retrySafety: "unsafe",
    resourceId: 135,
    resourceLimit: {
      path: "resp",
      none: { amount: 200, period: "hours", "period-duration": 1 },
      medium: { amount: 200, period: "hours", "period-duration": 1 },
    },
    source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
    verifiedAt: "2026-08-19",
  },
  {
    domain: "shipments",
    methodName: "transferOrdersFromShipment",
    operationId: "transferOrdersFromShipment",
    method: "POST",
    path: "/v2/campaigns/{campaignId}/first-mile/shipments/{shipmentId}/orders/transfer",
    productionOrigin: "https://api.partner.market.yandex.ru",
    retrySafety: "unsafe",
    resourceId: 185,
    resourceLimit: {
      path: "resp",
      none: { amount: 200, period: "hours", "period-duration": 1 },
      medium: { amount: 200, period: "hours", "period-duration": 1 },
    },
    source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
    verifiedAt: "2026-08-19",
  },
  {
    domain: "stocks",
    methodName: "updateStocks",
    operationId: "updateStocks",
    method: "PUT",
    path: "/v2/campaigns/{campaignId}/offers/stocks",
    productionOrigin: "https://api.partner.market.yandex.ru",
    retrySafety: "unsafe",
    resourceId: 141,
    resourceLimit: {
      path: "req.skus",
      none: { amount: 100000, period: "minutes", "period-duration": 1 },
      medium: { amount: 100000, period: "minutes", "period-duration": 1 },
    },
    source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
    verifiedAt: "2026-08-19",
  },
  {
    domain: "stocks",
    methodName: "getStocks",
    operationId: "getStocks",
    method: "POST",
    path: "/v2/campaigns/{campaignId}/offers/stocks",
    productionOrigin: "https://api.partner.market.yandex.ru",
    retrySafety: "unsafe",
    resourceId: 201,
    resourceLimit: {
      path: "resp.result.warehouses.offers.offerId",
      none: { amount: 100000, period: "minutes", "period-duration": 1 },
      medium: { amount: 100000, period: "minutes", "period-duration": 1 },
    },
    source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
    verifiedAt: "2026-08-19",
  },
  {
    domain: "stocks",
    methodName: "updateStocksOnPartnerWarehouses",
    operationId: "updateStocksOnPartnerWarehouses",
    method: "POST",
    path: "/v3/businesses/{businessId}/offers/stocks/update",
    productionOrigin: "https://api.partner.market.yandex.ru",
    retrySafety: "unsafe",
    resourceId: 295,
    resourceLimit: {
      path: "resp",
      none: { amount: 50, period: "minutes", "period-duration": 1 },
      medium: { amount: 50, period: "minutes", "period-duration": 1 },
    },
    source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
    verifiedAt: "2026-08-19",
  },
  {
    domain: "stocks",
    methodName: "getStocksOnPartnerWarehouses",
    operationId: "getStocksOnPartnerWarehouses",
    method: "POST",
    path: "/v3/businesses/{businessId}/offers/stocks",
    productionOrigin: "https://api.partner.market.yandex.ru",
    retrySafety: "unsafe",
    resourceId: 298,
    resourceLimit: {
      path: "resp",
      none: { amount: 500, period: "minutes", "period-duration": 1 },
      medium: { amount: 500, period: "minutes", "period-duration": 1 },
    },
    source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
    verifiedAt: "2026-08-19",
  },
  {
    domain: "supplyRequests",
    methodName: "getSupplyRequests",
    operationId: "getSupplyRequests",
    method: "POST",
    path: "/v2/campaigns/{campaignId}/supply-requests",
    productionOrigin: "https://api.partner.market.yandex.ru",
    retrySafety: "unsafe",
    resourceId: 253,
    resourceLimit: {
      path: "resp",
      none: { amount: 1000, period: "hours", "period-duration": 1 },
      medium: { amount: 1000, period: "hours", "period-duration": 1 },
    },
    source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
    verifiedAt: "2026-08-19",
  },
  {
    domain: "supplyRequests",
    methodName: "getSupplyRequestItems",
    operationId: "getSupplyRequestItems",
    method: "POST",
    path: "/v2/campaigns/{campaignId}/supply-requests/items",
    productionOrigin: "https://api.partner.market.yandex.ru",
    retrySafety: "unsafe",
    resourceId: 252,
    resourceLimit: {
      path: "resp",
      none: { amount: 1000, period: "hours", "period-duration": 1 },
      medium: { amount: 1000, period: "hours", "period-duration": 1 },
    },
    source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
    verifiedAt: "2026-08-19",
  },
  {
    domain: "supplyRequests",
    methodName: "getSupplyRequestDocuments",
    operationId: "getSupplyRequestDocuments",
    method: "POST",
    path: "/v2/campaigns/{campaignId}/supply-requests/documents",
    productionOrigin: "https://api.partner.market.yandex.ru",
    retrySafety: "unsafe",
    resourceId: 251,
    resourceLimit: {
      path: "resp",
      none: { amount: 1000, period: "hours", "period-duration": 1 },
      medium: { amount: 1000, period: "hours", "period-duration": 1 },
    },
    source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
    verifiedAt: "2026-08-19",
  },
  {
    domain: "tariffs",
    methodName: "calculateTariffs",
    operationId: "calculateTariffs",
    method: "POST",
    path: "/v2/tariffs/calculate",
    productionOrigin: "https://api.partner.market.yandex.ru",
    retrySafety: "unsafe",
    resourceId: 216,
    resourceLimit: {
      path: "resp",
      none: { amount: 100, period: "minutes", "period-duration": 1 },
      medium: { amount: 100, period: "minutes", "period-duration": 1 },
    },
    source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
    verifiedAt: "2026-08-19",
  },
  {
    domain: "warehouses",
    methodName: "getWarehouses",
    operationId: "getWarehouses",
    method: "GET",
    path: "/v2/businesses/{businessId}/warehouses",
    productionOrigin: "https://api.partner.market.yandex.ru",
    retrySafety: "safe",
    resourceId: 194,
    resourceLimit: {
      path: "resp",
      none: { amount: 100, period: "minutes", "period-duration": 1 },
      medium: { amount: 100, period: "minutes", "period-duration": 1 },
    },
    deprecation: {
      "degradation-start-date": "2027-01-18",
      "shutdown-date": "2027-04-05",
      "replacement-operation-id": "getPagedWarehouses",
    },
    source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
    verifiedAt: "2026-08-19",
  },
  {
    domain: "warehouses",
    methodName: "getPagedWarehouses",
    operationId: "getPagedWarehouses",
    method: "POST",
    path: "/v2/businesses/{businessId}/warehouses",
    productionOrigin: "https://api.partner.market.yandex.ru",
    retrySafety: "unsafe",
    resourceId: 243,
    resourceLimit: {
      path: "resp",
      none: { amount: 100, period: "hours", "period-duration": 1 },
      medium: { amount: 100, period: "hours", "period-duration": 1 },
    },
    source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
    verifiedAt: "2026-08-19",
  },
  {
    domain: "warehouses",
    methodName: "getPartnerWarehouses",
    operationId: "getPartnerWarehouses",
    method: "POST",
    path: "/v3/businesses/{businessId}/warehouses",
    productionOrigin: "https://api.partner.market.yandex.ru",
    retrySafety: "unsafe",
    resourceId: 299,
    resourceLimit: {
      path: "resp",
      none: { amount: 100, period: "hours", "period-duration": 1 },
      medium: { amount: 100, period: "hours", "period-duration": 1 },
    },
    source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
    verifiedAt: "2026-08-19",
  },
  {
    domain: "warehouses",
    methodName: "getFulfillmentWarehouses",
    operationId: "getFulfillmentWarehouses",
    method: "GET",
    path: "/v2/warehouses",
    productionOrigin: "https://api.partner.market.yandex.ru",
    retrySafety: "safe",
    resourceId: 202,
    resourceLimit: {
      path: "resp",
      none: { amount: 100, period: "hours", "period-duration": 1 },
      medium: { amount: 100, period: "hours", "period-duration": 1 },
    },
    source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
    verifiedAt: "2026-08-19",
  },
  {
    domain: "warehouses",
    methodName: "updateWarehouseStatus",
    operationId: "updateWarehouseStatus",
    method: "POST",
    path: "/v2/campaigns/{campaignId}/warehouse/status",
    productionOrigin: "https://api.partner.market.yandex.ru",
    retrySafety: "unsafe",
    resourceId: 245,
    resourceLimit: {
      path: "resp",
      none: { amount: 100, period: "hours", "period-duration": 1 },
      medium: { amount: 100, period: "hours", "period-duration": 1 },
    },
    deprecation: {
      "degradation-start-date": "2027-01-18",
      "shutdown-date": "2027-04-05",
      "replacement-operation-id": "updateWarehouseModelStatus",
    },
    source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
    verifiedAt: "2026-08-19",
  },
  {
    domain: "warehouses",
    methodName: "updateWarehouseModelStatus",
    operationId: "updateWarehouseModelStatus",
    method: "POST",
    path: "/v3/businesses/{businessId}/warehouse/models/status",
    productionOrigin: "https://api.partner.market.yandex.ru",
    retrySafety: "unsafe",
    resourceId: 297,
    resourceLimit: {
      path: "resp",
      none: { amount: 100, period: "hours", "period-duration": 1 },
      medium: { amount: 100, period: "hours", "period-duration": 1 },
    },
    source: "https://yandex.ru/dev/market/partner-api/doc/ru/",
    verifiedAt: "2026-08-19",
  },
] as const;

export const YM_OPERATION_ALIASES = {
  auth: {},
  bids: {},
  businesses: {},
  businessOfferMappings: {},
  campaigns: {},
  categories: {},
  chats: {},
  content: {},
  deliveryOptions: {},
  deliveryServices: {},
  goodsFeedback: {},
  goodsQuestions: {},
  goodsStats: {},
  hiddenOffers: {},
  logisticPoints: {},
  offers: {},
  operations: {},
  orderBusinessInformation: {},
  orderDelivery: {},
  orderLabels: {},
  orders: {},
  ordersStats: {},
  outletLicenses: {},
  outlets: {},
  priceQuarantine: {},
  prices: {},
  promos: {},
  ratings: {},
  regions: {},
  reports: {},
  returns: {},
  shipments: {},
  stocks: {},
  supplyRequests: {},
  tariffs: {},
  warehouses: {},
} as const;
