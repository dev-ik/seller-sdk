// This file is generated from docs/wb/swagger/*.yaml.
// Run `pnpm update:wb` instead of editing it manually.

import type { WbOperationExecutor } from "./operation.js";
import type { WbRequestOptions } from "./request-options.js";
import { executeGetPing } from "./endpoints/general/get-ping/execute.js";
import type { GetPingResponse } from "./endpoints/general/get-ping/types.js";
export type {
  GetPingInput,
  GetPingResponse,
} from "./endpoints/general/get-ping/types.js";
import { executeGetV2News } from "./endpoints/general/get-v2-news/execute.js";
import type {
  GetV2NewsInput,
  GetV2NewsResponse,
} from "./endpoints/general/get-v2-news/types.js";
export type {
  GetV2NewsInput,
  GetV2NewsResponse,
} from "./endpoints/general/get-v2-news/types.js";
import { executeGetV1SellerInfo } from "./endpoints/general/get-v1-seller-info/execute.js";
import type { GetV1SellerInfoResponse } from "./endpoints/general/get-v1-seller-info/types.js";
export type {
  GetV1SellerInfoInput,
  GetV1SellerInfoResponse,
} from "./endpoints/general/get-v1-seller-info/types.js";
import { executeGetV1Rating } from "./endpoints/general/get-v1-rating/execute.js";
import type { GetV1RatingResponse } from "./endpoints/general/get-v1-rating/types.js";
export type {
  GetV1RatingInput,
  GetV1RatingResponse,
} from "./endpoints/general/get-v1-rating/types.js";
import { executeGetV1Subscriptions } from "./endpoints/general/get-v1-subscriptions/execute.js";
import type { GetV1SubscriptionsResponse } from "./endpoints/general/get-v1-subscriptions/types.js";
export type {
  GetV1SubscriptionsInput,
  GetV1SubscriptionsResponse,
} from "./endpoints/general/get-v1-subscriptions/types.js";
import { executeGetV1TariffConstructorOptions } from "./endpoints/general/get-v1-tariff-constructor-options/execute.js";
import type {
  GetV1TariffConstructorOptionsInput,
  GetV1TariffConstructorOptionsResponse,
} from "./endpoints/general/get-v1-tariff-constructor-options/types.js";
export type {
  GetV1TariffConstructorOptionsInput,
  GetV1TariffConstructorOptionsResponse,
} from "./endpoints/general/get-v1-tariff-constructor-options/types.js";
import { executePostV1Invite } from "./endpoints/general/post-v1-invite/execute.js";
import type {
  PostV1InviteInput,
  PostV1InviteResponse,
} from "./endpoints/general/post-v1-invite/types.js";
export type {
  PostV1InviteInput,
  PostV1InviteResponse,
} from "./endpoints/general/post-v1-invite/types.js";
import { executeGetV1Users } from "./endpoints/general/get-v1-users/execute.js";
import type {
  GetV1UsersInput,
  GetV1UsersResponse,
} from "./endpoints/general/get-v1-users/types.js";
export type {
  GetV1UsersInput,
  GetV1UsersResponse,
} from "./endpoints/general/get-v1-users/types.js";
import { executePutV1UsersAccess } from "./endpoints/general/put-v1-users-access/execute.js";
import type {
  PutV1UsersAccessInput,
  PutV1UsersAccessResponse,
} from "./endpoints/general/put-v1-users-access/types.js";
export type {
  PutV1UsersAccessInput,
  PutV1UsersAccessResponse,
} from "./endpoints/general/put-v1-users-access/types.js";
import { executeDeleteV1User } from "./endpoints/general/delete-v1-user/execute.js";
import type {
  DeleteV1UserInput,
  DeleteV1UserResponse,
} from "./endpoints/general/delete-v1-user/types.js";
export type {
  DeleteV1UserInput,
  DeleteV1UserResponse,
} from "./endpoints/general/delete-v1-user/types.js";
import { executeGetContentV2ObjectParentAll } from "./endpoints/items/get-content-v2-object-parent-all/execute.js";
import type {
  GetContentV2ObjectParentAllInput,
  GetContentV2ObjectParentAllResponse,
} from "./endpoints/items/get-content-v2-object-parent-all/types.js";
export type {
  GetContentV2ObjectParentAllInput,
  GetContentV2ObjectParentAllResponse,
} from "./endpoints/items/get-content-v2-object-parent-all/types.js";
import { executeGetContentV2ObjectAll } from "./endpoints/items/get-content-v2-object-all/execute.js";
import type {
  GetContentV2ObjectAllInput,
  GetContentV2ObjectAllResponse,
} from "./endpoints/items/get-content-v2-object-all/types.js";
export type {
  GetContentV2ObjectAllInput,
  GetContentV2ObjectAllResponse,
} from "./endpoints/items/get-content-v2-object-all/types.js";
import { executeGetContentV2ObjectCharcsSubjectId } from "./endpoints/items/get-content-v2-object-charcs-subject-id/execute.js";
import type {
  GetContentV2ObjectCharcsSubjectIdInput,
  GetContentV2ObjectCharcsSubjectIdResponse,
} from "./endpoints/items/get-content-v2-object-charcs-subject-id/types.js";
export type {
  GetContentV2ObjectCharcsSubjectIdInput,
  GetContentV2ObjectCharcsSubjectIdResponse,
} from "./endpoints/items/get-content-v2-object-charcs-subject-id/types.js";
import { executeGetContentV2DirectoryColors } from "./endpoints/items/get-content-v2-directory-colors/execute.js";
import type {
  GetContentV2DirectoryColorsInput,
  GetContentV2DirectoryColorsResponse,
} from "./endpoints/items/get-content-v2-directory-colors/types.js";
export type {
  GetContentV2DirectoryColorsInput,
  GetContentV2DirectoryColorsResponse,
} from "./endpoints/items/get-content-v2-directory-colors/types.js";
import { executeGetContentV2DirectoryKinds } from "./endpoints/items/get-content-v2-directory-kinds/execute.js";
import type {
  GetContentV2DirectoryKindsInput,
  GetContentV2DirectoryKindsResponse,
} from "./endpoints/items/get-content-v2-directory-kinds/types.js";
export type {
  GetContentV2DirectoryKindsInput,
  GetContentV2DirectoryKindsResponse,
} from "./endpoints/items/get-content-v2-directory-kinds/types.js";
import { executeGetContentV2DirectoryCountries } from "./endpoints/items/get-content-v2-directory-countries/execute.js";
import type {
  GetContentV2DirectoryCountriesInput,
  GetContentV2DirectoryCountriesResponse,
} from "./endpoints/items/get-content-v2-directory-countries/types.js";
export type {
  GetContentV2DirectoryCountriesInput,
  GetContentV2DirectoryCountriesResponse,
} from "./endpoints/items/get-content-v2-directory-countries/types.js";
import { executeGetContentV2DirectorySeasons } from "./endpoints/items/get-content-v2-directory-seasons/execute.js";
import type {
  GetContentV2DirectorySeasonsInput,
  GetContentV2DirectorySeasonsResponse,
} from "./endpoints/items/get-content-v2-directory-seasons/types.js";
export type {
  GetContentV2DirectorySeasonsInput,
  GetContentV2DirectorySeasonsResponse,
} from "./endpoints/items/get-content-v2-directory-seasons/types.js";
import { executeGetContentV2DirectoryVat } from "./endpoints/items/get-content-v2-directory-vat/execute.js";
import type {
  GetContentV2DirectoryVatInput,
  GetContentV2DirectoryVatResponse,
} from "./endpoints/items/get-content-v2-directory-vat/types.js";
export type {
  GetContentV2DirectoryVatInput,
  GetContentV2DirectoryVatResponse,
} from "./endpoints/items/get-content-v2-directory-vat/types.js";
import { executeGetContentV2DirectoryTnved } from "./endpoints/items/get-content-v2-directory-tnved/execute.js";
import type {
  GetContentV2DirectoryTnvedInput,
  GetContentV2DirectoryTnvedResponse,
} from "./endpoints/items/get-content-v2-directory-tnved/types.js";
export type {
  GetContentV2DirectoryTnvedInput,
  GetContentV2DirectoryTnvedResponse,
} from "./endpoints/items/get-content-v2-directory-tnved/types.js";
import { executeGetApiContentV1Brands } from "./endpoints/items/get-api-content-v1-brands/execute.js";
import type {
  GetApiContentV1BrandsInput,
  GetApiContentV1BrandsResponse,
} from "./endpoints/items/get-api-content-v1-brands/types.js";
export type {
  GetApiContentV1BrandsInput,
  GetApiContentV1BrandsResponse,
} from "./endpoints/items/get-api-content-v1-brands/types.js";
import { executeGetContentV2Tags } from "./endpoints/items/get-content-v2-tags/execute.js";
import type { GetContentV2TagsResponse } from "./endpoints/items/get-content-v2-tags/types.js";
export type {
  GetContentV2TagsInput,
  GetContentV2TagsResponse,
} from "./endpoints/items/get-content-v2-tags/types.js";
import { executePostContentV2Tag } from "./endpoints/items/post-content-v2-tag/execute.js";
import type {
  PostContentV2TagInput,
  PostContentV2TagResponse,
} from "./endpoints/items/post-content-v2-tag/types.js";
export type {
  PostContentV2TagInput,
  PostContentV2TagResponse,
} from "./endpoints/items/post-content-v2-tag/types.js";
import { executePatchContentV2TagId } from "./endpoints/items/patch-content-v2-tag-id/execute.js";
import type {
  PatchContentV2TagIdInput,
  PatchContentV2TagIdResponse,
} from "./endpoints/items/patch-content-v2-tag-id/types.js";
export type {
  PatchContentV2TagIdInput,
  PatchContentV2TagIdResponse,
} from "./endpoints/items/patch-content-v2-tag-id/types.js";
import { executeDeleteContentV2TagId } from "./endpoints/items/delete-content-v2-tag-id/execute.js";
import type {
  DeleteContentV2TagIdInput,
  DeleteContentV2TagIdResponse,
} from "./endpoints/items/delete-content-v2-tag-id/types.js";
export type {
  DeleteContentV2TagIdInput,
  DeleteContentV2TagIdResponse,
} from "./endpoints/items/delete-content-v2-tag-id/types.js";
import { executePostContentV2TagNomenclatureLink } from "./endpoints/items/post-content-v2-tag-nomenclature-link/execute.js";
import type {
  PostContentV2TagNomenclatureLinkInput,
  PostContentV2TagNomenclatureLinkResponse,
} from "./endpoints/items/post-content-v2-tag-nomenclature-link/types.js";
export type {
  PostContentV2TagNomenclatureLinkInput,
  PostContentV2TagNomenclatureLinkResponse,
} from "./endpoints/items/post-content-v2-tag-nomenclature-link/types.js";
import { executePostContentV2GetCardsList } from "./endpoints/items/post-content-v2-get-cards-list/execute.js";
import type {
  PostContentV2GetCardsListInput,
  PostContentV2GetCardsListResponse,
} from "./endpoints/items/post-content-v2-get-cards-list/types.js";
export type {
  PostContentV2GetCardsListInput,
  PostContentV2GetCardsListResponse,
} from "./endpoints/items/post-content-v2-get-cards-list/types.js";
import { executePostContentV2CardsErrorList } from "./endpoints/items/post-content-v2-cards-error-list/execute.js";
import type {
  PostContentV2CardsErrorListInput,
  PostContentV2CardsErrorListResponse,
} from "./endpoints/items/post-content-v2-cards-error-list/types.js";
export type {
  PostContentV2CardsErrorListInput,
  PostContentV2CardsErrorListResponse,
} from "./endpoints/items/post-content-v2-cards-error-list/types.js";
import { executePostContentV2CardsUpdate } from "./endpoints/items/post-content-v2-cards-update/execute.js";
import type {
  PostContentV2CardsUpdateInput,
  PostContentV2CardsUpdateResponse,
} from "./endpoints/items/post-content-v2-cards-update/types.js";
export type {
  PostContentV2CardsUpdateInput,
  PostContentV2CardsUpdateResponse,
} from "./endpoints/items/post-content-v2-cards-update/types.js";
import { executePostContentV2CardsMoveNm } from "./endpoints/items/post-content-v2-cards-move-nm/execute.js";
import type {
  PostContentV2CardsMoveNmInput,
  PostContentV2CardsMoveNmResponse,
} from "./endpoints/items/post-content-v2-cards-move-nm/types.js";
export type {
  PostContentV2CardsMoveNmInput,
  PostContentV2CardsMoveNmResponse,
} from "./endpoints/items/post-content-v2-cards-move-nm/types.js";
import { executePostContentV2CardsDeleteTrash } from "./endpoints/items/post-content-v2-cards-delete-trash/execute.js";
import type {
  PostContentV2CardsDeleteTrashInput,
  PostContentV2CardsDeleteTrashResponse,
} from "./endpoints/items/post-content-v2-cards-delete-trash/types.js";
export type {
  PostContentV2CardsDeleteTrashInput,
  PostContentV2CardsDeleteTrashResponse,
} from "./endpoints/items/post-content-v2-cards-delete-trash/types.js";
import { executePostContentV2CardsRecover } from "./endpoints/items/post-content-v2-cards-recover/execute.js";
import type {
  PostContentV2CardsRecoverInput,
  PostContentV2CardsRecoverResponse,
} from "./endpoints/items/post-content-v2-cards-recover/types.js";
export type {
  PostContentV2CardsRecoverInput,
  PostContentV2CardsRecoverResponse,
} from "./endpoints/items/post-content-v2-cards-recover/types.js";
import { executePostContentV2GetCardsTrash } from "./endpoints/items/post-content-v2-get-cards-trash/execute.js";
import type {
  PostContentV2GetCardsTrashInput,
  PostContentV2GetCardsTrashResponse,
} from "./endpoints/items/post-content-v2-get-cards-trash/types.js";
export type {
  PostContentV2GetCardsTrashInput,
  PostContentV2GetCardsTrashResponse,
} from "./endpoints/items/post-content-v2-get-cards-trash/types.js";
import { executeGetContentV2CardsLimits } from "./endpoints/items/get-content-v2-cards-limits/execute.js";
import type { GetContentV2CardsLimitsResponse } from "./endpoints/items/get-content-v2-cards-limits/types.js";
export type {
  GetContentV2CardsLimitsInput,
  GetContentV2CardsLimitsResponse,
} from "./endpoints/items/get-content-v2-cards-limits/types.js";
import { executePostContentV2Barcodes } from "./endpoints/items/post-content-v2-barcodes/execute.js";
import type {
  PostContentV2BarcodesInput,
  PostContentV2BarcodesResponse,
} from "./endpoints/items/post-content-v2-barcodes/types.js";
export type {
  PostContentV2BarcodesInput,
  PostContentV2BarcodesResponse,
} from "./endpoints/items/post-content-v2-barcodes/types.js";
import { executePostContentV2CardsUpload } from "./endpoints/items/post-content-v2-cards-upload/execute.js";
import type {
  PostContentV2CardsUploadInput,
  PostContentV2CardsUploadResponse,
} from "./endpoints/items/post-content-v2-cards-upload/types.js";
export type {
  PostContentV2CardsUploadInput,
  PostContentV2CardsUploadResponse,
} from "./endpoints/items/post-content-v2-cards-upload/types.js";
import { executePostContentV2CardsUploadAdd } from "./endpoints/items/post-content-v2-cards-upload-add/execute.js";
import type {
  PostContentV2CardsUploadAddInput,
  PostContentV2CardsUploadAddResponse,
} from "./endpoints/items/post-content-v2-cards-upload-add/types.js";
export type {
  PostContentV2CardsUploadAddInput,
  PostContentV2CardsUploadAddResponse,
} from "./endpoints/items/post-content-v2-cards-upload-add/types.js";
import { executePostContentV3MediaFile } from "./endpoints/items/post-content-v3-media-file/execute.js";
import type {
  PostContentV3MediaFileInput,
  PostContentV3MediaFileResponse,
} from "./endpoints/items/post-content-v3-media-file/types.js";
export type {
  PostContentV3MediaFileInput,
  PostContentV3MediaFileResponse,
} from "./endpoints/items/post-content-v3-media-file/types.js";
import { executePostContentV3MediaSave } from "./endpoints/items/post-content-v3-media-save/execute.js";
import type {
  PostContentV3MediaSaveInput,
  PostContentV3MediaSaveResponse,
} from "./endpoints/items/post-content-v3-media-save/types.js";
export type {
  PostContentV3MediaSaveInput,
  PostContentV3MediaSaveResponse,
} from "./endpoints/items/post-content-v3-media-save/types.js";
import { executePostV1RecommendationsList } from "./endpoints/items/post-v1-recommendations-list/execute.js";
import type {
  PostV1RecommendationsListInput,
  PostV1RecommendationsListResponse,
} from "./endpoints/items/post-v1-recommendations-list/types.js";
export type {
  PostV1RecommendationsListInput,
  PostV1RecommendationsListResponse,
} from "./endpoints/items/post-v1-recommendations-list/types.js";
import { executePostV1RecommendationsSet } from "./endpoints/items/post-v1-recommendations-set/execute.js";
import type {
  PostV1RecommendationsSetInput,
  PostV1RecommendationsSetResponse,
} from "./endpoints/items/post-v1-recommendations-set/types.js";
export type {
  PostV1RecommendationsSetInput,
  PostV1RecommendationsSetResponse,
} from "./endpoints/items/post-v1-recommendations-set/types.js";
import { executePostApiV2UploadTask } from "./endpoints/items/post-api-v2-upload-task/execute.js";
import type {
  PostApiV2UploadTaskInput,
  PostApiV2UploadTaskResponse,
} from "./endpoints/items/post-api-v2-upload-task/types.js";
export type {
  PostApiV2UploadTaskInput,
  PostApiV2UploadTaskResponse,
} from "./endpoints/items/post-api-v2-upload-task/types.js";
import { executePostApiV2UploadTaskSize } from "./endpoints/items/post-api-v2-upload-task-size/execute.js";
import type {
  PostApiV2UploadTaskSizeInput,
  PostApiV2UploadTaskSizeResponse,
} from "./endpoints/items/post-api-v2-upload-task-size/types.js";
export type {
  PostApiV2UploadTaskSizeInput,
  PostApiV2UploadTaskSizeResponse,
} from "./endpoints/items/post-api-v2-upload-task-size/types.js";
import { executePostApiV2UploadTaskClubDiscount } from "./endpoints/items/post-api-v2-upload-task-club-discount/execute.js";
import type {
  PostApiV2UploadTaskClubDiscountInput,
  PostApiV2UploadTaskClubDiscountResponse,
} from "./endpoints/items/post-api-v2-upload-task-club-discount/types.js";
export type {
  PostApiV2UploadTaskClubDiscountInput,
  PostApiV2UploadTaskClubDiscountResponse,
} from "./endpoints/items/post-api-v2-upload-task-club-discount/types.js";
import { executePostV1UploadTaskB2bWholesale } from "./endpoints/items/post-v1-upload-task-b2b-wholesale/execute.js";
import type {
  PostV1UploadTaskB2bWholesaleInput,
  PostV1UploadTaskB2bWholesaleResponse,
} from "./endpoints/items/post-v1-upload-task-b2b-wholesale/types.js";
export type {
  PostV1UploadTaskB2bWholesaleInput,
  PostV1UploadTaskB2bWholesaleResponse,
} from "./endpoints/items/post-v1-upload-task-b2b-wholesale/types.js";
import { executeGetApiV2HistoryTasks } from "./endpoints/items/get-api-v2-history-tasks/execute.js";
import type {
  GetApiV2HistoryTasksInput,
  GetApiV2HistoryTasksResponse,
} from "./endpoints/items/get-api-v2-history-tasks/types.js";
export type {
  GetApiV2HistoryTasksInput,
  GetApiV2HistoryTasksResponse,
} from "./endpoints/items/get-api-v2-history-tasks/types.js";
import { executeGetApiV2HistoryGoodsTask } from "./endpoints/items/get-api-v2-history-goods-task/execute.js";
import type {
  GetApiV2HistoryGoodsTaskInput,
  GetApiV2HistoryGoodsTaskResponse,
} from "./endpoints/items/get-api-v2-history-goods-task/types.js";
export type {
  GetApiV2HistoryGoodsTaskInput,
  GetApiV2HistoryGoodsTaskResponse,
} from "./endpoints/items/get-api-v2-history-goods-task/types.js";
import { executeGetApiV2BufferTasks } from "./endpoints/items/get-api-v2-buffer-tasks/execute.js";
import type {
  GetApiV2BufferTasksInput,
  GetApiV2BufferTasksResponse,
} from "./endpoints/items/get-api-v2-buffer-tasks/types.js";
export type {
  GetApiV2BufferTasksInput,
  GetApiV2BufferTasksResponse,
} from "./endpoints/items/get-api-v2-buffer-tasks/types.js";
import { executeGetApiV2BufferGoodsTask } from "./endpoints/items/get-api-v2-buffer-goods-task/execute.js";
import type {
  GetApiV2BufferGoodsTaskInput,
  GetApiV2BufferGoodsTaskResponse,
} from "./endpoints/items/get-api-v2-buffer-goods-task/types.js";
export type {
  GetApiV2BufferGoodsTaskInput,
  GetApiV2BufferGoodsTaskResponse,
} from "./endpoints/items/get-api-v2-buffer-goods-task/types.js";
import { executeGetApiV2ListGoodsFilter } from "./endpoints/items/get-api-v2-list-goods-filter/execute.js";
import type {
  GetApiV2ListGoodsFilterInput,
  GetApiV2ListGoodsFilterResponse,
} from "./endpoints/items/get-api-v2-list-goods-filter/types.js";
export type {
  GetApiV2ListGoodsFilterInput,
  GetApiV2ListGoodsFilterResponse,
} from "./endpoints/items/get-api-v2-list-goods-filter/types.js";
import { executePostApiV2ListGoodsFilter } from "./endpoints/items/post-api-v2-list-goods-filter/execute.js";
import type {
  PostApiV2ListGoodsFilterInput,
  PostApiV2ListGoodsFilterResponse,
} from "./endpoints/items/post-api-v2-list-goods-filter/types.js";
export type {
  PostApiV2ListGoodsFilterInput,
  PostApiV2ListGoodsFilterResponse,
} from "./endpoints/items/post-api-v2-list-goods-filter/types.js";
import { executeGetApiV2ListGoodsSizeNm } from "./endpoints/items/get-api-v2-list-goods-size-nm/execute.js";
import type {
  GetApiV2ListGoodsSizeNmInput,
  GetApiV2ListGoodsSizeNmResponse,
} from "./endpoints/items/get-api-v2-list-goods-size-nm/types.js";
export type {
  GetApiV2ListGoodsSizeNmInput,
  GetApiV2ListGoodsSizeNmResponse,
} from "./endpoints/items/get-api-v2-list-goods-size-nm/types.js";
import { executeGetApiV2QuarantineGoods } from "./endpoints/items/get-api-v2-quarantine-goods/execute.js";
import type {
  GetApiV2QuarantineGoodsInput,
  GetApiV2QuarantineGoodsResponse,
} from "./endpoints/items/get-api-v2-quarantine-goods/types.js";
export type {
  GetApiV2QuarantineGoodsInput,
  GetApiV2QuarantineGoodsResponse,
} from "./endpoints/items/get-api-v2-quarantine-goods/types.js";
import { executePutApiV3StocksWarehouseId } from "./endpoints/items/put-api-v3-stocks-warehouse-id/execute.js";
import type {
  PutApiV3StocksWarehouseIdInput,
  PutApiV3StocksWarehouseIdResponse,
} from "./endpoints/items/put-api-v3-stocks-warehouse-id/types.js";
export type {
  PutApiV3StocksWarehouseIdInput,
  PutApiV3StocksWarehouseIdResponse,
} from "./endpoints/items/put-api-v3-stocks-warehouse-id/types.js";
import { executeDeleteApiV3StocksWarehouseId } from "./endpoints/items/delete-api-v3-stocks-warehouse-id/execute.js";
import type {
  DeleteApiV3StocksWarehouseIdInput,
  DeleteApiV3StocksWarehouseIdResponse,
} from "./endpoints/items/delete-api-v3-stocks-warehouse-id/types.js";
export type {
  DeleteApiV3StocksWarehouseIdInput,
  DeleteApiV3StocksWarehouseIdResponse,
} from "./endpoints/items/delete-api-v3-stocks-warehouse-id/types.js";
import { executePostApiV3StocksWarehouseId } from "./endpoints/items/post-api-v3-stocks-warehouse-id/execute.js";
import type {
  PostApiV3StocksWarehouseIdInput,
  PostApiV3StocksWarehouseIdResponse,
} from "./endpoints/items/post-api-v3-stocks-warehouse-id/types.js";
export type {
  PostApiV3StocksWarehouseIdInput,
  PostApiV3StocksWarehouseIdResponse,
} from "./endpoints/items/post-api-v3-stocks-warehouse-id/types.js";
import { executeGetApiV3Offices } from "./endpoints/items/get-api-v3-offices/execute.js";
import type { GetApiV3OfficesResponse } from "./endpoints/items/get-api-v3-offices/types.js";
export type {
  GetApiV3OfficesInput,
  GetApiV3OfficesResponse,
} from "./endpoints/items/get-api-v3-offices/types.js";
import { executeGetApiV3Warehouses } from "./endpoints/items/get-api-v3-warehouses/execute.js";
import type { GetApiV3WarehousesResponse } from "./endpoints/items/get-api-v3-warehouses/types.js";
export type {
  GetApiV3WarehousesInput,
  GetApiV3WarehousesResponse,
} from "./endpoints/items/get-api-v3-warehouses/types.js";
import { executePostApiV3Warehouses } from "./endpoints/items/post-api-v3-warehouses/execute.js";
import type {
  PostApiV3WarehousesInput,
  PostApiV3WarehousesResponse,
} from "./endpoints/items/post-api-v3-warehouses/types.js";
export type {
  PostApiV3WarehousesInput,
  PostApiV3WarehousesResponse,
} from "./endpoints/items/post-api-v3-warehouses/types.js";
import { executePutApiV3WarehousesWarehouseId } from "./endpoints/items/put-api-v3-warehouses-warehouse-id/execute.js";
import type {
  PutApiV3WarehousesWarehouseIdInput,
  PutApiV3WarehousesWarehouseIdResponse,
} from "./endpoints/items/put-api-v3-warehouses-warehouse-id/types.js";
export type {
  PutApiV3WarehousesWarehouseIdInput,
  PutApiV3WarehousesWarehouseIdResponse,
} from "./endpoints/items/put-api-v3-warehouses-warehouse-id/types.js";
import { executeDeleteApiV3WarehousesWarehouseId } from "./endpoints/items/delete-api-v3-warehouses-warehouse-id/execute.js";
import type {
  DeleteApiV3WarehousesWarehouseIdInput,
  DeleteApiV3WarehousesWarehouseIdResponse,
} from "./endpoints/items/delete-api-v3-warehouses-warehouse-id/types.js";
export type {
  DeleteApiV3WarehousesWarehouseIdInput,
  DeleteApiV3WarehousesWarehouseIdResponse,
} from "./endpoints/items/delete-api-v3-warehouses-warehouse-id/types.js";
import { executeGetApiV3DbwWarehousesWarehouseIdContacts } from "./endpoints/items/get-api-v3-dbw-warehouses-warehouse-id-contacts/execute.js";
import type {
  GetApiV3DbwWarehousesWarehouseIdContactsInput,
  GetApiV3DbwWarehousesWarehouseIdContactsResponse,
} from "./endpoints/items/get-api-v3-dbw-warehouses-warehouse-id-contacts/types.js";
export type {
  GetApiV3DbwWarehousesWarehouseIdContactsInput,
  GetApiV3DbwWarehousesWarehouseIdContactsResponse,
} from "./endpoints/items/get-api-v3-dbw-warehouses-warehouse-id-contacts/types.js";
import { executePutApiV3DbwWarehousesWarehouseIdContacts } from "./endpoints/items/put-api-v3-dbw-warehouses-warehouse-id-contacts/execute.js";
import type {
  PutApiV3DbwWarehousesWarehouseIdContactsInput,
  PutApiV3DbwWarehousesWarehouseIdContactsResponse,
} from "./endpoints/items/put-api-v3-dbw-warehouses-warehouse-id-contacts/types.js";
export type {
  PutApiV3DbwWarehousesWarehouseIdContactsInput,
  PutApiV3DbwWarehousesWarehouseIdContactsResponse,
} from "./endpoints/items/put-api-v3-dbw-warehouses-warehouse-id-contacts/types.js";
import { executeGetApiV3PassesOffices } from "./endpoints/ordersFbs/get-api-v3-passes-offices/execute.js";
import type { GetApiV3PassesOfficesResponse } from "./endpoints/ordersFbs/get-api-v3-passes-offices/types.js";
export type {
  GetApiV3PassesOfficesInput,
  GetApiV3PassesOfficesResponse,
} from "./endpoints/ordersFbs/get-api-v3-passes-offices/types.js";
import { executeGetApiV3Passes } from "./endpoints/ordersFbs/get-api-v3-passes/execute.js";
import type { GetApiV3PassesResponse } from "./endpoints/ordersFbs/get-api-v3-passes/types.js";
export type {
  GetApiV3PassesInput,
  GetApiV3PassesResponse,
} from "./endpoints/ordersFbs/get-api-v3-passes/types.js";
import { executePostApiV3Passes } from "./endpoints/ordersFbs/post-api-v3-passes/execute.js";
import type {
  PostApiV3PassesInput,
  PostApiV3PassesResponse,
} from "./endpoints/ordersFbs/post-api-v3-passes/types.js";
export type {
  PostApiV3PassesInput,
  PostApiV3PassesResponse,
} from "./endpoints/ordersFbs/post-api-v3-passes/types.js";
import { executePutApiV3PassesPassId } from "./endpoints/ordersFbs/put-api-v3-passes-pass-id/execute.js";
import type {
  PutApiV3PassesPassIdInput,
  PutApiV3PassesPassIdResponse,
} from "./endpoints/ordersFbs/put-api-v3-passes-pass-id/types.js";
export type {
  PutApiV3PassesPassIdInput,
  PutApiV3PassesPassIdResponse,
} from "./endpoints/ordersFbs/put-api-v3-passes-pass-id/types.js";
import { executeDeleteApiV3PassesPassId } from "./endpoints/ordersFbs/delete-api-v3-passes-pass-id/execute.js";
import type {
  DeleteApiV3PassesPassIdInput,
  DeleteApiV3PassesPassIdResponse,
} from "./endpoints/ordersFbs/delete-api-v3-passes-pass-id/types.js";
export type {
  DeleteApiV3PassesPassIdInput,
  DeleteApiV3PassesPassIdResponse,
} from "./endpoints/ordersFbs/delete-api-v3-passes-pass-id/types.js";
import { executeGetApiV3OrdersNew } from "./endpoints/ordersFbs/get-api-v3-orders-new/execute.js";
import type { GetApiV3OrdersNewResponse } from "./endpoints/ordersFbs/get-api-v3-orders-new/types.js";
export type {
  GetApiV3OrdersNewInput,
  GetApiV3OrdersNewResponse,
} from "./endpoints/ordersFbs/get-api-v3-orders-new/types.js";
import { executeGetApiV3Orders } from "./endpoints/ordersFbs/get-api-v3-orders/execute.js";
import type {
  GetApiV3OrdersInput,
  GetApiV3OrdersResponse,
} from "./endpoints/ordersFbs/get-api-v3-orders/types.js";
export type {
  GetApiV3OrdersInput,
  GetApiV3OrdersResponse,
} from "./endpoints/ordersFbs/get-api-v3-orders/types.js";
import { executePostApiV3OrdersStatus } from "./endpoints/ordersFbs/post-api-v3-orders-status/execute.js";
import type {
  PostApiV3OrdersStatusInput,
  PostApiV3OrdersStatusResponse,
} from "./endpoints/ordersFbs/post-api-v3-orders-status/types.js";
export type {
  PostApiV3OrdersStatusInput,
  PostApiV3OrdersStatusResponse,
} from "./endpoints/ordersFbs/post-api-v3-orders-status/types.js";
import { executeGetApiV3SuppliesOrdersReshipment } from "./endpoints/ordersFbs/get-api-v3-supplies-orders-reshipment/execute.js";
import type { GetApiV3SuppliesOrdersReshipmentResponse } from "./endpoints/ordersFbs/get-api-v3-supplies-orders-reshipment/types.js";
export type {
  GetApiV3SuppliesOrdersReshipmentInput,
  GetApiV3SuppliesOrdersReshipmentResponse,
} from "./endpoints/ordersFbs/get-api-v3-supplies-orders-reshipment/types.js";
import { executePatchApiV3OrdersOrderIdCancel } from "./endpoints/ordersFbs/patch-api-v3-orders-order-id-cancel/execute.js";
import type {
  PatchApiV3OrdersOrderIdCancelInput,
  PatchApiV3OrdersOrderIdCancelResponse,
} from "./endpoints/ordersFbs/patch-api-v3-orders-order-id-cancel/types.js";
export type {
  PatchApiV3OrdersOrderIdCancelInput,
  PatchApiV3OrdersOrderIdCancelResponse,
} from "./endpoints/ordersFbs/patch-api-v3-orders-order-id-cancel/types.js";
import { executePostApiV3OrdersStickers } from "./endpoints/ordersFbs/post-api-v3-orders-stickers/execute.js";
import type {
  PostApiV3OrdersStickersInput,
  PostApiV3OrdersStickersResponse,
} from "./endpoints/ordersFbs/post-api-v3-orders-stickers/types.js";
export type {
  PostApiV3OrdersStickersInput,
  PostApiV3OrdersStickersResponse,
} from "./endpoints/ordersFbs/post-api-v3-orders-stickers/types.js";
import { executePostApiMarketplaceV3OrdersMeta } from "./endpoints/ordersFbs/post-api-marketplace-v3-orders-meta/execute.js";
import type {
  PostApiMarketplaceV3OrdersMetaInput,
  PostApiMarketplaceV3OrdersMetaResponse,
} from "./endpoints/ordersFbs/post-api-marketplace-v3-orders-meta/types.js";
export type {
  PostApiMarketplaceV3OrdersMetaInput,
  PostApiMarketplaceV3OrdersMetaResponse,
} from "./endpoints/ordersFbs/post-api-marketplace-v3-orders-meta/types.js";
import { executeDeleteApiV3OrdersOrderIdMeta } from "./endpoints/ordersFbs/delete-api-v3-orders-order-id-meta/execute.js";
import type {
  DeleteApiV3OrdersOrderIdMetaInput,
  DeleteApiV3OrdersOrderIdMetaResponse,
} from "./endpoints/ordersFbs/delete-api-v3-orders-order-id-meta/types.js";
export type {
  DeleteApiV3OrdersOrderIdMetaInput,
  DeleteApiV3OrdersOrderIdMetaResponse,
} from "./endpoints/ordersFbs/delete-api-v3-orders-order-id-meta/types.js";
import { executePutApiV3OrdersOrderIdMetaSgtin } from "./endpoints/ordersFbs/put-api-v3-orders-order-id-meta-sgtin/execute.js";
import type {
  PutApiV3OrdersOrderIdMetaSgtinInput,
  PutApiV3OrdersOrderIdMetaSgtinResponse,
} from "./endpoints/ordersFbs/put-api-v3-orders-order-id-meta-sgtin/types.js";
export type {
  PutApiV3OrdersOrderIdMetaSgtinInput,
  PutApiV3OrdersOrderIdMetaSgtinResponse,
} from "./endpoints/ordersFbs/put-api-v3-orders-order-id-meta-sgtin/types.js";
import { executePutApiV3OrdersOrderIdMetaUin } from "./endpoints/ordersFbs/put-api-v3-orders-order-id-meta-uin/execute.js";
import type {
  PutApiV3OrdersOrderIdMetaUinInput,
  PutApiV3OrdersOrderIdMetaUinResponse,
} from "./endpoints/ordersFbs/put-api-v3-orders-order-id-meta-uin/types.js";
export type {
  PutApiV3OrdersOrderIdMetaUinInput,
  PutApiV3OrdersOrderIdMetaUinResponse,
} from "./endpoints/ordersFbs/put-api-v3-orders-order-id-meta-uin/types.js";
import { executePutApiV3OrdersOrderIdMetaImei } from "./endpoints/ordersFbs/put-api-v3-orders-order-id-meta-imei/execute.js";
import type {
  PutApiV3OrdersOrderIdMetaImeiInput,
  PutApiV3OrdersOrderIdMetaImeiResponse,
} from "./endpoints/ordersFbs/put-api-v3-orders-order-id-meta-imei/types.js";
export type {
  PutApiV3OrdersOrderIdMetaImeiInput,
  PutApiV3OrdersOrderIdMetaImeiResponse,
} from "./endpoints/ordersFbs/put-api-v3-orders-order-id-meta-imei/types.js";
import { executePutApiV3OrdersOrderIdMetaGtin } from "./endpoints/ordersFbs/put-api-v3-orders-order-id-meta-gtin/execute.js";
import type {
  PutApiV3OrdersOrderIdMetaGtinInput,
  PutApiV3OrdersOrderIdMetaGtinResponse,
} from "./endpoints/ordersFbs/put-api-v3-orders-order-id-meta-gtin/types.js";
export type {
  PutApiV3OrdersOrderIdMetaGtinInput,
  PutApiV3OrdersOrderIdMetaGtinResponse,
} from "./endpoints/ordersFbs/put-api-v3-orders-order-id-meta-gtin/types.js";
import { executePutApiV3OrdersOrderIdMetaExpiration } from "./endpoints/ordersFbs/put-api-v3-orders-order-id-meta-expiration/execute.js";
import type {
  PutApiV3OrdersOrderIdMetaExpirationInput,
  PutApiV3OrdersOrderIdMetaExpirationResponse,
} from "./endpoints/ordersFbs/put-api-v3-orders-order-id-meta-expiration/types.js";
export type {
  PutApiV3OrdersOrderIdMetaExpirationInput,
  PutApiV3OrdersOrderIdMetaExpirationResponse,
} from "./endpoints/ordersFbs/put-api-v3-orders-order-id-meta-expiration/types.js";
import { executePutApiMarketplaceV3OrdersOrderIdMetaCustomsDeclaration } from "./endpoints/ordersFbs/put-api-marketplace-v3-orders-order-id-meta-customs-declaration/execute.js";
import type {
  PutApiMarketplaceV3OrdersOrderIdMetaCustomsDeclarationInput,
  PutApiMarketplaceV3OrdersOrderIdMetaCustomsDeclarationResponse,
} from "./endpoints/ordersFbs/put-api-marketplace-v3-orders-order-id-meta-customs-declaration/types.js";
export type {
  PutApiMarketplaceV3OrdersOrderIdMetaCustomsDeclarationInput,
  PutApiMarketplaceV3OrdersOrderIdMetaCustomsDeclarationResponse,
} from "./endpoints/ordersFbs/put-api-marketplace-v3-orders-order-id-meta-customs-declaration/types.js";
import { executePostApiV3OrdersStickersCrossBorder } from "./endpoints/ordersFbs/post-api-v3-orders-stickers-cross-border/execute.js";
import type {
  PostApiV3OrdersStickersCrossBorderInput,
  PostApiV3OrdersStickersCrossBorderResponse,
} from "./endpoints/ordersFbs/post-api-v3-orders-stickers-cross-border/types.js";
export type {
  PostApiV3OrdersStickersCrossBorderInput,
  PostApiV3OrdersStickersCrossBorderResponse,
} from "./endpoints/ordersFbs/post-api-v3-orders-stickers-cross-border/types.js";
import { executePostApiV3OrdersStatusHistory } from "./endpoints/ordersFbs/post-api-v3-orders-status-history/execute.js";
import type {
  PostApiV3OrdersStatusHistoryInput,
  PostApiV3OrdersStatusHistoryResponse,
} from "./endpoints/ordersFbs/post-api-v3-orders-status-history/types.js";
export type {
  PostApiV3OrdersStatusHistoryInput,
  PostApiV3OrdersStatusHistoryResponse,
} from "./endpoints/ordersFbs/post-api-v3-orders-status-history/types.js";
import { executePostApiV3OrdersClient } from "./endpoints/ordersFbs/post-api-v3-orders-client/execute.js";
import type {
  PostApiV3OrdersClientInput,
  PostApiV3OrdersClientResponse,
} from "./endpoints/ordersFbs/post-api-v3-orders-client/types.js";
export type {
  PostApiV3OrdersClientInput,
  PostApiV3OrdersClientResponse,
} from "./endpoints/ordersFbs/post-api-v3-orders-client/types.js";
import { executePostApiV3Supplies } from "./endpoints/ordersFbs/post-api-v3-supplies/execute.js";
import type {
  PostApiV3SuppliesInput,
  PostApiV3SuppliesResponse,
} from "./endpoints/ordersFbs/post-api-v3-supplies/types.js";
export type {
  PostApiV3SuppliesInput,
  PostApiV3SuppliesResponse,
} from "./endpoints/ordersFbs/post-api-v3-supplies/types.js";
import { executeGetApiV3Supplies } from "./endpoints/ordersFbs/get-api-v3-supplies/execute.js";
import type {
  GetApiV3SuppliesInput,
  GetApiV3SuppliesResponse,
} from "./endpoints/ordersFbs/get-api-v3-supplies/types.js";
export type {
  GetApiV3SuppliesInput,
  GetApiV3SuppliesResponse,
} from "./endpoints/ordersFbs/get-api-v3-supplies/types.js";
import { executePatchApiMarketplaceV3SuppliesSupplyIdOrders } from "./endpoints/ordersFbs/patch-api-marketplace-v3-supplies-supply-id-orders/execute.js";
import type {
  PatchApiMarketplaceV3SuppliesSupplyIdOrdersInput,
  PatchApiMarketplaceV3SuppliesSupplyIdOrdersResponse,
} from "./endpoints/ordersFbs/patch-api-marketplace-v3-supplies-supply-id-orders/types.js";
export type {
  PatchApiMarketplaceV3SuppliesSupplyIdOrdersInput,
  PatchApiMarketplaceV3SuppliesSupplyIdOrdersResponse,
} from "./endpoints/ordersFbs/patch-api-marketplace-v3-supplies-supply-id-orders/types.js";
import { executeGetApiV3SuppliesSupplyId } from "./endpoints/ordersFbs/get-api-v3-supplies-supply-id/execute.js";
import type {
  GetApiV3SuppliesSupplyIdInput,
  GetApiV3SuppliesSupplyIdResponse,
} from "./endpoints/ordersFbs/get-api-v3-supplies-supply-id/types.js";
export type {
  GetApiV3SuppliesSupplyIdInput,
  GetApiV3SuppliesSupplyIdResponse,
} from "./endpoints/ordersFbs/get-api-v3-supplies-supply-id/types.js";
import { executeDeleteApiV3SuppliesSupplyId } from "./endpoints/ordersFbs/delete-api-v3-supplies-supply-id/execute.js";
import type {
  DeleteApiV3SuppliesSupplyIdInput,
  DeleteApiV3SuppliesSupplyIdResponse,
} from "./endpoints/ordersFbs/delete-api-v3-supplies-supply-id/types.js";
export type {
  DeleteApiV3SuppliesSupplyIdInput,
  DeleteApiV3SuppliesSupplyIdResponse,
} from "./endpoints/ordersFbs/delete-api-v3-supplies-supply-id/types.js";
import { executeGetApiMarketplaceV3SuppliesSupplyIdOrderIds } from "./endpoints/ordersFbs/get-api-marketplace-v3-supplies-supply-id-order-ids/execute.js";
import type {
  GetApiMarketplaceV3SuppliesSupplyIdOrderIdsInput,
  GetApiMarketplaceV3SuppliesSupplyIdOrderIdsResponse,
} from "./endpoints/ordersFbs/get-api-marketplace-v3-supplies-supply-id-order-ids/types.js";
export type {
  GetApiMarketplaceV3SuppliesSupplyIdOrderIdsInput,
  GetApiMarketplaceV3SuppliesSupplyIdOrderIdsResponse,
} from "./endpoints/ordersFbs/get-api-marketplace-v3-supplies-supply-id-order-ids/types.js";
import { executePatchApiV3SuppliesSupplyIdDeliver } from "./endpoints/ordersFbs/patch-api-v3-supplies-supply-id-deliver/execute.js";
import type {
  PatchApiV3SuppliesSupplyIdDeliverInput,
  PatchApiV3SuppliesSupplyIdDeliverResponse,
} from "./endpoints/ordersFbs/patch-api-v3-supplies-supply-id-deliver/types.js";
export type {
  PatchApiV3SuppliesSupplyIdDeliverInput,
  PatchApiV3SuppliesSupplyIdDeliverResponse,
} from "./endpoints/ordersFbs/patch-api-v3-supplies-supply-id-deliver/types.js";
import { executeGetApiV3SuppliesSupplyIdBarcode } from "./endpoints/ordersFbs/get-api-v3-supplies-supply-id-barcode/execute.js";
import type {
  GetApiV3SuppliesSupplyIdBarcodeInput,
  GetApiV3SuppliesSupplyIdBarcodeResponse,
} from "./endpoints/ordersFbs/get-api-v3-supplies-supply-id-barcode/types.js";
export type {
  GetApiV3SuppliesSupplyIdBarcodeInput,
  GetApiV3SuppliesSupplyIdBarcodeResponse,
} from "./endpoints/ordersFbs/get-api-v3-supplies-supply-id-barcode/types.js";
import { executeGetApiV3SuppliesSupplyIdTrbx } from "./endpoints/ordersFbs/get-api-v3-supplies-supply-id-trbx/execute.js";
import type {
  GetApiV3SuppliesSupplyIdTrbxInput,
  GetApiV3SuppliesSupplyIdTrbxResponse,
} from "./endpoints/ordersFbs/get-api-v3-supplies-supply-id-trbx/types.js";
export type {
  GetApiV3SuppliesSupplyIdTrbxInput,
  GetApiV3SuppliesSupplyIdTrbxResponse,
} from "./endpoints/ordersFbs/get-api-v3-supplies-supply-id-trbx/types.js";
import { executePostApiV3SuppliesSupplyIdTrbx } from "./endpoints/ordersFbs/post-api-v3-supplies-supply-id-trbx/execute.js";
import type {
  PostApiV3SuppliesSupplyIdTrbxInput,
  PostApiV3SuppliesSupplyIdTrbxResponse,
} from "./endpoints/ordersFbs/post-api-v3-supplies-supply-id-trbx/types.js";
export type {
  PostApiV3SuppliesSupplyIdTrbxInput,
  PostApiV3SuppliesSupplyIdTrbxResponse,
} from "./endpoints/ordersFbs/post-api-v3-supplies-supply-id-trbx/types.js";
import { executeDeleteApiV3SuppliesSupplyIdTrbx } from "./endpoints/ordersFbs/delete-api-v3-supplies-supply-id-trbx/execute.js";
import type {
  DeleteApiV3SuppliesSupplyIdTrbxInput,
  DeleteApiV3SuppliesSupplyIdTrbxResponse,
} from "./endpoints/ordersFbs/delete-api-v3-supplies-supply-id-trbx/types.js";
export type {
  DeleteApiV3SuppliesSupplyIdTrbxInput,
  DeleteApiV3SuppliesSupplyIdTrbxResponse,
} from "./endpoints/ordersFbs/delete-api-v3-supplies-supply-id-trbx/types.js";
import { executePostApiV3SuppliesSupplyIdTrbxStickers } from "./endpoints/ordersFbs/post-api-v3-supplies-supply-id-trbx-stickers/execute.js";
import type {
  PostApiV3SuppliesSupplyIdTrbxStickersInput,
  PostApiV3SuppliesSupplyIdTrbxStickersResponse,
} from "./endpoints/ordersFbs/post-api-v3-supplies-supply-id-trbx-stickers/types.js";
export type {
  PostApiV3SuppliesSupplyIdTrbxStickersInput,
  PostApiV3SuppliesSupplyIdTrbxStickersResponse,
} from "./endpoints/ordersFbs/post-api-v3-supplies-supply-id-trbx-stickers/types.js";
import { executeGetApiMarketplaceV3FbsOrdersArchive } from "./endpoints/ordersFbs/get-api-marketplace-v3-fbs-orders-archive/execute.js";
import type {
  GetApiMarketplaceV3FbsOrdersArchiveInput,
  GetApiMarketplaceV3FbsOrdersArchiveResponse,
} from "./endpoints/ordersFbs/get-api-marketplace-v3-fbs-orders-archive/types.js";
export type {
  GetApiMarketplaceV3FbsOrdersArchiveInput,
  GetApiMarketplaceV3FbsOrdersArchiveResponse,
} from "./endpoints/ordersFbs/get-api-marketplace-v3-fbs-orders-archive/types.js";
import { executeGetMarketplaceV3FbsSettingsAutoreturns } from "./endpoints/ordersFbs/get-marketplace-v3-fbs-settings-autoreturns/execute.js";
import type { GetMarketplaceV3FbsSettingsAutoreturnsResponse } from "./endpoints/ordersFbs/get-marketplace-v3-fbs-settings-autoreturns/types.js";
export type {
  GetMarketplaceV3FbsSettingsAutoreturnsInput,
  GetMarketplaceV3FbsSettingsAutoreturnsResponse,
} from "./endpoints/ordersFbs/get-marketplace-v3-fbs-settings-autoreturns/types.js";
import { executePatchMarketplaceV3FbsSettingsAutoreturns } from "./endpoints/ordersFbs/patch-marketplace-v3-fbs-settings-autoreturns/execute.js";
import type {
  PatchMarketplaceV3FbsSettingsAutoreturnsInput,
  PatchMarketplaceV3FbsSettingsAutoreturnsResponse,
} from "./endpoints/ordersFbs/patch-marketplace-v3-fbs-settings-autoreturns/types.js";
export type {
  PatchMarketplaceV3FbsSettingsAutoreturnsInput,
  PatchMarketplaceV3FbsSettingsAutoreturnsResponse,
} from "./endpoints/ordersFbs/patch-marketplace-v3-fbs-settings-autoreturns/types.js";
import { executePostMarketplaceV3FbsSettingsAutoreturnsItems } from "./endpoints/ordersFbs/post-marketplace-v3-fbs-settings-autoreturns-items/execute.js";
import type {
  PostMarketplaceV3FbsSettingsAutoreturnsItemsInput,
  PostMarketplaceV3FbsSettingsAutoreturnsItemsResponse,
} from "./endpoints/ordersFbs/post-marketplace-v3-fbs-settings-autoreturns-items/types.js";
export type {
  PostMarketplaceV3FbsSettingsAutoreturnsItemsInput,
  PostMarketplaceV3FbsSettingsAutoreturnsItemsResponse,
} from "./endpoints/ordersFbs/post-marketplace-v3-fbs-settings-autoreturns-items/types.js";
import { executePatchMarketplaceV3FbsSettingsAutoreturnsItems } from "./endpoints/ordersFbs/patch-marketplace-v3-fbs-settings-autoreturns-items/execute.js";
import type {
  PatchMarketplaceV3FbsSettingsAutoreturnsItemsInput,
  PatchMarketplaceV3FbsSettingsAutoreturnsItemsResponse,
} from "./endpoints/ordersFbs/patch-marketplace-v3-fbs-settings-autoreturns-items/types.js";
export type {
  PatchMarketplaceV3FbsSettingsAutoreturnsItemsInput,
  PatchMarketplaceV3FbsSettingsAutoreturnsItemsResponse,
} from "./endpoints/ordersFbs/patch-marketplace-v3-fbs-settings-autoreturns-items/types.js";
import { executeGetMarketplaceV3FbsSettingsAutoreturnsSubcategoriesRestricted } from "./endpoints/ordersFbs/get-marketplace-v3-fbs-settings-autoreturns-subcategories-restricted/execute.js";
import type {
  GetMarketplaceV3FbsSettingsAutoreturnsSubcategoriesRestrictedInput,
  GetMarketplaceV3FbsSettingsAutoreturnsSubcategoriesRestrictedResponse,
} from "./endpoints/ordersFbs/get-marketplace-v3-fbs-settings-autoreturns-subcategories-restricted/types.js";
export type {
  GetMarketplaceV3FbsSettingsAutoreturnsSubcategoriesRestrictedInput,
  GetMarketplaceV3FbsSettingsAutoreturnsSubcategoriesRestrictedResponse,
} from "./endpoints/ordersFbs/get-marketplace-v3-fbs-settings-autoreturns-subcategories-restricted/types.js";
import { executeGetV3DbwOrdersNew } from "./endpoints/ordersDbw/get-v3-dbw-orders-new/execute.js";
import type { GetV3DbwOrdersNewResponse } from "./endpoints/ordersDbw/get-v3-dbw-orders-new/types.js";
export type {
  GetV3DbwOrdersNewInput,
  GetV3DbwOrdersNewResponse,
} from "./endpoints/ordersDbw/get-v3-dbw-orders-new/types.js";
import { executeGetV3DbwOrders } from "./endpoints/ordersDbw/get-v3-dbw-orders/execute.js";
import type {
  GetV3DbwOrdersInput,
  GetV3DbwOrdersResponse,
} from "./endpoints/ordersDbw/get-v3-dbw-orders/types.js";
export type {
  GetV3DbwOrdersInput,
  GetV3DbwOrdersResponse,
} from "./endpoints/ordersDbw/get-v3-dbw-orders/types.js";
import { executePostV3DbwOrdersDeliveryDate } from "./endpoints/ordersDbw/post-v3-dbw-orders-delivery-date/execute.js";
import type {
  PostV3DbwOrdersDeliveryDateInput,
  PostV3DbwOrdersDeliveryDateResponse,
} from "./endpoints/ordersDbw/post-v3-dbw-orders-delivery-date/types.js";
export type {
  PostV3DbwOrdersDeliveryDateInput,
  PostV3DbwOrdersDeliveryDateResponse,
} from "./endpoints/ordersDbw/post-v3-dbw-orders-delivery-date/types.js";
import { executePostV3DbwOrdersClient } from "./endpoints/ordersDbw/post-v3-dbw-orders-client/execute.js";
import type {
  PostV3DbwOrdersClientInput,
  PostV3DbwOrdersClientResponse,
} from "./endpoints/ordersDbw/post-v3-dbw-orders-client/types.js";
export type {
  PostV3DbwOrdersClientInput,
  PostV3DbwOrdersClientResponse,
} from "./endpoints/ordersDbw/post-v3-dbw-orders-client/types.js";
import { executePostV3DbwOrdersStatus } from "./endpoints/ordersDbw/post-v3-dbw-orders-status/execute.js";
import type {
  PostV3DbwOrdersStatusInput,
  PostV3DbwOrdersStatusResponse,
} from "./endpoints/ordersDbw/post-v3-dbw-orders-status/types.js";
export type {
  PostV3DbwOrdersStatusInput,
  PostV3DbwOrdersStatusResponse,
} from "./endpoints/ordersDbw/post-v3-dbw-orders-status/types.js";
import { executePatchV3DbwOrdersOrderIdConfirm } from "./endpoints/ordersDbw/patch-v3-dbw-orders-order-id-confirm/execute.js";
import type {
  PatchV3DbwOrdersOrderIdConfirmInput,
  PatchV3DbwOrdersOrderIdConfirmResponse,
} from "./endpoints/ordersDbw/patch-v3-dbw-orders-order-id-confirm/types.js";
export type {
  PatchV3DbwOrdersOrderIdConfirmInput,
  PatchV3DbwOrdersOrderIdConfirmResponse,
} from "./endpoints/ordersDbw/patch-v3-dbw-orders-order-id-confirm/types.js";
import { executePostV3DbwOrdersStickers } from "./endpoints/ordersDbw/post-v3-dbw-orders-stickers/execute.js";
import type {
  PostV3DbwOrdersStickersInput,
  PostV3DbwOrdersStickersResponse,
} from "./endpoints/ordersDbw/post-v3-dbw-orders-stickers/types.js";
export type {
  PostV3DbwOrdersStickersInput,
  PostV3DbwOrdersStickersResponse,
} from "./endpoints/ordersDbw/post-v3-dbw-orders-stickers/types.js";
import { executePostV3DbwOrdersStatusDeliver } from "./endpoints/ordersDbw/post-v3-dbw-orders-status-deliver/execute.js";
import type {
  PostV3DbwOrdersStatusDeliverInput,
  PostV3DbwOrdersStatusDeliverResponse,
} from "./endpoints/ordersDbw/post-v3-dbw-orders-status-deliver/types.js";
export type {
  PostV3DbwOrdersStatusDeliverInput,
  PostV3DbwOrdersStatusDeliverResponse,
} from "./endpoints/ordersDbw/post-v3-dbw-orders-status-deliver/types.js";
import { executePostV3DbwOrdersCourier } from "./endpoints/ordersDbw/post-v3-dbw-orders-courier/execute.js";
import type {
  PostV3DbwOrdersCourierInput,
  PostV3DbwOrdersCourierResponse,
} from "./endpoints/ordersDbw/post-v3-dbw-orders-courier/types.js";
export type {
  PostV3DbwOrdersCourierInput,
  PostV3DbwOrdersCourierResponse,
} from "./endpoints/ordersDbw/post-v3-dbw-orders-courier/types.js";
import { executePatchV3DbwOrdersOrderIdCancel } from "./endpoints/ordersDbw/patch-v3-dbw-orders-order-id-cancel/execute.js";
import type {
  PatchV3DbwOrdersOrderIdCancelInput,
  PatchV3DbwOrdersOrderIdCancelResponse,
} from "./endpoints/ordersDbw/patch-v3-dbw-orders-order-id-cancel/types.js";
export type {
  PatchV3DbwOrdersOrderIdCancelInput,
  PatchV3DbwOrdersOrderIdCancelResponse,
} from "./endpoints/ordersDbw/patch-v3-dbw-orders-order-id-cancel/types.js";
import { executePostV3DbwOrdersMetaDetails } from "./endpoints/ordersDbw/post-v3-dbw-orders-meta-details/execute.js";
import type {
  PostV3DbwOrdersMetaDetailsInput,
  PostV3DbwOrdersMetaDetailsResponse,
} from "./endpoints/ordersDbw/post-v3-dbw-orders-meta-details/types.js";
export type {
  PostV3DbwOrdersMetaDetailsInput,
  PostV3DbwOrdersMetaDetailsResponse,
} from "./endpoints/ordersDbw/post-v3-dbw-orders-meta-details/types.js";
import { executePostV3DbwOrdersMetaDelete } from "./endpoints/ordersDbw/post-v3-dbw-orders-meta-delete/execute.js";
import type {
  PostV3DbwOrdersMetaDeleteInput,
  PostV3DbwOrdersMetaDeleteResponse,
} from "./endpoints/ordersDbw/post-v3-dbw-orders-meta-delete/types.js";
export type {
  PostV3DbwOrdersMetaDeleteInput,
  PostV3DbwOrdersMetaDeleteResponse,
} from "./endpoints/ordersDbw/post-v3-dbw-orders-meta-delete/types.js";
import { executePostV3DbwOrdersMetaSgtin } from "./endpoints/ordersDbw/post-v3-dbw-orders-meta-sgtin/execute.js";
import type {
  PostV3DbwOrdersMetaSgtinInput,
  PostV3DbwOrdersMetaSgtinResponse,
} from "./endpoints/ordersDbw/post-v3-dbw-orders-meta-sgtin/types.js";
export type {
  PostV3DbwOrdersMetaSgtinInput,
  PostV3DbwOrdersMetaSgtinResponse,
} from "./endpoints/ordersDbw/post-v3-dbw-orders-meta-sgtin/types.js";
import { executePutV3DbwOrdersOrderIdMetaUin } from "./endpoints/ordersDbw/put-v3-dbw-orders-order-id-meta-uin/execute.js";
import type {
  PutV3DbwOrdersOrderIdMetaUinInput,
  PutV3DbwOrdersOrderIdMetaUinResponse,
} from "./endpoints/ordersDbw/put-v3-dbw-orders-order-id-meta-uin/types.js";
export type {
  PutV3DbwOrdersOrderIdMetaUinInput,
  PutV3DbwOrdersOrderIdMetaUinResponse,
} from "./endpoints/ordersDbw/put-v3-dbw-orders-order-id-meta-uin/types.js";
import { executePutV3DbwOrdersOrderIdMetaImei } from "./endpoints/ordersDbw/put-v3-dbw-orders-order-id-meta-imei/execute.js";
import type {
  PutV3DbwOrdersOrderIdMetaImeiInput,
  PutV3DbwOrdersOrderIdMetaImeiResponse,
} from "./endpoints/ordersDbw/put-v3-dbw-orders-order-id-meta-imei/types.js";
export type {
  PutV3DbwOrdersOrderIdMetaImeiInput,
  PutV3DbwOrdersOrderIdMetaImeiResponse,
} from "./endpoints/ordersDbw/put-v3-dbw-orders-order-id-meta-imei/types.js";
import { executePutV3DbwOrdersOrderIdMetaGtin } from "./endpoints/ordersDbw/put-v3-dbw-orders-order-id-meta-gtin/execute.js";
import type {
  PutV3DbwOrdersOrderIdMetaGtinInput,
  PutV3DbwOrdersOrderIdMetaGtinResponse,
} from "./endpoints/ordersDbw/put-v3-dbw-orders-order-id-meta-gtin/types.js";
export type {
  PutV3DbwOrdersOrderIdMetaGtinInput,
  PutV3DbwOrdersOrderIdMetaGtinResponse,
} from "./endpoints/ordersDbw/put-v3-dbw-orders-order-id-meta-gtin/types.js";
import { executeGetV3DbsOrdersNew } from "./endpoints/dbs/get-v3-dbs-orders-new/execute.js";
import type { GetV3DbsOrdersNewResponse } from "./endpoints/dbs/get-v3-dbs-orders-new/types.js";
export type {
  GetV3DbsOrdersNewInput,
  GetV3DbsOrdersNewResponse,
} from "./endpoints/dbs/get-v3-dbs-orders-new/types.js";
import { executeGetV3DbsOrders } from "./endpoints/dbs/get-v3-dbs-orders/execute.js";
import type {
  GetV3DbsOrdersInput,
  GetV3DbsOrdersResponse,
} from "./endpoints/dbs/get-v3-dbs-orders/types.js";
export type {
  GetV3DbsOrdersInput,
  GetV3DbsOrdersResponse,
} from "./endpoints/dbs/get-v3-dbs-orders/types.js";
import { executePostV3DbsOrdersFinalPrice } from "./endpoints/dbs/post-v3-dbs-orders-final-price/execute.js";
import type {
  PostV3DbsOrdersFinalPriceInput,
  PostV3DbsOrdersFinalPriceResponse,
} from "./endpoints/dbs/post-v3-dbs-orders-final-price/types.js";
export type {
  PostV3DbsOrdersFinalPriceInput,
  PostV3DbsOrdersFinalPriceResponse,
} from "./endpoints/dbs/post-v3-dbs-orders-final-price/types.js";
import { executePostV3DbsGroupsInfo } from "./endpoints/dbs/post-v3-dbs-groups-info/execute.js";
import type {
  PostV3DbsGroupsInfoInput,
  PostV3DbsGroupsInfoResponse,
} from "./endpoints/dbs/post-v3-dbs-groups-info/types.js";
export type {
  PostV3DbsGroupsInfoInput,
  PostV3DbsGroupsInfoResponse,
} from "./endpoints/dbs/post-v3-dbs-groups-info/types.js";
import { executePostV3DbsOrdersClient } from "./endpoints/dbs/post-v3-dbs-orders-client/execute.js";
import type {
  PostV3DbsOrdersClientInput,
  PostV3DbsOrdersClientResponse,
} from "./endpoints/dbs/post-v3-dbs-orders-client/types.js";
export type {
  PostV3DbsOrdersClientInput,
  PostV3DbsOrdersClientResponse,
} from "./endpoints/dbs/post-v3-dbs-orders-client/types.js";
import { executePostV3DbsOrdersB2bInfo } from "./endpoints/dbs/post-v3-dbs-orders-b2b-info/execute.js";
import type {
  PostV3DbsOrdersB2bInfoInput,
  PostV3DbsOrdersB2bInfoResponse,
} from "./endpoints/dbs/post-v3-dbs-orders-b2b-info/types.js";
export type {
  PostV3DbsOrdersB2bInfoInput,
  PostV3DbsOrdersB2bInfoResponse,
} from "./endpoints/dbs/post-v3-dbs-orders-b2b-info/types.js";
import { executePostV3DbsOrdersDeliveryDate } from "./endpoints/dbs/post-v3-dbs-orders-delivery-date/execute.js";
import type {
  PostV3DbsOrdersDeliveryDateInput,
  PostV3DbsOrdersDeliveryDateResponse,
} from "./endpoints/dbs/post-v3-dbs-orders-delivery-date/types.js";
export type {
  PostV3DbsOrdersDeliveryDateInput,
  PostV3DbsOrdersDeliveryDateResponse,
} from "./endpoints/dbs/post-v3-dbs-orders-delivery-date/types.js";
import { executePostV3DbsOrdersStatusInfo } from "./endpoints/dbs/post-v3-dbs-orders-status-info/execute.js";
import type {
  PostV3DbsOrdersStatusInfoInput,
  PostV3DbsOrdersStatusInfoResponse,
} from "./endpoints/dbs/post-v3-dbs-orders-status-info/types.js";
export type {
  PostV3DbsOrdersStatusInfoInput,
  PostV3DbsOrdersStatusInfoResponse,
} from "./endpoints/dbs/post-v3-dbs-orders-status-info/types.js";
import { executePostV3DbsOrdersStatusCancel } from "./endpoints/dbs/post-v3-dbs-orders-status-cancel/execute.js";
import type {
  PostV3DbsOrdersStatusCancelInput,
  PostV3DbsOrdersStatusCancelResponse,
} from "./endpoints/dbs/post-v3-dbs-orders-status-cancel/types.js";
export type {
  PostV3DbsOrdersStatusCancelInput,
  PostV3DbsOrdersStatusCancelResponse,
} from "./endpoints/dbs/post-v3-dbs-orders-status-cancel/types.js";
import { executePostV3DbsOrdersStatusConfirm } from "./endpoints/dbs/post-v3-dbs-orders-status-confirm/execute.js";
import type {
  PostV3DbsOrdersStatusConfirmInput,
  PostV3DbsOrdersStatusConfirmResponse,
} from "./endpoints/dbs/post-v3-dbs-orders-status-confirm/types.js";
export type {
  PostV3DbsOrdersStatusConfirmInput,
  PostV3DbsOrdersStatusConfirmResponse,
} from "./endpoints/dbs/post-v3-dbs-orders-status-confirm/types.js";
import { executePostV3DbsOrdersStickers } from "./endpoints/dbs/post-v3-dbs-orders-stickers/execute.js";
import type {
  PostV3DbsOrdersStickersInput,
  PostV3DbsOrdersStickersResponse,
} from "./endpoints/dbs/post-v3-dbs-orders-stickers/types.js";
export type {
  PostV3DbsOrdersStickersInput,
  PostV3DbsOrdersStickersResponse,
} from "./endpoints/dbs/post-v3-dbs-orders-stickers/types.js";
import { executePostV3DbsOrdersStatusDeliver } from "./endpoints/dbs/post-v3-dbs-orders-status-deliver/execute.js";
import type {
  PostV3DbsOrdersStatusDeliverInput,
  PostV3DbsOrdersStatusDeliverResponse,
} from "./endpoints/dbs/post-v3-dbs-orders-status-deliver/types.js";
export type {
  PostV3DbsOrdersStatusDeliverInput,
  PostV3DbsOrdersStatusDeliverResponse,
} from "./endpoints/dbs/post-v3-dbs-orders-status-deliver/types.js";
import { executePostV3DbsOrdersStatusReceive } from "./endpoints/dbs/post-v3-dbs-orders-status-receive/execute.js";
import type {
  PostV3DbsOrdersStatusReceiveInput,
  PostV3DbsOrdersStatusReceiveResponse,
} from "./endpoints/dbs/post-v3-dbs-orders-status-receive/types.js";
export type {
  PostV3DbsOrdersStatusReceiveInput,
  PostV3DbsOrdersStatusReceiveResponse,
} from "./endpoints/dbs/post-v3-dbs-orders-status-receive/types.js";
import { executePostV3DbsOrdersStatusReject } from "./endpoints/dbs/post-v3-dbs-orders-status-reject/execute.js";
import type {
  PostV3DbsOrdersStatusRejectInput,
  PostV3DbsOrdersStatusRejectResponse,
} from "./endpoints/dbs/post-v3-dbs-orders-status-reject/types.js";
export type {
  PostV3DbsOrdersStatusRejectInput,
  PostV3DbsOrdersStatusRejectResponse,
} from "./endpoints/dbs/post-v3-dbs-orders-status-reject/types.js";
import { executePostV3DbsOrdersMetaDetails } from "./endpoints/dbs/post-v3-dbs-orders-meta-details/execute.js";
import type {
  PostV3DbsOrdersMetaDetailsInput,
  PostV3DbsOrdersMetaDetailsResponse,
} from "./endpoints/dbs/post-v3-dbs-orders-meta-details/types.js";
export type {
  PostV3DbsOrdersMetaDetailsInput,
  PostV3DbsOrdersMetaDetailsResponse,
} from "./endpoints/dbs/post-v3-dbs-orders-meta-details/types.js";
import { executePostV3DbsOrdersMetaDelete } from "./endpoints/dbs/post-v3-dbs-orders-meta-delete/execute.js";
import type {
  PostV3DbsOrdersMetaDeleteInput,
  PostV3DbsOrdersMetaDeleteResponse,
} from "./endpoints/dbs/post-v3-dbs-orders-meta-delete/types.js";
export type {
  PostV3DbsOrdersMetaDeleteInput,
  PostV3DbsOrdersMetaDeleteResponse,
} from "./endpoints/dbs/post-v3-dbs-orders-meta-delete/types.js";
import { executePostV3DbsOrdersMetaSgtin } from "./endpoints/dbs/post-v3-dbs-orders-meta-sgtin/execute.js";
import type {
  PostV3DbsOrdersMetaSgtinInput,
  PostV3DbsOrdersMetaSgtinResponse,
} from "./endpoints/dbs/post-v3-dbs-orders-meta-sgtin/types.js";
export type {
  PostV3DbsOrdersMetaSgtinInput,
  PostV3DbsOrdersMetaSgtinResponse,
} from "./endpoints/dbs/post-v3-dbs-orders-meta-sgtin/types.js";
import { executePostV3DbsOrdersMetaUin } from "./endpoints/dbs/post-v3-dbs-orders-meta-uin/execute.js";
import type {
  PostV3DbsOrdersMetaUinInput,
  PostV3DbsOrdersMetaUinResponse,
} from "./endpoints/dbs/post-v3-dbs-orders-meta-uin/types.js";
export type {
  PostV3DbsOrdersMetaUinInput,
  PostV3DbsOrdersMetaUinResponse,
} from "./endpoints/dbs/post-v3-dbs-orders-meta-uin/types.js";
import { executePostV3DbsOrdersMetaImei } from "./endpoints/dbs/post-v3-dbs-orders-meta-imei/execute.js";
import type {
  PostV3DbsOrdersMetaImeiInput,
  PostV3DbsOrdersMetaImeiResponse,
} from "./endpoints/dbs/post-v3-dbs-orders-meta-imei/types.js";
export type {
  PostV3DbsOrdersMetaImeiInput,
  PostV3DbsOrdersMetaImeiResponse,
} from "./endpoints/dbs/post-v3-dbs-orders-meta-imei/types.js";
import { executePostV3DbsOrdersMetaGtin } from "./endpoints/dbs/post-v3-dbs-orders-meta-gtin/execute.js";
import type {
  PostV3DbsOrdersMetaGtinInput,
  PostV3DbsOrdersMetaGtinResponse,
} from "./endpoints/dbs/post-v3-dbs-orders-meta-gtin/types.js";
export type {
  PostV3DbsOrdersMetaGtinInput,
  PostV3DbsOrdersMetaGtinResponse,
} from "./endpoints/dbs/post-v3-dbs-orders-meta-gtin/types.js";
import { executePostV3DbsOrdersMetaCustomsDeclaration } from "./endpoints/dbs/post-v3-dbs-orders-meta-customs-declaration/execute.js";
import type {
  PostV3DbsOrdersMetaCustomsDeclarationInput,
  PostV3DbsOrdersMetaCustomsDeclarationResponse,
} from "./endpoints/dbs/post-v3-dbs-orders-meta-customs-declaration/types.js";
export type {
  PostV3DbsOrdersMetaCustomsDeclarationInput,
  PostV3DbsOrdersMetaCustomsDeclarationResponse,
} from "./endpoints/dbs/post-v3-dbs-orders-meta-customs-declaration/types.js";
import { executeGetV3ClickCollectOrdersNew } from "./endpoints/inStorePickup/get-v3-click-collect-orders-new/execute.js";
import type { GetV3ClickCollectOrdersNewResponse } from "./endpoints/inStorePickup/get-v3-click-collect-orders-new/types.js";
export type {
  GetV3ClickCollectOrdersNewInput,
  GetV3ClickCollectOrdersNewResponse,
} from "./endpoints/inStorePickup/get-v3-click-collect-orders-new/types.js";
import { executeGetV3ClickCollectOrders } from "./endpoints/inStorePickup/get-v3-click-collect-orders/execute.js";
import type {
  GetV3ClickCollectOrdersInput,
  GetV3ClickCollectOrdersResponse,
} from "./endpoints/inStorePickup/get-v3-click-collect-orders/types.js";
export type {
  GetV3ClickCollectOrdersInput,
  GetV3ClickCollectOrdersResponse,
} from "./endpoints/inStorePickup/get-v3-click-collect-orders/types.js";
import { executePostV3ClickCollectOrdersFinalPrice } from "./endpoints/inStorePickup/post-v3-click-collect-orders-final-price/execute.js";
import type {
  PostV3ClickCollectOrdersFinalPriceInput,
  PostV3ClickCollectOrdersFinalPriceResponse,
} from "./endpoints/inStorePickup/post-v3-click-collect-orders-final-price/types.js";
export type {
  PostV3ClickCollectOrdersFinalPriceInput,
  PostV3ClickCollectOrdersFinalPriceResponse,
} from "./endpoints/inStorePickup/post-v3-click-collect-orders-final-price/types.js";
import { executePostV3ClickCollectOrdersStatusConfirm } from "./endpoints/inStorePickup/post-v3-click-collect-orders-status-confirm/execute.js";
import type {
  PostV3ClickCollectOrdersStatusConfirmInput,
  PostV3ClickCollectOrdersStatusConfirmResponse,
} from "./endpoints/inStorePickup/post-v3-click-collect-orders-status-confirm/types.js";
export type {
  PostV3ClickCollectOrdersStatusConfirmInput,
  PostV3ClickCollectOrdersStatusConfirmResponse,
} from "./endpoints/inStorePickup/post-v3-click-collect-orders-status-confirm/types.js";
import { executePostV3ClickCollectOrdersStatusPrepare } from "./endpoints/inStorePickup/post-v3-click-collect-orders-status-prepare/execute.js";
import type {
  PostV3ClickCollectOrdersStatusPrepareInput,
  PostV3ClickCollectOrdersStatusPrepareResponse,
} from "./endpoints/inStorePickup/post-v3-click-collect-orders-status-prepare/types.js";
export type {
  PostV3ClickCollectOrdersStatusPrepareInput,
  PostV3ClickCollectOrdersStatusPrepareResponse,
} from "./endpoints/inStorePickup/post-v3-click-collect-orders-status-prepare/types.js";
import { executePostV3ClickCollectOrdersClient } from "./endpoints/inStorePickup/post-v3-click-collect-orders-client/execute.js";
import type {
  PostV3ClickCollectOrdersClientInput,
  PostV3ClickCollectOrdersClientResponse,
} from "./endpoints/inStorePickup/post-v3-click-collect-orders-client/types.js";
export type {
  PostV3ClickCollectOrdersClientInput,
  PostV3ClickCollectOrdersClientResponse,
} from "./endpoints/inStorePickup/post-v3-click-collect-orders-client/types.js";
import { executePostV3ClickCollectOrdersClientIdentity } from "./endpoints/inStorePickup/post-v3-click-collect-orders-client-identity/execute.js";
import type {
  PostV3ClickCollectOrdersClientIdentityInput,
  PostV3ClickCollectOrdersClientIdentityResponse,
} from "./endpoints/inStorePickup/post-v3-click-collect-orders-client-identity/types.js";
export type {
  PostV3ClickCollectOrdersClientIdentityInput,
  PostV3ClickCollectOrdersClientIdentityResponse,
} from "./endpoints/inStorePickup/post-v3-click-collect-orders-client-identity/types.js";
import { executePostV3ClickCollectOrdersStatusReceive } from "./endpoints/inStorePickup/post-v3-click-collect-orders-status-receive/execute.js";
import type {
  PostV3ClickCollectOrdersStatusReceiveInput,
  PostV3ClickCollectOrdersStatusReceiveResponse,
} from "./endpoints/inStorePickup/post-v3-click-collect-orders-status-receive/types.js";
export type {
  PostV3ClickCollectOrdersStatusReceiveInput,
  PostV3ClickCollectOrdersStatusReceiveResponse,
} from "./endpoints/inStorePickup/post-v3-click-collect-orders-status-receive/types.js";
import { executePostV3ClickCollectOrdersStatusReject } from "./endpoints/inStorePickup/post-v3-click-collect-orders-status-reject/execute.js";
import type {
  PostV3ClickCollectOrdersStatusRejectInput,
  PostV3ClickCollectOrdersStatusRejectResponse,
} from "./endpoints/inStorePickup/post-v3-click-collect-orders-status-reject/types.js";
export type {
  PostV3ClickCollectOrdersStatusRejectInput,
  PostV3ClickCollectOrdersStatusRejectResponse,
} from "./endpoints/inStorePickup/post-v3-click-collect-orders-status-reject/types.js";
import { executePostV3ClickCollectOrdersStatusInfo } from "./endpoints/inStorePickup/post-v3-click-collect-orders-status-info/execute.js";
import type {
  PostV3ClickCollectOrdersStatusInfoInput,
  PostV3ClickCollectOrdersStatusInfoResponse,
} from "./endpoints/inStorePickup/post-v3-click-collect-orders-status-info/types.js";
export type {
  PostV3ClickCollectOrdersStatusInfoInput,
  PostV3ClickCollectOrdersStatusInfoResponse,
} from "./endpoints/inStorePickup/post-v3-click-collect-orders-status-info/types.js";
import { executePostV3ClickCollectOrdersStatusCancel } from "./endpoints/inStorePickup/post-v3-click-collect-orders-status-cancel/execute.js";
import type {
  PostV3ClickCollectOrdersStatusCancelInput,
  PostV3ClickCollectOrdersStatusCancelResponse,
} from "./endpoints/inStorePickup/post-v3-click-collect-orders-status-cancel/types.js";
export type {
  PostV3ClickCollectOrdersStatusCancelInput,
  PostV3ClickCollectOrdersStatusCancelResponse,
} from "./endpoints/inStorePickup/post-v3-click-collect-orders-status-cancel/types.js";
import { executePostV3ClickCollectOrdersMetaDetails } from "./endpoints/inStorePickup/post-v3-click-collect-orders-meta-details/execute.js";
import type {
  PostV3ClickCollectOrdersMetaDetailsInput,
  PostV3ClickCollectOrdersMetaDetailsResponse,
} from "./endpoints/inStorePickup/post-v3-click-collect-orders-meta-details/types.js";
export type {
  PostV3ClickCollectOrdersMetaDetailsInput,
  PostV3ClickCollectOrdersMetaDetailsResponse,
} from "./endpoints/inStorePickup/post-v3-click-collect-orders-meta-details/types.js";
import { executePostV3ClickCollectOrdersMetaDelete } from "./endpoints/inStorePickup/post-v3-click-collect-orders-meta-delete/execute.js";
import type {
  PostV3ClickCollectOrdersMetaDeleteInput,
  PostV3ClickCollectOrdersMetaDeleteResponse,
} from "./endpoints/inStorePickup/post-v3-click-collect-orders-meta-delete/types.js";
export type {
  PostV3ClickCollectOrdersMetaDeleteInput,
  PostV3ClickCollectOrdersMetaDeleteResponse,
} from "./endpoints/inStorePickup/post-v3-click-collect-orders-meta-delete/types.js";
import { executePostV3ClickCollectOrdersMetaSgtin } from "./endpoints/inStorePickup/post-v3-click-collect-orders-meta-sgtin/execute.js";
import type {
  PostV3ClickCollectOrdersMetaSgtinInput,
  PostV3ClickCollectOrdersMetaSgtinResponse,
} from "./endpoints/inStorePickup/post-v3-click-collect-orders-meta-sgtin/types.js";
export type {
  PostV3ClickCollectOrdersMetaSgtinInput,
  PostV3ClickCollectOrdersMetaSgtinResponse,
} from "./endpoints/inStorePickup/post-v3-click-collect-orders-meta-sgtin/types.js";
import { executePostV3ClickCollectOrdersMetaUin } from "./endpoints/inStorePickup/post-v3-click-collect-orders-meta-uin/execute.js";
import type {
  PostV3ClickCollectOrdersMetaUinInput,
  PostV3ClickCollectOrdersMetaUinResponse,
} from "./endpoints/inStorePickup/post-v3-click-collect-orders-meta-uin/types.js";
export type {
  PostV3ClickCollectOrdersMetaUinInput,
  PostV3ClickCollectOrdersMetaUinResponse,
} from "./endpoints/inStorePickup/post-v3-click-collect-orders-meta-uin/types.js";
import { executePostV3ClickCollectOrdersMetaImei } from "./endpoints/inStorePickup/post-v3-click-collect-orders-meta-imei/execute.js";
import type {
  PostV3ClickCollectOrdersMetaImeiInput,
  PostV3ClickCollectOrdersMetaImeiResponse,
} from "./endpoints/inStorePickup/post-v3-click-collect-orders-meta-imei/types.js";
export type {
  PostV3ClickCollectOrdersMetaImeiInput,
  PostV3ClickCollectOrdersMetaImeiResponse,
} from "./endpoints/inStorePickup/post-v3-click-collect-orders-meta-imei/types.js";
import { executePostV3ClickCollectOrdersMetaGtin } from "./endpoints/inStorePickup/post-v3-click-collect-orders-meta-gtin/execute.js";
import type {
  PostV3ClickCollectOrdersMetaGtinInput,
  PostV3ClickCollectOrdersMetaGtinResponse,
} from "./endpoints/inStorePickup/post-v3-click-collect-orders-meta-gtin/types.js";
export type {
  PostV3ClickCollectOrdersMetaGtinInput,
  PostV3ClickCollectOrdersMetaGtinResponse,
} from "./endpoints/inStorePickup/post-v3-click-collect-orders-meta-gtin/types.js";
import { executePostV3ClickCollectOrdersMetaCustomsDeclaration } from "./endpoints/inStorePickup/post-v3-click-collect-orders-meta-customs-declaration/execute.js";
import type {
  PostV3ClickCollectOrdersMetaCustomsDeclarationInput,
  PostV3ClickCollectOrdersMetaCustomsDeclarationResponse,
} from "./endpoints/inStorePickup/post-v3-click-collect-orders-meta-customs-declaration/types.js";
export type {
  PostV3ClickCollectOrdersMetaCustomsDeclarationInput,
  PostV3ClickCollectOrdersMetaCustomsDeclarationResponse,
} from "./endpoints/inStorePickup/post-v3-click-collect-orders-meta-customs-declaration/types.js";
import { executePostV1AcceptanceOptions } from "./endpoints/ordersFbw/post-v1-acceptance-options/execute.js";
import type {
  PostV1AcceptanceOptionsInput,
  PostV1AcceptanceOptionsResponse,
} from "./endpoints/ordersFbw/post-v1-acceptance-options/types.js";
export type {
  PostV1AcceptanceOptionsInput,
  PostV1AcceptanceOptionsResponse,
} from "./endpoints/ordersFbw/post-v1-acceptance-options/types.js";
import { executeGetV1Warehouses } from "./endpoints/ordersFbw/get-v1-warehouses/execute.js";
import type { GetV1WarehousesResponse } from "./endpoints/ordersFbw/get-v1-warehouses/types.js";
export type {
  GetV1WarehousesInput,
  GetV1WarehousesResponse,
} from "./endpoints/ordersFbw/get-v1-warehouses/types.js";
import { executeGetV1TransitTariffs } from "./endpoints/ordersFbw/get-v1-transit-tariffs/execute.js";
import type { GetV1TransitTariffsResponse } from "./endpoints/ordersFbw/get-v1-transit-tariffs/types.js";
export type {
  GetV1TransitTariffsInput,
  GetV1TransitTariffsResponse,
} from "./endpoints/ordersFbw/get-v1-transit-tariffs/types.js";
import { executePostV1Supplies } from "./endpoints/ordersFbw/post-v1-supplies/execute.js";
import type {
  PostV1SuppliesInput,
  PostV1SuppliesResponse,
} from "./endpoints/ordersFbw/post-v1-supplies/types.js";
export type {
  PostV1SuppliesInput,
  PostV1SuppliesResponse,
} from "./endpoints/ordersFbw/post-v1-supplies/types.js";
import { executeGetV1SuppliesId } from "./endpoints/ordersFbw/get-v1-supplies-id/execute.js";
import type {
  GetV1SuppliesIdInput,
  GetV1SuppliesIdResponse,
} from "./endpoints/ordersFbw/get-v1-supplies-id/types.js";
export type {
  GetV1SuppliesIdInput,
  GetV1SuppliesIdResponse,
} from "./endpoints/ordersFbw/get-v1-supplies-id/types.js";
import { executeGetV1SuppliesIdGoods } from "./endpoints/ordersFbw/get-v1-supplies-id-goods/execute.js";
import type {
  GetV1SuppliesIdGoodsInput,
  GetV1SuppliesIdGoodsResponse,
} from "./endpoints/ordersFbw/get-v1-supplies-id-goods/types.js";
export type {
  GetV1SuppliesIdGoodsInput,
  GetV1SuppliesIdGoodsResponse,
} from "./endpoints/ordersFbw/get-v1-supplies-id-goods/types.js";
import { executeGetV1SuppliesIdPackage } from "./endpoints/ordersFbw/get-v1-supplies-id-package/execute.js";
import type {
  GetV1SuppliesIdPackageInput,
  GetV1SuppliesIdPackageResponse,
} from "./endpoints/ordersFbw/get-v1-supplies-id-package/types.js";
export type {
  GetV1SuppliesIdPackageInput,
  GetV1SuppliesIdPackageResponse,
} from "./endpoints/ordersFbw/get-v1-supplies-id-package/types.js";
import { executeGetV1PromotionCount } from "./endpoints/promotion/get-v1-promotion-count/execute.js";
import type { GetV1PromotionCountResponse } from "./endpoints/promotion/get-v1-promotion-count/types.js";
export type {
  GetV1PromotionCountInput,
  GetV1PromotionCountResponse,
} from "./endpoints/promotion/get-v1-promotion-count/types.js";
import { executeGetV2Adverts } from "./endpoints/promotion/get-v2-adverts/execute.js";
import type {
  GetV2AdvertsInput,
  GetV2AdvertsResponse,
} from "./endpoints/promotion/get-v2-adverts/types.js";
export type {
  GetV2AdvertsInput,
  GetV2AdvertsResponse,
} from "./endpoints/promotion/get-v2-adverts/types.js";
import { executePostV1BidsMin } from "./endpoints/promotion/post-v1-bids-min/execute.js";
import type {
  PostV1BidsMinInput,
  PostV1BidsMinResponse,
} from "./endpoints/promotion/post-v1-bids-min/types.js";
export type {
  PostV1BidsMinInput,
  PostV1BidsMinResponse,
} from "./endpoints/promotion/post-v1-bids-min/types.js";
import { executePostV2SeacatSaveAd } from "./endpoints/promotion/post-v2-seacat-save-ad/execute.js";
import type {
  PostV2SeacatSaveAdInput,
  PostV2SeacatSaveAdResponse,
} from "./endpoints/promotion/post-v2-seacat-save-ad/types.js";
export type {
  PostV2SeacatSaveAdInput,
  PostV2SeacatSaveAdResponse,
} from "./endpoints/promotion/post-v2-seacat-save-ad/types.js";
import { executeGetV1SupplierSubjects } from "./endpoints/promotion/get-v1-supplier-subjects/execute.js";
import type {
  GetV1SupplierSubjectsInput,
  GetV1SupplierSubjectsResponse,
} from "./endpoints/promotion/get-v1-supplier-subjects/types.js";
export type {
  GetV1SupplierSubjectsInput,
  GetV1SupplierSubjectsResponse,
} from "./endpoints/promotion/get-v1-supplier-subjects/types.js";
import { executePostV2SupplierNms } from "./endpoints/promotion/post-v2-supplier-nms/execute.js";
import type {
  PostV2SupplierNmsInput,
  PostV2SupplierNmsResponse,
} from "./endpoints/promotion/post-v2-supplier-nms/types.js";
export type {
  PostV2SupplierNmsInput,
  PostV2SupplierNmsResponse,
} from "./endpoints/promotion/post-v2-supplier-nms/types.js";
import { executeGetV0Delete } from "./endpoints/promotion/get-v0-delete/execute.js";
import type {
  GetV0DeleteInput,
  GetV0DeleteResponse,
} from "./endpoints/promotion/get-v0-delete/types.js";
export type {
  GetV0DeleteInput,
  GetV0DeleteResponse,
} from "./endpoints/promotion/get-v0-delete/types.js";
import { executePostV0Rename } from "./endpoints/promotion/post-v0-rename/execute.js";
import type {
  PostV0RenameInput,
  PostV0RenameResponse,
} from "./endpoints/promotion/post-v0-rename/types.js";
export type {
  PostV0RenameInput,
  PostV0RenameResponse,
} from "./endpoints/promotion/post-v0-rename/types.js";
import { executeGetV0Start } from "./endpoints/promotion/get-v0-start/execute.js";
import type {
  GetV0StartInput,
  GetV0StartResponse,
} from "./endpoints/promotion/get-v0-start/types.js";
export type {
  GetV0StartInput,
  GetV0StartResponse,
} from "./endpoints/promotion/get-v0-start/types.js";
import { executeGetV0Pause } from "./endpoints/promotion/get-v0-pause/execute.js";
import type {
  GetV0PauseInput,
  GetV0PauseResponse,
} from "./endpoints/promotion/get-v0-pause/types.js";
export type {
  GetV0PauseInput,
  GetV0PauseResponse,
} from "./endpoints/promotion/get-v0-pause/types.js";
import { executeGetV0Stop } from "./endpoints/promotion/get-v0-stop/execute.js";
import type {
  GetV0StopInput,
  GetV0StopResponse,
} from "./endpoints/promotion/get-v0-stop/types.js";
export type {
  GetV0StopInput,
  GetV0StopResponse,
} from "./endpoints/promotion/get-v0-stop/types.js";
import { executePutV0AuctionPlacements } from "./endpoints/promotion/put-v0-auction-placements/execute.js";
import type {
  PutV0AuctionPlacementsInput,
  PutV0AuctionPlacementsResponse,
} from "./endpoints/promotion/put-v0-auction-placements/types.js";
export type {
  PutV0AuctionPlacementsInput,
  PutV0AuctionPlacementsResponse,
} from "./endpoints/promotion/put-v0-auction-placements/types.js";
import { executePatchV1Bids } from "./endpoints/promotion/patch-v1-bids/execute.js";
import type {
  PatchV1BidsInput,
  PatchV1BidsResponse,
} from "./endpoints/promotion/patch-v1-bids/types.js";
export type {
  PatchV1BidsInput,
  PatchV1BidsResponse,
} from "./endpoints/promotion/patch-v1-bids/types.js";
import { executeGetV1Balance } from "./endpoints/promotion/get-v1-balance/execute.js";
import type { GetV1BalanceResponse } from "./endpoints/promotion/get-v1-balance/types.js";
export type {
  GetV1BalanceInput,
  GetV1BalanceResponse,
} from "./endpoints/promotion/get-v1-balance/types.js";
import { executeGetV1Budget } from "./endpoints/promotion/get-v1-budget/execute.js";
import type {
  GetV1BudgetInput,
  GetV1BudgetResponse,
} from "./endpoints/promotion/get-v1-budget/types.js";
export type {
  GetV1BudgetInput,
  GetV1BudgetResponse,
} from "./endpoints/promotion/get-v1-budget/types.js";
import { executePostV1BudgetDeposit } from "./endpoints/promotion/post-v1-budget-deposit/execute.js";
import type {
  PostV1BudgetDepositInput,
  PostV1BudgetDepositResponse,
} from "./endpoints/promotion/post-v1-budget-deposit/types.js";
export type {
  PostV1BudgetDepositInput,
  PostV1BudgetDepositResponse,
} from "./endpoints/promotion/post-v1-budget-deposit/types.js";
import { executeGetV1Upd } from "./endpoints/promotion/get-v1-upd/execute.js";
import type {
  GetV1UpdInput,
  GetV1UpdResponse,
} from "./endpoints/promotion/get-v1-upd/types.js";
export type {
  GetV1UpdInput,
  GetV1UpdResponse,
} from "./endpoints/promotion/get-v1-upd/types.js";
import { executeGetV1Payments } from "./endpoints/promotion/get-v1-payments/execute.js";
import type {
  GetV1PaymentsInput,
  GetV1PaymentsResponse,
} from "./endpoints/promotion/get-v1-payments/types.js";
export type {
  GetV1PaymentsInput,
  GetV1PaymentsResponse,
} from "./endpoints/promotion/get-v1-payments/types.js";
import { executePatchV0AuctionNms } from "./endpoints/promotion/patch-v0-auction-nms/execute.js";
import type {
  PatchV0AuctionNmsInput,
  PatchV0AuctionNmsResponse,
} from "./endpoints/promotion/patch-v0-auction-nms/types.js";
export type {
  PatchV0AuctionNmsInput,
  PatchV0AuctionNmsResponse,
} from "./endpoints/promotion/patch-v0-auction-nms/types.js";
import { executeGetV0BidsRecommendations } from "./endpoints/promotion/get-v0-bids-recommendations/execute.js";
import type {
  GetV0BidsRecommendationsInput,
  GetV0BidsRecommendationsResponse,
} from "./endpoints/promotion/get-v0-bids-recommendations/types.js";
export type {
  GetV0BidsRecommendationsInput,
  GetV0BidsRecommendationsResponse,
} from "./endpoints/promotion/get-v0-bids-recommendations/types.js";
import { executePostV0NormqueryStats } from "./endpoints/promotion/post-v0-normquery-stats/execute.js";
import type {
  PostV0NormqueryStatsInput,
  PostV0NormqueryStatsResponse,
} from "./endpoints/promotion/post-v0-normquery-stats/types.js";
export type {
  PostV0NormqueryStatsInput,
  PostV0NormqueryStatsResponse,
} from "./endpoints/promotion/post-v0-normquery-stats/types.js";
import { executePostV0NormqueryGetBids } from "./endpoints/promotion/post-v0-normquery-get-bids/execute.js";
import type {
  PostV0NormqueryGetBidsInput,
  PostV0NormqueryGetBidsResponse,
} from "./endpoints/promotion/post-v0-normquery-get-bids/types.js";
export type {
  PostV0NormqueryGetBidsInput,
  PostV0NormqueryGetBidsResponse,
} from "./endpoints/promotion/post-v0-normquery-get-bids/types.js";
import { executeGetV1Config } from "./endpoints/promotion/get-v1-config/execute.js";
import type { GetV1ConfigResponse } from "./endpoints/promotion/get-v1-config/types.js";
export type {
  GetV1ConfigInput,
  GetV1ConfigResponse,
} from "./endpoints/promotion/get-v1-config/types.js";
import { executePostV1NormqueryBids } from "./endpoints/promotion/post-v1-normquery-bids/execute.js";
import type {
  PostV1NormqueryBidsInput,
  PostV1NormqueryBidsResponse,
} from "./endpoints/promotion/post-v1-normquery-bids/types.js";
export type {
  PostV1NormqueryBidsInput,
  PostV1NormqueryBidsResponse,
} from "./endpoints/promotion/post-v1-normquery-bids/types.js";
import { executePostV0NormqueryBids } from "./endpoints/promotion/post-v0-normquery-bids/execute.js";
import type {
  PostV0NormqueryBidsInput,
  PostV0NormqueryBidsResponse,
} from "./endpoints/promotion/post-v0-normquery-bids/types.js";
export type {
  PostV0NormqueryBidsInput,
  PostV0NormqueryBidsResponse,
} from "./endpoints/promotion/post-v0-normquery-bids/types.js";
import { executeDeleteV0NormqueryBids } from "./endpoints/promotion/delete-v0-normquery-bids/execute.js";
import type {
  DeleteV0NormqueryBidsInput,
  DeleteV0NormqueryBidsResponse,
} from "./endpoints/promotion/delete-v0-normquery-bids/types.js";
export type {
  DeleteV0NormqueryBidsInput,
  DeleteV0NormqueryBidsResponse,
} from "./endpoints/promotion/delete-v0-normquery-bids/types.js";
import { executePostV0NormqueryGetMinus } from "./endpoints/promotion/post-v0-normquery-get-minus/execute.js";
import type {
  PostV0NormqueryGetMinusInput,
  PostV0NormqueryGetMinusResponse,
} from "./endpoints/promotion/post-v0-normquery-get-minus/types.js";
export type {
  PostV0NormqueryGetMinusInput,
  PostV0NormqueryGetMinusResponse,
} from "./endpoints/promotion/post-v0-normquery-get-minus/types.js";
import { executePostV0NormquerySetMinus } from "./endpoints/promotion/post-v0-normquery-set-minus/execute.js";
import type {
  PostV0NormquerySetMinusInput,
  PostV0NormquerySetMinusResponse,
} from "./endpoints/promotion/post-v0-normquery-set-minus/types.js";
export type {
  PostV0NormquerySetMinusInput,
  PostV0NormquerySetMinusResponse,
} from "./endpoints/promotion/post-v0-normquery-set-minus/types.js";
import { executeGetV1Count } from "./endpoints/promotion/get-v1-count/execute.js";
import type { GetV1CountResponse } from "./endpoints/promotion/get-v1-count/types.js";
export type {
  GetV1CountInput,
  GetV1CountResponse,
} from "./endpoints/promotion/get-v1-count/types.js";
import { executeGetV1Adverts } from "./endpoints/promotion/get-v1-adverts/execute.js";
import type {
  GetV1AdvertsInput,
  GetV1AdvertsResponse,
} from "./endpoints/promotion/get-v1-adverts/types.js";
export type {
  GetV1AdvertsInput,
  GetV1AdvertsResponse,
} from "./endpoints/promotion/get-v1-adverts/types.js";
import { executeGetV1Advert } from "./endpoints/promotion/get-v1-advert/execute.js";
import type {
  GetV1AdvertInput,
  GetV1AdvertResponse,
} from "./endpoints/promotion/get-v1-advert/types.js";
export type {
  GetV1AdvertInput,
  GetV1AdvertResponse,
} from "./endpoints/promotion/get-v1-advert/types.js";
import { executeGetV3Fullstats } from "./endpoints/promotion/get-v3-fullstats/execute.js";
import type {
  GetV3FullstatsInput,
  GetV3FullstatsResponse,
} from "./endpoints/promotion/get-v3-fullstats/types.js";
export type {
  GetV3FullstatsInput,
  GetV3FullstatsResponse,
} from "./endpoints/promotion/get-v3-fullstats/types.js";
import { executePostV1Stats } from "./endpoints/promotion/post-v1-stats/execute.js";
import type {
  PostV1StatsInput,
  PostV1StatsResponse,
} from "./endpoints/promotion/post-v1-stats/types.js";
export type {
  PostV1StatsInput,
  PostV1StatsResponse,
} from "./endpoints/promotion/post-v1-stats/types.js";
import { executeGetV1CalendarPromotions } from "./endpoints/promotion/get-v1-calendar-promotions/execute.js";
import type {
  GetV1CalendarPromotionsInput,
  GetV1CalendarPromotionsResponse,
} from "./endpoints/promotion/get-v1-calendar-promotions/types.js";
export type {
  GetV1CalendarPromotionsInput,
  GetV1CalendarPromotionsResponse,
} from "./endpoints/promotion/get-v1-calendar-promotions/types.js";
import { executeGetV1CalendarPromotionsDetails } from "./endpoints/promotion/get-v1-calendar-promotions-details/execute.js";
import type {
  GetV1CalendarPromotionsDetailsInput,
  GetV1CalendarPromotionsDetailsResponse,
} from "./endpoints/promotion/get-v1-calendar-promotions-details/types.js";
export type {
  GetV1CalendarPromotionsDetailsInput,
  GetV1CalendarPromotionsDetailsResponse,
} from "./endpoints/promotion/get-v1-calendar-promotions-details/types.js";
import { executeGetV1CalendarPromotionsNomenclatures } from "./endpoints/promotion/get-v1-calendar-promotions-nomenclatures/execute.js";
import type {
  GetV1CalendarPromotionsNomenclaturesInput,
  GetV1CalendarPromotionsNomenclaturesResponse,
} from "./endpoints/promotion/get-v1-calendar-promotions-nomenclatures/types.js";
export type {
  GetV1CalendarPromotionsNomenclaturesInput,
  GetV1CalendarPromotionsNomenclaturesResponse,
} from "./endpoints/promotion/get-v1-calendar-promotions-nomenclatures/types.js";
import { executePostV1CalendarPromotionsUpload } from "./endpoints/promotion/post-v1-calendar-promotions-upload/execute.js";
import type {
  PostV1CalendarPromotionsUploadInput,
  PostV1CalendarPromotionsUploadResponse,
} from "./endpoints/promotion/post-v1-calendar-promotions-upload/types.js";
export type {
  PostV1CalendarPromotionsUploadInput,
  PostV1CalendarPromotionsUploadResponse,
} from "./endpoints/promotion/post-v1-calendar-promotions-upload/types.js";
import { executePostV0NormqueryList } from "./endpoints/promotion/post-v0-normquery-list/execute.js";
import type {
  PostV0NormqueryListInput,
  PostV0NormqueryListResponse,
} from "./endpoints/promotion/post-v0-normquery-list/types.js";
export type {
  PostV0NormqueryListInput,
  PostV0NormqueryListResponse,
} from "./endpoints/promotion/post-v0-normquery-list/types.js";
import { executePostV1NormqueryStats } from "./endpoints/promotion/post-v1-normquery-stats/execute.js";
import type {
  PostV1NormqueryStatsInput,
  PostV1NormqueryStatsResponse,
} from "./endpoints/promotion/post-v1-normquery-stats/types.js";
export type {
  PostV1NormqueryStatsInput,
  PostV1NormqueryStatsResponse,
} from "./endpoints/promotion/post-v1-normquery-stats/types.js";
import { executeGetV1NewFeedbacksQuestions } from "./endpoints/communications/get-v1-new-feedbacks-questions/execute.js";
import type { GetV1NewFeedbacksQuestionsResponse } from "./endpoints/communications/get-v1-new-feedbacks-questions/types.js";
export type {
  GetV1NewFeedbacksQuestionsInput,
  GetV1NewFeedbacksQuestionsResponse,
} from "./endpoints/communications/get-v1-new-feedbacks-questions/types.js";
import { executeGetV1QuestionsCountUnanswered } from "./endpoints/communications/get-v1-questions-count-unanswered/execute.js";
import type { GetV1QuestionsCountUnansweredResponse } from "./endpoints/communications/get-v1-questions-count-unanswered/types.js";
export type {
  GetV1QuestionsCountUnansweredInput,
  GetV1QuestionsCountUnansweredResponse,
} from "./endpoints/communications/get-v1-questions-count-unanswered/types.js";
import { executeGetV1QuestionsCount } from "./endpoints/communications/get-v1-questions-count/execute.js";
import type {
  GetV1QuestionsCountInput,
  GetV1QuestionsCountResponse,
} from "./endpoints/communications/get-v1-questions-count/types.js";
export type {
  GetV1QuestionsCountInput,
  GetV1QuestionsCountResponse,
} from "./endpoints/communications/get-v1-questions-count/types.js";
import { executeGetV1Questions } from "./endpoints/communications/get-v1-questions/execute.js";
import type {
  GetV1QuestionsInput,
  GetV1QuestionsResponse,
} from "./endpoints/communications/get-v1-questions/types.js";
export type {
  GetV1QuestionsInput,
  GetV1QuestionsResponse,
} from "./endpoints/communications/get-v1-questions/types.js";
import { executePatchV1Questions } from "./endpoints/communications/patch-v1-questions/execute.js";
import type {
  PatchV1QuestionsInput,
  PatchV1QuestionsResponse,
} from "./endpoints/communications/patch-v1-questions/types.js";
export type {
  PatchV1QuestionsInput,
  PatchV1QuestionsResponse,
} from "./endpoints/communications/patch-v1-questions/types.js";
import { executeGetV1Question } from "./endpoints/communications/get-v1-question/execute.js";
import type {
  GetV1QuestionInput,
  GetV1QuestionResponse,
} from "./endpoints/communications/get-v1-question/types.js";
export type {
  GetV1QuestionInput,
  GetV1QuestionResponse,
} from "./endpoints/communications/get-v1-question/types.js";
import { executeGetV1FeedbacksCountUnanswered } from "./endpoints/communications/get-v1-feedbacks-count-unanswered/execute.js";
import type { GetV1FeedbacksCountUnansweredResponse } from "./endpoints/communications/get-v1-feedbacks-count-unanswered/types.js";
export type {
  GetV1FeedbacksCountUnansweredInput,
  GetV1FeedbacksCountUnansweredResponse,
} from "./endpoints/communications/get-v1-feedbacks-count-unanswered/types.js";
import { executeGetV1FeedbacksCount } from "./endpoints/communications/get-v1-feedbacks-count/execute.js";
import type {
  GetV1FeedbacksCountInput,
  GetV1FeedbacksCountResponse,
} from "./endpoints/communications/get-v1-feedbacks-count/types.js";
export type {
  GetV1FeedbacksCountInput,
  GetV1FeedbacksCountResponse,
} from "./endpoints/communications/get-v1-feedbacks-count/types.js";
import { executeGetV1Feedbacks } from "./endpoints/communications/get-v1-feedbacks/execute.js";
import type {
  GetV1FeedbacksInput,
  GetV1FeedbacksResponse,
} from "./endpoints/communications/get-v1-feedbacks/types.js";
export type {
  GetV1FeedbacksInput,
  GetV1FeedbacksResponse,
} from "./endpoints/communications/get-v1-feedbacks/types.js";
import { executePostV1FeedbacksAnswer } from "./endpoints/communications/post-v1-feedbacks-answer/execute.js";
import type {
  PostV1FeedbacksAnswerInput,
  PostV1FeedbacksAnswerResponse,
} from "./endpoints/communications/post-v1-feedbacks-answer/types.js";
export type {
  PostV1FeedbacksAnswerInput,
  PostV1FeedbacksAnswerResponse,
} from "./endpoints/communications/post-v1-feedbacks-answer/types.js";
import { executePatchV1FeedbacksAnswer } from "./endpoints/communications/patch-v1-feedbacks-answer/execute.js";
import type {
  PatchV1FeedbacksAnswerInput,
  PatchV1FeedbacksAnswerResponse,
} from "./endpoints/communications/patch-v1-feedbacks-answer/types.js";
export type {
  PatchV1FeedbacksAnswerInput,
  PatchV1FeedbacksAnswerResponse,
} from "./endpoints/communications/patch-v1-feedbacks-answer/types.js";
import { executePostV1FeedbacksOrderReturn } from "./endpoints/communications/post-v1-feedbacks-order-return/execute.js";
import type {
  PostV1FeedbacksOrderReturnInput,
  PostV1FeedbacksOrderReturnResponse,
} from "./endpoints/communications/post-v1-feedbacks-order-return/types.js";
export type {
  PostV1FeedbacksOrderReturnInput,
  PostV1FeedbacksOrderReturnResponse,
} from "./endpoints/communications/post-v1-feedbacks-order-return/types.js";
import { executeGetV1Feedback } from "./endpoints/communications/get-v1-feedback/execute.js";
import type {
  GetV1FeedbackInput,
  GetV1FeedbackResponse,
} from "./endpoints/communications/get-v1-feedback/types.js";
export type {
  GetV1FeedbackInput,
  GetV1FeedbackResponse,
} from "./endpoints/communications/get-v1-feedback/types.js";
import { executeGetV1FeedbacksArchive } from "./endpoints/communications/get-v1-feedbacks-archive/execute.js";
import type {
  GetV1FeedbacksArchiveInput,
  GetV1FeedbacksArchiveResponse,
} from "./endpoints/communications/get-v1-feedbacks-archive/types.js";
export type {
  GetV1FeedbacksArchiveInput,
  GetV1FeedbacksArchiveResponse,
} from "./endpoints/communications/get-v1-feedbacks-archive/types.js";
import { executeGetFeedbacksV1Pins } from "./endpoints/communications/get-feedbacks-v1-pins/execute.js";
import type {
  GetFeedbacksV1PinsInput,
  GetFeedbacksV1PinsResponse,
} from "./endpoints/communications/get-feedbacks-v1-pins/types.js";
export type {
  GetFeedbacksV1PinsInput,
  GetFeedbacksV1PinsResponse,
} from "./endpoints/communications/get-feedbacks-v1-pins/types.js";
import { executePostFeedbacksV1Pins } from "./endpoints/communications/post-feedbacks-v1-pins/execute.js";
import type {
  PostFeedbacksV1PinsInput,
  PostFeedbacksV1PinsResponse,
} from "./endpoints/communications/post-feedbacks-v1-pins/types.js";
export type {
  PostFeedbacksV1PinsInput,
  PostFeedbacksV1PinsResponse,
} from "./endpoints/communications/post-feedbacks-v1-pins/types.js";
import { executeDeleteFeedbacksV1Pins } from "./endpoints/communications/delete-feedbacks-v1-pins/execute.js";
import type {
  DeleteFeedbacksV1PinsInput,
  DeleteFeedbacksV1PinsResponse,
} from "./endpoints/communications/delete-feedbacks-v1-pins/types.js";
export type {
  DeleteFeedbacksV1PinsInput,
  DeleteFeedbacksV1PinsResponse,
} from "./endpoints/communications/delete-feedbacks-v1-pins/types.js";
import { executeGetFeedbacksV1PinsCount } from "./endpoints/communications/get-feedbacks-v1-pins-count/execute.js";
import type {
  GetFeedbacksV1PinsCountInput,
  GetFeedbacksV1PinsCountResponse,
} from "./endpoints/communications/get-feedbacks-v1-pins-count/types.js";
export type {
  GetFeedbacksV1PinsCountInput,
  GetFeedbacksV1PinsCountResponse,
} from "./endpoints/communications/get-feedbacks-v1-pins-count/types.js";
import { executeGetFeedbacksV1PinsLimits } from "./endpoints/communications/get-feedbacks-v1-pins-limits/execute.js";
import type { GetFeedbacksV1PinsLimitsResponse } from "./endpoints/communications/get-feedbacks-v1-pins-limits/types.js";
export type {
  GetFeedbacksV1PinsLimitsInput,
  GetFeedbacksV1PinsLimitsResponse,
} from "./endpoints/communications/get-feedbacks-v1-pins-limits/types.js";
import { executeGetV1SellerChats } from "./endpoints/communications/get-v1-seller-chats/execute.js";
import type { GetV1SellerChatsResponse } from "./endpoints/communications/get-v1-seller-chats/types.js";
export type {
  GetV1SellerChatsInput,
  GetV1SellerChatsResponse,
} from "./endpoints/communications/get-v1-seller-chats/types.js";
import { executeGetV1SellerEvents } from "./endpoints/communications/get-v1-seller-events/execute.js";
import type {
  GetV1SellerEventsInput,
  GetV1SellerEventsResponse,
} from "./endpoints/communications/get-v1-seller-events/types.js";
export type {
  GetV1SellerEventsInput,
  GetV1SellerEventsResponse,
} from "./endpoints/communications/get-v1-seller-events/types.js";
import { executePostV1SellerMessage } from "./endpoints/communications/post-v1-seller-message/execute.js";
import type {
  PostV1SellerMessageInput,
  PostV1SellerMessageResponse,
} from "./endpoints/communications/post-v1-seller-message/types.js";
export type {
  PostV1SellerMessageInput,
  PostV1SellerMessageResponse,
} from "./endpoints/communications/post-v1-seller-message/types.js";
import { executeGetV1SellerDownloadId } from "./endpoints/communications/get-v1-seller-download-id/execute.js";
import type {
  GetV1SellerDownloadIdInput,
  GetV1SellerDownloadIdResponse,
} from "./endpoints/communications/get-v1-seller-download-id/types.js";
export type {
  GetV1SellerDownloadIdInput,
  GetV1SellerDownloadIdResponse,
} from "./endpoints/communications/get-v1-seller-download-id/types.js";
import { executeGetV1Claims } from "./endpoints/communications/get-v1-claims/execute.js";
import type {
  GetV1ClaimsInput,
  GetV1ClaimsResponse,
} from "./endpoints/communications/get-v1-claims/types.js";
export type {
  GetV1ClaimsInput,
  GetV1ClaimsResponse,
} from "./endpoints/communications/get-v1-claims/types.js";
import { executePatchV1Claim } from "./endpoints/communications/patch-v1-claim/execute.js";
import type {
  PatchV1ClaimInput,
  PatchV1ClaimResponse,
} from "./endpoints/communications/patch-v1-claim/types.js";
export type {
  PatchV1ClaimInput,
  PatchV1ClaimResponse,
} from "./endpoints/communications/patch-v1-claim/types.js";
import { executeGetV1TariffsCommission } from "./endpoints/rates/get-v1-tariffs-commission/execute.js";
import type {
  GetV1TariffsCommissionInput,
  GetV1TariffsCommissionResponse,
} from "./endpoints/rates/get-v1-tariffs-commission/types.js";
export type {
  GetV1TariffsCommissionInput,
  GetV1TariffsCommissionResponse,
} from "./endpoints/rates/get-v1-tariffs-commission/types.js";
import { executeGetV1AcceptanceCoefficients } from "./endpoints/rates/get-v1-acceptance-coefficients/execute.js";
import type {
  GetV1AcceptanceCoefficientsInput,
  GetV1AcceptanceCoefficientsResponse,
} from "./endpoints/rates/get-v1-acceptance-coefficients/types.js";
export type {
  GetV1AcceptanceCoefficientsInput,
  GetV1AcceptanceCoefficientsResponse,
} from "./endpoints/rates/get-v1-acceptance-coefficients/types.js";
import { executeGetV1TariffsBox } from "./endpoints/rates/get-v1-tariffs-box/execute.js";
import type {
  GetV1TariffsBoxInput,
  GetV1TariffsBoxResponse,
} from "./endpoints/rates/get-v1-tariffs-box/types.js";
export type {
  GetV1TariffsBoxInput,
  GetV1TariffsBoxResponse,
} from "./endpoints/rates/get-v1-tariffs-box/types.js";
import { executeGetV1TariffsPallet } from "./endpoints/rates/get-v1-tariffs-pallet/execute.js";
import type {
  GetV1TariffsPalletInput,
  GetV1TariffsPalletResponse,
} from "./endpoints/rates/get-v1-tariffs-pallet/types.js";
export type {
  GetV1TariffsPalletInput,
  GetV1TariffsPalletResponse,
} from "./endpoints/rates/get-v1-tariffs-pallet/types.js";
import { executeGetV1TariffsReturn } from "./endpoints/rates/get-v1-tariffs-return/execute.js";
import type {
  GetV1TariffsReturnInput,
  GetV1TariffsReturnResponse,
} from "./endpoints/rates/get-v1-tariffs-return/types.js";
export type {
  GetV1TariffsReturnInput,
  GetV1TariffsReturnResponse,
} from "./endpoints/rates/get-v1-tariffs-return/types.js";
import { executePostV3SalesFunnelProducts } from "./endpoints/analytics/post-v3-sales-funnel-products/execute.js";
import type {
  PostV3SalesFunnelProductsInput,
  PostV3SalesFunnelProductsResponse,
} from "./endpoints/analytics/post-v3-sales-funnel-products/types.js";
export type {
  PostV3SalesFunnelProductsInput,
  PostV3SalesFunnelProductsResponse,
} from "./endpoints/analytics/post-v3-sales-funnel-products/types.js";
import { executePostV3SalesFunnelProductsHistory } from "./endpoints/analytics/post-v3-sales-funnel-products-history/execute.js";
import type {
  PostV3SalesFunnelProductsHistoryInput,
  PostV3SalesFunnelProductsHistoryResponse,
} from "./endpoints/analytics/post-v3-sales-funnel-products-history/types.js";
export type {
  PostV3SalesFunnelProductsHistoryInput,
  PostV3SalesFunnelProductsHistoryResponse,
} from "./endpoints/analytics/post-v3-sales-funnel-products-history/types.js";
import { executePostV3SalesFunnelGroupedHistory } from "./endpoints/analytics/post-v3-sales-funnel-grouped-history/execute.js";
import type {
  PostV3SalesFunnelGroupedHistoryInput,
  PostV3SalesFunnelGroupedHistoryResponse,
} from "./endpoints/analytics/post-v3-sales-funnel-grouped-history/types.js";
export type {
  PostV3SalesFunnelGroupedHistoryInput,
  PostV3SalesFunnelGroupedHistoryResponse,
} from "./endpoints/analytics/post-v3-sales-funnel-grouped-history/types.js";
import { executePostV2NmReportDownloads } from "./endpoints/analytics/post-v2-nm-report-downloads/execute.js";
import type {
  PostV2NmReportDownloadsInput,
  PostV2NmReportDownloadsResponse,
} from "./endpoints/analytics/post-v2-nm-report-downloads/types.js";
export type {
  PostV2NmReportDownloadsInput,
  PostV2NmReportDownloadsResponse,
} from "./endpoints/analytics/post-v2-nm-report-downloads/types.js";
import { executeGetV2NmReportDownloads } from "./endpoints/analytics/get-v2-nm-report-downloads/execute.js";
import type {
  GetV2NmReportDownloadsInput,
  GetV2NmReportDownloadsResponse,
} from "./endpoints/analytics/get-v2-nm-report-downloads/types.js";
export type {
  GetV2NmReportDownloadsInput,
  GetV2NmReportDownloadsResponse,
} from "./endpoints/analytics/get-v2-nm-report-downloads/types.js";
import { executePostV2NmReportDownloadsRetry } from "./endpoints/analytics/post-v2-nm-report-downloads-retry/execute.js";
import type {
  PostV2NmReportDownloadsRetryInput,
  PostV2NmReportDownloadsRetryResponse,
} from "./endpoints/analytics/post-v2-nm-report-downloads-retry/types.js";
export type {
  PostV2NmReportDownloadsRetryInput,
  PostV2NmReportDownloadsRetryResponse,
} from "./endpoints/analytics/post-v2-nm-report-downloads-retry/types.js";
import { executeGetV2NmReportDownloadsFileDownloadId } from "./endpoints/analytics/get-v2-nm-report-downloads-file-download-id/execute.js";
import type {
  GetV2NmReportDownloadsFileDownloadIdInput,
  GetV2NmReportDownloadsFileDownloadIdResponse,
} from "./endpoints/analytics/get-v2-nm-report-downloads-file-download-id/types.js";
export type {
  GetV2NmReportDownloadsFileDownloadIdInput,
  GetV2NmReportDownloadsFileDownloadIdResponse,
} from "./endpoints/analytics/get-v2-nm-report-downloads-file-download-id/types.js";
import { executePostV2SearchReportReport } from "./endpoints/analytics/post-v2-search-report-report/execute.js";
import type {
  PostV2SearchReportReportInput,
  PostV2SearchReportReportResponse,
} from "./endpoints/analytics/post-v2-search-report-report/types.js";
export type {
  PostV2SearchReportReportInput,
  PostV2SearchReportReportResponse,
} from "./endpoints/analytics/post-v2-search-report-report/types.js";
import { executePostV2SearchReportTableGroups } from "./endpoints/analytics/post-v2-search-report-table-groups/execute.js";
import type {
  PostV2SearchReportTableGroupsInput,
  PostV2SearchReportTableGroupsResponse,
} from "./endpoints/analytics/post-v2-search-report-table-groups/types.js";
export type {
  PostV2SearchReportTableGroupsInput,
  PostV2SearchReportTableGroupsResponse,
} from "./endpoints/analytics/post-v2-search-report-table-groups/types.js";
import { executePostV2SearchReportTableDetails } from "./endpoints/analytics/post-v2-search-report-table-details/execute.js";
import type {
  PostV2SearchReportTableDetailsInput,
  PostV2SearchReportTableDetailsResponse,
} from "./endpoints/analytics/post-v2-search-report-table-details/types.js";
export type {
  PostV2SearchReportTableDetailsInput,
  PostV2SearchReportTableDetailsResponse,
} from "./endpoints/analytics/post-v2-search-report-table-details/types.js";
import { executePostV2SearchReportProductSearchTexts } from "./endpoints/analytics/post-v2-search-report-product-search-texts/execute.js";
import type {
  PostV2SearchReportProductSearchTextsInput,
  PostV2SearchReportProductSearchTextsResponse,
} from "./endpoints/analytics/post-v2-search-report-product-search-texts/types.js";
export type {
  PostV2SearchReportProductSearchTextsInput,
  PostV2SearchReportProductSearchTextsResponse,
} from "./endpoints/analytics/post-v2-search-report-product-search-texts/types.js";
import { executePostV2SearchReportProductOrders } from "./endpoints/analytics/post-v2-search-report-product-orders/execute.js";
import type {
  PostV2SearchReportProductOrdersInput,
  PostV2SearchReportProductOrdersResponse,
} from "./endpoints/analytics/post-v2-search-report-product-orders/types.js";
export type {
  PostV2SearchReportProductOrdersInput,
  PostV2SearchReportProductOrdersResponse,
} from "./endpoints/analytics/post-v2-search-report-product-orders/types.js";
import { executePostV1StocksReportWbWarehouses } from "./endpoints/analytics/post-v1-stocks-report-wb-warehouses/execute.js";
import type {
  PostV1StocksReportWbWarehousesInput,
  PostV1StocksReportWbWarehousesResponse,
} from "./endpoints/analytics/post-v1-stocks-report-wb-warehouses/types.js";
export type {
  PostV1StocksReportWbWarehousesInput,
  PostV1StocksReportWbWarehousesResponse,
} from "./endpoints/analytics/post-v1-stocks-report-wb-warehouses/types.js";
import { executePostV2StocksReportProductsGroups } from "./endpoints/analytics/post-v2-stocks-report-products-groups/execute.js";
import type {
  PostV2StocksReportProductsGroupsInput,
  PostV2StocksReportProductsGroupsResponse,
} from "./endpoints/analytics/post-v2-stocks-report-products-groups/types.js";
export type {
  PostV2StocksReportProductsGroupsInput,
  PostV2StocksReportProductsGroupsResponse,
} from "./endpoints/analytics/post-v2-stocks-report-products-groups/types.js";
import { executePostV2StocksReportProductsProducts } from "./endpoints/analytics/post-v2-stocks-report-products-products/execute.js";
import type {
  PostV2StocksReportProductsProductsInput,
  PostV2StocksReportProductsProductsResponse,
} from "./endpoints/analytics/post-v2-stocks-report-products-products/types.js";
export type {
  PostV2StocksReportProductsProductsInput,
  PostV2StocksReportProductsProductsResponse,
} from "./endpoints/analytics/post-v2-stocks-report-products-products/types.js";
import { executePostV2StocksReportProductsSizes } from "./endpoints/analytics/post-v2-stocks-report-products-sizes/execute.js";
import type {
  PostV2StocksReportProductsSizesInput,
  PostV2StocksReportProductsSizesResponse,
} from "./endpoints/analytics/post-v2-stocks-report-products-sizes/types.js";
export type {
  PostV2StocksReportProductsSizesInput,
  PostV2StocksReportProductsSizesResponse,
} from "./endpoints/analytics/post-v2-stocks-report-products-sizes/types.js";
import { executePostV2StocksReportOffices } from "./endpoints/analytics/post-v2-stocks-report-offices/execute.js";
import type {
  PostV2StocksReportOfficesInput,
  PostV2StocksReportOfficesResponse,
} from "./endpoints/analytics/post-v2-stocks-report-offices/types.js";
export type {
  PostV2StocksReportOfficesInput,
  PostV2StocksReportOfficesResponse,
} from "./endpoints/analytics/post-v2-stocks-report-offices/types.js";
import { executePostV2ItemRating } from "./endpoints/analytics/post-v2-item-rating/execute.js";
import type {
  PostV2ItemRatingInput,
  PostV2ItemRatingResponse,
} from "./endpoints/analytics/post-v2-item-rating/types.js";
export type {
  PostV2ItemRatingInput,
  PostV2ItemRatingResponse,
} from "./endpoints/analytics/post-v2-item-rating/types.js";
import { executePostV1OrderFeed } from "./endpoints/analytics/post-v1-order-feed/execute.js";
import type {
  PostV1OrderFeedInput,
  PostV1OrderFeedResponse,
} from "./endpoints/analytics/post-v1-order-feed/types.js";
export type {
  PostV1OrderFeedInput,
  PostV1OrderFeedResponse,
} from "./endpoints/analytics/post-v1-order-feed/types.js";
import { executeGetV1SupplierOrders } from "./endpoints/reports/get-v1-supplier-orders/execute.js";
import type {
  GetV1SupplierOrdersInput,
  GetV1SupplierOrdersResponse,
} from "./endpoints/reports/get-v1-supplier-orders/types.js";
export type {
  GetV1SupplierOrdersInput,
  GetV1SupplierOrdersResponse,
} from "./endpoints/reports/get-v1-supplier-orders/types.js";
import { executeGetV1SupplierSales } from "./endpoints/reports/get-v1-supplier-sales/execute.js";
import type {
  GetV1SupplierSalesInput,
  GetV1SupplierSalesResponse,
} from "./endpoints/reports/get-v1-supplier-sales/types.js";
export type {
  GetV1SupplierSalesInput,
  GetV1SupplierSalesResponse,
} from "./endpoints/reports/get-v1-supplier-sales/types.js";
import { executePostV1AnalyticsExciseReport } from "./endpoints/reports/post-v1-analytics-excise-report/execute.js";
import type {
  PostV1AnalyticsExciseReportInput,
  PostV1AnalyticsExciseReportResponse,
} from "./endpoints/reports/post-v1-analytics-excise-report/types.js";
export type {
  PostV1AnalyticsExciseReportInput,
  PostV1AnalyticsExciseReportResponse,
} from "./endpoints/reports/post-v1-analytics-excise-report/types.js";
import { executeGetV1WarehouseRemains } from "./endpoints/reports/get-v1-warehouse-remains/execute.js";
import type {
  GetV1WarehouseRemainsInput,
  GetV1WarehouseRemainsResponse,
} from "./endpoints/reports/get-v1-warehouse-remains/types.js";
export type {
  GetV1WarehouseRemainsInput,
  GetV1WarehouseRemainsResponse,
} from "./endpoints/reports/get-v1-warehouse-remains/types.js";
import { executeGetV1WarehouseRemainsTasksTaskIdStatus } from "./endpoints/reports/get-v1-warehouse-remains-tasks-task-id-status/execute.js";
import type {
  GetV1WarehouseRemainsTasksTaskIdStatusInput,
  GetV1WarehouseRemainsTasksTaskIdStatusResponse,
} from "./endpoints/reports/get-v1-warehouse-remains-tasks-task-id-status/types.js";
export type {
  GetV1WarehouseRemainsTasksTaskIdStatusInput,
  GetV1WarehouseRemainsTasksTaskIdStatusResponse,
} from "./endpoints/reports/get-v1-warehouse-remains-tasks-task-id-status/types.js";
import { executeGetV1WarehouseRemainsTasksTaskIdDownload } from "./endpoints/reports/get-v1-warehouse-remains-tasks-task-id-download/execute.js";
import type {
  GetV1WarehouseRemainsTasksTaskIdDownloadInput,
  GetV1WarehouseRemainsTasksTaskIdDownloadResponse,
} from "./endpoints/reports/get-v1-warehouse-remains-tasks-task-id-download/types.js";
export type {
  GetV1WarehouseRemainsTasksTaskIdDownloadInput,
  GetV1WarehouseRemainsTasksTaskIdDownloadResponse,
} from "./endpoints/reports/get-v1-warehouse-remains-tasks-task-id-download/types.js";
import { executeGetV1MeasurementPenalties } from "./endpoints/reports/get-v1-measurement-penalties/execute.js";
import type {
  GetV1MeasurementPenaltiesInput,
  GetV1MeasurementPenaltiesResponse,
} from "./endpoints/reports/get-v1-measurement-penalties/types.js";
export type {
  GetV1MeasurementPenaltiesInput,
  GetV1MeasurementPenaltiesResponse,
} from "./endpoints/reports/get-v1-measurement-penalties/types.js";
import { executeGetV1WarehouseMeasurements } from "./endpoints/reports/get-v1-warehouse-measurements/execute.js";
import type {
  GetV1WarehouseMeasurementsInput,
  GetV1WarehouseMeasurementsResponse,
} from "./endpoints/reports/get-v1-warehouse-measurements/types.js";
export type {
  GetV1WarehouseMeasurementsInput,
  GetV1WarehouseMeasurementsResponse,
} from "./endpoints/reports/get-v1-warehouse-measurements/types.js";
import { executeGetV1Deductions } from "./endpoints/reports/get-v1-deductions/execute.js";
import type {
  GetV1DeductionsInput,
  GetV1DeductionsResponse,
} from "./endpoints/reports/get-v1-deductions/types.js";
export type {
  GetV1DeductionsInput,
  GetV1DeductionsResponse,
} from "./endpoints/reports/get-v1-deductions/types.js";
import { executeGetV1AnalyticsAntifraudDetails } from "./endpoints/reports/get-v1-analytics-antifraud-details/execute.js";
import type {
  GetV1AnalyticsAntifraudDetailsInput,
  GetV1AnalyticsAntifraudDetailsResponse,
} from "./endpoints/reports/get-v1-analytics-antifraud-details/types.js";
export type {
  GetV1AnalyticsAntifraudDetailsInput,
  GetV1AnalyticsAntifraudDetailsResponse,
} from "./endpoints/reports/get-v1-analytics-antifraud-details/types.js";
import { executeGetV1AnalyticsGoodsLabeling } from "./endpoints/reports/get-v1-analytics-goods-labeling/execute.js";
import type {
  GetV1AnalyticsGoodsLabelingInput,
  GetV1AnalyticsGoodsLabelingResponse,
} from "./endpoints/reports/get-v1-analytics-goods-labeling/types.js";
export type {
  GetV1AnalyticsGoodsLabelingInput,
  GetV1AnalyticsGoodsLabelingResponse,
} from "./endpoints/reports/get-v1-analytics-goods-labeling/types.js";
import { executeGetV1AcceptanceReport } from "./endpoints/reports/get-v1-acceptance-report/execute.js";
import type {
  GetV1AcceptanceReportInput,
  GetV1AcceptanceReportResponse,
} from "./endpoints/reports/get-v1-acceptance-report/types.js";
export type {
  GetV1AcceptanceReportInput,
  GetV1AcceptanceReportResponse,
} from "./endpoints/reports/get-v1-acceptance-report/types.js";
import { executeGetV1AcceptanceReportTasksTaskIdStatus } from "./endpoints/reports/get-v1-acceptance-report-tasks-task-id-status/execute.js";
import type {
  GetV1AcceptanceReportTasksTaskIdStatusInput,
  GetV1AcceptanceReportTasksTaskIdStatusResponse,
} from "./endpoints/reports/get-v1-acceptance-report-tasks-task-id-status/types.js";
export type {
  GetV1AcceptanceReportTasksTaskIdStatusInput,
  GetV1AcceptanceReportTasksTaskIdStatusResponse,
} from "./endpoints/reports/get-v1-acceptance-report-tasks-task-id-status/types.js";
import { executeGetV1AcceptanceReportTasksTaskIdDownload } from "./endpoints/reports/get-v1-acceptance-report-tasks-task-id-download/execute.js";
import type {
  GetV1AcceptanceReportTasksTaskIdDownloadInput,
  GetV1AcceptanceReportTasksTaskIdDownloadResponse,
} from "./endpoints/reports/get-v1-acceptance-report-tasks-task-id-download/types.js";
export type {
  GetV1AcceptanceReportTasksTaskIdDownloadInput,
  GetV1AcceptanceReportTasksTaskIdDownloadResponse,
} from "./endpoints/reports/get-v1-acceptance-report-tasks-task-id-download/types.js";
import { executeGetV1PaidStorage } from "./endpoints/reports/get-v1-paid-storage/execute.js";
import type {
  GetV1PaidStorageInput,
  GetV1PaidStorageResponse,
} from "./endpoints/reports/get-v1-paid-storage/types.js";
export type {
  GetV1PaidStorageInput,
  GetV1PaidStorageResponse,
} from "./endpoints/reports/get-v1-paid-storage/types.js";
import { executeGetV1PaidStorageTasksTaskIdStatus } from "./endpoints/reports/get-v1-paid-storage-tasks-task-id-status/execute.js";
import type {
  GetV1PaidStorageTasksTaskIdStatusInput,
  GetV1PaidStorageTasksTaskIdStatusResponse,
} from "./endpoints/reports/get-v1-paid-storage-tasks-task-id-status/types.js";
export type {
  GetV1PaidStorageTasksTaskIdStatusInput,
  GetV1PaidStorageTasksTaskIdStatusResponse,
} from "./endpoints/reports/get-v1-paid-storage-tasks-task-id-status/types.js";
import { executeGetV1PaidStorageTasksTaskIdDownload } from "./endpoints/reports/get-v1-paid-storage-tasks-task-id-download/execute.js";
import type {
  GetV1PaidStorageTasksTaskIdDownloadInput,
  GetV1PaidStorageTasksTaskIdDownloadResponse,
} from "./endpoints/reports/get-v1-paid-storage-tasks-task-id-download/types.js";
export type {
  GetV1PaidStorageTasksTaskIdDownloadInput,
  GetV1PaidStorageTasksTaskIdDownloadResponse,
} from "./endpoints/reports/get-v1-paid-storage-tasks-task-id-download/types.js";
import { executeGetV1AnalyticsRegionSale } from "./endpoints/reports/get-v1-analytics-region-sale/execute.js";
import type {
  GetV1AnalyticsRegionSaleInput,
  GetV1AnalyticsRegionSaleResponse,
} from "./endpoints/reports/get-v1-analytics-region-sale/types.js";
export type {
  GetV1AnalyticsRegionSaleInput,
  GetV1AnalyticsRegionSaleResponse,
} from "./endpoints/reports/get-v1-analytics-region-sale/types.js";
import { executeGetV1AnalyticsBrandShareBrands } from "./endpoints/reports/get-v1-analytics-brand-share-brands/execute.js";
import type { GetV1AnalyticsBrandShareBrandsResponse } from "./endpoints/reports/get-v1-analytics-brand-share-brands/types.js";
export type {
  GetV1AnalyticsBrandShareBrandsInput,
  GetV1AnalyticsBrandShareBrandsResponse,
} from "./endpoints/reports/get-v1-analytics-brand-share-brands/types.js";
import { executeGetV1AnalyticsBrandShareParentSubjects } from "./endpoints/reports/get-v1-analytics-brand-share-parent-subjects/execute.js";
import type {
  GetV1AnalyticsBrandShareParentSubjectsInput,
  GetV1AnalyticsBrandShareParentSubjectsResponse,
} from "./endpoints/reports/get-v1-analytics-brand-share-parent-subjects/types.js";
export type {
  GetV1AnalyticsBrandShareParentSubjectsInput,
  GetV1AnalyticsBrandShareParentSubjectsResponse,
} from "./endpoints/reports/get-v1-analytics-brand-share-parent-subjects/types.js";
import { executeGetV1AnalyticsBrandShare } from "./endpoints/reports/get-v1-analytics-brand-share/execute.js";
import type {
  GetV1AnalyticsBrandShareInput,
  GetV1AnalyticsBrandShareResponse,
} from "./endpoints/reports/get-v1-analytics-brand-share/types.js";
export type {
  GetV1AnalyticsBrandShareInput,
  GetV1AnalyticsBrandShareResponse,
} from "./endpoints/reports/get-v1-analytics-brand-share/types.js";
import { executeGetV1AnalyticsBannedProducsBlocked } from "./endpoints/reports/get-v1-analytics-banned-producs-blocked/execute.js";
import type {
  GetV1AnalyticsBannedProducsBlockedInput,
  GetV1AnalyticsBannedProducsBlockedResponse,
} from "./endpoints/reports/get-v1-analytics-banned-producs-blocked/types.js";
export type {
  GetV1AnalyticsBannedProducsBlockedInput,
  GetV1AnalyticsBannedProducsBlockedResponse,
} from "./endpoints/reports/get-v1-analytics-banned-producs-blocked/types.js";
import { executeGetV1AnalyticsGoodsReturn } from "./endpoints/reports/get-v1-analytics-goods-return/execute.js";
import type {
  GetV1AnalyticsGoodsReturnInput,
  GetV1AnalyticsGoodsReturnResponse,
} from "./endpoints/reports/get-v1-analytics-goods-return/types.js";
export type {
  GetV1AnalyticsGoodsReturnInput,
  GetV1AnalyticsGoodsReturnResponse,
} from "./endpoints/reports/get-v1-analytics-goods-return/types.js";
import { executeGetV1AccountBalance } from "./endpoints/finances/get-v1-account-balance/execute.js";
import type { GetV1AccountBalanceResponse } from "./endpoints/finances/get-v1-account-balance/types.js";
export type {
  GetV1AccountBalanceInput,
  GetV1AccountBalanceResponse,
} from "./endpoints/finances/get-v1-account-balance/types.js";
import { executePostV1SalesReportsList } from "./endpoints/finances/post-v1-sales-reports-list/execute.js";
import type {
  PostV1SalesReportsListInput,
  PostV1SalesReportsListResponse,
} from "./endpoints/finances/post-v1-sales-reports-list/types.js";
export type {
  PostV1SalesReportsListInput,
  PostV1SalesReportsListResponse,
} from "./endpoints/finances/post-v1-sales-reports-list/types.js";
import { executePostV1SalesReportsDetailedReportId } from "./endpoints/finances/post-v1-sales-reports-detailed-report-id/execute.js";
import type {
  PostV1SalesReportsDetailedReportIdInput,
  PostV1SalesReportsDetailedReportIdResponse,
} from "./endpoints/finances/post-v1-sales-reports-detailed-report-id/types.js";
export type {
  PostV1SalesReportsDetailedReportIdInput,
  PostV1SalesReportsDetailedReportIdResponse,
} from "./endpoints/finances/post-v1-sales-reports-detailed-report-id/types.js";
import { executePostV1SalesReportsDetailed } from "./endpoints/finances/post-v1-sales-reports-detailed/execute.js";
import type {
  PostV1SalesReportsDetailedInput,
  PostV1SalesReportsDetailedResponse,
} from "./endpoints/finances/post-v1-sales-reports-detailed/types.js";
export type {
  PostV1SalesReportsDetailedInput,
  PostV1SalesReportsDetailedResponse,
} from "./endpoints/finances/post-v1-sales-reports-detailed/types.js";
import { executePostV1AcquiringList } from "./endpoints/finances/post-v1-acquiring-list/execute.js";
import type {
  PostV1AcquiringListInput,
  PostV1AcquiringListResponse,
} from "./endpoints/finances/post-v1-acquiring-list/types.js";
export type {
  PostV1AcquiringListInput,
  PostV1AcquiringListResponse,
} from "./endpoints/finances/post-v1-acquiring-list/types.js";
import { executePostV1AcquiringDetailedReportId } from "./endpoints/finances/post-v1-acquiring-detailed-report-id/execute.js";
import type {
  PostV1AcquiringDetailedReportIdInput,
  PostV1AcquiringDetailedReportIdResponse,
} from "./endpoints/finances/post-v1-acquiring-detailed-report-id/types.js";
export type {
  PostV1AcquiringDetailedReportIdInput,
  PostV1AcquiringDetailedReportIdResponse,
} from "./endpoints/finances/post-v1-acquiring-detailed-report-id/types.js";
import { executePostV1AcquiringDetailed } from "./endpoints/finances/post-v1-acquiring-detailed/execute.js";
import type {
  PostV1AcquiringDetailedInput,
  PostV1AcquiringDetailedResponse,
} from "./endpoints/finances/post-v1-acquiring-detailed/types.js";
export type {
  PostV1AcquiringDetailedInput,
  PostV1AcquiringDetailedResponse,
} from "./endpoints/finances/post-v1-acquiring-detailed/types.js";
import { executeGetV1DocumentsCategories } from "./endpoints/finances/get-v1-documents-categories/execute.js";
import type {
  GetV1DocumentsCategoriesInput,
  GetV1DocumentsCategoriesResponse,
} from "./endpoints/finances/get-v1-documents-categories/types.js";
export type {
  GetV1DocumentsCategoriesInput,
  GetV1DocumentsCategoriesResponse,
} from "./endpoints/finances/get-v1-documents-categories/types.js";
import { executeGetV1DocumentsList } from "./endpoints/finances/get-v1-documents-list/execute.js";
import type {
  GetV1DocumentsListInput,
  GetV1DocumentsListResponse,
} from "./endpoints/finances/get-v1-documents-list/types.js";
export type {
  GetV1DocumentsListInput,
  GetV1DocumentsListResponse,
} from "./endpoints/finances/get-v1-documents-list/types.js";
import { executeGetV1DocumentsDownload } from "./endpoints/finances/get-v1-documents-download/execute.js";
import type {
  GetV1DocumentsDownloadInput,
  GetV1DocumentsDownloadResponse,
} from "./endpoints/finances/get-v1-documents-download/types.js";
export type {
  GetV1DocumentsDownloadInput,
  GetV1DocumentsDownloadResponse,
} from "./endpoints/finances/get-v1-documents-download/types.js";
import { executePostV1DocumentsDownloadAll } from "./endpoints/finances/post-v1-documents-download-all/execute.js";
import type {
  PostV1DocumentsDownloadAllInput,
  PostV1DocumentsDownloadAllResponse,
} from "./endpoints/finances/post-v1-documents-download-all/types.js";
export type {
  PostV1DocumentsDownloadAllInput,
  PostV1DocumentsDownloadAllResponse,
} from "./endpoints/finances/post-v1-documents-download-all/types.js";

export const WbApiHost = {
  Advert: "https://advert-api.wildberries.ru",
  AdvertMedia: "https://advert-media-api.wildberries.ru",
  BuyerChat: "https://buyer-chat-api.wildberries.ru",
  Common: "https://common-api.wildberries.ru",
  Content: "https://content-api.wildberries.ru",
  DiscountsPrices: "https://discounts-prices-api.wildberries.ru",
  Documents: "https://documents-api.wildberries.ru",
  DpCalendar: "https://dp-calendar-api.wildberries.ru",
  Feedbacks: "https://feedbacks-api.wildberries.ru",
  Finance: "https://finance-api.wildberries.ru",
  Marketplace: "https://marketplace-api.wildberries.ru",
  Returns: "https://returns-api.wildberries.ru",
  SellerAnalytics: "https://seller-analytics-api.wildberries.ru",
  Statistics: "https://statistics-api.wildberries.ru",
  Supplies: "https://supplies-api.wildberries.ru",
  UserManagement: "https://user-management-api.wildberries.ru",
} as const;
export type WbApiHost = (typeof WbApiHost)[keyof typeof WbApiHost];
export const WB_API_ORIGINS = [
  "https://advert-api-sandbox.wildberries.ru",
  "https://advert-api.wildberries.ru",
  "https://advert-media-api.wildberries.ru",
  "https://buyer-chat-api.wildberries.ru",
  "https://common-api.wildberries.ru",
  "https://content-api-sandbox.wildberries.ru",
  "https://content-api.wildberries.ru",
  "https://discounts-prices-api-sandbox.wildberries.ru",
  "https://discounts-prices-api.wildberries.ru",
  "https://documents-api.wildberries.ru",
  "https://dp-calendar-api.wildberries.ru",
  "https://feedbacks-api-sandbox.wildberries.ru",
  "https://feedbacks-api.wildberries.ru",
  "https://finance-api.wildberries.ru",
  "https://marketplace-api-sandbox.wildberries.ru",
  "https://marketplace-api.wildberries.ru",
  "https://returns-api.wildberries.ru",
  "https://seller-analytics-api.wildberries.ru",
  "https://statistics-api-sandbox.wildberries.ru",
  "https://statistics-api.wildberries.ru",
  "https://supplies-api-sandbox.wildberries.ru",
  "https://supplies-api.wildberries.ru",
  "https://user-management-api.wildberries.ru",
] as const;
export type WbApiOrigin = (typeof WB_API_ORIGINS)[number];

export interface WbGeneralApi {
  /**
   * Проверка подключения
   *
   * Метод проверяет:
   *  1. Успешно ли запрос доходит до WB API
   *  2. Валидность токена авторизации и URL запроса
   *  3. Совпадают ли категория токена и сервис
   *
   *  Метод не предназначен для проверки доступности сервисов WB
   *
   * У каждого сервиса есть свой вариант метода в зависимости от домена:
   *
   * | Категория | URL запроса |
   * |---------------|-----------------------|
   * | Контент | `https://content-api.wildberries.ru/ping`
   * `https://content-api-sandbox.wildberries.ru/ping` |
   * | Аналитика | `https://seller-analytics-api.wildberries.ru/ping` |
   * | Цены и скидки | `https://discounts-prices-api.wildberries.ru/ping`
   * `https://discounts-prices-api-sandbox.wildberries.ru/ping` |
   * | Маркетплейс | `https://marketplace-api.wildberries.ru/ping` |
   * | Статистика | `https://statistics-api.wildberries.ru/ping`
   * `https://statistics-api-sandbox.wildberries.ru/ping` |
   * | Продвижение | `https://advert-api.wildberries.ru/ping`
   * `https://advert-api-sandbox.wildberries.ru/ping` |
   * | Вопросы и отзывы | `https://feedbacks-api.wildberries.ru/ping`
   * `https://feedbacks-api-sandbox.wildberries.ru/ping` |
   * | Чат с покупателями | `https://buyer-chat-api.wildberries.ru/ping` |
   * | Поставки | `https://supplies-api.wildberries.ru/ping` |
   * | Возвраты покупателями | `https://returns-api.wildberries.ru/ping` |
   * | Документы | `https://documents-api.wildberries.ru/ping` |
   * | Финансы | `https://finance-api.wildberries.ru/ping` |
   * | Тарифы, Новости, Получить информацию о продавце | `https://common-api.wildberries.ru/ping` |
   * | Управление пользователями продавца | `https://user-management-api.wildberries.ru/ping` |
   *
   *  Максимум 3 запроса за 30 секунд (/openapi/api-information#tag/introduction/Limity-zaprosov). Если попытаться автоматизировать использование метода, запросы будут временно заблокированы. Лимит действует отдельно для каждого варианта метода в зависимости от домена
   *
   * GET /ping
   *
   * Разделы WB: Проверка подключения к WB API.
   *
   * @see https://dev.wildberries.ru/docs/openapi/api-information
   */
  readonly getPing: (options?: WbRequestOptions) => Promise<GetPingResponse>;
  /**
   * Получение новостей портала продавцов
   *
   * Метод позволяет получать новости портала продавцов.
   *  Для получения успешного ответа необходимо указать
   * один из параметров `from` или `fromID`.
   *  За один запрос можно получить не более 100 новостей.
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца:
   *
   * | Тип | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- | --- |
   * | Персональный | 1 мин | 1 запрос | 1 мин | 10 запросов |
   * | Сервисный | 1 мин | 1 запрос | 1 мин | 10 запросов |
   * | Базовый с секретом | 1 мин | 1 запрос | 1 мин | 10 запросов |
   * | Базовый | 1 ч | 1 запрос | 1 ч | 1 запрос |
   *
   * GET /api/communications/v2/news
   *
   * Разделы WB: API новостей.
   *
   * @see https://dev.wildberries.ru/docs/openapi/api-information
   */
  readonly getV2News: (
    input?: GetV2NewsInput,
    options?: WbRequestOptions,
  ) => Promise<GetV2NewsResponse>;
  /**
   * Получить информацию о продавце
   *
   * Информацию о продавце можно получить с токеном любой категории (/openapi/api-information#tag/authorization/Kategorii-tokenov)
   *
   * Метод позволяет получать наименование продавца и ID его профиля.
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца:
   *
   * | Тип | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- | --- |
   * | Персональный | 1 мин | 1 запрос | 1 мин | 10 запросов |
   * | Сервисный | 1 мин | 1 запрос | 1 мин | 10 запросов |
   * | Базовый с секретом | 1 мин | 1 запрос | 1 мин | 10 запросов |
   * | Базовый | 24 ч | 1 запрос | 24 ч | 1 запрос |
   *
   * GET /api/v1/seller-info
   *
   * Разделы WB: Информация о продавце.
   *
   * @see https://dev.wildberries.ru/docs/openapi/api-information
   */
  readonly getV1SellerInfo: (
    options?: WbRequestOptions,
  ) => Promise<GetV1SellerInfoResponse>;
  /**
   * Получить рейтинг продавца
   *
   * Для доступа к методу используйте токен (/openapi/api-information#tag/authorization/Kak-sozdat-personalnyj-bazovyj-ili-testovyj-token) для категории Вопросы и отзывы
   *
   *  Метод доступен (/openapi/api-information#tag/authorization/Pravila-ispolzovaniya-tokenov-dostupa-k-API) по
   *  Сервисному токену
   *
   * Метод возвращает пользовательский рейтинг продавца и количество отзывов.
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца:
   *
   * | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- |
   * | 1 мин | 1 запрос | 1 мин | 1 запрос |
   *
   * GET /api/common/v1/rating
   *
   * Разделы WB: Информация о продавце.
   *
   * @see https://dev.wildberries.ru/docs/openapi/api-information
   */
  readonly getV1Rating: (
    options?: WbRequestOptions,
  ) => Promise<GetV1RatingResponse>;
  /**
   * Получить информацию о подписке Джем
   *
   * Информацию о подписке Джем можно получить с токеном любой категории (/openapi/api-information#tag/authorization/Kategorii-tokenov)
   *
   *  Метод доступен (/openapi/api-information#tag/authorization/Pravila-ispolzovaniya-tokenov-dostupa-k-API) по
   *  Сервисному токену
   *
   * Метод возвращает информацию о подписке [Джем](https://seller.wildberries.ru/monetization/jam):
   *  - Если продавец никогда не подключал подписку Джем, возвращается пустой ответ `200`.
   *  - Если продавец активировал и никогда не отменял подписку, возвращается:
   *  - дата активации подписки `since`
   *  - дата окончания текущего оплаченного периода `till`
   *  - Если подписка закончилась или была отменена, но продавец подключил её повторно, возвращается:
   *  - дата первой активации подписки `since`
   *  - дата окончания текущего оплаченного периода `till`
   *  - Если подписка неактивна, возвращается:
   *  - дата первой активации подписки `since`
   *  - дата окончания последнего оплаченного периода `till`
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца:
   *
   * | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- |
   * | 1 мин | 1 запрос | 1 мин | 10 запросов |
   *
   * GET /api/common/v1/subscriptions
   *
   * Разделы WB: Информация о продавце.
   *
   * @see https://dev.wildberries.ru/docs/openapi/api-information
   */
  readonly getV1Subscriptions: (
    options?: WbRequestOptions,
  ) => Promise<GetV1SubscriptionsResponse>;
  /**
   * Получить информацию об опциях Конструктора тарифов
   *
   * Информацию об опциях Конструктора тарифов можно получить с токеном любой категории (/openapi/api-information#tag/authorization/Kategorii-tokenov)
   *
   *  Метод доступен (/openapi/api-information#tag/authorization/Pravila-ispolzovaniya-tokenov-dostupa-k-API) по
   *  Сервисному токену
   *
   * Метод возвращает информацию обо всех опциях и пакетах опций, которые продавец подключил в [Конструкторе тарифов](https://seller.wildberries.ru/tariff-constructor).
   *
   * Опции, входящие в подключённые пакеты, возвращаются в массиве `packages`. Опции, подключённые вне пакетов, возвращаются в массиве `options`.
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца:
   *
   * | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- |
   * | 1 мин | 1 запрос | 1 мин | 10 запросов |
   *
   * GET /api/common/v1/tariff-constructor/options
   *
   * Разделы WB: Информация о продавце.
   *
   * @see https://dev.wildberries.ru/docs/openapi/api-information
   */
  readonly getV1TariffConstructorOptions: (
    input?: GetV1TariffConstructorOptionsInput,
    options?: WbRequestOptions,
  ) => Promise<GetV1TariffConstructorOptionsResponse>;
  /**
   * Создать приглашение для нового пользователя
   *
   * Метод доступен (/openapi/api-information#tag/authorization/Pravila-ispolzovaniya-tokenov-dostupa-k-API) по
   *  Персональному токену
   *
   * Метод создаёт приглашение для нового пользователя с настройкой доступов к разделам профиля продавца.
   *
   * Как выдаются права доступа:
   * - Если `access` пустой (`[]`) или не указан — по умолчанию выдаются все доступы, кроме доступов к витрине (`showcase`) и **Джем** (`changeJam`)
   * - Если в `access` указана часть разделов профиля, то кроме тех доступов, что указаны в запросе, также выдаются все доступы по умолчанию
   * - Если в `access` перечислены все возможные разделы, доступы будут выданы согласно запросу, без доступов по умолчанию
   * - Если в `access` дважды указан один и тот же раздел (`code`):
   *  - при разных значениях `disabled` (`true` и `false`) доступ не будет выдан
   *  - при одинаковых значениях `"disabled": true` доступ не будет выдан
   *  - при одинаковых значениях `"disabled": false` доступ будет выдан
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца:
   *
   * | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- |
   * | 1 сек | 1 запрос | 1 сек | 5 запросов |
   *
   * POST /api/v1/invite
   *
   * Разделы WB: Управление пользователями продавца.
   *
   * @see https://dev.wildberries.ru/docs/openapi/api-information
   */
  readonly postV1Invite: (
    input: PostV1InviteInput,
    options?: WbRequestOptions,
  ) => Promise<PostV1InviteResponse>;
  /**
   * Получить список активных или приглашённых пользователей продавца
   *
   * Метод доступен (/openapi/api-information#tag/authorization/Pravila-ispolzovaniya-tokenov-dostupa-k-API) по
   *  Персональному токену
   *
   * Метод возвращает список активных или приглашённых пользователей профиля продавца.
   *
   * Чтобы выбрать список, укажите значение параметра `isInviteOnly`:
   *  - `isInviteOnly=true` — список приглашённых пользователей, которые ещё не активировали доступ
   *  - `isInviteOnly=false` или не указан — список активных пользователей
   *
   * По каждому пользователю можно получить:
   *  - роль пользователя
   *  - разделы, к которым есть доступы
   *  - статус приглашения
   *
   * Список приглашённых пользователей в ответе всегда отсортирован по дате создания: от новых до старых.
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца:
   *
   * | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- |
   * | 1 сек | 1 запрос | 1 сек | 5 запросов |
   *
   * GET /api/v1/users
   *
   * Разделы WB: Управление пользователями продавца.
   *
   * @see https://dev.wildberries.ru/docs/openapi/api-information
   */
  readonly getV1Users: (
    input?: GetV1UsersInput,
    options?: WbRequestOptions,
  ) => Promise<GetV1UsersResponse>;
  /**
   * Изменить права доступа пользователей
   *
   * Метод доступен (/openapi/api-information#tag/authorization/Pravila-ispolzovaniya-tokenov-dostupa-k-API) по
   *  Персональному токену
   *
   * Метод меняет права доступа одному или нескольким пользователям.
   *
   * Обновляются только права доступа, переданные в параметрах запроса. Остальные поля остаются без изменений.
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца:
   *
   * | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- |
   * | 1 сек | 1 запрос | 1 сек | 5 запросов |
   *
   * PUT /api/v1/users/access
   *
   * Разделы WB: Управление пользователями продавца.
   *
   * @see https://dev.wildberries.ru/docs/openapi/api-information
   */
  readonly putV1UsersAccess: (
    input: PutV1UsersAccessInput,
    options?: WbRequestOptions,
  ) => Promise<PutV1UsersAccessResponse>;
  /**
   * Удалить пользователя
   *
   * Метод доступен (/openapi/api-information#tag/authorization/Pravila-ispolzovaniya-tokenov-dostupa-k-API) по
   *  Персональному токену
   *
   * Метод удаляет пользователя из [списка сотрудников продавца](/openapi/api-information#tag/sellerUserManagement/operation/getV1Users). Этому пользователю будет закрыт доступ в профиль продавца.
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца:
   *
   * | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- |
   * | 1 сек | 1 запрос | 1 сек | 10 запросов |
   *
   * DELETE /api/v1/user
   *
   * Разделы WB: Управление пользователями продавца.
   *
   * @see https://dev.wildberries.ru/docs/openapi/api-information
   */
  readonly deleteV1User: (
    input: DeleteV1UserInput,
    options?: WbRequestOptions,
  ) => Promise<DeleteV1UserResponse>;
  /**
   * Рекомендуемый метод без версии; использует `getV2News`.
   *
   * GET /api/communications/v2/news
   *
   * @see https://dev.wildberries.ru/docs/openapi/api-information
   */
  readonly getNews: (
    input?: GetV2NewsInput,
    options?: WbRequestOptions,
  ) => Promise<GetV2NewsResponse>;
  /**
   * Рекомендуемый метод без версии; использует `getV1SellerInfo`.
   *
   * GET /api/v1/seller-info
   *
   * @see https://dev.wildberries.ru/docs/openapi/api-information
   */
  readonly getSellerInfo: (
    options?: WbRequestOptions,
  ) => Promise<GetV1SellerInfoResponse>;
  /**
   * Рекомендуемый метод без версии; использует `getV1Rating`.
   *
   * GET /api/common/v1/rating
   *
   * @see https://dev.wildberries.ru/docs/openapi/api-information
   */
  readonly getRating: (
    options?: WbRequestOptions,
  ) => Promise<GetV1RatingResponse>;
  /**
   * Рекомендуемый метод без версии; использует `getV1Subscriptions`.
   *
   * GET /api/common/v1/subscriptions
   *
   * @see https://dev.wildberries.ru/docs/openapi/api-information
   */
  readonly getSubscriptions: (
    options?: WbRequestOptions,
  ) => Promise<GetV1SubscriptionsResponse>;
  /**
   * Рекомендуемый метод без версии; использует `getV1TariffConstructorOptions`.
   *
   * GET /api/common/v1/tariff-constructor/options
   *
   * @see https://dev.wildberries.ru/docs/openapi/api-information
   */
  readonly getTariffConstructorOptions: (
    input?: GetV1TariffConstructorOptionsInput,
    options?: WbRequestOptions,
  ) => Promise<GetV1TariffConstructorOptionsResponse>;
  /**
   * Рекомендуемый метод без версии; использует `postV1Invite`.
   *
   * POST /api/v1/invite
   *
   * @see https://dev.wildberries.ru/docs/openapi/api-information
   */
  readonly postInvite: (
    input: PostV1InviteInput,
    options?: WbRequestOptions,
  ) => Promise<PostV1InviteResponse>;
  /**
   * Рекомендуемый метод без версии; использует `getV1Users`.
   *
   * GET /api/v1/users
   *
   * @see https://dev.wildberries.ru/docs/openapi/api-information
   */
  readonly getUsers: (
    input?: GetV1UsersInput,
    options?: WbRequestOptions,
  ) => Promise<GetV1UsersResponse>;
  /**
   * Рекомендуемый метод без версии; использует `putV1UsersAccess`.
   *
   * PUT /api/v1/users/access
   *
   * @see https://dev.wildberries.ru/docs/openapi/api-information
   */
  readonly putUsersAccess: (
    input: PutV1UsersAccessInput,
    options?: WbRequestOptions,
  ) => Promise<PutV1UsersAccessResponse>;
  /**
   * Рекомендуемый метод без версии; использует `deleteV1User`.
   *
   * DELETE /api/v1/user
   *
   * @see https://dev.wildberries.ru/docs/openapi/api-information
   */
  readonly deleteUser: (
    input: DeleteV1UserInput,
    options?: WbRequestOptions,
  ) => Promise<DeleteV1UserResponse>;
}

export interface WbItemsApi {
  /**
   * Родительские категории товаров
   *
   * Метод возвращает названия и ID всех родительских категорий для [создания карточек товаров](/openapi/work-with-products#tag/listingItems): например, `Электроника`, `Бытовая химия`, `Рукоделие`.
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
   * GET /content/v2/object/parent/all
   *
   * Разделы WB: Категории, предметы и характеристики.
   *
   * @see https://dev.wildberries.ru/docs/openapi/items
   */
  readonly getContentV2ObjectParentAll: (
    input?: GetContentV2ObjectParentAllInput,
    options?: WbRequestOptions,
  ) => Promise<GetContentV2ObjectParentAllResponse>;
  /**
   * Список предметов
   *
   * Метод возвращает список названий [родительских категорий предметов](/openapi/work-with-products#tag/categoriesSubcategoriesAndCharacteristics/paths/~1content~1v2~1object~1parent~1all/get) и их предметов с ID. Например, у категории `Игрушки` будут предметы `Калейдоскопы`, `Куклы`, `Мячики`.
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
   * GET /content/v2/object/all
   *
   * Разделы WB: Категории, предметы и характеристики.
   *
   * @see https://dev.wildberries.ru/docs/openapi/items
   */
  readonly getContentV2ObjectAll: (
    input?: GetContentV2ObjectAllInput,
    options?: WbRequestOptions,
  ) => Promise<GetContentV2ObjectAllResponse>;
  /**
   * Характеристики предмета
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
   * Разделы WB: Категории, предметы и характеристики.
   *
   * @see https://dev.wildberries.ru/docs/openapi/items
   */
  readonly getContentV2ObjectCharcsSubjectId: (
    input: GetContentV2ObjectCharcsSubjectIdInput,
    options?: WbRequestOptions,
  ) => Promise<GetContentV2ObjectCharcsSubjectIdResponse>;
  /**
   * Цвет
   *
   * Метод возвращает возможные значения [характеристики](/openapi/work-with-products#tag/categoriesSubcategoriesAndCharacteristics/paths/~1content~1v2~1object~1charcs~1%7BsubjectId%7D/get) предмета `Цвет`.
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца для методов Характеристик:
   *
   * | Тип | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- | --- |
   * | Персональный | 1 мин | 100 запросов | 600 мс | 5 запросов |
   * | Сервисный | 1 мин | 100 запросов | 600 мс | 5 запросов |
   * | Базовый с секретом | 1 мин | 100 запросов | 600 мс | 5 запросов |
   * | Базовый | 1 ч | 2 запроса | 30 мин | 1 запрос |
   *
   * GET /content/v2/directory/colors
   *
   * Разделы WB: Категории, предметы и характеристики.
   *
   * @see https://dev.wildberries.ru/docs/openapi/items
   */
  readonly getContentV2DirectoryColors: (
    input?: GetContentV2DirectoryColorsInput,
    options?: WbRequestOptions,
  ) => Promise<GetContentV2DirectoryColorsResponse>;
  /**
   * Пол
   *
   * Метод возвращает возможные значения [характеристики](/openapi/work-with-products#tag/categoriesSubcategoriesAndCharacteristics/paths/~1content~1v2~1object~1charcs~1%7BsubjectId%7D/get) предмета `Пол`.
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца для методов Характеристик:
   *
   * | Тип | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- | --- |
   * | Персональный | 1 мин | 100 запросов | 600 мс | 5 запросов |
   * | Сервисный | 1 мин | 100 запросов | 600 мс | 5 запросов |
   * | Базовый с секретом | 1 мин | 100 запросов | 600 мс | 5 запросов |
   * | Базовый | 1 ч | 2 запроса | 30 мин | 1 запрос |
   *
   * GET /content/v2/directory/kinds
   *
   * Разделы WB: Категории, предметы и характеристики.
   *
   * @see https://dev.wildberries.ru/docs/openapi/items
   */
  readonly getContentV2DirectoryKinds: (
    input?: GetContentV2DirectoryKindsInput,
    options?: WbRequestOptions,
  ) => Promise<GetContentV2DirectoryKindsResponse>;
  /**
   * Страна производства
   *
   * Метод возвращает возможные значения [характеристики](/openapi/work-with-products#tag/categoriesSubcategoriesAndCharacteristics/paths/~1content~1v2~1object~1charcs~1%7BsubjectId%7D/get) предмета `Страна производства`.
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
   * GET /content/v2/directory/countries
   *
   * Разделы WB: Категории, предметы и характеристики.
   *
   * @see https://dev.wildberries.ru/docs/openapi/items
   */
  readonly getContentV2DirectoryCountries: (
    input?: GetContentV2DirectoryCountriesInput,
    options?: WbRequestOptions,
  ) => Promise<GetContentV2DirectoryCountriesResponse>;
  /**
   * Сезон
   *
   * Метод возвращает возможные значения [характеристики](/openapi/work-with-products#tag/categoriesSubcategoriesAndCharacteristics/paths/~1content~1v2~1object~1charcs~1%7BsubjectId%7D/get) предмета `Сезон`.
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца для методов Характеристик:
   *
   * | Тип | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- | --- |
   * | Персональный | 1 мин | 100 запросов | 600 мс | 5 запросов |
   * | Сервисный | 1 мин | 100 запросов | 600 мс | 5 запросов |
   * | Базовый с секретом | 1 мин | 100 запросов | 600 мс | 5 запросов |
   * | Базовый | 1 ч | 2 запроса | 30 мин | 1 запрос |
   *
   * GET /content/v2/directory/seasons
   *
   * Разделы WB: Категории, предметы и характеристики.
   *
   * @see https://dev.wildberries.ru/docs/openapi/items
   */
  readonly getContentV2DirectorySeasons: (
    input?: GetContentV2DirectorySeasonsInput,
    options?: WbRequestOptions,
  ) => Promise<GetContentV2DirectorySeasonsResponse>;
  /**
   * Ставка НДС
   *
   * Метод возвращает возможные значения [характеристики](/openapi/work-with-products#tag/categoriesSubcategoriesAndCharacteristics/paths/~1content~1v2~1object~1charcs~1%7BsubjectId%7D/get) предмета `Ставка НДС`.
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца для методов Характеристик:
   *
   * | Тип | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- | --- |
   * | Персональный | 1 мин | 100 запросов | 600 мс | 5 запросов |
   * | Сервисный | 1 мин | 100 запросов | 600 мс | 5 запросов |
   * | Базовый с секретом | 1 мин | 100 запросов | 600 мс | 5 запросов |
   * | Базовый | 1 ч | 2 запроса | 30 мин | 1 запрос |
   *
   * GET /content/v2/directory/vat
   *
   * Разделы WB: Категории, предметы и характеристики.
   *
   * @see https://dev.wildberries.ru/docs/openapi/items
   */
  readonly getContentV2DirectoryVat: (
    input?: GetContentV2DirectoryVatInput,
    options?: WbRequestOptions,
  ) => Promise<GetContentV2DirectoryVatResponse>;
  /**
   * ТНВЭД-код
   *
   * Метод возвращает список ТНВЭД-кодов по ID [предмета](/openapi/work-with-products#tag/categoriesSubcategoriesAndCharacteristics/paths/~1content~1v2~1object~1all/get) и фрагменту ТНВЭД-кода.
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
   * GET /content/v2/directory/tnved
   *
   * Разделы WB: Категории, предметы и характеристики.
   *
   * @see https://dev.wildberries.ru/docs/openapi/items
   */
  readonly getContentV2DirectoryTnved: (
    input: GetContentV2DirectoryTnvedInput,
    options?: WbRequestOptions,
  ) => Promise<GetContentV2DirectoryTnvedResponse>;
  /**
   * Бренды
   *
   * Метод возвращает список брендов по ID предмета.
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца:
   *
   * | Тип | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- | --- |
   * | Персональный | 1 сек | 1 запрос | 1 сек | 5 запросов |
   * | Сервисный | 1 сек | 1 запрос | 1 сек | 5 запросов |
   * | Базовый с секретом | 1 сек | 1 запрос | 1 сек | 5 запросов |
   * | Базовый | 1 ч | 1 запрос | 1 ч | 1 запрос |
   *
   * GET /api/content/v1/brands
   *
   * Разделы WB: Категории, предметы и характеристики.
   *
   * @see https://dev.wildberries.ru/docs/openapi/items
   */
  readonly getApiContentV1Brands: (
    input: GetApiContentV1BrandsInput,
    options?: WbRequestOptions,
  ) => Promise<GetApiContentV1BrandsResponse>;
  /**
   * Список ярлыков
   *
   * Метод возвращает список и характеристики всех ярлыков продавца для группировки и фильтрации товаров.
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца для всех методов Ярлыков:
   *
   * | Тип | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- | --- |
   * | Персональный | 1 мин | 100 запросов | 600 мс | 5 запросов |
   * | Сервисный | 1 мин | 100 запросов | 600 мс | 5 запросов |
   * | Базовый с секретом | 1 мин | 100 запросов | 600 мс | 5 запросов |
   * | Базовый | 1 ч | 2 запроса | 30 мин | 1 запрос |
   *
   * GET /content/v2/tags
   *
   * Разделы WB: Ярлыки.
   *
   * @see https://dev.wildberries.ru/docs/openapi/items
   */
  readonly getContentV2Tags: (
    options?: WbRequestOptions,
  ) => Promise<GetContentV2TagsResponse>;
  /**
   * Создание ярлыка
   *
   * Метод добавляет один ярлык продавца. Можно создать максимум 15 ярлыков для одного продавца. Максимальная длина ярлыка — 15 символов.
   *
   * Созданный ярлык можно получить в общем [списке](/openapi/work-with-products#tag/labels/paths/~1content~1v2~1tags/get).
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца для всех методов Ярлыков:
   *
   * | Тип | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- | --- |
   * | Персональный | 1 мин | 100 запросов | 600 мс | 5 запросов |
   * | Сервисный | 1 мин | 100 запросов | 600 мс | 5 запросов |
   * | Базовый с секретом | 1 мин | 100 запросов | 600 мс | 5 запросов |
   * | Базовый | 1 ч | 2 запроса | 30 мин | 1 запрос |
   *
   * POST /content/v2/tag
   *
   * Разделы WB: Ярлыки.
   *
   * @see https://dev.wildberries.ru/docs/openapi/items
   */
  readonly postContentV2Tag: (
    input: PostContentV2TagInput,
    options?: WbRequestOptions,
  ) => Promise<PostContentV2TagResponse>;
  /**
   * Изменение ярлыка
   *
   * Метод заменяет данные ярлыка: имя и цвет.
   *
   * Новые данные можно получить в общем [списке](/openapi/work-with-products#tag/labels/paths/~1content~1v2~1tags/get).
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца для всех методов Ярлыков:
   *
   * | Тип | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- | --- |
   * | Персональный | 1 мин | 100 запросов | 600 мс | 5 запросов |
   * | Сервисный | 1 мин | 100 запросов | 600 мс | 5 запросов |
   * | Базовый с секретом | 1 мин | 100 запросов | 600 мс | 5 запросов |
   * | Базовый | 1 ч | 2 запроса | 30 мин | 1 запрос |
   *
   * PATCH /content/v2/tag/{id}
   *
   * Разделы WB: Ярлыки.
   *
   * @see https://dev.wildberries.ru/docs/openapi/items
   */
  readonly patchContentV2TagId: (
    input: PatchContentV2TagIdInput,
    options?: WbRequestOptions,
  ) => Promise<PatchContentV2TagIdResponse>;
  /**
   * Удаление ярлыка
   *
   * Метод удаляет ярлык из [списка ярлыков](/openapi/work-with-products#tag/labels/paths/~1content~1v2~1tags/get) продавца.
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца для всех методов Ярлыков:
   *
   * | Тип | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- | --- |
   * | Персональный | 1 мин | 100 запросов | 600 мс | 5 запросов |
   * | Сервисный | 1 мин | 100 запросов | 600 мс | 5 запросов |
   * | Базовый с секретом | 1 мин | 100 запросов | 600 мс | 5 запросов |
   * | Базовый | 1 ч | 2 запроса | 30 мин | 1 запрос |
   *
   * DELETE /content/v2/tag/{id}
   *
   * Разделы WB: Ярлыки.
   *
   * @see https://dev.wildberries.ru/docs/openapi/items
   */
  readonly deleteContentV2TagId: (
    input: DeleteContentV2TagIdInput,
    options?: WbRequestOptions,
  ) => Promise<DeleteContentV2TagIdResponse>;
  /**
   * Управление ярлыками в карточке товара
   *
   * Метод добавляет или снимает ярлык с карточки товара. К карточке можно добавить максимум 15 ярлыков.
   *
   * При удалении ярлыка из карточки товара он не удаляется из [списка ярлыков](/openapi/work-with-products#tag/labels/paths/~1content~1v2~1tags/get) продавца.
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца для всех методов Ярлыков:
   *
   * | Тип | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- | --- |
   * | Персональный | 1 мин | 100 запросов | 600 мс | 5 запросов |
   * | Сервисный | 1 мин | 100 запросов | 600 мс | 5 запросов |
   * | Базовый с секретом | 1 мин | 100 запросов | 600 мс | 5 запросов |
   * | Базовый | 1 ч | 2 запроса | 30 мин | 1 запрос |
   *
   * POST /content/v2/tag/nomenclature/link
   *
   * Разделы WB: Ярлыки.
   *
   * @see https://dev.wildberries.ru/docs/openapi/items
   */
  readonly postContentV2TagNomenclatureLink: (
    input: PostContentV2TagNomenclatureLinkInput,
    options?: WbRequestOptions,
  ) => Promise<PostContentV2TagNomenclatureLinkResponse>;
  /**
   * Список карточек товаров
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
   * Разделы WB: Карточки товаров.
   *
   * @see https://dev.wildberries.ru/docs/openapi/items
   */
  readonly postContentV2GetCardsList: (
    input: PostContentV2GetCardsListInput,
    options?: WbRequestOptions,
  ) => Promise<PostContentV2GetCardsListResponse>;
  /**
   * Список несозданных карточек товаров с ошибками
   *
   * Метод возвращает список карточек товаров ([черновиков](https://seller.wildberries.ru/new-goods/error-cards)), при создании или редактировании которых произошли ошибки, с описанием этих ошибок.
   *
   * Данные в ответе возвращаются пакетами `batch`. Один пакет содержит:
   *  - все ошибки по одному массиву `variants` одного запроса при [создании](/openapi/work-with-products#tag/listingItems/paths/~1content~1v2~1cards~1upload/post) карточек товаров
   *  - все ошибки одного запроса при [создании с присоединением](/openapi/work-with-products#tag/listingItems/paths/~1content~1v2~1cards~1upload~1add/post) или [редактировании](/openapi/work-with-products#tag/listings/paths/~1content~1v2~1cards~1update/post) карточек товаров
   *
   * Чтобы получить более 100 пакетов, используйте пагинацию:
   *  1. Сделайте первый запрос:
   *
   *
   *  {
   *  "cursor": {
   *  "limit": 100
   *  },
   *  "order": {
   *  "ascending": true
   *  }
   *  }
   *  2. Скопируйте `"updatedAt":"***","batchUUID":"***" `из `cursor` ответа и вставьте в `cursor` запроса.
   *  3. Повторите запрос.
   *  4. Повторяйте пункты 2 и 3, пока не получите в ответе `"next":false`. Это будет означать, что вы получили все пакеты.
   *
   *  Чтобы удалить карточку товара из списка, сделайте ещё один запрос на создание, создание с присоединением или редактирование карточки товара с исправленными ошибками
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца для методов:
   *
   *  получения лимитов карточек товаров (/openapi/work-with-products#tag/listingItems/paths/~1content~1v2~1cards~1limits/get)
   *  получения несозданных карточек товаров с ошибками (/openapi/work-with-products#tag/listings/paths/~1content~1v2~1cards~1error~1list/post)
   *
   * | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- |
   * | 1 мин | 10 запросов | 6 сек | 5 запросов |
   *
   * POST /content/v2/cards/error/list
   *
   * Разделы WB: Карточки товаров.
   *
   * @see https://dev.wildberries.ru/docs/openapi/items
   */
  readonly postContentV2CardsErrorList: (
    input: PostContentV2CardsErrorListInput,
    options?: WbRequestOptions,
  ) => Promise<PostContentV2CardsErrorListResponse>;
  /**
   * Редактирование карточек товаров
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
   * Разделы WB: Карточки товаров.
   *
   * @see https://dev.wildberries.ru/docs/openapi/items
   */
  readonly postContentV2CardsUpdate: (
    input?: PostContentV2CardsUpdateInput,
    options?: WbRequestOptions,
  ) => Promise<PostContentV2CardsUpdateResponse>;
  /**
   * Объединение и разъединение карточек товаров
   *
   * Метод [объединяет и разъединяет](/knowledge-base/articles/019d49a4-1320-71bb-9dac-8ba07e7177ce/rabota-s-tovarami#obuedinenie-i-razuedinenie-kartochek-tovarov) карточки товаров. Карточки товаров являются объединёнными, если у них одинаковый `imtID`.
   *
   * Для объединения карточек товаров сделайте запрос **с указанием** `imtID`. Можно объединять не более 30 карточек товаров.
   *
   * Для разъединения карточек товаров сделайте запрос **без указания** `imtID`. Для разъединенных карточек будут сгенерированы новые `imtID`.
   *
   * Если вы разъедините одновременно несколько карточек товаров, эти карточки объединятся в одну и получат новый `imtID`.
   *
   * Чтобы присвоить каждой карточке товара уникальный `imtID`, необходимо передавать по одной карточке товара за запрос.
   *
   * Максимальный размер запроса 10 Мб.
   *
   *  Объединить можно карточки товаров только в рамках одного предмета
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
   * POST /content/v2/cards/moveNm
   *
   * Разделы WB: Карточки товаров.
   *
   * @see https://dev.wildberries.ru/docs/openapi/items
   */
  readonly postContentV2CardsMoveNm: (
    input?: PostContentV2CardsMoveNmInput,
    options?: WbRequestOptions,
  ) => Promise<PostContentV2CardsMoveNmResponse>;
  /**
   * Перенос карточек товаров в корзину
   *
   * Метод переносит [карточки товаров в корзину](/openapi/work-with-products#tag/listings/paths/~1content~1v2~1get~1cards~1trash/post). При этом карточки товаров не удаляются, их можно [восстановить](/openapi/work-with-products#tag/listings/paths/~1content~1v2~1cards~1recover/post).
   *
   *  После переноса в корзину карточке товара присваивается новый imtID — ID для объединённых (/knowledge-base/articles/019d49a4-1320-71bb-9dac-8ba07e7177ce/rabota-s-tovarami#obuedinenie-i-razuedinenie-kartochek-tovarov) карточек товаров
   *
   * Карточки товаров удаляются автоматически, если лежат в корзине больше 30 дней, и на них нет остатков. Очистка корзины происходит каждую ночь по московскому времени.
   *
   * Карточки товаров можно удалить в любое время в [личном кабинете](https://seller.wildberries.ru/new-goods/basket-cards).
   *
   * Карточка будет продаваться, пока по ней есть остатки на складе, даже если её переместили в корзину. Чтобы полностью снять карточку с продажи, обнулите остатки.
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца:
   *
   * | Тип | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- | --- |
   * | Персональный | 1 мин | 100 запросов | 600 мс | 5 запросов |
   * | Сервисный | 1 мин | 100 запросов | 600 мс | 5 запросов |
   * | Базовый с секретом | 1 мин | 100 запросов | 600 мс | 5 запросов |
   * | Базовый | 1 ч | 2 запроса | 30 мин | 1 запрос |
   *
   * POST /content/v2/cards/delete/trash
   *
   * Разделы WB: Карточки товаров.
   *
   * @see https://dev.wildberries.ru/docs/openapi/items
   */
  readonly postContentV2CardsDeleteTrash: (
    input: PostContentV2CardsDeleteTrashInput,
    options?: WbRequestOptions,
  ) => Promise<PostContentV2CardsDeleteTrashResponse>;
  /**
   * Восстановление карточек товаров из корзины
   *
   * Метод восстанавливает [карточки товаров из корзины](/openapi/work-with-products#tag/listings/paths/~1content~1v2~1get~1cards~1trash/post).
   *
   *  Карточка товара сохраняет тот же imtID — ID для объединённых (/knowledge-base/articles/019d49a4-1320-71bb-9dac-8ba07e7177ce/rabota-s-tovarami#obuedinenie-i-razuedinenie-kartochek-tovarov) карточек товаров — что был присвоен ей при перемещении в корзину (/openapi/work-with-products#tag/listings/paths/~1content~1v2~1cards~1delete~1trash/post)
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца:
   *
   * | Тип | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- | --- |
   * | Персональный | 1 мин | 3 запроса | 20 сек | 5 запросов |
   * | Сервисный | 1 мин | 3 запроса | 20 сек | 5 запросов |
   * | Базовый с секретом | 1 мин | 3 запроса | 20 сек | 5 запросов |
   * | Базовый | 1 ч | 2 запроса | 30 мин | 1 запрос |
   *
   * POST /content/v2/cards/recover
   *
   * Разделы WB: Карточки товаров.
   *
   * @see https://dev.wildberries.ru/docs/openapi/items
   */
  readonly postContentV2CardsRecover: (
    input: PostContentV2CardsRecoverInput,
    options?: WbRequestOptions,
  ) => Promise<PostContentV2CardsRecoverResponse>;
  /**
   * Список карточек товаров в корзине
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
   * Разделы WB: Карточки товаров.
   *
   * @see https://dev.wildberries.ru/docs/openapi/items
   */
  readonly postContentV2GetCardsTrash: (
    input: PostContentV2GetCardsTrashInput,
    options?: WbRequestOptions,
  ) => Promise<PostContentV2GetCardsTrashResponse>;
  /**
   * Лимиты карточек товаров
   *
   * Возвращает бесплатные и платные лимиты продавца на [создание карточек товаров](/openapi/work-with-products#tag/listingItems/paths/~1content~1v2~1cards~1upload/post).
   *
   * Формула для получения количества карточек, которые можно создать:
   *
   * > (`freeLimits` + `paidLimits`) - количество созданных карточек
   *
   * Созданными считаются карточки, которые можно получить через методы [список карточек товаров](/openapi/work-with-products#tag/listings/paths/~1content~1v2~1get~1cards~1list/post) и [список карточек товаров в корзине](/openapi/work-with-products#tag/listings/paths/~1content~1v2~1get~1cards~1trash/post).
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца для методов:
   *
   *  получения лимитов карточек товаров (/openapi/work-with-products#tag/listingItems/paths/~1content~1v2~1cards~1limits/get)
   *  получения несозданных карточек товаров с ошибками (/openapi/work-with-products#tag/listings/paths/~1content~1v2~1cards~1error~1list/post)
   *
   * | Тип | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- | --- |
   * | Персональный | 1 мин | 100 запросов | 600 мс | 5 запросов |
   * | Сервисный | 1 мин | 100 запросов | 600 мс | 5 запросов |
   * | Базовый с секретом | 1 мин | 100 запросов | 600 мс | 5 запросов |
   * | Базовый | 1 ч | 2 запроса | 30 мин | 1 запрос |
   *
   * GET /content/v2/cards/limits
   *
   * Разделы WB: Создание карточек товаров.
   *
   * @see https://dev.wildberries.ru/docs/openapi/items
   */
  readonly getContentV2CardsLimits: (
    options?: WbRequestOptions,
  ) => Promise<GetContentV2CardsLimitsResponse>;
  /**
   * Генерация баркодов
   *
   * Метод генерирует массив уникальных баркодов для создания размера в [карточке товара](/openapi/work-with-products#tag/listingItems/paths/~1content~1v2~1cards~1upload/post). Можно использовать, если у вас нет собственных баркодов.
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
   * POST /content/v2/barcodes
   *
   * Разделы WB: Создание карточек товаров.
   *
   * @see https://dev.wildberries.ru/docs/openapi/items
   */
  readonly postContentV2Barcodes: (
    input: PostContentV2BarcodesInput,
    options?: WbRequestOptions,
  ) => Promise<PostContentV2BarcodesResponse>;
  /**
   * Создание карточек товаров
   *
   * Метод создаёт карточки товаров c указанием описаний и характеристик товаров.
   *
   *  Есть две формы запроса: для создания отдельных и объединённых карточек товаров
   *
   * Габариты товаров можно указать только в `сантиметрах`, вес товара с упаковкой — в `килограммах`.
   *
   * Создание карточки товара происходит асинхронно. Синхронизация новой карточки с сервисами может занимать до 30 минут. В течение этого времени невозможно добавить остатки на склады и настроить цены.
   *
   * Одним запросом можно создать максимум 100 отдельных карточек товаров или 100 групп [объединённых](/knowledge-base/articles/019d49a4-1320-71bb-9dac-8ba07e7177ce/rabota-s-tovarami#obuedinenie-i-razuedinenie-kartochek-tovarov) карточек товаров по 30 карточек в каждой. Максимальный размер запроса 10 Мб.
   *
   * Если ответ `Успешно` (`200`), но какие-то карточки не создались, проверьте [список несозданных карточек товаров](/openapi/work-with-products#tag/listings/paths/~1content~1v2~1cards~1error~1list/post).
   *
   * В песочнице карточка товара создаётся сразу, без ожидания.
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца:
   *
   * | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- |
   * | 1 мин | 10 запросов | 6 сек | 5 запросов |
   *
   * POST /content/v2/cards/upload
   *
   * Разделы WB: Создание карточек товаров.
   *
   * @see https://dev.wildberries.ru/docs/openapi/items
   */
  readonly postContentV2CardsUpload: (
    input?: PostContentV2CardsUploadInput,
    options?: WbRequestOptions,
  ) => Promise<PostContentV2CardsUploadResponse>;
  /**
   * Создание карточек товаров с присоединением
   *
   * Метод создаёт карточки товаров, присоединяя их к существующим отдельным карточкам и группам [объединённых](/knowledge-base/articles/019d49a4-1320-71bb-9dac-8ba07e7177ce/rabota-s-tovarami#obuedinenie-i-razuedinenie-kartochek-tovarov) карточек. В одной группе объединённых карточек товаров может быть не более 30 карточек, соответственно, создать с присоединением можно не более 29 карточек товаров за один запрос.
   *
   * Габариты товаров можно указать только в `сантиметрах`, вес товара с упаковкой — в `килограммах`.
   *
   * Если ответ `Успешно` (`200`), но какие-то карточки не создались, проверьте [список несозданных карточек товаров](/openapi/work-with-products#tag/listings/paths/~1content~1v2~1cards~1error~1list/post).
   *
   * Создание карточки товара происходит асинхронно. Синхронизация новой карточки с сервисами может занимать до 30 минут. В течение этого времени невозможно добавить остатки на склады и настроить цены.
   *
   * В песочнице карточка товара создаётся сразу, без ожидания.
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца:
   *
   * | Тип | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- | --- |
   * | Персональный | 1 мин | 10 запросов | 6 сек | 5 запросов |
   * | Сервисный | 1 мин | 10 запросов | 6 сек | 5 запросов |
   * | Базовый с секретом | 1 мин | 10 запросов | 6 сек | 5 запросов |
   * | Базовый | 2 ч | 1 запрос | 2 ч | 1 запрос |
   *
   * POST /content/v2/cards/upload/add
   *
   * Разделы WB: Создание карточек товаров.
   *
   * @see https://dev.wildberries.ru/docs/openapi/items
   */
  readonly postContentV2CardsUploadAdd: (
    input?: PostContentV2CardsUploadAddInput,
    options?: WbRequestOptions,
  ) => Promise<PostContentV2CardsUploadAddResponse>;
  /**
   * Загрузить медиафайл
   *
   * Метод загружает и добавляет один медиафайл к карточке товара.
   *
   * Требования к изображениям:
   *  * максимум изображений для одной карточки товара — 30
   *  * минимальное разрешение — 700x900 px
   *  * максимальный размер — 32 Мб
   *  * минимальное качество — 65%
   *  * форматы — JPG, PNG, BMP, GIF (статичные), WebP
   *
   * Требования к видео:
   *  * максимум одно видео для одной карточки товара
   *  * максимальный размер — 50 Мб
   *  * форматы — MOV, MP4
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца для всех методов Медиафайлов:
   *
   * | Тип | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- | --- |
   * | Персональный | 1 мин | 100 запросов | 600 мс | 5 запросов |
   * | Сервисный | 1 мин | 100 запросов | 600 мс | 5 запросов |
   * | Базовый с секретом | 1 мин | 100 запросов | 600 мс | 5 запросов |
   * | Базовый | 1 ч | 2 запроса | 30 мин | 1 запрос |
   *
   * POST /content/v3/media/file
   *
   * Разделы WB: Медиафайлы.
   *
   * @see https://dev.wildberries.ru/docs/openapi/items
   */
  readonly postContentV3MediaFile: (
    input: PostContentV3MediaFileInput,
    options?: WbRequestOptions,
  ) => Promise<PostContentV3MediaFileResponse>;
  /**
   * Загрузить медиафайлы по ссылкам
   *
   * Метод загружает набор медиафайлов в карточку товара через указание ссылок в запросе.
   *
   *  Новые медиафайлы полностью заменяют старые. Чтобы добавить новые медиафайлы, укажите в запросе ссылки одновременно на новые и старые медиафайлы.
   *
   * Требования к ссылкам:
   *  * ссылка должна вести прямо на файл. Убедитесь, что ссылка не ведёт на страницу предпросмотра или авторизации, например. Если по ссылке открывается текстовая страница TXT или HTML, ссылка считается некорректной
   *  * для доступа к файлу по ссылке не нужна авторизация
   *
   * Требования к изображениям:
   *  * максимум изображений для одной карточки товара — 30
   *  * минимальное разрешение — 700×900 px
   *  * максимальный размер — 32 Мб
   *  * минимальное качество — 65%
   *  * форматы — JPG, PNG, BMP, GIF (статичные), WebP
   *
   * Требования к видео:
   *  * максимум одно видео для одной карточки товара
   *  * максимальный размер — 50 Мб
   *  * форматы — MOV, MP4
   *
   * Если видео или хотя бы одно изображение в запросе не соответствует требованиям, то даже при успешном ответе (`200`) ни одно изображение/видео не загрузится.
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца для всех методов Медиафайлов:
   *
   * | Тип | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- | --- |
   * | Персональный | 1 мин | 100 запросов | 600 мс | 5 запросов |
   * | Сервисный | 1 мин | 100 запросов | 600 мс | 5 запросов |
   * | Базовый с секретом | 1 мин | 100 запросов | 600 мс | 5 запросов |
   * | Базовый | 1 ч | 2 запроса | 30 мин | 1 запрос |
   *
   * POST /content/v3/media/save
   *
   * Разделы WB: Медиафайлы.
   *
   * @see https://dev.wildberries.ru/docs/openapi/items
   */
  readonly postContentV3MediaSave: (
    input: PostContentV3MediaSaveInput,
    options?: WbRequestOptions,
  ) => Promise<PostContentV3MediaSaveResponse>;
  /**
   * Список рекомендаций в карточках товаров
   *
   * Метод доступен (/openapi/api-information#tag/authorization/Pravila-ispolzovaniya-tokenov-dostupa-k-API) по
   *  Персональному токену,
   *  Сервисному токену
   *
   * Метод возвращает список [рекомендаций](https://seller.wildberries.ru/recommendations-v3) в карточках товаров.
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца:
   *
   * | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- |
   * | 1 мин | 100 запросов | 600 мс | 5 запросов |
   *
   * POST /api/content/v1/recommendations/list
   *
   * Разделы WB: Рекомендации.
   *
   * @see https://dev.wildberries.ru/docs/openapi/items
   */
  readonly postV1RecommendationsList: (
    input?: PostV1RecommendationsListInput,
    options?: WbRequestOptions,
  ) => Promise<PostV1RecommendationsListResponse>;
  /**
   * Установить рекомендации для товаров
   *
   * Метод доступен (/openapi/api-information#tag/authorization/Pravila-ispolzovaniya-tokenov-dostupa-k-API) по
   *  Персональному токену,
   *  Сервисному токену
   *
   * Метод обновляет, добавляет или удаляет [рекомендации](https://seller.wildberries.ru/recommendations-v3) для товаров.
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца:
   *
   * | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- |
   * | 1 мин | 100 запросов | 600 мс | 5 запросов |
   *
   * POST /api/content/v1/recommendations/set
   *
   * Разделы WB: Рекомендации.
   *
   * @see https://dev.wildberries.ru/docs/openapi/items
   */
  readonly postV1RecommendationsSet: (
    input: PostV1RecommendationsSetInput,
    options?: WbRequestOptions,
  ) => Promise<PostV1RecommendationsSetResponse>;
  /**
   * Установить цены и скидки
   *
   * Метод устанавливает цены и скидки для товаров.
   *
   * Чтобы установить цены для размеров товара, используйте [отдельный метод](/openapi/work-with-products#tag/Ceny-i-skidki/paths/~1api~1v2~1upload~1task~1size/post).
   *
   *  Получить информацию о процессе установки цен и скидок можно с помощью методов состояния (/openapi/work-with-products#tag/Ceny-i-skidki/paths/~1api~1v2~1history~1tasks/get) и детализации (/openapi/work-with-products#tag/Ceny-i-skidki/paths/~1api~1v2~1history~1goods~1task/get) обработанной загрузки.
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца для всех методов категории Цены и скидки:
   *
   * | Тип | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- | --- |
   * | Персональный | 6 сек | 10 запросов | 600 мс | 5 запросов |
   * | Сервисный | 6 сек | 10 запросов | 600 мс | 5 запросов |
   * | Базовый с секретом | 6 сек | 10 запросов | 600 мс | 5 запросов |
   * | Базовый | 1 ч | 4 запроса | 15 мин | 1 запрос |
   *
   * POST /api/v2/upload/task
   *
   * Разделы WB: Цены и скидки.
   *
   * @see https://dev.wildberries.ru/docs/openapi/items
   */
  readonly postApiV2UploadTask: (
    input: PostApiV2UploadTaskInput,
    options?: WbRequestOptions,
  ) => Promise<PostApiV2UploadTaskResponse>;
  /**
   * Установить цены для размеров
   *
   * Метод устанавливает цены отдельно для размеров товаров.
   *
   * Работает только для товаров из категорий, где можно устанавливать цены отдельно для разных размеров. Для [таких товаров](/openapi/work-with-products#tag/Ceny-i-skidki/paths/~1api~1v2~1list~1goods~1size~1nm/get) `"editableSizePrice":true`.
   *
   * Чтобы установить цены и скидки для самих товаров, используйте [отдельный метод](/openapi/work-with-products#tag/Ceny-i-skidki/paths/~1api~1v2~1upload~1task/post).
   *
   *  Получить информацию о процессе установки цен и скидок можно с помощью методов состояния (/openapi/work-with-products#tag/Ceny-i-skidki/paths/~1api~1v2~1history~1tasks/get) и детализации (/openapi/work-with-products#tag/Ceny-i-skidki/paths/~1api~1v2~1history~1goods~1task/get) обработанной загрузки.
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца для всех методов категории Цены и скидки:
   *
   * | Тип | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- | --- |
   * | Персональный | 6 сек | 10 запросов | 600 мс | 5 запросов |
   * | Сервисный | 6 сек | 10 запросов | 600 мс | 5 запросов |
   * | Базовый с секретом | 6 сек | 10 запросов | 600 мс | 5 запросов |
   * | Базовый | 1 ч | 4 запроса | 15 мин | 1 запрос |
   *
   * POST /api/v2/upload/task/size
   *
   * Разделы WB: Цены и скидки.
   *
   * @see https://dev.wildberries.ru/docs/openapi/items
   */
  readonly postApiV2UploadTaskSize: (
    input: PostApiV2UploadTaskSizeInput,
    options?: WbRequestOptions,
  ) => Promise<PostApiV2UploadTaskSizeResponse>;
  /**
   * Установить скидки WB Клуба
   *
   * Устанавливает скидки для товаров в рамках подписки [WB Клуб](https://seller.wildberries.ru/help-center/article/A-337).
   *
   *  Получить информацию о процессе установки цен и скидок можно с помощью методов состояния (/openapi/work-with-products#tag/Ceny-i-skidki/paths/~1api~1v2~1history~1tasks/get) и детализации (/openapi/work-with-products#tag/Ceny-i-skidki/paths/~1api~1v2~1history~1goods~1task/get) обработанной загрузки.
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца для всех методов категории Цены и скидки:
   *
   * | Тип | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- | --- |
   * | Персональный | 6 сек | 10 запросов | 600 мс | 5 запросов |
   * | Сервисный | 6 сек | 10 запросов | 600 мс | 5 запросов |
   * | Базовый с секретом | 6 сек | 10 запросов | 600 мс | 5 запросов |
   * | Базовый | 1 ч | 4 запроса | 15 мин | 1 запрос |
   *
   * POST /api/v2/upload/task/club-discount
   *
   * Разделы WB: Цены и скидки.
   *
   * @see https://dev.wildberries.ru/docs/openapi/items
   */
  readonly postApiV2UploadTaskClubDiscount: (
    input: PostApiV2UploadTaskClubDiscountInput,
    options?: WbRequestOptions,
  ) => Promise<PostApiV2UploadTaskClubDiscountResponse>;
  /**
   * Установить оптовые скидки для B2B-продаж
   *
   * Метод доступен (/openapi/api-information#tag/authorization/Pravila-ispolzovaniya-tokenov-dostupa-k-API) по
   *  Персональному токену,
   *  Сервисному токену
   *
   * Метод устанавливает [оптовые скидки для бизнеса](https://seller.wildberries.ru/instructions/ru/ru/material/how-to-enable-wholesale-discounts-for-business)
   *
   *  Получить информацию о процессе установки цен и скидок можно с помощью методов состояния (/openapi/work-with-products#tag/Ceny-i-skidki/paths/~1api~1v2~1history~1tasks/get) и детализации (/openapi/work-with-products#tag/Ceny-i-skidki/paths/~1api~1v2~1history~1goods~1task/get) обработанной загрузки.
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца для всех методов категории Цены и скидки:
   *
   * | Тип | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- | --- |
   * | Персональный | 6 сек | 10 запросов | 600 мс | 5 запросов |
   * | Сервисный | 6 сек | 10 запросов | 600 мс | 5 запросов |
   *
   * POST /api/discounts-prices/v1/upload/task/b2b/wholesale
   *
   * Разделы WB: Цены и скидки.
   *
   * @see https://dev.wildberries.ru/docs/openapi/items
   */
  readonly postV1UploadTaskB2bWholesale: (
    input: PostV1UploadTaskB2bWholesaleInput,
    options?: WbRequestOptions,
  ) => Promise<PostV1UploadTaskB2bWholesaleResponse>;
  /**
   * Состояние обработанной загрузки
   *
   * Метод возвращает информацию об обработанной загрузке цен и скидок.
   *
   *  Обработанная загрузка — это загрузка цен и скидок для товаров (/openapi/work-with-products#tag/Ceny-i-skidki/paths/~1api~1v2~1upload~1task/post), цен для размеров товаров (/openapi/work-with-products#tag/Ceny-i-skidki/paths/~1api~1v2~1upload~1task~1size/post), скидок WB Клуба (/openapi/work-with-products#tag/Ceny-i-skidki/paths/~1api~1v2~1upload~1task~1club-discount/post) и оптовых скидок для B2B-продаж (/openapi/work-with-products#tag/Ceny-i-skidki/operation/postV1UploadTaskB2bWholesale).
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца для всех методов категории Цены и скидки:
   *
   * | Тип | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- | --- |
   * | Персональный | 6 сек | 10 запросов | 600 мс | 5 запросов |
   * | Сервисный | 6 сек | 10 запросов | 600 мс | 5 запросов |
   * | Базовый с секретом | 6 сек | 10 запросов | 600 мс | 5 запросов |
   * | Базовый | 1 ч | 4 запроса | 15 мин | 1 запрос |
   *
   * GET /api/v2/history/tasks
   *
   * Разделы WB: Цены и скидки.
   *
   * @see https://dev.wildberries.ru/docs/openapi/items
   */
  readonly getApiV2HistoryTasks: (
    input: GetApiV2HistoryTasksInput,
    options?: WbRequestOptions,
  ) => Promise<GetApiV2HistoryTasksResponse>;
  /**
   * Детализация обработанной загрузки
   *
   * Метод возвращает информацию о товарах и об ошибках в товарах в обработанной загрузке.
   *
   *  Обработанная загрузка — это загрузка цен и скидок для товаров (/openapi/work-with-products#tag/Ceny-i-skidki/paths/~1api~1v2~1upload~1task/post), цен для размеров товаров (/openapi/work-with-products#tag/Ceny-i-skidki/paths/~1api~1v2~1upload~1task~1size/post) скидок WB Клуба (/openapi/work-with-products#tag/Ceny-i-skidki/paths/~1api~1v2~1upload~1task~1club-discount/post) и оптовых скидок для B2B-продаж (/openapi/work-with-products#tag/Ceny-i-skidki/operation/postV1UploadTaskB2bWholesale).
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца для всех методов категории Цены и скидки:
   *
   * | Тип | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- | --- |
   * | Персональный | 6 сек | 10 запросов | 600 мс | 5 запросов |
   * | Сервисный | 6 сек | 10 запросов | 600 мс | 5 запросов |
   * | Базовый с секретом | 6 сек | 10 запросов | 600 мс | 5 запросов |
   * | Базовый | 1 ч | 4 запроса | 15 мин | 1 запрос |
   *
   * GET /api/v2/history/goods/task
   *
   * Разделы WB: Цены и скидки.
   *
   * @see https://dev.wildberries.ru/docs/openapi/items
   */
  readonly getApiV2HistoryGoodsTask: (
    input: GetApiV2HistoryGoodsTaskInput,
    options?: WbRequestOptions,
  ) => Promise<GetApiV2HistoryGoodsTaskResponse>;
  /**
   * Состояние необработанной загрузки
   *
   * Метод возвращает информацию про загрузку скидок в обработке.
   *
   *  Необработанная загрузка — это загрузка скидок в календаре акций (/openapi/promotion#tag/promoCalendar). Такие скидки применятся к товарам только в момент старта акции.
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца для всех методов категории Цены и скидки:
   *
   * | Тип | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- | --- |
   * | Персональный | 6 сек | 10 запросов | 600 мс | 5 запросов |
   * | Сервисный | 6 сек | 10 запросов | 600 мс | 5 запросов |
   * | Базовый с секретом | 6 сек | 10 запросов | 600 мс | 5 запросов |
   * | Базовый | 1 ч | 4 запроса | 15 мин | 1 запрос |
   *
   * GET /api/v2/buffer/tasks
   *
   * Разделы WB: Цены и скидки.
   *
   * @see https://dev.wildberries.ru/docs/openapi/items
   */
  readonly getApiV2BufferTasks: (
    input: GetApiV2BufferTasksInput,
    options?: WbRequestOptions,
  ) => Promise<GetApiV2BufferTasksResponse>;
  /**
   * Детализация необработанной загрузки
   *
   * Метод возвращает информацию о товарах и ошибках в товарах из загрузки в обработке.
   *
   *  Необработанная загрузка — это загрузка скидок в календаре акций (/openapi/promotion#tag/promoCalendar). Такие скидки применятся к товарам только в момент старта акции.
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца для всех методов категории Цены и скидки:
   *
   * | Тип | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- | --- |
   * | Персональный | 6 сек | 10 запросов | 600 мс | 5 запросов |
   * | Сервисный | 6 сек | 10 запросов | 600 мс | 5 запросов |
   * | Базовый с секретом | 6 сек | 10 запросов | 600 мс | 5 запросов |
   * | Базовый | 1 ч | 4 запроса | 15 мин | 1 запрос |
   *
   * GET /api/v2/buffer/goods/task
   *
   * Разделы WB: Цены и скидки.
   *
   * @see https://dev.wildberries.ru/docs/openapi/items
   */
  readonly getApiV2BufferGoodsTask: (
    input: GetApiV2BufferGoodsTaskInput,
    options?: WbRequestOptions,
  ) => Promise<GetApiV2BufferGoodsTaskResponse>;
  /**
   * Получить товары с ценами
   *
   * Метод возвращает информацию о товарах: цены, валюту, общие скидки, [скидки WB Клуба](/openapi/work-with-products#tag/Ceny-i-skidki/paths/~1api~1v2~1upload~1task~1club-discount/post) и [оптовые скидки для B2B-продаж](/openapi/work-with-products#tag/Ceny-i-skidki/operation/postV1UploadTaskB2bWholesale).
   *
   * В одном запросе можно указать только один артикул.
   *
   * Чтобы получить информацию обо всех товарах продавца, не указывая артикулы, установите `limit=1000`, в параметре `offset` установите смещение по количеству записей. Количество нужно рассчитать по формуле: `offset` плюс `limit` из предыдущего запроса. Повторяйте запрос, пока вы не получите ответ с пустым массивом.
   *
   * Используйте отдельные методы, чтобы получить информацию:
   *  - о [нескольких товарах по артикулам](/openapi/work-with-products#tag/Ceny-i-skidki/paths/~1api~1v2~1list~1goods~1filter/post)
   *  - о [размерах товара](/openapi/work-with-products#tag/Ceny-i-skidki/paths/~1api~1v2~1list~1goods~1size~1nm/get)
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца для всех методов категории Цены и скидки:
   *
   * | Тип | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- | --- |
   * | Персональный | 6 сек | 10 запросов | 600 мс | 5 запросов |
   * | Сервисный | 6 сек | 10 запросов | 600 мс | 5 запросов |
   * | Базовый с секретом | 6 сек | 10 запросов | 600 мс | 5 запросов |
   * | Базовый | 1 ч | 4 запроса | 15 мин | 1 запрос |
   *
   * GET /api/v2/list/goods/filter
   *
   * Разделы WB: Цены и скидки.
   *
   * @see https://dev.wildberries.ru/docs/openapi/items
   */
  readonly getApiV2ListGoodsFilter: (
    input: GetApiV2ListGoodsFilterInput,
    options?: WbRequestOptions,
  ) => Promise<GetApiV2ListGoodsFilterResponse>;
  /**
   * Получить товары с ценами по артикулам
   *
   * Метод возвращает информацию о товарах по их артикулам: цены, валюту, общие скидки, [скидки WB Клуба](/openapi/work-with-products#tag/Ceny-i-skidki/paths/~1api~1v2~1upload~1task~1club-discount/post) и [оптовые скидки для B2B-продаж](/openapi/work-with-products#tag/Ceny-i-skidki/operation/postV1UploadTaskB2bWholesale).
   *
   * В одном запросе можно указать более одного артикула.
   *
   * Используйте отдельные методы, чтобы получить информацию:
   *  - обо [всех товарах продавца, не указывая артикулы](/openapi/work-with-products#tag/Ceny-i-skidki/paths/~1api~1v2~1list~1goods~1filter/get)
   *  - о [размерах товара](/openapi/work-with-products#tag/Ceny-i-skidki/paths/~1api~1v2~1list~1goods~1size~1nm/get)
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца для всех методов категории Цены и скидки:
   *
   * | Тип | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- | --- |
   * | Персональный | 6 сек | 10 запросов | 600 мс | 5 запросов |
   * | Сервисный | 6 сек | 10 запросов | 600 мс | 5 запросов |
   * | Базовый с секретом | 6 сек | 10 запросов | 600 мс | 5 запросов |
   * | Базовый | 1 ч | 4 запроса | 15 мин | 1 запрос |
   *
   * POST /api/v2/list/goods/filter
   *
   * Разделы WB: Цены и скидки.
   *
   * @see https://dev.wildberries.ru/docs/openapi/items
   */
  readonly postApiV2ListGoodsFilter: (
    input: PostApiV2ListGoodsFilterInput,
    options?: WbRequestOptions,
  ) => Promise<PostApiV2ListGoodsFilterResponse>;
  /**
   * Получить размеры товара с ценами
   *
   * Метод возвращает информацию обо всех размерах одного товара: цены, валюту, общие скидки и скидки для [WB Клуба](/openapi/work-with-products#tag/Ceny-i-skidki/paths/~1api~1v2~1upload~1task~1club-discount/post).
   *
   * Работает только для товаров из категорий, где можно устанавливать цены отдельно для разных размеров. Для таких товаров `"editableSizePrice":true`.
   *
   * Чтобы получить информацию о самом товаре, используйте [отдельный метод](/openapi/work-with-products#tag/Ceny-i-skidki/paths/~1api~1v2~1list~1goods~1filter/get).
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца для всех методов категории Цены и скидки:
   *
   * | Тип | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- | --- |
   * | Персональный | 6 сек | 10 запросов | 600 мс | 5 запросов |
   * | Сервисный | 6 сек | 10 запросов | 600 мс | 5 запросов |
   * | Базовый с секретом | 6 сек | 10 запросов | 600 мс | 5 запросов |
   * | Базовый | 1 ч | 4 запроса | 15 мин | 1 запрос |
   *
   * GET /api/v2/list/goods/size/nm
   *
   * Разделы WB: Цены и скидки.
   *
   * @see https://dev.wildberries.ru/docs/openapi/items
   */
  readonly getApiV2ListGoodsSizeNm: (
    input: GetApiV2ListGoodsSizeNmInput,
    options?: WbRequestOptions,
  ) => Promise<GetApiV2ListGoodsSizeNmResponse>;
  /**
   * Получить товары в карантине
   *
   * Метод возвращает информацию о товарах в карантине.
   *
   * Если новая цена товара со скидкой будет минимум в 3 раза меньше старой, товар попадёт в [карантин](https://seller.wildberries.ru/instructions/ru/ru/material/price-quarantine) и будет продаваться по старой цене. Ошибка об этом будет в ответах методов [состояний загрузок](/openapi/work-with-products#tag/Ceny-i-skidki/paths/~1api~1v2~1history~1tasks/get).
   *
   * Вы можете изменить цену или скидку с помощью API либо вывести товар из карантина в [личном кабинете](https://seller.wildberries.ru/discount-and-prices/quarantine).
   *
   * Для товаров с [поразмерной установкой цен](/openapi/work-with-products#tag/Ceny-i-skidki/paths/~1api~1v2~1upload~1task~1size/post) карантин не применяется.
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца для всех методов категории Цены и скидки:
   *
   * | Тип | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- | --- |
   * | Персональный | 6 сек | 10 запросов | 600 мс | 5 запросов |
   * | Сервисный | 6 сек | 10 запросов | 600 мс | 5 запросов |
   * | Базовый с секретом | 6 сек | 10 запросов | 600 мс | 5 запросов |
   * | Базовый | 1 ч | 4 запроса | 15 мин | 1 запрос |
   *
   * GET /api/v2/quarantine/goods
   *
   * Разделы WB: Цены и скидки.
   *
   * @see https://dev.wildberries.ru/docs/openapi/items
   */
  readonly getApiV2QuarantineGoods: (
    input: GetApiV2QuarantineGoodsInput,
    options?: WbRequestOptions,
  ) => Promise<GetApiV2QuarantineGoodsResponse>;
  /**
   * Обновить остатки товаров
   *
   * Метод обновляет количество остатков товаров продавца [в списке](/openapi/work-with-products#tag/Ostatki-na-skladah-prodavca/paths/~1api~1v3~1stocks~1%7BwarehouseId%7D/post).
   *
   *  Названия параметров запроса не валидируются. При отправке некорректных названий вы получите успешный ответ (204), но остатки не обновятся.
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца для всех методов остатков на складах продавца кроме метода удаления остатков (/openapi/work-with-products#tag/Ostatki-na-skladah-prodavca/paths/~1api~1v3~1stocks~1%7BwarehouseId%7D/delete):
   *
   * | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- |
   * | 1 мин | 300 запросов | 200 мс | 20 запросов |
   *
   * Один запрос с кодами ответов 4XX учитывается как 10 запросов
   *
   * PUT /api/v3/stocks/{warehouseId}
   *
   * Разделы WB: Остатки на складах продавца.
   *
   * @see https://dev.wildberries.ru/docs/openapi/items
   */
  readonly putApiV3StocksWarehouseId: (
    input: PutApiV3StocksWarehouseIdInput,
    options?: WbRequestOptions,
  ) => Promise<PutApiV3StocksWarehouseIdResponse>;
  /**
   * Удалить остатки товаров
   *
   * Метод удаляет запись об остатках товаров продавца из [списка остатков](/openapi/work-with-products#tag/Ostatki-na-skladah-prodavca/paths/~1api~1v3~1stocks~1%7BwarehouseId%7D/post).
   *
   *  Действие необратимо. Удаленный остаток будет необходимо загрузить повторно для возобновления продаж.
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца:
   *
   * | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- |
   * | 1 мин | 10 запросов | 6 сек | 2 запроса |
   *
   * DELETE /api/v3/stocks/{warehouseId}
   *
   * Разделы WB: Остатки на складах продавца.
   *
   * @see https://dev.wildberries.ru/docs/openapi/items
   */
  readonly deleteApiV3StocksWarehouseId: (
    input: DeleteApiV3StocksWarehouseIdInput,
    options?: WbRequestOptions,
  ) => Promise<DeleteApiV3StocksWarehouseIdResponse>;
  /**
   * Получить остатки товаров
   *
   * Метод возвращает данные об остатках товаров на [складах продавца](/openapi/work-with-products#tag/Sklady-prodavca).
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца для всех методов остатков на складах продавца кроме метода удаления остатков (/openapi/work-with-products#tag/Ostatki-na-skladah-prodavca/paths/~1api~1v3~1stocks~1%7BwarehouseId%7D/delete):
   *
   * | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- |
   * | 1 мин | 300 запросов | 200 мс | 20 запросов |
   *
   * Один запрос с кодами ответов 4XX учитывается как 10 запросов
   *
   * POST /api/v3/stocks/{warehouseId}
   *
   * Разделы WB: Остатки на складах продавца.
   *
   * @see https://dev.wildberries.ru/docs/openapi/items
   */
  readonly postApiV3StocksWarehouseId: (
    input: PostApiV3StocksWarehouseIdInput,
    options?: WbRequestOptions,
  ) => Promise<PostApiV3StocksWarehouseIdResponse>;
  /**
   * Получить список складов WB
   *
   * Метод возвращает список складов WB для привязки к складу продавца при его [создании](/openapi/work-with-products#tag/Sklady-prodavca/paths/~1api~1v3~1warehouses/post) или [редактировании](/openapi/work-with-products#tag/Sklady-prodavca/paths/~1api~1v3~1warehouses~1%7BwarehouseId%7D/put).
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца для всех методов складов продавца:
   *
   * | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- |
   * | 1 мин | 300 запросов | 200 мс | 20 запросов |
   *
   * Один запрос с кодами ответов 4XX учитывается как 10 запросов
   *
   * GET /api/v3/offices
   *
   * Разделы WB: Склады продавца.
   *
   * @see https://dev.wildberries.ru/docs/openapi/items
   */
  readonly getApiV3Offices: (
    options?: WbRequestOptions,
  ) => Promise<GetApiV3OfficesResponse>;
  /**
   * Получить список складов продавца
   *
   * Метод возвращает список всех складов продавца. Может использоваться для работы с [остатками товаров](/openapi/work-with-products#tag/Ostatki-na-skladah-prodavca).
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца для всех методов складов продавца:
   *
   * | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- |
   * | 1 мин | 300 запросов | 200 мс | 20 запросов |
   *
   * Один запрос с кодами ответов 4XX учитывается как 10 запросов
   *
   * GET /api/v3/warehouses
   *
   * Разделы WB: Склады продавца.
   *
   * @see https://dev.wildberries.ru/docs/openapi/items
   */
  readonly getApiV3Warehouses: (
    options?: WbRequestOptions,
  ) => Promise<GetApiV3WarehousesResponse>;
  /**
   * Создать склад продавца
   *
   * Метод создаёт склад продавца для работы с [остатками товаров](/openapi/work-with-products#tag/Ostatki-na-skladah-prodavca), кроме сверхгабаритных (СГТ), по модели [FBS](/openapi/orders-fbs) (Fulfillment by Seller).
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца для всех методов складов продавца:
   *
   * | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- |
   * | 1 мин | 300 запросов | 200 мс | 20 запросов |
   *
   * Один запрос с кодами ответов 4XX учитывается как 10 запросов
   *
   * POST /api/v3/warehouses
   *
   * Разделы WB: Склады продавца.
   *
   * @see https://dev.wildberries.ru/docs/openapi/items
   */
  readonly postApiV3Warehouses: (
    input: PostApiV3WarehousesInput,
    options?: WbRequestOptions,
  ) => Promise<PostApiV3WarehousesResponse>;
  /**
   * Обновить склад продавца
   *
   * Метод обновляет данные [склада продавца](/openapi/work-with-products#tag/Sklady-prodavca/paths/~1api~1v3~1warehouses/get), кроме складов для сверхгабаритных товаров (СГТ, `"cargoType":2`).
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца для всех методов складов продавца:
   *
   * | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- |
   * | 1 мин | 300 запросов | 200 мс | 20 запросов |
   *
   * Один запрос с кодами ответов 4XX учитывается как 10 запросов
   *
   * PUT /api/v3/warehouses/{warehouseId}
   *
   * Разделы WB: Склады продавца.
   *
   * @see https://dev.wildberries.ru/docs/openapi/items
   */
  readonly putApiV3WarehousesWarehouseId: (
    input: PutApiV3WarehousesWarehouseIdInput,
    options?: WbRequestOptions,
  ) => Promise<PutApiV3WarehousesWarehouseIdResponse>;
  /**
   * Удалить склад продавца
   *
   * Метод удаляет [склад продавца](/openapi/work-with-products#tag/Sklady-prodavca/paths/~1api~1v3~1warehouses/get).
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца для всех методов складов продавца:
   *
   * | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- |
   * | 1 мин | 300 запросов | 200 мс | 20 запросов |
   *
   * Один запрос с кодами ответов 4XX учитывается как 10 запросов
   *
   * DELETE /api/v3/warehouses/{warehouseId}
   *
   * Разделы WB: Склады продавца.
   *
   * @see https://dev.wildberries.ru/docs/openapi/items
   */
  readonly deleteApiV3WarehousesWarehouseId: (
    input: DeleteApiV3WarehousesWarehouseIdInput,
    options?: WbRequestOptions,
  ) => Promise<DeleteApiV3WarehousesWarehouseIdResponse>;
  /**
   * Список контактов
   *
   * Метод возвращает список контактов, привязанных к [складу продавца](/openapi/work-with-products#tag/Sklady-prodavca/paths/~1api~1v3~1warehouses/get).
   *
   * Только для складов с типом доставки `3` — доставка курьером WB ([DBW](/openapi/orders-dbw)).
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца для следующих методов DBW:
   *
   *  получение и обновление списка контактов
   *  получение и удаление идентификаторов маркировки
   *  методы сборочных заданий
   *
   *
   * | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- |
   * | 1 мин | 300 запросов | 200 мс | 20 запросов |
   *
   * Один запрос с кодами ответов 4XX учитывается как 10 запросов
   *
   * GET /api/v3/dbw/warehouses/{warehouseId}/contacts
   *
   * Разделы WB: Склады продавца.
   *
   * @see https://dev.wildberries.ru/docs/openapi/items
   */
  readonly getApiV3DbwWarehousesWarehouseIdContacts: (
    input: GetApiV3DbwWarehousesWarehouseIdContactsInput,
    options?: WbRequestOptions,
  ) => Promise<GetApiV3DbwWarehousesWarehouseIdContactsResponse>;
  /**
   * Обновить список контактов
   *
   * Метод обновляет список контактов [склада продавца](/openapi/work-with-products#tag/Sklady-prodavca/paths/~1api~1v3~1warehouses/get).
   *
   *  Список контактов перезаписывается при обновлении. Поэтому в запросе нужно передать все параметры списка контактов, в том числе те, которые вы не собираетесь обновлять.
   *
   * Только для складов с типом доставки `3` — курьером WB (DBW).
   *
   * К складу можно добавить максимум 5 контактов. Чтобы удалить контакты, отправьте пустой массив `contacts`.
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца для следующих методов DBW:
   *
   *  получение и обновление списка контактов
   *  получение и удаление идентификаторов маркировки
   *  методы сборочных заданий
   *
   *
   * | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- |
   * | 1 мин | 300 запросов | 200 мс | 20 запросов |
   *
   * Один запрос с кодами ответов 4XX учитывается как 10 запросов
   *
   * PUT /api/v3/dbw/warehouses/{warehouseId}/contacts
   *
   * Разделы WB: Склады продавца.
   *
   * @see https://dev.wildberries.ru/docs/openapi/items
   */
  readonly putApiV3DbwWarehousesWarehouseIdContacts: (
    input: PutApiV3DbwWarehousesWarehouseIdContactsInput,
    options?: WbRequestOptions,
  ) => Promise<PutApiV3DbwWarehousesWarehouseIdContactsResponse>;
  /**
   * Рекомендуемый метод без версии; использует `getContentV2ObjectParentAll`.
   *
   * GET /content/v2/object/parent/all
   *
   * @see https://dev.wildberries.ru/docs/openapi/items
   */
  readonly getContentObjectParentAll: (
    input?: GetContentV2ObjectParentAllInput,
    options?: WbRequestOptions,
  ) => Promise<GetContentV2ObjectParentAllResponse>;
  /**
   * Рекомендуемый метод без версии; использует `getContentV2ObjectAll`.
   *
   * GET /content/v2/object/all
   *
   * @see https://dev.wildberries.ru/docs/openapi/items
   */
  readonly getContentObjectAll: (
    input?: GetContentV2ObjectAllInput,
    options?: WbRequestOptions,
  ) => Promise<GetContentV2ObjectAllResponse>;
  /**
   * Рекомендуемый метод без версии; использует `getContentV2ObjectCharcsSubjectId`.
   *
   * GET /content/v2/object/charcs/{subjectId}
   *
   * @see https://dev.wildberries.ru/docs/openapi/items
   */
  readonly getContentObjectCharcsSubjectId: (
    input: GetContentV2ObjectCharcsSubjectIdInput,
    options?: WbRequestOptions,
  ) => Promise<GetContentV2ObjectCharcsSubjectIdResponse>;
  /**
   * Рекомендуемый метод без версии; использует `getContentV2DirectoryColors`.
   *
   * GET /content/v2/directory/colors
   *
   * @see https://dev.wildberries.ru/docs/openapi/items
   */
  readonly getContentDirectoryColors: (
    input?: GetContentV2DirectoryColorsInput,
    options?: WbRequestOptions,
  ) => Promise<GetContentV2DirectoryColorsResponse>;
  /**
   * Рекомендуемый метод без версии; использует `getContentV2DirectoryKinds`.
   *
   * GET /content/v2/directory/kinds
   *
   * @see https://dev.wildberries.ru/docs/openapi/items
   */
  readonly getContentDirectoryKinds: (
    input?: GetContentV2DirectoryKindsInput,
    options?: WbRequestOptions,
  ) => Promise<GetContentV2DirectoryKindsResponse>;
  /**
   * Рекомендуемый метод без версии; использует `getContentV2DirectoryCountries`.
   *
   * GET /content/v2/directory/countries
   *
   * @see https://dev.wildberries.ru/docs/openapi/items
   */
  readonly getContentDirectoryCountries: (
    input?: GetContentV2DirectoryCountriesInput,
    options?: WbRequestOptions,
  ) => Promise<GetContentV2DirectoryCountriesResponse>;
  /**
   * Рекомендуемый метод без версии; использует `getContentV2DirectorySeasons`.
   *
   * GET /content/v2/directory/seasons
   *
   * @see https://dev.wildberries.ru/docs/openapi/items
   */
  readonly getContentDirectorySeasons: (
    input?: GetContentV2DirectorySeasonsInput,
    options?: WbRequestOptions,
  ) => Promise<GetContentV2DirectorySeasonsResponse>;
  /**
   * Рекомендуемый метод без версии; использует `getContentV2DirectoryVat`.
   *
   * GET /content/v2/directory/vat
   *
   * @see https://dev.wildberries.ru/docs/openapi/items
   */
  readonly getContentDirectoryVat: (
    input?: GetContentV2DirectoryVatInput,
    options?: WbRequestOptions,
  ) => Promise<GetContentV2DirectoryVatResponse>;
  /**
   * Рекомендуемый метод без версии; использует `getContentV2DirectoryTnved`.
   *
   * GET /content/v2/directory/tnved
   *
   * @see https://dev.wildberries.ru/docs/openapi/items
   */
  readonly getContentDirectoryTnved: (
    input: GetContentV2DirectoryTnvedInput,
    options?: WbRequestOptions,
  ) => Promise<GetContentV2DirectoryTnvedResponse>;
  /**
   * Рекомендуемый метод без версии; использует `getApiContentV1Brands`.
   *
   * GET /api/content/v1/brands
   *
   * @see https://dev.wildberries.ru/docs/openapi/items
   */
  readonly getApiContentBrands: (
    input: GetApiContentV1BrandsInput,
    options?: WbRequestOptions,
  ) => Promise<GetApiContentV1BrandsResponse>;
  /**
   * Рекомендуемый метод без версии; использует `getContentV2Tags`.
   *
   * GET /content/v2/tags
   *
   * @see https://dev.wildberries.ru/docs/openapi/items
   */
  readonly getContentTags: (
    options?: WbRequestOptions,
  ) => Promise<GetContentV2TagsResponse>;
  /**
   * Рекомендуемый метод без версии; использует `postContentV2Tag`.
   *
   * POST /content/v2/tag
   *
   * @see https://dev.wildberries.ru/docs/openapi/items
   */
  readonly postContentTag: (
    input: PostContentV2TagInput,
    options?: WbRequestOptions,
  ) => Promise<PostContentV2TagResponse>;
  /**
   * Рекомендуемый метод без версии; использует `patchContentV2TagId`.
   *
   * PATCH /content/v2/tag/{id}
   *
   * @see https://dev.wildberries.ru/docs/openapi/items
   */
  readonly patchContentTagId: (
    input: PatchContentV2TagIdInput,
    options?: WbRequestOptions,
  ) => Promise<PatchContentV2TagIdResponse>;
  /**
   * Рекомендуемый метод без версии; использует `deleteContentV2TagId`.
   *
   * DELETE /content/v2/tag/{id}
   *
   * @see https://dev.wildberries.ru/docs/openapi/items
   */
  readonly deleteContentTagId: (
    input: DeleteContentV2TagIdInput,
    options?: WbRequestOptions,
  ) => Promise<DeleteContentV2TagIdResponse>;
  /**
   * Рекомендуемый метод без версии; использует `postContentV2TagNomenclatureLink`.
   *
   * POST /content/v2/tag/nomenclature/link
   *
   * @see https://dev.wildberries.ru/docs/openapi/items
   */
  readonly postContentTagNomenclatureLink: (
    input: PostContentV2TagNomenclatureLinkInput,
    options?: WbRequestOptions,
  ) => Promise<PostContentV2TagNomenclatureLinkResponse>;
  /**
   * Рекомендуемый метод без версии; использует `postContentV2GetCardsList`.
   *
   * POST /content/v2/get/cards/list
   *
   * @see https://dev.wildberries.ru/docs/openapi/items
   */
  readonly postContentGetCardsList: (
    input: PostContentV2GetCardsListInput,
    options?: WbRequestOptions,
  ) => Promise<PostContentV2GetCardsListResponse>;
  /**
   * Рекомендуемый метод без версии; использует `postContentV2CardsErrorList`.
   *
   * POST /content/v2/cards/error/list
   *
   * @see https://dev.wildberries.ru/docs/openapi/items
   */
  readonly postContentCardsErrorList: (
    input: PostContentV2CardsErrorListInput,
    options?: WbRequestOptions,
  ) => Promise<PostContentV2CardsErrorListResponse>;
  /**
   * Рекомендуемый метод без версии; использует `postContentV2CardsUpdate`.
   *
   * POST /content/v2/cards/update
   *
   * @see https://dev.wildberries.ru/docs/openapi/items
   */
  readonly postContentCardsUpdate: (
    input?: PostContentV2CardsUpdateInput,
    options?: WbRequestOptions,
  ) => Promise<PostContentV2CardsUpdateResponse>;
  /**
   * Рекомендуемый метод без версии; использует `postContentV2CardsMoveNm`.
   *
   * POST /content/v2/cards/moveNm
   *
   * @see https://dev.wildberries.ru/docs/openapi/items
   */
  readonly postContentCardsMoveNm: (
    input?: PostContentV2CardsMoveNmInput,
    options?: WbRequestOptions,
  ) => Promise<PostContentV2CardsMoveNmResponse>;
  /**
   * Рекомендуемый метод без версии; использует `postContentV2CardsDeleteTrash`.
   *
   * POST /content/v2/cards/delete/trash
   *
   * @see https://dev.wildberries.ru/docs/openapi/items
   */
  readonly postContentCardsDeleteTrash: (
    input: PostContentV2CardsDeleteTrashInput,
    options?: WbRequestOptions,
  ) => Promise<PostContentV2CardsDeleteTrashResponse>;
  /**
   * Рекомендуемый метод без версии; использует `postContentV2CardsRecover`.
   *
   * POST /content/v2/cards/recover
   *
   * @see https://dev.wildberries.ru/docs/openapi/items
   */
  readonly postContentCardsRecover: (
    input: PostContentV2CardsRecoverInput,
    options?: WbRequestOptions,
  ) => Promise<PostContentV2CardsRecoverResponse>;
  /**
   * Рекомендуемый метод без версии; использует `postContentV2GetCardsTrash`.
   *
   * POST /content/v2/get/cards/trash
   *
   * @see https://dev.wildberries.ru/docs/openapi/items
   */
  readonly postContentGetCardsTrash: (
    input: PostContentV2GetCardsTrashInput,
    options?: WbRequestOptions,
  ) => Promise<PostContentV2GetCardsTrashResponse>;
  /**
   * Рекомендуемый метод без версии; использует `getContentV2CardsLimits`.
   *
   * GET /content/v2/cards/limits
   *
   * @see https://dev.wildberries.ru/docs/openapi/items
   */
  readonly getContentCardsLimits: (
    options?: WbRequestOptions,
  ) => Promise<GetContentV2CardsLimitsResponse>;
  /**
   * Рекомендуемый метод без версии; использует `postContentV2Barcodes`.
   *
   * POST /content/v2/barcodes
   *
   * @see https://dev.wildberries.ru/docs/openapi/items
   */
  readonly postContentBarcodes: (
    input: PostContentV2BarcodesInput,
    options?: WbRequestOptions,
  ) => Promise<PostContentV2BarcodesResponse>;
  /**
   * Рекомендуемый метод без версии; использует `postContentV2CardsUpload`.
   *
   * POST /content/v2/cards/upload
   *
   * @see https://dev.wildberries.ru/docs/openapi/items
   */
  readonly postContentCardsUpload: (
    input?: PostContentV2CardsUploadInput,
    options?: WbRequestOptions,
  ) => Promise<PostContentV2CardsUploadResponse>;
  /**
   * Рекомендуемый метод без версии; использует `postContentV2CardsUploadAdd`.
   *
   * POST /content/v2/cards/upload/add
   *
   * @see https://dev.wildberries.ru/docs/openapi/items
   */
  readonly postContentCardsUploadAdd: (
    input?: PostContentV2CardsUploadAddInput,
    options?: WbRequestOptions,
  ) => Promise<PostContentV2CardsUploadAddResponse>;
  /**
   * Рекомендуемый метод без версии; использует `postContentV3MediaFile`.
   *
   * POST /content/v3/media/file
   *
   * @see https://dev.wildberries.ru/docs/openapi/items
   */
  readonly postContentMediaFile: (
    input: PostContentV3MediaFileInput,
    options?: WbRequestOptions,
  ) => Promise<PostContentV3MediaFileResponse>;
  /**
   * Рекомендуемый метод без версии; использует `postContentV3MediaSave`.
   *
   * POST /content/v3/media/save
   *
   * @see https://dev.wildberries.ru/docs/openapi/items
   */
  readonly postContentMediaSave: (
    input: PostContentV3MediaSaveInput,
    options?: WbRequestOptions,
  ) => Promise<PostContentV3MediaSaveResponse>;
  /**
   * Рекомендуемый метод без версии; использует `postV1RecommendationsList`.
   *
   * POST /api/content/v1/recommendations/list
   *
   * @see https://dev.wildberries.ru/docs/openapi/items
   */
  readonly postRecommendationsList: (
    input?: PostV1RecommendationsListInput,
    options?: WbRequestOptions,
  ) => Promise<PostV1RecommendationsListResponse>;
  /**
   * Рекомендуемый метод без версии; использует `postV1RecommendationsSet`.
   *
   * POST /api/content/v1/recommendations/set
   *
   * @see https://dev.wildberries.ru/docs/openapi/items
   */
  readonly postRecommendationsSet: (
    input: PostV1RecommendationsSetInput,
    options?: WbRequestOptions,
  ) => Promise<PostV1RecommendationsSetResponse>;
  /**
   * Рекомендуемый метод без версии; использует `postApiV2UploadTask`.
   *
   * POST /api/v2/upload/task
   *
   * @see https://dev.wildberries.ru/docs/openapi/items
   */
  readonly postApiUploadTask: (
    input: PostApiV2UploadTaskInput,
    options?: WbRequestOptions,
  ) => Promise<PostApiV2UploadTaskResponse>;
  /**
   * Рекомендуемый метод без версии; использует `postApiV2UploadTaskSize`.
   *
   * POST /api/v2/upload/task/size
   *
   * @see https://dev.wildberries.ru/docs/openapi/items
   */
  readonly postApiUploadTaskSize: (
    input: PostApiV2UploadTaskSizeInput,
    options?: WbRequestOptions,
  ) => Promise<PostApiV2UploadTaskSizeResponse>;
  /**
   * Рекомендуемый метод без версии; использует `postApiV2UploadTaskClubDiscount`.
   *
   * POST /api/v2/upload/task/club-discount
   *
   * @see https://dev.wildberries.ru/docs/openapi/items
   */
  readonly postApiUploadTaskClubDiscount: (
    input: PostApiV2UploadTaskClubDiscountInput,
    options?: WbRequestOptions,
  ) => Promise<PostApiV2UploadTaskClubDiscountResponse>;
  /**
   * Рекомендуемый метод без версии; использует `postV1UploadTaskB2bWholesale`.
   *
   * POST /api/discounts-prices/v1/upload/task/b2b/wholesale
   *
   * @see https://dev.wildberries.ru/docs/openapi/items
   */
  readonly postUploadTaskB2bWholesale: (
    input: PostV1UploadTaskB2bWholesaleInput,
    options?: WbRequestOptions,
  ) => Promise<PostV1UploadTaskB2bWholesaleResponse>;
  /**
   * Рекомендуемый метод без версии; использует `getApiV2HistoryTasks`.
   *
   * GET /api/v2/history/tasks
   *
   * @see https://dev.wildberries.ru/docs/openapi/items
   */
  readonly getApiHistoryTasks: (
    input: GetApiV2HistoryTasksInput,
    options?: WbRequestOptions,
  ) => Promise<GetApiV2HistoryTasksResponse>;
  /**
   * Рекомендуемый метод без версии; использует `getApiV2HistoryGoodsTask`.
   *
   * GET /api/v2/history/goods/task
   *
   * @see https://dev.wildberries.ru/docs/openapi/items
   */
  readonly getApiHistoryGoodsTask: (
    input: GetApiV2HistoryGoodsTaskInput,
    options?: WbRequestOptions,
  ) => Promise<GetApiV2HistoryGoodsTaskResponse>;
  /**
   * Рекомендуемый метод без версии; использует `getApiV2BufferTasks`.
   *
   * GET /api/v2/buffer/tasks
   *
   * @see https://dev.wildberries.ru/docs/openapi/items
   */
  readonly getApiBufferTasks: (
    input: GetApiV2BufferTasksInput,
    options?: WbRequestOptions,
  ) => Promise<GetApiV2BufferTasksResponse>;
  /**
   * Рекомендуемый метод без версии; использует `getApiV2BufferGoodsTask`.
   *
   * GET /api/v2/buffer/goods/task
   *
   * @see https://dev.wildberries.ru/docs/openapi/items
   */
  readonly getApiBufferGoodsTask: (
    input: GetApiV2BufferGoodsTaskInput,
    options?: WbRequestOptions,
  ) => Promise<GetApiV2BufferGoodsTaskResponse>;
  /**
   * Рекомендуемый метод без версии; использует `getApiV2ListGoodsFilter`.
   *
   * GET /api/v2/list/goods/filter
   *
   * @see https://dev.wildberries.ru/docs/openapi/items
   */
  readonly getApiListGoodsFilter: (
    input: GetApiV2ListGoodsFilterInput,
    options?: WbRequestOptions,
  ) => Promise<GetApiV2ListGoodsFilterResponse>;
  /**
   * Рекомендуемый метод без версии; использует `postApiV2ListGoodsFilter`.
   *
   * POST /api/v2/list/goods/filter
   *
   * @see https://dev.wildberries.ru/docs/openapi/items
   */
  readonly postApiListGoodsFilter: (
    input: PostApiV2ListGoodsFilterInput,
    options?: WbRequestOptions,
  ) => Promise<PostApiV2ListGoodsFilterResponse>;
  /**
   * Рекомендуемый метод без версии; использует `getApiV2ListGoodsSizeNm`.
   *
   * GET /api/v2/list/goods/size/nm
   *
   * @see https://dev.wildberries.ru/docs/openapi/items
   */
  readonly getApiListGoodsSizeNm: (
    input: GetApiV2ListGoodsSizeNmInput,
    options?: WbRequestOptions,
  ) => Promise<GetApiV2ListGoodsSizeNmResponse>;
  /**
   * Рекомендуемый метод без версии; использует `getApiV2QuarantineGoods`.
   *
   * GET /api/v2/quarantine/goods
   *
   * @see https://dev.wildberries.ru/docs/openapi/items
   */
  readonly getApiQuarantineGoods: (
    input: GetApiV2QuarantineGoodsInput,
    options?: WbRequestOptions,
  ) => Promise<GetApiV2QuarantineGoodsResponse>;
  /**
   * Рекомендуемый метод без версии; использует `putApiV3StocksWarehouseId`.
   *
   * PUT /api/v3/stocks/{warehouseId}
   *
   * @see https://dev.wildberries.ru/docs/openapi/items
   */
  readonly putApiStocksWarehouseId: (
    input: PutApiV3StocksWarehouseIdInput,
    options?: WbRequestOptions,
  ) => Promise<PutApiV3StocksWarehouseIdResponse>;
  /**
   * Рекомендуемый метод без версии; использует `deleteApiV3StocksWarehouseId`.
   *
   * DELETE /api/v3/stocks/{warehouseId}
   *
   * @see https://dev.wildberries.ru/docs/openapi/items
   */
  readonly deleteApiStocksWarehouseId: (
    input: DeleteApiV3StocksWarehouseIdInput,
    options?: WbRequestOptions,
  ) => Promise<DeleteApiV3StocksWarehouseIdResponse>;
  /**
   * Рекомендуемый метод без версии; использует `postApiV3StocksWarehouseId`.
   *
   * POST /api/v3/stocks/{warehouseId}
   *
   * @see https://dev.wildberries.ru/docs/openapi/items
   */
  readonly postApiStocksWarehouseId: (
    input: PostApiV3StocksWarehouseIdInput,
    options?: WbRequestOptions,
  ) => Promise<PostApiV3StocksWarehouseIdResponse>;
  /**
   * Рекомендуемый метод без версии; использует `getApiV3Offices`.
   *
   * GET /api/v3/offices
   *
   * @see https://dev.wildberries.ru/docs/openapi/items
   */
  readonly getApiOffices: (
    options?: WbRequestOptions,
  ) => Promise<GetApiV3OfficesResponse>;
  /**
   * Рекомендуемый метод без версии; использует `getApiV3Warehouses`.
   *
   * GET /api/v3/warehouses
   *
   * @see https://dev.wildberries.ru/docs/openapi/items
   */
  readonly getApiWarehouses: (
    options?: WbRequestOptions,
  ) => Promise<GetApiV3WarehousesResponse>;
  /**
   * Рекомендуемый метод без версии; использует `postApiV3Warehouses`.
   *
   * POST /api/v3/warehouses
   *
   * @see https://dev.wildberries.ru/docs/openapi/items
   */
  readonly postApiWarehouses: (
    input: PostApiV3WarehousesInput,
    options?: WbRequestOptions,
  ) => Promise<PostApiV3WarehousesResponse>;
  /**
   * Рекомендуемый метод без версии; использует `putApiV3WarehousesWarehouseId`.
   *
   * PUT /api/v3/warehouses/{warehouseId}
   *
   * @see https://dev.wildberries.ru/docs/openapi/items
   */
  readonly putApiWarehousesWarehouseId: (
    input: PutApiV3WarehousesWarehouseIdInput,
    options?: WbRequestOptions,
  ) => Promise<PutApiV3WarehousesWarehouseIdResponse>;
  /**
   * Рекомендуемый метод без версии; использует `deleteApiV3WarehousesWarehouseId`.
   *
   * DELETE /api/v3/warehouses/{warehouseId}
   *
   * @see https://dev.wildberries.ru/docs/openapi/items
   */
  readonly deleteApiWarehousesWarehouseId: (
    input: DeleteApiV3WarehousesWarehouseIdInput,
    options?: WbRequestOptions,
  ) => Promise<DeleteApiV3WarehousesWarehouseIdResponse>;
  /**
   * Рекомендуемый метод без версии; использует `getApiV3DbwWarehousesWarehouseIdContacts`.
   *
   * GET /api/v3/dbw/warehouses/{warehouseId}/contacts
   *
   * @see https://dev.wildberries.ru/docs/openapi/items
   */
  readonly getApiDbwWarehousesWarehouseIdContacts: (
    input: GetApiV3DbwWarehousesWarehouseIdContactsInput,
    options?: WbRequestOptions,
  ) => Promise<GetApiV3DbwWarehousesWarehouseIdContactsResponse>;
  /**
   * Рекомендуемый метод без версии; использует `putApiV3DbwWarehousesWarehouseIdContacts`.
   *
   * PUT /api/v3/dbw/warehouses/{warehouseId}/contacts
   *
   * @see https://dev.wildberries.ru/docs/openapi/items
   */
  readonly putApiDbwWarehousesWarehouseIdContacts: (
    input: PutApiV3DbwWarehousesWarehouseIdContactsInput,
    options?: WbRequestOptions,
  ) => Promise<PutApiV3DbwWarehousesWarehouseIdContactsResponse>;
}

export interface WbOrdersFbsApi {
  /**
   * Получить список складов, для которых требуется пропуск
   *
   * Метод возвращает список складов для привязки к [пропуску продавца](/openapi/orders-fbs#tag/Propuska-FBS/paths/~1api~1v3~1passes/get).
   *
   *  Данные, которые возвращает метод, могут меняться. Рекомендуем периодически синхронизировать список
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца для методов сборочных заданий, поставок, пропусков и настроек автовозврата FBS:
   *
   * | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- |
   * | 1 мин | 300 запросов | 200 мс | 20 запросов |
   *
   * Один запрос с кодами ответов 4XX учитывается как 10 запросов
   *
   * GET /api/v3/passes/offices
   *
   * Разделы WB: Пропуска FBS.
   *
   * @see https://dev.wildberries.ru/docs/openapi/orders-fbs
   */
  readonly getApiV3PassesOffices: (
    options?: WbRequestOptions,
  ) => Promise<GetApiV3PassesOfficesResponse>;
  /**
   * Получить список пропусков
   *
   * Метод возвращает список всех [созданных](/openapi/orders-fbs#tag/Propuska-FBS/paths/~1api~1v3~1passes/post) пропусков продавца.
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца для методов сборочных заданий, поставок, пропусков и настроек автовозврата FBS:
   *
   * | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- |
   * | 1 мин | 300 запросов | 200 мс | 20 запросов |
   *
   * Один запрос с кодами ответов 4XX учитывается как 10 запросов
   *
   * GET /api/v3/passes
   *
   * Разделы WB: Пропуска FBS.
   *
   * @see https://dev.wildberries.ru/docs/openapi/orders-fbs
   */
  readonly getApiV3Passes: (
    options?: WbRequestOptions,
  ) => Promise<GetApiV3PassesResponse>;
  /**
   * Создать пропуск
   *
   * Метод создаёт [пропуск продавца](/openapi/orders-fbs#tag/Propuska-FBS/paths/~1api~1v3~1passes/get) с привязкой к складу WB.
   *
   * Пропуск действует 48 часов со времени создания.
   *
   *  Максимум 1 запрос в 10 минут (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца.
   *
   *  Один запрос с кодами ответов 4XX учитывается как 10 запросов
   *
   * POST /api/v3/passes
   *
   * Разделы WB: Пропуска FBS.
   *
   * @see https://dev.wildberries.ru/docs/openapi/orders-fbs
   */
  readonly postApiV3Passes: (
    input: PostApiV3PassesInput,
    options?: WbRequestOptions,
  ) => Promise<PostApiV3PassesResponse>;
  /**
   * Обновить пропуск
   *
   * Метод обновляет данные [пропуска продавца](/openapi/orders-fbs#tag/Propuska-FBS/paths/~1api~1v3~1passes/get). В том числе, можно обновить данные привязанного склада WB.
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца для методов сборочных заданий, поставок, пропусков и настроек автовозврата FBS:
   *
   * | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- |
   * | 1 мин | 300 запросов | 200 мс | 20 запросов |
   *
   * Один запрос с кодами ответов 4XX учитывается как 10 запросов
   *
   * PUT /api/v3/passes/{passId}
   *
   * Разделы WB: Пропуска FBS.
   *
   * @see https://dev.wildberries.ru/docs/openapi/orders-fbs
   */
  readonly putApiV3PassesPassId: (
    input: PutApiV3PassesPassIdInput,
    options?: WbRequestOptions,
  ) => Promise<PutApiV3PassesPassIdResponse>;
  /**
   * Удалить пропуск
   *
   * Метод удаляет пропуск продавца [из списка](/openapi/orders-fbs#tag/Propuska-FBS/paths/~1api~1v3~1passes/get).
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца для методов сборочных заданий, поставок, пропусков и настроек автовозврата FBS:
   *
   * | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- |
   * | 1 мин | 300 запросов | 200 мс | 20 запросов |
   *
   * Один запрос с кодами ответов 4XX учитывается как 10 запросов
   *
   * DELETE /api/v3/passes/{passId}
   *
   * Разделы WB: Пропуска FBS.
   *
   * @see https://dev.wildberries.ru/docs/openapi/orders-fbs
   */
  readonly deleteApiV3PassesPassId: (
    input: DeleteApiV3PassesPassIdInput,
    options?: WbRequestOptions,
  ) => Promise<DeleteApiV3PassesPassIdResponse>;
  /**
   * Получить список новых сборочных заданий
   *
   * Метод возвращает список всех новых [сборочных заданий](/openapi/orders-fbs#tag/Sborochnye-zadaniya-FBS/paths/~1api~1v3~1orders/get), которые есть у продавца на момент запроса.
   *
   * Наличие в сборочных заданиях идентификаторов маркировки, указанных в полях requiredMeta и optionalMeta, влияет только на возможность перевести поставку в доставку. Если ваш товар подлежит обязательной маркировке средствами
   * идентификации, необходимо указывать идентификаторы маркировки независимо от того, в каком поле они были получены (п. 4.6 Оферты).
   *
   * Рекомендуем добавлять в сборочные задания все идентификаторы маркировки, полученные в полях requiredMeta и optionalMeta
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца для методов сборочных заданий, поставок, пропусков и настроек автовозврата FBS:
   *
   * | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- |
   * | 1 мин | 300 запросов | 200 мс | 20 запросов |
   *
   * Один запрос с кодами ответов 4XX учитывается как 10 запросов
   *
   * GET /api/v3/orders/new
   *
   * Разделы WB: Сборочные задания FBS.
   *
   * @see https://dev.wildberries.ru/docs/openapi/orders-fbs
   */
  readonly getApiV3OrdersNew: (
    options?: WbRequestOptions,
  ) => Promise<GetApiV3OrdersNewResponse>;
  /**
   * Получить информацию о сборочных заданиях
   *
   * Метод возвращает информацию о сборочных заданиях, созданных не более 3 месяцев назад, без их актуального [статуса](/openapi/orders-fbs#tag/Sborochnye-zadaniya-FBS/paths/~1api~1v3~1orders~1status/post).
   *
   * Чтобы получить данные за период, укажите в запросе даты начала и окончания периода. Максимум 30 календарных дней одним запросом.
   * В ответе метода будут сборочные задания, созданные в указанный период.
   *
   * Чтобы получить сборочные задания, созданные более 3 месяцев назад, используйте метод получения [списка архивных заказов](/openapi/orders-fbs#tag/Sborochnye-zadaniya-FBS/paths/~1api~1marketplace~1v3~1fbs~1orders~1archive/get).
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца для методов сборочных заданий, поставок, пропусков и настроек автовозврата FBS:
   *
   * | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- |
   * | 1 мин | 300 запросов | 200 мс | 20 запросов |
   *
   * Один запрос с кодами ответов 4XX учитывается как 10 запросов
   *
   * GET /api/v3/orders
   *
   * Разделы WB: Сборочные задания FBS.
   *
   * @see https://dev.wildberries.ru/docs/openapi/orders-fbs
   */
  readonly getApiV3Orders: (
    input: GetApiV3OrdersInput,
    options?: WbRequestOptions,
  ) => Promise<GetApiV3OrdersResponse>;
  /**
   * Получить статусы сборочных заданий
   *
   * Метод возвращает статусы [сборочных заданий](/openapi/orders-fbs#tag/Sborochnye-zadaniya-FBS/paths/~1api~1v3~1orders/get) по их ID.
   *
   * `supplierStatus` — статус сборочного задания. Триггер его изменения — действие самого продавца.
   *
   * Возможные значения `supplierStatus`:
   *
   * | Статус | Описание | Как перевести сборочное задание в данный статус |
   * |-------|----------------------|--------------------------------------|
   * | `new` | **Новое сборочное задание** | |
   * | `confirm` | **На сборке** |[Добавить сборочное задание к поставке](/openapi/orders-fbs#tag/Postavki-FBS/paths/~1api~1marketplace~1v3~1supplies~1%7BsupplyId%7D~1orders/patch)
   * | `complete` | **В доставке** | [Передать поставку в доставку](/openapi/orders-fbs#tag/Postavki-FBS/paths/~1api~1v3~1supplies~1%7BsupplyId%7D~1deliver/patch) |
   * | `cancel` | **Отменено продавцом** | [Отменить сборочное задание](/openapi/orders-fbs#tag/Sborochnye-zadaniya-FBS/paths/~1api~1v3~1orders~1%7BorderId%7D~1cancel/patch)|
   * | `cancel_carrier` | **Отменено перевозчиком**
   * Только для трансграничных поставок | Переводится перевозчиком |
   *
   * `wbStatus` — статус системы Wildberries.
   *
   * Возможные значения `wbStatus`:
   * - `waiting` — сборочное задание в работе
   * - `sorted` — сборочное задание отсортировано
   * - `sold` — заказ получен покупателем
   * - `canceled` — отмена сборочного задания
   * - `canceled_by_client` — покупатель отменил заказ при получении
   * - `declined_by_client` — покупатель отменил заказ. Отмена доступна покупателю в первый час с момента заказа, если заказ не переведён на сборку
   * - `defect` — отмена заказа по причине брака
   * - `ready_for_pickup` — заказ прибыл на пункт выдачи заказов (ПВЗ)
   * - `accepted_by_carrier` — продавец передал заказ в службу доставки в своей стране
   * - `sent_to_carrier` — заказ отправлен на склад службы доставки в стране продавца
   * - `canceled_by_carrier` — заказ отменён перевозчиком. Только для трансграничных поставок
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца для методов сборочных заданий, поставок, пропусков и настроек автовозврата FBS:
   *
   * | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- |
   * | 1 мин | 300 запросов | 200 мс | 20 запросов |
   *
   * Один запрос с кодами ответов 4XX учитывается как 10 запросов
   *
   * POST /api/v3/orders/status
   *
   * Разделы WB: Сборочные задания FBS.
   *
   * @see https://dev.wildberries.ru/docs/openapi/orders-fbs
   */
  readonly postApiV3OrdersStatus: (
    input?: PostApiV3OrdersStatusInput,
    options?: WbRequestOptions,
  ) => Promise<PostApiV3OrdersStatusResponse>;
  /**
   * Получить все сборочные задания для повторной отгрузки
   *
   * Метод возвращает все [сборочные задания](/openapi/orders-fbs#tag/Sborochnye-zadaniya-FBS/paths/~1api~1v3~1orders/get), требующие повторной отгрузки.
   *
   * Повторная отгрузка требуется, если поставка была отсканирована в пункте приёмки, но при этом в ней всё ещё есть неотсканированные товары. Спустя определённое время необходимо доставить эти товары заново. Данные сборочные задания можно перевести в [другую активную поставку](/openapi/orders-fbs#tag/Postavki-FBS/paths/~1api~1marketplace~1v3~1supplies~1%7BsupplyId%7D~1orders/patch).
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца для методов сборочных заданий, поставок, пропусков и настроек автовозврата FBS:
   *
   * | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- |
   * | 1 мин | 300 запросов | 200 мс | 20 запросов |
   *
   * Один запрос с кодами ответов 4XX учитывается как 10 запросов
   *
   * GET /api/v3/supplies/orders/reshipment
   *
   * Разделы WB: Сборочные задания FBS.
   *
   * @see https://dev.wildberries.ru/docs/openapi/orders-fbs
   */
  readonly getApiV3SuppliesOrdersReshipment: (
    options?: WbRequestOptions,
  ) => Promise<GetApiV3SuppliesOrdersReshipmentResponse>;
  /**
   * Отменить сборочное задание
   *
   * Метод отменяет [сборочное задание](/openapi/orders-fbs#tag/Sborochnye-zadaniya-FBS/paths/~1api~1v3~1orders/get) и переводит в [статус](/openapi/orders-fbs#tag/Sborochnye-zadaniya-FBS/paths/~1api~1v3~1orders~1status/post) `cancel` — отменено продавцом.
   *
   * Сборочное задание можно отменить до его передачи Wildberries.
   * Чтобы проверить, можно ли отменить сборочное задание, используйте метод POST /api/v3/orders/status, поле isCancellable.
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца:
   *
   * | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- |
   * | 1 мин | 100 запросов | 600 мс | 20 запросов |
   *
   * Один запрос с кодами ответов 4XX учитывается как 10 запросов
   *
   * PATCH /api/v3/orders/{orderId}/cancel
   *
   * Разделы WB: Сборочные задания FBS.
   *
   * @see https://dev.wildberries.ru/docs/openapi/orders-fbs
   */
  readonly patchApiV3OrdersOrderIdCancel: (
    input: PatchApiV3OrdersOrderIdCancelInput,
    options?: WbRequestOptions,
  ) => Promise<PatchApiV3OrdersOrderIdCancelResponse>;
  /**
   * Получить стикеры сборочных заданий
   *
   * Метод возвращает список стикеров для [сборочных заданий](/openapi/orders-fbs#tag/Sborochnye-zadaniya-FBS) в [статусах](/openapi/orders-fbs#tag/Sborochnye-zadaniya-FBS/paths/~1api~1v3~1orders~1status/post) `confirm` — на сборке и `complete` — в доставке.
   *
   * Если за сборочным заданием не закреплён обязательный [номер декларации на товары (ДТ)](/openapi/orders-fbs#tag/fbsLabelIdentifiers/paths/~1api~1marketplace~1v3~1orders~1%7BorderId%7D~1meta~1customs-declaration/put), получить стикеры для этого сборочного задания невозможно.
   *
   * За один запрос можно получить максимум 100 стикеров.
   *
   * Можно получить стикер в форматах:
   *  - SVG
   *  - ZPLV (вертикальный)
   *  - ZPLH (горизонтальный)
   *  - PNG
   *
   * Доступны размеры:
   *  - 580x400 px при `width=58&height=40` в запросе
   *  - 400x300 px при `width=40&height=30` в запросе
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца для методов сборочных заданий, поставок, пропусков и настроек автовозврата FBS:
   *
   * | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- |
   * | 1 мин | 300 запросов | 200 мс | 20 запросов |
   *
   * Один запрос с кодами ответов 4XX учитывается как 10 запросов
   *
   * POST /api/v3/orders/stickers
   *
   * Разделы WB: Сборочные задания FBS.
   *
   * @see https://dev.wildberries.ru/docs/openapi/orders-fbs
   */
  readonly postApiV3OrdersStickers: (
    input: PostApiV3OrdersStickersInput,
    options?: WbRequestOptions,
  ) => Promise<PostApiV3OrdersStickersResponse>;
  /**
   * Получить идентификаторы маркировки сборочных заданий
   *
   * Метод возвращает идентификаторы маркировки [сборочных заданий](/openapi/orders-fbs#tag/Sborochnye-zadaniya-FBS/paths/~1api~1v3~1orders/get) и статусы их проверки.
   *
   * Перечень идентификаторов маркировки, доступных для сборочного задания, можно получить в [списке новых сборочных заданий](/openapi/orders-fbs#tag/Sborochnye-zadaniya-FBS/paths/~1api~1v3~1orders~1new/get), поля `requiredMeta` и `optionalMeta`. Если поля `requiredMeta` и `optionalMeta` не содержат какой-либо идентификатор маркировки, значит, у сборочного задания не может быть этого идентификатора — и добавить его нельзя.
   *
   * Возможные идентификаторы маркировки:
   *  - `imei` — [IMEI](/openapi/orders-fbs#tag/fbsLabelIdentifiers/paths/~1api~1v3~1orders~1%7BorderId%7D~1meta~1imei/put)
   *  - `uin` — [УИН](/openapi/orders-fbs#tag/fbsLabelIdentifiers/paths/~1api~1v3~1orders~1%7BorderId%7D~1meta~1uin/put)
   *  - `gtin` — [GTIN](/openapi/orders-fbs#tag/fbsLabelIdentifiers/paths/~1api~1v3~1orders~1%7BorderId%7D~1meta~1gtin/put)
   *  - `sgtin` — [код маркировки Честного знака](/openapi/orders-fbs#tag/fbsLabelIdentifiers/paths/~1api~1v3~1orders~1%7BorderId%7D~1meta~1sgtin/put)
   *  - `expiration` — [срок годности товара](/openapi/orders-fbs#tag/fbsLabelIdentifiers/paths/~1api~1v3~1orders~1%7BorderId%7D~1meta~1expiration/put)
   *  - `customsDeclaration` — [номер ДТ](/openapi/orders-fbs#tag/fbsLabelIdentifiers/paths/~1api~1marketplace~1v3~1orders~1%7BorderId%7D~1meta~1customs-declaration/put)
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца для всех методов получения и удаления идентификаторов маркировки FBS:
   *
   * | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- |
   * | 1 мин | 300 запросов | 200 мс | 20 запросов |
   *
   * Один запрос с кодами ответов 4XX учитывается как 10 запросов
   *
   * POST /api/marketplace/v3/orders/meta
   *
   * Разделы WB: Идентификаторы маркировки FBS.
   *
   * @see https://dev.wildberries.ru/docs/openapi/orders-fbs
   */
  readonly postApiMarketplaceV3OrdersMeta: (
    input: PostApiMarketplaceV3OrdersMetaInput,
    options?: WbRequestOptions,
  ) => Promise<PostApiMarketplaceV3OrdersMetaResponse>;
  /**
   * Удалить идентификаторы маркировки сборочного задания
   *
   * Метод удаляет значение [идентификаторов маркировки сборочного задания](/openapi/orders-fbs#tag/fbsLabelIdentifiers/paths/~1api~1marketplace~1v3~1orders~1meta/post) для переданного ключа.
   *
   * Возможные идентификаторы маркировки:
   *  - `imei` — [IMEI](/openapi/orders-fbs#tag/fbsLabelIdentifiers/paths/~1api~1v3~1orders~1%7BorderId%7D~1meta~1imei/put)
   *  - `uin` — [УИН](/openapi/orders-fbs#tag/fbsLabelIdentifiers/paths/~1api~1v3~1orders~1%7BorderId%7D~1meta~1uin/put)
   *  - `gtin` — [GTIN](/openapi/orders-fbs#tag/fbsLabelIdentifiers/paths/~1api~1v3~1orders~1%7BorderId%7D~1meta~1gtin/put)
   *  - `sgtin` — [код маркировки Честного знака](/openapi/orders-fbs#tag/fbsLabelIdentifiers/paths/~1api~1v3~1orders~1%7BorderId%7D~1meta~1sgtin/put)
   *  - `customsDeclaration` — [номер ДТ](/openapi/orders-fbs#tag/fbsLabelIdentifiers/paths/~1api~1marketplace~1v3~1orders~1%7BorderId%7D~1meta~1customs-declaration/put)
   *
   * Можно передать только один ключ.
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца для всех методов получения и удаления идентификаторов маркировки FBS:
   *
   * | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- |
   * | 1 мин | 300 запросов | 200 мс | 20 запросов |
   *
   * Один запрос с кодами ответов 4XX учитывается как 10 запросов
   *
   * DELETE /api/v3/orders/{orderId}/meta
   *
   * Разделы WB: Идентификаторы маркировки FBS.
   *
   * @see https://dev.wildberries.ru/docs/openapi/orders-fbs
   */
  readonly deleteApiV3OrdersOrderIdMeta: (
    input: DeleteApiV3OrdersOrderIdMetaInput,
    options?: WbRequestOptions,
  ) => Promise<DeleteApiV3OrdersOrderIdMetaResponse>;
  /**
   * Закрепить код маркировки Честного знака за сборочным заданием
   *
   * Метод обновляет код маркировки [Честного знака](https://честныйзнак.рф/) в идентификаторах маркировки [сборочного задания](/openapi/orders-fbs#tag/Sborochnye-zadaniya-FBS/paths/~1api~1v3~1orders/get).
   *
   * Закрепить код маркировки Честного знака можно только за сборочным заданием в [статусе](/openapi/orders-fbs#tag/Sborochnye-zadaniya-FBS/paths/~1api~1v3~1orders~1status/post) `confirm` и если в [идентификаторах маркировки сборочного задания](/openapi/orders-fbs#tag/fbsLabelIdentifiers/paths/~1api~1marketplace~1v3~1orders~1meta/post) есть поле `sgtin`.
   *
   * Получить загруженные маркировки можно в [идентификаторах маркировки сборочного задания](/openapi/orders-fbs#tag/fbsLabelIdentifiers/paths/~1api~1marketplace~1v3~1orders~1meta/post).
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца для всех методов закрепления идентификаторов маркировки FBS:
   *
   * | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- |
   * | 1 мин | 1000 запросов | 60 мс | 20 запросов |
   *
   * Один запрос с кодами ответов 4XX учитывается как 10 запросов
   *
   * PUT /api/v3/orders/{orderId}/meta/sgtin
   *
   * Разделы WB: Идентификаторы маркировки FBS.
   *
   * @see https://dev.wildberries.ru/docs/openapi/orders-fbs
   */
  readonly putApiV3OrdersOrderIdMetaSgtin: (
    input: PutApiV3OrdersOrderIdMetaSgtinInput,
    options?: WbRequestOptions,
  ) => Promise<PutApiV3OrdersOrderIdMetaSgtinResponse>;
  /**
   * Закрепить УИН за сборочным заданием
   *
   * Метод обновляет УИН, уникальный идентификационный номер, в [идентификаторах маркировки сборочного задания](/openapi/orders-fbs#tag/fbsLabelIdentifiers/paths/~1api~1marketplace~1v3~1orders~1meta/post).
   * У одного сборочного задания может быть только один УИН.
   *
   * Закрепить УИН можно только за сборочным заданием в [статусе](/openapi/orders-fbs#tag/Sborochnye-zadaniya-FBS/paths/~1api~1v3~1orders~1status/post) `confirm` и если в [идентификаторах маркировки сборочного задания](/openapi/orders-fbs#tag/fbsLabelIdentifiers/paths/~1api~1marketplace~1v3~1orders~1meta/post) есть поле `uin`.
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца для всех методов закрепления идентификаторов маркировки FBS:
   *
   * | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- |
   * | 1 мин | 1000 запросов | 60 мс | 20 запросов |
   *
   * Один запрос с кодами ответов 4XX учитывается как 10 запросов
   *
   * PUT /api/v3/orders/{orderId}/meta/uin
   *
   * Разделы WB: Идентификаторы маркировки FBS.
   *
   * @see https://dev.wildberries.ru/docs/openapi/orders-fbs
   */
  readonly putApiV3OrdersOrderIdMetaUin: (
    input: PutApiV3OrdersOrderIdMetaUinInput,
    options?: WbRequestOptions,
  ) => Promise<PutApiV3OrdersOrderIdMetaUinResponse>;
  /**
   * Закрепить IMEI за сборочным заданием
   *
   * Метод обновляет IMEI в [идентификаторах маркировки сборочного задания](/openapi/orders-fbs#tag/fbsLabelIdentifiers/paths/~1api~1marketplace~1v3~1orders~1meta/post).
   *
   * У одного сборочного задания может быть только один IMEI. Если у устройства два IMEI — **IMEI** и **IMEI2** или **IMEI1** и **IMEI2** — укажите только **IMEI** или **IMEI1**. **IMEI2** указывать не нужно.
   *
   * Закрепить IMEI можно только за сборочным заданием в [статусе](/openapi/orders-fbs#tag/Sborochnye-zadaniya-FBS/paths/~1api~1v3~1orders~1status/post) `confirm` и если в [идентификаторах маркировки сборочного задания](/openapi/orders-fbs#tag/fbsLabelIdentifiers/paths/~1api~1marketplace~1v3~1orders~1meta/post) есть поле `imei`.
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца для всех методов закрепления идентификаторов маркировки FBS:
   *
   * | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- |
   * | 1 мин | 1000 запросов | 60 мс | 20 запросов |
   *
   * Один запрос с кодами ответов 4XX учитывается как 10 запросов
   *
   * PUT /api/v3/orders/{orderId}/meta/imei
   *
   * Разделы WB: Идентификаторы маркировки FBS.
   *
   * @see https://dev.wildberries.ru/docs/openapi/orders-fbs
   */
  readonly putApiV3OrdersOrderIdMetaImei: (
    input: PutApiV3OrdersOrderIdMetaImeiInput,
    options?: WbRequestOptions,
  ) => Promise<PutApiV3OrdersOrderIdMetaImeiResponse>;
  /**
   * Закрепить GTIN за сборочным заданием
   *
   * Метод обновляет GTIN, уникальный ID товара в Беларуси, в [идентификаторах маркировки сборочного задания](/openapi/orders-fbs#tag/fbsLabelIdentifiers/paths/~1api~1marketplace~1v3~1orders~1meta/post).
   * У одного сборочного задания может быть только один GTIN.
   *
   *  Закрепить GTIN можно только за сборочным заданием в [статусе](/openapi/orders-fbs#tag/Sborochnye-zadaniya-FBS/paths/~1api~1v3~1orders~1status/post) `confirm` и если в [идентификаторах маркировки сборочного задания](/openapi/orders-fbs#tag/fbsLabelIdentifiers/paths/~1api~1marketplace~1v3~1orders~1meta/post) есть поле `gtin`.
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца для всех методов закрепления идентификаторов маркировки FBS:
   *
   * | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- |
   * | 1 мин | 1000 запросов | 60 мс | 20 запросов |
   *
   * Один запрос с кодами ответов 4XX учитывается как 10 запросов
   *
   * PUT /api/v3/orders/{orderId}/meta/gtin
   *
   * Разделы WB: Идентификаторы маркировки FBS.
   *
   * @see https://dev.wildberries.ru/docs/openapi/orders-fbs
   */
  readonly putApiV3OrdersOrderIdMetaGtin: (
    input: PutApiV3OrdersOrderIdMetaGtinInput,
    options?: WbRequestOptions,
  ) => Promise<PutApiV3OrdersOrderIdMetaGtinResponse>;
  /**
   * Закрепить за сборочным заданием срок годности товара
   *
   * Метод закрепляет за [сборочным заданием](/openapi/orders-fbs#tag/Sborochnye-zadaniya-FBS/paths/~1api~1v3~1orders/get) срок годности товара. Товар годен до указанной даты.
   *
   * Закрепить срок годности можно только за сборочным заданием в [статусе](/openapi/orders-fbs#tag/Sborochnye-zadaniya-FBS/paths/~1api~1v3~1orders~1status/post) `confirm` и если в [идентификаторах маркировки сборочного задания](/openapi/orders-fbs#tag/fbsLabelIdentifiers/paths/~1api~1marketplace~1v3~1orders~1meta/post) есть поле `expiration`.
   *
   * Получить загруженные данные можно в [идентификаторах маркировки сборочного задания](/openapi/orders-fbs#tag/fbsLabelIdentifiers/paths/~1api~1marketplace~1v3~1orders~1meta/post).
   *
   * Чтобы изменить срок годности, отправьте запрос с новой датой. Удалить срок годности сборочного задания невозможно.
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца для всех методов закрепления идентификаторов маркировки FBS:
   *
   * | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- |
   * | 1 мин | 1000 запросов | 60 мс | 20 запросов |
   *
   * Один запрос с кодами ответов 4XX учитывается как 10 запросов
   *
   * PUT /api/v3/orders/{orderId}/meta/expiration
   *
   * Разделы WB: Идентификаторы маркировки FBS.
   *
   * @see https://dev.wildberries.ru/docs/openapi/orders-fbs
   */
  readonly putApiV3OrdersOrderIdMetaExpiration: (
    input: PutApiV3OrdersOrderIdMetaExpirationInput,
    options?: WbRequestOptions,
  ) => Promise<PutApiV3OrdersOrderIdMetaExpirationResponse>;
  /**
   * Закрепить номер ДТ за сборочным заданием
   *
   * Метод обновляет номер ДТ — декларации на товары — в [идентификаторах маркировки сборочного задания](/openapi/orders-fbs#tag/fbsLabelIdentifiers/paths/~1api~1marketplace~1v3~1orders~1meta/post). У одного сборочного задания может быть только один номер ДТ.
   *
   * Закрепить номер ДТ можно только за сборочным заданием в [статусе](/openapi/orders-fbs#tag/Sborochnye-zadaniya-FBS/paths/~1api~1v3~1orders~1status/post) `confirm` и если в [идентификаторах маркировки сборочного задания](/openapi/orders-fbs#tag/fbsLabelIdentifiers/paths/~1api~1marketplace~1v3~1orders~1meta/post) есть поле `customsDeclaration`.
   *
   * Продавцам из Армении необходимо обязательно указывать номер декларации на товары (ДТ), произведённые вне ЕАЭС, если заказ из Армении доставляется в РФ.
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца для всех методов закрепления идентификаторов маркировки FBS:
   *
   * | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- |
   * | 1 мин | 1000 запросов | 60 мс | 20 запросов |
   *
   * Один запрос с кодами ответов 4XX учитывается как 10 запросов
   *
   * PUT /api/marketplace/v3/orders/{orderId}/meta/customs-declaration
   *
   * Разделы WB: Идентификаторы маркировки FBS.
   *
   * @see https://dev.wildberries.ru/docs/openapi/orders-fbs
   */
  readonly putApiMarketplaceV3OrdersOrderIdMetaCustomsDeclaration: (
    input: PutApiMarketplaceV3OrdersOrderIdMetaCustomsDeclarationInput,
    options?: WbRequestOptions,
  ) => Promise<PutApiMarketplaceV3OrdersOrderIdMetaCustomsDeclarationResponse>;
  /**
   * Получить стикеры сборочных заданий трансграничных поставок
   *
   * Метод возвращает список стикеров [сборочных заданий](/openapi/orders-fbs#tag/Sborochnye-zadaniya-FBS/paths/~1api~1v3~1orders/get) трансграничных поставок в формате PDF.
   *
   * Для каждого сборочного задания в ответе указывается статус генерации стикера:
   *  - `awaitingTrackNumber` — стикер не готов. Ожидается трек-номер от перевозчика.
   *  - `ready` — стикер готов
   *
   *  Стикер может генерироваться с задержкой. Повторяйте запрос, пока не получите статус ready.
   *
   * Ограничения:
   *  - За один запрос можно получить максимум 100 стикеров.
   *  - Можно получить стикеры только для сборочных заданий, находящихся на сборке или в доставке — [статусы](/openapi/orders-fbs#tag/Sborochnye-zadaniya-FBS/paths/~1api~1v3~1orders~1status/post) `confirm`, `complete`.
   *
   * В песочнице этот метод всегда возвращает ответ 200.
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца для методов сборочных заданий, поставок, пропусков и настроек автовозврата FBS:
   *
   * | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- |
   * | 1 мин | 300 запросов | 200 мс | 20 запросов |
   *
   * Один запрос с кодами ответов 4XX учитывается как 10 запросов
   *
   * POST /api/v3/orders/stickers/cross-border
   *
   * Разделы WB: Сборочные задания FBS.
   *
   * @see https://dev.wildberries.ru/docs/openapi/orders-fbs
   */
  readonly postApiV3OrdersStickersCrossBorder: (
    input?: PostApiV3OrdersStickersCrossBorderInput,
    options?: WbRequestOptions,
  ) => Promise<PostApiV3OrdersStickersCrossBorderResponse>;
  /**
   * История статусов для сборочных заданий трансграничных поставок
   *
   * Метод возвращает историю [статусов](/openapi/orders-fbs#tag/Sborochnye-zadaniya-FBS/paths/~1api~1v3~1orders~1status/post) для [сборочных заданий](/openapi/orders-fbs#tag/Sborochnye-zadaniya-FBS/paths/~1api~1v3~1orders/get) трансграничных поставок.
   *
   * В песочнице этот метод всегда возвращает ответ 200.
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца для методов сборочных заданий, поставок, пропусков и настроек автовозврата FBS:
   *
   * | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- |
   * | 1 мин | 300 запросов | 200 мс | 20 запросов |
   *
   * Один запрос с кодами ответов 4XX учитывается как 10 запросов
   *
   * POST /api/v3/orders/status/history
   *
   * Разделы WB: Сборочные задания FBS.
   *
   * @see https://dev.wildberries.ru/docs/openapi/orders-fbs
   */
  readonly postApiV3OrdersStatusHistory: (
    input?: PostApiV3OrdersStatusHistoryInput,
    options?: WbRequestOptions,
  ) => Promise<PostApiV3OrdersStatusHistoryResponse>;
  /**
   * Заказы с информацией по клиенту
   *
   * Метод позволяет получать информацию о покупателе по ID сборочного задания.
   *
   * Только для трансграничных поставок из **Турции**.
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца для методов сборочных заданий, поставок, пропусков и настроек автовозврата FBS:
   *
   * | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- |
   * | 1 мин | 300 запросов | 200 мс | 20 запросов |
   *
   * Один запрос с кодами ответов 4XX учитывается как 10 запросов
   *
   * POST /api/v3/orders/client
   *
   * Разделы WB: Сборочные задания FBS.
   *
   * @see https://dev.wildberries.ru/docs/openapi/orders-fbs
   */
  readonly postApiV3OrdersClient: (
    input: PostApiV3OrdersClientInput,
    options?: WbRequestOptions,
  ) => Promise<PostApiV3OrdersClientResponse>;
  /**
   * Создать новую поставку
   *
   * Метод создаёт новую [поставку](/openapi/orders-fbs#tag/Postavki-FBS/paths/~1api~1v3~1supplies~1%7BsupplyId%7D/get).
   *
   * Ограничения:
   * - Только для [сборочных заданий](/openapi/orders-fbs#tag/Sborochnye-zadaniya-FBS/paths/~1api~1v3~1orders/get) по модели FBS.
   * - При добавлении в поставку все передаваемые сборочные задания в [статусе](/openapi/orders-fbs#tag/Sborochnye-zadaniya-FBS/paths/~1api~1v3~1orders~1status/post) `new` будут автоматически переведены в статус `confirm` — на сборке.
   * - Если вы переведёте сборочное задание в статус `cancel` — отмена продавцом, прикрепленное сборочное задание автоматически удалится из поставки.
   * - Поставку можно собрать только из сборочных заданий (заказов) одного габаритного типа `cargoType`. Новая поставка не обладает габаритным признаком, она приобретает габаритный признак первого заказа, добавленного в поставку.
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца для методов сборочных заданий, поставок, пропусков и настроек автовозврата FBS:
   *
   * | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- |
   * | 1 мин | 300 запросов | 200 мс | 20 запросов |
   *
   * Один запрос с кодами ответов 4XX учитывается как 10 запросов
   *
   * POST /api/v3/supplies
   *
   * Разделы WB: Поставки FBS.
   *
   * @see https://dev.wildberries.ru/docs/openapi/orders-fbs
   */
  readonly postApiV3Supplies: (
    input: PostApiV3SuppliesInput,
    options?: WbRequestOptions,
  ) => Promise<PostApiV3SuppliesResponse>;
  /**
   * Получить список поставок
   *
   * Метод возвращает список [поставок](/openapi/orders-fbs#tag/Postavki-FBS/paths/~1api~1v3~1supplies~1%7BsupplyId%7D/get).
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца для методов сборочных заданий, поставок, пропусков и настроек автовозврата FBS:
   *
   * | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- |
   * | 1 мин | 300 запросов | 200 мс | 20 запросов |
   *
   * Один запрос с кодами ответов 4XX учитывается как 10 запросов
   *
   * GET /api/v3/supplies
   *
   * Разделы WB: Поставки FBS.
   *
   * @see https://dev.wildberries.ru/docs/openapi/orders-fbs
   */
  readonly getApiV3Supplies: (
    input: GetApiV3SuppliesInput,
    options?: WbRequestOptions,
  ) => Promise<GetApiV3SuppliesResponse>;
  /**
   * Добавить сборочные задания к поставке
   *
   * Метод добавляет до 100 [сборочных заданий](/openapi/orders-fbs#tag/Sborochnye-zadaniya-FBS/paths/~1api~1v3~1orders/get) к поставке и переводит их в [статус](/openapi/orders-fbs#tag/Sborochnye-zadaniya-FBS/paths/~1api~1v3~1orders~1status/post) `confirm` — на сборке.
   *
   * Может перемещать сборочные задания:
   *  - между активными поставками
   *  - из закрытой поставки в активную, если сборочные задания требуют [повторной отгрузки](/openapi/orders-fbs#tag/Sborochnye-zadaniya-FBS/paths/~1api~1v3~1supplies~1orders~1reshipment/get)
   *
   *  В пустую поставку можно добавить сборочные задания любого габаритного типа. Поставка приобретает габаритный тип первого добавленного сборочного задания из поля cargoType.
   *
   *
   *  После этого в поставку можно добавить сборочные задания только того же габаритного типа, что и у поставки.
   *
   *
   * В поставку нельзя добавить сборочные задания, поступившие на разные склады.
   *
   * В пустую поставку можно добавить сборочные задания трансграничных или внутренних поставок.
   * После этого поставка приобретает тип первого добавленного сборочного задания из поля crossBorderType.
   * Далее в неё можно добавить только сборочные задания такого же типа.
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца для методов сборочных заданий, поставок, пропусков и настроек автовозврата FBS:
   *
   * | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- |
   * | 1 мин | 300 запросов | 200 мс | 20 запросов |
   *
   * Один запрос с кодами ответов 4XX учитывается как 10 запросов
   *
   * PATCH /api/marketplace/v3/supplies/{supplyId}/orders
   *
   * Разделы WB: Поставки FBS.
   *
   * @see https://dev.wildberries.ru/docs/openapi/orders-fbs
   */
  readonly patchApiMarketplaceV3SuppliesSupplyIdOrders: (
    input: PatchApiMarketplaceV3SuppliesSupplyIdOrdersInput,
    options?: WbRequestOptions,
  ) => Promise<PatchApiMarketplaceV3SuppliesSupplyIdOrdersResponse>;
  /**
   * Получить информацию о поставке
   *
   * Метод возвращает подробную информацию о поставке.
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца для методов сборочных заданий, поставок, пропусков и настроек автовозврата FBS:
   *
   * | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- |
   * | 1 мин | 300 запросов | 200 мс | 20 запросов |
   *
   * Один запрос с кодами ответов 4XX учитывается как 10 запросов
   *
   * GET /api/v3/supplies/{supplyId}
   *
   * Разделы WB: Поставки FBS.
   *
   * @see https://dev.wildberries.ru/docs/openapi/orders-fbs
   */
  readonly getApiV3SuppliesSupplyId: (
    input: GetApiV3SuppliesSupplyIdInput,
    options?: WbRequestOptions,
  ) => Promise<GetApiV3SuppliesSupplyIdResponse>;
  /**
   * Удалить поставку
   *
   * Метод удаляет [поставку](/openapi/orders-fbs#tag/Postavki-FBS/paths/~1api~1v3~1supplies~1%7BsupplyId%7D/get), если она активна и за ней не закреплено ни одно [сборочное задание](/openapi/orders-fbs#tag/Sborochnye-zadaniya-FBS/paths/~1api~1v3~1orders/get).
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца для методов сборочных заданий, поставок, пропусков и настроек автовозврата FBS:
   *
   * | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- |
   * | 1 мин | 300 запросов | 200 мс | 20 запросов |
   *
   * Один запрос с кодами ответов 4XX учитывается как 10 запросов
   *
   * DELETE /api/v3/supplies/{supplyId}
   *
   * Разделы WB: Поставки FBS.
   *
   * @see https://dev.wildberries.ru/docs/openapi/orders-fbs
   */
  readonly deleteApiV3SuppliesSupplyId: (
    input: DeleteApiV3SuppliesSupplyIdInput,
    options?: WbRequestOptions,
  ) => Promise<DeleteApiV3SuppliesSupplyIdResponse>;
  /**
   * Получить ID сборочных заданий поставки
   *
   * Метод возвращает список ID сборочных заданий, закреплённых за поставкой.
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца для методов сборочных заданий, поставок, пропусков и настроек автовозврата FBS:
   *
   * | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- |
   * | 1 мин | 300 запросов | 200 мс | 20 запросов |
   *
   * Один запрос с кодами ответов 4XX учитывается как 10 запросов
   *
   * GET /api/marketplace/v3/supplies/{supplyId}/order-ids
   *
   * Разделы WB: Поставки FBS.
   *
   * @see https://dev.wildberries.ru/docs/openapi/orders-fbs
   */
  readonly getApiMarketplaceV3SuppliesSupplyIdOrderIds: (
    input: GetApiMarketplaceV3SuppliesSupplyIdOrderIdsInput,
    options?: WbRequestOptions,
  ) => Promise<GetApiMarketplaceV3SuppliesSupplyIdOrderIdsResponse>;
  /**
   * Передать поставку в доставку
   *
   * Метод закрывает [поставку](/openapi/orders-fbs#tag/Postavki-FBS/paths/~1api~1v3~1supplies~1%7BsupplyId%7D/get) и переводит все [сборочные задания](/openapi/orders-fbs#tag/Sborochnye-zadaniya-FBS/paths/~1api~1v3~1orders/get) в ней в [статус](/openapi/orders-fbs#tag/Sborochnye-zadaniya-FBS/paths/~1api~1v3~1orders~1status/post) `complete` — в доставке. После закрытия поставки добавить новые сборочные задания к ней нельзя.
   *
   * Если поставка не была передана в доставку, то при приёмке первого товара поставка автоматически закроется.
   *
   * Передать поставку в доставку можно, только если в ней:
   *  - есть хотя бы одно сборочное задание
   *  - для всех сборочных заданий указана обязательная маркировка
   *  - маркировка всех сборочных заданий прошла проверку
   *
   * Если поставка содержит сборочные задания с обязательным УИН, убедитесь, что вы заранее создали и загрузили спецификацию с договором на доставку. [ГИИС ДМДК](https://minfin.gov.ru/ru/perfomance/jewels/dmdk) требуется около 30 минут для обработки изменений в статусах УИН.
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца для методов сборочных заданий, поставок, пропусков и настроек автовозврата FBS:
   *
   * | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- |
   * | 1 мин | 300 запросов | 200 мс | 20 запросов |
   *
   * Один запрос с кодами ответов 4XX учитывается как 10 запросов
   *
   * PATCH /api/v3/supplies/{supplyId}/deliver
   *
   * Разделы WB: Поставки FBS.
   *
   * @see https://dev.wildberries.ru/docs/openapi/orders-fbs
   */
  readonly patchApiV3SuppliesSupplyIdDeliver: (
    input: PatchApiV3SuppliesSupplyIdDeliverInput,
    options?: WbRequestOptions,
  ) => Promise<PatchApiV3SuppliesSupplyIdDeliverResponse>;
  /**
   * Получить QR-код поставки
   *
   * Метод возвращает QR-код [поставки](/openapi/orders-fbs#tag/Postavki-FBS/paths/~1api~1v3~1supplies~1%7BsupplyId%7D/get) в форматах:
   *  - SVG
   *  - ZPLV (вертикальный)
   *  - ZPLH (горизонтальный)
   *  - PNG
   *
   * QR-код поставки можно получить, только если поставка [передана в доставку](/openapi/orders-fbs#tag/Postavki-FBS/paths/~1api~1v3~1supplies~1%7BsupplyId%7D~1deliver/patch).
   *
   * Размер — 580x400 px.
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца для методов сборочных заданий, поставок, пропусков и настроек автовозврата FBS:
   *
   * | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- |
   * | 1 мин | 300 запросов | 200 мс | 20 запросов |
   *
   * Один запрос с кодами ответов 4XX учитывается как 10 запросов
   *
   * GET /api/v3/supplies/{supplyId}/barcode
   *
   * Разделы WB: Поставки FBS.
   *
   * @see https://dev.wildberries.ru/docs/openapi/orders-fbs
   */
  readonly getApiV3SuppliesSupplyIdBarcode: (
    input: GetApiV3SuppliesSupplyIdBarcodeInput,
    options?: WbRequestOptions,
  ) => Promise<GetApiV3SuppliesSupplyIdBarcodeResponse>;
  /**
   * Получить список грузомест поставки
   *
   * Возвращает список грузомест поставки.
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца для методов сборочных заданий, поставок, пропусков и настроек автовозврата FBS:
   *
   * | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- |
   * | 1 мин | 300 запросов | 200 мс | 20 запросов |
   *
   * Один запрос с кодами ответов 4XX учитывается как 10 запросов
   *
   * GET /api/v3/supplies/{supplyId}/trbx
   *
   * Разделы WB: Поставки FBS.
   *
   * @see https://dev.wildberries.ru/docs/openapi/orders-fbs
   */
  readonly getApiV3SuppliesSupplyIdTrbx: (
    input: GetApiV3SuppliesSupplyIdTrbxInput,
    options?: WbRequestOptions,
  ) => Promise<GetApiV3SuppliesSupplyIdTrbxResponse>;
  /**
   * Добавить грузоместа к поставке
   *
   * Метод добавляет требуемое количество [грузомест](/openapi/orders-fbs#tag/Postavki-FBS/paths/~1api~1v3~1supplies~1%7BsupplyId%7D~1trbx/get) в [поставку](/openapi/orders-fbs#tag/Postavki-FBS/paths/~1api~1v3~1supplies~1%7BsupplyId%7D/get).
   *
   * Грузоместа необходимо добавлять только в поставки, отгружаемые на ПВЗ.
   *
   * Грузоместа можно добавить только в открытую поставку. Вы можете добавить столько же грузомест, сколько всего товаров в поставке, плюс ещё один.
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца для методов сборочных заданий, поставок, пропусков и настроек автовозврата FBS:
   *
   * | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- |
   * | 1 мин | 300 запросов | 200 мс | 20 запросов |
   *
   * Один запрос с кодами ответов 4XX учитывается как 10 запросов
   *
   * POST /api/v3/supplies/{supplyId}/trbx
   *
   * Разделы WB: Поставки FBS.
   *
   * @see https://dev.wildberries.ru/docs/openapi/orders-fbs
   */
  readonly postApiV3SuppliesSupplyIdTrbx: (
    input: PostApiV3SuppliesSupplyIdTrbxInput,
    options?: WbRequestOptions,
  ) => Promise<PostApiV3SuppliesSupplyIdTrbxResponse>;
  /**
   * Удалить грузоместа из поставки
   *
   * Метод удаляет грузоместа из поставки.
   *
   * Можно удалить только пока поставка на сборке.
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца для методов сборочных заданий, поставок, пропусков и настроек автовозврата FBS:
   *
   * | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- |
   * | 1 мин | 300 запросов | 200 мс | 20 запросов |
   *
   * Один запрос с кодами ответов 4XX учитывается как 10 запросов
   *
   * DELETE /api/v3/supplies/{supplyId}/trbx
   *
   * Разделы WB: Поставки FBS.
   *
   * @see https://dev.wildberries.ru/docs/openapi/orders-fbs
   */
  readonly deleteApiV3SuppliesSupplyIdTrbx: (
    input: DeleteApiV3SuppliesSupplyIdTrbxInput,
    options?: WbRequestOptions,
  ) => Promise<DeleteApiV3SuppliesSupplyIdTrbxResponse>;
  /**
   * Получить стикеры грузомест поставки
   *
   * Метод возвращает QR-стикеры в форматах:
   *  - SVG
   *  - ZPLV (вертикальный)
   *  - ZPLH (горизонтальный)
   *  - PNG
   *
   * Размер стикеров — 580x400 px.
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца для методов сборочных заданий, поставок, пропусков и настроек автовозврата FBS:
   *
   * | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- |
   * | 1 мин | 300 запросов | 200 мс | 20 запросов |
   *
   * Один запрос с кодами ответов 4XX учитывается как 10 запросов
   *
   * POST /api/v3/supplies/{supplyId}/trbx/stickers
   *
   * Разделы WB: Поставки FBS.
   *
   * @see https://dev.wildberries.ru/docs/openapi/orders-fbs
   */
  readonly postApiV3SuppliesSupplyIdTrbxStickers: (
    input: PostApiV3SuppliesSupplyIdTrbxStickersInput,
    options?: WbRequestOptions,
  ) => Promise<PostApiV3SuppliesSupplyIdTrbxStickersResponse>;
  /**
   * Получить список архивных сборочных заданий
   *
   * Метод возвращает сборочные задания, созданные более 3 месяцев назад.
   *
   * Часть сборочных заданий попадает в архив позже, чем через 3 месяца после создания, так как поставка переходит в архив только после того, как все заказы в ней будут завершены.
   * Например, так происходит, если продавец не доставил один из заказов в поставке и заказ был отменён автоматически через несколько дней.
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца для методов сборочных заданий, поставок, пропусков и настроек автовозврата FBS:
   *
   * | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- |
   * | 1 мин | 300 запросов | 200 мс | 20 запросов |
   *
   * Один запрос с кодами ответов 4XX учитывается как 10 запросов
   *
   * GET /api/marketplace/v3/fbs/orders/archive
   *
   * Разделы WB: Сборочные задания FBS.
   *
   * @see https://dev.wildberries.ru/docs/openapi/orders-fbs
   */
  readonly getApiMarketplaceV3FbsOrdersArchive: (
    input: GetApiMarketplaceV3FbsOrdersArchiveInput,
    options?: WbRequestOptions,
  ) => Promise<GetApiMarketplaceV3FbsOrdersArchiveResponse>;
  /**
   * Получить настройки автовозврата продавца
   *
   * Метод доступен (/openapi/api-information#tag/authorization/Pravila-ispolzovaniya-tokenov-dostupa-k-API) по
   *  Персональному токену
   *
   * Метод возвращает информацию о настройках автовозврата, установленных продавцом.
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца для методов сборочных заданий, поставок, пропусков и настроек автовозврата FBS:
   *
   * | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- |
   * | 1 мин | 300 запросов | 200 мс | 20 запросов |
   *
   * Один запрос с кодами ответов 4XX учитывается как 10 запросов
   *
   * GET /api/marketplace/v3/fbs/settings/autoreturns
   *
   * Разделы WB: Настройки автовозврата.
   *
   * @see https://dev.wildberries.ru/docs/openapi/orders-fbs
   */
  readonly getMarketplaceV3FbsSettingsAutoreturns: (
    options?: WbRequestOptions,
  ) => Promise<GetMarketplaceV3FbsSettingsAutoreturnsResponse>;
  /**
   * Обновить настройки автовозврата продавца
   *
   * Метод доступен (/openapi/api-information#tag/authorization/Pravila-ispolzovaniya-tokenov-dostupa-k-API) по
   *  Персональному токену
   *
   * Метод устанавливает настройки автовозврата продавца для малогабаритных товаров — `"cargoType":1`.
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца для методов сборочных заданий, поставок, пропусков и настроек автовозврата FBS:
   *
   * | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- |
   * | 1 мин | 300 запросов | 200 мс | 20 запросов |
   *
   * Один запрос с кодами ответов 4XX учитывается как 10 запросов
   *
   * PATCH /api/marketplace/v3/fbs/settings/autoreturns
   *
   * Разделы WB: Настройки автовозврата.
   *
   * @see https://dev.wildberries.ru/docs/openapi/orders-fbs
   */
  readonly patchMarketplaceV3FbsSettingsAutoreturns: (
    input?: PatchMarketplaceV3FbsSettingsAutoreturnsInput,
    options?: WbRequestOptions,
  ) => Promise<PatchMarketplaceV3FbsSettingsAutoreturnsResponse>;
  /**
   * Получить настройки автовозврата товаров
   *
   * Метод доступен (/openapi/api-information#tag/authorization/Pravila-ispolzovaniya-tokenov-dostupa-k-API) по
   *  Персональному токену
   *
   * Метод возвращает настройки автовозврата товаров.
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца для методов сборочных заданий, поставок, пропусков и настроек автовозврата FBS:
   *
   * | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- |
   * | 1 мин | 300 запросов | 200 мс | 20 запросов |
   *
   * Один запрос с кодами ответов 4XX учитывается как 10 запросов
   *
   * POST /api/marketplace/v3/fbs/settings/autoreturns/items
   *
   * Разделы WB: Настройки автовозврата.
   *
   * @see https://dev.wildberries.ru/docs/openapi/orders-fbs
   */
  readonly postMarketplaceV3FbsSettingsAutoreturnsItems: (
    input?: PostMarketplaceV3FbsSettingsAutoreturnsItemsInput,
    options?: WbRequestOptions,
  ) => Promise<PostMarketplaceV3FbsSettingsAutoreturnsItemsResponse>;
  /**
   * Обновить настройки автовозврата товаров
   *
   * Метод доступен (/openapi/api-information#tag/authorization/Pravila-ispolzovaniya-tokenov-dostupa-k-API) по
   *  Персональному токену
   *
   * Метод устанавливает настройки автовозврата малогабаритных товаров — `"cargoType":1`.
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца для методов сборочных заданий, поставок, пропусков и настроек автовозврата FBS:
   *
   * | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- |
   * | 1 мин | 300 запросов | 200 мс | 20 запросов |
   *
   * Один запрос с кодами ответов 4XX учитывается как 10 запросов
   *
   * PATCH /api/marketplace/v3/fbs/settings/autoreturns/items
   *
   * Разделы WB: Настройки автовозврата.
   *
   * @see https://dev.wildberries.ru/docs/openapi/orders-fbs
   */
  readonly patchMarketplaceV3FbsSettingsAutoreturnsItems: (
    input?: PatchMarketplaceV3FbsSettingsAutoreturnsItemsInput,
    options?: WbRequestOptions,
  ) => Promise<PatchMarketplaceV3FbsSettingsAutoreturnsItemsResponse>;
  /**
   * Получить предметы, которые не хранятся на складах WB
   *
   * Метод доступен (/openapi/api-information#tag/authorization/Pravila-ispolzovaniya-tokenov-dostupa-k-API) по
   *  Персональному токену
   *
   * Метод возвращает список ID предметов, товары которых не могут храниться на складах WB и будут возвращены в ПВЗ автоматически.
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца для методов сборочных заданий, поставок, пропусков и настроек автовозврата FBS:
   *
   * | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- |
   * | 1 мин | 300 запросов | 200 мс | 20 запросов |
   *
   * Один запрос с кодами ответов 4XX учитывается как 10 запросов
   *
   * GET /api/marketplace/v3/fbs/settings/autoreturns/subcategories/restricted
   *
   * Разделы WB: Настройки автовозврата.
   *
   * @see https://dev.wildberries.ru/docs/openapi/orders-fbs
   */
  readonly getMarketplaceV3FbsSettingsAutoreturnsSubcategoriesRestricted: (
    input: GetMarketplaceV3FbsSettingsAutoreturnsSubcategoriesRestrictedInput,
    options?: WbRequestOptions,
  ) => Promise<GetMarketplaceV3FbsSettingsAutoreturnsSubcategoriesRestrictedResponse>;
  /**
   * Рекомендуемый метод без версии; использует `getApiV3PassesOffices`.
   *
   * GET /api/v3/passes/offices
   *
   * @see https://dev.wildberries.ru/docs/openapi/orders-fbs
   */
  readonly getApiPassesOffices: (
    options?: WbRequestOptions,
  ) => Promise<GetApiV3PassesOfficesResponse>;
  /**
   * Рекомендуемый метод без версии; использует `getApiV3Passes`.
   *
   * GET /api/v3/passes
   *
   * @see https://dev.wildberries.ru/docs/openapi/orders-fbs
   */
  readonly getApiPasses: (
    options?: WbRequestOptions,
  ) => Promise<GetApiV3PassesResponse>;
  /**
   * Рекомендуемый метод без версии; использует `postApiV3Passes`.
   *
   * POST /api/v3/passes
   *
   * @see https://dev.wildberries.ru/docs/openapi/orders-fbs
   */
  readonly postApiPasses: (
    input: PostApiV3PassesInput,
    options?: WbRequestOptions,
  ) => Promise<PostApiV3PassesResponse>;
  /**
   * Рекомендуемый метод без версии; использует `putApiV3PassesPassId`.
   *
   * PUT /api/v3/passes/{passId}
   *
   * @see https://dev.wildberries.ru/docs/openapi/orders-fbs
   */
  readonly putApiPassesPassId: (
    input: PutApiV3PassesPassIdInput,
    options?: WbRequestOptions,
  ) => Promise<PutApiV3PassesPassIdResponse>;
  /**
   * Рекомендуемый метод без версии; использует `deleteApiV3PassesPassId`.
   *
   * DELETE /api/v3/passes/{passId}
   *
   * @see https://dev.wildberries.ru/docs/openapi/orders-fbs
   */
  readonly deleteApiPassesPassId: (
    input: DeleteApiV3PassesPassIdInput,
    options?: WbRequestOptions,
  ) => Promise<DeleteApiV3PassesPassIdResponse>;
  /**
   * Рекомендуемый метод без версии; использует `getApiV3OrdersNew`.
   *
   * GET /api/v3/orders/new
   *
   * @see https://dev.wildberries.ru/docs/openapi/orders-fbs
   */
  readonly getApiOrdersNew: (
    options?: WbRequestOptions,
  ) => Promise<GetApiV3OrdersNewResponse>;
  /**
   * Рекомендуемый метод без версии; использует `getApiV3Orders`.
   *
   * GET /api/v3/orders
   *
   * @see https://dev.wildberries.ru/docs/openapi/orders-fbs
   */
  readonly getApiOrders: (
    input: GetApiV3OrdersInput,
    options?: WbRequestOptions,
  ) => Promise<GetApiV3OrdersResponse>;
  /**
   * Рекомендуемый метод без версии; использует `postApiV3OrdersStatus`.
   *
   * POST /api/v3/orders/status
   *
   * @see https://dev.wildberries.ru/docs/openapi/orders-fbs
   */
  readonly postApiOrdersStatus: (
    input?: PostApiV3OrdersStatusInput,
    options?: WbRequestOptions,
  ) => Promise<PostApiV3OrdersStatusResponse>;
  /**
   * Рекомендуемый метод без версии; использует `getApiV3SuppliesOrdersReshipment`.
   *
   * GET /api/v3/supplies/orders/reshipment
   *
   * @see https://dev.wildberries.ru/docs/openapi/orders-fbs
   */
  readonly getApiSuppliesOrdersReshipment: (
    options?: WbRequestOptions,
  ) => Promise<GetApiV3SuppliesOrdersReshipmentResponse>;
  /**
   * Рекомендуемый метод без версии; использует `patchApiV3OrdersOrderIdCancel`.
   *
   * PATCH /api/v3/orders/{orderId}/cancel
   *
   * @see https://dev.wildberries.ru/docs/openapi/orders-fbs
   */
  readonly patchApiOrdersOrderIdCancel: (
    input: PatchApiV3OrdersOrderIdCancelInput,
    options?: WbRequestOptions,
  ) => Promise<PatchApiV3OrdersOrderIdCancelResponse>;
  /**
   * Рекомендуемый метод без версии; использует `postApiV3OrdersStickers`.
   *
   * POST /api/v3/orders/stickers
   *
   * @see https://dev.wildberries.ru/docs/openapi/orders-fbs
   */
  readonly postApiOrdersStickers: (
    input: PostApiV3OrdersStickersInput,
    options?: WbRequestOptions,
  ) => Promise<PostApiV3OrdersStickersResponse>;
  /**
   * Рекомендуемый метод без версии; использует `postApiMarketplaceV3OrdersMeta`.
   *
   * POST /api/marketplace/v3/orders/meta
   *
   * @see https://dev.wildberries.ru/docs/openapi/orders-fbs
   */
  readonly postApiMarketplaceOrdersMeta: (
    input: PostApiMarketplaceV3OrdersMetaInput,
    options?: WbRequestOptions,
  ) => Promise<PostApiMarketplaceV3OrdersMetaResponse>;
  /**
   * Рекомендуемый метод без версии; использует `deleteApiV3OrdersOrderIdMeta`.
   *
   * DELETE /api/v3/orders/{orderId}/meta
   *
   * @see https://dev.wildberries.ru/docs/openapi/orders-fbs
   */
  readonly deleteApiOrdersOrderIdMeta: (
    input: DeleteApiV3OrdersOrderIdMetaInput,
    options?: WbRequestOptions,
  ) => Promise<DeleteApiV3OrdersOrderIdMetaResponse>;
  /**
   * Рекомендуемый метод без версии; использует `putApiV3OrdersOrderIdMetaSgtin`.
   *
   * PUT /api/v3/orders/{orderId}/meta/sgtin
   *
   * @see https://dev.wildberries.ru/docs/openapi/orders-fbs
   */
  readonly putApiOrdersOrderIdMetaSgtin: (
    input: PutApiV3OrdersOrderIdMetaSgtinInput,
    options?: WbRequestOptions,
  ) => Promise<PutApiV3OrdersOrderIdMetaSgtinResponse>;
  /**
   * Рекомендуемый метод без версии; использует `putApiV3OrdersOrderIdMetaUin`.
   *
   * PUT /api/v3/orders/{orderId}/meta/uin
   *
   * @see https://dev.wildberries.ru/docs/openapi/orders-fbs
   */
  readonly putApiOrdersOrderIdMetaUin: (
    input: PutApiV3OrdersOrderIdMetaUinInput,
    options?: WbRequestOptions,
  ) => Promise<PutApiV3OrdersOrderIdMetaUinResponse>;
  /**
   * Рекомендуемый метод без версии; использует `putApiV3OrdersOrderIdMetaImei`.
   *
   * PUT /api/v3/orders/{orderId}/meta/imei
   *
   * @see https://dev.wildberries.ru/docs/openapi/orders-fbs
   */
  readonly putApiOrdersOrderIdMetaImei: (
    input: PutApiV3OrdersOrderIdMetaImeiInput,
    options?: WbRequestOptions,
  ) => Promise<PutApiV3OrdersOrderIdMetaImeiResponse>;
  /**
   * Рекомендуемый метод без версии; использует `putApiV3OrdersOrderIdMetaGtin`.
   *
   * PUT /api/v3/orders/{orderId}/meta/gtin
   *
   * @see https://dev.wildberries.ru/docs/openapi/orders-fbs
   */
  readonly putApiOrdersOrderIdMetaGtin: (
    input: PutApiV3OrdersOrderIdMetaGtinInput,
    options?: WbRequestOptions,
  ) => Promise<PutApiV3OrdersOrderIdMetaGtinResponse>;
  /**
   * Рекомендуемый метод без версии; использует `putApiV3OrdersOrderIdMetaExpiration`.
   *
   * PUT /api/v3/orders/{orderId}/meta/expiration
   *
   * @see https://dev.wildberries.ru/docs/openapi/orders-fbs
   */
  readonly putApiOrdersOrderIdMetaExpiration: (
    input: PutApiV3OrdersOrderIdMetaExpirationInput,
    options?: WbRequestOptions,
  ) => Promise<PutApiV3OrdersOrderIdMetaExpirationResponse>;
  /**
   * Рекомендуемый метод без версии; использует `putApiMarketplaceV3OrdersOrderIdMetaCustomsDeclaration`.
   *
   * PUT /api/marketplace/v3/orders/{orderId}/meta/customs-declaration
   *
   * @see https://dev.wildberries.ru/docs/openapi/orders-fbs
   */
  readonly putApiMarketplaceOrdersOrderIdMetaCustomsDeclaration: (
    input: PutApiMarketplaceV3OrdersOrderIdMetaCustomsDeclarationInput,
    options?: WbRequestOptions,
  ) => Promise<PutApiMarketplaceV3OrdersOrderIdMetaCustomsDeclarationResponse>;
  /**
   * Рекомендуемый метод без версии; использует `postApiV3OrdersStickersCrossBorder`.
   *
   * POST /api/v3/orders/stickers/cross-border
   *
   * @see https://dev.wildberries.ru/docs/openapi/orders-fbs
   */
  readonly postApiOrdersStickersCrossBorder: (
    input?: PostApiV3OrdersStickersCrossBorderInput,
    options?: WbRequestOptions,
  ) => Promise<PostApiV3OrdersStickersCrossBorderResponse>;
  /**
   * Рекомендуемый метод без версии; использует `postApiV3OrdersStatusHistory`.
   *
   * POST /api/v3/orders/status/history
   *
   * @see https://dev.wildberries.ru/docs/openapi/orders-fbs
   */
  readonly postApiOrdersStatusHistory: (
    input?: PostApiV3OrdersStatusHistoryInput,
    options?: WbRequestOptions,
  ) => Promise<PostApiV3OrdersStatusHistoryResponse>;
  /**
   * Рекомендуемый метод без версии; использует `postApiV3OrdersClient`.
   *
   * POST /api/v3/orders/client
   *
   * @see https://dev.wildberries.ru/docs/openapi/orders-fbs
   */
  readonly postApiOrdersClient: (
    input: PostApiV3OrdersClientInput,
    options?: WbRequestOptions,
  ) => Promise<PostApiV3OrdersClientResponse>;
  /**
   * Рекомендуемый метод без версии; использует `postApiV3Supplies`.
   *
   * POST /api/v3/supplies
   *
   * @see https://dev.wildberries.ru/docs/openapi/orders-fbs
   */
  readonly postApiSupplies: (
    input: PostApiV3SuppliesInput,
    options?: WbRequestOptions,
  ) => Promise<PostApiV3SuppliesResponse>;
  /**
   * Рекомендуемый метод без версии; использует `getApiV3Supplies`.
   *
   * GET /api/v3/supplies
   *
   * @see https://dev.wildberries.ru/docs/openapi/orders-fbs
   */
  readonly getApiSupplies: (
    input: GetApiV3SuppliesInput,
    options?: WbRequestOptions,
  ) => Promise<GetApiV3SuppliesResponse>;
  /**
   * Рекомендуемый метод без версии; использует `patchApiMarketplaceV3SuppliesSupplyIdOrders`.
   *
   * PATCH /api/marketplace/v3/supplies/{supplyId}/orders
   *
   * @see https://dev.wildberries.ru/docs/openapi/orders-fbs
   */
  readonly patchApiMarketplaceSuppliesSupplyIdOrders: (
    input: PatchApiMarketplaceV3SuppliesSupplyIdOrdersInput,
    options?: WbRequestOptions,
  ) => Promise<PatchApiMarketplaceV3SuppliesSupplyIdOrdersResponse>;
  /**
   * Рекомендуемый метод без версии; использует `getApiV3SuppliesSupplyId`.
   *
   * GET /api/v3/supplies/{supplyId}
   *
   * @see https://dev.wildberries.ru/docs/openapi/orders-fbs
   */
  readonly getApiSuppliesSupplyId: (
    input: GetApiV3SuppliesSupplyIdInput,
    options?: WbRequestOptions,
  ) => Promise<GetApiV3SuppliesSupplyIdResponse>;
  /**
   * Рекомендуемый метод без версии; использует `deleteApiV3SuppliesSupplyId`.
   *
   * DELETE /api/v3/supplies/{supplyId}
   *
   * @see https://dev.wildberries.ru/docs/openapi/orders-fbs
   */
  readonly deleteApiSuppliesSupplyId: (
    input: DeleteApiV3SuppliesSupplyIdInput,
    options?: WbRequestOptions,
  ) => Promise<DeleteApiV3SuppliesSupplyIdResponse>;
  /**
   * Рекомендуемый метод без версии; использует `getApiMarketplaceV3SuppliesSupplyIdOrderIds`.
   *
   * GET /api/marketplace/v3/supplies/{supplyId}/order-ids
   *
   * @see https://dev.wildberries.ru/docs/openapi/orders-fbs
   */
  readonly getApiMarketplaceSuppliesSupplyIdOrderIds: (
    input: GetApiMarketplaceV3SuppliesSupplyIdOrderIdsInput,
    options?: WbRequestOptions,
  ) => Promise<GetApiMarketplaceV3SuppliesSupplyIdOrderIdsResponse>;
  /**
   * Рекомендуемый метод без версии; использует `patchApiV3SuppliesSupplyIdDeliver`.
   *
   * PATCH /api/v3/supplies/{supplyId}/deliver
   *
   * @see https://dev.wildberries.ru/docs/openapi/orders-fbs
   */
  readonly patchApiSuppliesSupplyIdDeliver: (
    input: PatchApiV3SuppliesSupplyIdDeliverInput,
    options?: WbRequestOptions,
  ) => Promise<PatchApiV3SuppliesSupplyIdDeliverResponse>;
  /**
   * Рекомендуемый метод без версии; использует `getApiV3SuppliesSupplyIdBarcode`.
   *
   * GET /api/v3/supplies/{supplyId}/barcode
   *
   * @see https://dev.wildberries.ru/docs/openapi/orders-fbs
   */
  readonly getApiSuppliesSupplyIdBarcode: (
    input: GetApiV3SuppliesSupplyIdBarcodeInput,
    options?: WbRequestOptions,
  ) => Promise<GetApiV3SuppliesSupplyIdBarcodeResponse>;
  /**
   * Рекомендуемый метод без версии; использует `getApiV3SuppliesSupplyIdTrbx`.
   *
   * GET /api/v3/supplies/{supplyId}/trbx
   *
   * @see https://dev.wildberries.ru/docs/openapi/orders-fbs
   */
  readonly getApiSuppliesSupplyIdTrbx: (
    input: GetApiV3SuppliesSupplyIdTrbxInput,
    options?: WbRequestOptions,
  ) => Promise<GetApiV3SuppliesSupplyIdTrbxResponse>;
  /**
   * Рекомендуемый метод без версии; использует `postApiV3SuppliesSupplyIdTrbx`.
   *
   * POST /api/v3/supplies/{supplyId}/trbx
   *
   * @see https://dev.wildberries.ru/docs/openapi/orders-fbs
   */
  readonly postApiSuppliesSupplyIdTrbx: (
    input: PostApiV3SuppliesSupplyIdTrbxInput,
    options?: WbRequestOptions,
  ) => Promise<PostApiV3SuppliesSupplyIdTrbxResponse>;
  /**
   * Рекомендуемый метод без версии; использует `deleteApiV3SuppliesSupplyIdTrbx`.
   *
   * DELETE /api/v3/supplies/{supplyId}/trbx
   *
   * @see https://dev.wildberries.ru/docs/openapi/orders-fbs
   */
  readonly deleteApiSuppliesSupplyIdTrbx: (
    input: DeleteApiV3SuppliesSupplyIdTrbxInput,
    options?: WbRequestOptions,
  ) => Promise<DeleteApiV3SuppliesSupplyIdTrbxResponse>;
  /**
   * Рекомендуемый метод без версии; использует `postApiV3SuppliesSupplyIdTrbxStickers`.
   *
   * POST /api/v3/supplies/{supplyId}/trbx/stickers
   *
   * @see https://dev.wildberries.ru/docs/openapi/orders-fbs
   */
  readonly postApiSuppliesSupplyIdTrbxStickers: (
    input: PostApiV3SuppliesSupplyIdTrbxStickersInput,
    options?: WbRequestOptions,
  ) => Promise<PostApiV3SuppliesSupplyIdTrbxStickersResponse>;
  /**
   * Рекомендуемый метод без версии; использует `getApiMarketplaceV3FbsOrdersArchive`.
   *
   * GET /api/marketplace/v3/fbs/orders/archive
   *
   * @see https://dev.wildberries.ru/docs/openapi/orders-fbs
   */
  readonly getApiMarketplaceFbsOrdersArchive: (
    input: GetApiMarketplaceV3FbsOrdersArchiveInput,
    options?: WbRequestOptions,
  ) => Promise<GetApiMarketplaceV3FbsOrdersArchiveResponse>;
  /**
   * Рекомендуемый метод без версии; использует `getMarketplaceV3FbsSettingsAutoreturns`.
   *
   * GET /api/marketplace/v3/fbs/settings/autoreturns
   *
   * @see https://dev.wildberries.ru/docs/openapi/orders-fbs
   */
  readonly getMarketplaceFbsSettingsAutoreturns: (
    options?: WbRequestOptions,
  ) => Promise<GetMarketplaceV3FbsSettingsAutoreturnsResponse>;
  /**
   * Рекомендуемый метод без версии; использует `patchMarketplaceV3FbsSettingsAutoreturns`.
   *
   * PATCH /api/marketplace/v3/fbs/settings/autoreturns
   *
   * @see https://dev.wildberries.ru/docs/openapi/orders-fbs
   */
  readonly patchMarketplaceFbsSettingsAutoreturns: (
    input?: PatchMarketplaceV3FbsSettingsAutoreturnsInput,
    options?: WbRequestOptions,
  ) => Promise<PatchMarketplaceV3FbsSettingsAutoreturnsResponse>;
  /**
   * Рекомендуемый метод без версии; использует `postMarketplaceV3FbsSettingsAutoreturnsItems`.
   *
   * POST /api/marketplace/v3/fbs/settings/autoreturns/items
   *
   * @see https://dev.wildberries.ru/docs/openapi/orders-fbs
   */
  readonly postMarketplaceFbsSettingsAutoreturnsItems: (
    input?: PostMarketplaceV3FbsSettingsAutoreturnsItemsInput,
    options?: WbRequestOptions,
  ) => Promise<PostMarketplaceV3FbsSettingsAutoreturnsItemsResponse>;
  /**
   * Рекомендуемый метод без версии; использует `patchMarketplaceV3FbsSettingsAutoreturnsItems`.
   *
   * PATCH /api/marketplace/v3/fbs/settings/autoreturns/items
   *
   * @see https://dev.wildberries.ru/docs/openapi/orders-fbs
   */
  readonly patchMarketplaceFbsSettingsAutoreturnsItems: (
    input?: PatchMarketplaceV3FbsSettingsAutoreturnsItemsInput,
    options?: WbRequestOptions,
  ) => Promise<PatchMarketplaceV3FbsSettingsAutoreturnsItemsResponse>;
  /**
   * Рекомендуемый метод без версии; использует `getMarketplaceV3FbsSettingsAutoreturnsSubcategoriesRestricted`.
   *
   * GET /api/marketplace/v3/fbs/settings/autoreturns/subcategories/restricted
   *
   * @see https://dev.wildberries.ru/docs/openapi/orders-fbs
   */
  readonly getMarketplaceFbsSettingsAutoreturnsSubcategoriesRestricted: (
    input: GetMarketplaceV3FbsSettingsAutoreturnsSubcategoriesRestrictedInput,
    options?: WbRequestOptions,
  ) => Promise<GetMarketplaceV3FbsSettingsAutoreturnsSubcategoriesRestrictedResponse>;
}

export interface WbOrdersDbwApi {
  /**
   * Получить список новых сборочных заданий
   *
   * Метод возвращает список всех новых [сборочных заданий](/openapi/orders-dbw#tag/dbwAssemblyOrders), которые есть у продавца на момент запроса.
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца для следующих методов DBW:
   *
   *  получение и обновление списка контактов
   *  получение и удаление идентификаторов маркировки
   *  методы сборочных заданий
   *
   *
   * | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- |
   * | 1 мин | 300 запросов | 200 мс | 20 запросов |
   *
   * Один запрос с кодами ответов 4XX учитывается как 10 запросов
   *
   * GET /api/v3/dbw/orders/new
   *
   * Разделы WB: Сборочные задания DBW.
   *
   * @see https://dev.wildberries.ru/docs/openapi/orders-dbw
   */
  readonly getV3DbwOrdersNew: (
    options?: WbRequestOptions,
  ) => Promise<GetV3DbwOrdersNewResponse>;
  /**
   * Получить информацию о завершенных сборочных заданиях
   *
   * Метод возвращает информацию о завершенных [сборочных заданиях](/openapi/orders-dbw#tag/dbwAssemblyOrders).
   *
   * Можно получить данные за заданный период, максимум 30 календарных дней одним запросом.
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца для следующих методов DBW:
   *
   *  получение и обновление списка контактов
   *  получение и удаление идентификаторов маркировки
   *  методы сборочных заданий
   *
   *
   * | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- |
   * | 1 мин | 300 запросов | 200 мс | 20 запросов |
   *
   * Один запрос с кодами ответов 4XX учитывается как 10 запросов
   *
   * GET /api/v3/dbw/orders
   *
   * Разделы WB: Сборочные задания DBW.
   *
   * @see https://dev.wildberries.ru/docs/openapi/orders-dbw
   */
  readonly getV3DbwOrders: (
    input: GetV3DbwOrdersInput,
    options?: WbRequestOptions,
  ) => Promise<GetV3DbwOrdersResponse>;
  /**
   * Получить дату и время доставки
   *
   * Метод возвращает информацию о выбранных покупателем дате и времени доставки сборочных заданий.
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца для следующих методов DBW:
   *
   *  получение и обновление списка контактов
   *  получение и удаление идентификаторов маркировки
   *  методы сборочных заданий
   *
   *
   * | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- |
   * | 1 мин | 300 запросов | 200 мс | 20 запросов |
   *
   * Один запрос с кодами ответов 4XX учитывается как 10 запросов
   *
   * POST /api/v3/dbw/orders/delivery-date
   *
   * Разделы WB: Сборочные задания DBW.
   *
   * @see https://dev.wildberries.ru/docs/openapi/orders-dbw
   */
  readonly postV3DbwOrdersDeliveryDate: (
    input: PostV3DbwOrdersDeliveryDateInput,
    options?: WbRequestOptions,
  ) => Promise<PostV3DbwOrdersDeliveryDateResponse>;
  /**
   * Информация о покупателе
   *
   * Метод возвращает информацию о покупателях по ID сборочных заданий.
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца для следующих методов DBW:
   *
   *  получение и обновление списка контактов
   *  получение и удаление идентификаторов маркировки
   *  методы сборочных заданий
   *
   *
   * | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- |
   * | 1 мин | 300 запросов | 200 мс | 20 запросов |
   *
   * Один запрос с кодами ответов 4XX учитывается как 10 запросов
   *
   * POST /api/marketplace/v3/dbw/orders/client
   *
   * Разделы WB: Сборочные задания DBW.
   *
   * @see https://dev.wildberries.ru/docs/openapi/orders-dbw
   */
  readonly postV3DbwOrdersClient: (
    input: PostV3DbwOrdersClientInput,
    options?: WbRequestOptions,
  ) => Promise<PostV3DbwOrdersClientResponse>;
  /**
   * Получить статусы сборочных заданий
   *
   * Метод возвращает статусы сборочных заданий по их ID.
   *
   * `supplierStatus` — статус сборочного задания.
   * Триггер его изменения — действие самого продавца.
   *
   * Возможные значения `supplierStatus`:
   * | Статус | Описание | Как перевести сборочное задание в данный статус |
   * | ------- | --------- | --------------------------------------|
   * | `new` | **Новое сборочное задание** | |
   * | `confirm` | **На сборке** | [Перевести сборочное задание на сборку](/openapi/orders-dbw#tag/dbwAssemblyOrders/operation/patchV3DbwOrdersOrderIdConfirm)
   * | `complete` | **В доставке** | [Перевести сборочное задание в доставку](/openapi/orders-dbw#tag/dbwAssemblyOrders/operation/postV3DbwOrdersStatusDeliver) |
   * | `receive` | **Получено покупателем**| Переводится курьером
   * | `reject` | **Отказ покупателя при получении**| Переводится курьером
   * | `cancel` | **Отменено продавцом** | [Отменить сборочное задание](/openapi/orders-dbw#tag/dbwAssemblyOrders/operation/patchV3DbwOrdersOrderIdCancel)
   * | `cancel_missed_call` | **Отмена по причине недозвона**
   *  | Статус меняется автоматически |
   *
   * `wbStatus` — статус системы Wildberries.
   *
   * Возможные значения `wbStatus`:
   * - `waiting` — сборочное задание в работе
   * - `sold` — заказ получен покупателем
   * - `canceled` — отмена сборочного задания
   * - `canceled_by_client` — покупатель отменил заказ при получении
   * - `declined_by_client` — покупатель отменил заказ в первый чаc
   *
   * Отмена доступна покупателю в первый час с момента заказа, если заказ не переведен на сборку
   * - `defect` — отмена заказа по причине брака
   * - `canceled_by_missed_call` — отмена заказа по причине недозвона
   * - `postponed_delivery` — курьерская доставка отложена
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца для следующих методов DBW:
   *
   *  получение и обновление списка контактов
   *  получение и удаление идентификаторов маркировки
   *  методы сборочных заданий
   *
   *
   * | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- |
   * | 1 мин | 300 запросов | 200 мс | 20 запросов |
   *
   * Один запрос с кодами ответов 4XX учитывается как 10 запросов
   *
   * POST /api/v3/dbw/orders/status
   *
   * Разделы WB: Сборочные задания DBW.
   *
   * @see https://dev.wildberries.ru/docs/openapi/orders-dbw
   */
  readonly postV3DbwOrdersStatus: (
    input?: PostV3DbwOrdersStatusInput,
    options?: WbRequestOptions,
  ) => Promise<PostV3DbwOrdersStatusResponse>;
  /**
   * Перевести на сборку
   *
   * Метод переводит [сборочное задание](/openapi/orders-dbw#tag/dbwAssemblyOrders) в [статус](/openapi/orders-dbw#tag/dbwAssemblyOrders/operation/postV3DbwOrdersStatus) `confirm` — на сборке.
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца для следующих методов DBW:
   *
   *  получение и обновление списка контактов
   *  получение и удаление идентификаторов маркировки
   *  методы сборочных заданий
   *
   *
   * | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- |
   * | 1 мин | 300 запросов | 200 мс | 20 запросов |
   *
   * Один запрос с кодами ответов 4XX учитывается как 10 запросов
   *
   * PATCH /api/v3/dbw/orders/{orderId}/confirm
   *
   * Разделы WB: Сборочные задания DBW.
   *
   * @see https://dev.wildberries.ru/docs/openapi/orders-dbw
   */
  readonly patchV3DbwOrdersOrderIdConfirm: (
    input: PatchV3DbwOrdersOrderIdConfirmInput,
    options?: WbRequestOptions,
  ) => Promise<PatchV3DbwOrdersOrderIdConfirmResponse>;
  /**
   * Получить стикеры сборочных заданий
   *
   * Метод возвращает список стикеров для [сборочных заданий](/openapi/orders-dbw#tag/dbwAssemblyOrders/operation/getV3DbwOrdersNew) в [статусах](/openapi/orders-dbw#tag/dbwAssemblyOrders/operation/postV3DbwOrdersStatus):
   *  - `confirm` — на сборке
   *  - `complete` — в доставке
   *
   * За один запрос можно получить максимум 100 стикеров.
   *
   * Доступные форматы стикеров:
   *  - SVG
   *  - ZPLV (вертикальный)
   *  - ZPLH (горизонтальный)
   *  - PNG
   *
   * Доступны размеры:
   *  - 580x400 px при `width=58&height=40` в запросе
   *  - 400x300 px при `width=40&height=30` в запросе
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца для следующих методов DBW:
   *
   *  получение и обновление списка контактов
   *  получение и удаление идентификаторов маркировки
   *  методы сборочных заданий
   *
   *
   * | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- |
   * | 1 мин | 300 запросов | 200 мс | 20 запросов |
   *
   * Один запрос с кодами ответов 4XX учитывается как 10 запросов
   *
   * POST /api/v3/dbw/orders/stickers
   *
   * Разделы WB: Сборочные задания DBW.
   *
   * @see https://dev.wildberries.ru/docs/openapi/orders-dbw
   */
  readonly postV3DbwOrdersStickers: (
    input: PostV3DbwOrdersStickersInput,
    options?: WbRequestOptions,
  ) => Promise<PostV3DbwOrdersStickersResponse>;
  /**
   * Перевести сборочные задания в доставку
   *
   * Метод переводит [сборочные задания](/openapi/orders-dbw#tag/dbwAssemblyOrders/operation/getV3DbwOrders) из [статуса](/openapi/orders-dbw#tag/dbwAssemblyOrders/operation/postV3DbwOrdersStatus) `confirm` в статус `complete` — в доставке.
   *
   * Проверяйте ответ метода. Сборочные задания, переведённые в доставку, вернутся с признаком `"isError":false`. Для остальных сборочных заданий смотрите причину ошибки в массиве `errors`
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца для следующих методов DBW:
   *
   *  получение и обновление списка контактов
   *  получение и удаление идентификаторов маркировки
   *  методы сборочных заданий
   *
   *
   * | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- |
   * | 1 мин | 300 запросов | 200 мс | 20 запросов |
   *
   * Один запрос с кодами ответов 4XX учитывается как 10 запросов
   *
   * POST /api/marketplace/v3/dbw/orders/status/deliver
   *
   * Разделы WB: Сборочные задания DBW.
   *
   * @see https://dev.wildberries.ru/docs/openapi/orders-dbw
   */
  readonly postV3DbwOrdersStatusDeliver: (
    input: PostV3DbwOrdersStatusDeliverInput,
    options?: WbRequestOptions,
  ) => Promise<PostV3DbwOrdersStatusDeliverResponse>;
  /**
   * Информация о курьере
   *
   * Метод возвращает контактные данные и номер автомобиля курьера по ID сборочного задания.
   *  Для сборочных заданий в статусах `confirm`, `complete`.
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца для следующих методов DBW:
   *
   *  получение и обновление списка контактов
   *  получение и удаление идентификаторов маркировки
   *  методы сборочных заданий
   *
   *
   * | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- |
   * | 1 мин | 300 запросов | 200 мс | 20 запросов |
   *
   * Один запрос с кодами ответов 4XX учитывается как 10 запросов
   *
   * POST /api/v3/dbw/orders/courier
   *
   * Разделы WB: Сборочные задания DBW.
   *
   * @see https://dev.wildberries.ru/docs/openapi/orders-dbw
   */
  readonly postV3DbwOrdersCourier: (
    input: PostV3DbwOrdersCourierInput,
    options?: WbRequestOptions,
  ) => Promise<PostV3DbwOrdersCourierResponse>;
  /**
   * Отменить сборочное задание
   *
   * Метод отменяет [сборочное задание](/openapi/orders-dbw#tag/dbwAssemblyOrders) и переводит в [статус](/openapi/orders-dbw#tag/dbwAssemblyOrders/operation/postV3DbwOrdersStatus) `cancel` — отменено продавцом.
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца для методов DBW:
   *
   *  получение и обновление списка контактов
   *  получение и удаление идентификаторов маркировки
   *  управление сборочными заданиями
   *
   *
   * | Тип | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- | --- |
   * | Персональный | 1 мин | 300 запросов | 200 мс | 20 запросов |
   * | Сервисный | 1 мин | 300 запросов | 200 мс | 20 запросов |
   * | Базовый с секретом | 1 мин | 300 запросов | 200 мс | 20 запросов |
   * | Базовый | 1 ч | 10 запросов | 6 мин | 1 запрос |
   *
   * Один запрос с кодами ответов 4XX учитывается как 10 запросов
   *
   * PATCH /api/v3/dbw/orders/{orderId}/cancel
   *
   * Разделы WB: Сборочные задания DBW.
   *
   * @see https://dev.wildberries.ru/docs/openapi/orders-dbw
   */
  readonly patchV3DbwOrdersOrderIdCancel: (
    input: PatchV3DbwOrdersOrderIdCancelInput,
    options?: WbRequestOptions,
  ) => Promise<PatchV3DbwOrdersOrderIdCancelResponse>;
  /**
   * Получить идентификаторы маркировки сборочных заданий
   *
   * Метод возвращает идентификаторы маркировки [сборочных заданий](/openapi/orders-dbw#tag/dbwAssemblyOrders/operation/getV3DbwOrders) и статусы их проверки.
   *
   * Перечень идентификаторов маркировки, доступных для сборочного задания, можно получить в [списке новых сборочных заданий](/openapi/orders-dbw#tag/dbwAssemblyOrders/operation/getV3DbwOrdersNew), поле `requiredMeta`. Если поле `requiredMeta` не содержит какой-либо идентификатор маркировки, значит, у сборочного задания не может быть этого идентификатора — и добавить его нельзя.
   *
   * Возможные идентификаторы маркировки:
   *  - `imei` — [IMEI](/openapi/orders-dbw#tag/dbwLabelIdentifiers/operation/putV3DbwOrdersOrderIdMetaImei)
   *  - `uin` — [УИН](/openapi/orders-dbw#tag/dbwLabelIdentifiers/operation/putV3DbwOrdersOrderIdMetaUin)
   *  - `gtin` — [GTIN](/openapi/orders-dbw#tag/dbwLabelIdentifiers/operation/putV3DbwOrdersOrderIdMetaGtin)
   *  - `sgtin` — [код маркировки Честного знака](/openapi/orders-dbw#tag/dbwLabelIdentifiers/operation/postV3DbwOrdersMetaSgtin)
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца для следующих методов DBW:
   *
   *  получение и обновление списка контактов
   *  получение и удаление идентификаторов маркировки
   *  методы сборочных заданий
   *
   *
   * | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- |
   * | 1 мин | 300 запросов | 200 мс | 20 запросов |
   *
   * Один запрос с кодами ответов 4XX учитывается как 10 запросов
   *
   * POST /api/marketplace/v3/dbw/orders/meta/details
   *
   * Разделы WB: Идентификаторы маркировки DBW.
   *
   * @see https://dev.wildberries.ru/docs/openapi/orders-dbw
   */
  readonly postV3DbwOrdersMetaDetails: (
    input: PostV3DbwOrdersMetaDetailsInput,
    options?: WbRequestOptions,
  ) => Promise<PostV3DbwOrdersMetaDetailsResponse>;
  /**
   * Удалить идентификаторы маркировки сборочных заданий
   *
   * Метод удаляет значение указанных [идентификаторов маркировки сборочного задания](/openapi/orders-dbw#tag/dbwLabelIdentifiers/operation/postV3DbwOrdersMetaDetails) для переданного ключа.
   *
   * В одном запросе можно удалить идентификаторы маркировки только одного типа. Укажите тип идентификаторов маркировки в запросе:
   *  - `imei` — [IMEI](/openapi/orders-dbw#tag/dbwLabelIdentifiers/operation/putV3DbwOrdersOrderIdMetaImei)
   *  - `uin` — [УИН](/openapi/orders-dbw#tag/dbwLabelIdentifiers/operation/putV3DbwOrdersOrderIdMetaUin)
   *  - `gtin` — [GTIN](/openapi/orders-dbw#tag/dbwLabelIdentifiers/operation/putV3DbwOrdersOrderIdMetaImei)
   *  - `sgtin` — [код маркировки Честного знака](/openapi/orders-dbw#tag/dbwLabelIdentifiers/operation/postV3DbwOrdersMetaSgtin)
   *
   * Можно передать только один ключ.
   *
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца для следующих методов DBW:
   *
   *  получение и обновление списка контактов
   *  получение и удаление идентификаторов маркировки
   *  методы сборочных заданий
   *
   *
   * | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- |
   * | 1 мин | 300 запросов | 200 мс | 20 запросов |
   *
   * Один запрос с кодами ответов 4XX учитывается как 10 запросов
   *
   * POST /api/marketplace/v3/dbw/orders/meta/delete
   *
   * Разделы WB: Идентификаторы маркировки DBW.
   *
   * @see https://dev.wildberries.ru/docs/openapi/orders-dbw
   */
  readonly postV3DbwOrdersMetaDelete: (
    input: PostV3DbwOrdersMetaDeleteInput,
    options?: WbRequestOptions,
  ) => Promise<PostV3DbwOrdersMetaDeleteResponse>;
  /**
   * Закрепить коды маркировки Честного знака за сборочными заданиями
   *
   * Метод обновляет код маркировки [Честного знака](https://честныйзнак.рф/) в [идентификаторах маркировки сборочных заданий](/openapi/orders-dbw#tag/dbwLabelIdentifiers/operation/postV3DbwOrdersMetaDetails).
   *
   * Закрепить код маркировки можно только за сборочным заданием в [статусе](/openapi/orders-dbw#tag/dbwAssemblyOrders/operation/postV3DbwOrdersStatus) `confirm` и если в [идентификаторах маркировки сборочного задания](/openapi/orders-dbw#tag/dbwLabelIdentifiers/operation/postV3DbwOrdersMetaDetails) есть поле `sgtin`.
   *
   * Получить загруженные маркировки можно в [идентификаторах маркировки сборочного задания](/openapi/orders-dbw#tag/dbwLabelIdentifiers/operation/postV3DbwOrdersMetaDetails).
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца для следующих методов DBW:
   *
   *  получение и обновление списка контактов
   *  получение и удаление идентификаторов маркировки
   *  методы сборочных заданий
   *
   *
   * | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- |
   * | 1 мин | 300 запросов | 200 мс | 20 запросов |
   *
   * Один запрос с кодами ответов 4XX учитывается как 10 запросов
   *
   * POST /api/marketplace/v3/dbw/orders/meta/sgtin
   *
   * Разделы WB: Идентификаторы маркировки DBW.
   *
   * @see https://dev.wildberries.ru/docs/openapi/orders-dbw
   */
  readonly postV3DbwOrdersMetaSgtin: (
    input: PostV3DbwOrdersMetaSgtinInput,
    options?: WbRequestOptions,
  ) => Promise<PostV3DbwOrdersMetaSgtinResponse>;
  /**
   * Закрепить УИН за сборочным заданием
   *
   * Метод обновляет УИН, уникальный идентификационный номер, в [идентификаторах маркировки сборочного задания](/openapi/orders-dbw#tag/dbwLabelIdentifiers/operation/postV3DbwOrdersMetaDetails). У одного сборочного задания может быть только один УИН.
   *
   * Закрепить УИН можно только за сборочным заданием в [статусе](/openapi/orders-dbw#tag/dbwAssemblyOrders/operation/postV3DbwOrdersStatus) `confirm` и если в [идентификаторах маркировки сборочного задания](/openapi/orders-dbw#tag/dbwLabelIdentifiers/operation/postV3DbwOrdersMetaDetails) есть поле `uin`.
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца для всех методов закрепления идентификаторов маркировки DBW:
   *
   * | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- |
   * | 1 мин | 1000 запросов | 60 мс | 20 запросов |
   *
   * Один запрос с кодами ответов 4XX учитывается как 10 запросов
   *
   * PUT /api/v3/dbw/orders/{orderId}/meta/uin
   *
   * Разделы WB: Идентификаторы маркировки DBW.
   *
   * @see https://dev.wildberries.ru/docs/openapi/orders-dbw
   */
  readonly putV3DbwOrdersOrderIdMetaUin: (
    input: PutV3DbwOrdersOrderIdMetaUinInput,
    options?: WbRequestOptions,
  ) => Promise<PutV3DbwOrdersOrderIdMetaUinResponse>;
  /**
   * Закрепить IMEI за сборочным заданием
   *
   * Метод обновляет IMEI в [идентификаторах маркировки сборочного задания](/openapi/orders-dbw#tag/dbwLabelIdentifiers/operation/postV3DbwOrdersMetaDetails).
   *
   * У одного сборочного задания может быть только один IMEI. Если у устройства два IMEI — **IMEI** и **IMEI2** или **IMEI1** и **IMEI2** — укажите только **IMEI** или **IMEI1**. **IMEI2** указывать не нужно.
   *
   * Закрепить IMEI можно только за сборочным заданием в [статусе](/openapi/orders-dbw#tag/dbwAssemblyOrders/operation/postV3DbwOrdersStatus) `confirm` и если в [идентификаторах маркировки сборочного задания](/openapi/orders-dbw#tag/dbwLabelIdentifiers/operation/postV3DbwOrdersMetaDetails) есть поле `imei`.
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца для всех методов закрепления идентификаторов маркировки DBW:
   *
   * | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- |
   * | 1 мин | 1000 запросов | 60 мс | 20 запросов |
   *
   * Один запрос с кодами ответов 4XX учитывается как 10 запросов
   *
   * PUT /api/v3/dbw/orders/{orderId}/meta/imei
   *
   * Разделы WB: Идентификаторы маркировки DBW.
   *
   * @see https://dev.wildberries.ru/docs/openapi/orders-dbw
   */
  readonly putV3DbwOrdersOrderIdMetaImei: (
    input: PutV3DbwOrdersOrderIdMetaImeiInput,
    options?: WbRequestOptions,
  ) => Promise<PutV3DbwOrdersOrderIdMetaImeiResponse>;
  /**
   * Закрепить GTIN за сборочным заданием
   *
   * Метод обновляет GTIN, уникальный ID товара в Беларуси, в [идентификаторах маркировки сборочного задания](/openapi/orders-dbw#tag/dbwLabelIdentifiers/operation/postV3DbwOrdersMetaDetails). У одного сборочного задания может быть только один GTIN.
   *
   * Закрепить GTIN можно только за сборочным заданием в [статусе](/openapi/orders-dbw#tag/dbwAssemblyOrders/operation/postV3DbwOrdersStatus) `confirm` и если в [идентификаторах маркировки сборочного задания](/openapi/orders-dbw#tag/dbwLabelIdentifiers/operation/postV3DbwOrdersMetaDetails) есть поле `gtin`.
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца для всех методов закрепления идентификаторов маркировки DBW:
   *
   * | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- |
   * | 1 мин | 1000 запросов | 60 мс | 20 запросов |
   *
   * Один запрос с кодами ответов 4XX учитывается как 10 запросов
   *
   * PUT /api/v3/dbw/orders/{orderId}/meta/gtin
   *
   * Разделы WB: Идентификаторы маркировки DBW.
   *
   * @see https://dev.wildberries.ru/docs/openapi/orders-dbw
   */
  readonly putV3DbwOrdersOrderIdMetaGtin: (
    input: PutV3DbwOrdersOrderIdMetaGtinInput,
    options?: WbRequestOptions,
  ) => Promise<PutV3DbwOrdersOrderIdMetaGtinResponse>;
  /**
   * Рекомендуемый метод без версии; использует `getV3DbwOrdersNew`.
   *
   * GET /api/v3/dbw/orders/new
   *
   * @see https://dev.wildberries.ru/docs/openapi/orders-dbw
   */
  readonly getDbwOrdersNew: (
    options?: WbRequestOptions,
  ) => Promise<GetV3DbwOrdersNewResponse>;
  /**
   * Рекомендуемый метод без версии; использует `getV3DbwOrders`.
   *
   * GET /api/v3/dbw/orders
   *
   * @see https://dev.wildberries.ru/docs/openapi/orders-dbw
   */
  readonly getDbwOrders: (
    input: GetV3DbwOrdersInput,
    options?: WbRequestOptions,
  ) => Promise<GetV3DbwOrdersResponse>;
  /**
   * Рекомендуемый метод без версии; использует `postV3DbwOrdersDeliveryDate`.
   *
   * POST /api/v3/dbw/orders/delivery-date
   *
   * @see https://dev.wildberries.ru/docs/openapi/orders-dbw
   */
  readonly postDbwOrdersDeliveryDate: (
    input: PostV3DbwOrdersDeliveryDateInput,
    options?: WbRequestOptions,
  ) => Promise<PostV3DbwOrdersDeliveryDateResponse>;
  /**
   * Рекомендуемый метод без версии; использует `postV3DbwOrdersClient`.
   *
   * POST /api/marketplace/v3/dbw/orders/client
   *
   * @see https://dev.wildberries.ru/docs/openapi/orders-dbw
   */
  readonly postDbwOrdersClient: (
    input: PostV3DbwOrdersClientInput,
    options?: WbRequestOptions,
  ) => Promise<PostV3DbwOrdersClientResponse>;
  /**
   * Рекомендуемый метод без версии; использует `postV3DbwOrdersStatus`.
   *
   * POST /api/v3/dbw/orders/status
   *
   * @see https://dev.wildberries.ru/docs/openapi/orders-dbw
   */
  readonly postDbwOrdersStatus: (
    input?: PostV3DbwOrdersStatusInput,
    options?: WbRequestOptions,
  ) => Promise<PostV3DbwOrdersStatusResponse>;
  /**
   * Рекомендуемый метод без версии; использует `patchV3DbwOrdersOrderIdConfirm`.
   *
   * PATCH /api/v3/dbw/orders/{orderId}/confirm
   *
   * @see https://dev.wildberries.ru/docs/openapi/orders-dbw
   */
  readonly patchDbwOrdersOrderIdConfirm: (
    input: PatchV3DbwOrdersOrderIdConfirmInput,
    options?: WbRequestOptions,
  ) => Promise<PatchV3DbwOrdersOrderIdConfirmResponse>;
  /**
   * Рекомендуемый метод без версии; использует `postV3DbwOrdersStickers`.
   *
   * POST /api/v3/dbw/orders/stickers
   *
   * @see https://dev.wildberries.ru/docs/openapi/orders-dbw
   */
  readonly postDbwOrdersStickers: (
    input: PostV3DbwOrdersStickersInput,
    options?: WbRequestOptions,
  ) => Promise<PostV3DbwOrdersStickersResponse>;
  /**
   * Рекомендуемый метод без версии; использует `postV3DbwOrdersStatusDeliver`.
   *
   * POST /api/marketplace/v3/dbw/orders/status/deliver
   *
   * @see https://dev.wildberries.ru/docs/openapi/orders-dbw
   */
  readonly postDbwOrdersStatusDeliver: (
    input: PostV3DbwOrdersStatusDeliverInput,
    options?: WbRequestOptions,
  ) => Promise<PostV3DbwOrdersStatusDeliverResponse>;
  /**
   * Рекомендуемый метод без версии; использует `postV3DbwOrdersCourier`.
   *
   * POST /api/v3/dbw/orders/courier
   *
   * @see https://dev.wildberries.ru/docs/openapi/orders-dbw
   */
  readonly postDbwOrdersCourier: (
    input: PostV3DbwOrdersCourierInput,
    options?: WbRequestOptions,
  ) => Promise<PostV3DbwOrdersCourierResponse>;
  /**
   * Рекомендуемый метод без версии; использует `patchV3DbwOrdersOrderIdCancel`.
   *
   * PATCH /api/v3/dbw/orders/{orderId}/cancel
   *
   * @see https://dev.wildberries.ru/docs/openapi/orders-dbw
   */
  readonly patchDbwOrdersOrderIdCancel: (
    input: PatchV3DbwOrdersOrderIdCancelInput,
    options?: WbRequestOptions,
  ) => Promise<PatchV3DbwOrdersOrderIdCancelResponse>;
  /**
   * Рекомендуемый метод без версии; использует `postV3DbwOrdersMetaDetails`.
   *
   * POST /api/marketplace/v3/dbw/orders/meta/details
   *
   * @see https://dev.wildberries.ru/docs/openapi/orders-dbw
   */
  readonly postDbwOrdersMetaDetails: (
    input: PostV3DbwOrdersMetaDetailsInput,
    options?: WbRequestOptions,
  ) => Promise<PostV3DbwOrdersMetaDetailsResponse>;
  /**
   * Рекомендуемый метод без версии; использует `postV3DbwOrdersMetaDelete`.
   *
   * POST /api/marketplace/v3/dbw/orders/meta/delete
   *
   * @see https://dev.wildberries.ru/docs/openapi/orders-dbw
   */
  readonly postDbwOrdersMetaDelete: (
    input: PostV3DbwOrdersMetaDeleteInput,
    options?: WbRequestOptions,
  ) => Promise<PostV3DbwOrdersMetaDeleteResponse>;
  /**
   * Рекомендуемый метод без версии; использует `postV3DbwOrdersMetaSgtin`.
   *
   * POST /api/marketplace/v3/dbw/orders/meta/sgtin
   *
   * @see https://dev.wildberries.ru/docs/openapi/orders-dbw
   */
  readonly postDbwOrdersMetaSgtin: (
    input: PostV3DbwOrdersMetaSgtinInput,
    options?: WbRequestOptions,
  ) => Promise<PostV3DbwOrdersMetaSgtinResponse>;
  /**
   * Рекомендуемый метод без версии; использует `putV3DbwOrdersOrderIdMetaUin`.
   *
   * PUT /api/v3/dbw/orders/{orderId}/meta/uin
   *
   * @see https://dev.wildberries.ru/docs/openapi/orders-dbw
   */
  readonly putDbwOrdersOrderIdMetaUin: (
    input: PutV3DbwOrdersOrderIdMetaUinInput,
    options?: WbRequestOptions,
  ) => Promise<PutV3DbwOrdersOrderIdMetaUinResponse>;
  /**
   * Рекомендуемый метод без версии; использует `putV3DbwOrdersOrderIdMetaImei`.
   *
   * PUT /api/v3/dbw/orders/{orderId}/meta/imei
   *
   * @see https://dev.wildberries.ru/docs/openapi/orders-dbw
   */
  readonly putDbwOrdersOrderIdMetaImei: (
    input: PutV3DbwOrdersOrderIdMetaImeiInput,
    options?: WbRequestOptions,
  ) => Promise<PutV3DbwOrdersOrderIdMetaImeiResponse>;
  /**
   * Рекомендуемый метод без версии; использует `putV3DbwOrdersOrderIdMetaGtin`.
   *
   * PUT /api/v3/dbw/orders/{orderId}/meta/gtin
   *
   * @see https://dev.wildberries.ru/docs/openapi/orders-dbw
   */
  readonly putDbwOrdersOrderIdMetaGtin: (
    input: PutV3DbwOrdersOrderIdMetaGtinInput,
    options?: WbRequestOptions,
  ) => Promise<PutV3DbwOrdersOrderIdMetaGtinResponse>;
}

export interface WbDbsApi {
  /**
   * Получить список новых сборочных заданий
   *
   * Метод возвращает список всех новых [сборочных заданий](/openapi/orders-dbs#tag/dbsAssemblyOrders), которые есть у продавца на момент запроса.
   *
   * Лимит запросов (/docs/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца для методов сборочных заданий DBS:
   *
   * | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- |
   * | 1 мин | 300 запросов | 200 мс | 20 запросов |
   *
   * Один запрос с кодами ответов 4XX учитывается как 10 запросов
   *
   * GET /api/v3/dbs/orders/new
   *
   * Разделы WB: Сборочные задания DBS.
   *
   * @see https://dev.wildberries.ru/docs/openapi/dbs
   */
  readonly getV3DbsOrdersNew: (
    options?: WbRequestOptions,
  ) => Promise<GetV3DbsOrdersNewResponse>;
  /**
   * Получить информацию о завершенных сборочных заданиях
   *
   * Метод возвращает информацию о завершенных [сборочных заданиях](/openapi/orders-dbs#tag/dbsAssemblyOrders) после продажи или отмены заказа.
   *
   * Можно получить данные за заданный период, максимум 30 календарных дней одним запросом.
   *
   * Лимит запросов (/docs/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца для методов сборочных заданий DBS:
   *
   * | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- |
   * | 1 мин | 300 запросов | 200 мс | 20 запросов |
   *
   * Один запрос с кодами ответов 4XX учитывается как 10 запросов
   *
   * GET /api/v3/dbs/orders
   *
   * Разделы WB: Сборочные задания DBS.
   *
   * @see https://dev.wildberries.ru/docs/openapi/dbs
   */
  readonly getV3DbsOrders: (
    input: GetV3DbsOrdersInput,
    options?: WbRequestOptions,
  ) => Promise<GetV3DbsOrdersResponse>;
  /**
   * Получить цены продавца и суммы к оплате
   *
   * Метод возвращает:
   *  - цены продавца без учёта скидок
   *  - суммы к оплате покупателем с учетом всех скидок и кэшбека
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца для всех методов получения и удаления идентификаторов маркировки DBS:
   *
   * | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- |
   * | 1 мин | 150 запросов | 400 мс | 20 запросов |
   *
   * Один запрос с кодами ответов 4XX учитывается как 10 запросов
   *
   * POST /api/marketplace/v3/dbs/orders/final-price
   *
   * Разделы WB: Сборочные задания DBS.
   *
   * @see https://dev.wildberries.ru/docs/openapi/dbs
   */
  readonly postV3DbsOrdersFinalPrice: (
    input?: PostV3DbsOrdersFinalPriceInput,
    options?: WbRequestOptions,
  ) => Promise<PostV3DbsOrdersFinalPriceResponse>;
  /**
   * Получить информацию о платной доставке
   *
   * Метод возвращает информацию о платной доставке сборочных заданий, которые поступили на один склад (`warehouseId`) в рамках одной транзакции покупателя (`orderUid`).
   *
   * Лимит запросов (/docs/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца для методов сборочных заданий DBS:
   *
   * | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- |
   * | 1 мин | 300 запросов | 200 мс | 20 запросов |
   *
   * Один запрос с кодами ответов 4XX учитывается как 10 запросов
   *
   * POST /api/v3/dbs/groups/info
   *
   * Разделы WB: Сборочные задания DBS.
   *
   * @see https://dev.wildberries.ru/docs/openapi/dbs
   */
  readonly postV3DbsGroupsInfo: (
    input: PostV3DbsGroupsInfoInput,
    options?: WbRequestOptions,
  ) => Promise<PostV3DbsGroupsInfoResponse>;
  /**
   * Информация о покупателе
   *
   * Метод возвращает информацию о покупателе по ID сборочных заданий.
   *
   * Лимит запросов (/docs/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца для методов сборочных заданий DBS:
   *
   * | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- |
   * | 1 мин | 300 запросов | 200 мс | 20 запросов |
   *
   * Один запрос с кодами ответов 4XX учитывается как 10 запросов
   *
   * POST /api/v3/dbs/orders/client
   *
   * Разделы WB: Сборочные задания DBS.
   *
   * @see https://dev.wildberries.ru/docs/openapi/dbs
   */
  readonly postV3DbsOrdersClient: (
    input: PostV3DbsOrdersClientInput,
    options?: WbRequestOptions,
  ) => Promise<PostV3DbsOrdersClientResponse>;
  /**
   * Информация о покупателе B2B
   *
   * Метод возвращает данные B2B-покупателей по ID сборочных заданий:
   *  - ИНН
   *  - КПП
   *  - Наименование организации
   *
   * Лимит запросов (/docs/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца для методов сборочных заданий DBS:
   *
   * | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- |
   * | 1 мин | 300 запросов | 200 мс | 20 запросов |
   *
   * Один запрос с кодами ответов 4XX учитывается как 10 запросов
   *
   * POST /api/marketplace/v3/dbs/orders/b2b/info
   *
   * Разделы WB: Сборочные задания DBS.
   *
   * @see https://dev.wildberries.ru/docs/openapi/dbs
   */
  readonly postV3DbsOrdersB2bInfo: (
    input: PostV3DbsOrdersB2bInfoInput,
    options?: WbRequestOptions,
  ) => Promise<PostV3DbsOrdersB2bInfoResponse>;
  /**
   * Получить дату и время доставки
   *
   * Метод возвращает информацию о выбранных покупателем дате и времени доставки заказов.
   *
   * Лимит запросов (/docs/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца для методов сборочных заданий DBS:
   *
   * | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- |
   * | 1 мин | 300 запросов | 200 мс | 20 запросов |
   *
   * Один запрос с кодами ответов 4XX учитывается как 10 запросов
   *
   * POST /api/v3/dbs/orders/delivery-date
   *
   * Разделы WB: Сборочные задания DBS.
   *
   * @see https://dev.wildberries.ru/docs/openapi/dbs
   */
  readonly postV3DbsOrdersDeliveryDate: (
    input: PostV3DbsOrdersDeliveryDateInput,
    options?: WbRequestOptions,
  ) => Promise<PostV3DbsOrdersDeliveryDateResponse>;
  /**
   * Получить статусы сборочных заданий
   *
   * Метод возвращает статусы [сборочных заданий](/openapi/orders-dbs#tag/dbsAssemblyOrders) по их ID.
   *
   * `supplierStatus` — статус сборочного задания. Триггер его изменения — действие самого продавца.
   *
   * Возможные значения `supplierStatus`:
   * | Статус | Описание | Как перевести сборочное задание в данный статус |
   * | ------- | --------- | --------------------------------------|
   * | `new` | **Новое сборочное задание** | |
   * | `confirm` | **На сборке** | [Перевести сборочное задание на сборку](/openapi/orders-dbs#tag/dbsAssemblyOrders/operation/postV3DbsOrdersStatusConfirm)
   * | `deliver` | **В доставке** | [Перевести сборочное задание в доставку](/openapi/orders-dbs#tag/dbsAssemblyOrders/operation/postV3DbsOrdersStatusDeliver)
   * | `receive` | **Получено покупателем** | [Сообщить, что заказ принят покупателем](/openapi/orders-dbs#tag/dbsAssemblyOrders/operation/postV3DbsOrdersStatusReceive)
   *
   * | `reject` | **Отказ покупателя при получении** | [Сообщить, что покупатель отказался от заказа](/openapi/orders-dbs#tag/dbsAssemblyOrders/operation/postV3DbsOrdersStatusReject)
   * | `cancel` | **Отменено продавцом** | [Отменить сборочное задание](/openapi/orders-dbs#tag/dbsAssemblyOrders/operation/postV3DbsOrdersStatusCancel)
   * | `cancel_missed_call` | **Отмена по причине недозвона** | Статус меняется автоматически |
   *
   * `wbStatus` — статус системы Wildberries.
   *
   * Возможные значения `wbStatus`:
   * - `waiting` — сборочное задание в работе
   * - `sold` — заказ получен покупателем
   * - `canceled` — отмена сборочного задания
   * - `canceled_by_client` — покупатель отменил заказ при получении
   * - `declined_by_client` — покупатель отменил заказ в первый чаc
   *
   *  Отмена доступна покупателю в первый час с момента заказа, если заказ не переведен на сборку
   * - `defect` — отмена заказа по причине брака
   * - `ready_for_pickup` — заказ прибыл на ПВЗ
   * - `canceled_by_missed_call` — отмена по причине недозвона
   *
   * Лимит запросов (/docs/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца для методов сборочных заданий DBS:
   *
   * | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- |
   * | 1 мин | 300 запросов | 200 мс | 20 запросов |
   *
   * Один запрос с кодами ответов 4XX учитывается как 10 запросов
   *
   * POST /api/marketplace/v3/dbs/orders/status/info
   *
   * Разделы WB: Сборочные задания DBS.
   *
   * @see https://dev.wildberries.ru/docs/openapi/dbs
   */
  readonly postV3DbsOrdersStatusInfo: (
    input: PostV3DbsOrdersStatusInfoInput,
    options?: WbRequestOptions,
  ) => Promise<PostV3DbsOrdersStatusInfoResponse>;
  /**
   * Отменить сборочные задания
   *
   * Метод переводит [сборочные задания](/openapi/orders-dbs#tag/dbsAssemblyOrders) из [статусов](/openapi/orders-dbs#tag/dbsAssemblyOrders/operation/postV3DbsOrdersStatusInfo) `new` и `confirm` в статус `cancel` — отменено продавцом.
   * Отменить сборочные задания в статусе `deliver` невозможно.
   *
   * Лимит запросов (/docs/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца:
   *
   * | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- |
   * | 1 сек | 1 запрос | 1 сек | 10 запросов |
   *
   * Один запрос с кодами ответов 4XX учитывается как 10 запросов
   *
   * POST /api/marketplace/v3/dbs/orders/status/cancel
   *
   * Разделы WB: Сборочные задания DBS.
   *
   * @see https://dev.wildberries.ru/docs/openapi/dbs
   */
  readonly postV3DbsOrdersStatusCancel: (
    input: PostV3DbsOrdersStatusCancelInput,
    options?: WbRequestOptions,
  ) => Promise<PostV3DbsOrdersStatusCancelResponse>;
  /**
   * Перевести сборочные задания на сборку
   *
   * Метод переводит [сборочные задания](/openapi/orders-dbs#tag/dbsAssemblyOrders) из [статуса](/openapi/orders-dbs#tag/dbsAssemblyOrders/operation/postV3DbsOrdersStatusInfo) `new` в статус `confirm` — на сборке.
   *
   * Лимит запросов (/docs/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца:
   *
   * | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- |
   * | 1 сек | 1 запрос | 1 сек | 10 запросов |
   *
   * Один запрос с кодами ответов 4XX учитывается как 10 запросов
   *
   * POST /api/marketplace/v3/dbs/orders/status/confirm
   *
   * Разделы WB: Сборочные задания DBS.
   *
   * @see https://dev.wildberries.ru/docs/openapi/dbs
   */
  readonly postV3DbsOrdersStatusConfirm: (
    input: PostV3DbsOrdersStatusConfirmInput,
    options?: WbRequestOptions,
  ) => Promise<PostV3DbsOrdersStatusConfirmResponse>;
  /**
   * Получить стикеры для сборочных заданий с доставкой в ПВЗ
   *
   * Метод доступен (/openapi/api-information#tag/authorization/Pravila-ispolzovaniya-tokenov-dostupa-k-API) по
   *  Персональному токену,
   *  Сервисному токену,
   *  Базовому токену с секретом
   *
   * Метод возвращает стикеры для сборочных заданий с доставкой в ПВЗ в [статусах](/openapi/orders-dbs#tag/dbsAssemblyOrders/operation/postV3DbsOrdersStatusInfo):
   *  - `confirm` — на сборке
   *  - `deliver` — в доставке
   *
   * Получить стикеры можно только в размере 580x400 px в формате PDF.
   *
   * Лимит запросов (/docs/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца для методов сборочных заданий DBS:
   *
   * | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- |
   * | 1 мин | 300 запросов | 200 мс | 20 запросов |
   *
   * Один запрос с кодами ответов 4XX учитывается как 10 запросов
   *
   * POST /api/marketplace/v3/dbs/orders/stickers
   *
   * Разделы WB: Сборочные задания DBS.
   *
   * @see https://dev.wildberries.ru/docs/openapi/dbs
   */
  readonly postV3DbsOrdersStickers: (
    input: PostV3DbsOrdersStickersInput,
    options?: WbRequestOptions,
  ) => Promise<PostV3DbsOrdersStickersResponse>;
  /**
   * Перевести сборочные задания в доставку
   *
   * Метод переводит [сборочные задания](/openapi/orders-dbs#tag/dbsAssemblyOrders) из [статуса](/openapi/orders-dbs#tag/dbsAssemblyOrders/operation/postV3DbsOrdersStatusInfo) `confirm` в статус `deliver` — в доставке.
   *
   * Лимит запросов (/docs/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца:
   *
   * | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- |
   * | 1 сек | 1 запрос | 1 сек | 10 запросов |
   *
   * Один запрос с кодами ответов 4XX учитывается как 10 запросов
   *
   * POST /api/marketplace/v3/dbs/orders/status/deliver
   *
   * Разделы WB: Сборочные задания DBS.
   *
   * @see https://dev.wildberries.ru/docs/openapi/dbs
   */
  readonly postV3DbsOrdersStatusDeliver: (
    input: PostV3DbsOrdersStatusDeliverInput,
    options?: WbRequestOptions,
  ) => Promise<PostV3DbsOrdersStatusDeliverResponse>;
  /**
   * Сообщить о получении заказов
   *
   * Метод переводит [сборочные задания](/openapi/orders-dbs#tag/dbsAssemblyOrders) из [статуса](/openapi/orders-dbs#tag/dbsAssemblyOrders/operation/postV3DbsOrdersStatusInfo) `deliver` в статус `receive` — получено покупателем.
   *
   * Лимит запросов (/docs/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца:
   *
   * | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- |
   * | 1 сек | 1 запрос | 1 сек | 10 запросов |
   *
   * Один запрос с кодами ответов 4XX учитывается как 10 запросов
   *
   * POST /api/marketplace/v3/dbs/orders/status/receive
   *
   * Разделы WB: Сборочные задания DBS.
   *
   * @see https://dev.wildberries.ru/docs/openapi/dbs
   */
  readonly postV3DbsOrdersStatusReceive: (
    input?: PostV3DbsOrdersStatusReceiveInput,
    options?: WbRequestOptions,
  ) => Promise<PostV3DbsOrdersStatusReceiveResponse>;
  /**
   * Сообщить об отказе от заказов
   *
   * Метод переводит [сборочные задания](/openapi/orders-dbs#tag/dbsAssemblyOrders) из [статуса](/openapi/orders-dbs#tag/dbsAssemblyOrders/operation/postV3DbsOrdersStatusInfo) `deliver` в статус `reject` — отказ покупателя при получении.
   *
   * Лимит запросов (/docs/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца:
   *
   * | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- |
   * | 1 сек | 1 запрос | 1 сек | 10 запросов |
   *
   * Один запрос с кодами ответов 4XX учитывается как 10 запросов
   *
   * POST /api/marketplace/v3/dbs/orders/status/reject
   *
   * Разделы WB: Сборочные задания DBS.
   *
   * @see https://dev.wildberries.ru/docs/openapi/dbs
   */
  readonly postV3DbsOrdersStatusReject: (
    input?: PostV3DbsOrdersStatusRejectInput,
    options?: WbRequestOptions,
  ) => Promise<PostV3DbsOrdersStatusRejectResponse>;
  /**
   * Получить идентификаторы маркировки сборочных заданий
   *
   * Метод возвращает идентификаторы маркировки [сборочных заданий](/openapi/orders-dbs#tag/dbsAssemblyOrders) и статусы их проверки.
   *
   * Перечень идентификаторов маркировки, доступных для сборочного задания, можно получить в [списке новых сборочных заданий](/openapi/orders-dbs#tag/dbsAssemblyOrders/operation/getV3DbsOrdersNew), поле `requiredMeta`. Если поле `requiredMeta` не содержит какой-либо идентификатор маркировки, значит, у сборочного задания не может быть этого идентификатора — и добавить его нельзя.
   *
   * Возможные идентификаторы маркировки:
   *  - `imei` — [IMEI](/openapi/orders-dbs#tag/dbsLabelIdentifiers/operation/postV3DbsOrdersMetaImei)
   *  - `uin` — [УИН](/openapi/orders-dbs#tag/dbsLabelIdentifiers/operation/postV3DbsOrdersMetaUin)
   *  - `gtin` — [GTIN](/openapi/orders-dbs#tag/dbsLabelIdentifiers/operation/postV3DbsOrdersMetaGtin)
   *  - `sgtin` — [код маркировки Честного знака](/openapi/orders-dbs#tag/dbsLabelIdentifiers/operation/postV3DbsOrdersMetaSgtin)
   *  - `customsDeclaration` — [номер ДТ](/openapi/orders-dbs#tag/dbsLabelIdentifiers/operation/postV3DbsOrdersMetaCustomsDeclaration)
   *  - `originCountryCode` — [числовой код страны происхождения товара](/openapi/orders-dbs#tag/dbsLabelIdentifiers/operation/postV3DbsOrdersMetaCustomsDeclaration) из [Общероссийского классификатора стран мира](https://esnsi.gosuslugi.ru/classifiers/16269)
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца для всех методов получения и удаления идентификаторов маркировки DBS:
   *
   * | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- |
   * | 1 мин | 300 запросов | 200 мс | 20 запросов |
   *
   * Один запрос с кодами ответов 4XX учитывается как 10 запросов
   *
   * POST /api/marketplace/v3/dbs/orders/meta/details
   *
   * Разделы WB: Идентификаторы маркировки DBS.
   *
   * @see https://dev.wildberries.ru/docs/openapi/dbs
   */
  readonly postV3DbsOrdersMetaDetails: (
    input: PostV3DbsOrdersMetaDetailsInput,
    options?: WbRequestOptions,
  ) => Promise<PostV3DbsOrdersMetaDetailsResponse>;
  /**
   * Удалить идентификаторы маркировки сборочных заданий
   *
   * Метод удаляет значение указанных [идентификаторов маркировки сборочных заданий](/openapi/orders-dbs#tag/dbsLabelIdentifiers/operation/postV3DbsOrdersMetaDetails).
   *
   * В одном запросе можно удалить идентификаторы маркировки только одного типа. Укажите тип идентификаторов маркировки в запросе:
   *  - `imei` — [IMEI](/openapi/orders-dbs#tag/dbsLabelIdentifiers/operation/postV3DbsOrdersMetaImei)
   *  - `uin` — [УИН](/openapi/orders-dbs#tag/dbsLabelIdentifiers/operation/postV3DbsOrdersMetaUin)
   *  - `gtin` — [GTIN](/openapi/orders-dbs#tag/dbsLabelIdentifiers/operation/postV3DbsOrdersMetaGtin)
   *  - `sgtin` — [код маркировки Честного знака](/openapi/orders-dbs#tag/dbsLabelIdentifiers/operation/postV3DbsOrdersMetaSgtin)
   *  - `customsDeclaration` — [номер ДТ](/openapi/orders-dbs#tag/dbsLabelIdentifiers/operation/postV3DbsOrdersMetaCustomsDeclaration). При удалении номера ДТ также удаляется код страны происхождения товара — `originCountryCode`
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца для всех методов получения и удаления идентификаторов маркировки DBS:
   *
   * | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- |
   * | 1 мин | 150 запросов | 400 мс | 20 запросов |
   *
   * Один запрос с кодами ответов 4XX учитывается как 10 запросов
   *
   * POST /api/marketplace/v3/dbs/orders/meta/delete
   *
   * Разделы WB: Идентификаторы маркировки DBS.
   *
   * @see https://dev.wildberries.ru/docs/openapi/dbs
   */
  readonly postV3DbsOrdersMetaDelete: (
    input: PostV3DbsOrdersMetaDeleteInput,
    options?: WbRequestOptions,
  ) => Promise<PostV3DbsOrdersMetaDeleteResponse>;
  /**
   * Закрепить коды маркировки Честного знака за сборочными заданиями
   *
   * Метод обновляет код маркировки [Честного знака](https://честныйзнак.рф/) в [идентификаторах маркировки сборочных заданий](/openapi/orders-dbs#tag/dbsLabelIdentifiers/operation/postV3DbsOrdersMetaDetails).
   *
   * Закрепить код маркировки можно только за сборочным заданием в [статусе](/openapi/orders-dbs#tag/dbsAssemblyOrders/operation/postV3DbsOrdersStatusInfo) `confirm` и если в [идентификаторах маркировки сборочного задания](/openapi/orders-dbs#tag/dbsLabelIdentifiers/operation/postV3DbsOrdersMetaDetails) есть поле `sgtin`.
   *
   * Получить загруженные маркировки можно в [идентификаторах маркировки сборочного задания](/openapi/orders-dbs#tag/dbsLabelIdentifiers/operation/postV3DbsOrdersMetaDetails).
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца для всех методов закрепления идентификаторов маркировки DBS:
   *
   * | Тип | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- | --- |
   * | Персональный | 1 мин | 500 запросов | 120 мс | 20 запросов |
   * | Сервисный | 1 мин | 500 запросов | 120 мс | 20 запросов |
   * | Базовый с секретом | 1 мин | 500 запросов | 120 мс | 20 запросов |
   * | Базовый | 1 ч | 10 запросов | 6 мин | 1 запрос |
   *
   * Один запрос с кодами ответов 4XX учитывается как 10 запросов
   *
   * POST /api/marketplace/v3/dbs/orders/meta/sgtin
   *
   * Разделы WB: Идентификаторы маркировки DBS.
   *
   * @see https://dev.wildberries.ru/docs/openapi/dbs
   */
  readonly postV3DbsOrdersMetaSgtin: (
    input: PostV3DbsOrdersMetaSgtinInput,
    options?: WbRequestOptions,
  ) => Promise<PostV3DbsOrdersMetaSgtinResponse>;
  /**
   * Закрепить УИН за сборочными заданиями
   *
   * Метод обновляет УИН, уникальные идентификационные номера, в [идентификаторах маркировки сборочных заданий](/openapi/orders-dbs#tag/dbsLabelIdentifiers/operation/postV3DbsOrdersMetaDetails).
   * У одного сборочного задания может быть только один УИН.
   *
   * Закрепить УИН можно только за сборочным заданием в [статусе](/openapi/orders-dbs#tag/dbsAssemblyOrders/operation/postV3DbsOrdersStatusInfo) `confirm` и если в [идентификаторах маркировки сборочного задания](/openapi/orders-dbs#tag/dbsLabelIdentifiers/operation/postV3DbsOrdersMetaDetails) есть поле `uin`.
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца для всех методов закрепления идентификаторов маркировки DBS:
   *
   * | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- |
   * | 1 мин | 500 запросов | 120 мс | 20 запросов |
   *
   * Один запрос с кодами ответов 4XX учитывается как 10 запросов
   *
   * POST /api/marketplace/v3/dbs/orders/meta/uin
   *
   * Разделы WB: Идентификаторы маркировки DBS.
   *
   * @see https://dev.wildberries.ru/docs/openapi/dbs
   */
  readonly postV3DbsOrdersMetaUin: (
    input: PostV3DbsOrdersMetaUinInput,
    options?: WbRequestOptions,
  ) => Promise<PostV3DbsOrdersMetaUinResponse>;
  /**
   * Закрепить IMEI за сборочными заданиями
   *
   * Метод обновляет IMEI в [идентификаторах маркировки сборочных заданий](/openapi/orders-dbs#tag/dbsLabelIdentifiers/operation/postV3DbsOrdersMetaDetails).
   *
   * У одного сборочного задания может быть только один IMEI. Если у устройства два IMEI — **IMEI** и **IMEI2** или **IMEI1** и **IMEI2** — укажите только **IMEI** или **IMEI1**. **IMEI2** указывать не нужно.
   *
   * Закрепить IMEI можно только за сборочным заданием в [статусе](/openapi/orders-dbs#tag/dbsAssemblyOrders/operation/postV3DbsOrdersStatusInfo) `confirm` и если в [идентификаторах маркировки сборочного задания](/openapi/orders-dbs#tag/dbsLabelIdentifiers/operation/postV3DbsOrdersMetaDetails) есть поле `imei`.
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца для всех методов закрепления идентификаторов маркировки DBS:
   *
   * | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- |
   * | 1 мин | 500 запросов | 120 мс | 20 запросов |
   *
   * Один запрос с кодами ответов 4XX учитывается как 10 запросов
   *
   * POST /api/marketplace/v3/dbs/orders/meta/imei
   *
   * Разделы WB: Идентификаторы маркировки DBS.
   *
   * @see https://dev.wildberries.ru/docs/openapi/dbs
   */
  readonly postV3DbsOrdersMetaImei: (
    input: PostV3DbsOrdersMetaImeiInput,
    options?: WbRequestOptions,
  ) => Promise<PostV3DbsOrdersMetaImeiResponse>;
  /**
   * Закрепить GTIN за сборочными заданиями
   *
   * Метод обновляет GTIN, уникальный ID товара в Беларуси, в [идентификаторах маркировки сборочных заданий](/openapi/orders-dbs#tag/dbsLabelIdentifiers/operation/postV3DbsOrdersMetaDetails). У одного сборочного задания может быть только один GTIN.
   *
   * Закрепить GTIN можно только за сборочным заданием в [статусе](/openapi/orders-dbs#tag/dbsAssemblyOrders/operation/postV3DbsOrdersStatusInfo) `confirm` и если в [идентификаторах маркировки сборочного задания](/openapi/orders-dbs#tag/dbsLabelIdentifiers/operation/postV3DbsOrdersMetaDetails) есть поле `gtin`.
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца для всех методов закрепления идентификаторов маркировки DBS:
   *
   * | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- |
   * | 1 мин | 500 запросов | 120 мс | 20 запросов |
   *
   * Один запрос с кодами ответов 4XX учитывается как 10 запросов
   *
   * POST /api/marketplace/v3/dbs/orders/meta/gtin
   *
   * Разделы WB: Идентификаторы маркировки DBS.
   *
   * @see https://dev.wildberries.ru/docs/openapi/dbs
   */
  readonly postV3DbsOrdersMetaGtin: (
    input: PostV3DbsOrdersMetaGtinInput,
    options?: WbRequestOptions,
  ) => Promise<PostV3DbsOrdersMetaGtinResponse>;
  /**
   * Закрепить номера ДТ за сборочными заданиями
   *
   * Метод обновляет номера ДТ — деклараций на товары — и коды стран происхождения товаров в [идентификаторах маркировки сборочных заданий](/openapi/orders-dbs#tag/dbsLabelIdentifiers/operation/postV3DbsOrdersMetaDetails). У одного сборочного задания может быть только один номер ДТ.
   *
   * Закрепить номер ДТ можно, только если выполняются все условия:
   *  - сборочное задание имеет признак B2B-продажи — `"isB2b":true` в ответе метода [получения новых сборочных заданий](/openapi/orders-dbs#tag/dbsAssemblyOrders/operation/getV3DbsOrdersNew)
   *  - сборочное задание находится в [статусах](/openapi/orders-dbs#tag/dbsAssemblyOrders/operation/postV3DbsOrdersStatusInfo) `confirm` или `deliver`
   *  - поле `customsDeclaration` есть в [идентификаторах маркировки сборочных заданий](/openapi/orders-dbs#tag/dbsLabelIdentifiers/operation/postV3DbsOrdersMetaDetails)
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца для всех методов закрепления идентификаторов маркировки DBS:
   *
   * | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- |
   * | 1 мин | 500 запросов | 120 мс | 20 запросов |
   *
   * Один запрос с кодами ответов 4XX учитывается как 10 запросов
   *
   * POST /api/marketplace/v3/dbs/orders/meta/customs-declaration
   *
   * Разделы WB: Идентификаторы маркировки DBS.
   *
   * @see https://dev.wildberries.ru/docs/openapi/dbs
   */
  readonly postV3DbsOrdersMetaCustomsDeclaration: (
    input: PostV3DbsOrdersMetaCustomsDeclarationInput,
    options?: WbRequestOptions,
  ) => Promise<PostV3DbsOrdersMetaCustomsDeclarationResponse>;
  /**
   * Рекомендуемый метод без версии; использует `getV3DbsOrdersNew`.
   *
   * GET /api/v3/dbs/orders/new
   *
   * @see https://dev.wildberries.ru/docs/openapi/dbs
   */
  readonly getDbsOrdersNew: (
    options?: WbRequestOptions,
  ) => Promise<GetV3DbsOrdersNewResponse>;
  /**
   * Рекомендуемый метод без версии; использует `getV3DbsOrders`.
   *
   * GET /api/v3/dbs/orders
   *
   * @see https://dev.wildberries.ru/docs/openapi/dbs
   */
  readonly getDbsOrders: (
    input: GetV3DbsOrdersInput,
    options?: WbRequestOptions,
  ) => Promise<GetV3DbsOrdersResponse>;
  /**
   * Рекомендуемый метод без версии; использует `postV3DbsOrdersFinalPrice`.
   *
   * POST /api/marketplace/v3/dbs/orders/final-price
   *
   * @see https://dev.wildberries.ru/docs/openapi/dbs
   */
  readonly postDbsOrdersFinalPrice: (
    input?: PostV3DbsOrdersFinalPriceInput,
    options?: WbRequestOptions,
  ) => Promise<PostV3DbsOrdersFinalPriceResponse>;
  /**
   * Рекомендуемый метод без версии; использует `postV3DbsGroupsInfo`.
   *
   * POST /api/v3/dbs/groups/info
   *
   * @see https://dev.wildberries.ru/docs/openapi/dbs
   */
  readonly postDbsGroupsInfo: (
    input: PostV3DbsGroupsInfoInput,
    options?: WbRequestOptions,
  ) => Promise<PostV3DbsGroupsInfoResponse>;
  /**
   * Рекомендуемый метод без версии; использует `postV3DbsOrdersClient`.
   *
   * POST /api/v3/dbs/orders/client
   *
   * @see https://dev.wildberries.ru/docs/openapi/dbs
   */
  readonly postDbsOrdersClient: (
    input: PostV3DbsOrdersClientInput,
    options?: WbRequestOptions,
  ) => Promise<PostV3DbsOrdersClientResponse>;
  /**
   * Рекомендуемый метод без версии; использует `postV3DbsOrdersB2bInfo`.
   *
   * POST /api/marketplace/v3/dbs/orders/b2b/info
   *
   * @see https://dev.wildberries.ru/docs/openapi/dbs
   */
  readonly postDbsOrdersB2bInfo: (
    input: PostV3DbsOrdersB2bInfoInput,
    options?: WbRequestOptions,
  ) => Promise<PostV3DbsOrdersB2bInfoResponse>;
  /**
   * Рекомендуемый метод без версии; использует `postV3DbsOrdersDeliveryDate`.
   *
   * POST /api/v3/dbs/orders/delivery-date
   *
   * @see https://dev.wildberries.ru/docs/openapi/dbs
   */
  readonly postDbsOrdersDeliveryDate: (
    input: PostV3DbsOrdersDeliveryDateInput,
    options?: WbRequestOptions,
  ) => Promise<PostV3DbsOrdersDeliveryDateResponse>;
  /**
   * Рекомендуемый метод без версии; использует `postV3DbsOrdersStatusInfo`.
   *
   * POST /api/marketplace/v3/dbs/orders/status/info
   *
   * @see https://dev.wildberries.ru/docs/openapi/dbs
   */
  readonly postDbsOrdersStatusInfo: (
    input: PostV3DbsOrdersStatusInfoInput,
    options?: WbRequestOptions,
  ) => Promise<PostV3DbsOrdersStatusInfoResponse>;
  /**
   * Рекомендуемый метод без версии; использует `postV3DbsOrdersStatusCancel`.
   *
   * POST /api/marketplace/v3/dbs/orders/status/cancel
   *
   * @see https://dev.wildberries.ru/docs/openapi/dbs
   */
  readonly postDbsOrdersStatusCancel: (
    input: PostV3DbsOrdersStatusCancelInput,
    options?: WbRequestOptions,
  ) => Promise<PostV3DbsOrdersStatusCancelResponse>;
  /**
   * Рекомендуемый метод без версии; использует `postV3DbsOrdersStatusConfirm`.
   *
   * POST /api/marketplace/v3/dbs/orders/status/confirm
   *
   * @see https://dev.wildberries.ru/docs/openapi/dbs
   */
  readonly postDbsOrdersStatusConfirm: (
    input: PostV3DbsOrdersStatusConfirmInput,
    options?: WbRequestOptions,
  ) => Promise<PostV3DbsOrdersStatusConfirmResponse>;
  /**
   * Рекомендуемый метод без версии; использует `postV3DbsOrdersStickers`.
   *
   * POST /api/marketplace/v3/dbs/orders/stickers
   *
   * @see https://dev.wildberries.ru/docs/openapi/dbs
   */
  readonly postDbsOrdersStickers: (
    input: PostV3DbsOrdersStickersInput,
    options?: WbRequestOptions,
  ) => Promise<PostV3DbsOrdersStickersResponse>;
  /**
   * Рекомендуемый метод без версии; использует `postV3DbsOrdersStatusDeliver`.
   *
   * POST /api/marketplace/v3/dbs/orders/status/deliver
   *
   * @see https://dev.wildberries.ru/docs/openapi/dbs
   */
  readonly postDbsOrdersStatusDeliver: (
    input: PostV3DbsOrdersStatusDeliverInput,
    options?: WbRequestOptions,
  ) => Promise<PostV3DbsOrdersStatusDeliverResponse>;
  /**
   * Рекомендуемый метод без версии; использует `postV3DbsOrdersStatusReceive`.
   *
   * POST /api/marketplace/v3/dbs/orders/status/receive
   *
   * @see https://dev.wildberries.ru/docs/openapi/dbs
   */
  readonly postDbsOrdersStatusReceive: (
    input?: PostV3DbsOrdersStatusReceiveInput,
    options?: WbRequestOptions,
  ) => Promise<PostV3DbsOrdersStatusReceiveResponse>;
  /**
   * Рекомендуемый метод без версии; использует `postV3DbsOrdersStatusReject`.
   *
   * POST /api/marketplace/v3/dbs/orders/status/reject
   *
   * @see https://dev.wildberries.ru/docs/openapi/dbs
   */
  readonly postDbsOrdersStatusReject: (
    input?: PostV3DbsOrdersStatusRejectInput,
    options?: WbRequestOptions,
  ) => Promise<PostV3DbsOrdersStatusRejectResponse>;
  /**
   * Рекомендуемый метод без версии; использует `postV3DbsOrdersMetaDetails`.
   *
   * POST /api/marketplace/v3/dbs/orders/meta/details
   *
   * @see https://dev.wildberries.ru/docs/openapi/dbs
   */
  readonly postDbsOrdersMetaDetails: (
    input: PostV3DbsOrdersMetaDetailsInput,
    options?: WbRequestOptions,
  ) => Promise<PostV3DbsOrdersMetaDetailsResponse>;
  /**
   * Рекомендуемый метод без версии; использует `postV3DbsOrdersMetaDelete`.
   *
   * POST /api/marketplace/v3/dbs/orders/meta/delete
   *
   * @see https://dev.wildberries.ru/docs/openapi/dbs
   */
  readonly postDbsOrdersMetaDelete: (
    input: PostV3DbsOrdersMetaDeleteInput,
    options?: WbRequestOptions,
  ) => Promise<PostV3DbsOrdersMetaDeleteResponse>;
  /**
   * Рекомендуемый метод без версии; использует `postV3DbsOrdersMetaSgtin`.
   *
   * POST /api/marketplace/v3/dbs/orders/meta/sgtin
   *
   * @see https://dev.wildberries.ru/docs/openapi/dbs
   */
  readonly postDbsOrdersMetaSgtin: (
    input: PostV3DbsOrdersMetaSgtinInput,
    options?: WbRequestOptions,
  ) => Promise<PostV3DbsOrdersMetaSgtinResponse>;
  /**
   * Рекомендуемый метод без версии; использует `postV3DbsOrdersMetaUin`.
   *
   * POST /api/marketplace/v3/dbs/orders/meta/uin
   *
   * @see https://dev.wildberries.ru/docs/openapi/dbs
   */
  readonly postDbsOrdersMetaUin: (
    input: PostV3DbsOrdersMetaUinInput,
    options?: WbRequestOptions,
  ) => Promise<PostV3DbsOrdersMetaUinResponse>;
  /**
   * Рекомендуемый метод без версии; использует `postV3DbsOrdersMetaImei`.
   *
   * POST /api/marketplace/v3/dbs/orders/meta/imei
   *
   * @see https://dev.wildberries.ru/docs/openapi/dbs
   */
  readonly postDbsOrdersMetaImei: (
    input: PostV3DbsOrdersMetaImeiInput,
    options?: WbRequestOptions,
  ) => Promise<PostV3DbsOrdersMetaImeiResponse>;
  /**
   * Рекомендуемый метод без версии; использует `postV3DbsOrdersMetaGtin`.
   *
   * POST /api/marketplace/v3/dbs/orders/meta/gtin
   *
   * @see https://dev.wildberries.ru/docs/openapi/dbs
   */
  readonly postDbsOrdersMetaGtin: (
    input: PostV3DbsOrdersMetaGtinInput,
    options?: WbRequestOptions,
  ) => Promise<PostV3DbsOrdersMetaGtinResponse>;
  /**
   * Рекомендуемый метод без версии; использует `postV3DbsOrdersMetaCustomsDeclaration`.
   *
   * POST /api/marketplace/v3/dbs/orders/meta/customs-declaration
   *
   * @see https://dev.wildberries.ru/docs/openapi/dbs
   */
  readonly postDbsOrdersMetaCustomsDeclaration: (
    input: PostV3DbsOrdersMetaCustomsDeclarationInput,
    options?: WbRequestOptions,
  ) => Promise<PostV3DbsOrdersMetaCustomsDeclarationResponse>;
}

export interface WbInStorePickupApi {
  /**
   * Получить список новых сборочных заданий
   *
   * Метод возвращает список всех новых [сборочных заданий](/openapi/in-store-pickup#tag/inStorePickupAssemblyOrders), которые есть у продавца на момент запроса.
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца для методов сборочных заданий Самовывоз:
   *
   * | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- |
   * | 1 мин | 300 запросов | 200 мс | 20 запросов |
   *
   * Один запрос с кодами ответов 4XX учитывается как 10 запросов
   *
   * GET /api/v3/click-collect/orders/new
   *
   * Разделы WB: Сборочные задания Самовывоз.
   *
   * @see https://dev.wildberries.ru/docs/openapi/in-store-pickup
   */
  readonly getV3ClickCollectOrdersNew: (
    options?: WbRequestOptions,
  ) => Promise<GetV3ClickCollectOrdersNewResponse>;
  /**
   * Получить информацию о завершённых сборочных заданиях
   *
   * Метод возвращает информацию о завершённых сборочных заданиях после продажи или отмены заказа.
   *
   * Можно получить данные за заданный период, максимум 30 календарных дней одним запросом.
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца для методов сборочных заданий Самовывоз:
   *
   * | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- |
   * | 1 мин | 300 запросов | 200 мс | 20 запросов |
   *
   * Один запрос с кодами ответов 4XX учитывается как 10 запросов
   *
   * GET /api/v3/click-collect/orders
   *
   * Разделы WB: Сборочные задания Самовывоз.
   *
   * @see https://dev.wildberries.ru/docs/openapi/in-store-pickup
   */
  readonly getV3ClickCollectOrders: (
    input: GetV3ClickCollectOrdersInput,
    options?: WbRequestOptions,
  ) => Promise<GetV3ClickCollectOrdersResponse>;
  /**
   * Получить цены продавца и суммы к оплате
   *
   * Метод возвращает:
   *  - цены продавца без учёта скидок
   *  - суммы к оплате покупателем с учетом всех скидок и кэшбека
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца для всех методов получения и удаления идентификаторов маркировки Самовывоз:
   *
   * | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- |
   * | 1 мин | 150 запросов | 400 мс | 20 запросов |
   *
   * Один запрос с кодами ответов 4XX учитывается как 10 запросов
   *
   * POST /api/marketplace/v3/click-collect/orders/final-price
   *
   * Разделы WB: Сборочные задания Самовывоз.
   *
   * @see https://dev.wildberries.ru/docs/openapi/in-store-pickup
   */
  readonly postV3ClickCollectOrdersFinalPrice: (
    input?: PostV3ClickCollectOrdersFinalPriceInput,
    options?: WbRequestOptions,
  ) => Promise<PostV3ClickCollectOrdersFinalPriceResponse>;
  /**
   * Перевести сборочные задания на сборку
   *
   * Метод переводит [сборочные задания](/openapi/in-store-pickup#tag/inStorePickupAssemblyOrders) из [статуса](/openapi/in-store-pickup#tag/inStorePickupAssemblyOrders/operation/postV3ClickCollectOrdersStatusInfo) `new` — новый — в статус `confirm` — на сборке.
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца:
   *
   * | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- |
   * | 1 сек | 1 запрос | 1 сек | 10 запросов |
   *
   * Один запрос с кодами ответов 4XX учитывается как 10 запросов
   *
   * POST /api/marketplace/v3/click-collect/orders/status/confirm
   *
   * Разделы WB: Сборочные задания Самовывоз.
   *
   * @see https://dev.wildberries.ru/docs/openapi/in-store-pickup
   */
  readonly postV3ClickCollectOrdersStatusConfirm: (
    input?: PostV3ClickCollectOrdersStatusConfirmInput,
    options?: WbRequestOptions,
  ) => Promise<PostV3ClickCollectOrdersStatusConfirmResponse>;
  /**
   * Сообщить, что сборочные задания готовы к выдаче
   *
   * Метод переводит [сборочные задания](/openapi/in-store-pickup#tag/inStorePickupAssemblyOrders) из [статуса](/openapi/in-store-pickup#tag/inStorePickupAssemblyOrders/operation/postV3ClickCollectOrdersStatusInfo) `confirm` — на сборке — в статус `prepare` — готово к выдаче.
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца:
   *
   * | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- |
   * | 1 сек | 1 запрос | 1 сек | 10 запросов |
   *
   * Один запрос с кодами ответов 4XX учитывается как 10 запросов
   *
   * POST /api/marketplace/v3/click-collect/orders/status/prepare
   *
   * Разделы WB: Сборочные задания Самовывоз.
   *
   * @see https://dev.wildberries.ru/docs/openapi/in-store-pickup
   */
  readonly postV3ClickCollectOrdersStatusPrepare: (
    input?: PostV3ClickCollectOrdersStatusPrepareInput,
    options?: WbRequestOptions,
  ) => Promise<PostV3ClickCollectOrdersStatusPrepareResponse>;
  /**
   * Информация о покупателе
   *
   * Метод возвращает информацию о покупателе по ID сборочного задания.
   *
   * Доступно только для сборочных заданий в статусах:
   *  - `confirm` — на сборке
   *  - `prepare` — готов к выдаче
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца для методов сборочных заданий Самовывоз:
   *
   * | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- |
   * | 1 мин | 300 запросов | 200 мс | 20 запросов |
   *
   * Один запрос с кодами ответов 4XX учитывается как 10 запросов
   *
   * POST /api/v3/click-collect/orders/client
   *
   * Разделы WB: Сборочные задания Самовывоз.
   *
   * @see https://dev.wildberries.ru/docs/openapi/in-store-pickup
   */
  readonly postV3ClickCollectOrdersClient: (
    input: PostV3ClickCollectOrdersClientInput,
    options?: WbRequestOptions,
  ) => Promise<PostV3ClickCollectOrdersClientResponse>;
  /**
   * Проверить, что заказ принадлежит покупателю
   *
   * Метод сообщает, принадлежит ли проверяемый заказ покупателю или нет по переданному коду.
   *
   * Доступно, если хотя бы одно сборочное задание из заказа находится в статусе prepare - готов к выдаче.
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца:
   *
   * | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- |
   * | 1 мин | 30 запросов | 2 сек | 20 запросов |
   *
   * Один запрос с кодами ответов 4XX учитывается как 10 запросов
   *
   * POST /api/v3/click-collect/orders/client/identity
   *
   * Разделы WB: Сборочные задания Самовывоз.
   *
   * @see https://dev.wildberries.ru/docs/openapi/in-store-pickup
   */
  readonly postV3ClickCollectOrdersClientIdentity: (
    input: PostV3ClickCollectOrdersClientIdentityInput,
    options?: WbRequestOptions,
  ) => Promise<PostV3ClickCollectOrdersClientIdentityResponse>;
  /**
   * Сообщить, что заказы приняты покупателями
   *
   * Метод переводит [сборочные задания](/openapi/in-store-pickup#tag/inStorePickupAssemblyOrders) из [статуса](/openapi/in-store-pickup#tag/inStorePickupAssemblyOrders/operation/postV3ClickCollectOrdersStatusInfo) `prepare` — готово к выдаче — в статус `receive` — получено покупателем.
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца:
   *
   * | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- |
   * | 1 сек | 1 запрос | 1 сек | 10 запросов |
   *
   * Один запрос с кодами ответов 4XX учитывается как 10 запросов
   *
   * POST /api/marketplace/v3/click-collect/orders/status/receive
   *
   * Разделы WB: Сборочные задания Самовывоз.
   *
   * @see https://dev.wildberries.ru/docs/openapi/in-store-pickup
   */
  readonly postV3ClickCollectOrdersStatusReceive: (
    input?: PostV3ClickCollectOrdersStatusReceiveInput,
    options?: WbRequestOptions,
  ) => Promise<PostV3ClickCollectOrdersStatusReceiveResponse>;
  /**
   * Сообщить об отказе от заказов
   *
   * Метод переводит [сборочные задания](/openapi/in-store-pickup#tag/inStorePickupAssemblyOrders) из [статуса](/openapi/in-store-pickup#tag/inStorePickupAssemblyOrders/operation/postV3ClickCollectOrdersStatusInfo) `prepare` — готово к выдаче — в статус `reject` — отказ при получении.
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца:
   *
   * | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- |
   * | 1 сек | 1 запрос | 1 сек | 10 запросов |
   *
   * Один запрос с кодами ответов 4XX учитывается как 10 запросов
   *
   * POST /api/marketplace/v3/click-collect/orders/status/reject
   *
   * Разделы WB: Сборочные задания Самовывоз.
   *
   * @see https://dev.wildberries.ru/docs/openapi/in-store-pickup
   */
  readonly postV3ClickCollectOrdersStatusReject: (
    input?: PostV3ClickCollectOrdersStatusRejectInput,
    options?: WbRequestOptions,
  ) => Promise<PostV3ClickCollectOrdersStatusRejectResponse>;
  /**
   * Получить статусы сборочных заданий
   *
   * Метод возвращает статусы [сборочных заданий](/openapi/in-store-pickup#tag/inStorePickupAssemblyOrders) по их ID.
   *
   * `supplierStatus` — статус сборочного задания. Триггер его изменения - действие самого продавца.
   *
   * Возможные значения `supplierStatus`:
   * | Статус | Описание | Как перевести сборочное задание в данный статус |
   * | ------- | --------- | --------------------------------------|
   * | `new` | **Новое сборочное задание** |
   * | `confirm` | **На сборке** | [Перевести сборочное задание на сборку](/openapi/in-store-pickup#tag/inStorePickupAssemblyOrders/operation/postV3ClickCollectOrdersStatusConfirm)
   * | `prepare` | **Готов к выдаче** | [Сообщить, что сборочное задание готово к выдаче](/openapi/in-store-pickup#tag/inStorePickupAssemblyOrders/operation/postV3ClickCollectOrdersStatusPrepare)
   * | `receive` | **Получено покупателем** | [Сообщить, что заказ принят покупателем](/openapi/in-store-pickup#tag/inStorePickupAssemblyOrders/operation/postV3ClickCollectOrdersStatusReceive)
   * | `reject` | **Отказ покупателя при получении** | [Сообщить, что покупатель отказался от заказа](/openapi/in-store-pickup#tag/inStorePickupAssemblyOrders/operation/postV3ClickCollectOrdersStatusReject)
   * | `cancel` | **Отменено продавцом** | [Отменить сборочное задание](/openapi/in-store-pickup#tag/inStorePickupAssemblyOrders/operation/postV3ClickCollectOrdersStatusCancel)
   * | `cancel_shelf_life` | **Отмена по истечении срока хранения** | Переводится автоматически по возникновению события
   *
   * `wbStatus` — статус системы Wildberries.
   *
   * Возможные значения `wbStatus`:
   * - `waiting` - сборочное задание в работе
   * - `sold` - заказ получен покупателем
   * - `canceled` - отмена сборочного задания
   * - `canceled_by_client` - покупатель отменил заказ при получении
   * - `declined_by_client` - покупатель отменил заказ в первый чаc
   *
   *  Отмена доступна покупателю в первый час с момента заказа, если заказ не переведён на сборку
   * - `defect` - отмена заказа по причине брака
   * - `ready_for_pickup` - заказ готов к выдаче
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца:
   *
   * | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- |
   * | 1 сек | 1 запрос | 1 сек | 10 запросов |
   *
   * Один запрос с кодами ответов 4XX учитывается как 10 запросов
   *
   * POST /api/marketplace/v3/click-collect/orders/status/info
   *
   * Разделы WB: Сборочные задания Самовывоз.
   *
   * @see https://dev.wildberries.ru/docs/openapi/in-store-pickup
   */
  readonly postV3ClickCollectOrdersStatusInfo: (
    input: PostV3ClickCollectOrdersStatusInfoInput,
    options?: WbRequestOptions,
  ) => Promise<PostV3ClickCollectOrdersStatusInfoResponse>;
  /**
   * Отменить сборочные задания
   *
   * Переводит [сборочные задания](/openapi/in-store-pickup#tag/inStorePickupAssemblyOrders) из [статусов](/openapi/in-store-pickup#tag/inStorePickupAssemblyOrders/operation/postV3ClickCollectOrdersStatusInfo) `new`, `confirm`, `prepare` в статус `cancel` — отменено продавцом.
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца:
   *
   * | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- |
   * | 1 сек | 1 запрос | 1 сек | 10 запросов |
   *
   * Один запрос с кодами ответов 4XX учитывается как 10 запросов
   *
   * POST /api/marketplace/v3/click-collect/orders/status/cancel
   *
   * Разделы WB: Сборочные задания Самовывоз.
   *
   * @see https://dev.wildberries.ru/docs/openapi/in-store-pickup
   */
  readonly postV3ClickCollectOrdersStatusCancel: (
    input?: PostV3ClickCollectOrdersStatusCancelInput,
    options?: WbRequestOptions,
  ) => Promise<PostV3ClickCollectOrdersStatusCancelResponse>;
  /**
   * Получить идентификаторы маркировки сборочных заданий
   *
   * Метод возвращает идентификаторы маркировки [сборочных заданий ](/openapi/in-store-pickup#tag/inStorePickupAssemblyOrders) и статусы их проверки.
   *
   * Перечень идентификаторов маркировки, доступных для сборочного задания, можно получить в [списке новых сборочных заданий](/openapi/in-store-pickup#tag/inStorePickupAssemblyOrders/operation/getV3ClickCollectOrdersNew), поле `requiredMeta`. Если поле `requiredMeta` не содержит какой-либо идентификатор маркировки, значит, у сборочного задания не может быть этого идентификатора — и добавить его нельзя.
   *
   * Возможные идентификаторы маркировки:
   *  - `imei` — [IMEI](/openapi/in-store-pickup#tag/inStorePickupLabelIdentifiers/operation/postV3ClickCollectOrdersMetaImei)
   *  - `uin` — [УИН](/openapi/in-store-pickup#tag/inStorePickupLabelIdentifiers/operation/postV3ClickCollectOrdersMetaUin)
   *  - `gtin` — [GTIN](/openapi/in-store-pickup#tag/inStorePickupLabelIdentifiers/operation/postV3ClickCollectOrdersMetaGtin)
   *  - `sgtin` — [код маркировки](/openapi/in-store-pickup#tag/inStorePickupLabelIdentifiers/operation/postV3ClickCollectOrdersMetaSgtin)
   *  - `customsDeclaration` — [номер ДТ](/openapi/in-store-pickup#tag/inStorePickupLabelIdentifiers/operation/postV3ClickCollectOrdersMetaCustomsDeclaration)
   *  - `originCountryCode` — [числовой код страны происхождения товара](/openapi/in-store-pickup#tag/inStorePickupLabelIdentifiers/operation/postV3ClickCollectOrdersMetaCustomsDeclaration) из [Общероссийского классификатора стран мира](https://esnsi.gosuslugi.ru/classifiers/16269)
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца для всех методов получения и удаления идентификаторов маркировки Самовывоз:
   *
   * | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- |
   * | 1 мин | 150 запросов | 400 мс | 20 запросов |
   *
   * Один запрос с кодами ответов 4XX учитывается как 10 запросов
   *
   * POST /api/marketplace/v3/click-collect/orders/meta/details
   *
   * Разделы WB: Идентификаторы маркировки Самовывоз.
   *
   * @see https://dev.wildberries.ru/docs/openapi/in-store-pickup
   */
  readonly postV3ClickCollectOrdersMetaDetails: (
    input: PostV3ClickCollectOrdersMetaDetailsInput,
    options?: WbRequestOptions,
  ) => Promise<PostV3ClickCollectOrdersMetaDetailsResponse>;
  /**
   * Удалить идентификаторы маркировки сборочных заданий
   *
   * Метод удаляет значения указанных [идентификаторов маркировки сборочных заданий](/openapi/in-store-pickup#tag/inStorePickupLabelIdentifiers/operation/postV3ClickCollectOrdersMetaDetails).
   *
   * В одном запросе можно удалить идентификаторы маркировки только одного типа. Укажите тип идентификаторов маркировки в запросе:
   *  - `imei` — [IMEI](/openapi/in-store-pickup#tag/inStorePickupLabelIdentifiers/operation/postV3ClickCollectOrdersMetaImei)
   *  - `uin` — [УИН](/openapi/in-store-pickup#tag/inStorePickupLabelIdentifiers/operation/postV3ClickCollectOrdersMetaUin)
   *  - `gtin` — [GTIN](/openapi/in-store-pickup#tag/inStorePickupLabelIdentifiers/operation/postV3ClickCollectOrdersMetaGtin)
   *  - `sgtin` — [код маркировки](/openapi/in-store-pickup#tag/inStorePickupLabelIdentifiers/operation/postV3ClickCollectOrdersMetaSgtin)
   *  - `customsDeclaration` — [номер ДТ](/openapi/in-store-pickup#tag/inStorePickupLabelIdentifiers/operation/postV3ClickCollectOrdersMetaCustomsDeclaration). При удалении номера ДТ также удаляется код страны происхождения товара — `originCountryCode`
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца для всех методов получения и удаления идентификаторов маркировки Самовывоз:
   *
   * | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- |
   * | 1 мин | 150 запросов | 400 мс | 20 запросов |
   *
   * Один запрос с кодами ответов 4XX учитывается как 10 запросов
   *
   * POST /api/marketplace/v3/click-collect/orders/meta/delete
   *
   * Разделы WB: Идентификаторы маркировки Самовывоз.
   *
   * @see https://dev.wildberries.ru/docs/openapi/in-store-pickup
   */
  readonly postV3ClickCollectOrdersMetaDelete: (
    input: PostV3ClickCollectOrdersMetaDeleteInput,
    options?: WbRequestOptions,
  ) => Promise<PostV3ClickCollectOrdersMetaDeleteResponse>;
  /**
   * Закрепить коды маркировки Честного знака за сборочными заданиями
   *
   * Метод обновляет код маркировки [Честного знака](https://честныйзнак.рф/) в [идентификаторах маркировки сборочных заданий](/openapi/in-store-pickup#tag/inStorePickupLabelIdentifiers/operation/postV3ClickCollectOrdersMetaDetails).
   *
   * Закрепить код маркировки можно только за сборочным заданием в [статусе](/openapi/in-store-pickup#tag/inStorePickupAssemblyOrders/operation/postV3ClickCollectOrdersStatusInfo) `confirm` и если в [идентификаторах маркировки сборочного задания](/openapi/in-store-pickup#tag/inStorePickupLabelIdentifiers/operation/postV3ClickCollectOrdersMetaDetails) есть поле `sgtin`.
   *
   * Получить загруженные маркировки можно в [идентификаторах маркировки сборочного задания](/openapi/in-store-pickup#tag/inStorePickupLabelIdentifiers/operation/postV3ClickCollectOrdersMetaDetails).
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца для всех методов закрепления идентификаторов маркировки Самовывоз:
   *
   * | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- |
   * | 1 мин | 20 запросов | 3 сек | 500 запросов |
   *
   * Один запрос с кодами ответов 4XX учитывается как 10 запросов
   *
   * POST /api/marketplace/v3/click-collect/orders/meta/sgtin
   *
   * Разделы WB: Идентификаторы маркировки Самовывоз.
   *
   * @see https://dev.wildberries.ru/docs/openapi/in-store-pickup
   */
  readonly postV3ClickCollectOrdersMetaSgtin: (
    input: PostV3ClickCollectOrdersMetaSgtinInput,
    options?: WbRequestOptions,
  ) => Promise<PostV3ClickCollectOrdersMetaSgtinResponse>;
  /**
   * Закрепить УИН за сборочными заданиями
   *
   * Метод обновляет УИН, уникальные идентификационные номера, в [идентификаторах маркировки сборочных заданий](/openapi/in-store-pickup#tag/inStorePickupLabelIdentifiers/operation/postV3ClickCollectOrdersMetaDetails). У одного сборочного задания может быть только один УИН.
   *
   * Закрепить УИН можно только за сборочным заданием в [статусе](/openapi/in-store-pickup#tag/inStorePickupAssemblyOrders/operation/postV3ClickCollectOrdersStatusInfo) `confirm` и если в [идентификаторах маркировки сборочного задания](/openapi/in-store-pickup#tag/inStorePickupLabelIdentifiers/operation/postV3ClickCollectOrdersMetaDetails) есть поле `uin`.
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца для всех методов закрепления идентификаторов маркировки Самовывоз:
   *
   * | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- |
   * | 1 мин | 20 запросов | 3 сек | 500 запросов |
   *
   * Один запрос с кодами ответов 4XX учитывается как 10 запросов
   *
   * POST /api/marketplace/v3/click-collect/orders/meta/uin
   *
   * Разделы WB: Идентификаторы маркировки Самовывоз.
   *
   * @see https://dev.wildberries.ru/docs/openapi/in-store-pickup
   */
  readonly postV3ClickCollectOrdersMetaUin: (
    input: PostV3ClickCollectOrdersMetaUinInput,
    options?: WbRequestOptions,
  ) => Promise<PostV3ClickCollectOrdersMetaUinResponse>;
  /**
   * Закрепить IMEI за сборочными заданиями
   *
   * Метод обновляет IMEI в [идентификаторах маркировки сборочных заданий](/openapi/in-store-pickup#tag/inStorePickupLabelIdentifiers/operation/postV3ClickCollectOrdersMetaDetails).
   *
   * У одного сборочного задания может быть только один IMEI. Если у устройства два IMEI — **IMEI** и **IMEI2** или **IMEI1** и **IMEI2** — укажите только **IMEI** или **IMEI1**. **IMEI2** указывать не нужно.
   *
   * Закрепить IMEI можно только за сборочным заданием в [статусе](/openapi/in-store-pickup#tag/inStorePickupAssemblyOrders/operation/postV3ClickCollectOrdersStatusInfo) `confirm` и если в [идентификаторах маркировки сборочного задания](/openapi/in-store-pickup#tag/inStorePickupLabelIdentifiers/operation/postV3ClickCollectOrdersMetaDetails) есть поле `imei`.
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца для всех методов закрепления идентификаторов маркировки Самовывоз:
   *
   * | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- |
   * | 1 мин | 20 запросов | 3 сек | 500 запросов |
   *
   * Один запрос с кодами ответов 4XX учитывается как 10 запросов
   *
   * POST /api/marketplace/v3/click-collect/orders/meta/imei
   *
   * Разделы WB: Идентификаторы маркировки Самовывоз.
   *
   * @see https://dev.wildberries.ru/docs/openapi/in-store-pickup
   */
  readonly postV3ClickCollectOrdersMetaImei: (
    input: PostV3ClickCollectOrdersMetaImeiInput,
    options?: WbRequestOptions,
  ) => Promise<PostV3ClickCollectOrdersMetaImeiResponse>;
  /**
   * Закрепить GTIN за сборочными заданиями
   *
   * Метод обновляет GTIN, уникальный ID товара в Беларуси, в [идентификаторах маркировки сборочных заданий](/openapi/in-store-pickup#tag/inStorePickupLabelIdentifiers/operation/postV3ClickCollectOrdersMetaDetails). У одного сборочного задания может быть только один GTIN.
   *
   * Закрепить GTIN можно только за сборочным заданием в [статусе](/openapi/in-store-pickup#tag/inStorePickupAssemblyOrders/operation/postV3ClickCollectOrdersStatusInfo) `confirm` и если в [идентификаторах маркировки сборочного задания](/openapi/in-store-pickup#tag/inStorePickupLabelIdentifiers/operation/postV3ClickCollectOrdersMetaDetails) есть поле `gtin`.
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца для всех методов закрепления идентификаторов маркировки Самовывоз:
   *
   * | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- |
   * | 1 мин | 20 запросов | 3 сек | 500 запросов |
   *
   * Один запрос с кодами ответов 4XX учитывается как 10 запросов
   *
   * POST /api/marketplace/v3/click-collect/orders/meta/gtin
   *
   * Разделы WB: Идентификаторы маркировки Самовывоз.
   *
   * @see https://dev.wildberries.ru/docs/openapi/in-store-pickup
   */
  readonly postV3ClickCollectOrdersMetaGtin: (
    input: PostV3ClickCollectOrdersMetaGtinInput,
    options?: WbRequestOptions,
  ) => Promise<PostV3ClickCollectOrdersMetaGtinResponse>;
  /**
   * Закрепить номера ДТ за сборочными заданиями
   *
   * Метод обновляет номера ДТ — деклараций на товары — и коды стран происхождения товаров в [идентификаторах маркировки сборочных заданий](/openapi/in-store-pickup#tag/inStorePickupLabelIdentifiers/operation/postV3ClickCollectOrdersMetaDetails). У одного сборочного задания может быть только один номер ДТ.
   *
   * Закрепить номер ДТ можно, только если выполняются все условия:
   *  - сборочное задание имеет признак B2B-продажи — `"isB2b":true` в ответе метода [получения новых сборочных заданий](/openapi/in-store-pickup#tag/inStorePickupAssemblyOrders/operation/getV3ClickCollectOrdersNew)
   *  - сборочное задание находится в [статусах](/openapi/in-store-pickup#tag/inStorePickupAssemblyOrders/operation/postV3ClickCollectOrdersStatusInfo) `confirm` или `prepare`
   *  - поле `customsDeclaration` есть в [идентификаторах маркировки сборочного задания](/openapi/in-store-pickup#tag/inStorePickupLabelIdentifiers/operation/postV3ClickCollectOrdersMetaDetails)
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца для всех методов закрепления идентификаторов маркировки Самовывоз:
   *
   * | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- |
   * | 1 мин | 20 запросов | 3 сек | 500 запросов |
   *
   * Один запрос с кодами ответов 4XX учитывается как 10 запросов
   *
   * POST /api/marketplace/v3/click-collect/orders/meta/customs-declaration
   *
   * Разделы WB: Идентификаторы маркировки Самовывоз.
   *
   * @see https://dev.wildberries.ru/docs/openapi/in-store-pickup
   */
  readonly postV3ClickCollectOrdersMetaCustomsDeclaration: (
    input: PostV3ClickCollectOrdersMetaCustomsDeclarationInput,
    options?: WbRequestOptions,
  ) => Promise<PostV3ClickCollectOrdersMetaCustomsDeclarationResponse>;
  /**
   * Рекомендуемый метод без версии; использует `getV3ClickCollectOrdersNew`.
   *
   * GET /api/v3/click-collect/orders/new
   *
   * @see https://dev.wildberries.ru/docs/openapi/in-store-pickup
   */
  readonly getClickCollectOrdersNew: (
    options?: WbRequestOptions,
  ) => Promise<GetV3ClickCollectOrdersNewResponse>;
  /**
   * Рекомендуемый метод без версии; использует `getV3ClickCollectOrders`.
   *
   * GET /api/v3/click-collect/orders
   *
   * @see https://dev.wildberries.ru/docs/openapi/in-store-pickup
   */
  readonly getClickCollectOrders: (
    input: GetV3ClickCollectOrdersInput,
    options?: WbRequestOptions,
  ) => Promise<GetV3ClickCollectOrdersResponse>;
  /**
   * Рекомендуемый метод без версии; использует `postV3ClickCollectOrdersFinalPrice`.
   *
   * POST /api/marketplace/v3/click-collect/orders/final-price
   *
   * @see https://dev.wildberries.ru/docs/openapi/in-store-pickup
   */
  readonly postClickCollectOrdersFinalPrice: (
    input?: PostV3ClickCollectOrdersFinalPriceInput,
    options?: WbRequestOptions,
  ) => Promise<PostV3ClickCollectOrdersFinalPriceResponse>;
  /**
   * Рекомендуемый метод без версии; использует `postV3ClickCollectOrdersStatusConfirm`.
   *
   * POST /api/marketplace/v3/click-collect/orders/status/confirm
   *
   * @see https://dev.wildberries.ru/docs/openapi/in-store-pickup
   */
  readonly postClickCollectOrdersStatusConfirm: (
    input?: PostV3ClickCollectOrdersStatusConfirmInput,
    options?: WbRequestOptions,
  ) => Promise<PostV3ClickCollectOrdersStatusConfirmResponse>;
  /**
   * Рекомендуемый метод без версии; использует `postV3ClickCollectOrdersStatusPrepare`.
   *
   * POST /api/marketplace/v3/click-collect/orders/status/prepare
   *
   * @see https://dev.wildberries.ru/docs/openapi/in-store-pickup
   */
  readonly postClickCollectOrdersStatusPrepare: (
    input?: PostV3ClickCollectOrdersStatusPrepareInput,
    options?: WbRequestOptions,
  ) => Promise<PostV3ClickCollectOrdersStatusPrepareResponse>;
  /**
   * Рекомендуемый метод без версии; использует `postV3ClickCollectOrdersClient`.
   *
   * POST /api/v3/click-collect/orders/client
   *
   * @see https://dev.wildberries.ru/docs/openapi/in-store-pickup
   */
  readonly postClickCollectOrdersClient: (
    input: PostV3ClickCollectOrdersClientInput,
    options?: WbRequestOptions,
  ) => Promise<PostV3ClickCollectOrdersClientResponse>;
  /**
   * Рекомендуемый метод без версии; использует `postV3ClickCollectOrdersClientIdentity`.
   *
   * POST /api/v3/click-collect/orders/client/identity
   *
   * @see https://dev.wildberries.ru/docs/openapi/in-store-pickup
   */
  readonly postClickCollectOrdersClientIdentity: (
    input: PostV3ClickCollectOrdersClientIdentityInput,
    options?: WbRequestOptions,
  ) => Promise<PostV3ClickCollectOrdersClientIdentityResponse>;
  /**
   * Рекомендуемый метод без версии; использует `postV3ClickCollectOrdersStatusReceive`.
   *
   * POST /api/marketplace/v3/click-collect/orders/status/receive
   *
   * @see https://dev.wildberries.ru/docs/openapi/in-store-pickup
   */
  readonly postClickCollectOrdersStatusReceive: (
    input?: PostV3ClickCollectOrdersStatusReceiveInput,
    options?: WbRequestOptions,
  ) => Promise<PostV3ClickCollectOrdersStatusReceiveResponse>;
  /**
   * Рекомендуемый метод без версии; использует `postV3ClickCollectOrdersStatusReject`.
   *
   * POST /api/marketplace/v3/click-collect/orders/status/reject
   *
   * @see https://dev.wildberries.ru/docs/openapi/in-store-pickup
   */
  readonly postClickCollectOrdersStatusReject: (
    input?: PostV3ClickCollectOrdersStatusRejectInput,
    options?: WbRequestOptions,
  ) => Promise<PostV3ClickCollectOrdersStatusRejectResponse>;
  /**
   * Рекомендуемый метод без версии; использует `postV3ClickCollectOrdersStatusInfo`.
   *
   * POST /api/marketplace/v3/click-collect/orders/status/info
   *
   * @see https://dev.wildberries.ru/docs/openapi/in-store-pickup
   */
  readonly postClickCollectOrdersStatusInfo: (
    input: PostV3ClickCollectOrdersStatusInfoInput,
    options?: WbRequestOptions,
  ) => Promise<PostV3ClickCollectOrdersStatusInfoResponse>;
  /**
   * Рекомендуемый метод без версии; использует `postV3ClickCollectOrdersStatusCancel`.
   *
   * POST /api/marketplace/v3/click-collect/orders/status/cancel
   *
   * @see https://dev.wildberries.ru/docs/openapi/in-store-pickup
   */
  readonly postClickCollectOrdersStatusCancel: (
    input?: PostV3ClickCollectOrdersStatusCancelInput,
    options?: WbRequestOptions,
  ) => Promise<PostV3ClickCollectOrdersStatusCancelResponse>;
  /**
   * Рекомендуемый метод без версии; использует `postV3ClickCollectOrdersMetaDetails`.
   *
   * POST /api/marketplace/v3/click-collect/orders/meta/details
   *
   * @see https://dev.wildberries.ru/docs/openapi/in-store-pickup
   */
  readonly postClickCollectOrdersMetaDetails: (
    input: PostV3ClickCollectOrdersMetaDetailsInput,
    options?: WbRequestOptions,
  ) => Promise<PostV3ClickCollectOrdersMetaDetailsResponse>;
  /**
   * Рекомендуемый метод без версии; использует `postV3ClickCollectOrdersMetaDelete`.
   *
   * POST /api/marketplace/v3/click-collect/orders/meta/delete
   *
   * @see https://dev.wildberries.ru/docs/openapi/in-store-pickup
   */
  readonly postClickCollectOrdersMetaDelete: (
    input: PostV3ClickCollectOrdersMetaDeleteInput,
    options?: WbRequestOptions,
  ) => Promise<PostV3ClickCollectOrdersMetaDeleteResponse>;
  /**
   * Рекомендуемый метод без версии; использует `postV3ClickCollectOrdersMetaSgtin`.
   *
   * POST /api/marketplace/v3/click-collect/orders/meta/sgtin
   *
   * @see https://dev.wildberries.ru/docs/openapi/in-store-pickup
   */
  readonly postClickCollectOrdersMetaSgtin: (
    input: PostV3ClickCollectOrdersMetaSgtinInput,
    options?: WbRequestOptions,
  ) => Promise<PostV3ClickCollectOrdersMetaSgtinResponse>;
  /**
   * Рекомендуемый метод без версии; использует `postV3ClickCollectOrdersMetaUin`.
   *
   * POST /api/marketplace/v3/click-collect/orders/meta/uin
   *
   * @see https://dev.wildberries.ru/docs/openapi/in-store-pickup
   */
  readonly postClickCollectOrdersMetaUin: (
    input: PostV3ClickCollectOrdersMetaUinInput,
    options?: WbRequestOptions,
  ) => Promise<PostV3ClickCollectOrdersMetaUinResponse>;
  /**
   * Рекомендуемый метод без версии; использует `postV3ClickCollectOrdersMetaImei`.
   *
   * POST /api/marketplace/v3/click-collect/orders/meta/imei
   *
   * @see https://dev.wildberries.ru/docs/openapi/in-store-pickup
   */
  readonly postClickCollectOrdersMetaImei: (
    input: PostV3ClickCollectOrdersMetaImeiInput,
    options?: WbRequestOptions,
  ) => Promise<PostV3ClickCollectOrdersMetaImeiResponse>;
  /**
   * Рекомендуемый метод без версии; использует `postV3ClickCollectOrdersMetaGtin`.
   *
   * POST /api/marketplace/v3/click-collect/orders/meta/gtin
   *
   * @see https://dev.wildberries.ru/docs/openapi/in-store-pickup
   */
  readonly postClickCollectOrdersMetaGtin: (
    input: PostV3ClickCollectOrdersMetaGtinInput,
    options?: WbRequestOptions,
  ) => Promise<PostV3ClickCollectOrdersMetaGtinResponse>;
  /**
   * Рекомендуемый метод без версии; использует `postV3ClickCollectOrdersMetaCustomsDeclaration`.
   *
   * POST /api/marketplace/v3/click-collect/orders/meta/customs-declaration
   *
   * @see https://dev.wildberries.ru/docs/openapi/in-store-pickup
   */
  readonly postClickCollectOrdersMetaCustomsDeclaration: (
    input: PostV3ClickCollectOrdersMetaCustomsDeclarationInput,
    options?: WbRequestOptions,
  ) => Promise<PostV3ClickCollectOrdersMetaCustomsDeclarationResponse>;
}

export interface WbOrdersFbwApi {
  /**
   * Опции приёмки
   *
   * Метод возвращает информацию о том, какие склады и типы упаковки доступны для поставки. Список складов определяется по баркоду и количеству товара.
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца:
   *
   * | Тип | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- | --- |
   * | Персональный | 1 мин | 6 запросов | 10 сек | 6 запросов |
   * | Сервисный | 1 мин | 6 запросов | 10 сек | 6 запросов |
   * | Базовый с секретом | 1 мин | 6 запросов | 10 сек | 6 запросов |
   * | Базовый | 1 ч | 2 запроса | 30 мин | 1 запрос |
   *
   * POST /api/v1/acceptance/options
   *
   * Разделы WB: Информация для формирования поставок.
   *
   * @see https://dev.wildberries.ru/docs/openapi/orders-fbw
   */
  readonly postV1AcceptanceOptions: (
    input: PostV1AcceptanceOptionsInput,
    options?: WbRequestOptions,
  ) => Promise<PostV1AcceptanceOptionsResponse>;
  /**
   * Список складов
   *
   * Метод возвращает список складов WB.
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца:
   *
   * | Тип | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- | --- |
   * | Персональный | 1 мин | 6 запросов | 10 сек | 6 запросов |
   * | Сервисный | 1 мин | 6 запросов | 10 сек | 6 запросов |
   * | Базовый с секретом | 1 мин | 6 запросов | 10 сек | 6 запросов |
   * | Базовый | 12 ч | 1 запрос | 12 ч | 1 запрос |
   *
   * GET /api/v1/warehouses
   *
   * Разделы WB: Информация для формирования поставок.
   *
   * @see https://dev.wildberries.ru/docs/openapi/orders-fbw
   */
  readonly getV1Warehouses: (
    options?: WbRequestOptions,
  ) => Promise<GetV1WarehousesResponse>;
  /**
   * Транзитные направления
   *
   * Метод возвращает информацию о доступных транзитных направлениях.
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца:
   *
   * | Тип | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- | --- |
   * | Персональный | 1 мин | 6 запросов | 10 сек | 10 запросов |
   * | Сервисный | 1 мин | 6 запросов | 10 сек | 10 запросов |
   * | Базовый с секретом | 1 мин | 6 запросов | 10 сек | 10 запросов |
   * | Базовый | 12 ч | 1 запрос | 12 ч | 1 запрос |
   *
   * GET /api/v1/transit-tariffs
   *
   * Разделы WB: Информация для формирования поставок.
   *
   * @see https://dev.wildberries.ru/docs/openapi/orders-fbw
   */
  readonly getV1TransitTariffs: (
    options?: WbRequestOptions,
  ) => Promise<GetV1TransitTariffsResponse>;
  /**
   * Список поставок
   *
   * Метод возвращает список поставок, по умолчанию — последние 1000 поставок.
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца:
   *
   * | Тип | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- | --- |
   * | Персональный | 1 мин | 30 запросов | 2 сек | 10 запросов |
   * | Сервисный | 1 мин | 30 запросов | 2 сек | 10 запросов |
   * | Базовый с секретом | 1 мин | 30 запросов | 2 сек | 10 запросов |
   * | Базовый | 1 ч | 2 запроса | 30 мин | 1 запрос |
   *
   * POST /api/v1/supplies
   *
   * Разделы WB: Информация о поставках.
   *
   * @see https://dev.wildberries.ru/docs/openapi/orders-fbw
   */
  readonly postV1Supplies: (
    input: PostV1SuppliesInput,
    options?: WbRequestOptions,
  ) => Promise<PostV1SuppliesResponse>;
  /**
   * Детали поставки
   *
   * Метод возвращает детали поставки по ID.
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца:
   *
   * | Тип | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- | --- |
   * | Персональный | 1 мин | 30 запросов | 2 сек | 10 запросов |
   * | Сервисный | 1 мин | 30 запросов | 2 сек | 10 запросов |
   * | Базовый с секретом | 1 мин | 30 запросов | 2 сек | 10 запросов |
   * | Базовый | 1 ч | 2 запроса | 30 мин | 1 запрос |
   *
   * GET /api/v1/supplies/{ID}
   *
   * Разделы WB: Информация о поставках.
   *
   * @see https://dev.wildberries.ru/docs/openapi/orders-fbw
   */
  readonly getV1SuppliesId: (
    input: GetV1SuppliesIdInput,
    options?: WbRequestOptions,
  ) => Promise<GetV1SuppliesIdResponse>;
  /**
   * Товары поставки
   *
   * Метод возвращает информацию о товарах в поставке.
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца:
   *
   * | Тип | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- | --- |
   * | Персональный | 1 мин | 30 запросов | 2 сек | 10 запросов |
   * | Сервисный | 1 мин | 30 запросов | 2 сек | 10 запросов |
   * | Базовый с секретом | 1 мин | 30 запросов | 2 сек | 10 запросов |
   * | Базовый | 1 ч | 2 запроса | 30 мин | 1 запрос |
   *
   * GET /api/v1/supplies/{ID}/goods
   *
   * Разделы WB: Информация о поставках.
   *
   * @see https://dev.wildberries.ru/docs/openapi/orders-fbw
   */
  readonly getV1SuppliesIdGoods: (
    input: GetV1SuppliesIdGoodsInput,
    options?: WbRequestOptions,
  ) => Promise<GetV1SuppliesIdGoodsResponse>;
  /**
   * Упаковка поставки
   *
   * Метод возвращает информацию об упаковке поставки.
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца:
   *
   * | Тип | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- | --- |
   * | Персональный | 1 мин | 30 запросов | 2 сек | 10 запросов |
   * | Сервисный | 1 мин | 30 запросов | 2 сек | 10 запросов |
   * | Базовый с секретом | 1 мин | 30 запросов | 2 сек | 10 запросов |
   * | Базовый | 1 ч | 2 запроса | 30 мин | 1 запрос |
   *
   * GET /api/v1/supplies/{ID}/package
   *
   * Разделы WB: Информация о поставках.
   *
   * @see https://dev.wildberries.ru/docs/openapi/orders-fbw
   */
  readonly getV1SuppliesIdPackage: (
    input: GetV1SuppliesIdPackageInput,
    options?: WbRequestOptions,
  ) => Promise<GetV1SuppliesIdPackageResponse>;
  /**
   * Рекомендуемый метод без версии; использует `postV1AcceptanceOptions`.
   *
   * POST /api/v1/acceptance/options
   *
   * @see https://dev.wildberries.ru/docs/openapi/orders-fbw
   */
  readonly postAcceptanceOptions: (
    input: PostV1AcceptanceOptionsInput,
    options?: WbRequestOptions,
  ) => Promise<PostV1AcceptanceOptionsResponse>;
  /**
   * Рекомендуемый метод без версии; использует `getV1Warehouses`.
   *
   * GET /api/v1/warehouses
   *
   * @see https://dev.wildberries.ru/docs/openapi/orders-fbw
   */
  readonly getWarehouses: (
    options?: WbRequestOptions,
  ) => Promise<GetV1WarehousesResponse>;
  /**
   * Рекомендуемый метод без версии; использует `getV1TransitTariffs`.
   *
   * GET /api/v1/transit-tariffs
   *
   * @see https://dev.wildberries.ru/docs/openapi/orders-fbw
   */
  readonly getTransitTariffs: (
    options?: WbRequestOptions,
  ) => Promise<GetV1TransitTariffsResponse>;
  /**
   * Рекомендуемый метод без версии; использует `postV1Supplies`.
   *
   * POST /api/v1/supplies
   *
   * @see https://dev.wildberries.ru/docs/openapi/orders-fbw
   */
  readonly postSupplies: (
    input: PostV1SuppliesInput,
    options?: WbRequestOptions,
  ) => Promise<PostV1SuppliesResponse>;
  /**
   * Рекомендуемый метод без версии; использует `getV1SuppliesId`.
   *
   * GET /api/v1/supplies/{ID}
   *
   * @see https://dev.wildberries.ru/docs/openapi/orders-fbw
   */
  readonly getSuppliesId: (
    input: GetV1SuppliesIdInput,
    options?: WbRequestOptions,
  ) => Promise<GetV1SuppliesIdResponse>;
  /**
   * Рекомендуемый метод без версии; использует `getV1SuppliesIdGoods`.
   *
   * GET /api/v1/supplies/{ID}/goods
   *
   * @see https://dev.wildberries.ru/docs/openapi/orders-fbw
   */
  readonly getSuppliesIdGoods: (
    input: GetV1SuppliesIdGoodsInput,
    options?: WbRequestOptions,
  ) => Promise<GetV1SuppliesIdGoodsResponse>;
  /**
   * Рекомендуемый метод без версии; использует `getV1SuppliesIdPackage`.
   *
   * GET /api/v1/supplies/{ID}/package
   *
   * @see https://dev.wildberries.ru/docs/openapi/orders-fbw
   */
  readonly getSuppliesIdPackage: (
    input: GetV1SuppliesIdPackageInput,
    options?: WbRequestOptions,
  ) => Promise<GetV1SuppliesIdPackageResponse>;
}

export interface WbPromotionApi {
  /**
   * Списки кампаний
   *
   * Метод возвращает списки всех [рекламных кампаний](/openapi/promotion#tag/campaigns/operation/getV2Adverts) продавца с их ID. Кампании сгруппированы по типу и статусу, у каждой указана дата последнего изменения.
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца:
   *
   * | Тип | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- | --- |
   * | Персональный | 1 сек | 5 запросов | 200 мс | 5 запросов |
   * | Сервисный | 1 сек | 5 запросов | 200 мс | 5 запросов |
   * | Базовый с секретом | 1 сек | 5 запросов | 200 мс | 5 запросов |
   * | Базовый | 1 ч | 4 запроса | 15 мин | 1 запрос |
   *
   * GET /adv/v1/promotion/count
   *
   * Разделы WB: Кампании.
   *
   * @see https://dev.wildberries.ru/docs/openapi/promotion
   */
  readonly getV1PromotionCount: (
    options?: WbRequestOptions,
  ) => Promise<GetV1PromotionCountResponse>;
  /**
   * Информация о кампаниях
   *
   * Метод возвращает информацию о рекламных кампаниях с единой или ручной ставкой по их статусам, типам оплаты и ID.
   *
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца:
   *
   * | Тип | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- | --- |
   * | Персональный | 1 сек | 5 запросов | 200 мс | 5 запросов |
   * | Сервисный | 1 сек | 5 запросов | 200 мс | 5 запросов |
   * | Базовый с секретом | 1 сек | 5 запросов | 200 мс | 5 запросов |
   * | Базовый | 1 ч | 1 запрос | 1 ч | 1 запрос |
   *
   * GET /api/advert/v2/adverts
   *
   * Разделы WB: Кампании.
   *
   * @see https://dev.wildberries.ru/docs/openapi/promotion
   */
  readonly getV2Adverts: (
    input?: GetV2AdvertsInput,
    options?: WbRequestOptions,
  ) => Promise<GetV2AdvertsResponse>;
  /**
   * Минимальные ставки для карточек товаров
   *
   * Метод возвращает минимальные ставки для карточек товаров в разменных единицах — 0,01 от базовой валюты [аккаунта продавца](https://cmp.wildberries.ru/campaigns/finances) — по типу оплаты и местам размещения.
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца:
   *
   * | Тип | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- | --- |
   * | Персональный | 1 мин | 20 запросов | 3 сек | 5 запросов |
   * | Сервисный | 1 мин | 20 запросов | 3 сек | 5 запросов |
   * | Базовый с секретом | 1 мин | 20 запросов | 3 сек | 5 запросов |
   * | Базовый | 1 ч | 5 запросов | 12 мин | 1 запрос |
   *
   * POST /api/advert/v1/bids/min
   *
   * Разделы WB: Создание кампаний.
   *
   * @see https://dev.wildberries.ru/docs/openapi/promotion
   */
  readonly postV1BidsMin: (
    input: PostV1BidsMinInput,
    options?: WbRequestOptions,
  ) => Promise<PostV1BidsMinResponse>;
  /**
   * Создать кампанию
   *
   * Метод создаёт кампанию:
   *  - с ручной ставкой для продвижения товаров в поиске и/или рекомендациях
   *  - с единой ставкой для продвижения товаров одновременно в поиске и рекомендациях
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца:
   *
   * | Тип | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- | --- |
   * | Персональный | 1 мин | 5 запросов | 12 сек | 5 запросов |
   * | Сервисный | 1 мин | 5 запросов | 12 сек | 5 запросов |
   * | Базовый с секретом | 1 мин | 5 запросов | 12 сек | 5 запросов |
   * | Базовый | 1 ч | 5 запросов | 12 мин | 1 запрос |
   *
   * POST /adv/v2/seacat/save-ad
   *
   * Разделы WB: Создание кампаний.
   *
   * @see https://dev.wildberries.ru/docs/openapi/promotion
   */
  readonly postV2SeacatSaveAd: (
    input?: PostV2SeacatSaveAdInput,
    options?: WbRequestOptions,
  ) => Promise<PostV2SeacatSaveAdResponse>;
  /**
   * Предметы для кампаний
   *
   * Метод возвращает список [предметов](/openapi/work-with-products#tag/categoriesSubcategoriesAndCharacteristics/paths/~1content~1v2~1object~1all/get), которые можно добавить в рекламную [кампанию](/openapi/promotion#tag/campaigns/operation/getV2Adverts).
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца:
   *
   * | Тип | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- | --- |
   * | Персональный | 12 сек | 1 запрос | 12 сек | 5 запросов |
   * | Сервисный | 12 сек | 1 запрос | 12 сек | 5 запросов |
   * | Базовый с секретом | 12 сек | 1 запрос | 12 сек | 5 запросов |
   * | Базовый | 1 ч | 2 запроса | 30 мин | 1 запрос |
   *
   * GET /adv/v1/supplier/subjects
   *
   * Разделы WB: Создание кампаний.
   *
   * @see https://dev.wildberries.ru/docs/openapi/promotion
   */
  readonly getV1SupplierSubjects: (
    input?: GetV1SupplierSubjectsInput,
    options?: WbRequestOptions,
  ) => Promise<GetV1SupplierSubjectsResponse>;
  /**
   * Карточки товаров для кампаний
   *
   * Метод возвращает список [карточек товаров](/openapi/work-with-products#tag/listings/paths/~1content~1v2~1get~1cards~1list/post), которые можно добавить в рекламную [кампанию](/openapi/promotion#tag/campaigns/operation/getV2Adverts). Для получения карточек необходимы ID [предметов](/openapi/promotion#tag/creatingCampaigns/operation/getV1SupplierSubjects), также доступных для добавления в кампанию.
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца:
   *
   * | Тип | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- | --- |
   * | Персональный | 1 мин | 5 запросов | 12 сек | 5 запросов |
   * | Сервисный | 1 мин | 5 запросов | 12 сек | 5 запросов |
   * | Базовый с секретом | 1 мин | 5 запросов | 12 сек | 5 запросов |
   * | Базовый | 1 ч | 2 запроса | 30 мин | 1 запрос |
   *
   * POST /adv/v2/supplier/nms
   *
   * Разделы WB: Создание кампаний.
   *
   * @see https://dev.wildberries.ru/docs/openapi/promotion
   */
  readonly postV2SupplierNms: (
    input?: PostV2SupplierNmsInput,
    options?: WbRequestOptions,
  ) => Promise<PostV2SupplierNmsResponse>;
  /**
   * Удаление кампании
   *
   * Метод удаляет [кампании](/openapi/promotion#tag/campaigns/operation/getV2Adverts) в статусе `4` — готова к запуску.
   *
   * После удаления кампания некоторое время будет находиться в статусе `-1` — кампания в процессе удаления. Полное удаление кампании занимает от 3 до 10 минут.
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца:
   *
   * | Тип | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- | --- |
   * | Персональный | 1 сек | 5 запросов | 200 мс | 5 запросов |
   * | Сервисный | 1 сек | 5 запросов | 200 мс | 5 запросов |
   * | Базовый с секретом | 1 сек | 5 запросов | 200 мс | 5 запросов |
   * | Базовый | 1 ч | 5 запросов | 12 мин | 1 запрос |
   *
   * GET /adv/v0/delete
   *
   * Разделы WB: Управление кампаниями.
   *
   * @see https://dev.wildberries.ru/docs/openapi/promotion
   */
  readonly getV0Delete: (
    input: GetV0DeleteInput,
    options?: WbRequestOptions,
  ) => Promise<GetV0DeleteResponse>;
  /**
   * Переименование кампании
   *
   * Метод меняет название [кампании](/openapi/promotion#tag/campaigns/operation/getV2Adverts). Это можно сделать в любой момент существования кампании.
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца:
   *
   * | Тип | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- | --- |
   * | Персональный | 1 сек | 5 запросов | 200 мс | 5 запросов |
   * | Сервисный | 1 сек | 5 запросов | 200 мс | 5 запросов |
   * | Базовый с секретом | 1 сек | 5 запросов | 200 мс | 5 запросов |
   * | Базовый | 1 ч | 2 запроса | 30 мин | 1 запрос |
   *
   * POST /adv/v0/rename
   *
   * Разделы WB: Управление кампаниями.
   *
   * @see https://dev.wildberries.ru/docs/openapi/promotion
   */
  readonly postV0Rename: (
    input?: PostV0RenameInput,
    options?: WbRequestOptions,
  ) => Promise<PostV0RenameResponse>;
  /**
   * Запуск кампании
   *
   * Метод запускает [кампании](/openapi/promotion#tag/campaigns/operation/getV2Adverts) в статусах `4` — готово к запуску — или `11` — пауза.
   * Чтобы запустить кампанию, проверьте ее бюджет. Если бюджета недостаточно, [пополните его](/openapi/promotion#tag/finances/operation/postV1BudgetDeposit).
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца:
   *
   * | Тип | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- | --- |
   * | Персональный | 1 сек | 5 запросов | 200 мс | 5 запросов |
   * | Сервисный | 1 сек | 5 запросов | 200 мс | 5 запросов |
   * | Базовый с секретом | 1 сек | 5 запросов | 200 мс | 5 запросов |
   * | Базовый | 1 ч | 5 запросов | 12 мин | 1 запрос |
   *
   * GET /adv/v0/start
   *
   * Разделы WB: Управление кампаниями.
   *
   * @see https://dev.wildberries.ru/docs/openapi/promotion
   */
  readonly getV0Start: (
    input: GetV0StartInput,
    options?: WbRequestOptions,
  ) => Promise<GetV0StartResponse>;
  /**
   * Пауза кампании
   *
   * Метод ставит [кампании](/openapi/promotion#tag/campaigns/operation/getV2Adverts) в статусе `9` — активна — на паузу.
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца:
   *
   * | Тип | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- | --- |
   * | Персональный | 1 сек | 5 запросов | 200 мс | 5 запросов |
   * | Сервисный | 1 сек | 5 запросов | 200 мс | 5 запросов |
   * | Базовый с секретом | 1 сек | 5 запросов | 200 мс | 5 запросов |
   * | Базовый | 1 ч | 5 запросов | 12 мин | 1 запрос |
   *
   * GET /adv/v0/pause
   *
   * Разделы WB: Управление кампаниями.
   *
   * @see https://dev.wildberries.ru/docs/openapi/promotion
   */
  readonly getV0Pause: (
    input: GetV0PauseInput,
    options?: WbRequestOptions,
  ) => Promise<GetV0PauseResponse>;
  /**
   * Завершение кампании
   *
   * Метод завершает [кампании](/openapi/promotion#tag/campaigns/operation/getV2Adverts) в статусах:
   *  - `9` — активна
   *  - `11` — пауза
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца:
   *
   * | Тип | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- | --- |
   * | Персональный | 1 сек | 5 запросов | 200 мс | 5 запросов |
   * | Сервисный | 1 сек | 5 запросов | 200 мс | 5 запросов |
   * | Базовый с секретом | 1 сек | 5 запросов | 200 мс | 5 запросов |
   * | Базовый | 1 ч | 5 запросов | 12 мин | 1 запрос |
   *
   * GET /adv/v0/stop
   *
   * Разделы WB: Управление кампаниями.
   *
   * @see https://dev.wildberries.ru/docs/openapi/promotion
   */
  readonly getV0Stop: (
    input: GetV0StopInput,
    options?: WbRequestOptions,
  ) => Promise<GetV0StopResponse>;
  /**
   * Изменение мест размещения в кампаниях с ручной ставкой
   *
   * Метод меняет места размещения в кампаниях с ручной ставкой и моделью оплаты за показы — `cpm`.
   *
   * Для кампаний в статусах `4`, `9` и `11`.
   *
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца:
   *
   * | Тип | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- | --- |
   * | Персональный | 1 сек | 1 запрос | 1 сек | 1 запрос |
   * | Сервисный | 1 сек | 1 запрос | 1 сек | 1 запрос |
   * | Базовый с секретом | 1 сек | 1 запрос | 1 сек | 1 запрос |
   * | Базовый | 1 ч | 2 запроса | 30 мин | 1 запрос |
   *
   * PUT /adv/v0/auction/placements
   *
   * Разделы WB: Управление кампаниями.
   *
   * @see https://dev.wildberries.ru/docs/openapi/promotion
   */
  readonly putV0AuctionPlacements: (
    input: PutV0AuctionPlacementsInput,
    options?: WbRequestOptions,
  ) => Promise<PutV0AuctionPlacementsResponse>;
  /**
   * Изменение ставок в кампаниях
   *
   * Метод меняет ставки карточек товаров по артикулам WB в кампаниях:
   *  - с единой ставкой
   *  - с ручной ставкой
   *  - с моделью оплаты `cpc` — за клики
   *
   * Для кампаний в статусах `4`, `9` и `11`.
   *
   * В запросе укажите место размещения в параметре `placement`:
   *  - `combined` — в поиске и рекомендациях для кампаний с единой ставкой
   *  - `search `или `recommendations` — в поиске или рекомендациях для кампаний с ручной ставкой
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца:
   *
   * | Тип | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- | --- |
   * | Персональный | 1 сек | 5 запросов | 200 мс | 5 запросов |
   * | Сервисный | 1 сек | 5 запросов | 200 мс | 5 запросов |
   * | Базовый с секретом | 1 сек | 5 запросов | 200 мс | 5 запросов |
   * | Базовый | 1 ч | 2 запроса | 30 мин | 1 запрос |
   *
   * PATCH /api/advert/v1/bids
   *
   * Разделы WB: Управление кампаниями.
   *
   * @see https://dev.wildberries.ru/docs/openapi/promotion
   */
  readonly patchV1Bids: (
    input: PatchV1BidsInput,
    options?: WbRequestOptions,
  ) => Promise<PatchV1BidsResponse>;
  /**
   * Баланс
   *
   * Метод возвращает информацию о:
   *  - счёте кабинета Продвижения WB. Его пополняет продавец.
   *  - балансе — максимальной сумме для оплаты кампании по взаиморасчету: удержании средств из будущих продаж. Баланс пополнить нельзя, он рассчитывается автоматически на основе отчётов по продвижению.
   *  - бонусных начислениях WB.
   *
   * Информацию о бюджете кампаний можно получить в [отдельном методе](/openapi/promotion#tag/finances/operation/getV1Budget).
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца:
   *
   * | Тип | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- | --- |
   * | Персональный | 1 сек | 1 запрос | 1 сек | 5 запросов |
   * | Сервисный | 1 сек | 1 запрос | 1 сек | 5 запросов |
   * | Базовый с секретом | 1 сек | 1 запрос | 1 сек | 5 запросов |
   * | Базовый | 1 ч | 2 запроса | 30 мин | 1 запрос |
   *
   * GET /adv/v1/balance
   *
   * Разделы WB: Финансы.
   *
   * @see https://dev.wildberries.ru/docs/openapi/promotion
   */
  readonly getV1Balance: (
    options?: WbRequestOptions,
  ) => Promise<GetV1BalanceResponse>;
  /**
   * Бюджет кампании
   *
   * Метод возвращает информацию о бюджете [кампании](/openapi/promotion#tag/campaigns/operation/getV2Adverts) — максимальной сумме затрат на кампанию. Бюджет кампании можно [пополнить](/openapi/promotion#tag/finances/operation/postV1BudgetDeposit).
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца:
   *
   * | Тип | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- | --- |
   * | Персональный | 1 сек | 4 запроса | 250 мс | 4 запроса |
   * | Сервисный | 1 сек | 4 запроса | 250 мс | 4 запроса |
   * | Базовый с секретом | 1 сек | 4 запроса | 250 мс | 4 запроса |
   * | Базовый | 1 ч | 4 запроса | 15 мин | 1 запрос |
   *
   * GET /adv/v1/budget
   *
   * Разделы WB: Финансы.
   *
   * @see https://dev.wildberries.ru/docs/openapi/promotion
   */
  readonly getV1Budget: (
    input: GetV1BudgetInput,
    options?: WbRequestOptions,
  ) => Promise<GetV1BudgetResponse>;
  /**
   * Пополнение бюджета кампании
   *
   * Метод пополняет [бюджет](/openapi/promotion#tag/finances/operation/getV1Budget) кампании.
   *
   * Чтобы запустить кампанию после пополнения бюджета, используйте метод [Запуск кампании](/openapi/promotion#tag/campaignManagement/operation/getV0Start).
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца:
   *
   * | Тип | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- | --- |
   * | Персональный | 1 сек | 1 запрос | 1 сек | 5 запросов |
   * | Сервисный | 1 сек | 1 запрос | 1 сек | 5 запросов |
   * | Базовый с секретом | 1 сек | 1 запрос | 1 сек | 5 запросов |
   * | Базовый | 1 ч | 5 запросов | 12 мин | 1 запрос |
   *
   * POST /adv/v1/budget/deposit
   *
   * Разделы WB: Финансы.
   *
   * @see https://dev.wildberries.ru/docs/openapi/promotion
   */
  readonly postV1BudgetDeposit: (
    input: PostV1BudgetDepositInput,
    options?: WbRequestOptions,
  ) => Promise<PostV1BudgetDepositResponse>;
  /**
   * Получение истории затрат
   *
   * Метод формирует список фактических затрат на рекламные кампании за заданный период.
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца:
   *
   * | Тип | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- | --- |
   * | Персональный | 1 сек | 1 запрос | 1 сек | 5 запросов |
   * | Сервисный | 1 сек | 1 запрос | 1 сек | 5 запросов |
   * | Базовый с секретом | 1 сек | 1 запрос | 1 сек | 5 запросов |
   * | Базовый | 1 ч | 1 запрос | 1 ч | 1 запрос |
   *
   * GET /adv/v1/upd
   *
   * Разделы WB: Финансы.
   *
   * @see https://dev.wildberries.ru/docs/openapi/promotion
   */
  readonly getV1Upd: (
    input: GetV1UpdInput,
    options?: WbRequestOptions,
  ) => Promise<GetV1UpdResponse>;
  /**
   * Получение истории пополнений счёта
   *
   * Метод возвращает историю пополнений счёта **WB Продвижение** за заданный период.
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца:
   *
   * | Тип | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- | --- |
   * | Персональный | 1 сек | 1 запрос | 1 сек | 5 запросов |
   * | Сервисный | 1 сек | 1 запрос | 1 сек | 5 запросов |
   * | Базовый с секретом | 1 сек | 1 запрос | 1 сек | 5 запросов |
   * | Базовый | 1 ч | 1 запрос | 1 ч | 1 запрос |
   *
   * GET /adv/v1/payments
   *
   * Разделы WB: Финансы.
   *
   * @see https://dev.wildberries.ru/docs/openapi/promotion
   */
  readonly getV1Payments: (
    input?: GetV1PaymentsInput,
    options?: WbRequestOptions,
  ) => Promise<GetV1PaymentsResponse>;
  /**
   * Изменение списка карточек товаров в кампаниях
   *
   * Метод добавляет и удаляет карточки товаров в кампаниях.
   *
   * Для кампаний в статусах `4`, `9` и `11`.
   *
   * Для добавляемых товаров устанавливается текущая минимальная ставка.
   *
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца:
   *
   * | Тип | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- | --- |
   * | Персональный | 1 сек | 1 запрос | 1 сек | 1 запрос |
   * | Сервисный | 1 сек | 1 запрос | 1 сек | 1 запрос |
   * | Базовый с секретом | 1 сек | 1 запрос | 1 сек | 1 запрос |
   * | Базовый | 1 ч | 2 запроса | 30 мин | 1 запрос |
   *
   * PATCH /adv/v0/auction/nms
   *
   * Разделы WB: Управление кампаниями.
   *
   * @see https://dev.wildberries.ru/docs/openapi/promotion
   */
  readonly patchV0AuctionNms: (
    input: PatchV0AuctionNmsInput,
    options?: WbRequestOptions,
  ) => Promise<PatchV0AuctionNmsResponse>;
  /**
   * Рекомендуемые ставки для карточек товаров и поисковых кластеров
   *
   * Метод возвращает рекомендуемые ставки для карточек товаров и поисковых кластеров кампании.
   * Можно использовать для кампаний с типами оплаты `cpm` — за показы и `cpc` — за клики.
   *
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца:
   *
   * | Тип | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- | --- |
   * | Персональный | 1 мин | 5 запросов | 12 сек | 5 запросов |
   * | Сервисный | 1 мин | 5 запросов | 12 сек | 5 запросов |
   * | Базовый с секретом | 1 мин | 5 запросов | 12 сек | 5 запросов |
   * | Базовый | 1 ч | 20 запросов | 3 мин | 1 запрос |
   *
   * GET /api/advert/v0/bids/recommendations
   *
   * Разделы WB: Управление кампаниями.
   *
   * @see https://dev.wildberries.ru/docs/openapi/promotion
   */
  readonly getV0BidsRecommendations: (
    input: GetV0BidsRecommendationsInput,
    options?: WbRequestOptions,
  ) => Promise<GetV0BidsRecommendationsResponse>;
  /**
   * Статистика поисковых кластеров
   *
   * Метод формирует статистику по поисковым кластерам за указанный период.
   *
   * Можно использовать для кампаний с моделями оплаты `cpm` — за показы и `cpc` — за клики.
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца:
   *
   * | Тип | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- | --- |
   * | Персональный | 1 мин | 10 запросов | 6 сек | 20 запросов |
   * | Сервисный | 1 мин | 10 запросов | 6 сек | 20 запросов |
   * | Базовый с секретом | 1 мин | 10 запросов | 6 сек | 20 запросов |
   * | Базовый | 1 ч | 5 запросов | 12 мин | 1 запрос |
   *
   * POST /adv/v0/normquery/stats
   *
   * Разделы WB: Статистика.
   *
   * @see https://dev.wildberries.ru/docs/openapi/promotion
   */
  readonly postV0NormqueryStats: (
    input: PostV0NormqueryStatsInput,
    options?: WbRequestOptions,
  ) => Promise<PostV0NormqueryStatsResponse>;
  /**
   * Список ставок поисковых кластеров
   *
   * Метод возвращает список поисковых кластеров со ставками по:
   *  - ID кампаний
   *  - артикулам WB
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца:
   *
   * | Тип | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- | --- |
   * | Персональный | 1 сек | 5 запросов | 200 мс | 10 запросов |
   * | Сервисный | 1 сек | 5 запросов | 200 мс | 10 запросов |
   * | Базовый с секретом | 1 сек | 5 запросов | 200 мс | 10 запросов |
   * | Базовый | 1 ч | 5 запросов | 12 мин | 1 запрос |
   *
   * POST /adv/v0/normquery/get-bids
   *
   * Разделы WB: Поисковые кластеры.
   *
   * @see https://dev.wildberries.ru/docs/openapi/promotion
   */
  readonly postV0NormqueryGetBids: (
    input: PostV0NormqueryGetBidsInput,
    options?: WbRequestOptions,
  ) => Promise<PostV0NormqueryGetBidsResponse>;
  /**
   * Конфигурационные значения продвижения
   *
   * Метод возвращает валюту, код валюты [аккаунта продавца](https://cmp.wildberries.ru/campaigns/finances) и допустимые шаги ставок для метода [POST /api/advert/v1/normquery/bids](/openapi/promotion#tag/searchClusters/operation/postV1NormqueryBids)
   *
   *  Метод доступен (/openapi/api-information#tag/authorization/Pravila-ispolzovaniya-tokenov-dostupa-k-API) по
   *  Персональному токену,
   *  Сервисному токену
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца:
   *
   * | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- |
   * | 1 мин | 1 запрос | 1 мин | 10 запросов |
   *
   * GET /api/advert/v1/config
   *
   * Разделы WB: Управление кампаниями.
   *
   * @see https://dev.wildberries.ru/docs/openapi/promotion
   */
  readonly getV1Config: (
    options?: WbRequestOptions,
  ) => Promise<GetV1ConfigResponse>;
  /**
   * Установить ставки для поисковых кластеров в валюте аккаунта продавца
   *
   * Метод устанавливает ставки на поисковые кластеры в валюте [аккаунта продавца](https://cmp.wildberries.ru/campaigns/finances).
   * Можно использовать только для кампаний c ручной ставкой и моделью оплаты `cpm` — за показы.
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца:
   *
   * | Тип | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- | --- |
   * | Персональный | 1 сек | 2 запроса | 500 мс | 4 запроса |
   * | Сервисный | 1 сек | 2 запроса | 500 мс | 4 запроса |
   *
   *  Метод доступен (/openapi/api-information#tag/authorization/Pravila-ispolzovaniya-tokenov-dostupa-k-API) по
   *  Персональному токену,
   *  Сервисному токену
   *
   * POST /api/advert/v1/normquery/bids
   *
   * Разделы WB: Поисковые кластеры.
   *
   * @see https://dev.wildberries.ru/docs/openapi/promotion
   */
  readonly postV1NormqueryBids: (
    input: PostV1NormqueryBidsInput,
    options?: WbRequestOptions,
  ) => Promise<PostV1NormqueryBidsResponse>;
  /**
   * Установить ставки для поисковых кластеров
   *
   * Метод устанавливает ставки в рублях на поисковые кластеры.
   *
   * Можно использовать только для кампаний с:
   *  - ручной ставкой
   *  - моделью оплаты `cpm` — за показы
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца:
   *
   * | Тип | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- | --- |
   * | Персональный | 1 сек | 2 запроса | 500 мс | 4 запроса |
   * | Сервисный | 1 сек | 2 запроса | 500 мс | 4 запроса |
   * | Базовый с секретом | 1 сек | 2 запроса | 500 мс | 4 запроса |
   * | Базовый | 1 ч | 5 запросов | 12 мин | 1 запрос |
   *
   * POST /adv/v0/normquery/bids
   *
   * Разделы WB: Поисковые кластеры.
   *
   * @see https://dev.wildberries.ru/docs/openapi/promotion
   */
  readonly postV0NormqueryBids: (
    input: PostV0NormqueryBidsInput,
    options?: WbRequestOptions,
  ) => Promise<PostV0NormqueryBidsResponse>;
  /**
   * Удалить ставки поисковых кластеров
   *
   * Метод удаляет ставки с поисковых кластеров.
   *
   * Можно использовать только для кампаний с:
   *  - ручной ставкой
   *  - моделью оплаты `cpm` — за показы
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца:
   *
   * | Тип | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- | --- |
   * | Персональный | 1 сек | 5 запросов | 200 мс | 10 запросов |
   * | Сервисный | 1 сек | 5 запросов | 200 мс | 10 запросов |
   * | Базовый с секретом | 1 сек | 5 запросов | 200 мс | 10 запросов |
   * | Базовый | 1 ч | 5 запросов | 12 мин | 1 запрос |
   *
   * DELETE /adv/v0/normquery/bids
   *
   * Разделы WB: Поисковые кластеры.
   *
   * @see https://dev.wildberries.ru/docs/openapi/promotion
   */
  readonly deleteV0NormqueryBids: (
    input: DeleteV0NormqueryBidsInput,
    options?: WbRequestOptions,
  ) => Promise<DeleteV0NormqueryBidsResponse>;
  /**
   * Список минус-фраз кампаний
   *
   * Метод возвращает список минус-фраз по:
   *  - ID кампаний
   *  - артикулам WB
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца:
   *
   * | Тип | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- | --- |
   * | Персональный | 1 сек | 5 запросов | 200 мс | 10 запросов |
   * | Сервисный | 1 сек | 5 запросов | 200 мс | 10 запросов |
   * | Базовый с секретом | 1 сек | 5 запросов | 200 мс | 10 запросов |
   * | Базовый | 1 ч | 5 запросов | 12 мин | 1 запрос |
   *
   * POST /adv/v0/normquery/get-minus
   *
   * Разделы WB: Поисковые кластеры.
   *
   * @see https://dev.wildberries.ru/docs/openapi/promotion
   */
  readonly postV0NormqueryGetMinus: (
    input: PostV0NormqueryGetMinusInput,
    options?: WbRequestOptions,
  ) => Promise<PostV0NormqueryGetMinusResponse>;
  /**
   * Установка и удаление минус-фраз
   *
   * Метод устанавливает и удаляет минус-фразы в кампаниях c единой и ручной ставкой.
   *
   *  Отправка пустого массива удаляет все минус-фразы
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца:
   *
   * | Тип | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- | --- |
   * | Персональный | 1 сек | 5 запросов | 200 мс | 10 запросов |
   * | Сервисный | 1 сек | 5 запросов | 200 мс | 10 запросов |
   * | Базовый с секретом | 1 сек | 5 запросов | 200 мс | 10 запросов |
   * | Базовый | 1 ч | 5 запросов | 12 мин | 1 запрос |
   *
   * POST /adv/v0/normquery/set-minus
   *
   * Разделы WB: Поисковые кластеры.
   *
   * @see https://dev.wildberries.ru/docs/openapi/promotion
   */
  readonly postV0NormquerySetMinus: (
    input: PostV0NormquerySetMinusInput,
    options?: WbRequestOptions,
  ) => Promise<PostV0NormquerySetMinusResponse>;
  /**
   * Количество медиакампаний
   *
   * Метод возвращает количество [медиакампаний](/openapi/promotion#tag/media/operation/getV1Advert) продавца с группировкой по статусам.
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца:
   *
   * | Тип | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- | --- |
   * | Персональный | 1 сек | 10 запросов | 100 мс | 10 запросов |
   * | Сервисный | 1 сек | 10 запросов | 100 мс | 10 запросов |
   * | Базовый с секретом | 1 сек | 10 запросов | 100 мс | 10 запросов |
   * | Базовый | 1 ч | 1 запрос | 1 ч | 1 запрос |
   *
   * GET /adv/v1/count
   *
   * Разделы WB: Медиа.
   *
   * @see https://dev.wildberries.ru/docs/openapi/promotion
   */
  readonly getV1Count: (
    options?: WbRequestOptions,
  ) => Promise<GetV1CountResponse>;
  /**
   * Список медиакампаний
   *
   * Метод возвращает список всех [медиакампаний](/openapi/promotion#tag/media/operation/getV1Advert) продавца по их типам и статусам.
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца:
   *
   * | Тип | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- | --- |
   * | Персональный | 1 сек | 10 запросов | 100 мс | 10 запросов |
   * | Сервисный | 1 сек | 10 запросов | 100 мс | 10 запросов |
   * | Базовый с секретом | 1 сек | 10 запросов | 100 мс | 10 запросов |
   * | Базовый | 1 ч | 1 запрос | 1 ч | 1 запрос |
   *
   * GET /adv/v1/adverts
   *
   * Разделы WB: Медиа.
   *
   * @see https://dev.wildberries.ru/docs/openapi/promotion
   */
  readonly getV1Adverts: (
    input?: GetV1AdvertsInput,
    options?: WbRequestOptions,
  ) => Promise<GetV1AdvertsResponse>;
  /**
   * Информация о медиакампании
   *
   * Метод возвращает информацию о кампании [WB Медиа](https://cmp.wildberries.ru/cmpf/list). Вместо карточек товаров в медиакампаниях продвигаются рекламные баннеры продавца на сайте и в приложении WB.
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца:
   *
   * | Тип | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- | --- |
   * | Персональный | 1 сек | 10 запросов | 100 мс | 10 запросов |
   * | Сервисный | 1 сек | 10 запросов | 100 мс | 10 запросов |
   * | Базовый с секретом | 1 сек | 10 запросов | 100 мс | 10 запросов |
   * | Базовый | 1 ч | 5 запросов | 12 мин | 1 запрос |
   *
   * GET /adv/v1/advert
   *
   * Разделы WB: Медиа.
   *
   * @see https://dev.wildberries.ru/docs/openapi/promotion
   */
  readonly getV1Advert: (
    input: GetV1AdvertInput,
    options?: WbRequestOptions,
  ) => Promise<GetV1AdvertResponse>;
  /**
   * Статистика кампаний
   *
   * Метод формирует статистику для кампаний независимо от типа.
   *
   * Максимальный период в запросе — 31 день.
   *
   * Для кампаний в статусах `7`, `9` и `11`.
   *
   * В песочнице статистика кампаний доступна за последние 30 дней. Генерируется только для компаний в статусе `9`, тип `8`, 9 раз в сутки
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца:
   *
   * | Тип | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- | --- |
   * | Персональный | 1 мин | 3 запроса | 20 сек | 1 запрос |
   * | Сервисный | 1 мин | 3 запроса | 20 сек | 1 запрос |
   * | Базовый с секретом | 1 мин | 3 запроса | 20 сек | 1 запрос |
   * | Базовый | 1 ч | 1 запрос | 1 ч | 1 запрос |
   *
   * GET /adv/v3/fullstats
   *
   * Разделы WB: Статистика.
   *
   * @see https://dev.wildberries.ru/docs/openapi/promotion
   */
  readonly getV3Fullstats: (
    input: GetV3FullstatsInput,
    options?: WbRequestOptions,
  ) => Promise<GetV3FullstatsResponse>;
  /**
   * Статистика медиакампаний
   *
   * Метод формирует статистику кампаний сервиса [WB Медиа](https://cmp.wildberries.ru/cmpf/statistics). Статистику можно группировать по датам и/или интервалам.
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца:
   *
   * | Тип | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- | --- |
   * | Персональный | 1 сек | 10 запросов | 100 мс | 10 запросов |
   * | Сервисный | 1 сек | 10 запросов | 100 мс | 10 запросов |
   * | Базовый с секретом | 1 сек | 10 запросов | 100 мс | 10 запросов |
   * | Базовый | 1 ч | 1 запрос | 1 ч | 1 запрос |
   *
   * POST /adv/v1/stats
   *
   * Разделы WB: Статистика.
   *
   * @see https://dev.wildberries.ru/docs/openapi/promotion
   */
  readonly postV1Stats: (
    input: PostV1StatsInput,
    options?: WbRequestOptions,
  ) => Promise<PostV1StatsResponse>;
  /**
   * Список акций
   *
   * Метод возвращает список [акций](/openapi/promotion#tag/promoCalendar/operation/getV1CalendarPromotionsDetails) в WB с датами и временем проведения.
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца для всех методов категории Календарь акций:
   *
   * | Тип | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- | --- |
   * | Персональный | 6 сек | 10 запросов | 600 мс | 5 запросов |
   * | Сервисный | 6 сек | 10 запросов | 600 мс | 5 запросов |
   * | Базовый с секретом | 6 сек | 10 запросов | 600 мс | 5 запросов |
   * | Базовый | 1 ч | 1 запрос | 1 ч | 1 запрос |
   *
   * GET /api/v1/calendar/promotions
   *
   * Разделы WB: Календарь акций.
   *
   * @see https://dev.wildberries.ru/docs/openapi/promotion
   */
  readonly getV1CalendarPromotions: (
    input: GetV1CalendarPromotionsInput,
    options?: WbRequestOptions,
  ) => Promise<GetV1CalendarPromotionsResponse>;
  /**
   * Детальная информация об акциях
   *
   * Метод возвращает подробную информацию об [акции](/openapi/promotion#tag/promoCalendar/operation/getV1CalendarPromotionsDetails) по ID.
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца для всех методов категории Календарь акций:
   *
   * | Тип | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- | --- |
   * | Персональный | 6 сек | 10 запросов | 600 мс | 5 запросов |
   * | Сервисный | 6 сек | 10 запросов | 600 мс | 5 запросов |
   * | Базовый с секретом | 6 сек | 10 запросов | 600 мс | 5 запросов |
   * | Базовый | 1 ч | 1 запрос | 1 ч | 1 запрос |
   *
   * GET /api/v1/calendar/promotions/details
   *
   * Разделы WB: Календарь акций.
   *
   * @see https://dev.wildberries.ru/docs/openapi/promotion
   */
  readonly getV1CalendarPromotionsDetails: (
    input: GetV1CalendarPromotionsDetailsInput,
    options?: WbRequestOptions,
  ) => Promise<GetV1CalendarPromotionsDetailsResponse>;
  /**
   * Список товаров для участия в акции
   *
   * Метод формирует список товаров, подходящих для участия в [акции](/openapi/promotion#tag/promoCalendar/operation/getV1CalendarPromotionsDetails). Эти товары можно добавить в акцию с помощью [отдельного метода](/openapi/promotion#tag/promoCalendar/operation/postV1CalendarPromotionsUpload).
   *
   *  Данный метод неприменим для автоакций.
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца для всех методов категории Календарь акций:
   *
   * | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- |
   * | 6 сек | 10 запросов | 600 мс | 5 запросов |
   *
   * GET /api/v1/calendar/promotions/nomenclatures
   *
   * Разделы WB: Календарь акций.
   *
   * @see https://dev.wildberries.ru/docs/openapi/promotion
   */
  readonly getV1CalendarPromotionsNomenclatures: (
    input: GetV1CalendarPromotionsNomenclaturesInput,
    options?: WbRequestOptions,
  ) => Promise<GetV1CalendarPromotionsNomenclaturesResponse>;
  /**
   * Добавить товар в акцию
   *
   * Метод создаёт задание на загрузку товара в [акцию](/openapi/promotion#tag/promoCalendar/operation/getV1CalendarPromotionsDetails).
   *
   * Состояние загрузки можно проверить с помощью [отдельных методов](/openapi/work-with-products#tag/Ceny-i-skidki/paths/~1api~1v2~1history~1tasks/get).
   *
   *  Данный метод неприменим для автоакций.
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца для всех методов категории Календарь акций:
   *
   * | Тип | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- | --- |
   * | Персональный | 6 сек | 10 запросов | 600 мс | 5 запросов |
   * | Сервисный | 6 сек | 10 запросов | 600 мс | 5 запросов |
   * | Базовый с секретом | 6 сек | 10 запросов | 600 мс | 5 запросов |
   * | Базовый | 1 ч | 1 запрос | 1 ч | 1 запрос |
   *
   * POST /api/v1/calendar/promotions/upload
   *
   * Разделы WB: Календарь акций.
   *
   * @see https://dev.wildberries.ru/docs/openapi/promotion
   */
  readonly postV1CalendarPromotionsUpload: (
    input: PostV1CalendarPromotionsUploadInput,
    options?: WbRequestOptions,
  ) => Promise<PostV1CalendarPromotionsUploadResponse>;
  /**
   * Списки активных и неактивных поисковых кластеров
   *
   * Метод возвращает списки активных и неактивных поисковых кластеров, по которым было не меньше 100 показов.
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца:
   *
   * | Тип | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- | --- |
   * | Персональный | 1 сек | 5 запросов | 200 мс | 10 запросов |
   * | Сервисный | 1 сек | 5 запросов | 200 мс | 10 запросов |
   * | Базовый с секретом | 1 сек | 5 запросов | 200 мс | 10 запросов |
   * | Базовый | 1 ч | 5 запросов | 12 мин | 1 запрос |
   *
   * POST /adv/v0/normquery/list
   *
   * Разделы WB: Поисковые кластеры.
   *
   * @see https://dev.wildberries.ru/docs/openapi/promotion
   */
  readonly postV0NormqueryList: (
    input: PostV0NormqueryListInput,
    options?: WbRequestOptions,
  ) => Promise<PostV0NormqueryListResponse>;
  /**
   * Статистика по поисковым кластерам с детализацией по дням
   *
   * Метод формирует статистику по поисковым кластерам за указанный период с детализацией по дням.
   * Можно использовать для кампаний с моделями оплаты `cpm` — за показы и `cpc` — за клики.
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца:
   *
   * | Тип | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- | --- |
   * | Персональный | 1 мин | 10 запросов | 6 сек | 20 запросов |
   * | Сервисный | 1 мин | 10 запросов | 6 сек | 20 запросов |
   * | Базовый с секретом | 1 мин | 10 запросов | 6 сек | 20 запросов |
   * | Базовый | 1 ч | 2 запроса | 30 мин | 1 запрос |
   *
   * POST /adv/v1/normquery/stats
   *
   * Разделы WB: Статистика.
   *
   * @see https://dev.wildberries.ru/docs/openapi/promotion
   */
  readonly postV1NormqueryStats: (
    input: PostV1NormqueryStatsInput,
    options?: WbRequestOptions,
  ) => Promise<PostV1NormqueryStatsResponse>;
  /**
   * Рекомендуемый метод без версии; использует `getV1PromotionCount`.
   *
   * GET /adv/v1/promotion/count
   *
   * @see https://dev.wildberries.ru/docs/openapi/promotion
   */
  readonly getPromotionCount: (
    options?: WbRequestOptions,
  ) => Promise<GetV1PromotionCountResponse>;
  /**
   * Рекомендуемый метод без версии; использует `getV2Adverts`.
   *
   * GET /api/advert/v2/adverts
   *
   * @see https://dev.wildberries.ru/docs/openapi/promotion
   */
  readonly getAdverts: (
    input?: GetV2AdvertsInput,
    options?: WbRequestOptions,
  ) => Promise<GetV2AdvertsResponse>;
  /**
   * Рекомендуемый метод без версии; использует `postV1BidsMin`.
   *
   * POST /api/advert/v1/bids/min
   *
   * @see https://dev.wildberries.ru/docs/openapi/promotion
   */
  readonly postBidsMin: (
    input: PostV1BidsMinInput,
    options?: WbRequestOptions,
  ) => Promise<PostV1BidsMinResponse>;
  /**
   * Рекомендуемый метод без версии; использует `postV2SeacatSaveAd`.
   *
   * POST /adv/v2/seacat/save-ad
   *
   * @see https://dev.wildberries.ru/docs/openapi/promotion
   */
  readonly postSeacatSaveAd: (
    input?: PostV2SeacatSaveAdInput,
    options?: WbRequestOptions,
  ) => Promise<PostV2SeacatSaveAdResponse>;
  /**
   * Рекомендуемый метод без версии; использует `getV1SupplierSubjects`.
   *
   * GET /adv/v1/supplier/subjects
   *
   * @see https://dev.wildberries.ru/docs/openapi/promotion
   */
  readonly getSupplierSubjects: (
    input?: GetV1SupplierSubjectsInput,
    options?: WbRequestOptions,
  ) => Promise<GetV1SupplierSubjectsResponse>;
  /**
   * Рекомендуемый метод без версии; использует `postV2SupplierNms`.
   *
   * POST /adv/v2/supplier/nms
   *
   * @see https://dev.wildberries.ru/docs/openapi/promotion
   */
  readonly postSupplierNms: (
    input?: PostV2SupplierNmsInput,
    options?: WbRequestOptions,
  ) => Promise<PostV2SupplierNmsResponse>;
  /**
   * Рекомендуемый метод без версии; использует `getV0Delete`.
   *
   * GET /adv/v0/delete
   *
   * @see https://dev.wildberries.ru/docs/openapi/promotion
   */
  readonly getDelete: (
    input: GetV0DeleteInput,
    options?: WbRequestOptions,
  ) => Promise<GetV0DeleteResponse>;
  /**
   * Рекомендуемый метод без версии; использует `postV0Rename`.
   *
   * POST /adv/v0/rename
   *
   * @see https://dev.wildberries.ru/docs/openapi/promotion
   */
  readonly postRename: (
    input?: PostV0RenameInput,
    options?: WbRequestOptions,
  ) => Promise<PostV0RenameResponse>;
  /**
   * Рекомендуемый метод без версии; использует `getV0Start`.
   *
   * GET /adv/v0/start
   *
   * @see https://dev.wildberries.ru/docs/openapi/promotion
   */
  readonly getStart: (
    input: GetV0StartInput,
    options?: WbRequestOptions,
  ) => Promise<GetV0StartResponse>;
  /**
   * Рекомендуемый метод без версии; использует `getV0Pause`.
   *
   * GET /adv/v0/pause
   *
   * @see https://dev.wildberries.ru/docs/openapi/promotion
   */
  readonly getPause: (
    input: GetV0PauseInput,
    options?: WbRequestOptions,
  ) => Promise<GetV0PauseResponse>;
  /**
   * Рекомендуемый метод без версии; использует `getV0Stop`.
   *
   * GET /adv/v0/stop
   *
   * @see https://dev.wildberries.ru/docs/openapi/promotion
   */
  readonly getStop: (
    input: GetV0StopInput,
    options?: WbRequestOptions,
  ) => Promise<GetV0StopResponse>;
  /**
   * Рекомендуемый метод без версии; использует `putV0AuctionPlacements`.
   *
   * PUT /adv/v0/auction/placements
   *
   * @see https://dev.wildberries.ru/docs/openapi/promotion
   */
  readonly putAuctionPlacements: (
    input: PutV0AuctionPlacementsInput,
    options?: WbRequestOptions,
  ) => Promise<PutV0AuctionPlacementsResponse>;
  /**
   * Рекомендуемый метод без версии; использует `patchV1Bids`.
   *
   * PATCH /api/advert/v1/bids
   *
   * @see https://dev.wildberries.ru/docs/openapi/promotion
   */
  readonly patchBids: (
    input: PatchV1BidsInput,
    options?: WbRequestOptions,
  ) => Promise<PatchV1BidsResponse>;
  /**
   * Рекомендуемый метод без версии; использует `getV1Balance`.
   *
   * GET /adv/v1/balance
   *
   * @see https://dev.wildberries.ru/docs/openapi/promotion
   */
  readonly getBalance: (
    options?: WbRequestOptions,
  ) => Promise<GetV1BalanceResponse>;
  /**
   * Рекомендуемый метод без версии; использует `getV1Budget`.
   *
   * GET /adv/v1/budget
   *
   * @see https://dev.wildberries.ru/docs/openapi/promotion
   */
  readonly getBudget: (
    input: GetV1BudgetInput,
    options?: WbRequestOptions,
  ) => Promise<GetV1BudgetResponse>;
  /**
   * Рекомендуемый метод без версии; использует `postV1BudgetDeposit`.
   *
   * POST /adv/v1/budget/deposit
   *
   * @see https://dev.wildberries.ru/docs/openapi/promotion
   */
  readonly postBudgetDeposit: (
    input: PostV1BudgetDepositInput,
    options?: WbRequestOptions,
  ) => Promise<PostV1BudgetDepositResponse>;
  /**
   * Рекомендуемый метод без версии; использует `getV1Upd`.
   *
   * GET /adv/v1/upd
   *
   * @see https://dev.wildberries.ru/docs/openapi/promotion
   */
  readonly getUpd: (
    input: GetV1UpdInput,
    options?: WbRequestOptions,
  ) => Promise<GetV1UpdResponse>;
  /**
   * Рекомендуемый метод без версии; использует `getV1Payments`.
   *
   * GET /adv/v1/payments
   *
   * @see https://dev.wildberries.ru/docs/openapi/promotion
   */
  readonly getPayments: (
    input?: GetV1PaymentsInput,
    options?: WbRequestOptions,
  ) => Promise<GetV1PaymentsResponse>;
  /**
   * Рекомендуемый метод без версии; использует `patchV0AuctionNms`.
   *
   * PATCH /adv/v0/auction/nms
   *
   * @see https://dev.wildberries.ru/docs/openapi/promotion
   */
  readonly patchAuctionNms: (
    input: PatchV0AuctionNmsInput,
    options?: WbRequestOptions,
  ) => Promise<PatchV0AuctionNmsResponse>;
  /**
   * Рекомендуемый метод без версии; использует `getV0BidsRecommendations`.
   *
   * GET /api/advert/v0/bids/recommendations
   *
   * @see https://dev.wildberries.ru/docs/openapi/promotion
   */
  readonly getBidsRecommendations: (
    input: GetV0BidsRecommendationsInput,
    options?: WbRequestOptions,
  ) => Promise<GetV0BidsRecommendationsResponse>;
  /**
   * Рекомендуемый метод без версии; использует `postV1NormqueryStats`.
   *
   * POST /adv/v1/normquery/stats
   *
   * @see https://dev.wildberries.ru/docs/openapi/promotion
   */
  readonly postNormqueryStats: (
    input: PostV1NormqueryStatsInput,
    options?: WbRequestOptions,
  ) => Promise<PostV1NormqueryStatsResponse>;
  /**
   * Рекомендуемый метод без версии; использует `postV0NormqueryGetBids`.
   *
   * POST /adv/v0/normquery/get-bids
   *
   * @see https://dev.wildberries.ru/docs/openapi/promotion
   */
  readonly postNormqueryGetBids: (
    input: PostV0NormqueryGetBidsInput,
    options?: WbRequestOptions,
  ) => Promise<PostV0NormqueryGetBidsResponse>;
  /**
   * Рекомендуемый метод без версии; использует `getV1Config`.
   *
   * GET /api/advert/v1/config
   *
   * @see https://dev.wildberries.ru/docs/openapi/promotion
   */
  readonly getConfig: (
    options?: WbRequestOptions,
  ) => Promise<GetV1ConfigResponse>;
  /**
   * Рекомендуемый метод без версии; использует `postV1NormqueryBids`.
   *
   * POST /api/advert/v1/normquery/bids
   *
   * @see https://dev.wildberries.ru/docs/openapi/promotion
   */
  readonly postNormqueryBids: (
    input: PostV1NormqueryBidsInput,
    options?: WbRequestOptions,
  ) => Promise<PostV1NormqueryBidsResponse>;
  /**
   * Рекомендуемый метод без версии; использует `deleteV0NormqueryBids`.
   *
   * DELETE /adv/v0/normquery/bids
   *
   * @see https://dev.wildberries.ru/docs/openapi/promotion
   */
  readonly deleteNormqueryBids: (
    input: DeleteV0NormqueryBidsInput,
    options?: WbRequestOptions,
  ) => Promise<DeleteV0NormqueryBidsResponse>;
  /**
   * Рекомендуемый метод без версии; использует `postV0NormqueryGetMinus`.
   *
   * POST /adv/v0/normquery/get-minus
   *
   * @see https://dev.wildberries.ru/docs/openapi/promotion
   */
  readonly postNormqueryGetMinus: (
    input: PostV0NormqueryGetMinusInput,
    options?: WbRequestOptions,
  ) => Promise<PostV0NormqueryGetMinusResponse>;
  /**
   * Рекомендуемый метод без версии; использует `postV0NormquerySetMinus`.
   *
   * POST /adv/v0/normquery/set-minus
   *
   * @see https://dev.wildberries.ru/docs/openapi/promotion
   */
  readonly postNormquerySetMinus: (
    input: PostV0NormquerySetMinusInput,
    options?: WbRequestOptions,
  ) => Promise<PostV0NormquerySetMinusResponse>;
  /**
   * Рекомендуемый метод без версии; использует `getV1Count`.
   *
   * GET /adv/v1/count
   *
   * @see https://dev.wildberries.ru/docs/openapi/promotion
   */
  readonly getCount: (
    options?: WbRequestOptions,
  ) => Promise<GetV1CountResponse>;
  /**
   * Рекомендуемый метод без версии; использует `getV1Advert`.
   *
   * GET /adv/v1/advert
   *
   * @see https://dev.wildberries.ru/docs/openapi/promotion
   */
  readonly getAdvert: (
    input: GetV1AdvertInput,
    options?: WbRequestOptions,
  ) => Promise<GetV1AdvertResponse>;
  /**
   * Рекомендуемый метод без версии; использует `getV3Fullstats`.
   *
   * GET /adv/v3/fullstats
   *
   * @see https://dev.wildberries.ru/docs/openapi/promotion
   */
  readonly getFullstats: (
    input: GetV3FullstatsInput,
    options?: WbRequestOptions,
  ) => Promise<GetV3FullstatsResponse>;
  /**
   * Рекомендуемый метод без версии; использует `postV1Stats`.
   *
   * POST /adv/v1/stats
   *
   * @see https://dev.wildberries.ru/docs/openapi/promotion
   */
  readonly postStats: (
    input: PostV1StatsInput,
    options?: WbRequestOptions,
  ) => Promise<PostV1StatsResponse>;
  /**
   * Рекомендуемый метод без версии; использует `getV1CalendarPromotions`.
   *
   * GET /api/v1/calendar/promotions
   *
   * @see https://dev.wildberries.ru/docs/openapi/promotion
   */
  readonly getCalendarPromotions: (
    input: GetV1CalendarPromotionsInput,
    options?: WbRequestOptions,
  ) => Promise<GetV1CalendarPromotionsResponse>;
  /**
   * Рекомендуемый метод без версии; использует `getV1CalendarPromotionsDetails`.
   *
   * GET /api/v1/calendar/promotions/details
   *
   * @see https://dev.wildberries.ru/docs/openapi/promotion
   */
  readonly getCalendarPromotionsDetails: (
    input: GetV1CalendarPromotionsDetailsInput,
    options?: WbRequestOptions,
  ) => Promise<GetV1CalendarPromotionsDetailsResponse>;
  /**
   * Рекомендуемый метод без версии; использует `getV1CalendarPromotionsNomenclatures`.
   *
   * GET /api/v1/calendar/promotions/nomenclatures
   *
   * @see https://dev.wildberries.ru/docs/openapi/promotion
   */
  readonly getCalendarPromotionsNomenclatures: (
    input: GetV1CalendarPromotionsNomenclaturesInput,
    options?: WbRequestOptions,
  ) => Promise<GetV1CalendarPromotionsNomenclaturesResponse>;
  /**
   * Рекомендуемый метод без версии; использует `postV1CalendarPromotionsUpload`.
   *
   * POST /api/v1/calendar/promotions/upload
   *
   * @see https://dev.wildberries.ru/docs/openapi/promotion
   */
  readonly postCalendarPromotionsUpload: (
    input: PostV1CalendarPromotionsUploadInput,
    options?: WbRequestOptions,
  ) => Promise<PostV1CalendarPromotionsUploadResponse>;
  /**
   * Рекомендуемый метод без версии; использует `postV0NormqueryList`.
   *
   * POST /adv/v0/normquery/list
   *
   * @see https://dev.wildberries.ru/docs/openapi/promotion
   */
  readonly postNormqueryList: (
    input: PostV0NormqueryListInput,
    options?: WbRequestOptions,
  ) => Promise<PostV0NormqueryListResponse>;
}

export interface WbCommunicationsApi {
  /**
   * Непросмотренные отзывы и вопросы
   *
   * Метод проверяет наличие непросмотренных [вопросов](/openapi/user-communication#tag/questions/operation/getV1Questions) и [отзывов](/openapi/user-communication#tag/feedbacks/operation/getV1Feedbacks) от покупателей. Если у продавца есть непросмотренные вопросы или отзывы, возвращает `true`.
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца для всех методов категории Вопросы и отзывы:
   *
   * | Тип | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- | --- |
   * | Персональный | 1 сек | 3 запроса | 333 мс | 6 запросов |
   * | Сервисный | 1 сек | 3 запроса | 333 мс | 6 запросов |
   * | Базовый с секретом | 1 сек | 3 запроса | 333 мс | 6 запросов |
   * | Базовый | 1 ч | 5 запросов | 12 мин | 1 запрос |
   *
   * GET /api/v1/new-feedbacks-questions
   *
   * Разделы WB: Вопросы.
   *
   * @see https://dev.wildberries.ru/docs/openapi/communications
   */
  readonly getV1NewFeedbacksQuestions: (
    options?: WbRequestOptions,
  ) => Promise<GetV1NewFeedbacksQuestionsResponse>;
  /**
   * Неотвеченные вопросы
   *
   * Метод возвращает общее количество неотвеченных [вопросов](/openapi/user-communication#tag/questions/operation/getV1Questions) и количество неотвеченных вопросов за сегодня.
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца для всех методов категории Вопросы и отзывы:
   *
   * | Тип | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- | --- |
   * | Персональный | 1 сек | 3 запроса | 333 мс | 6 запросов |
   * | Сервисный | 1 сек | 3 запроса | 333 мс | 6 запросов |
   * | Базовый с секретом | 1 сек | 3 запроса | 333 мс | 6 запросов |
   * | Базовый | 1 ч | 5 запросов | 12 мин | 1 запрос |
   *
   * GET /api/v1/questions/count-unanswered
   *
   * Разделы WB: Вопросы.
   *
   * @see https://dev.wildberries.ru/docs/openapi/communications
   */
  readonly getV1QuestionsCountUnanswered: (
    options?: WbRequestOptions,
  ) => Promise<GetV1QuestionsCountUnansweredResponse>;
  /**
   * Количество вопросов
   *
   * Метод возвращает количество отвеченных или неотвеченных [вопросов](/openapi/user-communication#tag/questions/operation/getV1Questions) за заданный период.
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца для всех методов категории Вопросы и отзывы:
   *
   * | Тип | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- | --- |
   * | Персональный | 1 сек | 3 запроса | 333 мс | 6 запросов |
   * | Сервисный | 1 сек | 3 запроса | 333 мс | 6 запросов |
   * | Базовый с секретом | 1 сек | 3 запроса | 333 мс | 6 запросов |
   * | Базовый | 1 ч | 5 запросов | 12 мин | 1 запрос |
   *
   * GET /api/v1/questions/count
   *
   * Разделы WB: Вопросы.
   *
   * @see https://dev.wildberries.ru/docs/openapi/communications
   */
  readonly getV1QuestionsCount: (
    input?: GetV1QuestionsCountInput,
    options?: WbRequestOptions,
  ) => Promise<GetV1QuestionsCountResponse>;
  /**
   * Список вопросов
   *
   * Метод возвращает список вопросов по заданным фильтрам. Вы можете:
   *  - получить данные отвеченных и неотвеченных вопросов
   *  - сортировать вопросы по дате
   *  - настроить пагинацию и количество вопросов в ответе
   *
   *  Можно получить максимум 10 000 вопросов в одном ответе
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца для всех методов категории Вопросы и отзывы:
   *
   * | Тип | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- | --- |
   * | Персональный | 1 сек | 3 запроса | 333 мс | 6 запросов |
   * | Сервисный | 1 сек | 3 запроса | 333 мс | 6 запросов |
   * | Базовый с секретом | 1 сек | 3 запроса | 333 мс | 6 запросов |
   * | Базовый | 1 ч | 5 запросов | 12 мин | 1 запрос |
   *
   * GET /api/v1/questions
   *
   * Разделы WB: Вопросы.
   *
   * @see https://dev.wildberries.ru/docs/openapi/communications
   */
  readonly getV1Questions: (
    input: GetV1QuestionsInput,
    options?: WbRequestOptions,
  ) => Promise<GetV1QuestionsResponse>;
  /**
   * Работа с вопросами
   *
   * В зависимости от тела запроса, метод позволяет:
   *  - отметить [вопрос](/openapi/user-communication#tag/questions/operation/getV1Questions) как просмотренный
   *  - отклонить вопрос
   *  - ответить на вопрос или отредактировать ответ
   *
   *  Отредактировать ответ на вопрос можно 1 раз в течение 60 дней после отправки ответа
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца для всех методов категории Вопросы и отзывы:
   *
   * | Тип | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- | --- |
   * | Персональный | 1 сек | 3 запроса | 333 мс | 6 запросов |
   * | Сервисный | 1 сек | 3 запроса | 333 мс | 6 запросов |
   * | Базовый с секретом | 1 сек | 3 запроса | 333 мс | 6 запросов |
   * | Базовый | 1 ч | 5 запросов | 12 мин | 1 запрос |
   *
   * PATCH /api/v1/questions
   *
   * Разделы WB: Вопросы.
   *
   * @see https://dev.wildberries.ru/docs/openapi/communications
   */
  readonly patchV1Questions: (
    input?: PatchV1QuestionsInput,
    options?: WbRequestOptions,
  ) => Promise<PatchV1QuestionsResponse>;
  /**
   * Получить вопрос по ID
   *
   * Метод возвращает данные [вопроса](/openapi/user-communication#tag/questions/operation/getV1Questions) по его ID. Далее вы можете [работать с этим вопросом](/openapi/user-communication#tag/questions/operation/patchV1Questions).
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца для всех методов категории Вопросы и отзывы:
   *
   * | Тип | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- | --- |
   * | Персональный | 1 сек | 3 запроса | 333 мс | 6 запросов |
   * | Сервисный | 1 сек | 3 запроса | 333 мс | 6 запросов |
   * | Базовый с секретом | 1 сек | 3 запроса | 333 мс | 6 запросов |
   * | Базовый | 1 ч | 5 запросов | 12 мин | 1 запрос |
   *
   * GET /api/v1/question
   *
   * Разделы WB: Вопросы.
   *
   * @see https://dev.wildberries.ru/docs/openapi/communications
   */
  readonly getV1Question: (
    input: GetV1QuestionInput,
    options?: WbRequestOptions,
  ) => Promise<GetV1QuestionResponse>;
  /**
   * Необработанные отзывы
   *
   * Метод возвращает:
   *  - количество необработанных [отзывов](/openapi/user-communication#tag/feedbacks/operation/getV1Feedbacks) за сегодня и за всё время
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца для всех методов категории Вопросы и отзывы:
   *
   * | Тип | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- | --- |
   * | Персональный | 1 сек | 3 запроса | 333 мс | 6 запросов |
   * | Сервисный | 1 сек | 3 запроса | 333 мс | 6 запросов |
   * | Базовый с секретом | 1 сек | 3 запроса | 333 мс | 6 запросов |
   * | Базовый | 1 ч | 5 запросов | 12 мин | 1 запрос |
   *
   * GET /api/v1/feedbacks/count-unanswered
   *
   * Разделы WB: Отзывы.
   *
   * @see https://dev.wildberries.ru/docs/openapi/communications
   */
  readonly getV1FeedbacksCountUnanswered: (
    options?: WbRequestOptions,
  ) => Promise<GetV1FeedbacksCountUnansweredResponse>;
  /**
   * Количество отзывов
   *
   * Метод возвращает количество обработанных или необработанных [отзывов](/openapi/user-communication#tag/feedbacks/operation/getV1Feedbacks) за заданный период.
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца для всех методов категории Вопросы и отзывы:
   *
   * | Тип | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- | --- |
   * | Персональный | 1 сек | 3 запроса | 333 мс | 6 запросов |
   * | Сервисный | 1 сек | 3 запроса | 333 мс | 6 запросов |
   * | Базовый с секретом | 1 сек | 3 запроса | 333 мс | 6 запросов |
   * | Базовый | 1 ч | 5 запросов | 12 мин | 1 запрос |
   *
   * GET /api/v1/feedbacks/count
   *
   * Разделы WB: Отзывы.
   *
   * @see https://dev.wildberries.ru/docs/openapi/communications
   */
  readonly getV1FeedbacksCount: (
    input?: GetV1FeedbacksCountInput,
    options?: WbRequestOptions,
  ) => Promise<GetV1FeedbacksCountResponse>;
  /**
   * Список отзывов
   *
   * Метод возвращает список отзывов по заданным фильтрам. Вы можете:
   *  - получить данные обработанных и необработанных отзывов
   *  - сортировать отзывы по дате
   *  - настроить пагинацию и количество отзывов в ответе
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца для всех методов категории Вопросы и отзывы:
   *
   * | Тип | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- | --- |
   * | Персональный | 1 сек | 3 запроса | 333 мс | 6 запросов |
   * | Сервисный | 1 сек | 3 запроса | 333 мс | 6 запросов |
   * | Базовый с секретом | 1 сек | 3 запроса | 333 мс | 6 запросов |
   * | Базовый | 1 ч | 5 запросов | 12 мин | 1 запрос |
   *
   * GET /api/v1/feedbacks
   *
   * Разделы WB: Отзывы.
   *
   * @see https://dev.wildberries.ru/docs/openapi/communications
   */
  readonly getV1Feedbacks: (
    input: GetV1FeedbacksInput,
    options?: WbRequestOptions,
  ) => Promise<GetV1FeedbacksResponse>;
  /**
   * Ответить на отзыв
   *
   * Метод позволяет ответить на [отзыв](/openapi/user-communication#tag/feedbacks/operation/getV1Feedbacks) покупателя.
   *
   *  ID отзыва не валидируется. Если в запросе вы передали некорректный ID, вы не получите ошибку.
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца для всех методов категории Вопросы и отзывы:
   *
   * | Тип | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- | --- |
   * | Персональный | 1 сек | 3 запроса | 333 мс | 6 запросов |
   * | Сервисный | 1 сек | 3 запроса | 333 мс | 6 запросов |
   * | Базовый с секретом | 1 сек | 3 запроса | 333 мс | 6 запросов |
   * | Базовый | 1 ч | 5 запросов | 12 мин | 1 запрос |
   *
   * POST /api/v1/feedbacks/answer
   *
   * Разделы WB: Отзывы.
   *
   * @see https://dev.wildberries.ru/docs/openapi/communications
   */
  readonly postV1FeedbacksAnswer: (
    input?: PostV1FeedbacksAnswerInput,
    options?: WbRequestOptions,
  ) => Promise<PostV1FeedbacksAnswerResponse>;
  /**
   * Отредактировать ответ на отзыв
   *
   * Метод позволяет отредактировать уже отправленный [ответ на отзыв](/openapi/user-communication#tag/feedbacks/operation/postV1FeedbacksAnswer) покупателя.
   *
   * Отредактировать ответ можно только один раз в течение 60 дней c момента отправки.
   *
   *  ID отзыва не валидируется. Если в запросе вы передали некорректный ID, вы не получите ошибку.
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца для всех методов категории Вопросы и отзывы:
   *
   * | Тип | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- | --- |
   * | Персональный | 1 сек | 3 запроса | 333 мс | 6 запросов |
   * | Сервисный | 1 сек | 3 запроса | 333 мс | 6 запросов |
   * | Базовый с секретом | 1 сек | 3 запроса | 333 мс | 6 запросов |
   * | Базовый | 1 ч | 5 запросов | 12 мин | 1 запрос |
   *
   * PATCH /api/v1/feedbacks/answer
   *
   * Разделы WB: Отзывы.
   *
   * @see https://dev.wildberries.ru/docs/openapi/communications
   */
  readonly patchV1FeedbacksAnswer: (
    input?: PatchV1FeedbacksAnswerInput,
    options?: WbRequestOptions,
  ) => Promise<PatchV1FeedbacksAnswerResponse>;
  /**
   * Возврат товара по ID отзыва
   *
   * Метод запрашивает возврат товара, по которому оставлен [отзыв](/openapi/user-communication#tag/feedbacks/operation/getV1Feedbacks).
   *
   * Возврат доступен для отзывов с полем `"isAbleReturnProductOrders": true`.
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца для всех методов категории Вопросы и отзывы:
   *
   * | Тип | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- | --- |
   * | Персональный | 1 сек | 3 запроса | 333 мс | 6 запросов |
   * | Сервисный | 1 сек | 3 запроса | 333 мс | 6 запросов |
   * | Базовый с секретом | 1 сек | 3 запроса | 333 мс | 6 запросов |
   * | Базовый | 1 ч | 5 запросов | 12 мин | 1 запрос |
   *
   * POST /api/v1/feedbacks/order/return
   *
   * Разделы WB: Отзывы.
   *
   * @see https://dev.wildberries.ru/docs/openapi/communications
   */
  readonly postV1FeedbacksOrderReturn: (
    input: PostV1FeedbacksOrderReturnInput,
    options?: WbRequestOptions,
  ) => Promise<PostV1FeedbacksOrderReturnResponse>;
  /**
   * Получить отзыв по ID
   *
   * Метод возвращает данные [отзыва](/openapi/user-communication#tag/feedbacks/operation/getV1Feedbacks) по его ID.
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца для всех методов категории Вопросы и отзывы:
   *
   * | Тип | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- | --- |
   * | Персональный | 1 сек | 3 запроса | 333 мс | 6 запросов |
   * | Сервисный | 1 сек | 3 запроса | 333 мс | 6 запросов |
   * | Базовый с секретом | 1 сек | 3 запроса | 333 мс | 6 запросов |
   * | Базовый | 1 ч | 5 запросов | 12 мин | 1 запрос |
   *
   * GET /api/v1/feedback
   *
   * Разделы WB: Отзывы.
   *
   * @see https://dev.wildberries.ru/docs/openapi/communications
   */
  readonly getV1Feedback: (
    input: GetV1FeedbackInput,
    options?: WbRequestOptions,
  ) => Promise<GetV1FeedbackResponse>;
  /**
   * Список архивных отзывов
   *
   * Метод возвращает список архивных [отзывов](/openapi/user-communication#tag/feedbacks/operation/getV1Feedbacks).
   *
   * Отзыв становится архивным, если:
   *  - на отзыв получен ответ
   *  - на отзыв не получен ответ в течение 30 дней
   *  - в отзыве нет текста и фото
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца для всех методов категории Вопросы и отзывы:
   *
   * | Тип | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- | --- |
   * | Персональный | 1 сек | 3 запроса | 333 мс | 6 запросов |
   * | Сервисный | 1 сек | 3 запроса | 333 мс | 6 запросов |
   * | Базовый с секретом | 1 сек | 3 запроса | 333 мс | 6 запросов |
   * | Базовый | 1 ч | 5 запросов | 12 мин | 1 запрос |
   *
   * GET /api/v1/feedbacks/archive
   *
   * Разделы WB: Отзывы.
   *
   * @see https://dev.wildberries.ru/docs/openapi/communications
   */
  readonly getV1FeedbacksArchive: (
    input: GetV1FeedbacksArchiveInput,
    options?: WbRequestOptions,
  ) => Promise<GetV1FeedbacksArchiveResponse>;
  /**
   * Список закреплённых и откреплённых отзывов
   *
   * Метод предоставляет список закреплённых и откреплённых отзывов.
   *
   * Откреплёнными считаются только отзывы, которые были откреплены автоматически по причинам, указанным в ответе в поле `unpinnedCause`.
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца для всех методов категории Вопросы и отзывы:
   *
   * | Тип | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- | --- |
   * | Персональный | 1 сек | 3 запроса | 333 мс | 6 запросов |
   * | Сервисный | 1 сек | 3 запроса | 333 мс | 6 запросов |
   * | Базовый с секретом | 1 сек | 3 запроса | 333 мс | 6 запросов |
   * | Базовый | 1 ч | 5 запросов | 12 мин | 1 запрос |
   *
   * GET /api/feedbacks/v1/pins
   *
   * Разделы WB: Закреплённые отзывы.
   *
   * @see https://dev.wildberries.ru/docs/openapi/communications
   */
  readonly getFeedbacksV1Pins: (
    input?: GetFeedbacksV1PinsInput,
    options?: WbRequestOptions,
  ) => Promise<GetFeedbacksV1PinsResponse>;
  /**
   * Закрепить отзывы
   *
   * Метод позволяет закрепить отзывы в карточке товара или в группе [объединённых](/knowledge-base/articles/019d49a4-1320-71bb-9dac-8ba07e7177ce/rabota-s-tovarami#obuedinenie-i-razuedinenie-kartochek-tovarov) карточек.
   *
   * Чтобы получить ID отзывов, используйте метод [Список закреплённых и откреплённых отзывов](/openapi/user-communication#tag/pinnedFeedbacks/operation/getFeedbacksV1Pins).
   *
   * Метод доступен по [подписке Джем](https://seller.wildberries.ru/monetization/jam) или c [тарифной опцией](https://seller.wildberries.ru/tariff-constructor) **Закрепление отзыва**.
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца для всех методов категории Вопросы и отзывы:
   *
   * | Тип | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- | --- |
   * | Персональный | 1 сек | 3 запроса | 333 мс | 6 запросов |
   * | Сервисный | 1 сек | 3 запроса | 333 мс | 6 запросов |
   * | Базовый с секретом | 1 сек | 3 запроса | 333 мс | 6 запросов |
   * | Базовый | 1 ч | 5 запросов | 12 мин | 1 запрос |
   *
   * POST /api/feedbacks/v1/pins
   *
   * Разделы WB: Закреплённые отзывы.
   *
   * @see https://dev.wildberries.ru/docs/openapi/communications
   */
  readonly postFeedbacksV1Pins: (
    input: PostFeedbacksV1PinsInput,
    options?: WbRequestOptions,
  ) => Promise<PostFeedbacksV1PinsResponse>;
  /**
   * Открепить отзывы
   *
   * Метод позволяет открепить отзывы в карточке товара или в группе [объединённых](/knowledge-base/articles/019d49a4-1320-71bb-9dac-8ba07e7177ce/rabota-s-tovarami#obuedinenie-i-razuedinenie-kartochek-tovarov) карточек.
   *
   * Чтобы получить `pinId` — ID операций закрепления, используйте метод [Список закреплённых и откреплённых отзывов](/openapi/user-communication#tag/pinnedFeedbacks/operation/getFeedbacksV1Pins).
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца для всех методов категории Вопросы и отзывы:
   *
   * | Тип | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- | --- |
   * | Персональный | 1 сек | 3 запроса | 333 мс | 6 запросов |
   * | Сервисный | 1 сек | 3 запроса | 333 мс | 6 запросов |
   * | Базовый с секретом | 1 сек | 3 запроса | 333 мс | 6 запросов |
   * | Базовый | 1 ч | 5 запросов | 12 мин | 1 запрос |
   *
   * DELETE /api/feedbacks/v1/pins
   *
   * Разделы WB: Закреплённые отзывы.
   *
   * @see https://dev.wildberries.ru/docs/openapi/communications
   */
  readonly deleteFeedbacksV1Pins: (
    input: DeleteFeedbacksV1PinsInput,
    options?: WbRequestOptions,
  ) => Promise<DeleteFeedbacksV1PinsResponse>;
  /**
   * Количество закреплённых и откреплённых отзывов
   *
   * Метод возвращает количество закреплённых и откреплённых отзывов за заданный период.
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца для всех методов категории Вопросы и отзывы:
   *
   * | Тип | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- | --- |
   * | Персональный | 1 сек | 3 запроса | 333 мс | 6 запросов |
   * | Сервисный | 1 сек | 3 запроса | 333 мс | 6 запросов |
   * | Базовый с секретом | 1 сек | 3 запроса | 333 мс | 6 запросов |
   * | Базовый | 1 ч | 5 запросов | 12 мин | 1 запрос |
   *
   * GET /api/feedbacks/v1/pins/count
   *
   * Разделы WB: Закреплённые отзывы.
   *
   * @see https://dev.wildberries.ru/docs/openapi/communications
   */
  readonly getFeedbacksV1PinsCount: (
    input?: GetFeedbacksV1PinsCountInput,
    options?: WbRequestOptions,
  ) => Promise<GetFeedbacksV1PinsCountResponse>;
  /**
   * Лимиты закреплённых отзывов
   *
   * Метод возвращает лимиты закреплённых отзывов по тарифу и подписке.
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца для всех методов категории Вопросы и отзывы:
   *
   * | Тип | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- | --- |
   * | Персональный | 1 сек | 3 запроса | 333 мс | 6 запросов |
   * | Сервисный | 1 сек | 3 запроса | 333 мс | 6 запросов |
   * | Базовый с секретом | 1 сек | 3 запроса | 333 мс | 6 запросов |
   * | Базовый | 1 ч | 5 запросов | 12 мин | 1 запрос |
   *
   * GET /api/feedbacks/v1/pins/limits
   *
   * Разделы WB: Закреплённые отзывы.
   *
   * @see https://dev.wildberries.ru/docs/openapi/communications
   */
  readonly getFeedbacksV1PinsLimits: (
    options?: WbRequestOptions,
  ) => Promise<GetFeedbacksV1PinsLimitsResponse>;
  /**
   * Список чатов
   *
   * Метод возвращает список всех чатов продавца. По этим данным можно получить [события чатов](/openapi/user-communication#tag/buyersChat/operation/getV1SellerEvents) или [отправить сообщение покупателю](/openapi/user-communication#tag/buyersChat/operation/postV1SellerMessage).
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца:
   *
   * | Тип | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- | --- |
   * | Персональный | 10 сек | 10 запросов | 1 сек | 10 запросов |
   * | Сервисный | 10 сек | 10 запросов | 1 сек | 10 запросов |
   * | Базовый с секретом | 10 сек | 10 запросов | 1 сек | 10 запросов |
   * | Базовый | 1 ч | 1 запрос | 1 ч | 1 запрос |
   *
   * GET /api/v1/seller/chats
   *
   * Разделы WB: Чат с покупателями.
   *
   * @see https://dev.wildberries.ru/docs/openapi/communications
   */
  readonly getV1SellerChats: (
    options?: WbRequestOptions,
  ) => Promise<GetV1SellerChatsResponse>;
  /**
   * События чатов
   *
   * Метод возвращает список событий всех [чатов с покупателями](/openapi/user-communication#tag/buyersChat/operation/getV1SellerChats).
   *
   * Чтобы получить все события:
   *  1. Сделайте первый запрос без параметра `next`.
   *  2. Повторяйте запрос со значением параметра `next` из ответа на предыдущий запрос, пока `totalEvents` не станет равным `0`. Это будет означать, что вы получили все события.
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца:
   *
   * | Тип | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- | --- |
   * | Персональный | 10 сек | 10 запросов | 1 сек | 10 запросов |
   * | Сервисный | 10 сек | 10 запросов | 1 сек | 10 запросов |
   * | Базовый с секретом | 10 сек | 10 запросов | 1 сек | 10 запросов |
   * | Базовый | 1 ч | 1 запрос | 1 ч | 1 запрос |
   *
   * GET /api/v1/seller/events
   *
   * Разделы WB: Чат с покупателями.
   *
   * @see https://dev.wildberries.ru/docs/openapi/communications
   */
  readonly getV1SellerEvents: (
    input?: GetV1SellerEventsInput,
    options?: WbRequestOptions,
  ) => Promise<GetV1SellerEventsResponse>;
  /**
   * Отправить сообщение
   *
   * Метод отправляет сообщения в [чат с покупателем](/openapi/user-communication#tag/buyersChat/operation/getV1SellerChats).
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца:
   *
   * | Тип | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- | --- |
   * | Персональный | 10 сек | 10 запросов | 1 сек | 10 запросов |
   * | Сервисный | 10 сек | 10 запросов | 1 сек | 10 запросов |
   * | Базовый с секретом | 10 сек | 10 запросов | 1 сек | 10 запросов |
   * | Базовый | 1 ч | 1 запрос | 1 ч | 1 запрос |
   *
   * POST /api/v1/seller/message
   *
   * Разделы WB: Чат с покупателями.
   *
   * @see https://dev.wildberries.ru/docs/openapi/communications
   */
  readonly postV1SellerMessage: (
    input: PostV1SellerMessageInput,
    options?: WbRequestOptions,
  ) => Promise<PostV1SellerMessageResponse>;
  /**
   * Получить файл из сообщения
   *
   * Метод возвращает файл или изображение из сообщения по его ID.
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца:
   *
   * | Тип | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- | --- |
   * | Персональный | 10 сек | 10 запросов | 1 сек | 10 запросов |
   * | Сервисный | 10 сек | 10 запросов | 1 сек | 10 запросов |
   * | Базовый с секретом | 10 сек | 10 запросов | 1 сек | 10 запросов |
   * | Базовый | 1 ч | 10 запросов | 6 мин | 1 запрос |
   *
   * GET /api/v1/seller/download/{id}
   *
   * Разделы WB: Чат с покупателями.
   *
   * @see https://dev.wildberries.ru/docs/openapi/communications
   */
  readonly getV1SellerDownloadId: (
    input: GetV1SellerDownloadIdInput,
    options?: WbRequestOptions,
  ) => Promise<GetV1SellerDownloadIdResponse>;
  /**
   * Заявки покупателей на возврат
   *
   * Метод возвращает заявки покупателей на возврат товаров за последние 14 дней. Вы можете [отвечать на эти заявки](/openapi/user-communication#tag/buyersReturns/operation/patchV1Claim).
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца:
   *
   * | Тип | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- | --- |
   * | Персональный | 1 мин | 20 запросов | 3 сек | 10 запросов |
   * | Сервисный | 1 мин | 20 запросов | 3 сек | 10 запросов |
   * | Базовый с секретом | 1 мин | 20 запросов | 3 сек | 10 запросов |
   * | Базовый | 1 ч | 1 запрос | 1 ч | 1 запрос |
   *
   * GET /api/v1/claims
   *
   * Разделы WB: Возвраты покупателями.
   *
   * @see https://dev.wildberries.ru/docs/openapi/communications
   */
  readonly getV1Claims: (
    input: GetV1ClaimsInput,
    options?: WbRequestOptions,
  ) => Promise<GetV1ClaimsResponse>;
  /**
   * Ответ на заявку покупателя
   *
   * Метод отправляет ответ на [заявку](/openapi/user-communication#tag/buyersReturns/operation/getV1Claims) покупателя на возврат товаров.
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца:
   *
   * | Тип | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- | --- |
   * | Персональный | 1 мин | 20 запросов | 3 сек | 10 запросов |
   * | Сервисный | 1 мин | 20 запросов | 3 сек | 10 запросов |
   * | Базовый с секретом | 1 мин | 20 запросов | 3 сек | 10 запросов |
   * | Базовый | 1 ч | 1 запрос | 1 ч | 1 запрос |
   *
   * PATCH /api/v1/claim
   *
   * Разделы WB: Возвраты покупателями.
   *
   * @see https://dev.wildberries.ru/docs/openapi/communications
   */
  readonly patchV1Claim: (
    input: PatchV1ClaimInput,
    options?: WbRequestOptions,
  ) => Promise<PatchV1ClaimResponse>;
  /**
   * Рекомендуемый метод без версии; использует `getV1NewFeedbacksQuestions`.
   *
   * GET /api/v1/new-feedbacks-questions
   *
   * @see https://dev.wildberries.ru/docs/openapi/communications
   */
  readonly getNewFeedbacksQuestions: (
    options?: WbRequestOptions,
  ) => Promise<GetV1NewFeedbacksQuestionsResponse>;
  /**
   * Рекомендуемый метод без версии; использует `getV1QuestionsCountUnanswered`.
   *
   * GET /api/v1/questions/count-unanswered
   *
   * @see https://dev.wildberries.ru/docs/openapi/communications
   */
  readonly getQuestionsCountUnanswered: (
    options?: WbRequestOptions,
  ) => Promise<GetV1QuestionsCountUnansweredResponse>;
  /**
   * Рекомендуемый метод без версии; использует `getV1QuestionsCount`.
   *
   * GET /api/v1/questions/count
   *
   * @see https://dev.wildberries.ru/docs/openapi/communications
   */
  readonly getQuestionsCount: (
    input?: GetV1QuestionsCountInput,
    options?: WbRequestOptions,
  ) => Promise<GetV1QuestionsCountResponse>;
  /**
   * Рекомендуемый метод без версии; использует `getV1Questions`.
   *
   * GET /api/v1/questions
   *
   * @see https://dev.wildberries.ru/docs/openapi/communications
   */
  readonly getQuestions: (
    input: GetV1QuestionsInput,
    options?: WbRequestOptions,
  ) => Promise<GetV1QuestionsResponse>;
  /**
   * Рекомендуемый метод без версии; использует `patchV1Questions`.
   *
   * PATCH /api/v1/questions
   *
   * @see https://dev.wildberries.ru/docs/openapi/communications
   */
  readonly patchQuestions: (
    input?: PatchV1QuestionsInput,
    options?: WbRequestOptions,
  ) => Promise<PatchV1QuestionsResponse>;
  /**
   * Рекомендуемый метод без версии; использует `getV1Question`.
   *
   * GET /api/v1/question
   *
   * @see https://dev.wildberries.ru/docs/openapi/communications
   */
  readonly getQuestion: (
    input: GetV1QuestionInput,
    options?: WbRequestOptions,
  ) => Promise<GetV1QuestionResponse>;
  /**
   * Рекомендуемый метод без версии; использует `getV1FeedbacksCountUnanswered`.
   *
   * GET /api/v1/feedbacks/count-unanswered
   *
   * @see https://dev.wildberries.ru/docs/openapi/communications
   */
  readonly getFeedbacksCountUnanswered: (
    options?: WbRequestOptions,
  ) => Promise<GetV1FeedbacksCountUnansweredResponse>;
  /**
   * Рекомендуемый метод без версии; использует `getV1FeedbacksCount`.
   *
   * GET /api/v1/feedbacks/count
   *
   * @see https://dev.wildberries.ru/docs/openapi/communications
   */
  readonly getFeedbacksCount: (
    input?: GetV1FeedbacksCountInput,
    options?: WbRequestOptions,
  ) => Promise<GetV1FeedbacksCountResponse>;
  /**
   * Рекомендуемый метод без версии; использует `getV1Feedbacks`.
   *
   * GET /api/v1/feedbacks
   *
   * @see https://dev.wildberries.ru/docs/openapi/communications
   */
  readonly getFeedbacks: (
    input: GetV1FeedbacksInput,
    options?: WbRequestOptions,
  ) => Promise<GetV1FeedbacksResponse>;
  /**
   * Рекомендуемый метод без версии; использует `postV1FeedbacksAnswer`.
   *
   * POST /api/v1/feedbacks/answer
   *
   * @see https://dev.wildberries.ru/docs/openapi/communications
   */
  readonly postFeedbacksAnswer: (
    input?: PostV1FeedbacksAnswerInput,
    options?: WbRequestOptions,
  ) => Promise<PostV1FeedbacksAnswerResponse>;
  /**
   * Рекомендуемый метод без версии; использует `patchV1FeedbacksAnswer`.
   *
   * PATCH /api/v1/feedbacks/answer
   *
   * @see https://dev.wildberries.ru/docs/openapi/communications
   */
  readonly patchFeedbacksAnswer: (
    input?: PatchV1FeedbacksAnswerInput,
    options?: WbRequestOptions,
  ) => Promise<PatchV1FeedbacksAnswerResponse>;
  /**
   * Рекомендуемый метод без версии; использует `postV1FeedbacksOrderReturn`.
   *
   * POST /api/v1/feedbacks/order/return
   *
   * @see https://dev.wildberries.ru/docs/openapi/communications
   */
  readonly postFeedbacksOrderReturn: (
    input: PostV1FeedbacksOrderReturnInput,
    options?: WbRequestOptions,
  ) => Promise<PostV1FeedbacksOrderReturnResponse>;
  /**
   * Рекомендуемый метод без версии; использует `getV1Feedback`.
   *
   * GET /api/v1/feedback
   *
   * @see https://dev.wildberries.ru/docs/openapi/communications
   */
  readonly getFeedback: (
    input: GetV1FeedbackInput,
    options?: WbRequestOptions,
  ) => Promise<GetV1FeedbackResponse>;
  /**
   * Рекомендуемый метод без версии; использует `getV1FeedbacksArchive`.
   *
   * GET /api/v1/feedbacks/archive
   *
   * @see https://dev.wildberries.ru/docs/openapi/communications
   */
  readonly getFeedbacksArchive: (
    input: GetV1FeedbacksArchiveInput,
    options?: WbRequestOptions,
  ) => Promise<GetV1FeedbacksArchiveResponse>;
  /**
   * Рекомендуемый метод без версии; использует `getFeedbacksV1Pins`.
   *
   * GET /api/feedbacks/v1/pins
   *
   * @see https://dev.wildberries.ru/docs/openapi/communications
   */
  readonly getFeedbacksPins: (
    input?: GetFeedbacksV1PinsInput,
    options?: WbRequestOptions,
  ) => Promise<GetFeedbacksV1PinsResponse>;
  /**
   * Рекомендуемый метод без версии; использует `postFeedbacksV1Pins`.
   *
   * POST /api/feedbacks/v1/pins
   *
   * @see https://dev.wildberries.ru/docs/openapi/communications
   */
  readonly postFeedbacksPins: (
    input: PostFeedbacksV1PinsInput,
    options?: WbRequestOptions,
  ) => Promise<PostFeedbacksV1PinsResponse>;
  /**
   * Рекомендуемый метод без версии; использует `deleteFeedbacksV1Pins`.
   *
   * DELETE /api/feedbacks/v1/pins
   *
   * @see https://dev.wildberries.ru/docs/openapi/communications
   */
  readonly deleteFeedbacksPins: (
    input: DeleteFeedbacksV1PinsInput,
    options?: WbRequestOptions,
  ) => Promise<DeleteFeedbacksV1PinsResponse>;
  /**
   * Рекомендуемый метод без версии; использует `getFeedbacksV1PinsCount`.
   *
   * GET /api/feedbacks/v1/pins/count
   *
   * @see https://dev.wildberries.ru/docs/openapi/communications
   */
  readonly getFeedbacksPinsCount: (
    input?: GetFeedbacksV1PinsCountInput,
    options?: WbRequestOptions,
  ) => Promise<GetFeedbacksV1PinsCountResponse>;
  /**
   * Рекомендуемый метод без версии; использует `getFeedbacksV1PinsLimits`.
   *
   * GET /api/feedbacks/v1/pins/limits
   *
   * @see https://dev.wildberries.ru/docs/openapi/communications
   */
  readonly getFeedbacksPinsLimits: (
    options?: WbRequestOptions,
  ) => Promise<GetFeedbacksV1PinsLimitsResponse>;
  /**
   * Рекомендуемый метод без версии; использует `getV1SellerChats`.
   *
   * GET /api/v1/seller/chats
   *
   * @see https://dev.wildberries.ru/docs/openapi/communications
   */
  readonly getSellerChats: (
    options?: WbRequestOptions,
  ) => Promise<GetV1SellerChatsResponse>;
  /**
   * Рекомендуемый метод без версии; использует `getV1SellerEvents`.
   *
   * GET /api/v1/seller/events
   *
   * @see https://dev.wildberries.ru/docs/openapi/communications
   */
  readonly getSellerEvents: (
    input?: GetV1SellerEventsInput,
    options?: WbRequestOptions,
  ) => Promise<GetV1SellerEventsResponse>;
  /**
   * Рекомендуемый метод без версии; использует `postV1SellerMessage`.
   *
   * POST /api/v1/seller/message
   *
   * @see https://dev.wildberries.ru/docs/openapi/communications
   */
  readonly postSellerMessage: (
    input: PostV1SellerMessageInput,
    options?: WbRequestOptions,
  ) => Promise<PostV1SellerMessageResponse>;
  /**
   * Рекомендуемый метод без версии; использует `getV1SellerDownloadId`.
   *
   * GET /api/v1/seller/download/{id}
   *
   * @see https://dev.wildberries.ru/docs/openapi/communications
   */
  readonly getSellerDownloadId: (
    input: GetV1SellerDownloadIdInput,
    options?: WbRequestOptions,
  ) => Promise<GetV1SellerDownloadIdResponse>;
  /**
   * Рекомендуемый метод без версии; использует `getV1Claims`.
   *
   * GET /api/v1/claims
   *
   * @see https://dev.wildberries.ru/docs/openapi/communications
   */
  readonly getClaims: (
    input: GetV1ClaimsInput,
    options?: WbRequestOptions,
  ) => Promise<GetV1ClaimsResponse>;
  /**
   * Рекомендуемый метод без версии; использует `patchV1Claim`.
   *
   * PATCH /api/v1/claim
   *
   * @see https://dev.wildberries.ru/docs/openapi/communications
   */
  readonly patchClaim: (
    input: PatchV1ClaimInput,
    options?: WbRequestOptions,
  ) => Promise<PatchV1ClaimResponse>;
}

export interface WbRatesApi {
  /**
   * Комиссия по категориям товаров
   *
   * Метод возвращает данные о [комиссии](https://seller.wildberries.ru/dynamic-product-categories/commission) WB по [родительским категориям товаров](/openapi/work-with-products#tag/categoriesSubcategoriesAndCharacteristics/paths/~1content~1v2~1object~1parent~1all/get) согласно модели продаж.
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца:
   *
   * | Тип | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- | --- |
   * | Персональный | 1 мин | 1 запрос | 1 мин | 2 запроса |
   * | Сервисный | 1 мин | 1 запрос | 1 мин | 2 запроса |
   * | Базовый с секретом | 1 мин | 1 запрос | 1 мин | 2 запроса |
   * | Базовый | 1 ч | 5 запросов | 12 мин | 1 запрос |
   *
   * GET /api/v1/tariffs/commission
   *
   * Разделы WB: Комиссии.
   *
   * @see https://dev.wildberries.ru/docs/openapi/rates
   */
  readonly getV1TariffsCommission: (
    input?: GetV1TariffsCommissionInput,
    options?: WbRequestOptions,
  ) => Promise<GetV1TariffsCommissionResponse>;
  /**
   * Тарифы на поставку
   *
   * Метод возвращает [тарифы на поставку](https://seller.wildberries.ru/dynamic-product-categories) для конкретных складов на ближайшие 14 дней.
   *
   *  Приёмка для поставки доступна только при сочетании:
   *  coefficient — 0 или 1
   *  и allowUnload — true
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца:
   *
   * | Тип | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- | --- |
   * | Персональный | 1 мин | 6 запросов | 10 сек | 6 запросов |
   * | Сервисный | 1 мин | 6 запросов | 10 сек | 6 запросов |
   * | Базовый с секретом | 1 мин | 6 запросов | 10 сек | 6 запросов |
   * | Базовый | 1 ч | 1 запрос | 1 ч | 1 запрос |
   *
   * GET /api/tariffs/v1/acceptance/coefficients
   *
   * Разделы WB: Тарифы на поставку.
   *
   * @see https://dev.wildberries.ru/docs/openapi/rates
   */
  readonly getV1AcceptanceCoefficients: (
    input?: GetV1AcceptanceCoefficientsInput,
    options?: WbRequestOptions,
  ) => Promise<GetV1AcceptanceCoefficientsResponse>;
  /**
   * Тарифы для коробов
   *
   * Для остатков товаров, которые поставляются на склад в коробах, метод возвращает [тарифы](https://seller.wildberries.ru/dynamic-product-categories) на:
   *  - доставку со склада или пункта приёма до покупателя
   *  - доставку от покупателя до пункта приёма
   *  - хранение на складе WB
   *
   *  Тарифы для коробов совпадают с тарифами для Суперсейфа
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца:
   *
   * | Тип | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- | --- |
   * | Персональный | 1 мин | 60 запросов | 1 сек | 5 запросов |
   * | Сервисный | 1 мин | 60 запросов | 1 сек | 5 запросов |
   * | Базовый с секретом | 1 мин | 60 запросов | 1 сек | 5 запросов |
   * | Базовый | 1 ч | 1 запрос | 1 ч | 1 запрос |
   *
   * GET /api/v1/tariffs/box
   *
   * Разделы WB: Тарифы на остаток.
   *
   * @see https://dev.wildberries.ru/docs/openapi/rates
   */
  readonly getV1TariffsBox: (
    input: GetV1TariffsBoxInput,
    options?: WbRequestOptions,
  ) => Promise<GetV1TariffsBoxResponse>;
  /**
   * Тарифы для монопаллет
   *
   * Для товаров, которые поставляются на склад WB на монопаллетах, метод возвращает [стоимость](https://seller.wildberries.ru/dynamic-product-categories):
   *  - доставки со склада до покупателя
   *  - доставки от покупателя до склада
   *  - хранения на складе WB
   *
   *  Тарифы для монопаллет совпадают с тарифами для Поштучных паллет
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца:
   *
   * | Тип | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- | --- |
   * | Персональный | 1 мин | 60 запросов | 1 сек | 5 запросов |
   * | Сервисный | 1 мин | 60 запросов | 1 сек | 5 запросов |
   * | Базовый с секретом | 1 мин | 60 запросов | 1 сек | 5 запросов |
   * | Базовый | 1 ч | 1 запрос | 1 ч | 1 запрос |
   *
   * GET /api/v1/tariffs/pallet
   *
   * Разделы WB: Тарифы на остаток.
   *
   * @see https://dev.wildberries.ru/docs/openapi/rates
   */
  readonly getV1TariffsPallet: (
    input: GetV1TariffsPalletInput,
    options?: WbRequestOptions,
  ) => Promise<GetV1TariffsPalletResponse>;
  /**
   * Тарифы на возврат
   *
   * Метод возвращает [тарифы](https://seller.wildberries.ru/dynamic-product-categories/return-cost):
   *  - на перевозку товаров со склада WB или из пункта приёма до продавца
   *  - на обратную перевозку возвратов, которые не забрал продавец
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца:
   *
   * | Тип | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- | --- |
   * | Персональный | 1 мин | 60 запросов | 1 сек | 5 запросов |
   * | Сервисный | 1 мин | 60 запросов | 1 сек | 5 запросов |
   * | Базовый с секретом | 1 мин | 60 запросов | 1 сек | 5 запросов |
   * | Базовый | 1 ч | 1 запрос | 1 ч | 1 запрос |
   *
   * GET /api/v1/tariffs/return
   *
   * Разделы WB: Стоимость возврата продавцу.
   *
   * @see https://dev.wildberries.ru/docs/openapi/rates
   */
  readonly getV1TariffsReturn: (
    input: GetV1TariffsReturnInput,
    options?: WbRequestOptions,
  ) => Promise<GetV1TariffsReturnResponse>;
  /**
   * Рекомендуемый метод без версии; использует `getV1TariffsCommission`.
   *
   * GET /api/v1/tariffs/commission
   *
   * @see https://dev.wildberries.ru/docs/openapi/rates
   */
  readonly getTariffsCommission: (
    input?: GetV1TariffsCommissionInput,
    options?: WbRequestOptions,
  ) => Promise<GetV1TariffsCommissionResponse>;
  /**
   * Рекомендуемый метод без версии; использует `getV1AcceptanceCoefficients`.
   *
   * GET /api/tariffs/v1/acceptance/coefficients
   *
   * @see https://dev.wildberries.ru/docs/openapi/rates
   */
  readonly getAcceptanceCoefficients: (
    input?: GetV1AcceptanceCoefficientsInput,
    options?: WbRequestOptions,
  ) => Promise<GetV1AcceptanceCoefficientsResponse>;
  /**
   * Рекомендуемый метод без версии; использует `getV1TariffsBox`.
   *
   * GET /api/v1/tariffs/box
   *
   * @see https://dev.wildberries.ru/docs/openapi/rates
   */
  readonly getTariffsBox: (
    input: GetV1TariffsBoxInput,
    options?: WbRequestOptions,
  ) => Promise<GetV1TariffsBoxResponse>;
  /**
   * Рекомендуемый метод без версии; использует `getV1TariffsPallet`.
   *
   * GET /api/v1/tariffs/pallet
   *
   * @see https://dev.wildberries.ru/docs/openapi/rates
   */
  readonly getTariffsPallet: (
    input: GetV1TariffsPalletInput,
    options?: WbRequestOptions,
  ) => Promise<GetV1TariffsPalletResponse>;
  /**
   * Рекомендуемый метод без версии; использует `getV1TariffsReturn`.
   *
   * GET /api/v1/tariffs/return
   *
   * @see https://dev.wildberries.ru/docs/openapi/rates
   */
  readonly getTariffsReturn: (
    input: GetV1TariffsReturnInput,
    options?: WbRequestOptions,
  ) => Promise<GetV1TariffsReturnResponse>;
}

export interface WbAnalyticsApi {
  /**
   * Статистика карточек товаров за период
   *
   * Метод формирует отчёт о товарах, сравнивая ключевые показатели за текущий период с аналогичным прошлым.
   *
   * Данные отчёта обновляются 1 раз в час.
   *
   * В течение часа после события появляется большая часть данных:
   *  - о заказах
   *  - о переходах в карточку товара
   *  - о добавлениях товаров в корзину
   *
   * Малая часть этих данных может появляться в течение нескольких дней.
   *
   * Выкупы, отмены и возвраты отображаются в отчёте за тот день, когда товар был заказан. Например, если заказ был сделан 1 января, а покупатель вернул товар 10 января, данные об этом возврате появятся в отчёте за 1 января.
   *
   * Окончательные итоги продаж вы можете отслеживать с помощью [детализаций к отчётам реализации](/openapi/financial-reports-and-accounting#tag/financialReports).
   *
   * Параметры `brandNames`,`subjectIds`, `tagIds`, `nmIds` могут быть пустыми `[]`, тогда в ответе возвращаются все карточки продавца.
   *
   * Если вы указали несколько параметров, в ответе будут карточки, в которых есть одновременно все эти параметры. Если карточки не подходят по параметрам запроса, вернётся пустой ответ `[]`.
   *
   * Можно получить отчёт максимум за последние 365 дней.
   *
   * В данных предыдущего периода:
   *  * Данные в `pastPeriod` указаны за такой же период, что и в `selectedPeriod`
   *  * Если дата начала `pastPeriod` раньше, чем год назад от текущей даты, она будет приведена к виду: `pastPeriod.start = текущая дата — 365 дней`
   *
   * Можно использовать пагинацию.
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца:
   *
   * | Тип | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- | --- |
   * | Персональный | 1 мин | 3 запроса | 20 сек | 3 запроса |
   * | Сервисный | 1 мин | 3 запроса | 20 сек | 3 запроса |
   * | Базовый с секретом | 1 мин | 3 запроса | 20 сек | 3 запроса |
   * | Базовый | 1 ч | 2 запроса | 30 мин | 1 запрос |
   *
   * POST /api/analytics/v3/sales-funnel/products
   *
   * Разделы WB: Воронка продаж.
   *
   * @see https://dev.wildberries.ru/docs/openapi/analytics
   */
  readonly postV3SalesFunnelProducts: (
    input: PostV3SalesFunnelProductsInput,
    options?: WbRequestOptions,
  ) => Promise<PostV3SalesFunnelProductsResponse>;
  /**
   * Статистика карточек товаров по дням
   *
   * Метод возвращает статистику карточек товаров по дням или неделям.
   *
   * Можно получить данные максимум за последнюю неделю.
   *
   * Данные отчёта обновляются 1 раз в час.
   *
   * В течение часа после события появляется большая часть данных:
   *  - о заказах
   *  - о переходах в карточку товара
   *  - о добавлениях товаров в корзину
   *
   * Малая часть этих данных может появляться в течение нескольких дней.
   *
   * Выкупы, отмены и возвраты отображаются в отчёте за тот день, когда товар был заказан. Например, если заказ был сделан 1 января, а покупатель вернул товар 10 января, данные об этом возврате появятся в отчёте за 1 января.
   *
   * Окончательные итоги продаж вы можете отслеживать с помощью [детализаций к отчётам реализации](/openapi/financial-reports-and-accounting#tag/financialReports).
   *
   *  Чтобы получать отчёты за период до года, используйте методы Аналитика продавца CSV (/openapi/analytics#tag/sellerAnalyticsCsv) — тип DETAIL_HISTORY_REPORT. Отчёты этого типа доступны только с подпиской Джем (https://seller.wildberries.ru/monetization/jam)
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца:
   *
   * | Тип | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- | --- |
   * | Персональный | 1 мин | 3 запроса | 20 сек | 3 запроса |
   * | Сервисный | 1 мин | 3 запроса | 20 сек | 3 запроса |
   * | Базовый с секретом | 1 мин | 3 запроса | 20 сек | 3 запроса |
   * | Базовый | 1 ч | 2 запроса | 30 мин | 1 запрос |
   *
   * POST /api/analytics/v3/sales-funnel/products/history
   *
   * Разделы WB: Воронка продаж.
   *
   * @see https://dev.wildberries.ru/docs/openapi/analytics
   */
  readonly postV3SalesFunnelProductsHistory: (
    input: PostV3SalesFunnelProductsHistoryInput,
    options?: WbRequestOptions,
  ) => Promise<PostV3SalesFunnelProductsHistoryResponse>;
  /**
   * Статистика групп карточек товаров по дням
   *
   * Метод возвращает статистику карточек товаров по дням или неделям.
   *
   * Карточки товаров сгруппированы по предметам, брендам и ярлыкам.
   *
   * Можно получить данные максимум за последнюю неделю.
   *
   * Данные отчёта обновляются 1 раз в час.
   *
   * В течение часа после события появляется большая часть данных:
   *  - о заказах
   *  - о переходах в карточку товара
   *  - о добавлениях товаров в корзину
   *
   * Малая часть этих данных может появляться в течение нескольких дней.
   *
   * Выкупы, отмены и возвраты отображаются в отчёте за тот день, когда товар был заказан. Например, если заказ был сделан 1 января, а покупатель вернул товар 10 января, данные об этом возврате появятся в отчёте за 1 января.
   *
   * Окончательные итоги продаж вы можете отслеживать с помощью [детализаций к отчётам реализации](/openapi/financial-reports-and-accounting#tag/financialReports).
   *
   * Параметры `brandNames`, `subjectIds`, `tagIds` могут быть пустыми `[]`, тогда группировка происходит по всем карточкам продавца.
   *
   * Произведение количества предметов, брендов, ярлыков в запросе может быть не больше 16. Например, 4 бренда и 4 предмета или 2 предмета, 2 ярлыка и 4 бренда.
   *
   *  Чтобы получать отчёты за период до года, используйте методы Аналитика продавца CSV (/openapi/analytics#tag/sellerAnalyticsCsv) — тип GROUPED_HISTORY_REPORT. Отчёты этого типа доступны только с подпиской Джем (https://seller.wildberries.ru/monetization/jam)
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца:
   *
   * | Тип | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- | --- |
   * | Персональный | 1 мин | 3 запроса | 20 сек | 3 запроса |
   * | Сервисный | 1 мин | 3 запроса | 20 сек | 3 запроса |
   * | Базовый с секретом | 1 мин | 3 запроса | 20 сек | 3 запроса |
   * | Базовый | 1 ч | 2 запроса | 30 мин | 1 запрос |
   *
   * POST /api/analytics/v3/sales-funnel/grouped/history
   *
   * Разделы WB: Воронка продаж.
   *
   * @see https://dev.wildberries.ru/docs/openapi/analytics
   */
  readonly postV3SalesFunnelGroupedHistory: (
    input: PostV3SalesFunnelGroupedHistoryInput,
    options?: WbRequestOptions,
  ) => Promise<PostV3SalesFunnelGroupedHistoryResponse>;
  /**
   * Создать отчёт
   *
   * Метод создаёт задание на генерацию отчёта с расширенной аналитикой продавца.
   *
   * Вы можете создать CSV-версии отчётов по [воронке продаж](/openapi/analytics#tag/salesFunnel) или [параметрам поиска](/openapi/analytics#tag/searchQueriesForYourItems) с группировкой по:
   *  * артикулам WB
   *  * предметам, брендам и ярлыкам
   *
   * В отчётах по воронке продаж можно группировать данные по дням, неделям или месяцам.
   *
   * Также можете создать CSV-версии отчётов по [текстам поисковых запросов](/openapi/analytics#tag/searchQueriesForYourItems/operation/postV2SearchReportProductSearchTexts) и [остаткам](/openapi/analytics#tag/stocksReport).
   *
   * Каждый новый отчёт должен иметь уникальный ID.
   *
   *  Не используйте одинаковые ID для разных отчётов — это может привести к ошибкам при генерации
   *
   * Набор параметров запроса в объекте `params` зависит от типа отчёта. Чтобы получить описание параметров, выберите тип отчёта в раскрывающемся списке в описании параметра `reportType`.
   *
   * Параметры `includeSubstitutedSKUs` и `includeSearchTexts` не могут одновременно иметь значение `false`.
   *
   * Если не удалось [получить отчёт](/openapi/analytics#tag/sellerAnalyticsCsv/operation/getV2NmReportDownloadsFileDownloadId), можно создать [повторное задание на генерацию](/openapi/analytics#tag/sellerAnalyticsCsv/operation/postV2NmReportDownloadsRetry). Также можно [получить список и проверить статусы](/openapi/analytics#tag/sellerAnalyticsCsv/operation/getV2NmReportDownloads) отчётов.
   *
   *  Отчёты по остаткам (https://seller.wildberries.ru/content-analytics/history-remains) — типы STOCK_HISTORY_REPORT_CSV и STOCK_HISTORY_DAILY_CSV — можно создать без подписки Джем (https://seller.wildberries.ru/monetization/jam)
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца:
   *
   * | Тип | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- | --- |
   * | Персональный | 1 мин | 3 запроса | 20 сек | 3 запроса |
   * | Сервисный | 1 мин | 3 запроса | 20 сек | 3 запроса |
   * | Базовый с секретом | 1 мин | 3 запроса | 20 сек | 3 запроса |
   * | Базовый | 1 ч | 1 запрос | 1 ч | 1 запрос |
   *
   * POST /api/v2/nm-report/downloads
   *
   * Разделы WB: Аналитика продавца CSV.
   *
   * @see https://dev.wildberries.ru/docs/openapi/analytics
   */
  readonly postV2NmReportDownloads: (
    input?: PostV2NmReportDownloadsInput,
    options?: WbRequestOptions,
  ) => Promise<PostV2NmReportDownloadsResponse>;
  /**
   * Получить список отчётов
   *
   * Метод возвращает список отчётов с расширенной аналитикой продавца. Ответ содержит ID [созданных отчётов](/openapi/analytics#tag/sellerAnalyticsCsv/operation/postV2NmReportDownloads) и статусы генерации.
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца:
   *
   * | Тип | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- | --- |
   * | Персональный | 1 мин | 3 запроса | 20 сек | 3 запроса |
   * | Сервисный | 1 мин | 3 запроса | 20 сек | 3 запроса |
   * | Базовый с секретом | 1 мин | 3 запроса | 20 сек | 3 запроса |
   * | Базовый | 1 ч | 1 запрос | 1 ч | 1 запрос |
   *
   * GET /api/v2/nm-report/downloads
   *
   * Разделы WB: Аналитика продавца CSV.
   *
   * @see https://dev.wildberries.ru/docs/openapi/analytics
   */
  readonly getV2NmReportDownloads: (
    input?: GetV2NmReportDownloadsInput,
    options?: WbRequestOptions,
  ) => Promise<GetV2NmReportDownloadsResponse>;
  /**
   * Сгенерировать отчёт повторно
   *
   * Метод создает повторное [задание на генерацию](/openapi/analytics#tag/sellerAnalyticsCsv/operation/postV2NmReportDownloads) отчёта с расширенной аналитикой продавца. Необходимо, если при генерации отчёта вы [получили статус](/openapi/analytics#tag/sellerAnalyticsCsv/operation/getV2NmReportDownloads) `FAILED`.
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца:
   *
   * | Тип | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- | --- |
   * | Персональный | 1 мин | 3 запроса | 20 сек | 3 запроса |
   * | Сервисный | 1 мин | 3 запроса | 20 сек | 3 запроса |
   * | Базовый с секретом | 1 мин | 3 запроса | 20 сек | 3 запроса |
   * | Базовый | 1 ч | 1 запрос | 1 ч | 1 запрос |
   *
   * POST /api/v2/nm-report/downloads/retry
   *
   * Разделы WB: Аналитика продавца CSV.
   *
   * @see https://dev.wildberries.ru/docs/openapi/analytics
   */
  readonly postV2NmReportDownloadsRetry: (
    input: PostV2NmReportDownloadsRetryInput,
    options?: WbRequestOptions,
  ) => Promise<PostV2NmReportDownloadsRetryResponse>;
  /**
   * Получить отчёт
   *
   * Метод возвращает отчёт с расширенной аналитикой продавца по ID [задания на генерацию](/openapi/analytics#tag/sellerAnalyticsCsv/operation/postV2NmReportDownloads).
   *
   * Можно получить отчёт, который сгенерирован за последние 48 часов.
   * Отчёт будет загружен внутри архива ZIP в формате CSV.
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца:
   *
   * | Тип | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- | --- |
   * | Персональный | 1 мин | 3 запроса | 20 сек | 3 запроса |
   * | Сервисный | 1 мин | 3 запроса | 20 сек | 3 запроса |
   * | Базовый с секретом | 1 мин | 3 запроса | 20 сек | 3 запроса |
   * | Базовый | 1 ч | 1 запрос | 1 ч | 1 запрос |
   *
   * GET /api/v2/nm-report/downloads/file/{downloadId}
   *
   * Разделы WB: Аналитика продавца CSV.
   *
   * @see https://dev.wildberries.ru/docs/openapi/analytics
   */
  readonly getV2NmReportDownloadsFileDownloadId: (
    input: GetV2NmReportDownloadsFileDownloadIdInput,
    options?: WbRequestOptions,
  ) => Promise<GetV2NmReportDownloadsFileDownloadIdResponse>;
  /**
   * Основная страница
   *
   * Метод формирует набор данных для основной страницы отчёта по поисковым запросам с:
   *  - общей информацией
   *  - позициями товаров
   *  - данными по видимости и переходам в карточку
   *  - данными для таблицы по группам
   *
   * Для получения дополнительных данных в таблице используйте отдельный запрос для:
   *  - [пагинации по группам](/openapi/analytics#tag/searchQueriesForYourItems/operation/postV2SearchReportTableGroups)
   *  - [получения по товарам в группе](/openapi/analytics#tag/searchQueriesForYourItems/operation/postV2SearchReportTableDetails)
   *
   * Дополнительный параметр выбора списка товаров в таблице:
   *  - `positionCluster` — средняя позиция в поиске
   *
   * Параметры `includeSubstitutedSKUs` и `includeSearchTexts` не могут одновременно иметь значение `false`.
   *
   * Данные отчёта обновляются 1 раз в час.
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца:
   *
   * | Тип | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- | --- |
   * | Персональный | 1 мин | 3 запроса | 20 сек | 3 запроса |
   * | Сервисный | 1 мин | 3 запроса | 20 сек | 3 запроса |
   * | Базовый с секретом | 1 мин | 3 запроса | 20 сек | 3 запроса |
   * | Базовый | 1 ч | 1 запрос | 1 ч | 1 запрос |
   *
   * POST /api/v2/search-report/report
   *
   * Разделы WB: Поисковые запросы по вашим товарам.
   *
   * @see https://dev.wildberries.ru/docs/openapi/analytics
   */
  readonly postV2SearchReportReport: (
    input: PostV2SearchReportReportInput,
    options?: WbRequestOptions,
  ) => Promise<PostV2SearchReportReportResponse>;
  /**
   * Пагинация по группам
   *
   * Метод формирует дополнительные данные к [основному отчёту](/openapi/analytics#tag/searchQueriesForYourItems/operation/postV2SearchReportReport) с пагинацией по группам. Пагинация возможна только при наличии фильтра по бренду, предмету или ярлыку.
   *
   * Дополнительный параметр выбора списка товаров в таблице:
   *  - `positionCluster` — средняя позиция в поиске
   *
   * Параметры `includeSubstitutedSKUs` и `includeSearchTexts` не могут одновременно иметь значение `false`.
   *
   * Данные отчёта обновляются 1 раз в час.
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца:
   *
   * | Тип | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- | --- |
   * | Персональный | 1 мин | 3 запроса | 20 сек | 3 запроса |
   * | Сервисный | 1 мин | 3 запроса | 20 сек | 3 запроса |
   * | Базовый с секретом | 1 мин | 3 запроса | 20 сек | 3 запроса |
   * | Базовый | 1 ч | 1 запрос | 1 ч | 1 запрос |
   *
   * POST /api/v2/search-report/table/groups
   *
   * Разделы WB: Поисковые запросы по вашим товарам.
   *
   * @see https://dev.wildberries.ru/docs/openapi/analytics
   */
  readonly postV2SearchReportTableGroups: (
    input: PostV2SearchReportTableGroupsInput,
    options?: WbRequestOptions,
  ) => Promise<PostV2SearchReportTableGroupsResponse>;
  /**
   * Пагинация по товарам в группе
   *
   * Метод формирует дополнительные данные к [основному отчёту](/openapi/analytics#tag/searchQueriesForYourItems/operation/postV2SearchReportReport) с пагинацией по товарам в группе. Пагинация возможна вне зависимости от наличия фильтров.
   *
   * Фильтры для пагинации по товарам в группе или без фильтров:
   *  - кортеж `subjectId`,`brandName`,`tagId` — фильтр для группы
   *  - `nmIds` — фильтр по карточке товара
   *
   * Дополнительный параметр выбора списка товаров:
   *  - `positionCluster` — средняя позиция в поиске
   *
   * Параметры `includeSubstitutedSKUs` и `includeSearchTexts` не могут одновременно иметь значение `false`.
   *
   * Данные отчёта обновляются 1 раз в час.
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца:
   *
   * | Тип | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- | --- |
   * | Персональный | 1 мин | 3 запроса | 20 сек | 3 запроса |
   * | Сервисный | 1 мин | 3 запроса | 20 сек | 3 запроса |
   * | Базовый с секретом | 1 мин | 3 запроса | 20 сек | 3 запроса |
   * | Базовый | 1 ч | 1 запрос | 1 ч | 1 запрос |
   *
   * POST /api/v2/search-report/table/details
   *
   * Разделы WB: Поисковые запросы по вашим товарам.
   *
   * @see https://dev.wildberries.ru/docs/openapi/analytics
   */
  readonly postV2SearchReportTableDetails: (
    input: PostV2SearchReportTableDetailsInput,
    options?: WbRequestOptions,
  ) => Promise<PostV2SearchReportTableDetailsResponse>;
  /**
   * Поисковые запросы по товару
   *
   * Метод формирует топ поисковых запросов по товару.
   *
   * Параметры выбора поисковых запросов:
   *  - `limit` — количество запросов, максимум 30. Для тарифов [Джема](https://seller.wildberries.ru/monetization/tariffs) **Продвинутый** и **Премиальный** максимум — 100.
   *  - `topOrderBy` — способ выбора топа запросов
   *
   * Параметры `includeSubstitutedSKUs` и `includeSearchTexts` не могут одновременно иметь значение `false`.
   *
   * Данные отчёта обновляются 1 раз в час.
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца:
   *
   * | Тип | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- | --- |
   * | Персональный | 1 мин | 3 запроса | 20 сек | 3 запроса |
   * | Сервисный | 1 мин | 3 запроса | 20 сек | 3 запроса |
   * | Базовый с секретом | 1 мин | 3 запроса | 20 сек | 3 запроса |
   * | Базовый | 1 ч | 1 запрос | 1 ч | 1 запрос |
   *
   * POST /api/v2/search-report/product/search-texts
   *
   * Разделы WB: Поисковые запросы по вашим товарам.
   *
   * @see https://dev.wildberries.ru/docs/openapi/analytics
   */
  readonly postV2SearchReportProductSearchTexts: (
    input: PostV2SearchReportProductSearchTextsInput,
    options?: WbRequestOptions,
  ) => Promise<PostV2SearchReportProductSearchTextsResponse>;
  /**
   * Заказы и позиции по поисковым запросам товара
   *
   * Метод формирует данные для таблицы:
   *  - о заказах по каждому поисковому запросу для конкретного товара
   *  - о позициях товара в результатах поиска по каждому запросу
   *
   * Данные указаны в рамках периода для [запрошенного товара](/openapi/analytics#tag/searchQueriesForYourItems/operation/postV2SearchReportProductSearchTexts) и сгруппированы по дням. Максимальный период — 7 дней.
   *
   * Данные отчёта обновляются 1 раз в час.
   *
   *  Можно получить отчёт максимум за последние 365 дней с момента выполнения запроса
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца:
   *
   * | Тип | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- | --- |
   * | Персональный | 1 мин | 3 запроса | 20 сек | 3 запроса |
   * | Сервисный | 1 мин | 3 запроса | 20 сек | 3 запроса |
   * | Базовый с секретом | 1 мин | 3 запроса | 20 сек | 3 запроса |
   * | Базовый | 1 ч | 1 запрос | 1 ч | 1 запрос |
   *
   * POST /api/v2/search-report/product/orders
   *
   * Разделы WB: Поисковые запросы по вашим товарам.
   *
   * @see https://dev.wildberries.ru/docs/openapi/analytics
   */
  readonly postV2SearchReportProductOrders: (
    input: PostV2SearchReportProductOrdersInput,
    options?: WbRequestOptions,
  ) => Promise<PostV2SearchReportProductOrdersResponse>;
  /**
   * Остатки на складах WB
   *
   * Метод доступен (/openapi/api-information#tag/authorization/Pravila-ispolzovaniya-tokenov-dostupa-k-API) по
   *  Персональному токену,
   *  Сервисному токену,
   *  Базовому токену с секретом
   *
   * Метод возвращает текущие остатки товаров на складах WB.
   *
   * Данные обновляются 1 раз в 30 минут.
   *
   * 1 строка ответа — данные об 1 размере товара на 1 складе WB.
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца:
   *
   * | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- |
   * | 1 мин | 3 запроса | 20 сек | 1 запрос |
   *
   * POST /api/analytics/v1/stocks-report/wb-warehouses
   *
   * Разделы WB: История остатков.
   *
   * @see https://dev.wildberries.ru/docs/openapi/analytics
   */
  readonly postV1StocksReportWbWarehouses: (
    input: PostV1StocksReportWbWarehousesInput,
    options?: WbRequestOptions,
  ) => Promise<PostV1StocksReportWbWarehousesResponse>;
  /**
   * Данные по группам
   *
   * Метод формирует набор данных об остатках по группам товаров.
   *
   * Группа товаров описывается кортежем `subjectID, brandName, tagID`.
   *
   * Данные отчёта обновляются 1 раз в час.
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца:
   *
   * | Тип | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- | --- |
   * | Персональный | 1 мин | 3 запроса | 20 сек | 3 запроса |
   * | Сервисный | 1 мин | 3 запроса | 20 сек | 3 запроса |
   * | Базовый с секретом | 1 мин | 3 запроса | 20 сек | 3 запроса |
   * | Базовый | 1 ч | 2 запроса | 30 мин | 1 запрос |
   *
   * POST /api/v2/stocks-report/products/groups
   *
   * Разделы WB: История остатков.
   *
   * @see https://dev.wildberries.ru/docs/openapi/analytics
   */
  readonly postV2StocksReportProductsGroups: (
    input: PostV2StocksReportProductsGroupsInput,
    options?: WbRequestOptions,
  ) => Promise<PostV2StocksReportProductsGroupsResponse>;
  /**
   * Данные по товарам
   *
   * Метод формирует набор данных об остатках по товарам.
   *
   * Можно получить данные как по отдельным товарам, так и в рамках всего отчёта — если в запросе отсутствуют фильтры: `nmIDs`, `subjectID`, `brandName`, `tagID`.
   *
   * Данные отчёта обновляются 1 раз в час.
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца:
   *
   * | Тип | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- | --- |
   * | Персональный | 1 мин | 3 запроса | 20 сек | 3 запроса |
   * | Сервисный | 1 мин | 3 запроса | 20 сек | 3 запроса |
   * | Базовый с секретом | 1 мин | 3 запроса | 20 сек | 3 запроса |
   * | Базовый | 1 ч | 2 запроса | 30 мин | 1 запрос |
   *
   * POST /api/v2/stocks-report/products/products
   *
   * Разделы WB: История остатков.
   *
   * @see https://dev.wildberries.ru/docs/openapi/analytics
   */
  readonly postV2StocksReportProductsProducts: (
    input: PostV2StocksReportProductsProductsInput,
    options?: WbRequestOptions,
  ) => Promise<PostV2StocksReportProductsProductsResponse>;
  /**
   * Данные по размерам
   *
   * Метод формирует набор данных об остатках по размерам товара.
   *
   * Возможны случаи:
   * 1. Товар имеет размеры и `"includeOffice":true`, тогда в ответе будут данные об остатках по каждому из размеров с вложенной детализацией по складам.
   * 2. Товар имеет размеры и `"includeOffice":false`, тогда в ответе будут данные об остатках по каждому из размеров без вложенной детализации по складам.
   * 3. Товар не имеет размера и `"includeOffice":true`, тогда в ответе будет детализация по складам. Без данных об остатках по каждому из размеров.
   * 4. Товар не имеет размера и `"includeOffice":false`, тогда тело ответа будет пустым.
   *
   * Товар не имеет размера, если у него единственный размер с `"techSize":"0"`. В ответах метода получения данных по [товарам](/openapi/analytics#tag/stocksReport/operation/postV2StocksReportProductsProducts) у таких товаров `"hasSizes":false`.
   *
   * Данные по складам продавца приходят в агрегированном виде — по всем сразу, без детализации по конкретным складам — эти записи будут с `"regionName":"Маркетплейс"` и `"officeName":""`.
   *
   * Данные отчёта обновляются 1 раз в час.
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца:
   *
   * | Тип | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- | --- |
   * | Персональный | 1 мин | 3 запроса | 20 сек | 3 запроса |
   * | Сервисный | 1 мин | 3 запроса | 20 сек | 3 запроса |
   * | Базовый с секретом | 1 мин | 3 запроса | 20 сек | 3 запроса |
   * | Базовый | 1 ч | 2 запроса | 30 мин | 1 запрос |
   *
   * POST /api/v2/stocks-report/products/sizes
   *
   * Разделы WB: История остатков.
   *
   * @see https://dev.wildberries.ru/docs/openapi/analytics
   */
  readonly postV2StocksReportProductsSizes: (
    input: PostV2StocksReportProductsSizesInput,
    options?: WbRequestOptions,
  ) => Promise<PostV2StocksReportProductsSizesResponse>;
  /**
   * Данные по складам
   *
   * Метод формирует набор данных об остатках по складам.
   *
   * Данные по складам продавца приходят в агрегированном виде — по всем сразу, без детализации по конкретным складам — эти записи будут с `"regionName":"Маркетплейс"` и `"offices":[]`.
   *
   * Данные отчёта обновляются 1 раз в час.
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца:
   *
   * | Тип | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- | --- |
   * | Персональный | 1 мин | 3 запроса | 20 сек | 3 запроса |
   * | Сервисный | 1 мин | 3 запроса | 20 сек | 3 запроса |
   * | Базовый с секретом | 1 мин | 3 запроса | 20 сек | 3 запроса |
   * | Базовый | 1 ч | 2 запроса | 30 мин | 1 запрос |
   *
   * POST /api/v2/stocks-report/offices
   *
   * Разделы WB: История остатков.
   *
   * @see https://dev.wildberries.ru/docs/openapi/analytics
   */
  readonly postV2StocksReportOffices: (
    input: PostV2StocksReportOfficesInput,
    options?: WbRequestOptions,
  ) => Promise<PostV2StocksReportOfficesResponse>;
  /**
   * Получить отчёт
   *
   * Метод доступен (/openapi/api-information#tag/authorization/Pravila-ispolzovaniya-tokenov-dostupa-k-API) по
   *  Персональному токену,
   *  Сервисному токену
   *
   * Метод формирует набор данных об оценках товаров.
   *
   * Данные отчёта обновляются 1 раз в час.
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца:
   *
   * | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- |
   * | 1 мин | 3 запроса | 20 сек | 3 запроса |
   *
   * POST /api/analytics/v2/item-rating
   *
   * Разделы WB: Оценка товара.
   *
   * @see https://dev.wildberries.ru/docs/openapi/analytics
   */
  readonly postV2ItemRating: (
    input: PostV2ItemRatingInput,
    options?: WbRequestOptions,
  ) => Promise<PostV2ItemRatingResponse>;
  /**
   * Получить отчёт
   *
   * Метод формирует набор данных о заказах и продажах.
   *
   * Данные отчёта обновляются в режиме реального времени.
   *
   * > 1 заказ = 1 сборочное задание = 1 единица товара
   *
   * Параметры `brandNames`,`subjectIds`, `tagIds`, `nmIds` могут быть пустыми `[]`, тогда в ответе возвращаются все заказы продавца.
   *
   * Если вы указали несколько параметров, в ответе будут заказы, в которых есть одновременно все эти параметры. Если заказы не подходят по параметрам запроса, вернётся пустой массив `[]`.
   *
   * Можно получить отчёт максимум за последние 31 день.
   *
   * Заказы отдаются по времени текущего статуса, от самого нового к самому раннему.
   *
   * Можно использовать пагинацию.
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца:
   *
   * | Тип | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- | --- |
   * | Персональный | 1 мин | 1 запрос | 1 мин | 1 запрос |
   * | Сервисный | 1 мин | 1 запрос | 1 мин | 1 запрос |
   * | Базовый с секретом | 1 мин | 1 запрос | 1 мин | 1 запрос |
   * | Базовый | 3 ч | 1 запрос | 3 ч | 1 запрос |
   *
   * POST /api/analytics/v1/order-feed
   *
   * Разделы WB: Лента заказов.
   *
   * @see https://dev.wildberries.ru/docs/openapi/analytics
   */
  readonly postV1OrderFeed: (
    input?: PostV1OrderFeedInput,
    options?: WbRequestOptions,
  ) => Promise<PostV1OrderFeedResponse>;
  /**
   * Рекомендуемый метод без версии; использует `postV3SalesFunnelProducts`.
   *
   * POST /api/analytics/v3/sales-funnel/products
   *
   * @see https://dev.wildberries.ru/docs/openapi/analytics
   */
  readonly postSalesFunnelProducts: (
    input: PostV3SalesFunnelProductsInput,
    options?: WbRequestOptions,
  ) => Promise<PostV3SalesFunnelProductsResponse>;
  /**
   * Рекомендуемый метод без версии; использует `postV3SalesFunnelProductsHistory`.
   *
   * POST /api/analytics/v3/sales-funnel/products/history
   *
   * @see https://dev.wildberries.ru/docs/openapi/analytics
   */
  readonly postSalesFunnelProductsHistory: (
    input: PostV3SalesFunnelProductsHistoryInput,
    options?: WbRequestOptions,
  ) => Promise<PostV3SalesFunnelProductsHistoryResponse>;
  /**
   * Рекомендуемый метод без версии; использует `postV3SalesFunnelGroupedHistory`.
   *
   * POST /api/analytics/v3/sales-funnel/grouped/history
   *
   * @see https://dev.wildberries.ru/docs/openapi/analytics
   */
  readonly postSalesFunnelGroupedHistory: (
    input: PostV3SalesFunnelGroupedHistoryInput,
    options?: WbRequestOptions,
  ) => Promise<PostV3SalesFunnelGroupedHistoryResponse>;
  /**
   * Рекомендуемый метод без версии; использует `postV2NmReportDownloads`.
   *
   * POST /api/v2/nm-report/downloads
   *
   * @see https://dev.wildberries.ru/docs/openapi/analytics
   */
  readonly postNmReportDownloads: (
    input?: PostV2NmReportDownloadsInput,
    options?: WbRequestOptions,
  ) => Promise<PostV2NmReportDownloadsResponse>;
  /**
   * Рекомендуемый метод без версии; использует `getV2NmReportDownloads`.
   *
   * GET /api/v2/nm-report/downloads
   *
   * @see https://dev.wildberries.ru/docs/openapi/analytics
   */
  readonly getNmReportDownloads: (
    input?: GetV2NmReportDownloadsInput,
    options?: WbRequestOptions,
  ) => Promise<GetV2NmReportDownloadsResponse>;
  /**
   * Рекомендуемый метод без версии; использует `postV2NmReportDownloadsRetry`.
   *
   * POST /api/v2/nm-report/downloads/retry
   *
   * @see https://dev.wildberries.ru/docs/openapi/analytics
   */
  readonly postNmReportDownloadsRetry: (
    input: PostV2NmReportDownloadsRetryInput,
    options?: WbRequestOptions,
  ) => Promise<PostV2NmReportDownloadsRetryResponse>;
  /**
   * Рекомендуемый метод без версии; использует `getV2NmReportDownloadsFileDownloadId`.
   *
   * GET /api/v2/nm-report/downloads/file/{downloadId}
   *
   * @see https://dev.wildberries.ru/docs/openapi/analytics
   */
  readonly getNmReportDownloadsFileDownloadId: (
    input: GetV2NmReportDownloadsFileDownloadIdInput,
    options?: WbRequestOptions,
  ) => Promise<GetV2NmReportDownloadsFileDownloadIdResponse>;
  /**
   * Рекомендуемый метод без версии; использует `postV2SearchReportReport`.
   *
   * POST /api/v2/search-report/report
   *
   * @see https://dev.wildberries.ru/docs/openapi/analytics
   */
  readonly postSearchReportReport: (
    input: PostV2SearchReportReportInput,
    options?: WbRequestOptions,
  ) => Promise<PostV2SearchReportReportResponse>;
  /**
   * Рекомендуемый метод без версии; использует `postV2SearchReportTableGroups`.
   *
   * POST /api/v2/search-report/table/groups
   *
   * @see https://dev.wildberries.ru/docs/openapi/analytics
   */
  readonly postSearchReportTableGroups: (
    input: PostV2SearchReportTableGroupsInput,
    options?: WbRequestOptions,
  ) => Promise<PostV2SearchReportTableGroupsResponse>;
  /**
   * Рекомендуемый метод без версии; использует `postV2SearchReportTableDetails`.
   *
   * POST /api/v2/search-report/table/details
   *
   * @see https://dev.wildberries.ru/docs/openapi/analytics
   */
  readonly postSearchReportTableDetails: (
    input: PostV2SearchReportTableDetailsInput,
    options?: WbRequestOptions,
  ) => Promise<PostV2SearchReportTableDetailsResponse>;
  /**
   * Рекомендуемый метод без версии; использует `postV2SearchReportProductSearchTexts`.
   *
   * POST /api/v2/search-report/product/search-texts
   *
   * @see https://dev.wildberries.ru/docs/openapi/analytics
   */
  readonly postSearchReportProductSearchTexts: (
    input: PostV2SearchReportProductSearchTextsInput,
    options?: WbRequestOptions,
  ) => Promise<PostV2SearchReportProductSearchTextsResponse>;
  /**
   * Рекомендуемый метод без версии; использует `postV2SearchReportProductOrders`.
   *
   * POST /api/v2/search-report/product/orders
   *
   * @see https://dev.wildberries.ru/docs/openapi/analytics
   */
  readonly postSearchReportProductOrders: (
    input: PostV2SearchReportProductOrdersInput,
    options?: WbRequestOptions,
  ) => Promise<PostV2SearchReportProductOrdersResponse>;
  /**
   * Рекомендуемый метод без версии; использует `postV1StocksReportWbWarehouses`.
   *
   * POST /api/analytics/v1/stocks-report/wb-warehouses
   *
   * @see https://dev.wildberries.ru/docs/openapi/analytics
   */
  readonly postStocksReportWbWarehouses: (
    input: PostV1StocksReportWbWarehousesInput,
    options?: WbRequestOptions,
  ) => Promise<PostV1StocksReportWbWarehousesResponse>;
  /**
   * Рекомендуемый метод без версии; использует `postV2StocksReportProductsGroups`.
   *
   * POST /api/v2/stocks-report/products/groups
   *
   * @see https://dev.wildberries.ru/docs/openapi/analytics
   */
  readonly postStocksReportProductsGroups: (
    input: PostV2StocksReportProductsGroupsInput,
    options?: WbRequestOptions,
  ) => Promise<PostV2StocksReportProductsGroupsResponse>;
  /**
   * Рекомендуемый метод без версии; использует `postV2StocksReportProductsProducts`.
   *
   * POST /api/v2/stocks-report/products/products
   *
   * @see https://dev.wildberries.ru/docs/openapi/analytics
   */
  readonly postStocksReportProductsProducts: (
    input: PostV2StocksReportProductsProductsInput,
    options?: WbRequestOptions,
  ) => Promise<PostV2StocksReportProductsProductsResponse>;
  /**
   * Рекомендуемый метод без версии; использует `postV2StocksReportProductsSizes`.
   *
   * POST /api/v2/stocks-report/products/sizes
   *
   * @see https://dev.wildberries.ru/docs/openapi/analytics
   */
  readonly postStocksReportProductsSizes: (
    input: PostV2StocksReportProductsSizesInput,
    options?: WbRequestOptions,
  ) => Promise<PostV2StocksReportProductsSizesResponse>;
  /**
   * Рекомендуемый метод без версии; использует `postV2StocksReportOffices`.
   *
   * POST /api/v2/stocks-report/offices
   *
   * @see https://dev.wildberries.ru/docs/openapi/analytics
   */
  readonly postStocksReportOffices: (
    input: PostV2StocksReportOfficesInput,
    options?: WbRequestOptions,
  ) => Promise<PostV2StocksReportOfficesResponse>;
  /**
   * Рекомендуемый метод без версии; использует `postV2ItemRating`.
   *
   * POST /api/analytics/v2/item-rating
   *
   * @see https://dev.wildberries.ru/docs/openapi/analytics
   */
  readonly postItemRating: (
    input: PostV2ItemRatingInput,
    options?: WbRequestOptions,
  ) => Promise<PostV2ItemRatingResponse>;
  /**
   * Рекомендуемый метод без версии; использует `postV1OrderFeed`.
   *
   * POST /api/analytics/v1/order-feed
   *
   * @see https://dev.wildberries.ru/docs/openapi/analytics
   */
  readonly postOrderFeed: (
    input?: PostV1OrderFeedInput,
    options?: WbRequestOptions,
  ) => Promise<PostV1OrderFeedResponse>;
}

export interface WbReportsApi {
  /**
   * Заказы
   *
   * Метод возвращает информацию о заказах.
   * Данные обновляются раз в 30 минут.
   *
   * 1 строка = 1 заказ = 1 сборочное задание = 1 единица товара.
   * Для определения заказа рекомендуем использовать поле `srid`.
   *
   * Информация о заказе хранится 90 дней с момента оформления.
   *
   * В ответах могут отсутствовать заказы, по которым не подтверждена оплата. Например, заказы с отложенными платежами или оплатой в рассрочку. При этом, если по таким заказам есть продажи, вы можете получить их с помощью [детализаций к отчётам реализации](/openapi/financial-reports-and-accounting#tag/financialReports).
   *
   * Чтобы получить все оформленные заказы, используйте [Ленту заказов](/openapi/analytics#tag/orderFeed).
   *
   *  Данные этого отчёта являются предварительными и служат для оперативного мониторинга
   *
   * Для одного ответа на запрос с `flag=0` или без `flag` в системе установлено условное ограничение 80000 строк. Поэтому, чтобы получить все заказы, может потребоваться более, чем один запрос. Во втором и далее запросе в параметре `dateFrom` используйте полное значение поля `lastChangeDate` из последней строки ответа на предыдущий запрос.
   *  Если в ответе отдаётся пустой массив `[]`, все заказы уже выгружены.
   *
   * В песочнице для параметров `dateFrom` и `dateTo` можно задать диапазон только за последние 4 месяца от текущей даты.
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца:
   *
   * | Тип | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- | --- |
   * | Персональный | 1 мин | 1 запрос | 1 мин | 10 запросов |
   * | Сервисный | 1 мин | 1 запрос | 1 мин | 10 запросов |
   * | Базовый с секретом | 1 мин | 1 запрос | 1 мин | 10 запросов |
   * | Базовый | 3 ч | 1 запрос | 3 ч | 1 запрос |
   *
   * GET /api/v1/supplier/orders
   *
   * Разделы WB: Основные отчёты.
   *
   * @see https://dev.wildberries.ru/docs/openapi/reports
   */
  readonly getV1SupplierOrders: (
    input: GetV1SupplierOrdersInput,
    options?: WbRequestOptions,
  ) => Promise<GetV1SupplierOrdersResponse>;
  /**
   * Продажи
   *
   * Метод возвращает информацию о продажах и возвратах.
   * Данные обновляются раз в 30 минут.
   *
   * 1 строка = 1 заказ = 1 сборочное задание = 1 единица товара.
   * Для определения заказа рекомендуем использовать поле `srid`.
   *
   * Информация о заказе хранится 90 дней с момента оформления.
   *
   *  Данные этого отчёта являются предварительными и служат для оперативного мониторинга
   *
   *  - В ответах могут отсутствовать заказы, по которым не подтверждена оплата, даже если эти заказы есть в детализациях к отчётам реализации. Например, заказы с отложенными платежами или оплатой в рассрочку
   *  - Значения полей `priceWithDisc` и `forPay` рассчитываются по упрощённой логике и могут отличаться от `retail_price_withdisc_rub` и `ppvz_for_pay` соответственно в детализациях к отчётам реализации
   *  - Поля `finishedPrice`, `priceWithDisc`, `forPay` могут временно иметь значение `0`: данные заполняются асинхронно, актуализируются в течение 24 часов
   *  - Для заказов, которые оплачены в валюте, отличной от валюты продавца, возможны округления цен из-за конвертации валют
   *
   * Для точных финансовых расчётов, сверки и отчётности используйте [детализации к отчётам реализации](/openapi/financial-reports-and-accounting#tag/financialReports).
   *
   * Для одного ответа на запрос с `flag=0` или без `flag` в системе установлено условное ограничение 80000 строк. Поэтому, чтобы получить все продажи и возвраты, может потребоваться более, чем один запрос. Во втором и далее запросе в параметре `dateFrom `используйте полное значение поля `lastChangeDate` из последней строки ответа на предыдущий запрос.
   *  Если в ответе отдаётся пустой массив `[]`, все продажи и возвраты уже выгружены.
   *
   * В песочнице для параметров `dateFrom` и `dateTo` можно задать диапазон только за последние 4 месяца от текущей даты.
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца:
   *
   * | Тип | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- | --- |
   * | Персональный | 1 мин | 1 запрос | 1 мин | 1 запрос |
   * | Сервисный | 1 мин | 1 запрос | 1 мин | 1 запрос |
   * | Базовый с секретом | 1 мин | 1 запрос | 1 мин | 1 запрос |
   * | Базовый | 2 ч | 1 запрос | 2 ч | 1 запрос |
   *
   * GET /api/v1/supplier/sales
   *
   * Разделы WB: Основные отчёты.
   *
   * @see https://dev.wildberries.ru/docs/openapi/reports
   */
  readonly getV1SupplierSales: (
    input: GetV1SupplierSalesInput,
    options?: WbRequestOptions,
  ) => Promise<GetV1SupplierSalesResponse>;
  /**
   * Получить отчёт
   *
   * Метод возвращает отчёт с [операциями по товарам с обязательной маркировкой](https://seller.wildberries.ru/analytics-reports/excise-report).
   *
   * Данный отчёт можно сохранить в [формате таблиц](/knowledge-base/articles/019d49a4-650c-7b04-9596-ba441936f9d3).
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца:
   *
   * | Тип | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- | --- |
   * | Персональный | 5 ч | 10 запросов | 30 мин | 10 запросов |
   * | Сервисный | 5 ч | 10 запросов | 30 мин | 10 запросов |
   * | Базовый с секретом | 5 ч | 10 запросов | 30 мин | 10 запросов |
   * | Базовый | 24 ч | 2 запроса | 12 ч | 1 запрос |
   *
   * POST /api/v1/analytics/excise-report
   *
   * Разделы WB: Отчёт о товарах c обязательной маркировкой.
   *
   * @see https://dev.wildberries.ru/docs/openapi/reports
   */
  readonly postV1AnalyticsExciseReport: (
    input: PostV1AnalyticsExciseReportInput,
    options?: WbRequestOptions,
  ) => Promise<PostV1AnalyticsExciseReportResponse>;
  /**
   * Создать отчёт
   *
   * Метод создаёт [задание на генерацию](/openapi/reports#tag/warehousesInventoryReport/operation/getV1WarehouseRemainsTasksTaskIdStatus) отчёта об [остатках на складах WB](/openapi/reports#tag/warehousesInventoryReport/operation/getV1WarehouseRemainsTasksTaskIdDownload).
   *
   * Параметры `groupBy` и `filter` (группировки и фильтры) можно задать в любой комбинации — аналогично [версии](https://seller.wildberries.ru/analytics-reports/warehouse-remains) в личном кабинете.
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца:
   *
   * | Тип | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- | --- |
   * | Персональный | 1 мин | 1 запрос | 1 мин | 5 запросов |
   * | Сервисный | 1 мин | 1 запрос | 1 мин | 5 запросов |
   * | Базовый с секретом | 1 мин | 1 запрос | 1 мин | 5 запросов |
   * | Базовый | 1 ч | 4 запроса | 15 мин | 1 запрос |
   *
   * GET /api/v1/warehouse_remains
   *
   * Разделы WB: Отчёт об остатках на складах.
   *
   * @see https://dev.wildberries.ru/docs/openapi/reports
   */
  readonly getV1WarehouseRemains: (
    input?: GetV1WarehouseRemainsInput,
    options?: WbRequestOptions,
  ) => Promise<GetV1WarehouseRemainsResponse>;
  /**
   * Проверить статус
   *
   * Метод возвращает статус [задания на генерацию](/openapi/reports#tag/warehousesInventoryReport/operation/getV1WarehouseRemains) отчёта об [остатках на складах WB](/openapi/reports#tag/warehousesInventoryReport/operation/getV1WarehouseRemainsTasksTaskIdDownload).
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца:
   *
   * | Тип | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- | --- |
   * | Персональный | 5 сек | 1 запрос | 5 сек | 5 запросов |
   * | Сервисный | 5 сек | 1 запрос | 5 сек | 5 запросов |
   * | Базовый с секретом | 5 сек | 1 запрос | 5 сек | 5 запросов |
   * | Базовый | 1 ч | 4 запроса | 15 мин | 1 запрос |
   *
   * GET /api/v1/warehouse_remains/tasks/{task_id}/status
   *
   * Разделы WB: Отчёт об остатках на складах.
   *
   * @see https://dev.wildberries.ru/docs/openapi/reports
   */
  readonly getV1WarehouseRemainsTasksTaskIdStatus: (
    input: GetV1WarehouseRemainsTasksTaskIdStatusInput,
    options?: WbRequestOptions,
  ) => Promise<GetV1WarehouseRemainsTasksTaskIdStatusResponse>;
  /**
   * Получить отчёт
   *
   * Метод возвращает отчёт об [остатках на складах WB](https://seller.wildberries.ru/analytics-reports/warehouse-remains) по ID [задания на генерацию](/openapi/reports#tag/warehousesInventoryReport/operation/getV1WarehouseRemains).
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца:
   *
   * | Тип | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- | --- |
   * | Персональный | 1 мин | 1 запрос | 1 мин | 1 запрос |
   * | Сервисный | 1 мин | 1 запрос | 1 мин | 1 запрос |
   * | Базовый с секретом | 1 мин | 1 запрос | 1 мин | 1 запрос |
   * | Базовый | 1 ч | 4 запроса | 15 мин | 1 запрос |
   *
   * GET /api/v1/warehouse_remains/tasks/{task_id}/download
   *
   * Разделы WB: Отчёт об остатках на складах.
   *
   * @see https://dev.wildberries.ru/docs/openapi/reports
   */
  readonly getV1WarehouseRemainsTasksTaskIdDownload: (
    input: GetV1WarehouseRemainsTasksTaskIdDownloadInput,
    options?: WbRequestOptions,
  ) => Promise<GetV1WarehouseRemainsTasksTaskIdDownloadResponse>;
  /**
   * Удержания за занижение габаритов упаковки
   *
   * Метод возвращает отчёт об [удержаниях за занижение габаритов упаковки](https://seller.wildberries.ru/analytics-reports/dimensions-penalties)
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца:
   *
   * | Тип | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- | --- |
   * | Персональный | 1 мин | 1 запрос | 1 мин | 1 запрос |
   * | Сервисный | 1 мин | 1 запрос | 1 мин | 1 запрос |
   * | Базовый с секретом | 1 мин | 1 запрос | 1 мин | 1 запрос |
   * | Базовый | 6 ч | 1 запрос | 6 ч | 1 запрос |
   *
   * GET /api/analytics/v1/measurement-penalties
   *
   * Разделы WB: Отчёты об удержаниях.
   *
   * @see https://dev.wildberries.ru/docs/openapi/reports
   */
  readonly getV1MeasurementPenalties: (
    input: GetV1MeasurementPenaltiesInput,
    options?: WbRequestOptions,
  ) => Promise<GetV1MeasurementPenaltiesResponse>;
  /**
   * Замеры склада
   *
   * Метод возвращает отчёт о [замерах склада](https://seller.wildberries.ru/analytics-reports/dimensions-penalties/warehouse-measurements)
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца:
   *
   * | Тип | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- | --- |
   * | Персональный | 1 мин | 1 запрос | 1 мин | 1 запрос |
   * | Сервисный | 1 мин | 1 запрос | 1 мин | 1 запрос |
   * | Базовый с секретом | 1 мин | 1 запрос | 1 мин | 1 запрос |
   * | Базовый | 6 ч | 1 запрос | 6 ч | 1 запрос |
   *
   * GET /api/analytics/v1/warehouse-measurements
   *
   * Разделы WB: Отчёты об удержаниях.
   *
   * @see https://dev.wildberries.ru/docs/openapi/reports
   */
  readonly getV1WarehouseMeasurements: (
    input: GetV1WarehouseMeasurementsInput,
    options?: WbRequestOptions,
  ) => Promise<GetV1WarehouseMeasurementsResponse>;
  /**
   * Подмены и неверные вложения
   *
   * Метод возвращает отчёт об удержаниях за [подмены и неверные вложения](https://seller.wildberries.ru/analytics-reports/dimensions-penalties/retentions)
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца:
   *
   * | Тип | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- | --- |
   * | Персональный | 1 мин | 1 запрос | 1 мин | 1 запрос |
   * | Сервисный | 1 мин | 1 запрос | 1 мин | 1 запрос |
   * | Базовый с секретом | 1 мин | 1 запрос | 1 мин | 1 запрос |
   * | Базовый | 1 ч | 4 запроса | 15 мин | 1 запрос |
   *
   * GET /api/analytics/v1/deductions
   *
   * Разделы WB: Отчёты об удержаниях.
   *
   * @see https://dev.wildberries.ru/docs/openapi/reports
   */
  readonly getV1Deductions: (
    input: GetV1DeductionsInput,
    options?: WbRequestOptions,
  ) => Promise<GetV1DeductionsResponse>;
  /**
   * Самовыкупы
   *
   * Метод возвращает отчёт об удержаниях за самовыкупы. Отчёт формируется каждую неделю по средам, до 7:00 по московскому времени, и содержит данные за одну неделю.
   *
   * Удержание за самовыкуп — 30% от стоимости товаров.
   * Минимальная сумма всех удержаний — 100 000 ₽, если за неделю в ПВЗ привезли ваших товаров больше, чем на сумму 100 000 ₽.
   *
   * Данные доступны с августа 2023.
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца:
   *
   * | Тип | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- | --- |
   * | Персональный | 10 мин | 1 запрос | 10 мин | 10 запросов |
   * | Сервисный | 10 мин | 1 запрос | 10 мин | 10 запросов |
   * | Базовый с секретом | 10 мин | 1 запрос | 10 мин | 10 запросов |
   * | Базовый | 1 ч | 1 запрос | 1 ч | 1 запрос |
   *
   * GET /api/v1/analytics/antifraud-details
   *
   * Разделы WB: Отчёты об удержаниях.
   *
   * @see https://dev.wildberries.ru/docs/openapi/reports
   */
  readonly getV1AnalyticsAntifraudDetails: (
    input?: GetV1AnalyticsAntifraudDetailsInput,
    options?: WbRequestOptions,
  ) => Promise<GetV1AnalyticsAntifraudDetailsResponse>;
  /**
   * Маркировка товара
   *
   * Метод возвращает отчёт о штрафах за отсутствие обязательной маркировки товаров.
   *
   * В отчёте представлены фотографии товаров, на которых маркировка отсутствует либо не считывается.
   *
   * Можно получить данные максимум за 31 день. Данные доступны с марта 2024.
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца:
   *
   * | Тип | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- | --- |
   * | Персональный | 1 мин | 1 запрос | 1 мин | 10 запросов |
   * | Сервисный | 1 мин | 1 запрос | 1 мин | 10 запросов |
   * | Базовый с секретом | 1 мин | 1 запрос | 1 мин | 10 запросов |
   * | Базовый | 1 ч | 1 запрос | 1 ч | 1 запрос |
   *
   * GET /api/v1/analytics/goods-labeling
   *
   * Разделы WB: Отчёты об удержаниях.
   *
   * @see https://dev.wildberries.ru/docs/openapi/reports
   */
  readonly getV1AnalyticsGoodsLabeling: (
    input: GetV1AnalyticsGoodsLabelingInput,
    options?: WbRequestOptions,
  ) => Promise<GetV1AnalyticsGoodsLabelingResponse>;
  /**
   * Создать отчёт
   *
   * Метод создаёт [задание на генерацию](/openapi/reports#tag/acceptanceExpenses/operation/getV1AcceptanceReportTasksTaskIdStatus) отчёта об [операциях при приёмке](/openapi/reports#tag/acceptanceExpenses/operation/getV1AcceptanceReportTasksTaskIdDownload).
   *
   * Можно получить отчёт максимум за 31 день.
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца:
   *
   * | Тип | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- | --- |
   * | Персональный | 1 мин | 1 запрос | 1 мин | 1 запрос |
   * | Сервисный | 1 мин | 1 запрос | 1 мин | 1 запрос |
   * | Базовый с секретом | 1 мин | 1 запрос | 1 мин | 1 запрос |
   * | Базовый | 3 ч | 1 запрос | 3 ч | 1 запрос |
   *
   * GET /api/v1/acceptance_report
   *
   * Разделы WB: Операции при приёмке.
   *
   * @see https://dev.wildberries.ru/docs/openapi/reports
   */
  readonly getV1AcceptanceReport: (
    input: GetV1AcceptanceReportInput,
    options?: WbRequestOptions,
  ) => Promise<GetV1AcceptanceReportResponse>;
  /**
   * Проверить статус
   *
   * Метод возвращает статус [задания на генерацию](/openapi/reports#tag/acceptanceExpenses/operation/getV1AcceptanceReport) отчёта об [операциях при приёмке](/openapi/reports#tag/acceptanceExpenses/operation/getV1AcceptanceReportTasksTaskIdDownload).
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца:
   *
   * | Тип | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- | --- |
   * | Персональный | 5 сек | 1 запрос | 5 сек | 1 запрос |
   * | Сервисный | 5 сек | 1 запрос | 5 сек | 1 запрос |
   * | Базовый с секретом | 5 сек | 1 запрос | 5 сек | 1 запрос |
   * | Базовый | 1 ч | 2 запроса | 30 мин | 1 запрос |
   *
   * GET /api/v1/acceptance_report/tasks/{task_id}/status
   *
   * Разделы WB: Операции при приёмке.
   *
   * @see https://dev.wildberries.ru/docs/openapi/reports
   */
  readonly getV1AcceptanceReportTasksTaskIdStatus: (
    input: GetV1AcceptanceReportTasksTaskIdStatusInput,
    options?: WbRequestOptions,
  ) => Promise<GetV1AcceptanceReportTasksTaskIdStatusResponse>;
  /**
   * Получить отчёт
   *
   * Метод возвращает отчёт об [операциях при приёмке](https://seller.wildberries.ru/analytics-reports/acceptance-report) по ID [задания на генерацию](/openapi/reports#tag/acceptanceExpenses/operation/getV1AcceptanceReport).
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца:
   *
   * | Тип | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- | --- |
   * | Персональный | 1 мин | 1 запрос | 1 мин | 1 запрос |
   * | Сервисный | 1 мин | 1 запрос | 1 мин | 1 запрос |
   * | Базовый с секретом | 1 мин | 1 запрос | 1 мин | 1 запрос |
   * | Базовый | 1 ч | 2 запроса | 30 мин | 1 запрос |
   *
   * GET /api/v1/acceptance_report/tasks/{task_id}/download
   *
   * Разделы WB: Операции при приёмке.
   *
   * @see https://dev.wildberries.ru/docs/openapi/reports
   */
  readonly getV1AcceptanceReportTasksTaskIdDownload: (
    input: GetV1AcceptanceReportTasksTaskIdDownloadInput,
    options?: WbRequestOptions,
  ) => Promise<GetV1AcceptanceReportTasksTaskIdDownloadResponse>;
  /**
   * Создать отчёт
   *
   * Метод создаёт [задание на генерацию](/openapi/reports#tag/paidStorage/operation/getV1PaidStorageTasksTaskIdStatus) отчёта о [платном хранении](/openapi/reports#tag/paidStorage/operation/getV1PaidStorageTasksTaskIdDownload).
   *
   * Можно получить отчёт максимум за 8 дней.
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца:
   *
   * | Тип | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- | --- |
   * | Персональный | 1 мин | 1 запрос | 1 мин | 5 запросов |
   * | Сервисный | 1 мин | 1 запрос | 1 мин | 5 запросов |
   * | Базовый с секретом | 1 мин | 1 запрос | 1 мин | 5 запросов |
   * | Базовый | 1 ч | 1 запрос | 1 ч | 1 запрос |
   *
   * GET /api/v1/paid_storage
   *
   * Разделы WB: Платное хранение.
   *
   * @see https://dev.wildberries.ru/docs/openapi/reports
   */
  readonly getV1PaidStorage: (
    input: GetV1PaidStorageInput,
    options?: WbRequestOptions,
  ) => Promise<GetV1PaidStorageResponse>;
  /**
   * Проверить статус
   *
   * Метод возвращает статус [задания на генерацию](/openapi/reports#tag/paidStorage/operation/getV1PaidStorage) отчёта о [платном хранении](/openapi/reports#tag/paidStorage/operation/getV1PaidStorageTasksTaskIdDownload).
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца:
   *
   * | Тип | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- | --- |
   * | Персональный | 5 сек | 1 запрос | 5 сек | 5 запросов |
   * | Сервисный | 5 сек | 1 запрос | 5 сек | 5 запросов |
   * | Базовый с секретом | 5 сек | 1 запрос | 5 сек | 5 запросов |
   * | Базовый | 1 ч | 2 запроса | 30 мин | 2 запроса |
   *
   * GET /api/v1/paid_storage/tasks/{task_id}/status
   *
   * Разделы WB: Платное хранение.
   *
   * @see https://dev.wildberries.ru/docs/openapi/reports
   */
  readonly getV1PaidStorageTasksTaskIdStatus: (
    input: GetV1PaidStorageTasksTaskIdStatusInput,
    options?: WbRequestOptions,
  ) => Promise<GetV1PaidStorageTasksTaskIdStatusResponse>;
  /**
   * Получить отчёт
   *
   * Метод возвращает отчёт о [платном хранении](https://seller.wildberries.ru/analytics-reports/paid-storage/storage) по ID [задания на генерацию](/openapi/reports#tag/paidStorage/operation/getV1PaidStorage).
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца:
   *
   * | Тип | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- | --- |
   * | Персональный | 1 мин | 1 запрос | 1 мин | 1 запрос |
   * | Сервисный | 1 мин | 1 запрос | 1 мин | 1 запрос |
   * | Базовый с секретом | 1 мин | 1 запрос | 1 мин | 1 запрос |
   * | Базовый | 1 ч | 2 запроса | 30 мин | 1 запрос |
   *
   * GET /api/v1/paid_storage/tasks/{task_id}/download
   *
   * Разделы WB: Платное хранение.
   *
   * @see https://dev.wildberries.ru/docs/openapi/reports
   */
  readonly getV1PaidStorageTasksTaskIdDownload: (
    input: GetV1PaidStorageTasksTaskIdDownloadInput,
    options?: WbRequestOptions,
  ) => Promise<GetV1PaidStorageTasksTaskIdDownloadResponse>;
  /**
   * Получить отчёт
   *
   * Метод возвращает отчёт с [данными продаж, сгруппированных по регионам стран](https://seller.wildberries.ru/analytics-reports/region-sale).
   *
   * Можно получить отчёт максимум за 31 день.
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца:
   *
   * | Тип | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- | --- |
   * | Персональный | 10 сек | 1 запрос | 10 сек | 5 запросов |
   * | Сервисный | 10 сек | 1 запрос | 10 сек | 5 запросов |
   * | Базовый с секретом | 10 сек | 1 запрос | 10 сек | 5 запросов |
   * | Базовый | 1 ч | 1 запрос | 1 ч | 1 запрос |
   *
   * GET /api/v1/analytics/region-sale
   *
   * Разделы WB: Продажи по регионам.
   *
   * @see https://dev.wildberries.ru/docs/openapi/reports
   */
  readonly getV1AnalyticsRegionSale: (
    input: GetV1AnalyticsRegionSaleInput,
    options?: WbRequestOptions,
  ) => Promise<GetV1AnalyticsRegionSaleResponse>;
  /**
   * Бренды продавца
   *
   * Метод возвращает список брендов продавца для отчёта о [доле бренда в продажах](https://seller.wildberries.ru/analytics-reports/brand-share).
   *
   * Можно получить только бренды, которые:
   * - Продавались за последние 90 дней.
   * - Есть на складе WB.
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца:
   *
   * | Тип | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- | --- |
   * | Персональный | 1 мин | 1 запрос | 1 мин | 10 запросов |
   * | Сервисный | 1 мин | 1 запрос | 1 мин | 10 запросов |
   * | Базовый с секретом | 1 мин | 1 запрос | 1 мин | 10 запросов |
   * | Базовый | 1 ч | 1 запрос | 1 ч | 1 запрос |
   *
   * GET /api/v1/analytics/brand-share/brands
   *
   * Разделы WB: Доля бренда в продажах.
   *
   * @see https://dev.wildberries.ru/docs/openapi/reports
   */
  readonly getV1AnalyticsBrandShareBrands: (
    options?: WbRequestOptions,
  ) => Promise<GetV1AnalyticsBrandShareBrandsResponse>;
  /**
   * Родительские категории бренда
   *
   * Метод возвращает родительские категории бренда продавца для отчёта о [доле бренда в продажах](https://seller.wildberries.ru/analytics-reports/brand-share).
   *
   * Можно получить отчёт максимум за 365 дней. Данные доступны с 1 ноября 2022.
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца:
   *
   * | Тип | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- | --- |
   * | Персональный | 5 сек | 1 запрос | 5 сек | 20 запросов |
   * | Сервисный | 5 сек | 1 запрос | 5 сек | 20 запросов |
   * | Базовый с секретом | 5 сек | 1 запрос | 5 сек | 20 запросов |
   * | Базовый | 1 ч | 1 запрос | 1 ч | 1 запрос |
   *
   * GET /api/v1/analytics/brand-share/parent-subjects
   *
   * Разделы WB: Доля бренда в продажах.
   *
   * @see https://dev.wildberries.ru/docs/openapi/reports
   */
  readonly getV1AnalyticsBrandShareParentSubjects: (
    input: GetV1AnalyticsBrandShareParentSubjectsInput,
    options?: WbRequestOptions,
  ) => Promise<GetV1AnalyticsBrandShareParentSubjectsResponse>;
  /**
   * Получить отчёт
   *
   * Метод возвращает отчёт о [доле бренда продавца в продажах](https://seller.wildberries.ru/analytics-reports/brand-share).
   *
   * Можно получить отчёт максимум за 365 дней. Данные доступны с 1 ноября 2022.
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца:
   *
   * | Тип | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- | --- |
   * | Персональный | 5 сек | 1 запрос | 5 сек | 20 запросов |
   * | Сервисный | 5 сек | 1 запрос | 5 сек | 20 запросов |
   * | Базовый с секретом | 5 сек | 1 запрос | 5 сек | 20 запросов |
   * | Базовый | 1 ч | 1 запрос | 1 ч | 1 запрос |
   *
   * GET /api/v1/analytics/brand-share
   *
   * Разделы WB: Доля бренда в продажах.
   *
   * @see https://dev.wildberries.ru/docs/openapi/reports
   */
  readonly getV1AnalyticsBrandShare: (
    input: GetV1AnalyticsBrandShareInput,
    options?: WbRequestOptions,
  ) => Promise<GetV1AnalyticsBrandShareResponse>;
  /**
   * Получить отчёт
   *
   * Метод возвращает список [заблокированных карточек товаров продавца](https://seller.wildberries.ru/analytics-reports/banned-products) с причинами блокировки.
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца:
   *
   * | Тип | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- | --- |
   * | Персональный | 10 сек | 1 запрос | 10 сек | 6 запросов |
   * | Сервисный | 10 сек | 1 запрос | 10 сек | 6 запросов |
   * | Базовый с секретом | 10 сек | 1 запрос | 10 сек | 6 запросов |
   * | Базовый | 1 ч | 1 запрос | 1 ч | 1 запрос |
   *
   * GET /api/v1/analytics/banned-products/blocked
   *
   * Разделы WB: Заблокированные карточки.
   *
   * @see https://dev.wildberries.ru/docs/openapi/reports
   */
  readonly getV1AnalyticsBannedProducsBlocked: (
    input: GetV1AnalyticsBannedProducsBlockedInput,
    options?: WbRequestOptions,
  ) => Promise<GetV1AnalyticsBannedProducsBlockedResponse>;
  /**
   * Получить отчёт
   *
   * Метод возвращает отчёт о [возвратах товаров продавцу](https://seller.wildberries.ru/analytics-reports/goods-return).
   *
   * Можно получить отчёт максимум за 31 день.
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца:
   *
   * | Тип | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- | --- |
   * | Персональный | 1 мин | 1 запрос | 1 мин | 10 запросов |
   * | Сервисный | 1 мин | 1 запрос | 1 мин | 10 запросов |
   * | Базовый с секретом | 1 мин | 1 запрос | 1 мин | 10 запросов |
   * | Базовый | 1 ч | 2 запроса | 30 мин | 1 запрос |
   *
   * GET /api/v1/analytics/goods-return
   *
   * Разделы WB: Отчёт о возвратах и перемещении товаров.
   *
   * @see https://dev.wildberries.ru/docs/openapi/reports
   */
  readonly getV1AnalyticsGoodsReturn: (
    input: GetV1AnalyticsGoodsReturnInput,
    options?: WbRequestOptions,
  ) => Promise<GetV1AnalyticsGoodsReturnResponse>;
  /**
   * Рекомендуемый метод без версии; использует `getV1SupplierOrders`.
   *
   * GET /api/v1/supplier/orders
   *
   * @see https://dev.wildberries.ru/docs/openapi/reports
   */
  readonly getSupplierOrders: (
    input: GetV1SupplierOrdersInput,
    options?: WbRequestOptions,
  ) => Promise<GetV1SupplierOrdersResponse>;
  /**
   * Рекомендуемый метод без версии; использует `getV1SupplierSales`.
   *
   * GET /api/v1/supplier/sales
   *
   * @see https://dev.wildberries.ru/docs/openapi/reports
   */
  readonly getSupplierSales: (
    input: GetV1SupplierSalesInput,
    options?: WbRequestOptions,
  ) => Promise<GetV1SupplierSalesResponse>;
  /**
   * Рекомендуемый метод без версии; использует `postV1AnalyticsExciseReport`.
   *
   * POST /api/v1/analytics/excise-report
   *
   * @see https://dev.wildberries.ru/docs/openapi/reports
   */
  readonly postAnalyticsExciseReport: (
    input: PostV1AnalyticsExciseReportInput,
    options?: WbRequestOptions,
  ) => Promise<PostV1AnalyticsExciseReportResponse>;
  /**
   * Рекомендуемый метод без версии; использует `getV1WarehouseRemains`.
   *
   * GET /api/v1/warehouse_remains
   *
   * @see https://dev.wildberries.ru/docs/openapi/reports
   */
  readonly getWarehouseRemains: (
    input?: GetV1WarehouseRemainsInput,
    options?: WbRequestOptions,
  ) => Promise<GetV1WarehouseRemainsResponse>;
  /**
   * Рекомендуемый метод без версии; использует `getV1WarehouseRemainsTasksTaskIdStatus`.
   *
   * GET /api/v1/warehouse_remains/tasks/{task_id}/status
   *
   * @see https://dev.wildberries.ru/docs/openapi/reports
   */
  readonly getWarehouseRemainsTasksTaskIdStatus: (
    input: GetV1WarehouseRemainsTasksTaskIdStatusInput,
    options?: WbRequestOptions,
  ) => Promise<GetV1WarehouseRemainsTasksTaskIdStatusResponse>;
  /**
   * Рекомендуемый метод без версии; использует `getV1WarehouseRemainsTasksTaskIdDownload`.
   *
   * GET /api/v1/warehouse_remains/tasks/{task_id}/download
   *
   * @see https://dev.wildberries.ru/docs/openapi/reports
   */
  readonly getWarehouseRemainsTasksTaskIdDownload: (
    input: GetV1WarehouseRemainsTasksTaskIdDownloadInput,
    options?: WbRequestOptions,
  ) => Promise<GetV1WarehouseRemainsTasksTaskIdDownloadResponse>;
  /**
   * Рекомендуемый метод без версии; использует `getV1MeasurementPenalties`.
   *
   * GET /api/analytics/v1/measurement-penalties
   *
   * @see https://dev.wildberries.ru/docs/openapi/reports
   */
  readonly getMeasurementPenalties: (
    input: GetV1MeasurementPenaltiesInput,
    options?: WbRequestOptions,
  ) => Promise<GetV1MeasurementPenaltiesResponse>;
  /**
   * Рекомендуемый метод без версии; использует `getV1WarehouseMeasurements`.
   *
   * GET /api/analytics/v1/warehouse-measurements
   *
   * @see https://dev.wildberries.ru/docs/openapi/reports
   */
  readonly getWarehouseMeasurements: (
    input: GetV1WarehouseMeasurementsInput,
    options?: WbRequestOptions,
  ) => Promise<GetV1WarehouseMeasurementsResponse>;
  /**
   * Рекомендуемый метод без версии; использует `getV1Deductions`.
   *
   * GET /api/analytics/v1/deductions
   *
   * @see https://dev.wildberries.ru/docs/openapi/reports
   */
  readonly getDeductions: (
    input: GetV1DeductionsInput,
    options?: WbRequestOptions,
  ) => Promise<GetV1DeductionsResponse>;
  /**
   * Рекомендуемый метод без версии; использует `getV1AnalyticsAntifraudDetails`.
   *
   * GET /api/v1/analytics/antifraud-details
   *
   * @see https://dev.wildberries.ru/docs/openapi/reports
   */
  readonly getAnalyticsAntifraudDetails: (
    input?: GetV1AnalyticsAntifraudDetailsInput,
    options?: WbRequestOptions,
  ) => Promise<GetV1AnalyticsAntifraudDetailsResponse>;
  /**
   * Рекомендуемый метод без версии; использует `getV1AnalyticsGoodsLabeling`.
   *
   * GET /api/v1/analytics/goods-labeling
   *
   * @see https://dev.wildberries.ru/docs/openapi/reports
   */
  readonly getAnalyticsGoodsLabeling: (
    input: GetV1AnalyticsGoodsLabelingInput,
    options?: WbRequestOptions,
  ) => Promise<GetV1AnalyticsGoodsLabelingResponse>;
  /**
   * Рекомендуемый метод без версии; использует `getV1AcceptanceReport`.
   *
   * GET /api/v1/acceptance_report
   *
   * @see https://dev.wildberries.ru/docs/openapi/reports
   */
  readonly getAcceptanceReport: (
    input: GetV1AcceptanceReportInput,
    options?: WbRequestOptions,
  ) => Promise<GetV1AcceptanceReportResponse>;
  /**
   * Рекомендуемый метод без версии; использует `getV1AcceptanceReportTasksTaskIdStatus`.
   *
   * GET /api/v1/acceptance_report/tasks/{task_id}/status
   *
   * @see https://dev.wildberries.ru/docs/openapi/reports
   */
  readonly getAcceptanceReportTasksTaskIdStatus: (
    input: GetV1AcceptanceReportTasksTaskIdStatusInput,
    options?: WbRequestOptions,
  ) => Promise<GetV1AcceptanceReportTasksTaskIdStatusResponse>;
  /**
   * Рекомендуемый метод без версии; использует `getV1AcceptanceReportTasksTaskIdDownload`.
   *
   * GET /api/v1/acceptance_report/tasks/{task_id}/download
   *
   * @see https://dev.wildberries.ru/docs/openapi/reports
   */
  readonly getAcceptanceReportTasksTaskIdDownload: (
    input: GetV1AcceptanceReportTasksTaskIdDownloadInput,
    options?: WbRequestOptions,
  ) => Promise<GetV1AcceptanceReportTasksTaskIdDownloadResponse>;
  /**
   * Рекомендуемый метод без версии; использует `getV1PaidStorage`.
   *
   * GET /api/v1/paid_storage
   *
   * @see https://dev.wildberries.ru/docs/openapi/reports
   */
  readonly getPaidStorage: (
    input: GetV1PaidStorageInput,
    options?: WbRequestOptions,
  ) => Promise<GetV1PaidStorageResponse>;
  /**
   * Рекомендуемый метод без версии; использует `getV1PaidStorageTasksTaskIdStatus`.
   *
   * GET /api/v1/paid_storage/tasks/{task_id}/status
   *
   * @see https://dev.wildberries.ru/docs/openapi/reports
   */
  readonly getPaidStorageTasksTaskIdStatus: (
    input: GetV1PaidStorageTasksTaskIdStatusInput,
    options?: WbRequestOptions,
  ) => Promise<GetV1PaidStorageTasksTaskIdStatusResponse>;
  /**
   * Рекомендуемый метод без версии; использует `getV1PaidStorageTasksTaskIdDownload`.
   *
   * GET /api/v1/paid_storage/tasks/{task_id}/download
   *
   * @see https://dev.wildberries.ru/docs/openapi/reports
   */
  readonly getPaidStorageTasksTaskIdDownload: (
    input: GetV1PaidStorageTasksTaskIdDownloadInput,
    options?: WbRequestOptions,
  ) => Promise<GetV1PaidStorageTasksTaskIdDownloadResponse>;
  /**
   * Рекомендуемый метод без версии; использует `getV1AnalyticsRegionSale`.
   *
   * GET /api/v1/analytics/region-sale
   *
   * @see https://dev.wildberries.ru/docs/openapi/reports
   */
  readonly getAnalyticsRegionSale: (
    input: GetV1AnalyticsRegionSaleInput,
    options?: WbRequestOptions,
  ) => Promise<GetV1AnalyticsRegionSaleResponse>;
  /**
   * Рекомендуемый метод без версии; использует `getV1AnalyticsBrandShareBrands`.
   *
   * GET /api/v1/analytics/brand-share/brands
   *
   * @see https://dev.wildberries.ru/docs/openapi/reports
   */
  readonly getAnalyticsBrandShareBrands: (
    options?: WbRequestOptions,
  ) => Promise<GetV1AnalyticsBrandShareBrandsResponse>;
  /**
   * Рекомендуемый метод без версии; использует `getV1AnalyticsBrandShareParentSubjects`.
   *
   * GET /api/v1/analytics/brand-share/parent-subjects
   *
   * @see https://dev.wildberries.ru/docs/openapi/reports
   */
  readonly getAnalyticsBrandShareParentSubjects: (
    input: GetV1AnalyticsBrandShareParentSubjectsInput,
    options?: WbRequestOptions,
  ) => Promise<GetV1AnalyticsBrandShareParentSubjectsResponse>;
  /**
   * Рекомендуемый метод без версии; использует `getV1AnalyticsBrandShare`.
   *
   * GET /api/v1/analytics/brand-share
   *
   * @see https://dev.wildberries.ru/docs/openapi/reports
   */
  readonly getAnalyticsBrandShare: (
    input: GetV1AnalyticsBrandShareInput,
    options?: WbRequestOptions,
  ) => Promise<GetV1AnalyticsBrandShareResponse>;
  /**
   * Рекомендуемый метод без версии; использует `getV1AnalyticsBannedProducsBlocked`.
   *
   * GET /api/v1/analytics/banned-products/blocked
   *
   * @see https://dev.wildberries.ru/docs/openapi/reports
   */
  readonly getAnalyticsBannedProducsBlocked: (
    input: GetV1AnalyticsBannedProducsBlockedInput,
    options?: WbRequestOptions,
  ) => Promise<GetV1AnalyticsBannedProducsBlockedResponse>;
  /**
   * Рекомендуемый метод без версии; использует `getV1AnalyticsGoodsReturn`.
   *
   * GET /api/v1/analytics/goods-return
   *
   * @see https://dev.wildberries.ru/docs/openapi/reports
   */
  readonly getAnalyticsGoodsReturn: (
    input: GetV1AnalyticsGoodsReturnInput,
    options?: WbRequestOptions,
  ) => Promise<GetV1AnalyticsGoodsReturnResponse>;
}

export interface WbFinancesApi {
  /**
   * Получить баланс продавца
   *
   * Метод возвращает данные виджета баланса на [главной странице](https://seller.wildberries.ru) портала продавцов.
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца:
   *
   * | Тип | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- | --- |
   * | Персональный | 1 мин | 1 запрос | 1 мин | 1 запрос |
   * | Сервисный | 1 мин | 1 запрос | 1 мин | 1 запрос |
   * | Базовый с секретом | 1 мин | 1 запрос | 1 мин | 1 запрос |
   * | Базовый | 24 ч | 1 запрос | 24 ч | 1 запрос |
   *
   * GET /api/v1/account/balance
   *
   * Разделы WB: Баланс.
   *
   * @see https://dev.wildberries.ru/docs/openapi/finances
   */
  readonly getV1AccountBalance: (
    options?: WbRequestOptions,
  ) => Promise<GetV1AccountBalanceResponse>;
  /**
   * Список отчётов реализации
   *
   * Метод доступен (/openapi/api-information#tag/authorization/Pravila-ispolzovaniya-tokenov-dostupa-k-API) по
   *  Персональному токену,
   *  Сервисному токену
   *
   * Метод возвращает список отчётов релизации по формату [таблицы отчётов](https://seller.wildberries.ru/suppliers-mutual-settlements).
   *
   * Данные доступны с 1 января 2025 года.
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца:
   *
   * | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- |
   * | 1 мин | 1 запрос | 1 мин | 1 запрос |
   *
   * POST /api/finance/v1/sales-reports/list
   *
   * Разделы WB: Финансовые отчёты.
   *
   * @see https://dev.wildberries.ru/docs/openapi/finances
   */
  readonly postV1SalesReportsList: (
    input: PostV1SalesReportsListInput,
    options?: WbRequestOptions,
  ) => Promise<PostV1SalesReportsListResponse>;
  /**
   * Детализации к отчётам реализации по ID отчётов
   *
   * Метод доступен (/openapi/api-information#tag/authorization/Pravila-ispolzovaniya-tokenov-dostupa-k-API) по
   *  Персональному токену,
   *  Сервисному токену
   *
   * Метод возвращает детализации к [отчётам реализации](https://seller.wildberries.ru/suppliers-mutual-settlements) по ID отчётов.
   *
   * Данные доступны с 1 января 2025 года.
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца:
   *
   * | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- |
   * | 1 мин | 1 запрос | 1 мин | 1 запрос |
   *
   * POST /api/finance/v1/sales-reports/detailed/{reportId}
   *
   * Разделы WB: Финансовые отчёты.
   *
   * @see https://dev.wildberries.ru/docs/openapi/finances
   */
  readonly postV1SalesReportsDetailedReportId: (
    input: PostV1SalesReportsDetailedReportIdInput,
    options?: WbRequestOptions,
  ) => Promise<PostV1SalesReportsDetailedReportIdResponse>;
  /**
   * Детализации к отчётам реализации за период
   *
   * Метод возвращает детализации к [отчётам реализации](https://seller.wildberries.ru/suppliers-mutual-settlements) за указанный период.
   *
   * Данные доступны с 29 января 2024 года.
   *
   *  Вы можете выгрузить данные в Google Таблицы (/knowledge-base/articles/019d49a4-650c-7b04-9596-ba441936f9d3)
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца:
   *
   * | Тип | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- | --- |
   * | Персональный | 1 мин | 1 запрос | 1 мин | 1 запрос |
   * | Сервисный | 1 мин | 1 запрос | 1 мин | 1 запрос |
   * | Базовый с секретом | 1 мин | 1 запрос | 1 мин | 1 запрос |
   * | Базовый | 24 ч | 2 запроса | 12 ч | 1 запрос |
   *
   * POST /api/finance/v1/sales-reports/detailed
   *
   * Разделы WB: Финансовые отчёты.
   *
   * @see https://dev.wildberries.ru/docs/openapi/finances
   */
  readonly postV1SalesReportsDetailed: (
    input: PostV1SalesReportsDetailedInput,
    options?: WbRequestOptions,
  ) => Promise<PostV1SalesReportsDetailedResponse>;
  /**
   * Список отчётов об издержках на приём платежей
   *
   * Метод доступен (/openapi/api-information#tag/authorization/Pravila-ispolzovaniya-tokenov-dostupa-k-API) по
   *  Персональному токену,
   *  Сервисному токену
   *
   * Метод возвращает список отчётов об издержках на приём платежей по формату [таблицы отчётов](https://seller.wildberries.ru/suppliers-mutual-settlements/reports-implementations/acquiring-reports).
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца:
   *
   * | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- |
   * | 1 мин | 1 запрос | 1 мин | 1 запрос |
   *
   * POST /api/finance/v1/acquiring/list
   *
   * Разделы WB: Финансовые отчёты.
   *
   * @see https://dev.wildberries.ru/docs/openapi/finances
   */
  readonly postV1AcquiringList: (
    input: PostV1AcquiringListInput,
    options?: WbRequestOptions,
  ) => Promise<PostV1AcquiringListResponse>;
  /**
   * Детализации к отчётам об издержках на приём платежей по ID отчётов
   *
   * Метод доступен (/openapi/api-information#tag/authorization/Pravila-ispolzovaniya-tokenov-dostupa-k-API) по
   *  Персональному токену,
   *  Сервисному токену
   *
   * Метод возвращает детализации к [отчётам об издержках на приём платежей](https://seller.wildberries.ru/suppliers-mutual-settlements/reports-implementations/acquiring-reports) по ID отчётов.
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца:
   *
   * | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- |
   * | 1 мин | 1 запрос | 1 мин | 1 запрос |
   *
   * POST /api/finance/v1/acquiring/detailed/{reportId}
   *
   * Разделы WB: Финансовые отчёты.
   *
   * @see https://dev.wildberries.ru/docs/openapi/finances
   */
  readonly postV1AcquiringDetailedReportId: (
    input: PostV1AcquiringDetailedReportIdInput,
    options?: WbRequestOptions,
  ) => Promise<PostV1AcquiringDetailedReportIdResponse>;
  /**
   * Детализации к отчётам об издержках на приём платежей за период
   *
   * Метод доступен (/openapi/api-information#tag/authorization/Pravila-ispolzovaniya-tokenov-dostupa-k-API) по
   *  Персональному токену,
   *  Сервисному токену
   *
   * Метод возвращает детализации к [отчётам об издержках на приём платежей](https://seller.wildberries.ru/suppliers-mutual-settlements/reports-implementations/acquiring-reports) за указанный период.
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца:
   *
   * | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- |
   * | 1 мин | 1 запрос | 1 мин | 1 запрос |
   *
   * POST /api/finance/v1/acquiring/detailed
   *
   * Разделы WB: Финансовые отчёты.
   *
   * @see https://dev.wildberries.ru/docs/openapi/finances
   */
  readonly postV1AcquiringDetailed: (
    input: PostV1AcquiringDetailedInput,
    options?: WbRequestOptions,
  ) => Promise<PostV1AcquiringDetailedResponse>;
  /**
   * Категории документов
   *
   * Метод возвращает категории документов для получения [списка документов продавца](/openapi/financial-reports-and-accounting#tag/documents/operation/getV1DocumentsList).
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца:
   *
   * | Тип | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- | --- |
   * | Персональный | 10 сек | 1 запрос | 10 сек | 5 запросов |
   * | Сервисный | 10 сек | 1 запрос | 10 сек | 5 запросов |
   * | Базовый с секретом | 10 сек | 1 запрос | 10 сек | 5 запросов |
   * | Базовый | 24 ч | 1 запрос | 24 ч | 1 запрос |
   *
   * GET /api/v1/documents/categories
   *
   * Разделы WB: Документы.
   *
   * @see https://dev.wildberries.ru/docs/openapi/finances
   */
  readonly getV1DocumentsCategories: (
    input?: GetV1DocumentsCategoriesInput,
    options?: WbRequestOptions,
  ) => Promise<GetV1DocumentsCategoriesResponse>;
  /**
   * Список документов
   *
   * Метод возвращает список документов продавца. Вы можете получить [один](/openapi/financial-reports-and-accounting#tag/documents/operation/getV1DocumentsDownload) или [несколько](/openapi/financial-reports-and-accounting#tag/documents/operation/postV1DocumentsDownloadAll) документов из полученного списка.
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца:
   *
   * | Тип | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- | --- |
   * | Персональный | 10 сек | 1 запрос | 10 сек | 5 запросов |
   * | Сервисный | 10 сек | 1 запрос | 10 сек | 5 запросов |
   * | Базовый с секретом | 10 сек | 1 запрос | 10 сек | 5 запросов |
   * | Базовый | 24 ч | 1 запрос | 24 ч | 1 запрос |
   *
   * GET /api/v1/documents/list
   *
   * Разделы WB: Документы.
   *
   * @see https://dev.wildberries.ru/docs/openapi/finances
   */
  readonly getV1DocumentsList: (
    input?: GetV1DocumentsListInput,
    options?: WbRequestOptions,
  ) => Promise<GetV1DocumentsListResponse>;
  /**
   * Получить документ
   *
   * Метод загружает один документ из [списка документов продавца](/openapi/financial-reports-and-accounting#tag/documents/operation/getV1DocumentsList).
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца:
   *
   * | Тип | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- | --- |
   * | Персональный | 10 сек | 1 запрос | 10 сек | 5 запросов |
   * | Сервисный | 10 сек | 1 запрос | 10 сек | 5 запросов |
   * | Базовый с секретом | 10 сек | 1 запрос | 10 сек | 5 запросов |
   * | Базовый | 24 ч | 1 запрос | 24 ч | 1 запрос |
   *
   * GET /api/v1/documents/download
   *
   * Разделы WB: Документы.
   *
   * @see https://dev.wildberries.ru/docs/openapi/finances
   */
  readonly getV1DocumentsDownload: (
    input: GetV1DocumentsDownloadInput,
    options?: WbRequestOptions,
  ) => Promise<GetV1DocumentsDownloadResponse>;
  /**
   * Получить документы
   *
   * Метод загружает несколько документов из [списка документов продавца](/openapi/financial-reports-and-accounting#tag/documents/operation/getV1DocumentsList).
   *
   * Лимит запросов (/openapi/api-information#tag/introduction/Limity-zaprosov) на один аккаунт продавца:
   *
   * | Тип | Период | Лимит | Интервал | Всплеск |
   * | --- | --- | --- | --- | --- |
   * | Персональный | 5 мин | 1 запрос | 5 мин | 5 запросов |
   * | Сервисный | 5 мин | 1 запрос | 5 мин | 5 запросов |
   * | Базовый с секретом | 5 мин | 1 запрос | 5 мин | 5 запросов |
   * | Базовый | 24 ч | 1 запрос | 24 ч | 1 запрос |
   *
   * POST /api/v1/documents/download/all
   *
   * Разделы WB: Документы.
   *
   * @see https://dev.wildberries.ru/docs/openapi/finances
   */
  readonly postV1DocumentsDownloadAll: (
    input?: PostV1DocumentsDownloadAllInput,
    options?: WbRequestOptions,
  ) => Promise<PostV1DocumentsDownloadAllResponse>;
  /**
   * Рекомендуемый метод без версии; использует `getV1AccountBalance`.
   *
   * GET /api/v1/account/balance
   *
   * @see https://dev.wildberries.ru/docs/openapi/finances
   */
  readonly getAccountBalance: (
    options?: WbRequestOptions,
  ) => Promise<GetV1AccountBalanceResponse>;
  /**
   * Рекомендуемый метод без версии; использует `postV1SalesReportsList`.
   *
   * POST /api/finance/v1/sales-reports/list
   *
   * @see https://dev.wildberries.ru/docs/openapi/finances
   */
  readonly postSalesReportsList: (
    input: PostV1SalesReportsListInput,
    options?: WbRequestOptions,
  ) => Promise<PostV1SalesReportsListResponse>;
  /**
   * Рекомендуемый метод без версии; использует `postV1SalesReportsDetailedReportId`.
   *
   * POST /api/finance/v1/sales-reports/detailed/{reportId}
   *
   * @see https://dev.wildberries.ru/docs/openapi/finances
   */
  readonly postSalesReportsDetailedReportId: (
    input: PostV1SalesReportsDetailedReportIdInput,
    options?: WbRequestOptions,
  ) => Promise<PostV1SalesReportsDetailedReportIdResponse>;
  /**
   * Рекомендуемый метод без версии; использует `postV1SalesReportsDetailed`.
   *
   * POST /api/finance/v1/sales-reports/detailed
   *
   * @see https://dev.wildberries.ru/docs/openapi/finances
   */
  readonly postSalesReportsDetailed: (
    input: PostV1SalesReportsDetailedInput,
    options?: WbRequestOptions,
  ) => Promise<PostV1SalesReportsDetailedResponse>;
  /**
   * Рекомендуемый метод без версии; использует `postV1AcquiringList`.
   *
   * POST /api/finance/v1/acquiring/list
   *
   * @see https://dev.wildberries.ru/docs/openapi/finances
   */
  readonly postAcquiringList: (
    input: PostV1AcquiringListInput,
    options?: WbRequestOptions,
  ) => Promise<PostV1AcquiringListResponse>;
  /**
   * Рекомендуемый метод без версии; использует `postV1AcquiringDetailedReportId`.
   *
   * POST /api/finance/v1/acquiring/detailed/{reportId}
   *
   * @see https://dev.wildberries.ru/docs/openapi/finances
   */
  readonly postAcquiringDetailedReportId: (
    input: PostV1AcquiringDetailedReportIdInput,
    options?: WbRequestOptions,
  ) => Promise<PostV1AcquiringDetailedReportIdResponse>;
  /**
   * Рекомендуемый метод без версии; использует `postV1AcquiringDetailed`.
   *
   * POST /api/finance/v1/acquiring/detailed
   *
   * @see https://dev.wildberries.ru/docs/openapi/finances
   */
  readonly postAcquiringDetailed: (
    input: PostV1AcquiringDetailedInput,
    options?: WbRequestOptions,
  ) => Promise<PostV1AcquiringDetailedResponse>;
  /**
   * Рекомендуемый метод без версии; использует `getV1DocumentsCategories`.
   *
   * GET /api/v1/documents/categories
   *
   * @see https://dev.wildberries.ru/docs/openapi/finances
   */
  readonly getDocumentsCategories: (
    input?: GetV1DocumentsCategoriesInput,
    options?: WbRequestOptions,
  ) => Promise<GetV1DocumentsCategoriesResponse>;
  /**
   * Рекомендуемый метод без версии; использует `getV1DocumentsList`.
   *
   * GET /api/v1/documents/list
   *
   * @see https://dev.wildberries.ru/docs/openapi/finances
   */
  readonly getDocumentsList: (
    input?: GetV1DocumentsListInput,
    options?: WbRequestOptions,
  ) => Promise<GetV1DocumentsListResponse>;
  /**
   * Рекомендуемый метод без версии; использует `getV1DocumentsDownload`.
   *
   * GET /api/v1/documents/download
   *
   * @see https://dev.wildberries.ru/docs/openapi/finances
   */
  readonly getDocumentsDownload: (
    input: GetV1DocumentsDownloadInput,
    options?: WbRequestOptions,
  ) => Promise<GetV1DocumentsDownloadResponse>;
  /**
   * Рекомендуемый метод без версии; использует `postV1DocumentsDownloadAll`.
   *
   * POST /api/v1/documents/download/all
   *
   * @see https://dev.wildberries.ru/docs/openapi/finances
   */
  readonly postDocumentsDownloadAll: (
    input?: PostV1DocumentsDownloadAllInput,
    options?: WbRequestOptions,
  ) => Promise<PostV1DocumentsDownloadAllResponse>;
}

export interface WbDomainApi {
  readonly general: WbGeneralApi;
  readonly items: WbItemsApi;
  readonly ordersFbs: WbOrdersFbsApi;
  readonly ordersDbw: WbOrdersDbwApi;
  readonly dbs: WbDbsApi;
  readonly inStorePickup: WbInStorePickupApi;
  readonly ordersFbw: WbOrdersFbwApi;
  readonly promotion: WbPromotionApi;
  readonly communications: WbCommunicationsApi;
  readonly rates: WbRatesApi;
  readonly analytics: WbAnalyticsApi;
  readonly reports: WbReportsApi;
  readonly finances: WbFinancesApi;
}

/** @internal */
export function createWbDomainApi(execute: WbOperationExecutor): WbDomainApi {
  return Object.freeze({
    general: Object.freeze({
      getPing: (options: WbRequestOptions = {}) =>
        executeGetPing(execute, options),
      getV2News: (input?: GetV2NewsInput, options: WbRequestOptions = {}) =>
        executeGetV2News(execute, input, options),
      getV1SellerInfo: (options: WbRequestOptions = {}) =>
        executeGetV1SellerInfo(execute, options),
      getV1Rating: (options: WbRequestOptions = {}) =>
        executeGetV1Rating(execute, options),
      getV1Subscriptions: (options: WbRequestOptions = {}) =>
        executeGetV1Subscriptions(execute, options),
      getV1TariffConstructorOptions: (
        input?: GetV1TariffConstructorOptionsInput,
        options: WbRequestOptions = {},
      ) => executeGetV1TariffConstructorOptions(execute, input, options),
      postV1Invite: (
        input: PostV1InviteInput,
        options: WbRequestOptions = {},
      ) => executePostV1Invite(execute, input, options),
      getV1Users: (input?: GetV1UsersInput, options: WbRequestOptions = {}) =>
        executeGetV1Users(execute, input, options),
      putV1UsersAccess: (
        input: PutV1UsersAccessInput,
        options: WbRequestOptions = {},
      ) => executePutV1UsersAccess(execute, input, options),
      deleteV1User: (
        input: DeleteV1UserInput,
        options: WbRequestOptions = {},
      ) => executeDeleteV1User(execute, input, options),
      getNews: (input?: GetV2NewsInput, options: WbRequestOptions = {}) =>
        executeGetV2News(execute, input, options),
      getSellerInfo: (options: WbRequestOptions = {}) =>
        executeGetV1SellerInfo(execute, options),
      getRating: (options: WbRequestOptions = {}) =>
        executeGetV1Rating(execute, options),
      getSubscriptions: (options: WbRequestOptions = {}) =>
        executeGetV1Subscriptions(execute, options),
      getTariffConstructorOptions: (
        input?: GetV1TariffConstructorOptionsInput,
        options: WbRequestOptions = {},
      ) => executeGetV1TariffConstructorOptions(execute, input, options),
      postInvite: (input: PostV1InviteInput, options: WbRequestOptions = {}) =>
        executePostV1Invite(execute, input, options),
      getUsers: (input?: GetV1UsersInput, options: WbRequestOptions = {}) =>
        executeGetV1Users(execute, input, options),
      putUsersAccess: (
        input: PutV1UsersAccessInput,
        options: WbRequestOptions = {},
      ) => executePutV1UsersAccess(execute, input, options),
      deleteUser: (input: DeleteV1UserInput, options: WbRequestOptions = {}) =>
        executeDeleteV1User(execute, input, options),
    }),
    items: Object.freeze({
      getContentV2ObjectParentAll: (
        input?: GetContentV2ObjectParentAllInput,
        options: WbRequestOptions = {},
      ) => executeGetContentV2ObjectParentAll(execute, input, options),
      getContentV2ObjectAll: (
        input?: GetContentV2ObjectAllInput,
        options: WbRequestOptions = {},
      ) => executeGetContentV2ObjectAll(execute, input, options),
      getContentV2ObjectCharcsSubjectId: (
        input: GetContentV2ObjectCharcsSubjectIdInput,
        options: WbRequestOptions = {},
      ) => executeGetContentV2ObjectCharcsSubjectId(execute, input, options),
      getContentV2DirectoryColors: (
        input?: GetContentV2DirectoryColorsInput,
        options: WbRequestOptions = {},
      ) => executeGetContentV2DirectoryColors(execute, input, options),
      getContentV2DirectoryKinds: (
        input?: GetContentV2DirectoryKindsInput,
        options: WbRequestOptions = {},
      ) => executeGetContentV2DirectoryKinds(execute, input, options),
      getContentV2DirectoryCountries: (
        input?: GetContentV2DirectoryCountriesInput,
        options: WbRequestOptions = {},
      ) => executeGetContentV2DirectoryCountries(execute, input, options),
      getContentV2DirectorySeasons: (
        input?: GetContentV2DirectorySeasonsInput,
        options: WbRequestOptions = {},
      ) => executeGetContentV2DirectorySeasons(execute, input, options),
      getContentV2DirectoryVat: (
        input?: GetContentV2DirectoryVatInput,
        options: WbRequestOptions = {},
      ) => executeGetContentV2DirectoryVat(execute, input, options),
      getContentV2DirectoryTnved: (
        input: GetContentV2DirectoryTnvedInput,
        options: WbRequestOptions = {},
      ) => executeGetContentV2DirectoryTnved(execute, input, options),
      getApiContentV1Brands: (
        input: GetApiContentV1BrandsInput,
        options: WbRequestOptions = {},
      ) => executeGetApiContentV1Brands(execute, input, options),
      getContentV2Tags: (options: WbRequestOptions = {}) =>
        executeGetContentV2Tags(execute, options),
      postContentV2Tag: (
        input: PostContentV2TagInput,
        options: WbRequestOptions = {},
      ) => executePostContentV2Tag(execute, input, options),
      patchContentV2TagId: (
        input: PatchContentV2TagIdInput,
        options: WbRequestOptions = {},
      ) => executePatchContentV2TagId(execute, input, options),
      deleteContentV2TagId: (
        input: DeleteContentV2TagIdInput,
        options: WbRequestOptions = {},
      ) => executeDeleteContentV2TagId(execute, input, options),
      postContentV2TagNomenclatureLink: (
        input: PostContentV2TagNomenclatureLinkInput,
        options: WbRequestOptions = {},
      ) => executePostContentV2TagNomenclatureLink(execute, input, options),
      postContentV2GetCardsList: (
        input: PostContentV2GetCardsListInput,
        options: WbRequestOptions = {},
      ) => executePostContentV2GetCardsList(execute, input, options),
      postContentV2CardsErrorList: (
        input: PostContentV2CardsErrorListInput,
        options: WbRequestOptions = {},
      ) => executePostContentV2CardsErrorList(execute, input, options),
      postContentV2CardsUpdate: (
        input?: PostContentV2CardsUpdateInput,
        options: WbRequestOptions = {},
      ) => executePostContentV2CardsUpdate(execute, input, options),
      postContentV2CardsMoveNm: (
        input?: PostContentV2CardsMoveNmInput,
        options: WbRequestOptions = {},
      ) => executePostContentV2CardsMoveNm(execute, input, options),
      postContentV2CardsDeleteTrash: (
        input: PostContentV2CardsDeleteTrashInput,
        options: WbRequestOptions = {},
      ) => executePostContentV2CardsDeleteTrash(execute, input, options),
      postContentV2CardsRecover: (
        input: PostContentV2CardsRecoverInput,
        options: WbRequestOptions = {},
      ) => executePostContentV2CardsRecover(execute, input, options),
      postContentV2GetCardsTrash: (
        input: PostContentV2GetCardsTrashInput,
        options: WbRequestOptions = {},
      ) => executePostContentV2GetCardsTrash(execute, input, options),
      getContentV2CardsLimits: (options: WbRequestOptions = {}) =>
        executeGetContentV2CardsLimits(execute, options),
      postContentV2Barcodes: (
        input: PostContentV2BarcodesInput,
        options: WbRequestOptions = {},
      ) => executePostContentV2Barcodes(execute, input, options),
      postContentV2CardsUpload: (
        input?: PostContentV2CardsUploadInput,
        options: WbRequestOptions = {},
      ) => executePostContentV2CardsUpload(execute, input, options),
      postContentV2CardsUploadAdd: (
        input?: PostContentV2CardsUploadAddInput,
        options: WbRequestOptions = {},
      ) => executePostContentV2CardsUploadAdd(execute, input, options),
      postContentV3MediaFile: (
        input: PostContentV3MediaFileInput,
        options: WbRequestOptions = {},
      ) => executePostContentV3MediaFile(execute, input, options),
      postContentV3MediaSave: (
        input: PostContentV3MediaSaveInput,
        options: WbRequestOptions = {},
      ) => executePostContentV3MediaSave(execute, input, options),
      postV1RecommendationsList: (
        input?: PostV1RecommendationsListInput,
        options: WbRequestOptions = {},
      ) => executePostV1RecommendationsList(execute, input, options),
      postV1RecommendationsSet: (
        input: PostV1RecommendationsSetInput,
        options: WbRequestOptions = {},
      ) => executePostV1RecommendationsSet(execute, input, options),
      postApiV2UploadTask: (
        input: PostApiV2UploadTaskInput,
        options: WbRequestOptions = {},
      ) => executePostApiV2UploadTask(execute, input, options),
      postApiV2UploadTaskSize: (
        input: PostApiV2UploadTaskSizeInput,
        options: WbRequestOptions = {},
      ) => executePostApiV2UploadTaskSize(execute, input, options),
      postApiV2UploadTaskClubDiscount: (
        input: PostApiV2UploadTaskClubDiscountInput,
        options: WbRequestOptions = {},
      ) => executePostApiV2UploadTaskClubDiscount(execute, input, options),
      postV1UploadTaskB2bWholesale: (
        input: PostV1UploadTaskB2bWholesaleInput,
        options: WbRequestOptions = {},
      ) => executePostV1UploadTaskB2bWholesale(execute, input, options),
      getApiV2HistoryTasks: (
        input: GetApiV2HistoryTasksInput,
        options: WbRequestOptions = {},
      ) => executeGetApiV2HistoryTasks(execute, input, options),
      getApiV2HistoryGoodsTask: (
        input: GetApiV2HistoryGoodsTaskInput,
        options: WbRequestOptions = {},
      ) => executeGetApiV2HistoryGoodsTask(execute, input, options),
      getApiV2BufferTasks: (
        input: GetApiV2BufferTasksInput,
        options: WbRequestOptions = {},
      ) => executeGetApiV2BufferTasks(execute, input, options),
      getApiV2BufferGoodsTask: (
        input: GetApiV2BufferGoodsTaskInput,
        options: WbRequestOptions = {},
      ) => executeGetApiV2BufferGoodsTask(execute, input, options),
      getApiV2ListGoodsFilter: (
        input: GetApiV2ListGoodsFilterInput,
        options: WbRequestOptions = {},
      ) => executeGetApiV2ListGoodsFilter(execute, input, options),
      postApiV2ListGoodsFilter: (
        input: PostApiV2ListGoodsFilterInput,
        options: WbRequestOptions = {},
      ) => executePostApiV2ListGoodsFilter(execute, input, options),
      getApiV2ListGoodsSizeNm: (
        input: GetApiV2ListGoodsSizeNmInput,
        options: WbRequestOptions = {},
      ) => executeGetApiV2ListGoodsSizeNm(execute, input, options),
      getApiV2QuarantineGoods: (
        input: GetApiV2QuarantineGoodsInput,
        options: WbRequestOptions = {},
      ) => executeGetApiV2QuarantineGoods(execute, input, options),
      putApiV3StocksWarehouseId: (
        input: PutApiV3StocksWarehouseIdInput,
        options: WbRequestOptions = {},
      ) => executePutApiV3StocksWarehouseId(execute, input, options),
      deleteApiV3StocksWarehouseId: (
        input: DeleteApiV3StocksWarehouseIdInput,
        options: WbRequestOptions = {},
      ) => executeDeleteApiV3StocksWarehouseId(execute, input, options),
      postApiV3StocksWarehouseId: (
        input: PostApiV3StocksWarehouseIdInput,
        options: WbRequestOptions = {},
      ) => executePostApiV3StocksWarehouseId(execute, input, options),
      getApiV3Offices: (options: WbRequestOptions = {}) =>
        executeGetApiV3Offices(execute, options),
      getApiV3Warehouses: (options: WbRequestOptions = {}) =>
        executeGetApiV3Warehouses(execute, options),
      postApiV3Warehouses: (
        input: PostApiV3WarehousesInput,
        options: WbRequestOptions = {},
      ) => executePostApiV3Warehouses(execute, input, options),
      putApiV3WarehousesWarehouseId: (
        input: PutApiV3WarehousesWarehouseIdInput,
        options: WbRequestOptions = {},
      ) => executePutApiV3WarehousesWarehouseId(execute, input, options),
      deleteApiV3WarehousesWarehouseId: (
        input: DeleteApiV3WarehousesWarehouseIdInput,
        options: WbRequestOptions = {},
      ) => executeDeleteApiV3WarehousesWarehouseId(execute, input, options),
      getApiV3DbwWarehousesWarehouseIdContacts: (
        input: GetApiV3DbwWarehousesWarehouseIdContactsInput,
        options: WbRequestOptions = {},
      ) =>
        executeGetApiV3DbwWarehousesWarehouseIdContacts(
          execute,
          input,
          options,
        ),
      putApiV3DbwWarehousesWarehouseIdContacts: (
        input: PutApiV3DbwWarehousesWarehouseIdContactsInput,
        options: WbRequestOptions = {},
      ) =>
        executePutApiV3DbwWarehousesWarehouseIdContacts(
          execute,
          input,
          options,
        ),
      getContentObjectParentAll: (
        input?: GetContentV2ObjectParentAllInput,
        options: WbRequestOptions = {},
      ) => executeGetContentV2ObjectParentAll(execute, input, options),
      getContentObjectAll: (
        input?: GetContentV2ObjectAllInput,
        options: WbRequestOptions = {},
      ) => executeGetContentV2ObjectAll(execute, input, options),
      getContentObjectCharcsSubjectId: (
        input: GetContentV2ObjectCharcsSubjectIdInput,
        options: WbRequestOptions = {},
      ) => executeGetContentV2ObjectCharcsSubjectId(execute, input, options),
      getContentDirectoryColors: (
        input?: GetContentV2DirectoryColorsInput,
        options: WbRequestOptions = {},
      ) => executeGetContentV2DirectoryColors(execute, input, options),
      getContentDirectoryKinds: (
        input?: GetContentV2DirectoryKindsInput,
        options: WbRequestOptions = {},
      ) => executeGetContentV2DirectoryKinds(execute, input, options),
      getContentDirectoryCountries: (
        input?: GetContentV2DirectoryCountriesInput,
        options: WbRequestOptions = {},
      ) => executeGetContentV2DirectoryCountries(execute, input, options),
      getContentDirectorySeasons: (
        input?: GetContentV2DirectorySeasonsInput,
        options: WbRequestOptions = {},
      ) => executeGetContentV2DirectorySeasons(execute, input, options),
      getContentDirectoryVat: (
        input?: GetContentV2DirectoryVatInput,
        options: WbRequestOptions = {},
      ) => executeGetContentV2DirectoryVat(execute, input, options),
      getContentDirectoryTnved: (
        input: GetContentV2DirectoryTnvedInput,
        options: WbRequestOptions = {},
      ) => executeGetContentV2DirectoryTnved(execute, input, options),
      getApiContentBrands: (
        input: GetApiContentV1BrandsInput,
        options: WbRequestOptions = {},
      ) => executeGetApiContentV1Brands(execute, input, options),
      getContentTags: (options: WbRequestOptions = {}) =>
        executeGetContentV2Tags(execute, options),
      postContentTag: (
        input: PostContentV2TagInput,
        options: WbRequestOptions = {},
      ) => executePostContentV2Tag(execute, input, options),
      patchContentTagId: (
        input: PatchContentV2TagIdInput,
        options: WbRequestOptions = {},
      ) => executePatchContentV2TagId(execute, input, options),
      deleteContentTagId: (
        input: DeleteContentV2TagIdInput,
        options: WbRequestOptions = {},
      ) => executeDeleteContentV2TagId(execute, input, options),
      postContentTagNomenclatureLink: (
        input: PostContentV2TagNomenclatureLinkInput,
        options: WbRequestOptions = {},
      ) => executePostContentV2TagNomenclatureLink(execute, input, options),
      postContentGetCardsList: (
        input: PostContentV2GetCardsListInput,
        options: WbRequestOptions = {},
      ) => executePostContentV2GetCardsList(execute, input, options),
      postContentCardsErrorList: (
        input: PostContentV2CardsErrorListInput,
        options: WbRequestOptions = {},
      ) => executePostContentV2CardsErrorList(execute, input, options),
      postContentCardsUpdate: (
        input?: PostContentV2CardsUpdateInput,
        options: WbRequestOptions = {},
      ) => executePostContentV2CardsUpdate(execute, input, options),
      postContentCardsMoveNm: (
        input?: PostContentV2CardsMoveNmInput,
        options: WbRequestOptions = {},
      ) => executePostContentV2CardsMoveNm(execute, input, options),
      postContentCardsDeleteTrash: (
        input: PostContentV2CardsDeleteTrashInput,
        options: WbRequestOptions = {},
      ) => executePostContentV2CardsDeleteTrash(execute, input, options),
      postContentCardsRecover: (
        input: PostContentV2CardsRecoverInput,
        options: WbRequestOptions = {},
      ) => executePostContentV2CardsRecover(execute, input, options),
      postContentGetCardsTrash: (
        input: PostContentV2GetCardsTrashInput,
        options: WbRequestOptions = {},
      ) => executePostContentV2GetCardsTrash(execute, input, options),
      getContentCardsLimits: (options: WbRequestOptions = {}) =>
        executeGetContentV2CardsLimits(execute, options),
      postContentBarcodes: (
        input: PostContentV2BarcodesInput,
        options: WbRequestOptions = {},
      ) => executePostContentV2Barcodes(execute, input, options),
      postContentCardsUpload: (
        input?: PostContentV2CardsUploadInput,
        options: WbRequestOptions = {},
      ) => executePostContentV2CardsUpload(execute, input, options),
      postContentCardsUploadAdd: (
        input?: PostContentV2CardsUploadAddInput,
        options: WbRequestOptions = {},
      ) => executePostContentV2CardsUploadAdd(execute, input, options),
      postContentMediaFile: (
        input: PostContentV3MediaFileInput,
        options: WbRequestOptions = {},
      ) => executePostContentV3MediaFile(execute, input, options),
      postContentMediaSave: (
        input: PostContentV3MediaSaveInput,
        options: WbRequestOptions = {},
      ) => executePostContentV3MediaSave(execute, input, options),
      postRecommendationsList: (
        input?: PostV1RecommendationsListInput,
        options: WbRequestOptions = {},
      ) => executePostV1RecommendationsList(execute, input, options),
      postRecommendationsSet: (
        input: PostV1RecommendationsSetInput,
        options: WbRequestOptions = {},
      ) => executePostV1RecommendationsSet(execute, input, options),
      postApiUploadTask: (
        input: PostApiV2UploadTaskInput,
        options: WbRequestOptions = {},
      ) => executePostApiV2UploadTask(execute, input, options),
      postApiUploadTaskSize: (
        input: PostApiV2UploadTaskSizeInput,
        options: WbRequestOptions = {},
      ) => executePostApiV2UploadTaskSize(execute, input, options),
      postApiUploadTaskClubDiscount: (
        input: PostApiV2UploadTaskClubDiscountInput,
        options: WbRequestOptions = {},
      ) => executePostApiV2UploadTaskClubDiscount(execute, input, options),
      postUploadTaskB2bWholesale: (
        input: PostV1UploadTaskB2bWholesaleInput,
        options: WbRequestOptions = {},
      ) => executePostV1UploadTaskB2bWholesale(execute, input, options),
      getApiHistoryTasks: (
        input: GetApiV2HistoryTasksInput,
        options: WbRequestOptions = {},
      ) => executeGetApiV2HistoryTasks(execute, input, options),
      getApiHistoryGoodsTask: (
        input: GetApiV2HistoryGoodsTaskInput,
        options: WbRequestOptions = {},
      ) => executeGetApiV2HistoryGoodsTask(execute, input, options),
      getApiBufferTasks: (
        input: GetApiV2BufferTasksInput,
        options: WbRequestOptions = {},
      ) => executeGetApiV2BufferTasks(execute, input, options),
      getApiBufferGoodsTask: (
        input: GetApiV2BufferGoodsTaskInput,
        options: WbRequestOptions = {},
      ) => executeGetApiV2BufferGoodsTask(execute, input, options),
      getApiListGoodsFilter: (
        input: GetApiV2ListGoodsFilterInput,
        options: WbRequestOptions = {},
      ) => executeGetApiV2ListGoodsFilter(execute, input, options),
      postApiListGoodsFilter: (
        input: PostApiV2ListGoodsFilterInput,
        options: WbRequestOptions = {},
      ) => executePostApiV2ListGoodsFilter(execute, input, options),
      getApiListGoodsSizeNm: (
        input: GetApiV2ListGoodsSizeNmInput,
        options: WbRequestOptions = {},
      ) => executeGetApiV2ListGoodsSizeNm(execute, input, options),
      getApiQuarantineGoods: (
        input: GetApiV2QuarantineGoodsInput,
        options: WbRequestOptions = {},
      ) => executeGetApiV2QuarantineGoods(execute, input, options),
      putApiStocksWarehouseId: (
        input: PutApiV3StocksWarehouseIdInput,
        options: WbRequestOptions = {},
      ) => executePutApiV3StocksWarehouseId(execute, input, options),
      deleteApiStocksWarehouseId: (
        input: DeleteApiV3StocksWarehouseIdInput,
        options: WbRequestOptions = {},
      ) => executeDeleteApiV3StocksWarehouseId(execute, input, options),
      postApiStocksWarehouseId: (
        input: PostApiV3StocksWarehouseIdInput,
        options: WbRequestOptions = {},
      ) => executePostApiV3StocksWarehouseId(execute, input, options),
      getApiOffices: (options: WbRequestOptions = {}) =>
        executeGetApiV3Offices(execute, options),
      getApiWarehouses: (options: WbRequestOptions = {}) =>
        executeGetApiV3Warehouses(execute, options),
      postApiWarehouses: (
        input: PostApiV3WarehousesInput,
        options: WbRequestOptions = {},
      ) => executePostApiV3Warehouses(execute, input, options),
      putApiWarehousesWarehouseId: (
        input: PutApiV3WarehousesWarehouseIdInput,
        options: WbRequestOptions = {},
      ) => executePutApiV3WarehousesWarehouseId(execute, input, options),
      deleteApiWarehousesWarehouseId: (
        input: DeleteApiV3WarehousesWarehouseIdInput,
        options: WbRequestOptions = {},
      ) => executeDeleteApiV3WarehousesWarehouseId(execute, input, options),
      getApiDbwWarehousesWarehouseIdContacts: (
        input: GetApiV3DbwWarehousesWarehouseIdContactsInput,
        options: WbRequestOptions = {},
      ) =>
        executeGetApiV3DbwWarehousesWarehouseIdContacts(
          execute,
          input,
          options,
        ),
      putApiDbwWarehousesWarehouseIdContacts: (
        input: PutApiV3DbwWarehousesWarehouseIdContactsInput,
        options: WbRequestOptions = {},
      ) =>
        executePutApiV3DbwWarehousesWarehouseIdContacts(
          execute,
          input,
          options,
        ),
    }),
    ordersFbs: Object.freeze({
      getApiV3PassesOffices: (options: WbRequestOptions = {}) =>
        executeGetApiV3PassesOffices(execute, options),
      getApiV3Passes: (options: WbRequestOptions = {}) =>
        executeGetApiV3Passes(execute, options),
      postApiV3Passes: (
        input: PostApiV3PassesInput,
        options: WbRequestOptions = {},
      ) => executePostApiV3Passes(execute, input, options),
      putApiV3PassesPassId: (
        input: PutApiV3PassesPassIdInput,
        options: WbRequestOptions = {},
      ) => executePutApiV3PassesPassId(execute, input, options),
      deleteApiV3PassesPassId: (
        input: DeleteApiV3PassesPassIdInput,
        options: WbRequestOptions = {},
      ) => executeDeleteApiV3PassesPassId(execute, input, options),
      getApiV3OrdersNew: (options: WbRequestOptions = {}) =>
        executeGetApiV3OrdersNew(execute, options),
      getApiV3Orders: (
        input: GetApiV3OrdersInput,
        options: WbRequestOptions = {},
      ) => executeGetApiV3Orders(execute, input, options),
      postApiV3OrdersStatus: (
        input?: PostApiV3OrdersStatusInput,
        options: WbRequestOptions = {},
      ) => executePostApiV3OrdersStatus(execute, input, options),
      getApiV3SuppliesOrdersReshipment: (options: WbRequestOptions = {}) =>
        executeGetApiV3SuppliesOrdersReshipment(execute, options),
      patchApiV3OrdersOrderIdCancel: (
        input: PatchApiV3OrdersOrderIdCancelInput,
        options: WbRequestOptions = {},
      ) => executePatchApiV3OrdersOrderIdCancel(execute, input, options),
      postApiV3OrdersStickers: (
        input: PostApiV3OrdersStickersInput,
        options: WbRequestOptions = {},
      ) => executePostApiV3OrdersStickers(execute, input, options),
      postApiMarketplaceV3OrdersMeta: (
        input: PostApiMarketplaceV3OrdersMetaInput,
        options: WbRequestOptions = {},
      ) => executePostApiMarketplaceV3OrdersMeta(execute, input, options),
      deleteApiV3OrdersOrderIdMeta: (
        input: DeleteApiV3OrdersOrderIdMetaInput,
        options: WbRequestOptions = {},
      ) => executeDeleteApiV3OrdersOrderIdMeta(execute, input, options),
      putApiV3OrdersOrderIdMetaSgtin: (
        input: PutApiV3OrdersOrderIdMetaSgtinInput,
        options: WbRequestOptions = {},
      ) => executePutApiV3OrdersOrderIdMetaSgtin(execute, input, options),
      putApiV3OrdersOrderIdMetaUin: (
        input: PutApiV3OrdersOrderIdMetaUinInput,
        options: WbRequestOptions = {},
      ) => executePutApiV3OrdersOrderIdMetaUin(execute, input, options),
      putApiV3OrdersOrderIdMetaImei: (
        input: PutApiV3OrdersOrderIdMetaImeiInput,
        options: WbRequestOptions = {},
      ) => executePutApiV3OrdersOrderIdMetaImei(execute, input, options),
      putApiV3OrdersOrderIdMetaGtin: (
        input: PutApiV3OrdersOrderIdMetaGtinInput,
        options: WbRequestOptions = {},
      ) => executePutApiV3OrdersOrderIdMetaGtin(execute, input, options),
      putApiV3OrdersOrderIdMetaExpiration: (
        input: PutApiV3OrdersOrderIdMetaExpirationInput,
        options: WbRequestOptions = {},
      ) => executePutApiV3OrdersOrderIdMetaExpiration(execute, input, options),
      putApiMarketplaceV3OrdersOrderIdMetaCustomsDeclaration: (
        input: PutApiMarketplaceV3OrdersOrderIdMetaCustomsDeclarationInput,
        options: WbRequestOptions = {},
      ) =>
        executePutApiMarketplaceV3OrdersOrderIdMetaCustomsDeclaration(
          execute,
          input,
          options,
        ),
      postApiV3OrdersStickersCrossBorder: (
        input?: PostApiV3OrdersStickersCrossBorderInput,
        options: WbRequestOptions = {},
      ) => executePostApiV3OrdersStickersCrossBorder(execute, input, options),
      postApiV3OrdersStatusHistory: (
        input?: PostApiV3OrdersStatusHistoryInput,
        options: WbRequestOptions = {},
      ) => executePostApiV3OrdersStatusHistory(execute, input, options),
      postApiV3OrdersClient: (
        input: PostApiV3OrdersClientInput,
        options: WbRequestOptions = {},
      ) => executePostApiV3OrdersClient(execute, input, options),
      postApiV3Supplies: (
        input: PostApiV3SuppliesInput,
        options: WbRequestOptions = {},
      ) => executePostApiV3Supplies(execute, input, options),
      getApiV3Supplies: (
        input: GetApiV3SuppliesInput,
        options: WbRequestOptions = {},
      ) => executeGetApiV3Supplies(execute, input, options),
      patchApiMarketplaceV3SuppliesSupplyIdOrders: (
        input: PatchApiMarketplaceV3SuppliesSupplyIdOrdersInput,
        options: WbRequestOptions = {},
      ) =>
        executePatchApiMarketplaceV3SuppliesSupplyIdOrders(
          execute,
          input,
          options,
        ),
      getApiV3SuppliesSupplyId: (
        input: GetApiV3SuppliesSupplyIdInput,
        options: WbRequestOptions = {},
      ) => executeGetApiV3SuppliesSupplyId(execute, input, options),
      deleteApiV3SuppliesSupplyId: (
        input: DeleteApiV3SuppliesSupplyIdInput,
        options: WbRequestOptions = {},
      ) => executeDeleteApiV3SuppliesSupplyId(execute, input, options),
      getApiMarketplaceV3SuppliesSupplyIdOrderIds: (
        input: GetApiMarketplaceV3SuppliesSupplyIdOrderIdsInput,
        options: WbRequestOptions = {},
      ) =>
        executeGetApiMarketplaceV3SuppliesSupplyIdOrderIds(
          execute,
          input,
          options,
        ),
      patchApiV3SuppliesSupplyIdDeliver: (
        input: PatchApiV3SuppliesSupplyIdDeliverInput,
        options: WbRequestOptions = {},
      ) => executePatchApiV3SuppliesSupplyIdDeliver(execute, input, options),
      getApiV3SuppliesSupplyIdBarcode: (
        input: GetApiV3SuppliesSupplyIdBarcodeInput,
        options: WbRequestOptions = {},
      ) => executeGetApiV3SuppliesSupplyIdBarcode(execute, input, options),
      getApiV3SuppliesSupplyIdTrbx: (
        input: GetApiV3SuppliesSupplyIdTrbxInput,
        options: WbRequestOptions = {},
      ) => executeGetApiV3SuppliesSupplyIdTrbx(execute, input, options),
      postApiV3SuppliesSupplyIdTrbx: (
        input: PostApiV3SuppliesSupplyIdTrbxInput,
        options: WbRequestOptions = {},
      ) => executePostApiV3SuppliesSupplyIdTrbx(execute, input, options),
      deleteApiV3SuppliesSupplyIdTrbx: (
        input: DeleteApiV3SuppliesSupplyIdTrbxInput,
        options: WbRequestOptions = {},
      ) => executeDeleteApiV3SuppliesSupplyIdTrbx(execute, input, options),
      postApiV3SuppliesSupplyIdTrbxStickers: (
        input: PostApiV3SuppliesSupplyIdTrbxStickersInput,
        options: WbRequestOptions = {},
      ) =>
        executePostApiV3SuppliesSupplyIdTrbxStickers(execute, input, options),
      getApiMarketplaceV3FbsOrdersArchive: (
        input: GetApiMarketplaceV3FbsOrdersArchiveInput,
        options: WbRequestOptions = {},
      ) => executeGetApiMarketplaceV3FbsOrdersArchive(execute, input, options),
      getMarketplaceV3FbsSettingsAutoreturns: (
        options: WbRequestOptions = {},
      ) => executeGetMarketplaceV3FbsSettingsAutoreturns(execute, options),
      patchMarketplaceV3FbsSettingsAutoreturns: (
        input?: PatchMarketplaceV3FbsSettingsAutoreturnsInput,
        options: WbRequestOptions = {},
      ) =>
        executePatchMarketplaceV3FbsSettingsAutoreturns(
          execute,
          input,
          options,
        ),
      postMarketplaceV3FbsSettingsAutoreturnsItems: (
        input?: PostMarketplaceV3FbsSettingsAutoreturnsItemsInput,
        options: WbRequestOptions = {},
      ) =>
        executePostMarketplaceV3FbsSettingsAutoreturnsItems(
          execute,
          input,
          options,
        ),
      patchMarketplaceV3FbsSettingsAutoreturnsItems: (
        input?: PatchMarketplaceV3FbsSettingsAutoreturnsItemsInput,
        options: WbRequestOptions = {},
      ) =>
        executePatchMarketplaceV3FbsSettingsAutoreturnsItems(
          execute,
          input,
          options,
        ),
      getMarketplaceV3FbsSettingsAutoreturnsSubcategoriesRestricted: (
        input: GetMarketplaceV3FbsSettingsAutoreturnsSubcategoriesRestrictedInput,
        options: WbRequestOptions = {},
      ) =>
        executeGetMarketplaceV3FbsSettingsAutoreturnsSubcategoriesRestricted(
          execute,
          input,
          options,
        ),
      getApiPassesOffices: (options: WbRequestOptions = {}) =>
        executeGetApiV3PassesOffices(execute, options),
      getApiPasses: (options: WbRequestOptions = {}) =>
        executeGetApiV3Passes(execute, options),
      postApiPasses: (
        input: PostApiV3PassesInput,
        options: WbRequestOptions = {},
      ) => executePostApiV3Passes(execute, input, options),
      putApiPassesPassId: (
        input: PutApiV3PassesPassIdInput,
        options: WbRequestOptions = {},
      ) => executePutApiV3PassesPassId(execute, input, options),
      deleteApiPassesPassId: (
        input: DeleteApiV3PassesPassIdInput,
        options: WbRequestOptions = {},
      ) => executeDeleteApiV3PassesPassId(execute, input, options),
      getApiOrdersNew: (options: WbRequestOptions = {}) =>
        executeGetApiV3OrdersNew(execute, options),
      getApiOrders: (
        input: GetApiV3OrdersInput,
        options: WbRequestOptions = {},
      ) => executeGetApiV3Orders(execute, input, options),
      postApiOrdersStatus: (
        input?: PostApiV3OrdersStatusInput,
        options: WbRequestOptions = {},
      ) => executePostApiV3OrdersStatus(execute, input, options),
      getApiSuppliesOrdersReshipment: (options: WbRequestOptions = {}) =>
        executeGetApiV3SuppliesOrdersReshipment(execute, options),
      patchApiOrdersOrderIdCancel: (
        input: PatchApiV3OrdersOrderIdCancelInput,
        options: WbRequestOptions = {},
      ) => executePatchApiV3OrdersOrderIdCancel(execute, input, options),
      postApiOrdersStickers: (
        input: PostApiV3OrdersStickersInput,
        options: WbRequestOptions = {},
      ) => executePostApiV3OrdersStickers(execute, input, options),
      postApiMarketplaceOrdersMeta: (
        input: PostApiMarketplaceV3OrdersMetaInput,
        options: WbRequestOptions = {},
      ) => executePostApiMarketplaceV3OrdersMeta(execute, input, options),
      deleteApiOrdersOrderIdMeta: (
        input: DeleteApiV3OrdersOrderIdMetaInput,
        options: WbRequestOptions = {},
      ) => executeDeleteApiV3OrdersOrderIdMeta(execute, input, options),
      putApiOrdersOrderIdMetaSgtin: (
        input: PutApiV3OrdersOrderIdMetaSgtinInput,
        options: WbRequestOptions = {},
      ) => executePutApiV3OrdersOrderIdMetaSgtin(execute, input, options),
      putApiOrdersOrderIdMetaUin: (
        input: PutApiV3OrdersOrderIdMetaUinInput,
        options: WbRequestOptions = {},
      ) => executePutApiV3OrdersOrderIdMetaUin(execute, input, options),
      putApiOrdersOrderIdMetaImei: (
        input: PutApiV3OrdersOrderIdMetaImeiInput,
        options: WbRequestOptions = {},
      ) => executePutApiV3OrdersOrderIdMetaImei(execute, input, options),
      putApiOrdersOrderIdMetaGtin: (
        input: PutApiV3OrdersOrderIdMetaGtinInput,
        options: WbRequestOptions = {},
      ) => executePutApiV3OrdersOrderIdMetaGtin(execute, input, options),
      putApiOrdersOrderIdMetaExpiration: (
        input: PutApiV3OrdersOrderIdMetaExpirationInput,
        options: WbRequestOptions = {},
      ) => executePutApiV3OrdersOrderIdMetaExpiration(execute, input, options),
      putApiMarketplaceOrdersOrderIdMetaCustomsDeclaration: (
        input: PutApiMarketplaceV3OrdersOrderIdMetaCustomsDeclarationInput,
        options: WbRequestOptions = {},
      ) =>
        executePutApiMarketplaceV3OrdersOrderIdMetaCustomsDeclaration(
          execute,
          input,
          options,
        ),
      postApiOrdersStickersCrossBorder: (
        input?: PostApiV3OrdersStickersCrossBorderInput,
        options: WbRequestOptions = {},
      ) => executePostApiV3OrdersStickersCrossBorder(execute, input, options),
      postApiOrdersStatusHistory: (
        input?: PostApiV3OrdersStatusHistoryInput,
        options: WbRequestOptions = {},
      ) => executePostApiV3OrdersStatusHistory(execute, input, options),
      postApiOrdersClient: (
        input: PostApiV3OrdersClientInput,
        options: WbRequestOptions = {},
      ) => executePostApiV3OrdersClient(execute, input, options),
      postApiSupplies: (
        input: PostApiV3SuppliesInput,
        options: WbRequestOptions = {},
      ) => executePostApiV3Supplies(execute, input, options),
      getApiSupplies: (
        input: GetApiV3SuppliesInput,
        options: WbRequestOptions = {},
      ) => executeGetApiV3Supplies(execute, input, options),
      patchApiMarketplaceSuppliesSupplyIdOrders: (
        input: PatchApiMarketplaceV3SuppliesSupplyIdOrdersInput,
        options: WbRequestOptions = {},
      ) =>
        executePatchApiMarketplaceV3SuppliesSupplyIdOrders(
          execute,
          input,
          options,
        ),
      getApiSuppliesSupplyId: (
        input: GetApiV3SuppliesSupplyIdInput,
        options: WbRequestOptions = {},
      ) => executeGetApiV3SuppliesSupplyId(execute, input, options),
      deleteApiSuppliesSupplyId: (
        input: DeleteApiV3SuppliesSupplyIdInput,
        options: WbRequestOptions = {},
      ) => executeDeleteApiV3SuppliesSupplyId(execute, input, options),
      getApiMarketplaceSuppliesSupplyIdOrderIds: (
        input: GetApiMarketplaceV3SuppliesSupplyIdOrderIdsInput,
        options: WbRequestOptions = {},
      ) =>
        executeGetApiMarketplaceV3SuppliesSupplyIdOrderIds(
          execute,
          input,
          options,
        ),
      patchApiSuppliesSupplyIdDeliver: (
        input: PatchApiV3SuppliesSupplyIdDeliverInput,
        options: WbRequestOptions = {},
      ) => executePatchApiV3SuppliesSupplyIdDeliver(execute, input, options),
      getApiSuppliesSupplyIdBarcode: (
        input: GetApiV3SuppliesSupplyIdBarcodeInput,
        options: WbRequestOptions = {},
      ) => executeGetApiV3SuppliesSupplyIdBarcode(execute, input, options),
      getApiSuppliesSupplyIdTrbx: (
        input: GetApiV3SuppliesSupplyIdTrbxInput,
        options: WbRequestOptions = {},
      ) => executeGetApiV3SuppliesSupplyIdTrbx(execute, input, options),
      postApiSuppliesSupplyIdTrbx: (
        input: PostApiV3SuppliesSupplyIdTrbxInput,
        options: WbRequestOptions = {},
      ) => executePostApiV3SuppliesSupplyIdTrbx(execute, input, options),
      deleteApiSuppliesSupplyIdTrbx: (
        input: DeleteApiV3SuppliesSupplyIdTrbxInput,
        options: WbRequestOptions = {},
      ) => executeDeleteApiV3SuppliesSupplyIdTrbx(execute, input, options),
      postApiSuppliesSupplyIdTrbxStickers: (
        input: PostApiV3SuppliesSupplyIdTrbxStickersInput,
        options: WbRequestOptions = {},
      ) =>
        executePostApiV3SuppliesSupplyIdTrbxStickers(execute, input, options),
      getApiMarketplaceFbsOrdersArchive: (
        input: GetApiMarketplaceV3FbsOrdersArchiveInput,
        options: WbRequestOptions = {},
      ) => executeGetApiMarketplaceV3FbsOrdersArchive(execute, input, options),
      getMarketplaceFbsSettingsAutoreturns: (options: WbRequestOptions = {}) =>
        executeGetMarketplaceV3FbsSettingsAutoreturns(execute, options),
      patchMarketplaceFbsSettingsAutoreturns: (
        input?: PatchMarketplaceV3FbsSettingsAutoreturnsInput,
        options: WbRequestOptions = {},
      ) =>
        executePatchMarketplaceV3FbsSettingsAutoreturns(
          execute,
          input,
          options,
        ),
      postMarketplaceFbsSettingsAutoreturnsItems: (
        input?: PostMarketplaceV3FbsSettingsAutoreturnsItemsInput,
        options: WbRequestOptions = {},
      ) =>
        executePostMarketplaceV3FbsSettingsAutoreturnsItems(
          execute,
          input,
          options,
        ),
      patchMarketplaceFbsSettingsAutoreturnsItems: (
        input?: PatchMarketplaceV3FbsSettingsAutoreturnsItemsInput,
        options: WbRequestOptions = {},
      ) =>
        executePatchMarketplaceV3FbsSettingsAutoreturnsItems(
          execute,
          input,
          options,
        ),
      getMarketplaceFbsSettingsAutoreturnsSubcategoriesRestricted: (
        input: GetMarketplaceV3FbsSettingsAutoreturnsSubcategoriesRestrictedInput,
        options: WbRequestOptions = {},
      ) =>
        executeGetMarketplaceV3FbsSettingsAutoreturnsSubcategoriesRestricted(
          execute,
          input,
          options,
        ),
    }),
    ordersDbw: Object.freeze({
      getV3DbwOrdersNew: (options: WbRequestOptions = {}) =>
        executeGetV3DbwOrdersNew(execute, options),
      getV3DbwOrders: (
        input: GetV3DbwOrdersInput,
        options: WbRequestOptions = {},
      ) => executeGetV3DbwOrders(execute, input, options),
      postV3DbwOrdersDeliveryDate: (
        input: PostV3DbwOrdersDeliveryDateInput,
        options: WbRequestOptions = {},
      ) => executePostV3DbwOrdersDeliveryDate(execute, input, options),
      postV3DbwOrdersClient: (
        input: PostV3DbwOrdersClientInput,
        options: WbRequestOptions = {},
      ) => executePostV3DbwOrdersClient(execute, input, options),
      postV3DbwOrdersStatus: (
        input?: PostV3DbwOrdersStatusInput,
        options: WbRequestOptions = {},
      ) => executePostV3DbwOrdersStatus(execute, input, options),
      patchV3DbwOrdersOrderIdConfirm: (
        input: PatchV3DbwOrdersOrderIdConfirmInput,
        options: WbRequestOptions = {},
      ) => executePatchV3DbwOrdersOrderIdConfirm(execute, input, options),
      postV3DbwOrdersStickers: (
        input: PostV3DbwOrdersStickersInput,
        options: WbRequestOptions = {},
      ) => executePostV3DbwOrdersStickers(execute, input, options),
      postV3DbwOrdersStatusDeliver: (
        input: PostV3DbwOrdersStatusDeliverInput,
        options: WbRequestOptions = {},
      ) => executePostV3DbwOrdersStatusDeliver(execute, input, options),
      postV3DbwOrdersCourier: (
        input: PostV3DbwOrdersCourierInput,
        options: WbRequestOptions = {},
      ) => executePostV3DbwOrdersCourier(execute, input, options),
      patchV3DbwOrdersOrderIdCancel: (
        input: PatchV3DbwOrdersOrderIdCancelInput,
        options: WbRequestOptions = {},
      ) => executePatchV3DbwOrdersOrderIdCancel(execute, input, options),
      postV3DbwOrdersMetaDetails: (
        input: PostV3DbwOrdersMetaDetailsInput,
        options: WbRequestOptions = {},
      ) => executePostV3DbwOrdersMetaDetails(execute, input, options),
      postV3DbwOrdersMetaDelete: (
        input: PostV3DbwOrdersMetaDeleteInput,
        options: WbRequestOptions = {},
      ) => executePostV3DbwOrdersMetaDelete(execute, input, options),
      postV3DbwOrdersMetaSgtin: (
        input: PostV3DbwOrdersMetaSgtinInput,
        options: WbRequestOptions = {},
      ) => executePostV3DbwOrdersMetaSgtin(execute, input, options),
      putV3DbwOrdersOrderIdMetaUin: (
        input: PutV3DbwOrdersOrderIdMetaUinInput,
        options: WbRequestOptions = {},
      ) => executePutV3DbwOrdersOrderIdMetaUin(execute, input, options),
      putV3DbwOrdersOrderIdMetaImei: (
        input: PutV3DbwOrdersOrderIdMetaImeiInput,
        options: WbRequestOptions = {},
      ) => executePutV3DbwOrdersOrderIdMetaImei(execute, input, options),
      putV3DbwOrdersOrderIdMetaGtin: (
        input: PutV3DbwOrdersOrderIdMetaGtinInput,
        options: WbRequestOptions = {},
      ) => executePutV3DbwOrdersOrderIdMetaGtin(execute, input, options),
      getDbwOrdersNew: (options: WbRequestOptions = {}) =>
        executeGetV3DbwOrdersNew(execute, options),
      getDbwOrders: (
        input: GetV3DbwOrdersInput,
        options: WbRequestOptions = {},
      ) => executeGetV3DbwOrders(execute, input, options),
      postDbwOrdersDeliveryDate: (
        input: PostV3DbwOrdersDeliveryDateInput,
        options: WbRequestOptions = {},
      ) => executePostV3DbwOrdersDeliveryDate(execute, input, options),
      postDbwOrdersClient: (
        input: PostV3DbwOrdersClientInput,
        options: WbRequestOptions = {},
      ) => executePostV3DbwOrdersClient(execute, input, options),
      postDbwOrdersStatus: (
        input?: PostV3DbwOrdersStatusInput,
        options: WbRequestOptions = {},
      ) => executePostV3DbwOrdersStatus(execute, input, options),
      patchDbwOrdersOrderIdConfirm: (
        input: PatchV3DbwOrdersOrderIdConfirmInput,
        options: WbRequestOptions = {},
      ) => executePatchV3DbwOrdersOrderIdConfirm(execute, input, options),
      postDbwOrdersStickers: (
        input: PostV3DbwOrdersStickersInput,
        options: WbRequestOptions = {},
      ) => executePostV3DbwOrdersStickers(execute, input, options),
      postDbwOrdersStatusDeliver: (
        input: PostV3DbwOrdersStatusDeliverInput,
        options: WbRequestOptions = {},
      ) => executePostV3DbwOrdersStatusDeliver(execute, input, options),
      postDbwOrdersCourier: (
        input: PostV3DbwOrdersCourierInput,
        options: WbRequestOptions = {},
      ) => executePostV3DbwOrdersCourier(execute, input, options),
      patchDbwOrdersOrderIdCancel: (
        input: PatchV3DbwOrdersOrderIdCancelInput,
        options: WbRequestOptions = {},
      ) => executePatchV3DbwOrdersOrderIdCancel(execute, input, options),
      postDbwOrdersMetaDetails: (
        input: PostV3DbwOrdersMetaDetailsInput,
        options: WbRequestOptions = {},
      ) => executePostV3DbwOrdersMetaDetails(execute, input, options),
      postDbwOrdersMetaDelete: (
        input: PostV3DbwOrdersMetaDeleteInput,
        options: WbRequestOptions = {},
      ) => executePostV3DbwOrdersMetaDelete(execute, input, options),
      postDbwOrdersMetaSgtin: (
        input: PostV3DbwOrdersMetaSgtinInput,
        options: WbRequestOptions = {},
      ) => executePostV3DbwOrdersMetaSgtin(execute, input, options),
      putDbwOrdersOrderIdMetaUin: (
        input: PutV3DbwOrdersOrderIdMetaUinInput,
        options: WbRequestOptions = {},
      ) => executePutV3DbwOrdersOrderIdMetaUin(execute, input, options),
      putDbwOrdersOrderIdMetaImei: (
        input: PutV3DbwOrdersOrderIdMetaImeiInput,
        options: WbRequestOptions = {},
      ) => executePutV3DbwOrdersOrderIdMetaImei(execute, input, options),
      putDbwOrdersOrderIdMetaGtin: (
        input: PutV3DbwOrdersOrderIdMetaGtinInput,
        options: WbRequestOptions = {},
      ) => executePutV3DbwOrdersOrderIdMetaGtin(execute, input, options),
    }),
    dbs: Object.freeze({
      getV3DbsOrdersNew: (options: WbRequestOptions = {}) =>
        executeGetV3DbsOrdersNew(execute, options),
      getV3DbsOrders: (
        input: GetV3DbsOrdersInput,
        options: WbRequestOptions = {},
      ) => executeGetV3DbsOrders(execute, input, options),
      postV3DbsOrdersFinalPrice: (
        input?: PostV3DbsOrdersFinalPriceInput,
        options: WbRequestOptions = {},
      ) => executePostV3DbsOrdersFinalPrice(execute, input, options),
      postV3DbsGroupsInfo: (
        input: PostV3DbsGroupsInfoInput,
        options: WbRequestOptions = {},
      ) => executePostV3DbsGroupsInfo(execute, input, options),
      postV3DbsOrdersClient: (
        input: PostV3DbsOrdersClientInput,
        options: WbRequestOptions = {},
      ) => executePostV3DbsOrdersClient(execute, input, options),
      postV3DbsOrdersB2bInfo: (
        input: PostV3DbsOrdersB2bInfoInput,
        options: WbRequestOptions = {},
      ) => executePostV3DbsOrdersB2bInfo(execute, input, options),
      postV3DbsOrdersDeliveryDate: (
        input: PostV3DbsOrdersDeliveryDateInput,
        options: WbRequestOptions = {},
      ) => executePostV3DbsOrdersDeliveryDate(execute, input, options),
      postV3DbsOrdersStatusInfo: (
        input: PostV3DbsOrdersStatusInfoInput,
        options: WbRequestOptions = {},
      ) => executePostV3DbsOrdersStatusInfo(execute, input, options),
      postV3DbsOrdersStatusCancel: (
        input: PostV3DbsOrdersStatusCancelInput,
        options: WbRequestOptions = {},
      ) => executePostV3DbsOrdersStatusCancel(execute, input, options),
      postV3DbsOrdersStatusConfirm: (
        input: PostV3DbsOrdersStatusConfirmInput,
        options: WbRequestOptions = {},
      ) => executePostV3DbsOrdersStatusConfirm(execute, input, options),
      postV3DbsOrdersStickers: (
        input: PostV3DbsOrdersStickersInput,
        options: WbRequestOptions = {},
      ) => executePostV3DbsOrdersStickers(execute, input, options),
      postV3DbsOrdersStatusDeliver: (
        input: PostV3DbsOrdersStatusDeliverInput,
        options: WbRequestOptions = {},
      ) => executePostV3DbsOrdersStatusDeliver(execute, input, options),
      postV3DbsOrdersStatusReceive: (
        input?: PostV3DbsOrdersStatusReceiveInput,
        options: WbRequestOptions = {},
      ) => executePostV3DbsOrdersStatusReceive(execute, input, options),
      postV3DbsOrdersStatusReject: (
        input?: PostV3DbsOrdersStatusRejectInput,
        options: WbRequestOptions = {},
      ) => executePostV3DbsOrdersStatusReject(execute, input, options),
      postV3DbsOrdersMetaDetails: (
        input: PostV3DbsOrdersMetaDetailsInput,
        options: WbRequestOptions = {},
      ) => executePostV3DbsOrdersMetaDetails(execute, input, options),
      postV3DbsOrdersMetaDelete: (
        input: PostV3DbsOrdersMetaDeleteInput,
        options: WbRequestOptions = {},
      ) => executePostV3DbsOrdersMetaDelete(execute, input, options),
      postV3DbsOrdersMetaSgtin: (
        input: PostV3DbsOrdersMetaSgtinInput,
        options: WbRequestOptions = {},
      ) => executePostV3DbsOrdersMetaSgtin(execute, input, options),
      postV3DbsOrdersMetaUin: (
        input: PostV3DbsOrdersMetaUinInput,
        options: WbRequestOptions = {},
      ) => executePostV3DbsOrdersMetaUin(execute, input, options),
      postV3DbsOrdersMetaImei: (
        input: PostV3DbsOrdersMetaImeiInput,
        options: WbRequestOptions = {},
      ) => executePostV3DbsOrdersMetaImei(execute, input, options),
      postV3DbsOrdersMetaGtin: (
        input: PostV3DbsOrdersMetaGtinInput,
        options: WbRequestOptions = {},
      ) => executePostV3DbsOrdersMetaGtin(execute, input, options),
      postV3DbsOrdersMetaCustomsDeclaration: (
        input: PostV3DbsOrdersMetaCustomsDeclarationInput,
        options: WbRequestOptions = {},
      ) =>
        executePostV3DbsOrdersMetaCustomsDeclaration(execute, input, options),
      getDbsOrdersNew: (options: WbRequestOptions = {}) =>
        executeGetV3DbsOrdersNew(execute, options),
      getDbsOrders: (
        input: GetV3DbsOrdersInput,
        options: WbRequestOptions = {},
      ) => executeGetV3DbsOrders(execute, input, options),
      postDbsOrdersFinalPrice: (
        input?: PostV3DbsOrdersFinalPriceInput,
        options: WbRequestOptions = {},
      ) => executePostV3DbsOrdersFinalPrice(execute, input, options),
      postDbsGroupsInfo: (
        input: PostV3DbsGroupsInfoInput,
        options: WbRequestOptions = {},
      ) => executePostV3DbsGroupsInfo(execute, input, options),
      postDbsOrdersClient: (
        input: PostV3DbsOrdersClientInput,
        options: WbRequestOptions = {},
      ) => executePostV3DbsOrdersClient(execute, input, options),
      postDbsOrdersB2bInfo: (
        input: PostV3DbsOrdersB2bInfoInput,
        options: WbRequestOptions = {},
      ) => executePostV3DbsOrdersB2bInfo(execute, input, options),
      postDbsOrdersDeliveryDate: (
        input: PostV3DbsOrdersDeliveryDateInput,
        options: WbRequestOptions = {},
      ) => executePostV3DbsOrdersDeliveryDate(execute, input, options),
      postDbsOrdersStatusInfo: (
        input: PostV3DbsOrdersStatusInfoInput,
        options: WbRequestOptions = {},
      ) => executePostV3DbsOrdersStatusInfo(execute, input, options),
      postDbsOrdersStatusCancel: (
        input: PostV3DbsOrdersStatusCancelInput,
        options: WbRequestOptions = {},
      ) => executePostV3DbsOrdersStatusCancel(execute, input, options),
      postDbsOrdersStatusConfirm: (
        input: PostV3DbsOrdersStatusConfirmInput,
        options: WbRequestOptions = {},
      ) => executePostV3DbsOrdersStatusConfirm(execute, input, options),
      postDbsOrdersStickers: (
        input: PostV3DbsOrdersStickersInput,
        options: WbRequestOptions = {},
      ) => executePostV3DbsOrdersStickers(execute, input, options),
      postDbsOrdersStatusDeliver: (
        input: PostV3DbsOrdersStatusDeliverInput,
        options: WbRequestOptions = {},
      ) => executePostV3DbsOrdersStatusDeliver(execute, input, options),
      postDbsOrdersStatusReceive: (
        input?: PostV3DbsOrdersStatusReceiveInput,
        options: WbRequestOptions = {},
      ) => executePostV3DbsOrdersStatusReceive(execute, input, options),
      postDbsOrdersStatusReject: (
        input?: PostV3DbsOrdersStatusRejectInput,
        options: WbRequestOptions = {},
      ) => executePostV3DbsOrdersStatusReject(execute, input, options),
      postDbsOrdersMetaDetails: (
        input: PostV3DbsOrdersMetaDetailsInput,
        options: WbRequestOptions = {},
      ) => executePostV3DbsOrdersMetaDetails(execute, input, options),
      postDbsOrdersMetaDelete: (
        input: PostV3DbsOrdersMetaDeleteInput,
        options: WbRequestOptions = {},
      ) => executePostV3DbsOrdersMetaDelete(execute, input, options),
      postDbsOrdersMetaSgtin: (
        input: PostV3DbsOrdersMetaSgtinInput,
        options: WbRequestOptions = {},
      ) => executePostV3DbsOrdersMetaSgtin(execute, input, options),
      postDbsOrdersMetaUin: (
        input: PostV3DbsOrdersMetaUinInput,
        options: WbRequestOptions = {},
      ) => executePostV3DbsOrdersMetaUin(execute, input, options),
      postDbsOrdersMetaImei: (
        input: PostV3DbsOrdersMetaImeiInput,
        options: WbRequestOptions = {},
      ) => executePostV3DbsOrdersMetaImei(execute, input, options),
      postDbsOrdersMetaGtin: (
        input: PostV3DbsOrdersMetaGtinInput,
        options: WbRequestOptions = {},
      ) => executePostV3DbsOrdersMetaGtin(execute, input, options),
      postDbsOrdersMetaCustomsDeclaration: (
        input: PostV3DbsOrdersMetaCustomsDeclarationInput,
        options: WbRequestOptions = {},
      ) =>
        executePostV3DbsOrdersMetaCustomsDeclaration(execute, input, options),
    }),
    inStorePickup: Object.freeze({
      getV3ClickCollectOrdersNew: (options: WbRequestOptions = {}) =>
        executeGetV3ClickCollectOrdersNew(execute, options),
      getV3ClickCollectOrders: (
        input: GetV3ClickCollectOrdersInput,
        options: WbRequestOptions = {},
      ) => executeGetV3ClickCollectOrders(execute, input, options),
      postV3ClickCollectOrdersFinalPrice: (
        input?: PostV3ClickCollectOrdersFinalPriceInput,
        options: WbRequestOptions = {},
      ) => executePostV3ClickCollectOrdersFinalPrice(execute, input, options),
      postV3ClickCollectOrdersStatusConfirm: (
        input?: PostV3ClickCollectOrdersStatusConfirmInput,
        options: WbRequestOptions = {},
      ) =>
        executePostV3ClickCollectOrdersStatusConfirm(execute, input, options),
      postV3ClickCollectOrdersStatusPrepare: (
        input?: PostV3ClickCollectOrdersStatusPrepareInput,
        options: WbRequestOptions = {},
      ) =>
        executePostV3ClickCollectOrdersStatusPrepare(execute, input, options),
      postV3ClickCollectOrdersClient: (
        input: PostV3ClickCollectOrdersClientInput,
        options: WbRequestOptions = {},
      ) => executePostV3ClickCollectOrdersClient(execute, input, options),
      postV3ClickCollectOrdersClientIdentity: (
        input: PostV3ClickCollectOrdersClientIdentityInput,
        options: WbRequestOptions = {},
      ) =>
        executePostV3ClickCollectOrdersClientIdentity(execute, input, options),
      postV3ClickCollectOrdersStatusReceive: (
        input?: PostV3ClickCollectOrdersStatusReceiveInput,
        options: WbRequestOptions = {},
      ) =>
        executePostV3ClickCollectOrdersStatusReceive(execute, input, options),
      postV3ClickCollectOrdersStatusReject: (
        input?: PostV3ClickCollectOrdersStatusRejectInput,
        options: WbRequestOptions = {},
      ) => executePostV3ClickCollectOrdersStatusReject(execute, input, options),
      postV3ClickCollectOrdersStatusInfo: (
        input: PostV3ClickCollectOrdersStatusInfoInput,
        options: WbRequestOptions = {},
      ) => executePostV3ClickCollectOrdersStatusInfo(execute, input, options),
      postV3ClickCollectOrdersStatusCancel: (
        input?: PostV3ClickCollectOrdersStatusCancelInput,
        options: WbRequestOptions = {},
      ) => executePostV3ClickCollectOrdersStatusCancel(execute, input, options),
      postV3ClickCollectOrdersMetaDetails: (
        input: PostV3ClickCollectOrdersMetaDetailsInput,
        options: WbRequestOptions = {},
      ) => executePostV3ClickCollectOrdersMetaDetails(execute, input, options),
      postV3ClickCollectOrdersMetaDelete: (
        input: PostV3ClickCollectOrdersMetaDeleteInput,
        options: WbRequestOptions = {},
      ) => executePostV3ClickCollectOrdersMetaDelete(execute, input, options),
      postV3ClickCollectOrdersMetaSgtin: (
        input: PostV3ClickCollectOrdersMetaSgtinInput,
        options: WbRequestOptions = {},
      ) => executePostV3ClickCollectOrdersMetaSgtin(execute, input, options),
      postV3ClickCollectOrdersMetaUin: (
        input: PostV3ClickCollectOrdersMetaUinInput,
        options: WbRequestOptions = {},
      ) => executePostV3ClickCollectOrdersMetaUin(execute, input, options),
      postV3ClickCollectOrdersMetaImei: (
        input: PostV3ClickCollectOrdersMetaImeiInput,
        options: WbRequestOptions = {},
      ) => executePostV3ClickCollectOrdersMetaImei(execute, input, options),
      postV3ClickCollectOrdersMetaGtin: (
        input: PostV3ClickCollectOrdersMetaGtinInput,
        options: WbRequestOptions = {},
      ) => executePostV3ClickCollectOrdersMetaGtin(execute, input, options),
      postV3ClickCollectOrdersMetaCustomsDeclaration: (
        input: PostV3ClickCollectOrdersMetaCustomsDeclarationInput,
        options: WbRequestOptions = {},
      ) =>
        executePostV3ClickCollectOrdersMetaCustomsDeclaration(
          execute,
          input,
          options,
        ),
      getClickCollectOrdersNew: (options: WbRequestOptions = {}) =>
        executeGetV3ClickCollectOrdersNew(execute, options),
      getClickCollectOrders: (
        input: GetV3ClickCollectOrdersInput,
        options: WbRequestOptions = {},
      ) => executeGetV3ClickCollectOrders(execute, input, options),
      postClickCollectOrdersFinalPrice: (
        input?: PostV3ClickCollectOrdersFinalPriceInput,
        options: WbRequestOptions = {},
      ) => executePostV3ClickCollectOrdersFinalPrice(execute, input, options),
      postClickCollectOrdersStatusConfirm: (
        input?: PostV3ClickCollectOrdersStatusConfirmInput,
        options: WbRequestOptions = {},
      ) =>
        executePostV3ClickCollectOrdersStatusConfirm(execute, input, options),
      postClickCollectOrdersStatusPrepare: (
        input?: PostV3ClickCollectOrdersStatusPrepareInput,
        options: WbRequestOptions = {},
      ) =>
        executePostV3ClickCollectOrdersStatusPrepare(execute, input, options),
      postClickCollectOrdersClient: (
        input: PostV3ClickCollectOrdersClientInput,
        options: WbRequestOptions = {},
      ) => executePostV3ClickCollectOrdersClient(execute, input, options),
      postClickCollectOrdersClientIdentity: (
        input: PostV3ClickCollectOrdersClientIdentityInput,
        options: WbRequestOptions = {},
      ) =>
        executePostV3ClickCollectOrdersClientIdentity(execute, input, options),
      postClickCollectOrdersStatusReceive: (
        input?: PostV3ClickCollectOrdersStatusReceiveInput,
        options: WbRequestOptions = {},
      ) =>
        executePostV3ClickCollectOrdersStatusReceive(execute, input, options),
      postClickCollectOrdersStatusReject: (
        input?: PostV3ClickCollectOrdersStatusRejectInput,
        options: WbRequestOptions = {},
      ) => executePostV3ClickCollectOrdersStatusReject(execute, input, options),
      postClickCollectOrdersStatusInfo: (
        input: PostV3ClickCollectOrdersStatusInfoInput,
        options: WbRequestOptions = {},
      ) => executePostV3ClickCollectOrdersStatusInfo(execute, input, options),
      postClickCollectOrdersStatusCancel: (
        input?: PostV3ClickCollectOrdersStatusCancelInput,
        options: WbRequestOptions = {},
      ) => executePostV3ClickCollectOrdersStatusCancel(execute, input, options),
      postClickCollectOrdersMetaDetails: (
        input: PostV3ClickCollectOrdersMetaDetailsInput,
        options: WbRequestOptions = {},
      ) => executePostV3ClickCollectOrdersMetaDetails(execute, input, options),
      postClickCollectOrdersMetaDelete: (
        input: PostV3ClickCollectOrdersMetaDeleteInput,
        options: WbRequestOptions = {},
      ) => executePostV3ClickCollectOrdersMetaDelete(execute, input, options),
      postClickCollectOrdersMetaSgtin: (
        input: PostV3ClickCollectOrdersMetaSgtinInput,
        options: WbRequestOptions = {},
      ) => executePostV3ClickCollectOrdersMetaSgtin(execute, input, options),
      postClickCollectOrdersMetaUin: (
        input: PostV3ClickCollectOrdersMetaUinInput,
        options: WbRequestOptions = {},
      ) => executePostV3ClickCollectOrdersMetaUin(execute, input, options),
      postClickCollectOrdersMetaImei: (
        input: PostV3ClickCollectOrdersMetaImeiInput,
        options: WbRequestOptions = {},
      ) => executePostV3ClickCollectOrdersMetaImei(execute, input, options),
      postClickCollectOrdersMetaGtin: (
        input: PostV3ClickCollectOrdersMetaGtinInput,
        options: WbRequestOptions = {},
      ) => executePostV3ClickCollectOrdersMetaGtin(execute, input, options),
      postClickCollectOrdersMetaCustomsDeclaration: (
        input: PostV3ClickCollectOrdersMetaCustomsDeclarationInput,
        options: WbRequestOptions = {},
      ) =>
        executePostV3ClickCollectOrdersMetaCustomsDeclaration(
          execute,
          input,
          options,
        ),
    }),
    ordersFbw: Object.freeze({
      postV1AcceptanceOptions: (
        input: PostV1AcceptanceOptionsInput,
        options: WbRequestOptions = {},
      ) => executePostV1AcceptanceOptions(execute, input, options),
      getV1Warehouses: (options: WbRequestOptions = {}) =>
        executeGetV1Warehouses(execute, options),
      getV1TransitTariffs: (options: WbRequestOptions = {}) =>
        executeGetV1TransitTariffs(execute, options),
      postV1Supplies: (
        input: PostV1SuppliesInput,
        options: WbRequestOptions = {},
      ) => executePostV1Supplies(execute, input, options),
      getV1SuppliesId: (
        input: GetV1SuppliesIdInput,
        options: WbRequestOptions = {},
      ) => executeGetV1SuppliesId(execute, input, options),
      getV1SuppliesIdGoods: (
        input: GetV1SuppliesIdGoodsInput,
        options: WbRequestOptions = {},
      ) => executeGetV1SuppliesIdGoods(execute, input, options),
      getV1SuppliesIdPackage: (
        input: GetV1SuppliesIdPackageInput,
        options: WbRequestOptions = {},
      ) => executeGetV1SuppliesIdPackage(execute, input, options),
      postAcceptanceOptions: (
        input: PostV1AcceptanceOptionsInput,
        options: WbRequestOptions = {},
      ) => executePostV1AcceptanceOptions(execute, input, options),
      getWarehouses: (options: WbRequestOptions = {}) =>
        executeGetV1Warehouses(execute, options),
      getTransitTariffs: (options: WbRequestOptions = {}) =>
        executeGetV1TransitTariffs(execute, options),
      postSupplies: (
        input: PostV1SuppliesInput,
        options: WbRequestOptions = {},
      ) => executePostV1Supplies(execute, input, options),
      getSuppliesId: (
        input: GetV1SuppliesIdInput,
        options: WbRequestOptions = {},
      ) => executeGetV1SuppliesId(execute, input, options),
      getSuppliesIdGoods: (
        input: GetV1SuppliesIdGoodsInput,
        options: WbRequestOptions = {},
      ) => executeGetV1SuppliesIdGoods(execute, input, options),
      getSuppliesIdPackage: (
        input: GetV1SuppliesIdPackageInput,
        options: WbRequestOptions = {},
      ) => executeGetV1SuppliesIdPackage(execute, input, options),
    }),
    promotion: Object.freeze({
      getV1PromotionCount: (options: WbRequestOptions = {}) =>
        executeGetV1PromotionCount(execute, options),
      getV2Adverts: (
        input?: GetV2AdvertsInput,
        options: WbRequestOptions = {},
      ) => executeGetV2Adverts(execute, input, options),
      postV1BidsMin: (
        input: PostV1BidsMinInput,
        options: WbRequestOptions = {},
      ) => executePostV1BidsMin(execute, input, options),
      postV2SeacatSaveAd: (
        input?: PostV2SeacatSaveAdInput,
        options: WbRequestOptions = {},
      ) => executePostV2SeacatSaveAd(execute, input, options),
      getV1SupplierSubjects: (
        input?: GetV1SupplierSubjectsInput,
        options: WbRequestOptions = {},
      ) => executeGetV1SupplierSubjects(execute, input, options),
      postV2SupplierNms: (
        input?: PostV2SupplierNmsInput,
        options: WbRequestOptions = {},
      ) => executePostV2SupplierNms(execute, input, options),
      getV0Delete: (input: GetV0DeleteInput, options: WbRequestOptions = {}) =>
        executeGetV0Delete(execute, input, options),
      postV0Rename: (
        input?: PostV0RenameInput,
        options: WbRequestOptions = {},
      ) => executePostV0Rename(execute, input, options),
      getV0Start: (input: GetV0StartInput, options: WbRequestOptions = {}) =>
        executeGetV0Start(execute, input, options),
      getV0Pause: (input: GetV0PauseInput, options: WbRequestOptions = {}) =>
        executeGetV0Pause(execute, input, options),
      getV0Stop: (input: GetV0StopInput, options: WbRequestOptions = {}) =>
        executeGetV0Stop(execute, input, options),
      putV0AuctionPlacements: (
        input: PutV0AuctionPlacementsInput,
        options: WbRequestOptions = {},
      ) => executePutV0AuctionPlacements(execute, input, options),
      patchV1Bids: (input: PatchV1BidsInput, options: WbRequestOptions = {}) =>
        executePatchV1Bids(execute, input, options),
      getV1Balance: (options: WbRequestOptions = {}) =>
        executeGetV1Balance(execute, options),
      getV1Budget: (input: GetV1BudgetInput, options: WbRequestOptions = {}) =>
        executeGetV1Budget(execute, input, options),
      postV1BudgetDeposit: (
        input: PostV1BudgetDepositInput,
        options: WbRequestOptions = {},
      ) => executePostV1BudgetDeposit(execute, input, options),
      getV1Upd: (input: GetV1UpdInput, options: WbRequestOptions = {}) =>
        executeGetV1Upd(execute, input, options),
      getV1Payments: (
        input?: GetV1PaymentsInput,
        options: WbRequestOptions = {},
      ) => executeGetV1Payments(execute, input, options),
      patchV0AuctionNms: (
        input: PatchV0AuctionNmsInput,
        options: WbRequestOptions = {},
      ) => executePatchV0AuctionNms(execute, input, options),
      getV0BidsRecommendations: (
        input: GetV0BidsRecommendationsInput,
        options: WbRequestOptions = {},
      ) => executeGetV0BidsRecommendations(execute, input, options),
      postV0NormqueryStats: (
        input: PostV0NormqueryStatsInput,
        options: WbRequestOptions = {},
      ) => executePostV0NormqueryStats(execute, input, options),
      postV0NormqueryGetBids: (
        input: PostV0NormqueryGetBidsInput,
        options: WbRequestOptions = {},
      ) => executePostV0NormqueryGetBids(execute, input, options),
      getV1Config: (options: WbRequestOptions = {}) =>
        executeGetV1Config(execute, options),
      postV1NormqueryBids: (
        input: PostV1NormqueryBidsInput,
        options: WbRequestOptions = {},
      ) => executePostV1NormqueryBids(execute, input, options),
      postV0NormqueryBids: (
        input: PostV0NormqueryBidsInput,
        options: WbRequestOptions = {},
      ) => executePostV0NormqueryBids(execute, input, options),
      deleteV0NormqueryBids: (
        input: DeleteV0NormqueryBidsInput,
        options: WbRequestOptions = {},
      ) => executeDeleteV0NormqueryBids(execute, input, options),
      postV0NormqueryGetMinus: (
        input: PostV0NormqueryGetMinusInput,
        options: WbRequestOptions = {},
      ) => executePostV0NormqueryGetMinus(execute, input, options),
      postV0NormquerySetMinus: (
        input: PostV0NormquerySetMinusInput,
        options: WbRequestOptions = {},
      ) => executePostV0NormquerySetMinus(execute, input, options),
      getV1Count: (options: WbRequestOptions = {}) =>
        executeGetV1Count(execute, options),
      getV1Adverts: (
        input?: GetV1AdvertsInput,
        options: WbRequestOptions = {},
      ) => executeGetV1Adverts(execute, input, options),
      getV1Advert: (input: GetV1AdvertInput, options: WbRequestOptions = {}) =>
        executeGetV1Advert(execute, input, options),
      getV3Fullstats: (
        input: GetV3FullstatsInput,
        options: WbRequestOptions = {},
      ) => executeGetV3Fullstats(execute, input, options),
      postV1Stats: (input: PostV1StatsInput, options: WbRequestOptions = {}) =>
        executePostV1Stats(execute, input, options),
      getV1CalendarPromotions: (
        input: GetV1CalendarPromotionsInput,
        options: WbRequestOptions = {},
      ) => executeGetV1CalendarPromotions(execute, input, options),
      getV1CalendarPromotionsDetails: (
        input: GetV1CalendarPromotionsDetailsInput,
        options: WbRequestOptions = {},
      ) => executeGetV1CalendarPromotionsDetails(execute, input, options),
      getV1CalendarPromotionsNomenclatures: (
        input: GetV1CalendarPromotionsNomenclaturesInput,
        options: WbRequestOptions = {},
      ) => executeGetV1CalendarPromotionsNomenclatures(execute, input, options),
      postV1CalendarPromotionsUpload: (
        input: PostV1CalendarPromotionsUploadInput,
        options: WbRequestOptions = {},
      ) => executePostV1CalendarPromotionsUpload(execute, input, options),
      postV0NormqueryList: (
        input: PostV0NormqueryListInput,
        options: WbRequestOptions = {},
      ) => executePostV0NormqueryList(execute, input, options),
      postV1NormqueryStats: (
        input: PostV1NormqueryStatsInput,
        options: WbRequestOptions = {},
      ) => executePostV1NormqueryStats(execute, input, options),
      getPromotionCount: (options: WbRequestOptions = {}) =>
        executeGetV1PromotionCount(execute, options),
      getAdverts: (input?: GetV2AdvertsInput, options: WbRequestOptions = {}) =>
        executeGetV2Adverts(execute, input, options),
      postBidsMin: (
        input: PostV1BidsMinInput,
        options: WbRequestOptions = {},
      ) => executePostV1BidsMin(execute, input, options),
      postSeacatSaveAd: (
        input?: PostV2SeacatSaveAdInput,
        options: WbRequestOptions = {},
      ) => executePostV2SeacatSaveAd(execute, input, options),
      getSupplierSubjects: (
        input?: GetV1SupplierSubjectsInput,
        options: WbRequestOptions = {},
      ) => executeGetV1SupplierSubjects(execute, input, options),
      postSupplierNms: (
        input?: PostV2SupplierNmsInput,
        options: WbRequestOptions = {},
      ) => executePostV2SupplierNms(execute, input, options),
      getDelete: (input: GetV0DeleteInput, options: WbRequestOptions = {}) =>
        executeGetV0Delete(execute, input, options),
      postRename: (input?: PostV0RenameInput, options: WbRequestOptions = {}) =>
        executePostV0Rename(execute, input, options),
      getStart: (input: GetV0StartInput, options: WbRequestOptions = {}) =>
        executeGetV0Start(execute, input, options),
      getPause: (input: GetV0PauseInput, options: WbRequestOptions = {}) =>
        executeGetV0Pause(execute, input, options),
      getStop: (input: GetV0StopInput, options: WbRequestOptions = {}) =>
        executeGetV0Stop(execute, input, options),
      putAuctionPlacements: (
        input: PutV0AuctionPlacementsInput,
        options: WbRequestOptions = {},
      ) => executePutV0AuctionPlacements(execute, input, options),
      patchBids: (input: PatchV1BidsInput, options: WbRequestOptions = {}) =>
        executePatchV1Bids(execute, input, options),
      getBalance: (options: WbRequestOptions = {}) =>
        executeGetV1Balance(execute, options),
      getBudget: (input: GetV1BudgetInput, options: WbRequestOptions = {}) =>
        executeGetV1Budget(execute, input, options),
      postBudgetDeposit: (
        input: PostV1BudgetDepositInput,
        options: WbRequestOptions = {},
      ) => executePostV1BudgetDeposit(execute, input, options),
      getUpd: (input: GetV1UpdInput, options: WbRequestOptions = {}) =>
        executeGetV1Upd(execute, input, options),
      getPayments: (
        input?: GetV1PaymentsInput,
        options: WbRequestOptions = {},
      ) => executeGetV1Payments(execute, input, options),
      patchAuctionNms: (
        input: PatchV0AuctionNmsInput,
        options: WbRequestOptions = {},
      ) => executePatchV0AuctionNms(execute, input, options),
      getBidsRecommendations: (
        input: GetV0BidsRecommendationsInput,
        options: WbRequestOptions = {},
      ) => executeGetV0BidsRecommendations(execute, input, options),
      postNormqueryStats: (
        input: PostV1NormqueryStatsInput,
        options: WbRequestOptions = {},
      ) => executePostV1NormqueryStats(execute, input, options),
      postNormqueryGetBids: (
        input: PostV0NormqueryGetBidsInput,
        options: WbRequestOptions = {},
      ) => executePostV0NormqueryGetBids(execute, input, options),
      getConfig: (options: WbRequestOptions = {}) =>
        executeGetV1Config(execute, options),
      postNormqueryBids: (
        input: PostV1NormqueryBidsInput,
        options: WbRequestOptions = {},
      ) => executePostV1NormqueryBids(execute, input, options),
      deleteNormqueryBids: (
        input: DeleteV0NormqueryBidsInput,
        options: WbRequestOptions = {},
      ) => executeDeleteV0NormqueryBids(execute, input, options),
      postNormqueryGetMinus: (
        input: PostV0NormqueryGetMinusInput,
        options: WbRequestOptions = {},
      ) => executePostV0NormqueryGetMinus(execute, input, options),
      postNormquerySetMinus: (
        input: PostV0NormquerySetMinusInput,
        options: WbRequestOptions = {},
      ) => executePostV0NormquerySetMinus(execute, input, options),
      getCount: (options: WbRequestOptions = {}) =>
        executeGetV1Count(execute, options),
      getAdvert: (input: GetV1AdvertInput, options: WbRequestOptions = {}) =>
        executeGetV1Advert(execute, input, options),
      getFullstats: (
        input: GetV3FullstatsInput,
        options: WbRequestOptions = {},
      ) => executeGetV3Fullstats(execute, input, options),
      postStats: (input: PostV1StatsInput, options: WbRequestOptions = {}) =>
        executePostV1Stats(execute, input, options),
      getCalendarPromotions: (
        input: GetV1CalendarPromotionsInput,
        options: WbRequestOptions = {},
      ) => executeGetV1CalendarPromotions(execute, input, options),
      getCalendarPromotionsDetails: (
        input: GetV1CalendarPromotionsDetailsInput,
        options: WbRequestOptions = {},
      ) => executeGetV1CalendarPromotionsDetails(execute, input, options),
      getCalendarPromotionsNomenclatures: (
        input: GetV1CalendarPromotionsNomenclaturesInput,
        options: WbRequestOptions = {},
      ) => executeGetV1CalendarPromotionsNomenclatures(execute, input, options),
      postCalendarPromotionsUpload: (
        input: PostV1CalendarPromotionsUploadInput,
        options: WbRequestOptions = {},
      ) => executePostV1CalendarPromotionsUpload(execute, input, options),
      postNormqueryList: (
        input: PostV0NormqueryListInput,
        options: WbRequestOptions = {},
      ) => executePostV0NormqueryList(execute, input, options),
    }),
    communications: Object.freeze({
      getV1NewFeedbacksQuestions: (options: WbRequestOptions = {}) =>
        executeGetV1NewFeedbacksQuestions(execute, options),
      getV1QuestionsCountUnanswered: (options: WbRequestOptions = {}) =>
        executeGetV1QuestionsCountUnanswered(execute, options),
      getV1QuestionsCount: (
        input?: GetV1QuestionsCountInput,
        options: WbRequestOptions = {},
      ) => executeGetV1QuestionsCount(execute, input, options),
      getV1Questions: (
        input: GetV1QuestionsInput,
        options: WbRequestOptions = {},
      ) => executeGetV1Questions(execute, input, options),
      patchV1Questions: (
        input?: PatchV1QuestionsInput,
        options: WbRequestOptions = {},
      ) => executePatchV1Questions(execute, input, options),
      getV1Question: (
        input: GetV1QuestionInput,
        options: WbRequestOptions = {},
      ) => executeGetV1Question(execute, input, options),
      getV1FeedbacksCountUnanswered: (options: WbRequestOptions = {}) =>
        executeGetV1FeedbacksCountUnanswered(execute, options),
      getV1FeedbacksCount: (
        input?: GetV1FeedbacksCountInput,
        options: WbRequestOptions = {},
      ) => executeGetV1FeedbacksCount(execute, input, options),
      getV1Feedbacks: (
        input: GetV1FeedbacksInput,
        options: WbRequestOptions = {},
      ) => executeGetV1Feedbacks(execute, input, options),
      postV1FeedbacksAnswer: (
        input?: PostV1FeedbacksAnswerInput,
        options: WbRequestOptions = {},
      ) => executePostV1FeedbacksAnswer(execute, input, options),
      patchV1FeedbacksAnswer: (
        input?: PatchV1FeedbacksAnswerInput,
        options: WbRequestOptions = {},
      ) => executePatchV1FeedbacksAnswer(execute, input, options),
      postV1FeedbacksOrderReturn: (
        input: PostV1FeedbacksOrderReturnInput,
        options: WbRequestOptions = {},
      ) => executePostV1FeedbacksOrderReturn(execute, input, options),
      getV1Feedback: (
        input: GetV1FeedbackInput,
        options: WbRequestOptions = {},
      ) => executeGetV1Feedback(execute, input, options),
      getV1FeedbacksArchive: (
        input: GetV1FeedbacksArchiveInput,
        options: WbRequestOptions = {},
      ) => executeGetV1FeedbacksArchive(execute, input, options),
      getFeedbacksV1Pins: (
        input?: GetFeedbacksV1PinsInput,
        options: WbRequestOptions = {},
      ) => executeGetFeedbacksV1Pins(execute, input, options),
      postFeedbacksV1Pins: (
        input: PostFeedbacksV1PinsInput,
        options: WbRequestOptions = {},
      ) => executePostFeedbacksV1Pins(execute, input, options),
      deleteFeedbacksV1Pins: (
        input: DeleteFeedbacksV1PinsInput,
        options: WbRequestOptions = {},
      ) => executeDeleteFeedbacksV1Pins(execute, input, options),
      getFeedbacksV1PinsCount: (
        input?: GetFeedbacksV1PinsCountInput,
        options: WbRequestOptions = {},
      ) => executeGetFeedbacksV1PinsCount(execute, input, options),
      getFeedbacksV1PinsLimits: (options: WbRequestOptions = {}) =>
        executeGetFeedbacksV1PinsLimits(execute, options),
      getV1SellerChats: (options: WbRequestOptions = {}) =>
        executeGetV1SellerChats(execute, options),
      getV1SellerEvents: (
        input?: GetV1SellerEventsInput,
        options: WbRequestOptions = {},
      ) => executeGetV1SellerEvents(execute, input, options),
      postV1SellerMessage: (
        input: PostV1SellerMessageInput,
        options: WbRequestOptions = {},
      ) => executePostV1SellerMessage(execute, input, options),
      getV1SellerDownloadId: (
        input: GetV1SellerDownloadIdInput,
        options: WbRequestOptions = {},
      ) => executeGetV1SellerDownloadId(execute, input, options),
      getV1Claims: (input: GetV1ClaimsInput, options: WbRequestOptions = {}) =>
        executeGetV1Claims(execute, input, options),
      patchV1Claim: (
        input: PatchV1ClaimInput,
        options: WbRequestOptions = {},
      ) => executePatchV1Claim(execute, input, options),
      getNewFeedbacksQuestions: (options: WbRequestOptions = {}) =>
        executeGetV1NewFeedbacksQuestions(execute, options),
      getQuestionsCountUnanswered: (options: WbRequestOptions = {}) =>
        executeGetV1QuestionsCountUnanswered(execute, options),
      getQuestionsCount: (
        input?: GetV1QuestionsCountInput,
        options: WbRequestOptions = {},
      ) => executeGetV1QuestionsCount(execute, input, options),
      getQuestions: (
        input: GetV1QuestionsInput,
        options: WbRequestOptions = {},
      ) => executeGetV1Questions(execute, input, options),
      patchQuestions: (
        input?: PatchV1QuestionsInput,
        options: WbRequestOptions = {},
      ) => executePatchV1Questions(execute, input, options),
      getQuestion: (
        input: GetV1QuestionInput,
        options: WbRequestOptions = {},
      ) => executeGetV1Question(execute, input, options),
      getFeedbacksCountUnanswered: (options: WbRequestOptions = {}) =>
        executeGetV1FeedbacksCountUnanswered(execute, options),
      getFeedbacksCount: (
        input?: GetV1FeedbacksCountInput,
        options: WbRequestOptions = {},
      ) => executeGetV1FeedbacksCount(execute, input, options),
      getFeedbacks: (
        input: GetV1FeedbacksInput,
        options: WbRequestOptions = {},
      ) => executeGetV1Feedbacks(execute, input, options),
      postFeedbacksAnswer: (
        input?: PostV1FeedbacksAnswerInput,
        options: WbRequestOptions = {},
      ) => executePostV1FeedbacksAnswer(execute, input, options),
      patchFeedbacksAnswer: (
        input?: PatchV1FeedbacksAnswerInput,
        options: WbRequestOptions = {},
      ) => executePatchV1FeedbacksAnswer(execute, input, options),
      postFeedbacksOrderReturn: (
        input: PostV1FeedbacksOrderReturnInput,
        options: WbRequestOptions = {},
      ) => executePostV1FeedbacksOrderReturn(execute, input, options),
      getFeedback: (
        input: GetV1FeedbackInput,
        options: WbRequestOptions = {},
      ) => executeGetV1Feedback(execute, input, options),
      getFeedbacksArchive: (
        input: GetV1FeedbacksArchiveInput,
        options: WbRequestOptions = {},
      ) => executeGetV1FeedbacksArchive(execute, input, options),
      getFeedbacksPins: (
        input?: GetFeedbacksV1PinsInput,
        options: WbRequestOptions = {},
      ) => executeGetFeedbacksV1Pins(execute, input, options),
      postFeedbacksPins: (
        input: PostFeedbacksV1PinsInput,
        options: WbRequestOptions = {},
      ) => executePostFeedbacksV1Pins(execute, input, options),
      deleteFeedbacksPins: (
        input: DeleteFeedbacksV1PinsInput,
        options: WbRequestOptions = {},
      ) => executeDeleteFeedbacksV1Pins(execute, input, options),
      getFeedbacksPinsCount: (
        input?: GetFeedbacksV1PinsCountInput,
        options: WbRequestOptions = {},
      ) => executeGetFeedbacksV1PinsCount(execute, input, options),
      getFeedbacksPinsLimits: (options: WbRequestOptions = {}) =>
        executeGetFeedbacksV1PinsLimits(execute, options),
      getSellerChats: (options: WbRequestOptions = {}) =>
        executeGetV1SellerChats(execute, options),
      getSellerEvents: (
        input?: GetV1SellerEventsInput,
        options: WbRequestOptions = {},
      ) => executeGetV1SellerEvents(execute, input, options),
      postSellerMessage: (
        input: PostV1SellerMessageInput,
        options: WbRequestOptions = {},
      ) => executePostV1SellerMessage(execute, input, options),
      getSellerDownloadId: (
        input: GetV1SellerDownloadIdInput,
        options: WbRequestOptions = {},
      ) => executeGetV1SellerDownloadId(execute, input, options),
      getClaims: (input: GetV1ClaimsInput, options: WbRequestOptions = {}) =>
        executeGetV1Claims(execute, input, options),
      patchClaim: (input: PatchV1ClaimInput, options: WbRequestOptions = {}) =>
        executePatchV1Claim(execute, input, options),
    }),
    rates: Object.freeze({
      getV1TariffsCommission: (
        input?: GetV1TariffsCommissionInput,
        options: WbRequestOptions = {},
      ) => executeGetV1TariffsCommission(execute, input, options),
      getV1AcceptanceCoefficients: (
        input?: GetV1AcceptanceCoefficientsInput,
        options: WbRequestOptions = {},
      ) => executeGetV1AcceptanceCoefficients(execute, input, options),
      getV1TariffsBox: (
        input: GetV1TariffsBoxInput,
        options: WbRequestOptions = {},
      ) => executeGetV1TariffsBox(execute, input, options),
      getV1TariffsPallet: (
        input: GetV1TariffsPalletInput,
        options: WbRequestOptions = {},
      ) => executeGetV1TariffsPallet(execute, input, options),
      getV1TariffsReturn: (
        input: GetV1TariffsReturnInput,
        options: WbRequestOptions = {},
      ) => executeGetV1TariffsReturn(execute, input, options),
      getTariffsCommission: (
        input?: GetV1TariffsCommissionInput,
        options: WbRequestOptions = {},
      ) => executeGetV1TariffsCommission(execute, input, options),
      getAcceptanceCoefficients: (
        input?: GetV1AcceptanceCoefficientsInput,
        options: WbRequestOptions = {},
      ) => executeGetV1AcceptanceCoefficients(execute, input, options),
      getTariffsBox: (
        input: GetV1TariffsBoxInput,
        options: WbRequestOptions = {},
      ) => executeGetV1TariffsBox(execute, input, options),
      getTariffsPallet: (
        input: GetV1TariffsPalletInput,
        options: WbRequestOptions = {},
      ) => executeGetV1TariffsPallet(execute, input, options),
      getTariffsReturn: (
        input: GetV1TariffsReturnInput,
        options: WbRequestOptions = {},
      ) => executeGetV1TariffsReturn(execute, input, options),
    }),
    analytics: Object.freeze({
      postV3SalesFunnelProducts: (
        input: PostV3SalesFunnelProductsInput,
        options: WbRequestOptions = {},
      ) => executePostV3SalesFunnelProducts(execute, input, options),
      postV3SalesFunnelProductsHistory: (
        input: PostV3SalesFunnelProductsHistoryInput,
        options: WbRequestOptions = {},
      ) => executePostV3SalesFunnelProductsHistory(execute, input, options),
      postV3SalesFunnelGroupedHistory: (
        input: PostV3SalesFunnelGroupedHistoryInput,
        options: WbRequestOptions = {},
      ) => executePostV3SalesFunnelGroupedHistory(execute, input, options),
      postV2NmReportDownloads: (
        input?: PostV2NmReportDownloadsInput,
        options: WbRequestOptions = {},
      ) => executePostV2NmReportDownloads(execute, input, options),
      getV2NmReportDownloads: (
        input?: GetV2NmReportDownloadsInput,
        options: WbRequestOptions = {},
      ) => executeGetV2NmReportDownloads(execute, input, options),
      postV2NmReportDownloadsRetry: (
        input: PostV2NmReportDownloadsRetryInput,
        options: WbRequestOptions = {},
      ) => executePostV2NmReportDownloadsRetry(execute, input, options),
      getV2NmReportDownloadsFileDownloadId: (
        input: GetV2NmReportDownloadsFileDownloadIdInput,
        options: WbRequestOptions = {},
      ) => executeGetV2NmReportDownloadsFileDownloadId(execute, input, options),
      postV2SearchReportReport: (
        input: PostV2SearchReportReportInput,
        options: WbRequestOptions = {},
      ) => executePostV2SearchReportReport(execute, input, options),
      postV2SearchReportTableGroups: (
        input: PostV2SearchReportTableGroupsInput,
        options: WbRequestOptions = {},
      ) => executePostV2SearchReportTableGroups(execute, input, options),
      postV2SearchReportTableDetails: (
        input: PostV2SearchReportTableDetailsInput,
        options: WbRequestOptions = {},
      ) => executePostV2SearchReportTableDetails(execute, input, options),
      postV2SearchReportProductSearchTexts: (
        input: PostV2SearchReportProductSearchTextsInput,
        options: WbRequestOptions = {},
      ) => executePostV2SearchReportProductSearchTexts(execute, input, options),
      postV2SearchReportProductOrders: (
        input: PostV2SearchReportProductOrdersInput,
        options: WbRequestOptions = {},
      ) => executePostV2SearchReportProductOrders(execute, input, options),
      postV1StocksReportWbWarehouses: (
        input: PostV1StocksReportWbWarehousesInput,
        options: WbRequestOptions = {},
      ) => executePostV1StocksReportWbWarehouses(execute, input, options),
      postV2StocksReportProductsGroups: (
        input: PostV2StocksReportProductsGroupsInput,
        options: WbRequestOptions = {},
      ) => executePostV2StocksReportProductsGroups(execute, input, options),
      postV2StocksReportProductsProducts: (
        input: PostV2StocksReportProductsProductsInput,
        options: WbRequestOptions = {},
      ) => executePostV2StocksReportProductsProducts(execute, input, options),
      postV2StocksReportProductsSizes: (
        input: PostV2StocksReportProductsSizesInput,
        options: WbRequestOptions = {},
      ) => executePostV2StocksReportProductsSizes(execute, input, options),
      postV2StocksReportOffices: (
        input: PostV2StocksReportOfficesInput,
        options: WbRequestOptions = {},
      ) => executePostV2StocksReportOffices(execute, input, options),
      postV2ItemRating: (
        input: PostV2ItemRatingInput,
        options: WbRequestOptions = {},
      ) => executePostV2ItemRating(execute, input, options),
      postV1OrderFeed: (
        input?: PostV1OrderFeedInput,
        options: WbRequestOptions = {},
      ) => executePostV1OrderFeed(execute, input, options),
      postSalesFunnelProducts: (
        input: PostV3SalesFunnelProductsInput,
        options: WbRequestOptions = {},
      ) => executePostV3SalesFunnelProducts(execute, input, options),
      postSalesFunnelProductsHistory: (
        input: PostV3SalesFunnelProductsHistoryInput,
        options: WbRequestOptions = {},
      ) => executePostV3SalesFunnelProductsHistory(execute, input, options),
      postSalesFunnelGroupedHistory: (
        input: PostV3SalesFunnelGroupedHistoryInput,
        options: WbRequestOptions = {},
      ) => executePostV3SalesFunnelGroupedHistory(execute, input, options),
      postNmReportDownloads: (
        input?: PostV2NmReportDownloadsInput,
        options: WbRequestOptions = {},
      ) => executePostV2NmReportDownloads(execute, input, options),
      getNmReportDownloads: (
        input?: GetV2NmReportDownloadsInput,
        options: WbRequestOptions = {},
      ) => executeGetV2NmReportDownloads(execute, input, options),
      postNmReportDownloadsRetry: (
        input: PostV2NmReportDownloadsRetryInput,
        options: WbRequestOptions = {},
      ) => executePostV2NmReportDownloadsRetry(execute, input, options),
      getNmReportDownloadsFileDownloadId: (
        input: GetV2NmReportDownloadsFileDownloadIdInput,
        options: WbRequestOptions = {},
      ) => executeGetV2NmReportDownloadsFileDownloadId(execute, input, options),
      postSearchReportReport: (
        input: PostV2SearchReportReportInput,
        options: WbRequestOptions = {},
      ) => executePostV2SearchReportReport(execute, input, options),
      postSearchReportTableGroups: (
        input: PostV2SearchReportTableGroupsInput,
        options: WbRequestOptions = {},
      ) => executePostV2SearchReportTableGroups(execute, input, options),
      postSearchReportTableDetails: (
        input: PostV2SearchReportTableDetailsInput,
        options: WbRequestOptions = {},
      ) => executePostV2SearchReportTableDetails(execute, input, options),
      postSearchReportProductSearchTexts: (
        input: PostV2SearchReportProductSearchTextsInput,
        options: WbRequestOptions = {},
      ) => executePostV2SearchReportProductSearchTexts(execute, input, options),
      postSearchReportProductOrders: (
        input: PostV2SearchReportProductOrdersInput,
        options: WbRequestOptions = {},
      ) => executePostV2SearchReportProductOrders(execute, input, options),
      postStocksReportWbWarehouses: (
        input: PostV1StocksReportWbWarehousesInput,
        options: WbRequestOptions = {},
      ) => executePostV1StocksReportWbWarehouses(execute, input, options),
      postStocksReportProductsGroups: (
        input: PostV2StocksReportProductsGroupsInput,
        options: WbRequestOptions = {},
      ) => executePostV2StocksReportProductsGroups(execute, input, options),
      postStocksReportProductsProducts: (
        input: PostV2StocksReportProductsProductsInput,
        options: WbRequestOptions = {},
      ) => executePostV2StocksReportProductsProducts(execute, input, options),
      postStocksReportProductsSizes: (
        input: PostV2StocksReportProductsSizesInput,
        options: WbRequestOptions = {},
      ) => executePostV2StocksReportProductsSizes(execute, input, options),
      postStocksReportOffices: (
        input: PostV2StocksReportOfficesInput,
        options: WbRequestOptions = {},
      ) => executePostV2StocksReportOffices(execute, input, options),
      postItemRating: (
        input: PostV2ItemRatingInput,
        options: WbRequestOptions = {},
      ) => executePostV2ItemRating(execute, input, options),
      postOrderFeed: (
        input?: PostV1OrderFeedInput,
        options: WbRequestOptions = {},
      ) => executePostV1OrderFeed(execute, input, options),
    }),
    reports: Object.freeze({
      getV1SupplierOrders: (
        input: GetV1SupplierOrdersInput,
        options: WbRequestOptions = {},
      ) => executeGetV1SupplierOrders(execute, input, options),
      getV1SupplierSales: (
        input: GetV1SupplierSalesInput,
        options: WbRequestOptions = {},
      ) => executeGetV1SupplierSales(execute, input, options),
      postV1AnalyticsExciseReport: (
        input: PostV1AnalyticsExciseReportInput,
        options: WbRequestOptions = {},
      ) => executePostV1AnalyticsExciseReport(execute, input, options),
      getV1WarehouseRemains: (
        input?: GetV1WarehouseRemainsInput,
        options: WbRequestOptions = {},
      ) => executeGetV1WarehouseRemains(execute, input, options),
      getV1WarehouseRemainsTasksTaskIdStatus: (
        input: GetV1WarehouseRemainsTasksTaskIdStatusInput,
        options: WbRequestOptions = {},
      ) =>
        executeGetV1WarehouseRemainsTasksTaskIdStatus(execute, input, options),
      getV1WarehouseRemainsTasksTaskIdDownload: (
        input: GetV1WarehouseRemainsTasksTaskIdDownloadInput,
        options: WbRequestOptions = {},
      ) =>
        executeGetV1WarehouseRemainsTasksTaskIdDownload(
          execute,
          input,
          options,
        ),
      getV1MeasurementPenalties: (
        input: GetV1MeasurementPenaltiesInput,
        options: WbRequestOptions = {},
      ) => executeGetV1MeasurementPenalties(execute, input, options),
      getV1WarehouseMeasurements: (
        input: GetV1WarehouseMeasurementsInput,
        options: WbRequestOptions = {},
      ) => executeGetV1WarehouseMeasurements(execute, input, options),
      getV1Deductions: (
        input: GetV1DeductionsInput,
        options: WbRequestOptions = {},
      ) => executeGetV1Deductions(execute, input, options),
      getV1AnalyticsAntifraudDetails: (
        input?: GetV1AnalyticsAntifraudDetailsInput,
        options: WbRequestOptions = {},
      ) => executeGetV1AnalyticsAntifraudDetails(execute, input, options),
      getV1AnalyticsGoodsLabeling: (
        input: GetV1AnalyticsGoodsLabelingInput,
        options: WbRequestOptions = {},
      ) => executeGetV1AnalyticsGoodsLabeling(execute, input, options),
      getV1AcceptanceReport: (
        input: GetV1AcceptanceReportInput,
        options: WbRequestOptions = {},
      ) => executeGetV1AcceptanceReport(execute, input, options),
      getV1AcceptanceReportTasksTaskIdStatus: (
        input: GetV1AcceptanceReportTasksTaskIdStatusInput,
        options: WbRequestOptions = {},
      ) =>
        executeGetV1AcceptanceReportTasksTaskIdStatus(execute, input, options),
      getV1AcceptanceReportTasksTaskIdDownload: (
        input: GetV1AcceptanceReportTasksTaskIdDownloadInput,
        options: WbRequestOptions = {},
      ) =>
        executeGetV1AcceptanceReportTasksTaskIdDownload(
          execute,
          input,
          options,
        ),
      getV1PaidStorage: (
        input: GetV1PaidStorageInput,
        options: WbRequestOptions = {},
      ) => executeGetV1PaidStorage(execute, input, options),
      getV1PaidStorageTasksTaskIdStatus: (
        input: GetV1PaidStorageTasksTaskIdStatusInput,
        options: WbRequestOptions = {},
      ) => executeGetV1PaidStorageTasksTaskIdStatus(execute, input, options),
      getV1PaidStorageTasksTaskIdDownload: (
        input: GetV1PaidStorageTasksTaskIdDownloadInput,
        options: WbRequestOptions = {},
      ) => executeGetV1PaidStorageTasksTaskIdDownload(execute, input, options),
      getV1AnalyticsRegionSale: (
        input: GetV1AnalyticsRegionSaleInput,
        options: WbRequestOptions = {},
      ) => executeGetV1AnalyticsRegionSale(execute, input, options),
      getV1AnalyticsBrandShareBrands: (options: WbRequestOptions = {}) =>
        executeGetV1AnalyticsBrandShareBrands(execute, options),
      getV1AnalyticsBrandShareParentSubjects: (
        input: GetV1AnalyticsBrandShareParentSubjectsInput,
        options: WbRequestOptions = {},
      ) =>
        executeGetV1AnalyticsBrandShareParentSubjects(execute, input, options),
      getV1AnalyticsBrandShare: (
        input: GetV1AnalyticsBrandShareInput,
        options: WbRequestOptions = {},
      ) => executeGetV1AnalyticsBrandShare(execute, input, options),
      getV1AnalyticsBannedProducsBlocked: (
        input: GetV1AnalyticsBannedProducsBlockedInput,
        options: WbRequestOptions = {},
      ) => executeGetV1AnalyticsBannedProducsBlocked(execute, input, options),
      getV1AnalyticsGoodsReturn: (
        input: GetV1AnalyticsGoodsReturnInput,
        options: WbRequestOptions = {},
      ) => executeGetV1AnalyticsGoodsReturn(execute, input, options),
      getSupplierOrders: (
        input: GetV1SupplierOrdersInput,
        options: WbRequestOptions = {},
      ) => executeGetV1SupplierOrders(execute, input, options),
      getSupplierSales: (
        input: GetV1SupplierSalesInput,
        options: WbRequestOptions = {},
      ) => executeGetV1SupplierSales(execute, input, options),
      postAnalyticsExciseReport: (
        input: PostV1AnalyticsExciseReportInput,
        options: WbRequestOptions = {},
      ) => executePostV1AnalyticsExciseReport(execute, input, options),
      getWarehouseRemains: (
        input?: GetV1WarehouseRemainsInput,
        options: WbRequestOptions = {},
      ) => executeGetV1WarehouseRemains(execute, input, options),
      getWarehouseRemainsTasksTaskIdStatus: (
        input: GetV1WarehouseRemainsTasksTaskIdStatusInput,
        options: WbRequestOptions = {},
      ) =>
        executeGetV1WarehouseRemainsTasksTaskIdStatus(execute, input, options),
      getWarehouseRemainsTasksTaskIdDownload: (
        input: GetV1WarehouseRemainsTasksTaskIdDownloadInput,
        options: WbRequestOptions = {},
      ) =>
        executeGetV1WarehouseRemainsTasksTaskIdDownload(
          execute,
          input,
          options,
        ),
      getMeasurementPenalties: (
        input: GetV1MeasurementPenaltiesInput,
        options: WbRequestOptions = {},
      ) => executeGetV1MeasurementPenalties(execute, input, options),
      getWarehouseMeasurements: (
        input: GetV1WarehouseMeasurementsInput,
        options: WbRequestOptions = {},
      ) => executeGetV1WarehouseMeasurements(execute, input, options),
      getDeductions: (
        input: GetV1DeductionsInput,
        options: WbRequestOptions = {},
      ) => executeGetV1Deductions(execute, input, options),
      getAnalyticsAntifraudDetails: (
        input?: GetV1AnalyticsAntifraudDetailsInput,
        options: WbRequestOptions = {},
      ) => executeGetV1AnalyticsAntifraudDetails(execute, input, options),
      getAnalyticsGoodsLabeling: (
        input: GetV1AnalyticsGoodsLabelingInput,
        options: WbRequestOptions = {},
      ) => executeGetV1AnalyticsGoodsLabeling(execute, input, options),
      getAcceptanceReport: (
        input: GetV1AcceptanceReportInput,
        options: WbRequestOptions = {},
      ) => executeGetV1AcceptanceReport(execute, input, options),
      getAcceptanceReportTasksTaskIdStatus: (
        input: GetV1AcceptanceReportTasksTaskIdStatusInput,
        options: WbRequestOptions = {},
      ) =>
        executeGetV1AcceptanceReportTasksTaskIdStatus(execute, input, options),
      getAcceptanceReportTasksTaskIdDownload: (
        input: GetV1AcceptanceReportTasksTaskIdDownloadInput,
        options: WbRequestOptions = {},
      ) =>
        executeGetV1AcceptanceReportTasksTaskIdDownload(
          execute,
          input,
          options,
        ),
      getPaidStorage: (
        input: GetV1PaidStorageInput,
        options: WbRequestOptions = {},
      ) => executeGetV1PaidStorage(execute, input, options),
      getPaidStorageTasksTaskIdStatus: (
        input: GetV1PaidStorageTasksTaskIdStatusInput,
        options: WbRequestOptions = {},
      ) => executeGetV1PaidStorageTasksTaskIdStatus(execute, input, options),
      getPaidStorageTasksTaskIdDownload: (
        input: GetV1PaidStorageTasksTaskIdDownloadInput,
        options: WbRequestOptions = {},
      ) => executeGetV1PaidStorageTasksTaskIdDownload(execute, input, options),
      getAnalyticsRegionSale: (
        input: GetV1AnalyticsRegionSaleInput,
        options: WbRequestOptions = {},
      ) => executeGetV1AnalyticsRegionSale(execute, input, options),
      getAnalyticsBrandShareBrands: (options: WbRequestOptions = {}) =>
        executeGetV1AnalyticsBrandShareBrands(execute, options),
      getAnalyticsBrandShareParentSubjects: (
        input: GetV1AnalyticsBrandShareParentSubjectsInput,
        options: WbRequestOptions = {},
      ) =>
        executeGetV1AnalyticsBrandShareParentSubjects(execute, input, options),
      getAnalyticsBrandShare: (
        input: GetV1AnalyticsBrandShareInput,
        options: WbRequestOptions = {},
      ) => executeGetV1AnalyticsBrandShare(execute, input, options),
      getAnalyticsBannedProducsBlocked: (
        input: GetV1AnalyticsBannedProducsBlockedInput,
        options: WbRequestOptions = {},
      ) => executeGetV1AnalyticsBannedProducsBlocked(execute, input, options),
      getAnalyticsGoodsReturn: (
        input: GetV1AnalyticsGoodsReturnInput,
        options: WbRequestOptions = {},
      ) => executeGetV1AnalyticsGoodsReturn(execute, input, options),
    }),
    finances: Object.freeze({
      getV1AccountBalance: (options: WbRequestOptions = {}) =>
        executeGetV1AccountBalance(execute, options),
      postV1SalesReportsList: (
        input: PostV1SalesReportsListInput,
        options: WbRequestOptions = {},
      ) => executePostV1SalesReportsList(execute, input, options),
      postV1SalesReportsDetailedReportId: (
        input: PostV1SalesReportsDetailedReportIdInput,
        options: WbRequestOptions = {},
      ) => executePostV1SalesReportsDetailedReportId(execute, input, options),
      postV1SalesReportsDetailed: (
        input: PostV1SalesReportsDetailedInput,
        options: WbRequestOptions = {},
      ) => executePostV1SalesReportsDetailed(execute, input, options),
      postV1AcquiringList: (
        input: PostV1AcquiringListInput,
        options: WbRequestOptions = {},
      ) => executePostV1AcquiringList(execute, input, options),
      postV1AcquiringDetailedReportId: (
        input: PostV1AcquiringDetailedReportIdInput,
        options: WbRequestOptions = {},
      ) => executePostV1AcquiringDetailedReportId(execute, input, options),
      postV1AcquiringDetailed: (
        input: PostV1AcquiringDetailedInput,
        options: WbRequestOptions = {},
      ) => executePostV1AcquiringDetailed(execute, input, options),
      getV1DocumentsCategories: (
        input?: GetV1DocumentsCategoriesInput,
        options: WbRequestOptions = {},
      ) => executeGetV1DocumentsCategories(execute, input, options),
      getV1DocumentsList: (
        input?: GetV1DocumentsListInput,
        options: WbRequestOptions = {},
      ) => executeGetV1DocumentsList(execute, input, options),
      getV1DocumentsDownload: (
        input: GetV1DocumentsDownloadInput,
        options: WbRequestOptions = {},
      ) => executeGetV1DocumentsDownload(execute, input, options),
      postV1DocumentsDownloadAll: (
        input?: PostV1DocumentsDownloadAllInput,
        options: WbRequestOptions = {},
      ) => executePostV1DocumentsDownloadAll(execute, input, options),
      getAccountBalance: (options: WbRequestOptions = {}) =>
        executeGetV1AccountBalance(execute, options),
      postSalesReportsList: (
        input: PostV1SalesReportsListInput,
        options: WbRequestOptions = {},
      ) => executePostV1SalesReportsList(execute, input, options),
      postSalesReportsDetailedReportId: (
        input: PostV1SalesReportsDetailedReportIdInput,
        options: WbRequestOptions = {},
      ) => executePostV1SalesReportsDetailedReportId(execute, input, options),
      postSalesReportsDetailed: (
        input: PostV1SalesReportsDetailedInput,
        options: WbRequestOptions = {},
      ) => executePostV1SalesReportsDetailed(execute, input, options),
      postAcquiringList: (
        input: PostV1AcquiringListInput,
        options: WbRequestOptions = {},
      ) => executePostV1AcquiringList(execute, input, options),
      postAcquiringDetailedReportId: (
        input: PostV1AcquiringDetailedReportIdInput,
        options: WbRequestOptions = {},
      ) => executePostV1AcquiringDetailedReportId(execute, input, options),
      postAcquiringDetailed: (
        input: PostV1AcquiringDetailedInput,
        options: WbRequestOptions = {},
      ) => executePostV1AcquiringDetailed(execute, input, options),
      getDocumentsCategories: (
        input?: GetV1DocumentsCategoriesInput,
        options: WbRequestOptions = {},
      ) => executeGetV1DocumentsCategories(execute, input, options),
      getDocumentsList: (
        input?: GetV1DocumentsListInput,
        options: WbRequestOptions = {},
      ) => executeGetV1DocumentsList(execute, input, options),
      getDocumentsDownload: (
        input: GetV1DocumentsDownloadInput,
        options: WbRequestOptions = {},
      ) => executeGetV1DocumentsDownload(execute, input, options),
      postDocumentsDownloadAll: (
        input?: PostV1DocumentsDownloadAllInput,
        options: WbRequestOptions = {},
      ) => executePostV1DocumentsDownloadAll(execute, input, options),
    }),
  });
}

export const WB_OPERATION_METADATA = [
  {
    domain: "general",
    methodName: "getPing",
    operationId: "getPing",
    method: "GET",
    path: "/ping",
    productionOrigin: "https://common-api.wildberries.ru",
    retrySafety: "safe",
    source: "https://dev.wildberries.ru/docs/openapi/api-information",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "general",
    methodName: "getV2News",
    operationId: "getV2News",
    method: "GET",
    path: "/api/communications/v2/news",
    productionOrigin: "https://common-api.wildberries.ru",
    retrySafety: "safe",
    source: "https://dev.wildberries.ru/docs/openapi/api-information",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "general",
    methodName: "getV1SellerInfo",
    operationId: "getV1SellerInfo",
    method: "GET",
    path: "/api/v1/seller-info",
    productionOrigin: "https://common-api.wildberries.ru",
    retrySafety: "safe",
    source: "https://dev.wildberries.ru/docs/openapi/api-information",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "general",
    methodName: "getV1Rating",
    operationId: "getV1Rating",
    method: "GET",
    path: "/api/common/v1/rating",
    productionOrigin: "https://feedbacks-api.wildberries.ru",
    retrySafety: "safe",
    source: "https://dev.wildberries.ru/docs/openapi/api-information",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "general",
    methodName: "getV1Subscriptions",
    operationId: "getV1Subscriptions",
    method: "GET",
    path: "/api/common/v1/subscriptions",
    productionOrigin: "https://common-api.wildberries.ru",
    retrySafety: "safe",
    source: "https://dev.wildberries.ru/docs/openapi/api-information",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "general",
    methodName: "getV1TariffConstructorOptions",
    operationId: "getV1TariffConstructorOptions",
    method: "GET",
    path: "/api/common/v1/tariff-constructor/options",
    productionOrigin: "https://common-api.wildberries.ru",
    retrySafety: "safe",
    source: "https://dev.wildberries.ru/docs/openapi/api-information",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "general",
    methodName: "postV1Invite",
    operationId: "postV1Invite",
    method: "POST",
    path: "/api/v1/invite",
    productionOrigin: "https://user-management-api.wildberries.ru",
    retrySafety: "unsafe",
    source: "https://dev.wildberries.ru/docs/openapi/api-information",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "general",
    methodName: "getV1Users",
    operationId: "getV1Users",
    method: "GET",
    path: "/api/v1/users",
    productionOrigin: "https://user-management-api.wildberries.ru",
    retrySafety: "safe",
    source: "https://dev.wildberries.ru/docs/openapi/api-information",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "general",
    methodName: "putV1UsersAccess",
    operationId: "putV1UsersAccess",
    method: "PUT",
    path: "/api/v1/users/access",
    productionOrigin: "https://user-management-api.wildberries.ru",
    retrySafety: "unsafe",
    source: "https://dev.wildberries.ru/docs/openapi/api-information",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "general",
    methodName: "deleteV1User",
    operationId: "deleteV1User",
    method: "DELETE",
    path: "/api/v1/user",
    productionOrigin: "https://user-management-api.wildberries.ru",
    retrySafety: "unsafe",
    source: "https://dev.wildberries.ru/docs/openapi/api-information",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "items",
    methodName: "getContentV2ObjectParentAll",
    operationId: "GET /content/v2/object/parent/all",
    method: "GET",
    path: "/content/v2/object/parent/all",
    productionOrigin: "https://content-api.wildberries.ru",
    sandboxOrigin: "https://content-api-sandbox.wildberries.ru",
    retrySafety: "safe",
    source: "https://dev.wildberries.ru/docs/openapi/items",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "items",
    methodName: "getContentV2ObjectAll",
    operationId: "GET /content/v2/object/all",
    method: "GET",
    path: "/content/v2/object/all",
    productionOrigin: "https://content-api.wildberries.ru",
    sandboxOrigin: "https://content-api-sandbox.wildberries.ru",
    retrySafety: "safe",
    source: "https://dev.wildberries.ru/docs/openapi/items",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "items",
    methodName: "getContentV2ObjectCharcsSubjectId",
    operationId: "GET /content/v2/object/charcs/{subjectId}",
    method: "GET",
    path: "/content/v2/object/charcs/{subjectId}",
    productionOrigin: "https://content-api.wildberries.ru",
    sandboxOrigin: "https://content-api-sandbox.wildberries.ru",
    retrySafety: "safe",
    source: "https://dev.wildberries.ru/docs/openapi/items",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "items",
    methodName: "getContentV2DirectoryColors",
    operationId: "GET /content/v2/directory/colors",
    method: "GET",
    path: "/content/v2/directory/colors",
    productionOrigin: "https://content-api.wildberries.ru",
    sandboxOrigin: "https://content-api-sandbox.wildberries.ru",
    retrySafety: "safe",
    source: "https://dev.wildberries.ru/docs/openapi/items",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "items",
    methodName: "getContentV2DirectoryKinds",
    operationId: "GET /content/v2/directory/kinds",
    method: "GET",
    path: "/content/v2/directory/kinds",
    productionOrigin: "https://content-api.wildberries.ru",
    sandboxOrigin: "https://content-api-sandbox.wildberries.ru",
    retrySafety: "safe",
    source: "https://dev.wildberries.ru/docs/openapi/items",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "items",
    methodName: "getContentV2DirectoryCountries",
    operationId: "GET /content/v2/directory/countries",
    method: "GET",
    path: "/content/v2/directory/countries",
    productionOrigin: "https://content-api.wildberries.ru",
    sandboxOrigin: "https://content-api-sandbox.wildberries.ru",
    retrySafety: "safe",
    source: "https://dev.wildberries.ru/docs/openapi/items",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "items",
    methodName: "getContentV2DirectorySeasons",
    operationId: "GET /content/v2/directory/seasons",
    method: "GET",
    path: "/content/v2/directory/seasons",
    productionOrigin: "https://content-api.wildberries.ru",
    sandboxOrigin: "https://content-api-sandbox.wildberries.ru",
    retrySafety: "safe",
    source: "https://dev.wildberries.ru/docs/openapi/items",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "items",
    methodName: "getContentV2DirectoryVat",
    operationId: "GET /content/v2/directory/vat",
    method: "GET",
    path: "/content/v2/directory/vat",
    productionOrigin: "https://content-api.wildberries.ru",
    sandboxOrigin: "https://content-api-sandbox.wildberries.ru",
    retrySafety: "safe",
    source: "https://dev.wildberries.ru/docs/openapi/items",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "items",
    methodName: "getContentV2DirectoryTnved",
    operationId: "GET /content/v2/directory/tnved",
    method: "GET",
    path: "/content/v2/directory/tnved",
    productionOrigin: "https://content-api.wildberries.ru",
    sandboxOrigin: "https://content-api-sandbox.wildberries.ru",
    retrySafety: "safe",
    source: "https://dev.wildberries.ru/docs/openapi/items",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "items",
    methodName: "getApiContentV1Brands",
    operationId: "GET /api/content/v1/brands",
    method: "GET",
    path: "/api/content/v1/brands",
    productionOrigin: "https://content-api.wildberries.ru",
    retrySafety: "safe",
    source: "https://dev.wildberries.ru/docs/openapi/items",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "items",
    methodName: "getContentV2Tags",
    operationId: "GET /content/v2/tags",
    method: "GET",
    path: "/content/v2/tags",
    productionOrigin: "https://content-api.wildberries.ru",
    sandboxOrigin: "https://content-api-sandbox.wildberries.ru",
    retrySafety: "safe",
    source: "https://dev.wildberries.ru/docs/openapi/items",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "items",
    methodName: "postContentV2Tag",
    operationId: "POST /content/v2/tag",
    method: "POST",
    path: "/content/v2/tag",
    productionOrigin: "https://content-api.wildberries.ru",
    sandboxOrigin: "https://content-api-sandbox.wildberries.ru",
    retrySafety: "unsafe",
    source: "https://dev.wildberries.ru/docs/openapi/items",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "items",
    methodName: "patchContentV2TagId",
    operationId: "PATCH /content/v2/tag/{id}",
    method: "PATCH",
    path: "/content/v2/tag/{id}",
    productionOrigin: "https://content-api.wildberries.ru",
    sandboxOrigin: "https://content-api-sandbox.wildberries.ru",
    retrySafety: "unsafe",
    source: "https://dev.wildberries.ru/docs/openapi/items",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "items",
    methodName: "deleteContentV2TagId",
    operationId: "DELETE /content/v2/tag/{id}",
    method: "DELETE",
    path: "/content/v2/tag/{id}",
    productionOrigin: "https://content-api.wildberries.ru",
    sandboxOrigin: "https://content-api-sandbox.wildberries.ru",
    retrySafety: "unsafe",
    source: "https://dev.wildberries.ru/docs/openapi/items",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "items",
    methodName: "postContentV2TagNomenclatureLink",
    operationId: "POST /content/v2/tag/nomenclature/link",
    method: "POST",
    path: "/content/v2/tag/nomenclature/link",
    productionOrigin: "https://content-api.wildberries.ru",
    sandboxOrigin: "https://content-api-sandbox.wildberries.ru",
    retrySafety: "unsafe",
    source: "https://dev.wildberries.ru/docs/openapi/items",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "items",
    methodName: "postContentV2GetCardsList",
    operationId: "POST /content/v2/get/cards/list",
    method: "POST",
    path: "/content/v2/get/cards/list",
    productionOrigin: "https://content-api.wildberries.ru",
    sandboxOrigin: "https://content-api-sandbox.wildberries.ru",
    retrySafety: "safe",
    source: "https://dev.wildberries.ru/docs/openapi/items",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "items",
    methodName: "postContentV2CardsErrorList",
    operationId: "POST /content/v2/cards/error/list",
    method: "POST",
    path: "/content/v2/cards/error/list",
    productionOrigin: "https://content-api.wildberries.ru",
    sandboxOrigin: "https://content-api-sandbox.wildberries.ru",
    retrySafety: "safe",
    source: "https://dev.wildberries.ru/docs/openapi/items",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "items",
    methodName: "postContentV2CardsUpdate",
    operationId: "POST /content/v2/cards/update",
    method: "POST",
    path: "/content/v2/cards/update",
    productionOrigin: "https://content-api.wildberries.ru",
    sandboxOrigin: "https://content-api-sandbox.wildberries.ru",
    retrySafety: "unsafe",
    source: "https://dev.wildberries.ru/docs/openapi/items",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "items",
    methodName: "postContentV2CardsMoveNm",
    operationId: "POST /content/v2/cards/moveNm",
    method: "POST",
    path: "/content/v2/cards/moveNm",
    productionOrigin: "https://content-api.wildberries.ru",
    sandboxOrigin: "https://content-api-sandbox.wildberries.ru",
    retrySafety: "unsafe",
    source: "https://dev.wildberries.ru/docs/openapi/items",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "items",
    methodName: "postContentV2CardsDeleteTrash",
    operationId: "POST /content/v2/cards/delete/trash",
    method: "POST",
    path: "/content/v2/cards/delete/trash",
    productionOrigin: "https://content-api.wildberries.ru",
    sandboxOrigin: "https://content-api-sandbox.wildberries.ru",
    retrySafety: "unsafe",
    source: "https://dev.wildberries.ru/docs/openapi/items",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "items",
    methodName: "postContentV2CardsRecover",
    operationId: "POST /content/v2/cards/recover",
    method: "POST",
    path: "/content/v2/cards/recover",
    productionOrigin: "https://content-api.wildberries.ru",
    sandboxOrigin: "https://content-api-sandbox.wildberries.ru",
    retrySafety: "unsafe",
    source: "https://dev.wildberries.ru/docs/openapi/items",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "items",
    methodName: "postContentV2GetCardsTrash",
    operationId: "POST /content/v2/get/cards/trash",
    method: "POST",
    path: "/content/v2/get/cards/trash",
    productionOrigin: "https://content-api.wildberries.ru",
    sandboxOrigin: "https://content-api-sandbox.wildberries.ru",
    retrySafety: "safe",
    source: "https://dev.wildberries.ru/docs/openapi/items",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "items",
    methodName: "getContentV2CardsLimits",
    operationId: "GET /content/v2/cards/limits",
    method: "GET",
    path: "/content/v2/cards/limits",
    productionOrigin: "https://content-api.wildberries.ru",
    sandboxOrigin: "https://content-api-sandbox.wildberries.ru",
    retrySafety: "safe",
    source: "https://dev.wildberries.ru/docs/openapi/items",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "items",
    methodName: "postContentV2Barcodes",
    operationId: "POST /content/v2/barcodes",
    method: "POST",
    path: "/content/v2/barcodes",
    productionOrigin: "https://content-api.wildberries.ru",
    sandboxOrigin: "https://content-api-sandbox.wildberries.ru",
    retrySafety: "unsafe",
    source: "https://dev.wildberries.ru/docs/openapi/items",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "items",
    methodName: "postContentV2CardsUpload",
    operationId: "POST /content/v2/cards/upload",
    method: "POST",
    path: "/content/v2/cards/upload",
    productionOrigin: "https://content-api.wildberries.ru",
    sandboxOrigin: "https://content-api-sandbox.wildberries.ru",
    retrySafety: "unsafe",
    source: "https://dev.wildberries.ru/docs/openapi/items",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "items",
    methodName: "postContentV2CardsUploadAdd",
    operationId: "POST /content/v2/cards/upload/add",
    method: "POST",
    path: "/content/v2/cards/upload/add",
    productionOrigin: "https://content-api.wildberries.ru",
    sandboxOrigin: "https://content-api-sandbox.wildberries.ru",
    retrySafety: "unsafe",
    source: "https://dev.wildberries.ru/docs/openapi/items",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "items",
    methodName: "postContentV3MediaFile",
    operationId: "POST /content/v3/media/file",
    method: "POST",
    path: "/content/v3/media/file",
    productionOrigin: "https://content-api.wildberries.ru",
    sandboxOrigin: "https://content-api-sandbox.wildberries.ru",
    retrySafety: "unsafe",
    source: "https://dev.wildberries.ru/docs/openapi/items",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "items",
    methodName: "postContentV3MediaSave",
    operationId: "POST /content/v3/media/save",
    method: "POST",
    path: "/content/v3/media/save",
    productionOrigin: "https://content-api.wildberries.ru",
    sandboxOrigin: "https://content-api-sandbox.wildberries.ru",
    retrySafety: "unsafe",
    source: "https://dev.wildberries.ru/docs/openapi/items",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "items",
    methodName: "postV1RecommendationsList",
    operationId: "postV1RecommendationsList",
    method: "POST",
    path: "/api/content/v1/recommendations/list",
    productionOrigin: "https://content-api.wildberries.ru",
    retrySafety: "safe",
    source: "https://dev.wildberries.ru/docs/openapi/items",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "items",
    methodName: "postV1RecommendationsSet",
    operationId: "postV1RecommendationsSet",
    method: "POST",
    path: "/api/content/v1/recommendations/set",
    productionOrigin: "https://content-api.wildberries.ru",
    retrySafety: "unsafe",
    source: "https://dev.wildberries.ru/docs/openapi/items",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "items",
    methodName: "postApiV2UploadTask",
    operationId: "POST /api/v2/upload/task",
    method: "POST",
    path: "/api/v2/upload/task",
    productionOrigin: "https://discounts-prices-api.wildberries.ru",
    sandboxOrigin: "https://discounts-prices-api-sandbox.wildberries.ru",
    retrySafety: "unsafe",
    source: "https://dev.wildberries.ru/docs/openapi/items",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "items",
    methodName: "postApiV2UploadTaskSize",
    operationId: "POST /api/v2/upload/task/size",
    method: "POST",
    path: "/api/v2/upload/task/size",
    productionOrigin: "https://discounts-prices-api.wildberries.ru",
    sandboxOrigin: "https://discounts-prices-api-sandbox.wildberries.ru",
    retrySafety: "unsafe",
    source: "https://dev.wildberries.ru/docs/openapi/items",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "items",
    methodName: "postApiV2UploadTaskClubDiscount",
    operationId: "POST /api/v2/upload/task/club-discount",
    method: "POST",
    path: "/api/v2/upload/task/club-discount",
    productionOrigin: "https://discounts-prices-api.wildberries.ru",
    sandboxOrigin: "https://discounts-prices-api-sandbox.wildberries.ru",
    retrySafety: "unsafe",
    source: "https://dev.wildberries.ru/docs/openapi/items",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "items",
    methodName: "postV1UploadTaskB2bWholesale",
    operationId: "postV1UploadTaskB2bWholesale",
    method: "POST",
    path: "/api/discounts-prices/v1/upload/task/b2b/wholesale",
    productionOrigin: "https://discounts-prices-api.wildberries.ru",
    retrySafety: "unsafe",
    source: "https://dev.wildberries.ru/docs/openapi/items",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "items",
    methodName: "getApiV2HistoryTasks",
    operationId: "GET /api/v2/history/tasks",
    method: "GET",
    path: "/api/v2/history/tasks",
    productionOrigin: "https://discounts-prices-api.wildberries.ru",
    sandboxOrigin: "https://discounts-prices-api-sandbox.wildberries.ru",
    retrySafety: "safe",
    source: "https://dev.wildberries.ru/docs/openapi/items",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "items",
    methodName: "getApiV2HistoryGoodsTask",
    operationId: "GET /api/v2/history/goods/task",
    method: "GET",
    path: "/api/v2/history/goods/task",
    productionOrigin: "https://discounts-prices-api.wildberries.ru",
    sandboxOrigin: "https://discounts-prices-api-sandbox.wildberries.ru",
    retrySafety: "safe",
    source: "https://dev.wildberries.ru/docs/openapi/items",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "items",
    methodName: "getApiV2BufferTasks",
    operationId: "GET /api/v2/buffer/tasks",
    method: "GET",
    path: "/api/v2/buffer/tasks",
    productionOrigin: "https://discounts-prices-api.wildberries.ru",
    sandboxOrigin: "https://discounts-prices-api-sandbox.wildberries.ru",
    retrySafety: "safe",
    source: "https://dev.wildberries.ru/docs/openapi/items",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "items",
    methodName: "getApiV2BufferGoodsTask",
    operationId: "GET /api/v2/buffer/goods/task",
    method: "GET",
    path: "/api/v2/buffer/goods/task",
    productionOrigin: "https://discounts-prices-api.wildberries.ru",
    sandboxOrigin: "https://discounts-prices-api-sandbox.wildberries.ru",
    retrySafety: "safe",
    source: "https://dev.wildberries.ru/docs/openapi/items",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "items",
    methodName: "getApiV2ListGoodsFilter",
    operationId: "GET /api/v2/list/goods/filter",
    method: "GET",
    path: "/api/v2/list/goods/filter",
    productionOrigin: "https://discounts-prices-api.wildberries.ru",
    sandboxOrigin: "https://discounts-prices-api-sandbox.wildberries.ru",
    retrySafety: "safe",
    source: "https://dev.wildberries.ru/docs/openapi/items",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "items",
    methodName: "postApiV2ListGoodsFilter",
    operationId: "POST /api/v2/list/goods/filter",
    method: "POST",
    path: "/api/v2/list/goods/filter",
    productionOrigin: "https://discounts-prices-api.wildberries.ru",
    sandboxOrigin: "https://discounts-prices-api-sandbox.wildberries.ru",
    retrySafety: "safe",
    source: "https://dev.wildberries.ru/docs/openapi/items",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "items",
    methodName: "getApiV2ListGoodsSizeNm",
    operationId: "GET /api/v2/list/goods/size/nm",
    method: "GET",
    path: "/api/v2/list/goods/size/nm",
    productionOrigin: "https://discounts-prices-api.wildberries.ru",
    sandboxOrigin: "https://discounts-prices-api-sandbox.wildberries.ru",
    retrySafety: "safe",
    source: "https://dev.wildberries.ru/docs/openapi/items",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "items",
    methodName: "getApiV2QuarantineGoods",
    operationId: "GET /api/v2/quarantine/goods",
    method: "GET",
    path: "/api/v2/quarantine/goods",
    productionOrigin: "https://discounts-prices-api.wildberries.ru",
    sandboxOrigin: "https://discounts-prices-api-sandbox.wildberries.ru",
    retrySafety: "safe",
    source: "https://dev.wildberries.ru/docs/openapi/items",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "items",
    methodName: "putApiV3StocksWarehouseId",
    operationId: "PUT /api/v3/stocks/{warehouseId}",
    method: "PUT",
    path: "/api/v3/stocks/{warehouseId}",
    productionOrigin: "https://marketplace-api.wildberries.ru",
    sandboxOrigin: "https://marketplace-api-sandbox.wildberries.ru",
    retrySafety: "unsafe",
    source: "https://dev.wildberries.ru/docs/openapi/items",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "items",
    methodName: "deleteApiV3StocksWarehouseId",
    operationId: "DELETE /api/v3/stocks/{warehouseId}",
    method: "DELETE",
    path: "/api/v3/stocks/{warehouseId}",
    productionOrigin: "https://marketplace-api.wildberries.ru",
    sandboxOrigin: "https://marketplace-api-sandbox.wildberries.ru",
    retrySafety: "unsafe",
    source: "https://dev.wildberries.ru/docs/openapi/items",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "items",
    methodName: "postApiV3StocksWarehouseId",
    operationId: "POST /api/v3/stocks/{warehouseId}",
    method: "POST",
    path: "/api/v3/stocks/{warehouseId}",
    productionOrigin: "https://marketplace-api.wildberries.ru",
    sandboxOrigin: "https://marketplace-api-sandbox.wildberries.ru",
    retrySafety: "safe",
    source: "https://dev.wildberries.ru/docs/openapi/items",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "items",
    methodName: "getApiV3Offices",
    operationId: "GET /api/v3/offices",
    method: "GET",
    path: "/api/v3/offices",
    productionOrigin: "https://marketplace-api.wildberries.ru",
    sandboxOrigin: "https://marketplace-api-sandbox.wildberries.ru",
    retrySafety: "safe",
    source: "https://dev.wildberries.ru/docs/openapi/items",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "items",
    methodName: "getApiV3Warehouses",
    operationId: "GET /api/v3/warehouses",
    method: "GET",
    path: "/api/v3/warehouses",
    productionOrigin: "https://marketplace-api.wildberries.ru",
    sandboxOrigin: "https://marketplace-api-sandbox.wildberries.ru",
    retrySafety: "safe",
    source: "https://dev.wildberries.ru/docs/openapi/items",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "items",
    methodName: "postApiV3Warehouses",
    operationId: "POST /api/v3/warehouses",
    method: "POST",
    path: "/api/v3/warehouses",
    productionOrigin: "https://marketplace-api.wildberries.ru",
    sandboxOrigin: "https://marketplace-api-sandbox.wildberries.ru",
    retrySafety: "unsafe",
    source: "https://dev.wildberries.ru/docs/openapi/items",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "items",
    methodName: "putApiV3WarehousesWarehouseId",
    operationId: "PUT /api/v3/warehouses/{warehouseId}",
    method: "PUT",
    path: "/api/v3/warehouses/{warehouseId}",
    productionOrigin: "https://marketplace-api.wildberries.ru",
    sandboxOrigin: "https://marketplace-api-sandbox.wildberries.ru",
    retrySafety: "unsafe",
    source: "https://dev.wildberries.ru/docs/openapi/items",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "items",
    methodName: "deleteApiV3WarehousesWarehouseId",
    operationId: "DELETE /api/v3/warehouses/{warehouseId}",
    method: "DELETE",
    path: "/api/v3/warehouses/{warehouseId}",
    productionOrigin: "https://marketplace-api.wildberries.ru",
    sandboxOrigin: "https://marketplace-api-sandbox.wildberries.ru",
    retrySafety: "unsafe",
    source: "https://dev.wildberries.ru/docs/openapi/items",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "items",
    methodName: "getApiV3DbwWarehousesWarehouseIdContacts",
    operationId: "GET /api/v3/dbw/warehouses/{warehouseId}/contacts",
    method: "GET",
    path: "/api/v3/dbw/warehouses/{warehouseId}/contacts",
    productionOrigin: "https://marketplace-api.wildberries.ru",
    retrySafety: "safe",
    source: "https://dev.wildberries.ru/docs/openapi/items",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "items",
    methodName: "putApiV3DbwWarehousesWarehouseIdContacts",
    operationId: "PUT /api/v3/dbw/warehouses/{warehouseId}/contacts",
    method: "PUT",
    path: "/api/v3/dbw/warehouses/{warehouseId}/contacts",
    productionOrigin: "https://marketplace-api.wildberries.ru",
    retrySafety: "unsafe",
    source: "https://dev.wildberries.ru/docs/openapi/items",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "ordersFbs",
    methodName: "getApiV3PassesOffices",
    operationId: "GET /api/v3/passes/offices",
    method: "GET",
    path: "/api/v3/passes/offices",
    productionOrigin: "https://marketplace-api.wildberries.ru",
    sandboxOrigin: "https://marketplace-api-sandbox.wildberries.ru",
    retrySafety: "safe",
    source: "https://dev.wildberries.ru/docs/openapi/orders-fbs",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "ordersFbs",
    methodName: "getApiV3Passes",
    operationId: "GET /api/v3/passes",
    method: "GET",
    path: "/api/v3/passes",
    productionOrigin: "https://marketplace-api.wildberries.ru",
    sandboxOrigin: "https://marketplace-api-sandbox.wildberries.ru",
    retrySafety: "safe",
    source: "https://dev.wildberries.ru/docs/openapi/orders-fbs",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "ordersFbs",
    methodName: "postApiV3Passes",
    operationId: "POST /api/v3/passes",
    method: "POST",
    path: "/api/v3/passes",
    productionOrigin: "https://marketplace-api.wildberries.ru",
    sandboxOrigin: "https://marketplace-api-sandbox.wildberries.ru",
    retrySafety: "unsafe",
    source: "https://dev.wildberries.ru/docs/openapi/orders-fbs",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "ordersFbs",
    methodName: "putApiV3PassesPassId",
    operationId: "PUT /api/v3/passes/{passId}",
    method: "PUT",
    path: "/api/v3/passes/{passId}",
    productionOrigin: "https://marketplace-api.wildberries.ru",
    sandboxOrigin: "https://marketplace-api-sandbox.wildberries.ru",
    retrySafety: "unsafe",
    source: "https://dev.wildberries.ru/docs/openapi/orders-fbs",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "ordersFbs",
    methodName: "deleteApiV3PassesPassId",
    operationId: "DELETE /api/v3/passes/{passId}",
    method: "DELETE",
    path: "/api/v3/passes/{passId}",
    productionOrigin: "https://marketplace-api.wildberries.ru",
    sandboxOrigin: "https://marketplace-api-sandbox.wildberries.ru",
    retrySafety: "unsafe",
    source: "https://dev.wildberries.ru/docs/openapi/orders-fbs",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "ordersFbs",
    methodName: "getApiV3OrdersNew",
    operationId: "GET /api/v3/orders/new",
    method: "GET",
    path: "/api/v3/orders/new",
    productionOrigin: "https://marketplace-api.wildberries.ru",
    sandboxOrigin: "https://marketplace-api-sandbox.wildberries.ru",
    retrySafety: "safe",
    source: "https://dev.wildberries.ru/docs/openapi/orders-fbs",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "ordersFbs",
    methodName: "getApiV3Orders",
    operationId: "GET /api/v3/orders",
    method: "GET",
    path: "/api/v3/orders",
    productionOrigin: "https://marketplace-api.wildberries.ru",
    sandboxOrigin: "https://marketplace-api-sandbox.wildberries.ru",
    retrySafety: "safe",
    source: "https://dev.wildberries.ru/docs/openapi/orders-fbs",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "ordersFbs",
    methodName: "postApiV3OrdersStatus",
    operationId: "POST /api/v3/orders/status",
    method: "POST",
    path: "/api/v3/orders/status",
    productionOrigin: "https://marketplace-api.wildberries.ru",
    sandboxOrigin: "https://marketplace-api-sandbox.wildberries.ru",
    retrySafety: "safe",
    source: "https://dev.wildberries.ru/docs/openapi/orders-fbs",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "ordersFbs",
    methodName: "getApiV3SuppliesOrdersReshipment",
    operationId: "GET /api/v3/supplies/orders/reshipment",
    method: "GET",
    path: "/api/v3/supplies/orders/reshipment",
    productionOrigin: "https://marketplace-api.wildberries.ru",
    sandboxOrigin: "https://marketplace-api-sandbox.wildberries.ru",
    retrySafety: "safe",
    source: "https://dev.wildberries.ru/docs/openapi/orders-fbs",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "ordersFbs",
    methodName: "patchApiV3OrdersOrderIdCancel",
    operationId: "PATCH /api/v3/orders/{orderId}/cancel",
    method: "PATCH",
    path: "/api/v3/orders/{orderId}/cancel",
    productionOrigin: "https://marketplace-api.wildberries.ru",
    sandboxOrigin: "https://marketplace-api-sandbox.wildberries.ru",
    retrySafety: "unsafe",
    source: "https://dev.wildberries.ru/docs/openapi/orders-fbs",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "ordersFbs",
    methodName: "postApiV3OrdersStickers",
    operationId: "POST /api/v3/orders/stickers",
    method: "POST",
    path: "/api/v3/orders/stickers",
    productionOrigin: "https://marketplace-api.wildberries.ru",
    sandboxOrigin: "https://marketplace-api-sandbox.wildberries.ru",
    retrySafety: "safe",
    source: "https://dev.wildberries.ru/docs/openapi/orders-fbs",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "ordersFbs",
    methodName: "postApiMarketplaceV3OrdersMeta",
    operationId: "POST /api/marketplace/v3/orders/meta",
    method: "POST",
    path: "/api/marketplace/v3/orders/meta",
    productionOrigin: "https://marketplace-api.wildberries.ru",
    sandboxOrigin: "https://marketplace-api-sandbox.wildberries.ru",
    retrySafety: "safe",
    source: "https://dev.wildberries.ru/docs/openapi/orders-fbs",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "ordersFbs",
    methodName: "deleteApiV3OrdersOrderIdMeta",
    operationId: "DELETE /api/v3/orders/{orderId}/meta",
    method: "DELETE",
    path: "/api/v3/orders/{orderId}/meta",
    productionOrigin: "https://marketplace-api.wildberries.ru",
    sandboxOrigin: "https://marketplace-api-sandbox.wildberries.ru",
    retrySafety: "unsafe",
    source: "https://dev.wildberries.ru/docs/openapi/orders-fbs",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "ordersFbs",
    methodName: "putApiV3OrdersOrderIdMetaSgtin",
    operationId: "PUT /api/v3/orders/{orderId}/meta/sgtin",
    method: "PUT",
    path: "/api/v3/orders/{orderId}/meta/sgtin",
    productionOrigin: "https://marketplace-api.wildberries.ru",
    sandboxOrigin: "https://marketplace-api-sandbox.wildberries.ru",
    retrySafety: "unsafe",
    source: "https://dev.wildberries.ru/docs/openapi/orders-fbs",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "ordersFbs",
    methodName: "putApiV3OrdersOrderIdMetaUin",
    operationId: "PUT /api/v3/orders/{orderId}/meta/uin",
    method: "PUT",
    path: "/api/v3/orders/{orderId}/meta/uin",
    productionOrigin: "https://marketplace-api.wildberries.ru",
    sandboxOrigin: "https://marketplace-api-sandbox.wildberries.ru",
    retrySafety: "unsafe",
    source: "https://dev.wildberries.ru/docs/openapi/orders-fbs",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "ordersFbs",
    methodName: "putApiV3OrdersOrderIdMetaImei",
    operationId: "PUT /api/v3/orders/{orderId}/meta/imei",
    method: "PUT",
    path: "/api/v3/orders/{orderId}/meta/imei",
    productionOrigin: "https://marketplace-api.wildberries.ru",
    sandboxOrigin: "https://marketplace-api-sandbox.wildberries.ru",
    retrySafety: "unsafe",
    source: "https://dev.wildberries.ru/docs/openapi/orders-fbs",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "ordersFbs",
    methodName: "putApiV3OrdersOrderIdMetaGtin",
    operationId: "PUT /api/v3/orders/{orderId}/meta/gtin",
    method: "PUT",
    path: "/api/v3/orders/{orderId}/meta/gtin",
    productionOrigin: "https://marketplace-api.wildberries.ru",
    sandboxOrigin: "https://marketplace-api-sandbox.wildberries.ru",
    retrySafety: "unsafe",
    source: "https://dev.wildberries.ru/docs/openapi/orders-fbs",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "ordersFbs",
    methodName: "putApiV3OrdersOrderIdMetaExpiration",
    operationId: "PUT /api/v3/orders/{orderId}/meta/expiration",
    method: "PUT",
    path: "/api/v3/orders/{orderId}/meta/expiration",
    productionOrigin: "https://marketplace-api.wildberries.ru",
    sandboxOrigin: "https://marketplace-api-sandbox.wildberries.ru",
    retrySafety: "unsafe",
    source: "https://dev.wildberries.ru/docs/openapi/orders-fbs",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "ordersFbs",
    methodName: "putApiMarketplaceV3OrdersOrderIdMetaCustomsDeclaration",
    operationId:
      "PUT /api/marketplace/v3/orders/{orderId}/meta/customs-declaration",
    method: "PUT",
    path: "/api/marketplace/v3/orders/{orderId}/meta/customs-declaration",
    productionOrigin: "https://marketplace-api.wildberries.ru",
    sandboxOrigin: "https://marketplace-api-sandbox.wildberries.ru",
    retrySafety: "unsafe",
    source: "https://dev.wildberries.ru/docs/openapi/orders-fbs",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "ordersFbs",
    methodName: "postApiV3OrdersStickersCrossBorder",
    operationId: "POST /api/v3/orders/stickers/cross-border",
    method: "POST",
    path: "/api/v3/orders/stickers/cross-border",
    productionOrigin: "https://marketplace-api.wildberries.ru",
    retrySafety: "safe",
    source: "https://dev.wildberries.ru/docs/openapi/orders-fbs",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "ordersFbs",
    methodName: "postApiV3OrdersStatusHistory",
    operationId: "POST /api/v3/orders/status/history",
    method: "POST",
    path: "/api/v3/orders/status/history",
    productionOrigin: "https://marketplace-api.wildberries.ru",
    sandboxOrigin: "https://marketplace-api-sandbox.wildberries.ru",
    retrySafety: "safe",
    source: "https://dev.wildberries.ru/docs/openapi/orders-fbs",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "ordersFbs",
    methodName: "postApiV3OrdersClient",
    operationId: "POST /api/v3/orders/client",
    method: "POST",
    path: "/api/v3/orders/client",
    productionOrigin: "https://marketplace-api.wildberries.ru",
    sandboxOrigin: "https://marketplace-api-sandbox.wildberries.ru",
    retrySafety: "safe",
    source: "https://dev.wildberries.ru/docs/openapi/orders-fbs",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "ordersFbs",
    methodName: "postApiV3Supplies",
    operationId: "POST /api/v3/supplies",
    method: "POST",
    path: "/api/v3/supplies",
    productionOrigin: "https://marketplace-api.wildberries.ru",
    sandboxOrigin: "https://marketplace-api-sandbox.wildberries.ru",
    retrySafety: "unsafe",
    source: "https://dev.wildberries.ru/docs/openapi/orders-fbs",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "ordersFbs",
    methodName: "getApiV3Supplies",
    operationId: "GET /api/v3/supplies",
    method: "GET",
    path: "/api/v3/supplies",
    productionOrigin: "https://marketplace-api.wildberries.ru",
    sandboxOrigin: "https://marketplace-api-sandbox.wildberries.ru",
    retrySafety: "safe",
    source: "https://dev.wildberries.ru/docs/openapi/orders-fbs",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "ordersFbs",
    methodName: "patchApiMarketplaceV3SuppliesSupplyIdOrders",
    operationId: "PATCH /api/marketplace/v3/supplies/{supplyId}/orders",
    method: "PATCH",
    path: "/api/marketplace/v3/supplies/{supplyId}/orders",
    productionOrigin: "https://marketplace-api.wildberries.ru",
    sandboxOrigin: "https://marketplace-api-sandbox.wildberries.ru",
    retrySafety: "unsafe",
    source: "https://dev.wildberries.ru/docs/openapi/orders-fbs",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "ordersFbs",
    methodName: "getApiV3SuppliesSupplyId",
    operationId: "GET /api/v3/supplies/{supplyId}",
    method: "GET",
    path: "/api/v3/supplies/{supplyId}",
    productionOrigin: "https://marketplace-api.wildberries.ru",
    sandboxOrigin: "https://marketplace-api-sandbox.wildberries.ru",
    retrySafety: "safe",
    source: "https://dev.wildberries.ru/docs/openapi/orders-fbs",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "ordersFbs",
    methodName: "deleteApiV3SuppliesSupplyId",
    operationId: "DELETE /api/v3/supplies/{supplyId}",
    method: "DELETE",
    path: "/api/v3/supplies/{supplyId}",
    productionOrigin: "https://marketplace-api.wildberries.ru",
    sandboxOrigin: "https://marketplace-api-sandbox.wildberries.ru",
    retrySafety: "unsafe",
    source: "https://dev.wildberries.ru/docs/openapi/orders-fbs",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "ordersFbs",
    methodName: "getApiMarketplaceV3SuppliesSupplyIdOrderIds",
    operationId: "GET /api/marketplace/v3/supplies/{supplyId}/order-ids",
    method: "GET",
    path: "/api/marketplace/v3/supplies/{supplyId}/order-ids",
    productionOrigin: "https://marketplace-api.wildberries.ru",
    sandboxOrigin: "https://marketplace-api-sandbox.wildberries.ru",
    retrySafety: "safe",
    source: "https://dev.wildberries.ru/docs/openapi/orders-fbs",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "ordersFbs",
    methodName: "patchApiV3SuppliesSupplyIdDeliver",
    operationId: "PATCH /api/v3/supplies/{supplyId}/deliver",
    method: "PATCH",
    path: "/api/v3/supplies/{supplyId}/deliver",
    productionOrigin: "https://marketplace-api.wildberries.ru",
    sandboxOrigin: "https://marketplace-api-sandbox.wildberries.ru",
    retrySafety: "unsafe",
    source: "https://dev.wildberries.ru/docs/openapi/orders-fbs",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "ordersFbs",
    methodName: "getApiV3SuppliesSupplyIdBarcode",
    operationId: "GET /api/v3/supplies/{supplyId}/barcode",
    method: "GET",
    path: "/api/v3/supplies/{supplyId}/barcode",
    productionOrigin: "https://marketplace-api.wildberries.ru",
    sandboxOrigin: "https://marketplace-api-sandbox.wildberries.ru",
    retrySafety: "safe",
    source: "https://dev.wildberries.ru/docs/openapi/orders-fbs",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "ordersFbs",
    methodName: "getApiV3SuppliesSupplyIdTrbx",
    operationId: "GET /api/v3/supplies/{supplyId}/trbx",
    method: "GET",
    path: "/api/v3/supplies/{supplyId}/trbx",
    productionOrigin: "https://marketplace-api.wildberries.ru",
    sandboxOrigin: "https://marketplace-api-sandbox.wildberries.ru",
    retrySafety: "safe",
    source: "https://dev.wildberries.ru/docs/openapi/orders-fbs",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "ordersFbs",
    methodName: "postApiV3SuppliesSupplyIdTrbx",
    operationId: "POST /api/v3/supplies/{supplyId}/trbx",
    method: "POST",
    path: "/api/v3/supplies/{supplyId}/trbx",
    productionOrigin: "https://marketplace-api.wildberries.ru",
    sandboxOrigin: "https://marketplace-api-sandbox.wildberries.ru",
    retrySafety: "unsafe",
    source: "https://dev.wildberries.ru/docs/openapi/orders-fbs",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "ordersFbs",
    methodName: "deleteApiV3SuppliesSupplyIdTrbx",
    operationId: "DELETE /api/v3/supplies/{supplyId}/trbx",
    method: "DELETE",
    path: "/api/v3/supplies/{supplyId}/trbx",
    productionOrigin: "https://marketplace-api.wildberries.ru",
    sandboxOrigin: "https://marketplace-api-sandbox.wildberries.ru",
    retrySafety: "unsafe",
    source: "https://dev.wildberries.ru/docs/openapi/orders-fbs",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "ordersFbs",
    methodName: "postApiV3SuppliesSupplyIdTrbxStickers",
    operationId: "POST /api/v3/supplies/{supplyId}/trbx/stickers",
    method: "POST",
    path: "/api/v3/supplies/{supplyId}/trbx/stickers",
    productionOrigin: "https://marketplace-api.wildberries.ru",
    sandboxOrigin: "https://marketplace-api-sandbox.wildberries.ru",
    retrySafety: "safe",
    source: "https://dev.wildberries.ru/docs/openapi/orders-fbs",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "ordersFbs",
    methodName: "getApiMarketplaceV3FbsOrdersArchive",
    operationId: "GET /api/marketplace/v3/fbs/orders/archive",
    method: "GET",
    path: "/api/marketplace/v3/fbs/orders/archive",
    productionOrigin: "https://marketplace-api.wildberries.ru",
    retrySafety: "safe",
    source: "https://dev.wildberries.ru/docs/openapi/orders-fbs",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "ordersFbs",
    methodName: "getMarketplaceV3FbsSettingsAutoreturns",
    operationId: "getMarketplaceV3FbsSettingsAutoreturns",
    method: "GET",
    path: "/api/marketplace/v3/fbs/settings/autoreturns",
    productionOrigin: "https://marketplace-api.wildberries.ru",
    retrySafety: "safe",
    source: "https://dev.wildberries.ru/docs/openapi/orders-fbs",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "ordersFbs",
    methodName: "patchMarketplaceV3FbsSettingsAutoreturns",
    operationId: "patchMarketplaceV3FbsSettingsAutoreturns",
    method: "PATCH",
    path: "/api/marketplace/v3/fbs/settings/autoreturns",
    productionOrigin: "https://marketplace-api.wildberries.ru",
    retrySafety: "unsafe",
    source: "https://dev.wildberries.ru/docs/openapi/orders-fbs",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "ordersFbs",
    methodName: "postMarketplaceV3FbsSettingsAutoreturnsItems",
    operationId: "postMarketplaceV3FbsSettingsAutoreturnsItems",
    method: "POST",
    path: "/api/marketplace/v3/fbs/settings/autoreturns/items",
    productionOrigin: "https://marketplace-api.wildberries.ru",
    retrySafety: "safe",
    source: "https://dev.wildberries.ru/docs/openapi/orders-fbs",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "ordersFbs",
    methodName: "patchMarketplaceV3FbsSettingsAutoreturnsItems",
    operationId: "patchMarketplaceV3FbsSettingsAutoreturnsItems",
    method: "PATCH",
    path: "/api/marketplace/v3/fbs/settings/autoreturns/items",
    productionOrigin: "https://marketplace-api.wildberries.ru",
    retrySafety: "unsafe",
    source: "https://dev.wildberries.ru/docs/openapi/orders-fbs",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "ordersFbs",
    methodName: "getMarketplaceV3FbsSettingsAutoreturnsSubcategoriesRestricted",
    operationId:
      "getMarketplaceV3FbsSettingsAutoreturnsSubcategoriesRestricted",
    method: "GET",
    path: "/api/marketplace/v3/fbs/settings/autoreturns/subcategories/restricted",
    productionOrigin: "https://marketplace-api.wildberries.ru",
    retrySafety: "safe",
    source: "https://dev.wildberries.ru/docs/openapi/orders-fbs",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "ordersDbw",
    methodName: "getV3DbwOrdersNew",
    operationId: "getV3DbwOrdersNew",
    method: "GET",
    path: "/api/v3/dbw/orders/new",
    productionOrigin: "https://marketplace-api.wildberries.ru",
    retrySafety: "safe",
    source: "https://dev.wildberries.ru/docs/openapi/orders-dbw",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "ordersDbw",
    methodName: "getV3DbwOrders",
    operationId: "getV3DbwOrders",
    method: "GET",
    path: "/api/v3/dbw/orders",
    productionOrigin: "https://marketplace-api.wildberries.ru",
    retrySafety: "safe",
    source: "https://dev.wildberries.ru/docs/openapi/orders-dbw",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "ordersDbw",
    methodName: "postV3DbwOrdersDeliveryDate",
    operationId: "postV3DbwOrdersDeliveryDate",
    method: "POST",
    path: "/api/v3/dbw/orders/delivery-date",
    productionOrigin: "https://marketplace-api.wildberries.ru",
    retrySafety: "safe",
    source: "https://dev.wildberries.ru/docs/openapi/orders-dbw",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "ordersDbw",
    methodName: "postV3DbwOrdersClient",
    operationId: "postV3DbwOrdersClient",
    method: "POST",
    path: "/api/marketplace/v3/dbw/orders/client",
    productionOrigin: "https://marketplace-api.wildberries.ru",
    retrySafety: "safe",
    source: "https://dev.wildberries.ru/docs/openapi/orders-dbw",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "ordersDbw",
    methodName: "postV3DbwOrdersStatus",
    operationId: "postV3DbwOrdersStatus",
    method: "POST",
    path: "/api/v3/dbw/orders/status",
    productionOrigin: "https://marketplace-api.wildberries.ru",
    retrySafety: "safe",
    source: "https://dev.wildberries.ru/docs/openapi/orders-dbw",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "ordersDbw",
    methodName: "patchV3DbwOrdersOrderIdConfirm",
    operationId: "patchV3DbwOrdersOrderIdConfirm",
    method: "PATCH",
    path: "/api/v3/dbw/orders/{orderId}/confirm",
    productionOrigin: "https://marketplace-api.wildberries.ru",
    retrySafety: "unsafe",
    source: "https://dev.wildberries.ru/docs/openapi/orders-dbw",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "ordersDbw",
    methodName: "postV3DbwOrdersStickers",
    operationId: "postV3DbwOrdersStickers",
    method: "POST",
    path: "/api/v3/dbw/orders/stickers",
    productionOrigin: "https://marketplace-api.wildberries.ru",
    retrySafety: "safe",
    source: "https://dev.wildberries.ru/docs/openapi/orders-dbw",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "ordersDbw",
    methodName: "postV3DbwOrdersStatusDeliver",
    operationId: "postV3DbwOrdersStatusDeliver",
    method: "POST",
    path: "/api/marketplace/v3/dbw/orders/status/deliver",
    productionOrigin: "https://marketplace-api.wildberries.ru",
    retrySafety: "unsafe",
    source: "https://dev.wildberries.ru/docs/openapi/orders-dbw",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "ordersDbw",
    methodName: "postV3DbwOrdersCourier",
    operationId: "postV3DbwOrdersCourier",
    method: "POST",
    path: "/api/v3/dbw/orders/courier",
    productionOrigin: "https://marketplace-api.wildberries.ru",
    retrySafety: "safe",
    source: "https://dev.wildberries.ru/docs/openapi/orders-dbw",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "ordersDbw",
    methodName: "patchV3DbwOrdersOrderIdCancel",
    operationId: "patchV3DbwOrdersOrderIdCancel",
    method: "PATCH",
    path: "/api/v3/dbw/orders/{orderId}/cancel",
    productionOrigin: "https://marketplace-api.wildberries.ru",
    retrySafety: "unsafe",
    source: "https://dev.wildberries.ru/docs/openapi/orders-dbw",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "ordersDbw",
    methodName: "postV3DbwOrdersMetaDetails",
    operationId: "postV3DbwOrdersMetaDetails",
    method: "POST",
    path: "/api/marketplace/v3/dbw/orders/meta/details",
    productionOrigin: "https://marketplace-api.wildberries.ru",
    retrySafety: "safe",
    source: "https://dev.wildberries.ru/docs/openapi/orders-dbw",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "ordersDbw",
    methodName: "postV3DbwOrdersMetaDelete",
    operationId: "postV3DbwOrdersMetaDelete",
    method: "POST",
    path: "/api/marketplace/v3/dbw/orders/meta/delete",
    productionOrigin: "https://marketplace-api.wildberries.ru",
    retrySafety: "unsafe",
    source: "https://dev.wildberries.ru/docs/openapi/orders-dbw",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "ordersDbw",
    methodName: "postV3DbwOrdersMetaSgtin",
    operationId: "postV3DbwOrdersMetaSgtin",
    method: "POST",
    path: "/api/marketplace/v3/dbw/orders/meta/sgtin",
    productionOrigin: "https://marketplace-api.wildberries.ru",
    retrySafety: "unsafe",
    source: "https://dev.wildberries.ru/docs/openapi/orders-dbw",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "ordersDbw",
    methodName: "putV3DbwOrdersOrderIdMetaUin",
    operationId: "putV3DbwOrdersOrderIdMetaUin",
    method: "PUT",
    path: "/api/v3/dbw/orders/{orderId}/meta/uin",
    productionOrigin: "https://marketplace-api.wildberries.ru",
    retrySafety: "unsafe",
    source: "https://dev.wildberries.ru/docs/openapi/orders-dbw",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "ordersDbw",
    methodName: "putV3DbwOrdersOrderIdMetaImei",
    operationId: "putV3DbwOrdersOrderIdMetaImei",
    method: "PUT",
    path: "/api/v3/dbw/orders/{orderId}/meta/imei",
    productionOrigin: "https://marketplace-api.wildberries.ru",
    retrySafety: "unsafe",
    source: "https://dev.wildberries.ru/docs/openapi/orders-dbw",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "ordersDbw",
    methodName: "putV3DbwOrdersOrderIdMetaGtin",
    operationId: "putV3DbwOrdersOrderIdMetaGtin",
    method: "PUT",
    path: "/api/v3/dbw/orders/{orderId}/meta/gtin",
    productionOrigin: "https://marketplace-api.wildberries.ru",
    retrySafety: "unsafe",
    source: "https://dev.wildberries.ru/docs/openapi/orders-dbw",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "dbs",
    methodName: "getV3DbsOrdersNew",
    operationId: "getV3DbsOrdersNew",
    method: "GET",
    path: "/api/v3/dbs/orders/new",
    productionOrigin: "https://marketplace-api.wildberries.ru",
    sandboxOrigin: "https://marketplace-api-sandbox.wildberries.ru",
    retrySafety: "safe",
    source: "https://dev.wildberries.ru/docs/openapi/dbs",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "dbs",
    methodName: "getV3DbsOrders",
    operationId: "getV3DbsOrders",
    method: "GET",
    path: "/api/v3/dbs/orders",
    productionOrigin: "https://marketplace-api.wildberries.ru",
    sandboxOrigin: "https://marketplace-api-sandbox.wildberries.ru",
    retrySafety: "safe",
    source: "https://dev.wildberries.ru/docs/openapi/dbs",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "dbs",
    methodName: "postV3DbsOrdersFinalPrice",
    operationId: "postV3DbsOrdersFinalPrice",
    method: "POST",
    path: "/api/marketplace/v3/dbs/orders/final-price",
    productionOrigin: "https://marketplace-api.wildberries.ru",
    retrySafety: "safe",
    source: "https://dev.wildberries.ru/docs/openapi/dbs",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "dbs",
    methodName: "postV3DbsGroupsInfo",
    operationId: "postV3DbsGroupsInfo",
    method: "POST",
    path: "/api/v3/dbs/groups/info",
    productionOrigin: "https://marketplace-api.wildberries.ru",
    sandboxOrigin: "https://marketplace-api-sandbox.wildberries.ru",
    retrySafety: "safe",
    source: "https://dev.wildberries.ru/docs/openapi/dbs",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "dbs",
    methodName: "postV3DbsOrdersClient",
    operationId: "postV3DbsOrdersClient",
    method: "POST",
    path: "/api/v3/dbs/orders/client",
    productionOrigin: "https://marketplace-api.wildberries.ru",
    sandboxOrigin: "https://marketplace-api-sandbox.wildberries.ru",
    retrySafety: "safe",
    source: "https://dev.wildberries.ru/docs/openapi/dbs",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "dbs",
    methodName: "postV3DbsOrdersB2bInfo",
    operationId: "postV3DbsOrdersB2bInfo",
    method: "POST",
    path: "/api/marketplace/v3/dbs/orders/b2b/info",
    productionOrigin: "https://marketplace-api.wildberries.ru",
    retrySafety: "safe",
    source: "https://dev.wildberries.ru/docs/openapi/dbs",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "dbs",
    methodName: "postV3DbsOrdersDeliveryDate",
    operationId: "postV3DbsOrdersDeliveryDate",
    method: "POST",
    path: "/api/v3/dbs/orders/delivery-date",
    productionOrigin: "https://marketplace-api.wildberries.ru",
    sandboxOrigin: "https://marketplace-api-sandbox.wildberries.ru",
    retrySafety: "safe",
    source: "https://dev.wildberries.ru/docs/openapi/dbs",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "dbs",
    methodName: "postV3DbsOrdersStatusInfo",
    operationId: "postV3DbsOrdersStatusInfo",
    method: "POST",
    path: "/api/marketplace/v3/dbs/orders/status/info",
    productionOrigin: "https://marketplace-api.wildberries.ru",
    sandboxOrigin: "https://marketplace-api-sandbox.wildberries.ru",
    retrySafety: "safe",
    source: "https://dev.wildberries.ru/docs/openapi/dbs",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "dbs",
    methodName: "postV3DbsOrdersStatusCancel",
    operationId: "postV3DbsOrdersStatusCancel",
    method: "POST",
    path: "/api/marketplace/v3/dbs/orders/status/cancel",
    productionOrigin: "https://marketplace-api.wildberries.ru",
    sandboxOrigin: "https://marketplace-api-sandbox.wildberries.ru",
    retrySafety: "unsafe",
    source: "https://dev.wildberries.ru/docs/openapi/dbs",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "dbs",
    methodName: "postV3DbsOrdersStatusConfirm",
    operationId: "postV3DbsOrdersStatusConfirm",
    method: "POST",
    path: "/api/marketplace/v3/dbs/orders/status/confirm",
    productionOrigin: "https://marketplace-api.wildberries.ru",
    sandboxOrigin: "https://marketplace-api-sandbox.wildberries.ru",
    retrySafety: "unsafe",
    source: "https://dev.wildberries.ru/docs/openapi/dbs",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "dbs",
    methodName: "postV3DbsOrdersStickers",
    operationId: "postV3DbsOrdersStickers",
    method: "POST",
    path: "/api/marketplace/v3/dbs/orders/stickers",
    productionOrigin: "https://marketplace-api.wildberries.ru",
    retrySafety: "safe",
    source: "https://dev.wildberries.ru/docs/openapi/dbs",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "dbs",
    methodName: "postV3DbsOrdersStatusDeliver",
    operationId: "postV3DbsOrdersStatusDeliver",
    method: "POST",
    path: "/api/marketplace/v3/dbs/orders/status/deliver",
    productionOrigin: "https://marketplace-api.wildberries.ru",
    sandboxOrigin: "https://marketplace-api-sandbox.wildberries.ru",
    retrySafety: "unsafe",
    source: "https://dev.wildberries.ru/docs/openapi/dbs",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "dbs",
    methodName: "postV3DbsOrdersStatusReceive",
    operationId: "postV3DbsOrdersStatusReceive",
    method: "POST",
    path: "/api/marketplace/v3/dbs/orders/status/receive",
    productionOrigin: "https://marketplace-api.wildberries.ru",
    sandboxOrigin: "https://marketplace-api-sandbox.wildberries.ru",
    retrySafety: "unsafe",
    source: "https://dev.wildberries.ru/docs/openapi/dbs",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "dbs",
    methodName: "postV3DbsOrdersStatusReject",
    operationId: "postV3DbsOrdersStatusReject",
    method: "POST",
    path: "/api/marketplace/v3/dbs/orders/status/reject",
    productionOrigin: "https://marketplace-api.wildberries.ru",
    sandboxOrigin: "https://marketplace-api-sandbox.wildberries.ru",
    retrySafety: "unsafe",
    source: "https://dev.wildberries.ru/docs/openapi/dbs",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "dbs",
    methodName: "postV3DbsOrdersMetaDetails",
    operationId: "postV3DbsOrdersMetaDetails",
    method: "POST",
    path: "/api/marketplace/v3/dbs/orders/meta/details",
    productionOrigin: "https://marketplace-api.wildberries.ru",
    retrySafety: "safe",
    source: "https://dev.wildberries.ru/docs/openapi/dbs",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "dbs",
    methodName: "postV3DbsOrdersMetaDelete",
    operationId: "postV3DbsOrdersMetaDelete",
    method: "POST",
    path: "/api/marketplace/v3/dbs/orders/meta/delete",
    productionOrigin: "https://marketplace-api.wildberries.ru",
    sandboxOrigin: "https://marketplace-api-sandbox.wildberries.ru",
    retrySafety: "unsafe",
    source: "https://dev.wildberries.ru/docs/openapi/dbs",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "dbs",
    methodName: "postV3DbsOrdersMetaSgtin",
    operationId: "postV3DbsOrdersMetaSgtin",
    method: "POST",
    path: "/api/marketplace/v3/dbs/orders/meta/sgtin",
    productionOrigin: "https://marketplace-api.wildberries.ru",
    sandboxOrigin: "https://marketplace-api-sandbox.wildberries.ru",
    retrySafety: "unsafe",
    source: "https://dev.wildberries.ru/docs/openapi/dbs",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "dbs",
    methodName: "postV3DbsOrdersMetaUin",
    operationId: "postV3DbsOrdersMetaUin",
    method: "POST",
    path: "/api/marketplace/v3/dbs/orders/meta/uin",
    productionOrigin: "https://marketplace-api.wildberries.ru",
    sandboxOrigin: "https://marketplace-api-sandbox.wildberries.ru",
    retrySafety: "unsafe",
    source: "https://dev.wildberries.ru/docs/openapi/dbs",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "dbs",
    methodName: "postV3DbsOrdersMetaImei",
    operationId: "postV3DbsOrdersMetaImei",
    method: "POST",
    path: "/api/marketplace/v3/dbs/orders/meta/imei",
    productionOrigin: "https://marketplace-api.wildberries.ru",
    sandboxOrigin: "https://marketplace-api-sandbox.wildberries.ru",
    retrySafety: "unsafe",
    source: "https://dev.wildberries.ru/docs/openapi/dbs",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "dbs",
    methodName: "postV3DbsOrdersMetaGtin",
    operationId: "postV3DbsOrdersMetaGtin",
    method: "POST",
    path: "/api/marketplace/v3/dbs/orders/meta/gtin",
    productionOrigin: "https://marketplace-api.wildberries.ru",
    sandboxOrigin: "https://marketplace-api-sandbox.wildberries.ru",
    retrySafety: "unsafe",
    source: "https://dev.wildberries.ru/docs/openapi/dbs",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "dbs",
    methodName: "postV3DbsOrdersMetaCustomsDeclaration",
    operationId: "postV3DbsOrdersMetaCustomsDeclaration",
    method: "POST",
    path: "/api/marketplace/v3/dbs/orders/meta/customs-declaration",
    productionOrigin: "https://marketplace-api.wildberries.ru",
    sandboxOrigin: "https://marketplace-api-sandbox.wildberries.ru",
    retrySafety: "unsafe",
    source: "https://dev.wildberries.ru/docs/openapi/dbs",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "inStorePickup",
    methodName: "getV3ClickCollectOrdersNew",
    operationId: "getV3ClickCollectOrdersNew",
    method: "GET",
    path: "/api/v3/click-collect/orders/new",
    productionOrigin: "https://marketplace-api.wildberries.ru",
    sandboxOrigin: "https://marketplace-api-sandbox.wildberries.ru",
    retrySafety: "safe",
    source: "https://dev.wildberries.ru/docs/openapi/in-store-pickup",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "inStorePickup",
    methodName: "getV3ClickCollectOrders",
    operationId: "getV3ClickCollectOrders",
    method: "GET",
    path: "/api/v3/click-collect/orders",
    productionOrigin: "https://marketplace-api.wildberries.ru",
    sandboxOrigin: "https://marketplace-api-sandbox.wildberries.ru",
    retrySafety: "safe",
    source: "https://dev.wildberries.ru/docs/openapi/in-store-pickup",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "inStorePickup",
    methodName: "postV3ClickCollectOrdersFinalPrice",
    operationId: "postV3ClickCollectOrdersFinalPrice",
    method: "POST",
    path: "/api/marketplace/v3/click-collect/orders/final-price",
    productionOrigin: "https://marketplace-api.wildberries.ru",
    retrySafety: "safe",
    source: "https://dev.wildberries.ru/docs/openapi/in-store-pickup",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "inStorePickup",
    methodName: "postV3ClickCollectOrdersStatusConfirm",
    operationId: "postV3ClickCollectOrdersStatusConfirm",
    method: "POST",
    path: "/api/marketplace/v3/click-collect/orders/status/confirm",
    productionOrigin: "https://marketplace-api.wildberries.ru",
    sandboxOrigin: "https://marketplace-api-sandbox.wildberries.ru",
    retrySafety: "unsafe",
    source: "https://dev.wildberries.ru/docs/openapi/in-store-pickup",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "inStorePickup",
    methodName: "postV3ClickCollectOrdersStatusPrepare",
    operationId: "postV3ClickCollectOrdersStatusPrepare",
    method: "POST",
    path: "/api/marketplace/v3/click-collect/orders/status/prepare",
    productionOrigin: "https://marketplace-api.wildberries.ru",
    sandboxOrigin: "https://marketplace-api-sandbox.wildberries.ru",
    retrySafety: "unsafe",
    source: "https://dev.wildberries.ru/docs/openapi/in-store-pickup",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "inStorePickup",
    methodName: "postV3ClickCollectOrdersClient",
    operationId: "postV3ClickCollectOrdersClient",
    method: "POST",
    path: "/api/v3/click-collect/orders/client",
    productionOrigin: "https://marketplace-api.wildberries.ru",
    sandboxOrigin: "https://marketplace-api-sandbox.wildberries.ru",
    retrySafety: "safe",
    source: "https://dev.wildberries.ru/docs/openapi/in-store-pickup",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "inStorePickup",
    methodName: "postV3ClickCollectOrdersClientIdentity",
    operationId: "postV3ClickCollectOrdersClientIdentity",
    method: "POST",
    path: "/api/v3/click-collect/orders/client/identity",
    productionOrigin: "https://marketplace-api.wildberries.ru",
    sandboxOrigin: "https://marketplace-api-sandbox.wildberries.ru",
    retrySafety: "safe",
    source: "https://dev.wildberries.ru/docs/openapi/in-store-pickup",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "inStorePickup",
    methodName: "postV3ClickCollectOrdersStatusReceive",
    operationId: "postV3ClickCollectOrdersStatusReceive",
    method: "POST",
    path: "/api/marketplace/v3/click-collect/orders/status/receive",
    productionOrigin: "https://marketplace-api.wildberries.ru",
    sandboxOrigin: "https://marketplace-api-sandbox.wildberries.ru",
    retrySafety: "unsafe",
    source: "https://dev.wildberries.ru/docs/openapi/in-store-pickup",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "inStorePickup",
    methodName: "postV3ClickCollectOrdersStatusReject",
    operationId: "postV3ClickCollectOrdersStatusReject",
    method: "POST",
    path: "/api/marketplace/v3/click-collect/orders/status/reject",
    productionOrigin: "https://marketplace-api.wildberries.ru",
    sandboxOrigin: "https://marketplace-api-sandbox.wildberries.ru",
    retrySafety: "unsafe",
    source: "https://dev.wildberries.ru/docs/openapi/in-store-pickup",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "inStorePickup",
    methodName: "postV3ClickCollectOrdersStatusInfo",
    operationId: "postV3ClickCollectOrdersStatusInfo",
    method: "POST",
    path: "/api/marketplace/v3/click-collect/orders/status/info",
    productionOrigin: "https://marketplace-api.wildberries.ru",
    sandboxOrigin: "https://marketplace-api-sandbox.wildberries.ru",
    retrySafety: "safe",
    source: "https://dev.wildberries.ru/docs/openapi/in-store-pickup",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "inStorePickup",
    methodName: "postV3ClickCollectOrdersStatusCancel",
    operationId: "postV3ClickCollectOrdersStatusCancel",
    method: "POST",
    path: "/api/marketplace/v3/click-collect/orders/status/cancel",
    productionOrigin: "https://marketplace-api.wildberries.ru",
    sandboxOrigin: "https://marketplace-api-sandbox.wildberries.ru",
    retrySafety: "unsafe",
    source: "https://dev.wildberries.ru/docs/openapi/in-store-pickup",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "inStorePickup",
    methodName: "postV3ClickCollectOrdersMetaDetails",
    operationId: "postV3ClickCollectOrdersMetaDetails",
    method: "POST",
    path: "/api/marketplace/v3/click-collect/orders/meta/details",
    productionOrigin: "https://marketplace-api.wildberries.ru",
    retrySafety: "safe",
    source: "https://dev.wildberries.ru/docs/openapi/in-store-pickup",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "inStorePickup",
    methodName: "postV3ClickCollectOrdersMetaDelete",
    operationId: "postV3ClickCollectOrdersMetaDelete",
    method: "POST",
    path: "/api/marketplace/v3/click-collect/orders/meta/delete",
    productionOrigin: "https://marketplace-api.wildberries.ru",
    sandboxOrigin: "https://marketplace-api-sandbox.wildberries.ru",
    retrySafety: "unsafe",
    source: "https://dev.wildberries.ru/docs/openapi/in-store-pickup",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "inStorePickup",
    methodName: "postV3ClickCollectOrdersMetaSgtin",
    operationId: "postV3ClickCollectOrdersMetaSgtin",
    method: "POST",
    path: "/api/marketplace/v3/click-collect/orders/meta/sgtin",
    productionOrigin: "https://marketplace-api.wildberries.ru",
    sandboxOrigin: "https://marketplace-api-sandbox.wildberries.ru",
    retrySafety: "unsafe",
    source: "https://dev.wildberries.ru/docs/openapi/in-store-pickup",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "inStorePickup",
    methodName: "postV3ClickCollectOrdersMetaUin",
    operationId: "postV3ClickCollectOrdersMetaUin",
    method: "POST",
    path: "/api/marketplace/v3/click-collect/orders/meta/uin",
    productionOrigin: "https://marketplace-api.wildberries.ru",
    sandboxOrigin: "https://marketplace-api-sandbox.wildberries.ru",
    retrySafety: "unsafe",
    source: "https://dev.wildberries.ru/docs/openapi/in-store-pickup",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "inStorePickup",
    methodName: "postV3ClickCollectOrdersMetaImei",
    operationId: "postV3ClickCollectOrdersMetaImei",
    method: "POST",
    path: "/api/marketplace/v3/click-collect/orders/meta/imei",
    productionOrigin: "https://marketplace-api.wildberries.ru",
    sandboxOrigin: "https://marketplace-api-sandbox.wildberries.ru",
    retrySafety: "unsafe",
    source: "https://dev.wildberries.ru/docs/openapi/in-store-pickup",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "inStorePickup",
    methodName: "postV3ClickCollectOrdersMetaGtin",
    operationId: "postV3ClickCollectOrdersMetaGtin",
    method: "POST",
    path: "/api/marketplace/v3/click-collect/orders/meta/gtin",
    productionOrigin: "https://marketplace-api.wildberries.ru",
    sandboxOrigin: "https://marketplace-api-sandbox.wildberries.ru",
    retrySafety: "unsafe",
    source: "https://dev.wildberries.ru/docs/openapi/in-store-pickup",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "inStorePickup",
    methodName: "postV3ClickCollectOrdersMetaCustomsDeclaration",
    operationId: "postV3ClickCollectOrdersMetaCustomsDeclaration",
    method: "POST",
    path: "/api/marketplace/v3/click-collect/orders/meta/customs-declaration",
    productionOrigin: "https://marketplace-api.wildberries.ru",
    retrySafety: "unsafe",
    source: "https://dev.wildberries.ru/docs/openapi/in-store-pickup",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "ordersFbw",
    methodName: "postV1AcceptanceOptions",
    operationId: "postV1AcceptanceOptions",
    method: "POST",
    path: "/api/v1/acceptance/options",
    productionOrigin: "https://supplies-api.wildberries.ru",
    sandboxOrigin: "https://supplies-api-sandbox.wildberries.ru",
    retrySafety: "safe",
    source: "https://dev.wildberries.ru/docs/openapi/orders-fbw",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "ordersFbw",
    methodName: "getV1Warehouses",
    operationId: "getV1Warehouses",
    method: "GET",
    path: "/api/v1/warehouses",
    productionOrigin: "https://supplies-api.wildberries.ru",
    sandboxOrigin: "https://supplies-api-sandbox.wildberries.ru",
    retrySafety: "safe",
    source: "https://dev.wildberries.ru/docs/openapi/orders-fbw",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "ordersFbw",
    methodName: "getV1TransitTariffs",
    operationId: "getV1TransitTariffs",
    method: "GET",
    path: "/api/v1/transit-tariffs",
    productionOrigin: "https://supplies-api.wildberries.ru",
    retrySafety: "safe",
    source: "https://dev.wildberries.ru/docs/openapi/orders-fbw",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "ordersFbw",
    methodName: "postV1Supplies",
    operationId: "postV1Supplies",
    method: "POST",
    path: "/api/v1/supplies",
    productionOrigin: "https://supplies-api.wildberries.ru",
    retrySafety: "safe",
    source: "https://dev.wildberries.ru/docs/openapi/orders-fbw",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "ordersFbw",
    methodName: "getV1SuppliesId",
    operationId: "getV1SuppliesId",
    method: "GET",
    path: "/api/v1/supplies/{ID}",
    productionOrigin: "https://supplies-api.wildberries.ru",
    retrySafety: "safe",
    source: "https://dev.wildberries.ru/docs/openapi/orders-fbw",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "ordersFbw",
    methodName: "getV1SuppliesIdGoods",
    operationId: "getV1SuppliesIdGoods",
    method: "GET",
    path: "/api/v1/supplies/{ID}/goods",
    productionOrigin: "https://supplies-api.wildberries.ru",
    retrySafety: "safe",
    source: "https://dev.wildberries.ru/docs/openapi/orders-fbw",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "ordersFbw",
    methodName: "getV1SuppliesIdPackage",
    operationId: "getV1SuppliesIdPackage",
    method: "GET",
    path: "/api/v1/supplies/{ID}/package",
    productionOrigin: "https://supplies-api.wildberries.ru",
    retrySafety: "safe",
    source: "https://dev.wildberries.ru/docs/openapi/orders-fbw",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "promotion",
    methodName: "getV1PromotionCount",
    operationId: "getV1PromotionCount",
    method: "GET",
    path: "/adv/v1/promotion/count",
    productionOrigin: "https://advert-api.wildberries.ru",
    sandboxOrigin: "https://advert-api-sandbox.wildberries.ru",
    retrySafety: "safe",
    source: "https://dev.wildberries.ru/docs/openapi/promotion",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "promotion",
    methodName: "getV2Adverts",
    operationId: "getV2Adverts",
    method: "GET",
    path: "/api/advert/v2/adverts",
    productionOrigin: "https://advert-api.wildberries.ru",
    retrySafety: "safe",
    source: "https://dev.wildberries.ru/docs/openapi/promotion",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "promotion",
    methodName: "postV1BidsMin",
    operationId: "postV1BidsMin",
    method: "POST",
    path: "/api/advert/v1/bids/min",
    productionOrigin: "https://advert-api.wildberries.ru",
    retrySafety: "safe",
    source: "https://dev.wildberries.ru/docs/openapi/promotion",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "promotion",
    methodName: "postV2SeacatSaveAd",
    operationId: "postV2SeacatSaveAd",
    method: "POST",
    path: "/adv/v2/seacat/save-ad",
    productionOrigin: "https://advert-api.wildberries.ru",
    sandboxOrigin: "https://advert-api-sandbox.wildberries.ru",
    retrySafety: "unsafe",
    source: "https://dev.wildberries.ru/docs/openapi/promotion",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "promotion",
    methodName: "getV1SupplierSubjects",
    operationId: "getV1SupplierSubjects",
    method: "GET",
    path: "/adv/v1/supplier/subjects",
    productionOrigin: "https://advert-api.wildberries.ru",
    sandboxOrigin: "https://advert-api-sandbox.wildberries.ru",
    retrySafety: "safe",
    source: "https://dev.wildberries.ru/docs/openapi/promotion",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "promotion",
    methodName: "postV2SupplierNms",
    operationId: "postV2SupplierNms",
    method: "POST",
    path: "/adv/v2/supplier/nms",
    productionOrigin: "https://advert-api.wildberries.ru",
    sandboxOrigin: "https://advert-api-sandbox.wildberries.ru",
    retrySafety: "safe",
    source: "https://dev.wildberries.ru/docs/openapi/promotion",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "promotion",
    methodName: "getV0Delete",
    operationId: "getV0Delete",
    method: "GET",
    path: "/adv/v0/delete",
    productionOrigin: "https://advert-api.wildberries.ru",
    sandboxOrigin: "https://advert-api-sandbox.wildberries.ru",
    retrySafety: "safe",
    source: "https://dev.wildberries.ru/docs/openapi/promotion",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "promotion",
    methodName: "postV0Rename",
    operationId: "postV0Rename",
    method: "POST",
    path: "/adv/v0/rename",
    productionOrigin: "https://advert-api.wildberries.ru",
    sandboxOrigin: "https://advert-api-sandbox.wildberries.ru",
    retrySafety: "unsafe",
    source: "https://dev.wildberries.ru/docs/openapi/promotion",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "promotion",
    methodName: "getV0Start",
    operationId: "getV0Start",
    method: "GET",
    path: "/adv/v0/start",
    productionOrigin: "https://advert-api.wildberries.ru",
    sandboxOrigin: "https://advert-api-sandbox.wildberries.ru",
    retrySafety: "safe",
    source: "https://dev.wildberries.ru/docs/openapi/promotion",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "promotion",
    methodName: "getV0Pause",
    operationId: "getV0Pause",
    method: "GET",
    path: "/adv/v0/pause",
    productionOrigin: "https://advert-api.wildberries.ru",
    sandboxOrigin: "https://advert-api-sandbox.wildberries.ru",
    retrySafety: "safe",
    source: "https://dev.wildberries.ru/docs/openapi/promotion",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "promotion",
    methodName: "getV0Stop",
    operationId: "getV0Stop",
    method: "GET",
    path: "/adv/v0/stop",
    productionOrigin: "https://advert-api.wildberries.ru",
    sandboxOrigin: "https://advert-api-sandbox.wildberries.ru",
    retrySafety: "safe",
    source: "https://dev.wildberries.ru/docs/openapi/promotion",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "promotion",
    methodName: "putV0AuctionPlacements",
    operationId: "putV0AuctionPlacements",
    method: "PUT",
    path: "/adv/v0/auction/placements",
    productionOrigin: "https://advert-api.wildberries.ru",
    retrySafety: "unsafe",
    source: "https://dev.wildberries.ru/docs/openapi/promotion",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "promotion",
    methodName: "patchV1Bids",
    operationId: "patchV1Bids",
    method: "PATCH",
    path: "/api/advert/v1/bids",
    productionOrigin: "https://advert-api.wildberries.ru",
    retrySafety: "unsafe",
    source: "https://dev.wildberries.ru/docs/openapi/promotion",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "promotion",
    methodName: "getV1Balance",
    operationId: "getV1Balance",
    method: "GET",
    path: "/adv/v1/balance",
    productionOrigin: "https://advert-api.wildberries.ru",
    sandboxOrigin: "https://advert-api-sandbox.wildberries.ru",
    retrySafety: "safe",
    source: "https://dev.wildberries.ru/docs/openapi/promotion",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "promotion",
    methodName: "getV1Budget",
    operationId: "getV1Budget",
    method: "GET",
    path: "/adv/v1/budget",
    productionOrigin: "https://advert-api.wildberries.ru",
    sandboxOrigin: "https://advert-api-sandbox.wildberries.ru",
    retrySafety: "safe",
    source: "https://dev.wildberries.ru/docs/openapi/promotion",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "promotion",
    methodName: "postV1BudgetDeposit",
    operationId: "postV1BudgetDeposit",
    method: "POST",
    path: "/adv/v1/budget/deposit",
    productionOrigin: "https://advert-api.wildberries.ru",
    sandboxOrigin: "https://advert-api-sandbox.wildberries.ru",
    retrySafety: "unsafe",
    source: "https://dev.wildberries.ru/docs/openapi/promotion",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "promotion",
    methodName: "getV1Upd",
    operationId: "getV1Upd",
    method: "GET",
    path: "/adv/v1/upd",
    productionOrigin: "https://advert-api.wildberries.ru",
    sandboxOrigin: "https://advert-api-sandbox.wildberries.ru",
    retrySafety: "safe",
    source: "https://dev.wildberries.ru/docs/openapi/promotion",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "promotion",
    methodName: "getV1Payments",
    operationId: "getV1Payments",
    method: "GET",
    path: "/adv/v1/payments",
    productionOrigin: "https://advert-api.wildberries.ru",
    sandboxOrigin: "https://advert-api-sandbox.wildberries.ru",
    retrySafety: "safe",
    source: "https://dev.wildberries.ru/docs/openapi/promotion",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "promotion",
    methodName: "patchV0AuctionNms",
    operationId: "patchV0AuctionNms",
    method: "PATCH",
    path: "/adv/v0/auction/nms",
    productionOrigin: "https://advert-api.wildberries.ru",
    retrySafety: "unsafe",
    source: "https://dev.wildberries.ru/docs/openapi/promotion",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "promotion",
    methodName: "getV0BidsRecommendations",
    operationId: "getV0BidsRecommendations",
    method: "GET",
    path: "/api/advert/v0/bids/recommendations",
    productionOrigin: "https://advert-api.wildberries.ru",
    retrySafety: "safe",
    source: "https://dev.wildberries.ru/docs/openapi/promotion",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "promotion",
    methodName: "postV0NormqueryStats",
    operationId: "postV0NormqueryStats",
    method: "POST",
    path: "/adv/v0/normquery/stats",
    productionOrigin: "https://advert-api.wildberries.ru",
    retrySafety: "safe",
    source: "https://dev.wildberries.ru/docs/openapi/promotion",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "promotion",
    methodName: "postV0NormqueryGetBids",
    operationId: "postV0NormqueryGetBids",
    method: "POST",
    path: "/adv/v0/normquery/get-bids",
    productionOrigin: "https://advert-api.wildberries.ru",
    retrySafety: "safe",
    source: "https://dev.wildberries.ru/docs/openapi/promotion",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "promotion",
    methodName: "getV1Config",
    operationId: "getV1Config",
    method: "GET",
    path: "/api/advert/v1/config",
    productionOrigin: "https://advert-api.wildberries.ru",
    retrySafety: "safe",
    source: "https://dev.wildberries.ru/docs/openapi/promotion",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "promotion",
    methodName: "postV1NormqueryBids",
    operationId: "postV1NormqueryBids",
    method: "POST",
    path: "/api/advert/v1/normquery/bids",
    productionOrigin: "https://advert-api.wildberries.ru",
    retrySafety: "unsafe",
    source: "https://dev.wildberries.ru/docs/openapi/promotion",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "promotion",
    methodName: "postV0NormqueryBids",
    operationId: "postV0NormqueryBids",
    method: "POST",
    path: "/adv/v0/normquery/bids",
    productionOrigin: "https://advert-api.wildberries.ru",
    retrySafety: "unsafe",
    source: "https://dev.wildberries.ru/docs/openapi/promotion",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "promotion",
    methodName: "deleteV0NormqueryBids",
    operationId: "deleteV0NormqueryBids",
    method: "DELETE",
    path: "/adv/v0/normquery/bids",
    productionOrigin: "https://advert-api.wildberries.ru",
    retrySafety: "unsafe",
    source: "https://dev.wildberries.ru/docs/openapi/promotion",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "promotion",
    methodName: "postV0NormqueryGetMinus",
    operationId: "postV0NormqueryGetMinus",
    method: "POST",
    path: "/adv/v0/normquery/get-minus",
    productionOrigin: "https://advert-api.wildberries.ru",
    retrySafety: "safe",
    source: "https://dev.wildberries.ru/docs/openapi/promotion",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "promotion",
    methodName: "postV0NormquerySetMinus",
    operationId: "postV0NormquerySetMinus",
    method: "POST",
    path: "/adv/v0/normquery/set-minus",
    productionOrigin: "https://advert-api.wildberries.ru",
    retrySafety: "unsafe",
    source: "https://dev.wildberries.ru/docs/openapi/promotion",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "promotion",
    methodName: "getV1Count",
    operationId: "getV1Count",
    method: "GET",
    path: "/adv/v1/count",
    productionOrigin: "https://advert-media-api.wildberries.ru",
    retrySafety: "safe",
    source: "https://dev.wildberries.ru/docs/openapi/promotion",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "promotion",
    methodName: "getV1Adverts",
    operationId: "getV1Adverts",
    method: "GET",
    path: "/adv/v1/adverts",
    productionOrigin: "https://advert-media-api.wildberries.ru",
    retrySafety: "safe",
    source: "https://dev.wildberries.ru/docs/openapi/promotion",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "promotion",
    methodName: "getV1Advert",
    operationId: "getV1Advert",
    method: "GET",
    path: "/adv/v1/advert",
    productionOrigin: "https://advert-media-api.wildberries.ru",
    retrySafety: "safe",
    source: "https://dev.wildberries.ru/docs/openapi/promotion",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "promotion",
    methodName: "getV3Fullstats",
    operationId: "getV3Fullstats",
    method: "GET",
    path: "/adv/v3/fullstats",
    productionOrigin: "https://advert-api.wildberries.ru",
    retrySafety: "safe",
    source: "https://dev.wildberries.ru/docs/openapi/promotion",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "promotion",
    methodName: "postV1Stats",
    operationId: "postV1Stats",
    method: "POST",
    path: "/adv/v1/stats",
    productionOrigin: "https://advert-media-api.wildberries.ru",
    retrySafety: "safe",
    source: "https://dev.wildberries.ru/docs/openapi/promotion",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "promotion",
    methodName: "getV1CalendarPromotions",
    operationId: "getV1CalendarPromotions",
    method: "GET",
    path: "/api/v1/calendar/promotions",
    productionOrigin: "https://dp-calendar-api.wildberries.ru",
    retrySafety: "safe",
    source: "https://dev.wildberries.ru/docs/openapi/promotion",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "promotion",
    methodName: "getV1CalendarPromotionsDetails",
    operationId: "getV1CalendarPromotionsDetails",
    method: "GET",
    path: "/api/v1/calendar/promotions/details",
    productionOrigin: "https://dp-calendar-api.wildberries.ru",
    retrySafety: "safe",
    source: "https://dev.wildberries.ru/docs/openapi/promotion",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "promotion",
    methodName: "getV1CalendarPromotionsNomenclatures",
    operationId: "getV1CalendarPromotionsNomenclatures",
    method: "GET",
    path: "/api/v1/calendar/promotions/nomenclatures",
    productionOrigin: "https://dp-calendar-api.wildberries.ru",
    retrySafety: "safe",
    source: "https://dev.wildberries.ru/docs/openapi/promotion",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "promotion",
    methodName: "postV1CalendarPromotionsUpload",
    operationId: "postV1CalendarPromotionsUpload",
    method: "POST",
    path: "/api/v1/calendar/promotions/upload",
    productionOrigin: "https://dp-calendar-api.wildberries.ru",
    retrySafety: "unsafe",
    source: "https://dev.wildberries.ru/docs/openapi/promotion",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "promotion",
    methodName: "postV0NormqueryList",
    operationId: "postV0NormqueryList",
    method: "POST",
    path: "/adv/v0/normquery/list",
    productionOrigin: "https://advert-api.wildberries.ru",
    retrySafety: "safe",
    source: "https://dev.wildberries.ru/docs/openapi/promotion",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "promotion",
    methodName: "postV1NormqueryStats",
    operationId: "postV1NormqueryStats",
    method: "POST",
    path: "/adv/v1/normquery/stats",
    productionOrigin: "https://advert-api.wildberries.ru",
    retrySafety: "safe",
    source: "https://dev.wildberries.ru/docs/openapi/promotion",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "communications",
    methodName: "getV1NewFeedbacksQuestions",
    operationId: "getV1NewFeedbacksQuestions",
    method: "GET",
    path: "/api/v1/new-feedbacks-questions",
    productionOrigin: "https://feedbacks-api.wildberries.ru",
    sandboxOrigin: "https://feedbacks-api-sandbox.wildberries.ru",
    retrySafety: "safe",
    source: "https://dev.wildberries.ru/docs/openapi/communications",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "communications",
    methodName: "getV1QuestionsCountUnanswered",
    operationId: "getV1QuestionsCountUnanswered",
    method: "GET",
    path: "/api/v1/questions/count-unanswered",
    productionOrigin: "https://feedbacks-api.wildberries.ru",
    sandboxOrigin: "https://feedbacks-api-sandbox.wildberries.ru",
    retrySafety: "safe",
    source: "https://dev.wildberries.ru/docs/openapi/communications",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "communications",
    methodName: "getV1QuestionsCount",
    operationId: "getV1QuestionsCount",
    method: "GET",
    path: "/api/v1/questions/count",
    productionOrigin: "https://feedbacks-api.wildberries.ru",
    sandboxOrigin: "https://feedbacks-api-sandbox.wildberries.ru",
    retrySafety: "safe",
    source: "https://dev.wildberries.ru/docs/openapi/communications",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "communications",
    methodName: "getV1Questions",
    operationId: "getV1Questions",
    method: "GET",
    path: "/api/v1/questions",
    productionOrigin: "https://feedbacks-api.wildberries.ru",
    sandboxOrigin: "https://feedbacks-api-sandbox.wildberries.ru",
    retrySafety: "safe",
    source: "https://dev.wildberries.ru/docs/openapi/communications",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "communications",
    methodName: "patchV1Questions",
    operationId: "patchV1Questions",
    method: "PATCH",
    path: "/api/v1/questions",
    productionOrigin: "https://feedbacks-api.wildberries.ru",
    sandboxOrigin: "https://feedbacks-api-sandbox.wildberries.ru",
    retrySafety: "unsafe",
    source: "https://dev.wildberries.ru/docs/openapi/communications",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "communications",
    methodName: "getV1Question",
    operationId: "getV1Question",
    method: "GET",
    path: "/api/v1/question",
    productionOrigin: "https://feedbacks-api.wildberries.ru",
    sandboxOrigin: "https://feedbacks-api-sandbox.wildberries.ru",
    retrySafety: "safe",
    source: "https://dev.wildberries.ru/docs/openapi/communications",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "communications",
    methodName: "getV1FeedbacksCountUnanswered",
    operationId: "getV1FeedbacksCountUnanswered",
    method: "GET",
    path: "/api/v1/feedbacks/count-unanswered",
    productionOrigin: "https://feedbacks-api.wildberries.ru",
    sandboxOrigin: "https://feedbacks-api-sandbox.wildberries.ru",
    retrySafety: "safe",
    source: "https://dev.wildberries.ru/docs/openapi/communications",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "communications",
    methodName: "getV1FeedbacksCount",
    operationId: "getV1FeedbacksCount",
    method: "GET",
    path: "/api/v1/feedbacks/count",
    productionOrigin: "https://feedbacks-api.wildberries.ru",
    sandboxOrigin: "https://feedbacks-api-sandbox.wildberries.ru",
    retrySafety: "safe",
    source: "https://dev.wildberries.ru/docs/openapi/communications",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "communications",
    methodName: "getV1Feedbacks",
    operationId: "getV1Feedbacks",
    method: "GET",
    path: "/api/v1/feedbacks",
    productionOrigin: "https://feedbacks-api.wildberries.ru",
    sandboxOrigin: "https://feedbacks-api-sandbox.wildberries.ru",
    retrySafety: "safe",
    source: "https://dev.wildberries.ru/docs/openapi/communications",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "communications",
    methodName: "postV1FeedbacksAnswer",
    operationId: "postV1FeedbacksAnswer",
    method: "POST",
    path: "/api/v1/feedbacks/answer",
    productionOrigin: "https://feedbacks-api.wildberries.ru",
    sandboxOrigin: "https://feedbacks-api-sandbox.wildberries.ru",
    retrySafety: "unsafe",
    source: "https://dev.wildberries.ru/docs/openapi/communications",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "communications",
    methodName: "patchV1FeedbacksAnswer",
    operationId: "patchV1FeedbacksAnswer",
    method: "PATCH",
    path: "/api/v1/feedbacks/answer",
    productionOrigin: "https://feedbacks-api.wildberries.ru",
    sandboxOrigin: "https://feedbacks-api-sandbox.wildberries.ru",
    retrySafety: "unsafe",
    source: "https://dev.wildberries.ru/docs/openapi/communications",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "communications",
    methodName: "postV1FeedbacksOrderReturn",
    operationId: "postV1FeedbacksOrderReturn",
    method: "POST",
    path: "/api/v1/feedbacks/order/return",
    productionOrigin: "https://feedbacks-api.wildberries.ru",
    sandboxOrigin: "https://feedbacks-api-sandbox.wildberries.ru",
    retrySafety: "unsafe",
    source: "https://dev.wildberries.ru/docs/openapi/communications",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "communications",
    methodName: "getV1Feedback",
    operationId: "getV1Feedback",
    method: "GET",
    path: "/api/v1/feedback",
    productionOrigin: "https://feedbacks-api.wildberries.ru",
    sandboxOrigin: "https://feedbacks-api-sandbox.wildberries.ru",
    retrySafety: "safe",
    source: "https://dev.wildberries.ru/docs/openapi/communications",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "communications",
    methodName: "getV1FeedbacksArchive",
    operationId: "getV1FeedbacksArchive",
    method: "GET",
    path: "/api/v1/feedbacks/archive",
    productionOrigin: "https://feedbacks-api.wildberries.ru",
    sandboxOrigin: "https://feedbacks-api-sandbox.wildberries.ru",
    retrySafety: "safe",
    source: "https://dev.wildberries.ru/docs/openapi/communications",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "communications",
    methodName: "getFeedbacksV1Pins",
    operationId: "getFeedbacksV1Pins",
    method: "GET",
    path: "/api/feedbacks/v1/pins",
    productionOrigin: "https://feedbacks-api.wildberries.ru",
    retrySafety: "safe",
    source: "https://dev.wildberries.ru/docs/openapi/communications",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "communications",
    methodName: "postFeedbacksV1Pins",
    operationId: "postFeedbacksV1Pins",
    method: "POST",
    path: "/api/feedbacks/v1/pins",
    productionOrigin: "https://feedbacks-api.wildberries.ru",
    retrySafety: "unsafe",
    source: "https://dev.wildberries.ru/docs/openapi/communications",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "communications",
    methodName: "deleteFeedbacksV1Pins",
    operationId: "deleteFeedbacksV1Pins",
    method: "DELETE",
    path: "/api/feedbacks/v1/pins",
    productionOrigin: "https://feedbacks-api.wildberries.ru",
    retrySafety: "unsafe",
    source: "https://dev.wildberries.ru/docs/openapi/communications",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "communications",
    methodName: "getFeedbacksV1PinsCount",
    operationId: "getFeedbacksV1PinsCount",
    method: "GET",
    path: "/api/feedbacks/v1/pins/count",
    productionOrigin: "https://feedbacks-api.wildberries.ru",
    retrySafety: "safe",
    source: "https://dev.wildberries.ru/docs/openapi/communications",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "communications",
    methodName: "getFeedbacksV1PinsLimits",
    operationId: "getFeedbacksV1PinsLimits",
    method: "GET",
    path: "/api/feedbacks/v1/pins/limits",
    productionOrigin: "https://feedbacks-api.wildberries.ru",
    retrySafety: "safe",
    source: "https://dev.wildberries.ru/docs/openapi/communications",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "communications",
    methodName: "getV1SellerChats",
    operationId: "getV1SellerChats",
    method: "GET",
    path: "/api/v1/seller/chats",
    productionOrigin: "https://buyer-chat-api.wildberries.ru",
    retrySafety: "safe",
    source: "https://dev.wildberries.ru/docs/openapi/communications",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "communications",
    methodName: "getV1SellerEvents",
    operationId: "getV1SellerEvents",
    method: "GET",
    path: "/api/v1/seller/events",
    productionOrigin: "https://buyer-chat-api.wildberries.ru",
    retrySafety: "safe",
    source: "https://dev.wildberries.ru/docs/openapi/communications",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "communications",
    methodName: "postV1SellerMessage",
    operationId: "postV1SellerMessage",
    method: "POST",
    path: "/api/v1/seller/message",
    productionOrigin: "https://buyer-chat-api.wildberries.ru",
    retrySafety: "unsafe",
    source: "https://dev.wildberries.ru/docs/openapi/communications",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "communications",
    methodName: "getV1SellerDownloadId",
    operationId: "getV1SellerDownloadId",
    method: "GET",
    path: "/api/v1/seller/download/{id}",
    productionOrigin: "https://buyer-chat-api.wildberries.ru",
    retrySafety: "safe",
    source: "https://dev.wildberries.ru/docs/openapi/communications",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "communications",
    methodName: "getV1Claims",
    operationId: "getV1Claims",
    method: "GET",
    path: "/api/v1/claims",
    productionOrigin: "https://returns-api.wildberries.ru",
    retrySafety: "safe",
    source: "https://dev.wildberries.ru/docs/openapi/communications",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "communications",
    methodName: "patchV1Claim",
    operationId: "patchV1Claim",
    method: "PATCH",
    path: "/api/v1/claim",
    productionOrigin: "https://returns-api.wildberries.ru",
    retrySafety: "unsafe",
    source: "https://dev.wildberries.ru/docs/openapi/communications",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "rates",
    methodName: "getV1TariffsCommission",
    operationId: "getV1TariffsCommission",
    method: "GET",
    path: "/api/v1/tariffs/commission",
    productionOrigin: "https://common-api.wildberries.ru",
    retrySafety: "safe",
    source: "https://dev.wildberries.ru/docs/openapi/rates",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "rates",
    methodName: "getV1AcceptanceCoefficients",
    operationId: "getV1AcceptanceCoefficients",
    method: "GET",
    path: "/api/tariffs/v1/acceptance/coefficients",
    productionOrigin: "https://common-api.wildberries.ru",
    retrySafety: "safe",
    source: "https://dev.wildberries.ru/docs/openapi/rates",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "rates",
    methodName: "getV1TariffsBox",
    operationId: "getV1TariffsBox",
    method: "GET",
    path: "/api/v1/tariffs/box",
    productionOrigin: "https://common-api.wildberries.ru",
    retrySafety: "safe",
    source: "https://dev.wildberries.ru/docs/openapi/rates",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "rates",
    methodName: "getV1TariffsPallet",
    operationId: "getV1TariffsPallet",
    method: "GET",
    path: "/api/v1/tariffs/pallet",
    productionOrigin: "https://common-api.wildberries.ru",
    retrySafety: "safe",
    source: "https://dev.wildberries.ru/docs/openapi/rates",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "rates",
    methodName: "getV1TariffsReturn",
    operationId: "getV1TariffsReturn",
    method: "GET",
    path: "/api/v1/tariffs/return",
    productionOrigin: "https://common-api.wildberries.ru",
    retrySafety: "safe",
    source: "https://dev.wildberries.ru/docs/openapi/rates",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "analytics",
    methodName: "postV3SalesFunnelProducts",
    operationId: "postV3SalesFunnelProducts",
    method: "POST",
    path: "/api/analytics/v3/sales-funnel/products",
    productionOrigin: "https://seller-analytics-api.wildberries.ru",
    retrySafety: "safe",
    source: "https://dev.wildberries.ru/docs/openapi/analytics",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "analytics",
    methodName: "postV3SalesFunnelProductsHistory",
    operationId: "postV3SalesFunnelProductsHistory",
    method: "POST",
    path: "/api/analytics/v3/sales-funnel/products/history",
    productionOrigin: "https://seller-analytics-api.wildberries.ru",
    retrySafety: "safe",
    source: "https://dev.wildberries.ru/docs/openapi/analytics",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "analytics",
    methodName: "postV3SalesFunnelGroupedHistory",
    operationId: "postV3SalesFunnelGroupedHistory",
    method: "POST",
    path: "/api/analytics/v3/sales-funnel/grouped/history",
    productionOrigin: "https://seller-analytics-api.wildberries.ru",
    retrySafety: "safe",
    source: "https://dev.wildberries.ru/docs/openapi/analytics",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "analytics",
    methodName: "postV2NmReportDownloads",
    operationId: "postV2NmReportDownloads",
    method: "POST",
    path: "/api/v2/nm-report/downloads",
    productionOrigin: "https://seller-analytics-api.wildberries.ru",
    retrySafety: "safe",
    source: "https://dev.wildberries.ru/docs/openapi/analytics",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "analytics",
    methodName: "getV2NmReportDownloads",
    operationId: "getV2NmReportDownloads",
    method: "GET",
    path: "/api/v2/nm-report/downloads",
    productionOrigin: "https://seller-analytics-api.wildberries.ru",
    retrySafety: "safe",
    source: "https://dev.wildberries.ru/docs/openapi/analytics",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "analytics",
    methodName: "postV2NmReportDownloadsRetry",
    operationId: "postV2NmReportDownloadsRetry",
    method: "POST",
    path: "/api/v2/nm-report/downloads/retry",
    productionOrigin: "https://seller-analytics-api.wildberries.ru",
    retrySafety: "safe",
    source: "https://dev.wildberries.ru/docs/openapi/analytics",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "analytics",
    methodName: "getV2NmReportDownloadsFileDownloadId",
    operationId: "getV2NmReportDownloadsFileDownloadId",
    method: "GET",
    path: "/api/v2/nm-report/downloads/file/{downloadId}",
    productionOrigin: "https://seller-analytics-api.wildberries.ru",
    retrySafety: "safe",
    source: "https://dev.wildberries.ru/docs/openapi/analytics",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "analytics",
    methodName: "postV2SearchReportReport",
    operationId: "postV2SearchReportReport",
    method: "POST",
    path: "/api/v2/search-report/report",
    productionOrigin: "https://seller-analytics-api.wildberries.ru",
    retrySafety: "safe",
    source: "https://dev.wildberries.ru/docs/openapi/analytics",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "analytics",
    methodName: "postV2SearchReportTableGroups",
    operationId: "postV2SearchReportTableGroups",
    method: "POST",
    path: "/api/v2/search-report/table/groups",
    productionOrigin: "https://seller-analytics-api.wildberries.ru",
    retrySafety: "safe",
    source: "https://dev.wildberries.ru/docs/openapi/analytics",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "analytics",
    methodName: "postV2SearchReportTableDetails",
    operationId: "postV2SearchReportTableDetails",
    method: "POST",
    path: "/api/v2/search-report/table/details",
    productionOrigin: "https://seller-analytics-api.wildberries.ru",
    retrySafety: "safe",
    source: "https://dev.wildberries.ru/docs/openapi/analytics",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "analytics",
    methodName: "postV2SearchReportProductSearchTexts",
    operationId: "postV2SearchReportProductSearchTexts",
    method: "POST",
    path: "/api/v2/search-report/product/search-texts",
    productionOrigin: "https://seller-analytics-api.wildberries.ru",
    retrySafety: "safe",
    source: "https://dev.wildberries.ru/docs/openapi/analytics",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "analytics",
    methodName: "postV2SearchReportProductOrders",
    operationId: "postV2SearchReportProductOrders",
    method: "POST",
    path: "/api/v2/search-report/product/orders",
    productionOrigin: "https://seller-analytics-api.wildberries.ru",
    retrySafety: "safe",
    source: "https://dev.wildberries.ru/docs/openapi/analytics",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "analytics",
    methodName: "postV1StocksReportWbWarehouses",
    operationId: "postV1StocksReportWbWarehouses",
    method: "POST",
    path: "/api/analytics/v1/stocks-report/wb-warehouses",
    productionOrigin: "https://seller-analytics-api.wildberries.ru",
    retrySafety: "safe",
    source: "https://dev.wildberries.ru/docs/openapi/analytics",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "analytics",
    methodName: "postV2StocksReportProductsGroups",
    operationId: "postV2StocksReportProductsGroups",
    method: "POST",
    path: "/api/v2/stocks-report/products/groups",
    productionOrigin: "https://seller-analytics-api.wildberries.ru",
    retrySafety: "safe",
    source: "https://dev.wildberries.ru/docs/openapi/analytics",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "analytics",
    methodName: "postV2StocksReportProductsProducts",
    operationId: "postV2StocksReportProductsProducts",
    method: "POST",
    path: "/api/v2/stocks-report/products/products",
    productionOrigin: "https://seller-analytics-api.wildberries.ru",
    retrySafety: "safe",
    source: "https://dev.wildberries.ru/docs/openapi/analytics",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "analytics",
    methodName: "postV2StocksReportProductsSizes",
    operationId: "postV2StocksReportProductsSizes",
    method: "POST",
    path: "/api/v2/stocks-report/products/sizes",
    productionOrigin: "https://seller-analytics-api.wildberries.ru",
    retrySafety: "safe",
    source: "https://dev.wildberries.ru/docs/openapi/analytics",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "analytics",
    methodName: "postV2StocksReportOffices",
    operationId: "postV2StocksReportOffices",
    method: "POST",
    path: "/api/v2/stocks-report/offices",
    productionOrigin: "https://seller-analytics-api.wildberries.ru",
    retrySafety: "safe",
    source: "https://dev.wildberries.ru/docs/openapi/analytics",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "analytics",
    methodName: "postV2ItemRating",
    operationId: "postV2ItemRating",
    method: "POST",
    path: "/api/analytics/v2/item-rating",
    productionOrigin: "https://seller-analytics-api.wildberries.ru",
    retrySafety: "safe",
    source: "https://dev.wildberries.ru/docs/openapi/analytics",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "analytics",
    methodName: "postV1OrderFeed",
    operationId: "postV1OrderFeed",
    method: "POST",
    path: "/api/analytics/v1/order-feed",
    productionOrigin: "https://seller-analytics-api.wildberries.ru",
    retrySafety: "safe",
    source: "https://dev.wildberries.ru/docs/openapi/analytics",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "reports",
    methodName: "getV1SupplierOrders",
    operationId: "getV1SupplierOrders",
    method: "GET",
    path: "/api/v1/supplier/orders",
    productionOrigin: "https://statistics-api.wildberries.ru",
    sandboxOrigin: "https://statistics-api-sandbox.wildberries.ru",
    retrySafety: "safe",
    source: "https://dev.wildberries.ru/docs/openapi/reports",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "reports",
    methodName: "getV1SupplierSales",
    operationId: "getV1SupplierSales",
    method: "GET",
    path: "/api/v1/supplier/sales",
    productionOrigin: "https://statistics-api.wildberries.ru",
    sandboxOrigin: "https://statistics-api-sandbox.wildberries.ru",
    retrySafety: "safe",
    source: "https://dev.wildberries.ru/docs/openapi/reports",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "reports",
    methodName: "postV1AnalyticsExciseReport",
    operationId: "postV1AnalyticsExciseReport",
    method: "POST",
    path: "/api/v1/analytics/excise-report",
    productionOrigin: "https://seller-analytics-api.wildberries.ru",
    retrySafety: "safe",
    source: "https://dev.wildberries.ru/docs/openapi/reports",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "reports",
    methodName: "getV1WarehouseRemains",
    operationId: "getV1WarehouseRemains",
    method: "GET",
    path: "/api/v1/warehouse_remains",
    productionOrigin: "https://seller-analytics-api.wildberries.ru",
    retrySafety: "safe",
    source: "https://dev.wildberries.ru/docs/openapi/reports",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "reports",
    methodName: "getV1WarehouseRemainsTasksTaskIdStatus",
    operationId: "getV1WarehouseRemainsTasksTaskIdStatus",
    method: "GET",
    path: "/api/v1/warehouse_remains/tasks/{task_id}/status",
    productionOrigin: "https://seller-analytics-api.wildberries.ru",
    retrySafety: "safe",
    source: "https://dev.wildberries.ru/docs/openapi/reports",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "reports",
    methodName: "getV1WarehouseRemainsTasksTaskIdDownload",
    operationId: "getV1WarehouseRemainsTasksTaskIdDownload",
    method: "GET",
    path: "/api/v1/warehouse_remains/tasks/{task_id}/download",
    productionOrigin: "https://seller-analytics-api.wildberries.ru",
    retrySafety: "safe",
    source: "https://dev.wildberries.ru/docs/openapi/reports",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "reports",
    methodName: "getV1MeasurementPenalties",
    operationId: "getV1MeasurementPenalties",
    method: "GET",
    path: "/api/analytics/v1/measurement-penalties",
    productionOrigin: "https://seller-analytics-api.wildberries.ru",
    retrySafety: "safe",
    source: "https://dev.wildberries.ru/docs/openapi/reports",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "reports",
    methodName: "getV1WarehouseMeasurements",
    operationId: "getV1WarehouseMeasurements",
    method: "GET",
    path: "/api/analytics/v1/warehouse-measurements",
    productionOrigin: "https://seller-analytics-api.wildberries.ru",
    retrySafety: "safe",
    source: "https://dev.wildberries.ru/docs/openapi/reports",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "reports",
    methodName: "getV1Deductions",
    operationId: "getV1Deductions",
    method: "GET",
    path: "/api/analytics/v1/deductions",
    productionOrigin: "https://seller-analytics-api.wildberries.ru",
    retrySafety: "safe",
    source: "https://dev.wildberries.ru/docs/openapi/reports",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "reports",
    methodName: "getV1AnalyticsAntifraudDetails",
    operationId: "getV1AnalyticsAntifraudDetails",
    method: "GET",
    path: "/api/v1/analytics/antifraud-details",
    productionOrigin: "https://seller-analytics-api.wildberries.ru",
    retrySafety: "safe",
    source: "https://dev.wildberries.ru/docs/openapi/reports",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "reports",
    methodName: "getV1AnalyticsGoodsLabeling",
    operationId: "getV1AnalyticsGoodsLabeling",
    method: "GET",
    path: "/api/v1/analytics/goods-labeling",
    productionOrigin: "https://seller-analytics-api.wildberries.ru",
    retrySafety: "safe",
    source: "https://dev.wildberries.ru/docs/openapi/reports",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "reports",
    methodName: "getV1AcceptanceReport",
    operationId: "getV1AcceptanceReport",
    method: "GET",
    path: "/api/v1/acceptance_report",
    productionOrigin: "https://seller-analytics-api.wildberries.ru",
    retrySafety: "safe",
    source: "https://dev.wildberries.ru/docs/openapi/reports",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "reports",
    methodName: "getV1AcceptanceReportTasksTaskIdStatus",
    operationId: "getV1AcceptanceReportTasksTaskIdStatus",
    method: "GET",
    path: "/api/v1/acceptance_report/tasks/{task_id}/status",
    productionOrigin: "https://seller-analytics-api.wildberries.ru",
    retrySafety: "safe",
    source: "https://dev.wildberries.ru/docs/openapi/reports",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "reports",
    methodName: "getV1AcceptanceReportTasksTaskIdDownload",
    operationId: "getV1AcceptanceReportTasksTaskIdDownload",
    method: "GET",
    path: "/api/v1/acceptance_report/tasks/{task_id}/download",
    productionOrigin: "https://seller-analytics-api.wildberries.ru",
    retrySafety: "safe",
    source: "https://dev.wildberries.ru/docs/openapi/reports",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "reports",
    methodName: "getV1PaidStorage",
    operationId: "getV1PaidStorage",
    method: "GET",
    path: "/api/v1/paid_storage",
    productionOrigin: "https://seller-analytics-api.wildberries.ru",
    retrySafety: "safe",
    source: "https://dev.wildberries.ru/docs/openapi/reports",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "reports",
    methodName: "getV1PaidStorageTasksTaskIdStatus",
    operationId: "getV1PaidStorageTasksTaskIdStatus",
    method: "GET",
    path: "/api/v1/paid_storage/tasks/{task_id}/status",
    productionOrigin: "https://seller-analytics-api.wildberries.ru",
    retrySafety: "safe",
    source: "https://dev.wildberries.ru/docs/openapi/reports",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "reports",
    methodName: "getV1PaidStorageTasksTaskIdDownload",
    operationId: "getV1PaidStorageTasksTaskIdDownload",
    method: "GET",
    path: "/api/v1/paid_storage/tasks/{task_id}/download",
    productionOrigin: "https://seller-analytics-api.wildberries.ru",
    retrySafety: "safe",
    source: "https://dev.wildberries.ru/docs/openapi/reports",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "reports",
    methodName: "getV1AnalyticsRegionSale",
    operationId: "getV1AnalyticsRegionSale",
    method: "GET",
    path: "/api/v1/analytics/region-sale",
    productionOrigin: "https://seller-analytics-api.wildberries.ru",
    retrySafety: "safe",
    source: "https://dev.wildberries.ru/docs/openapi/reports",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "reports",
    methodName: "getV1AnalyticsBrandShareBrands",
    operationId: "getV1AnalyticsBrandShareBrands",
    method: "GET",
    path: "/api/v1/analytics/brand-share/brands",
    productionOrigin: "https://seller-analytics-api.wildberries.ru",
    retrySafety: "safe",
    source: "https://dev.wildberries.ru/docs/openapi/reports",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "reports",
    methodName: "getV1AnalyticsBrandShareParentSubjects",
    operationId: "getV1AnalyticsBrandShareParentSubjects",
    method: "GET",
    path: "/api/v1/analytics/brand-share/parent-subjects",
    productionOrigin: "https://seller-analytics-api.wildberries.ru",
    retrySafety: "safe",
    source: "https://dev.wildberries.ru/docs/openapi/reports",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "reports",
    methodName: "getV1AnalyticsBrandShare",
    operationId: "getV1AnalyticsBrandShare",
    method: "GET",
    path: "/api/v1/analytics/brand-share",
    productionOrigin: "https://seller-analytics-api.wildberries.ru",
    retrySafety: "safe",
    source: "https://dev.wildberries.ru/docs/openapi/reports",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "reports",
    methodName: "getV1AnalyticsBannedProducsBlocked",
    operationId: "getV1AnalyticsBannedProducsBlocked",
    method: "GET",
    path: "/api/v1/analytics/banned-products/blocked",
    productionOrigin: "https://seller-analytics-api.wildberries.ru",
    retrySafety: "safe",
    source: "https://dev.wildberries.ru/docs/openapi/reports",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "reports",
    methodName: "getV1AnalyticsGoodsReturn",
    operationId: "getV1AnalyticsGoodsReturn",
    method: "GET",
    path: "/api/v1/analytics/goods-return",
    productionOrigin: "https://seller-analytics-api.wildberries.ru",
    retrySafety: "safe",
    source: "https://dev.wildberries.ru/docs/openapi/reports",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "finances",
    methodName: "getV1AccountBalance",
    operationId: "getV1AccountBalance",
    method: "GET",
    path: "/api/v1/account/balance",
    productionOrigin: "https://finance-api.wildberries.ru",
    retrySafety: "safe",
    source: "https://dev.wildberries.ru/docs/openapi/finances",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "finances",
    methodName: "postV1SalesReportsList",
    operationId: "postV1SalesReportsList",
    method: "POST",
    path: "/api/finance/v1/sales-reports/list",
    productionOrigin: "https://finance-api.wildberries.ru",
    retrySafety: "safe",
    source: "https://dev.wildberries.ru/docs/openapi/finances",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "finances",
    methodName: "postV1SalesReportsDetailedReportId",
    operationId: "postV1SalesReportsDetailedReportId",
    method: "POST",
    path: "/api/finance/v1/sales-reports/detailed/{reportId}",
    productionOrigin: "https://finance-api.wildberries.ru",
    retrySafety: "safe",
    source: "https://dev.wildberries.ru/docs/openapi/finances",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "finances",
    methodName: "postV1SalesReportsDetailed",
    operationId: "postV1SalesReportsDetailed",
    method: "POST",
    path: "/api/finance/v1/sales-reports/detailed",
    productionOrigin: "https://finance-api.wildberries.ru",
    retrySafety: "safe",
    source: "https://dev.wildberries.ru/docs/openapi/finances",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "finances",
    methodName: "postV1AcquiringList",
    operationId: "postV1AcquiringList",
    method: "POST",
    path: "/api/finance/v1/acquiring/list",
    productionOrigin: "https://finance-api.wildberries.ru",
    retrySafety: "safe",
    source: "https://dev.wildberries.ru/docs/openapi/finances",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "finances",
    methodName: "postV1AcquiringDetailedReportId",
    operationId: "postV1AcquiringDetailedReportId",
    method: "POST",
    path: "/api/finance/v1/acquiring/detailed/{reportId}",
    productionOrigin: "https://finance-api.wildberries.ru",
    retrySafety: "safe",
    source: "https://dev.wildberries.ru/docs/openapi/finances",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "finances",
    methodName: "postV1AcquiringDetailed",
    operationId: "postV1AcquiringDetailed",
    method: "POST",
    path: "/api/finance/v1/acquiring/detailed",
    productionOrigin: "https://finance-api.wildberries.ru",
    retrySafety: "safe",
    source: "https://dev.wildberries.ru/docs/openapi/finances",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "finances",
    methodName: "getV1DocumentsCategories",
    operationId: "getV1DocumentsCategories",
    method: "GET",
    path: "/api/v1/documents/categories",
    productionOrigin: "https://documents-api.wildberries.ru",
    retrySafety: "safe",
    source: "https://dev.wildberries.ru/docs/openapi/finances",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "finances",
    methodName: "getV1DocumentsList",
    operationId: "getV1DocumentsList",
    method: "GET",
    path: "/api/v1/documents/list",
    productionOrigin: "https://documents-api.wildberries.ru",
    retrySafety: "safe",
    source: "https://dev.wildberries.ru/docs/openapi/finances",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "finances",
    methodName: "getV1DocumentsDownload",
    operationId: "getV1DocumentsDownload",
    method: "GET",
    path: "/api/v1/documents/download",
    productionOrigin: "https://documents-api.wildberries.ru",
    retrySafety: "safe",
    source: "https://dev.wildberries.ru/docs/openapi/finances",
    verifiedAt: "2026-08-17",
  },
  {
    domain: "finances",
    methodName: "postV1DocumentsDownloadAll",
    operationId: "postV1DocumentsDownloadAll",
    method: "POST",
    path: "/api/v1/documents/download/all",
    productionOrigin: "https://documents-api.wildberries.ru",
    retrySafety: "safe",
    source: "https://dev.wildberries.ru/docs/openapi/finances",
    verifiedAt: "2026-08-17",
  },
] as const;

export const WB_OPERATION_ALIASES = {
  general: {
    getNews: "getV2News",
    getSellerInfo: "getV1SellerInfo",
    getRating: "getV1Rating",
    getSubscriptions: "getV1Subscriptions",
    getTariffConstructorOptions: "getV1TariffConstructorOptions",
    postInvite: "postV1Invite",
    getUsers: "getV1Users",
    putUsersAccess: "putV1UsersAccess",
    deleteUser: "deleteV1User",
  },
  items: {
    getContentObjectParentAll: "getContentV2ObjectParentAll",
    getContentObjectAll: "getContentV2ObjectAll",
    getContentObjectCharcsSubjectId: "getContentV2ObjectCharcsSubjectId",
    getContentDirectoryColors: "getContentV2DirectoryColors",
    getContentDirectoryKinds: "getContentV2DirectoryKinds",
    getContentDirectoryCountries: "getContentV2DirectoryCountries",
    getContentDirectorySeasons: "getContentV2DirectorySeasons",
    getContentDirectoryVat: "getContentV2DirectoryVat",
    getContentDirectoryTnved: "getContentV2DirectoryTnved",
    getApiContentBrands: "getApiContentV1Brands",
    getContentTags: "getContentV2Tags",
    postContentTag: "postContentV2Tag",
    patchContentTagId: "patchContentV2TagId",
    deleteContentTagId: "deleteContentV2TagId",
    postContentTagNomenclatureLink: "postContentV2TagNomenclatureLink",
    postContentGetCardsList: "postContentV2GetCardsList",
    postContentCardsErrorList: "postContentV2CardsErrorList",
    postContentCardsUpdate: "postContentV2CardsUpdate",
    postContentCardsMoveNm: "postContentV2CardsMoveNm",
    postContentCardsDeleteTrash: "postContentV2CardsDeleteTrash",
    postContentCardsRecover: "postContentV2CardsRecover",
    postContentGetCardsTrash: "postContentV2GetCardsTrash",
    getContentCardsLimits: "getContentV2CardsLimits",
    postContentBarcodes: "postContentV2Barcodes",
    postContentCardsUpload: "postContentV2CardsUpload",
    postContentCardsUploadAdd: "postContentV2CardsUploadAdd",
    postContentMediaFile: "postContentV3MediaFile",
    postContentMediaSave: "postContentV3MediaSave",
    postRecommendationsList: "postV1RecommendationsList",
    postRecommendationsSet: "postV1RecommendationsSet",
    postApiUploadTask: "postApiV2UploadTask",
    postApiUploadTaskSize: "postApiV2UploadTaskSize",
    postApiUploadTaskClubDiscount: "postApiV2UploadTaskClubDiscount",
    postUploadTaskB2bWholesale: "postV1UploadTaskB2bWholesale",
    getApiHistoryTasks: "getApiV2HistoryTasks",
    getApiHistoryGoodsTask: "getApiV2HistoryGoodsTask",
    getApiBufferTasks: "getApiV2BufferTasks",
    getApiBufferGoodsTask: "getApiV2BufferGoodsTask",
    getApiListGoodsFilter: "getApiV2ListGoodsFilter",
    postApiListGoodsFilter: "postApiV2ListGoodsFilter",
    getApiListGoodsSizeNm: "getApiV2ListGoodsSizeNm",
    getApiQuarantineGoods: "getApiV2QuarantineGoods",
    putApiStocksWarehouseId: "putApiV3StocksWarehouseId",
    deleteApiStocksWarehouseId: "deleteApiV3StocksWarehouseId",
    postApiStocksWarehouseId: "postApiV3StocksWarehouseId",
    getApiOffices: "getApiV3Offices",
    getApiWarehouses: "getApiV3Warehouses",
    postApiWarehouses: "postApiV3Warehouses",
    putApiWarehousesWarehouseId: "putApiV3WarehousesWarehouseId",
    deleteApiWarehousesWarehouseId: "deleteApiV3WarehousesWarehouseId",
    getApiDbwWarehousesWarehouseIdContacts:
      "getApiV3DbwWarehousesWarehouseIdContacts",
    putApiDbwWarehousesWarehouseIdContacts:
      "putApiV3DbwWarehousesWarehouseIdContacts",
  },
  ordersFbs: {
    getApiPassesOffices: "getApiV3PassesOffices",
    getApiPasses: "getApiV3Passes",
    postApiPasses: "postApiV3Passes",
    putApiPassesPassId: "putApiV3PassesPassId",
    deleteApiPassesPassId: "deleteApiV3PassesPassId",
    getApiOrdersNew: "getApiV3OrdersNew",
    getApiOrders: "getApiV3Orders",
    postApiOrdersStatus: "postApiV3OrdersStatus",
    getApiSuppliesOrdersReshipment: "getApiV3SuppliesOrdersReshipment",
    patchApiOrdersOrderIdCancel: "patchApiV3OrdersOrderIdCancel",
    postApiOrdersStickers: "postApiV3OrdersStickers",
    postApiMarketplaceOrdersMeta: "postApiMarketplaceV3OrdersMeta",
    deleteApiOrdersOrderIdMeta: "deleteApiV3OrdersOrderIdMeta",
    putApiOrdersOrderIdMetaSgtin: "putApiV3OrdersOrderIdMetaSgtin",
    putApiOrdersOrderIdMetaUin: "putApiV3OrdersOrderIdMetaUin",
    putApiOrdersOrderIdMetaImei: "putApiV3OrdersOrderIdMetaImei",
    putApiOrdersOrderIdMetaGtin: "putApiV3OrdersOrderIdMetaGtin",
    putApiOrdersOrderIdMetaExpiration: "putApiV3OrdersOrderIdMetaExpiration",
    putApiMarketplaceOrdersOrderIdMetaCustomsDeclaration:
      "putApiMarketplaceV3OrdersOrderIdMetaCustomsDeclaration",
    postApiOrdersStickersCrossBorder: "postApiV3OrdersStickersCrossBorder",
    postApiOrdersStatusHistory: "postApiV3OrdersStatusHistory",
    postApiOrdersClient: "postApiV3OrdersClient",
    postApiSupplies: "postApiV3Supplies",
    getApiSupplies: "getApiV3Supplies",
    patchApiMarketplaceSuppliesSupplyIdOrders:
      "patchApiMarketplaceV3SuppliesSupplyIdOrders",
    getApiSuppliesSupplyId: "getApiV3SuppliesSupplyId",
    deleteApiSuppliesSupplyId: "deleteApiV3SuppliesSupplyId",
    getApiMarketplaceSuppliesSupplyIdOrderIds:
      "getApiMarketplaceV3SuppliesSupplyIdOrderIds",
    patchApiSuppliesSupplyIdDeliver: "patchApiV3SuppliesSupplyIdDeliver",
    getApiSuppliesSupplyIdBarcode: "getApiV3SuppliesSupplyIdBarcode",
    getApiSuppliesSupplyIdTrbx: "getApiV3SuppliesSupplyIdTrbx",
    postApiSuppliesSupplyIdTrbx: "postApiV3SuppliesSupplyIdTrbx",
    deleteApiSuppliesSupplyIdTrbx: "deleteApiV3SuppliesSupplyIdTrbx",
    postApiSuppliesSupplyIdTrbxStickers:
      "postApiV3SuppliesSupplyIdTrbxStickers",
    getApiMarketplaceFbsOrdersArchive: "getApiMarketplaceV3FbsOrdersArchive",
    getMarketplaceFbsSettingsAutoreturns:
      "getMarketplaceV3FbsSettingsAutoreturns",
    patchMarketplaceFbsSettingsAutoreturns:
      "patchMarketplaceV3FbsSettingsAutoreturns",
    postMarketplaceFbsSettingsAutoreturnsItems:
      "postMarketplaceV3FbsSettingsAutoreturnsItems",
    patchMarketplaceFbsSettingsAutoreturnsItems:
      "patchMarketplaceV3FbsSettingsAutoreturnsItems",
    getMarketplaceFbsSettingsAutoreturnsSubcategoriesRestricted:
      "getMarketplaceV3FbsSettingsAutoreturnsSubcategoriesRestricted",
  },
  ordersDbw: {
    getDbwOrdersNew: "getV3DbwOrdersNew",
    getDbwOrders: "getV3DbwOrders",
    postDbwOrdersDeliveryDate: "postV3DbwOrdersDeliveryDate",
    postDbwOrdersClient: "postV3DbwOrdersClient",
    postDbwOrdersStatus: "postV3DbwOrdersStatus",
    patchDbwOrdersOrderIdConfirm: "patchV3DbwOrdersOrderIdConfirm",
    postDbwOrdersStickers: "postV3DbwOrdersStickers",
    postDbwOrdersStatusDeliver: "postV3DbwOrdersStatusDeliver",
    postDbwOrdersCourier: "postV3DbwOrdersCourier",
    patchDbwOrdersOrderIdCancel: "patchV3DbwOrdersOrderIdCancel",
    postDbwOrdersMetaDetails: "postV3DbwOrdersMetaDetails",
    postDbwOrdersMetaDelete: "postV3DbwOrdersMetaDelete",
    postDbwOrdersMetaSgtin: "postV3DbwOrdersMetaSgtin",
    putDbwOrdersOrderIdMetaUin: "putV3DbwOrdersOrderIdMetaUin",
    putDbwOrdersOrderIdMetaImei: "putV3DbwOrdersOrderIdMetaImei",
    putDbwOrdersOrderIdMetaGtin: "putV3DbwOrdersOrderIdMetaGtin",
  },
  dbs: {
    getDbsOrdersNew: "getV3DbsOrdersNew",
    getDbsOrders: "getV3DbsOrders",
    postDbsOrdersFinalPrice: "postV3DbsOrdersFinalPrice",
    postDbsGroupsInfo: "postV3DbsGroupsInfo",
    postDbsOrdersClient: "postV3DbsOrdersClient",
    postDbsOrdersB2bInfo: "postV3DbsOrdersB2bInfo",
    postDbsOrdersDeliveryDate: "postV3DbsOrdersDeliveryDate",
    postDbsOrdersStatusInfo: "postV3DbsOrdersStatusInfo",
    postDbsOrdersStatusCancel: "postV3DbsOrdersStatusCancel",
    postDbsOrdersStatusConfirm: "postV3DbsOrdersStatusConfirm",
    postDbsOrdersStickers: "postV3DbsOrdersStickers",
    postDbsOrdersStatusDeliver: "postV3DbsOrdersStatusDeliver",
    postDbsOrdersStatusReceive: "postV3DbsOrdersStatusReceive",
    postDbsOrdersStatusReject: "postV3DbsOrdersStatusReject",
    postDbsOrdersMetaDetails: "postV3DbsOrdersMetaDetails",
    postDbsOrdersMetaDelete: "postV3DbsOrdersMetaDelete",
    postDbsOrdersMetaSgtin: "postV3DbsOrdersMetaSgtin",
    postDbsOrdersMetaUin: "postV3DbsOrdersMetaUin",
    postDbsOrdersMetaImei: "postV3DbsOrdersMetaImei",
    postDbsOrdersMetaGtin: "postV3DbsOrdersMetaGtin",
    postDbsOrdersMetaCustomsDeclaration:
      "postV3DbsOrdersMetaCustomsDeclaration",
  },
  inStorePickup: {
    getClickCollectOrdersNew: "getV3ClickCollectOrdersNew",
    getClickCollectOrders: "getV3ClickCollectOrders",
    postClickCollectOrdersFinalPrice: "postV3ClickCollectOrdersFinalPrice",
    postClickCollectOrdersStatusConfirm:
      "postV3ClickCollectOrdersStatusConfirm",
    postClickCollectOrdersStatusPrepare:
      "postV3ClickCollectOrdersStatusPrepare",
    postClickCollectOrdersClient: "postV3ClickCollectOrdersClient",
    postClickCollectOrdersClientIdentity:
      "postV3ClickCollectOrdersClientIdentity",
    postClickCollectOrdersStatusReceive:
      "postV3ClickCollectOrdersStatusReceive",
    postClickCollectOrdersStatusReject: "postV3ClickCollectOrdersStatusReject",
    postClickCollectOrdersStatusInfo: "postV3ClickCollectOrdersStatusInfo",
    postClickCollectOrdersStatusCancel: "postV3ClickCollectOrdersStatusCancel",
    postClickCollectOrdersMetaDetails: "postV3ClickCollectOrdersMetaDetails",
    postClickCollectOrdersMetaDelete: "postV3ClickCollectOrdersMetaDelete",
    postClickCollectOrdersMetaSgtin: "postV3ClickCollectOrdersMetaSgtin",
    postClickCollectOrdersMetaUin: "postV3ClickCollectOrdersMetaUin",
    postClickCollectOrdersMetaImei: "postV3ClickCollectOrdersMetaImei",
    postClickCollectOrdersMetaGtin: "postV3ClickCollectOrdersMetaGtin",
    postClickCollectOrdersMetaCustomsDeclaration:
      "postV3ClickCollectOrdersMetaCustomsDeclaration",
  },
  ordersFbw: {
    postAcceptanceOptions: "postV1AcceptanceOptions",
    getWarehouses: "getV1Warehouses",
    getTransitTariffs: "getV1TransitTariffs",
    postSupplies: "postV1Supplies",
    getSuppliesId: "getV1SuppliesId",
    getSuppliesIdGoods: "getV1SuppliesIdGoods",
    getSuppliesIdPackage: "getV1SuppliesIdPackage",
  },
  promotion: {
    getPromotionCount: "getV1PromotionCount",
    getAdverts: "getV2Adverts",
    postBidsMin: "postV1BidsMin",
    postSeacatSaveAd: "postV2SeacatSaveAd",
    getSupplierSubjects: "getV1SupplierSubjects",
    postSupplierNms: "postV2SupplierNms",
    getDelete: "getV0Delete",
    postRename: "postV0Rename",
    getStart: "getV0Start",
    getPause: "getV0Pause",
    getStop: "getV0Stop",
    putAuctionPlacements: "putV0AuctionPlacements",
    patchBids: "patchV1Bids",
    getBalance: "getV1Balance",
    getBudget: "getV1Budget",
    postBudgetDeposit: "postV1BudgetDeposit",
    getUpd: "getV1Upd",
    getPayments: "getV1Payments",
    patchAuctionNms: "patchV0AuctionNms",
    getBidsRecommendations: "getV0BidsRecommendations",
    postNormqueryStats: "postV1NormqueryStats",
    postNormqueryGetBids: "postV0NormqueryGetBids",
    getConfig: "getV1Config",
    postNormqueryBids: "postV1NormqueryBids",
    deleteNormqueryBids: "deleteV0NormqueryBids",
    postNormqueryGetMinus: "postV0NormqueryGetMinus",
    postNormquerySetMinus: "postV0NormquerySetMinus",
    getCount: "getV1Count",
    getAdvert: "getV1Advert",
    getFullstats: "getV3Fullstats",
    postStats: "postV1Stats",
    getCalendarPromotions: "getV1CalendarPromotions",
    getCalendarPromotionsDetails: "getV1CalendarPromotionsDetails",
    getCalendarPromotionsNomenclatures: "getV1CalendarPromotionsNomenclatures",
    postCalendarPromotionsUpload: "postV1CalendarPromotionsUpload",
    postNormqueryList: "postV0NormqueryList",
  },
  communications: {
    getNewFeedbacksQuestions: "getV1NewFeedbacksQuestions",
    getQuestionsCountUnanswered: "getV1QuestionsCountUnanswered",
    getQuestionsCount: "getV1QuestionsCount",
    getQuestions: "getV1Questions",
    patchQuestions: "patchV1Questions",
    getQuestion: "getV1Question",
    getFeedbacksCountUnanswered: "getV1FeedbacksCountUnanswered",
    getFeedbacksCount: "getV1FeedbacksCount",
    getFeedbacks: "getV1Feedbacks",
    postFeedbacksAnswer: "postV1FeedbacksAnswer",
    patchFeedbacksAnswer: "patchV1FeedbacksAnswer",
    postFeedbacksOrderReturn: "postV1FeedbacksOrderReturn",
    getFeedback: "getV1Feedback",
    getFeedbacksArchive: "getV1FeedbacksArchive",
    getFeedbacksPins: "getFeedbacksV1Pins",
    postFeedbacksPins: "postFeedbacksV1Pins",
    deleteFeedbacksPins: "deleteFeedbacksV1Pins",
    getFeedbacksPinsCount: "getFeedbacksV1PinsCount",
    getFeedbacksPinsLimits: "getFeedbacksV1PinsLimits",
    getSellerChats: "getV1SellerChats",
    getSellerEvents: "getV1SellerEvents",
    postSellerMessage: "postV1SellerMessage",
    getSellerDownloadId: "getV1SellerDownloadId",
    getClaims: "getV1Claims",
    patchClaim: "patchV1Claim",
  },
  rates: {
    getTariffsCommission: "getV1TariffsCommission",
    getAcceptanceCoefficients: "getV1AcceptanceCoefficients",
    getTariffsBox: "getV1TariffsBox",
    getTariffsPallet: "getV1TariffsPallet",
    getTariffsReturn: "getV1TariffsReturn",
  },
  analytics: {
    postSalesFunnelProducts: "postV3SalesFunnelProducts",
    postSalesFunnelProductsHistory: "postV3SalesFunnelProductsHistory",
    postSalesFunnelGroupedHistory: "postV3SalesFunnelGroupedHistory",
    postNmReportDownloads: "postV2NmReportDownloads",
    getNmReportDownloads: "getV2NmReportDownloads",
    postNmReportDownloadsRetry: "postV2NmReportDownloadsRetry",
    getNmReportDownloadsFileDownloadId: "getV2NmReportDownloadsFileDownloadId",
    postSearchReportReport: "postV2SearchReportReport",
    postSearchReportTableGroups: "postV2SearchReportTableGroups",
    postSearchReportTableDetails: "postV2SearchReportTableDetails",
    postSearchReportProductSearchTexts: "postV2SearchReportProductSearchTexts",
    postSearchReportProductOrders: "postV2SearchReportProductOrders",
    postStocksReportWbWarehouses: "postV1StocksReportWbWarehouses",
    postStocksReportProductsGroups: "postV2StocksReportProductsGroups",
    postStocksReportProductsProducts: "postV2StocksReportProductsProducts",
    postStocksReportProductsSizes: "postV2StocksReportProductsSizes",
    postStocksReportOffices: "postV2StocksReportOffices",
    postItemRating: "postV2ItemRating",
    postOrderFeed: "postV1OrderFeed",
  },
  reports: {
    getSupplierOrders: "getV1SupplierOrders",
    getSupplierSales: "getV1SupplierSales",
    postAnalyticsExciseReport: "postV1AnalyticsExciseReport",
    getWarehouseRemains: "getV1WarehouseRemains",
    getWarehouseRemainsTasksTaskIdStatus:
      "getV1WarehouseRemainsTasksTaskIdStatus",
    getWarehouseRemainsTasksTaskIdDownload:
      "getV1WarehouseRemainsTasksTaskIdDownload",
    getMeasurementPenalties: "getV1MeasurementPenalties",
    getWarehouseMeasurements: "getV1WarehouseMeasurements",
    getDeductions: "getV1Deductions",
    getAnalyticsAntifraudDetails: "getV1AnalyticsAntifraudDetails",
    getAnalyticsGoodsLabeling: "getV1AnalyticsGoodsLabeling",
    getAcceptanceReport: "getV1AcceptanceReport",
    getAcceptanceReportTasksTaskIdStatus:
      "getV1AcceptanceReportTasksTaskIdStatus",
    getAcceptanceReportTasksTaskIdDownload:
      "getV1AcceptanceReportTasksTaskIdDownload",
    getPaidStorage: "getV1PaidStorage",
    getPaidStorageTasksTaskIdStatus: "getV1PaidStorageTasksTaskIdStatus",
    getPaidStorageTasksTaskIdDownload: "getV1PaidStorageTasksTaskIdDownload",
    getAnalyticsRegionSale: "getV1AnalyticsRegionSale",
    getAnalyticsBrandShareBrands: "getV1AnalyticsBrandShareBrands",
    getAnalyticsBrandShareParentSubjects:
      "getV1AnalyticsBrandShareParentSubjects",
    getAnalyticsBrandShare: "getV1AnalyticsBrandShare",
    getAnalyticsBannedProducsBlocked: "getV1AnalyticsBannedProducsBlocked",
    getAnalyticsGoodsReturn: "getV1AnalyticsGoodsReturn",
  },
  finances: {
    getAccountBalance: "getV1AccountBalance",
    postSalesReportsList: "postV1SalesReportsList",
    postSalesReportsDetailedReportId: "postV1SalesReportsDetailedReportId",
    postSalesReportsDetailed: "postV1SalesReportsDetailed",
    postAcquiringList: "postV1AcquiringList",
    postAcquiringDetailedReportId: "postV1AcquiringDetailedReportId",
    postAcquiringDetailed: "postV1AcquiringDetailed",
    getDocumentsCategories: "getV1DocumentsCategories",
    getDocumentsList: "getV1DocumentsList",
    getDocumentsDownload: "getV1DocumentsDownload",
    postDocumentsDownloadAll: "postV1DocumentsDownloadAll",
  },
} as const;
