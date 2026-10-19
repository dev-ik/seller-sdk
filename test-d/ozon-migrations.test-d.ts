import type {
  CreateFbsPackageLabelBatchV3Request,
  DeleteAutoAddProductsV2Request,
  ListProductsRequest,
  OzonCertificateAccordanceTypeV2,
  UpdateFbsWarehouseFirstMileV1Request,
  UpdateProductPricesRequest,
  UpdatePromotionProductsV1Request,
} from "@seller-sdk/ozon";
import type { UpdatePromotionProductsV1Response } from "seller-sdk";

const label: CreateFbsPackageLabelBatchV3Request = {
  posting_numbers: ["TEST-1"],
};
const products: ListProductsRequest = {
  filter: { visibility: "SHOWCASE_SELECT_ACTIVE" },
  limit: 1,
};
const warehouse: UpdateFbsWarehouseFirstMileV1Request = {
  warehouse_id: 1,
  cut_in_time: 1,
  first_mile_type: "PICK_UP",
  timeslot_id: 1,
  courier_return_warehouse_info: { is_courier_return_warehouse_match: true },
};
const prices: UpdateProductPricesRequest = {
  prices: [{ offer_id: "TEST-1", price: "100", declared_price: "100" }],
};
const promotion: UpdatePromotionProductsV1Request = {
  action_id: 1,
  products: [
    { product_id: 1, action_price: { amount: "100", currency: "RUB" } },
  ],
};
const result: UpdatePromotionProductsV1Response = {
  active_product_ids: ["9007199254740993"],
};
const invalidIds: DeleteAutoAddProductsV2Request = {
  action_id: 1,
  auto_add_date: "2026-10-19T00:00:00Z",
  // @ts-expect-error Ozon v2 product_ids are strings, not numbers.
  product_ids: [1],
};
// @ts-expect-error The current Ozon certificate enum no longer accepts GOST.
const removedAccordance: OzonCertificateAccordanceTypeV2 = "GOST";
void [
  label,
  products,
  warehouse,
  prices,
  promotion,
  result,
  invalidIds,
  removedAccordance,
];
