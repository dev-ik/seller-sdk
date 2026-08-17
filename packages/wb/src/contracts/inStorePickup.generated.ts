// Generated runtime schemas for this Wildberries API domain.
import type { WbSchemaComponents } from "../schema.js";

export const inStorePickupComponents: WbSchemaComponents = {
  "api.OrdersFinalPriceResponse": {
    kind: "object",
    properties: {
      requestId: { kind: "string" },
      results: {
        kind: "array",
        items: { kind: "ref", name: "api.OrderFinalPriceResult" },
      },
    },
    required: ["requestId", "results"],
  },
  "api.OrderFinalPriceResult": {
    kind: "object",
    properties: {
      orderId: { kind: "number", integer: true },
      data: {
        kind: "object",
        properties: {
          originalPrice: { kind: "number", integer: true },
          convertedOriginalPrice: { kind: "number", integer: true },
          originalFinalPrice: { kind: "number", integer: true },
          convertedOriginalFinalPrice: { kind: "number", integer: true },
          currencyCode: { kind: "number", integer: true },
          convertedCurrencyCode: { kind: "number", integer: true },
        },
        required: [],
      },
      errors: {
        kind: "array",
        items: { kind: "ref", name: "api.BatchErrorFinalPriceResponse" },
      },
      isError: { kind: "boolean" },
    },
    required: ["orderId"],
  },
  "api.CheckedIdentity": {
    kind: "object",
    properties: { ok: { kind: "boolean" } },
    required: [],
  },
  Error: {
    kind: "object",
    properties: {
      code: { kind: "string" },
      message: { kind: "string" },
      data: { kind: "object", properties: {}, required: [], nullable: true },
    },
    required: [],
  },
  "api.CheckIdentityRequest": {
    kind: "object",
    properties: { orderCode: { kind: "string" }, passcode: { kind: "string" } },
    required: [],
  },
  "api.Error": {
    kind: "object",
    properties: {
      code: { kind: "string" },
      data: { kind: "object", properties: {}, required: [] },
      message: { kind: "string" },
    },
    required: [],
  },
  "api.NewOrder": {
    kind: "object",
    properties: {
      ddate: { kind: "string" },
      salePrice: { kind: "number", integer: true, nullable: true },
      requiredMeta: {
        kind: "array",
        items: { kind: "string" },
        nullable: true,
      },
      article: { kind: "string" },
      rid: { kind: "string" },
      createdAt: { kind: "string" },
      warehouseAddress: { kind: "string" },
      orderCode: { kind: "string" },
      payMode: { kind: "string" },
      skus: { kind: "array", items: { kind: "string" } },
      id: { kind: "number", integer: true },
      warehouseId: { kind: "number", integer: true },
      nmId: { kind: "number", integer: true },
      chrtId: { kind: "number", integer: true },
      price: { kind: "number", integer: true },
      finalPrice: { kind: "number", integer: true },
      convertedPrice: { kind: "number", integer: true },
      convertedFinalPrice: { kind: "number", integer: true },
      currencyCode: { kind: "number", integer: true },
      convertedCurrencyCode: { kind: "number", integer: true },
      cargoType: { kind: "number", integer: true, enum: [1, 2, 3] },
      isZeroOrder: { kind: "boolean" },
      options: {
        kind: "object",
        properties: { isB2b: { kind: "boolean" } },
        required: [],
      },
    },
    required: [],
  },
  "api.NewOrders": {
    kind: "object",
    properties: {
      orders: { kind: "array", items: { kind: "ref", name: "api.NewOrder" } },
    },
    required: [],
  },
  "api.Order": {
    kind: "object",
    properties: {
      article: { kind: "string" },
      cargoType: { kind: "number", integer: true, enum: [1, 2, 3] },
      chrtId: { kind: "number", integer: true },
      createdAt: { kind: "string" },
      price: { kind: "number", integer: true },
      finalPrice: { kind: "number", integer: true },
      convertedPrice: { kind: "number", integer: true },
      convertedFinalPrice: { kind: "number", integer: true },
      currencyCode: { kind: "number", integer: true },
      convertedCurrencyCode: { kind: "number", integer: true },
      id: { kind: "number", integer: true },
      isZeroOrder: { kind: "boolean" },
      nmId: { kind: "number", integer: true },
      orderCode: { kind: "string" },
      payMode: { kind: "string" },
      rid: { kind: "string" },
      skus: { kind: "array", items: { kind: "string" } },
      warehouseAddress: { kind: "string" },
      warehouseId: { kind: "number", integer: true },
      options: {
        kind: "object",
        properties: { isB2b: { kind: "boolean" } },
        required: [],
      },
    },
    required: [],
  },
  "api.OrderClientInfo": {
    kind: "object",
    properties: {
      phone: { kind: "string" },
      firstName: { kind: "string" },
      orderID: { kind: "number", integer: true },
      phoneCode: { kind: "number", integer: true },
    },
    required: [],
  },
  "api.OrderClientInfoResp": {
    kind: "object",
    properties: {
      orders: {
        kind: "array",
        items: { kind: "ref", name: "api.OrderClientInfo" },
      },
    },
    required: [],
  },
  "api.Orders": {
    kind: "object",
    properties: {
      next: { kind: "number", integer: true },
      orders: { kind: "array", items: { kind: "ref", name: "api.Order" } },
    },
    required: [],
  },
  "api.OrdersRequest": {
    kind: "object",
    properties: {
      orders: { kind: "array", items: { kind: "number", integer: true } },
    },
    required: [],
  },
  "api.OrdersSGTINsSetRequest": {
    kind: "object",
    properties: {
      orders: { kind: "array", items: { kind: "ref", name: "api.SGTINs" } },
    },
    required: ["orders"],
  },
  "api.SGTINs": {
    kind: "object",
    properties: {
      orderId: { kind: "number", integer: true },
      sgtins: { kind: "array", items: { kind: "string" } },
    },
    required: ["orderId", "sgtins"],
  },
  "api.OrdersUINSetRequest": {
    kind: "object",
    properties: {
      orders: { kind: "array", items: { kind: "ref", name: "api.UIN" } },
    },
    required: ["orders"],
  },
  "api.UIN": {
    kind: "object",
    properties: {
      orderId: { kind: "number", integer: true },
      uin: { kind: "string", minLength: 16, maxLength: 16 },
    },
    required: ["orderId", "uin"],
  },
  "api.OrdersIMEISetRequest": {
    kind: "object",
    properties: {
      orders: { kind: "array", items: { kind: "ref", name: "api.IMEI" } },
    },
    required: ["orders"],
  },
  "api.IMEI": {
    kind: "object",
    properties: {
      orderId: { kind: "number", integer: true },
      imei: { kind: "string", minLength: 15, maxLength: 15 },
    },
    required: ["orderId", "imei"],
  },
  "api.OrdersGTINSetRequest": {
    kind: "object",
    properties: {
      orders: { kind: "array", items: { kind: "ref", name: "api.GTIN" } },
    },
    required: ["orders"],
  },
  "api.GTIN": {
    kind: "object",
    properties: {
      gtin: { kind: "string", minLength: 13, maxLength: 13 },
      orderId: { kind: "number", integer: true },
    },
    required: ["gtin", "orderId"],
  },
  "api.BatchError": {
    kind: "object",
    properties: {
      detail: { kind: "object", properties: {}, required: [], nullable: true },
      origin: { kind: "string" },
      requestId: { kind: "string" },
      title: { kind: "string" },
    },
    required: ["origin", "requestId", "title"],
  },
  "api.BatchErrorResponse": {
    kind: "object",
    properties: {
      code: { kind: "number", integer: true },
      detail: { kind: "string" },
    },
    required: [],
  },
  "api.BatchErrorFinalPriceResponse": {
    kind: "object",
    properties: {
      code: { kind: "number", integer: true },
      detail: { kind: "string" },
    },
    required: ["code", "detail"],
  },
  "api.BatchCustomsDeclarationErrorResponse": {
    kind: "object",
    properties: {
      code: { kind: "number", integer: true },
      detail: { kind: "string" },
    },
    required: ["code", "detail"],
  },
  "api.MetaErrorResponse": {
    kind: "object",
    properties: {
      code: { kind: "number", integer: true },
      detail: { kind: "string" },
    },
    required: ["code", "detail"],
  },
  "api.OrdersErrorResponse": {
    kind: "object",
    properties: {
      code: { kind: "number", integer: true },
      detail: { kind: "string" },
    },
    required: ["code", "detail"],
  },
  "api.OrdersRequestV2": {
    kind: "object",
    properties: {
      ordersIds: { kind: "array", items: { kind: "number", integer: true } },
    },
    required: ["ordersIds"],
  },
  "api.StatusSetResponses": {
    kind: "object",
    properties: {
      requestId: { kind: "unknown" },
      results: {
        kind: "array",
        items: { kind: "ref", name: "api.StatusSetResponse" },
      },
    },
    required: ["requestId", "results"],
  },
  "api.CustomsDeclarationSetResponse": {
    kind: "object",
    properties: {
      requestId: { kind: "unknown" },
      results: {
        kind: "array",
        items: { kind: "ref", name: "api.StatusSetCustomsDeclarationResponse" },
      },
    },
    required: ["requestId", "results"],
  },
  "api.StatusSetResponse": {
    kind: "object",
    properties: {
      orderId: { kind: "number", integer: true },
      isError: { kind: "boolean" },
      errors: {
        kind: "array",
        items: { kind: "ref", name: "api.BatchErrorResponse" },
      },
    },
    required: ["orderId", "isError"],
  },
  "api.StatusSetCustomsDeclarationResponse": {
    kind: "object",
    properties: {
      orderId: { kind: "number", integer: true },
      isError: { kind: "boolean" },
      errors: {
        kind: "array",
        items: {
          kind: "ref",
          name: "api.BatchCustomsDeclarationErrorResponse",
        },
      },
    },
    required: ["orderId", "isError"],
  },
  "api.MetaDetailsResponse": {
    kind: "object",
    properties: {
      requestId: { kind: "unknown" },
      results: {
        kind: "array",
        items: {
          kind: "object",
          properties: {
            orderId: { kind: "number", integer: true },
            isError: { kind: "boolean" },
            errors: {
              kind: "array",
              items: {
                kind: "object",
                properties: {
                  code: { kind: "number", integer: true },
                  detail: { kind: "string" },
                  metaDetails: {
                    kind: "array",
                    items: {
                      kind: "object",
                      properties: {
                        key: { kind: "string" },
                        value: { kind: "string", nullable: true },
                        decision: { kind: "string" },
                      },
                      required: [],
                    },
                  },
                },
                required: ["code", "detail"],
              },
            },
          },
          required: ["orderId", "isError"],
        },
      },
    },
    required: ["requestId", "results"],
  },
  MetaDetailsErrors: {
    kind: "array",
    items: {
      kind: "object",
      properties: {
        key: { kind: "string" },
        value: { kind: "string", nullable: true },
        decision: { kind: "string" },
      },
      required: [],
    },
  },
  "api.OrdersResponses": {
    kind: "object",
    properties: {
      requestId: { kind: "unknown" },
      results: {
        kind: "array",
        items: { kind: "ref", name: "api.OrdersResponse" },
      },
    },
    required: ["requestId", "results"],
  },
  "api.OrdersResponse": {
    kind: "object",
    properties: {
      orderId: { kind: "number", integer: true },
      isError: { kind: "boolean" },
      errors: {
        kind: "array",
        items: { kind: "ref", name: "api.OrdersErrorResponse" },
      },
    },
    required: ["orderId", "isError"],
  },
  "api.MetaSetResponses": {
    kind: "object",
    properties: {
      requestId: { kind: "unknown" },
      results: {
        kind: "array",
        items: { kind: "ref", name: "api.MetaSetResponse" },
      },
    },
    required: ["requestId", "results"],
  },
  "api.MetaSetResponse": {
    kind: "object",
    properties: {
      orderId: { kind: "number", integer: true },
      isError: { kind: "boolean" },
      errors: {
        kind: "array",
        items: { kind: "ref", name: "api.MetaErrorResponse" },
      },
    },
    required: ["orderId", "isError"],
  },
  "api.OrderStatusesV2": {
    kind: "object",
    properties: {
      orders: {
        kind: "array",
        items: { kind: "ref", name: "api.OrderStatusV2" },
      },
    },
    required: [],
  },
  "api.OrderStatusV2": {
    kind: "object",
    properties: {
      errors: {
        kind: "array",
        items: { kind: "ref", name: "api.OrdersErrorResponse" },
      },
      orderId: { kind: "number", integer: true },
      supplierStatus: { kind: "string" },
      wbStatus: { kind: "string" },
    },
    required: ["orderId"],
  },
  "api.OrdersMetaDetailsResponse": {
    kind: "object",
    properties: {
      requestId: { kind: "string" },
      orders: {
        kind: "array",
        items: {
          kind: "object",
          properties: {
            orderId: { kind: "number", integer: true },
            isError: { kind: "boolean" },
            errors: {
              kind: "array",
              items: {
                kind: "object",
                properties: {
                  code: { kind: "number", integer: true },
                  detail: { kind: "string" },
                },
                required: ["code", "detail"],
              },
            },
            metaDetails: {
              kind: "array",
              items: {
                kind: "object",
                properties: {
                  key: { kind: "string" },
                  value: { kind: "string", nullable: true },
                  decision: { kind: "string" },
                },
                required: ["decision", "key"],
              },
            },
          },
          required: ["isError", "metaDetails", "orderId"],
        },
      },
    },
    required: ["requestId", "orders"],
  },
  "api.OrdersMetaDeleteRequest": {
    kind: "object",
    properties: {
      key: {
        kind: "string",
        enum: ["imei", "uin", "gtin", "sgtin", "customsDeclaration"],
      },
      ordersIds: { kind: "array", items: { kind: "number", integer: true } },
    },
    required: ["key", "ordersIds"],
  },
};
