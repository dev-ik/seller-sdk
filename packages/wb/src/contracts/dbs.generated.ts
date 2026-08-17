// Generated runtime schemas for this Wildberries API domain.
import type { WbSchemaComponents } from "../schema.js";

export const dbsComponents: WbSchemaComponents = {
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
  "api.OrderGroupsRequest": {
    kind: "object",
    properties: { groups: { kind: "array", items: { kind: "string" } } },
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
  OrdersRequestAPI: {
    kind: "object",
    properties: {
      orders: { kind: "array", items: { kind: "number", integer: true } },
    },
    required: [],
  },
  "api.OrderGroup": {
    kind: "array",
    items: {
      kind: "object",
      properties: {
        groupID: { kind: "string" },
        deliveryCost: { kind: "number", integer: true },
        convertedDeliveryCost: { kind: "number", integer: true },
        currencyCode: { kind: "number", integer: true },
        convertedCurrencyCode: { kind: "number", integer: true },
      },
      required: [],
    },
    nullable: true,
  },
  DeliveryDatesRequest: {
    kind: "object",
    properties: {
      orders: { kind: "array", items: { kind: "number", integer: true } },
    },
    required: [],
  },
  Next: { kind: "number", integer: true },
  OrderNewDBS: {
    kind: "object",
    properties: {
      salePrice: { kind: "number", integer: true, nullable: true },
      requiredMeta: {
        kind: "array",
        items: { kind: "string" },
        nullable: true,
      },
      comment: { kind: "string", maxLength: 300 },
      options: {
        kind: "object",
        properties: { isB2b: { kind: "boolean" } },
        required: [],
      },
      address: {
        kind: "object",
        properties: {
          fullAddress: { kind: "string" },
          longitude: { kind: "number" },
          latitude: { kind: "number" },
        },
        required: [],
      },
      orderUid: { kind: "string" },
      groupId: { kind: "string" },
      article: { kind: "string" },
      colorCode: { kind: "string" },
      rid: { kind: "unknown" },
      createdAt: { kind: "string" },
      deliveryType: { kind: "string", enum: ["dbs", "edbs", "dbsPickupPoint"] },
      skus: { kind: "array", items: { kind: "string" } },
      id: { kind: "number", integer: true },
      warehouseId: { kind: "number", integer: true },
      nmId: { kind: "number", integer: true },
      chrtId: { kind: "number", integer: true },
      price: { kind: "number", integer: true },
      finalPrice: { kind: "number", integer: true },
      convertedFinalPrice: { kind: "number", integer: true },
      convertedPrice: { kind: "number", integer: true },
      currencyCode: { kind: "number", integer: true },
      convertedCurrencyCode: { kind: "number", integer: true },
      cargoType: { kind: "number", integer: true, enum: [1, 2, 3] },
      isZeroOrder: { kind: "boolean" },
      wbStickerId: { kind: "number", integer: true },
    },
    required: [],
  },
  OrderDBS: {
    kind: "object",
    properties: {
      address: {
        kind: "object",
        properties: {
          fullAddress: { kind: "string" },
          longitude: { kind: "number" },
          latitude: { kind: "number" },
        },
        required: [],
        nullable: true,
      },
      deliveryType: { kind: "string" },
      options: {
        kind: "object",
        properties: { isB2b: { kind: "boolean" } },
        required: [],
      },
      orderUid: { kind: "string" },
      groupId: { kind: "string" },
      article: { kind: "string" },
      colorCode: { kind: "string" },
      rid: { kind: "unknown" },
      createdAt: { kind: "string" },
      skus: { kind: "array", items: { kind: "string" } },
      id: { kind: "number", integer: true },
      warehouseId: { kind: "number", integer: true },
      nmId: { kind: "number", integer: true },
      chrtId: { kind: "number", integer: true },
      scanPrice: { kind: "number", integer: true, nullable: true },
      price: { kind: "number", integer: true },
      convertedPrice: { kind: "number", integer: true },
      currencyCode: { kind: "number", integer: true },
      convertedCurrencyCode: { kind: "number", integer: true },
      convertedFinalPrice: { kind: "number", integer: true },
      finalPrice: { kind: "number", integer: true },
      cargoType: { kind: "number", integer: true, enum: [1, 2, 3] },
      comment: { kind: "string", maxLength: 300 },
      isZeroOrder: { kind: "boolean" },
      wbStickerId: { kind: "number", integer: true },
    },
    required: [],
  },
  DbsOnlyClientInfo: {
    kind: "object",
    properties: {
      replacementPhone: { kind: "string" },
      firstName: { kind: "string" },
      fullName: { kind: "string" },
      orderID: { kind: "number", integer: true },
      phone: { kind: "string" },
      phoneCode: { kind: "number", integer: true },
      additionalPhoneCodes: { kind: "array", items: { kind: "string" } },
    },
    required: [],
  },
  DbsOnlyClientInfoResp: {
    kind: "object",
    properties: {
      orders: {
        kind: "array",
        items: { kind: "ref", name: "DbsOnlyClientInfo" },
        nullable: true,
      },
    },
    required: [],
  },
  DeliveryDatesInfoResp: {
    kind: "object",
    properties: {
      orders: {
        kind: "array",
        items: {
          kind: "object",
          properties: {
            dTimeFrom: { kind: "string", nullable: true },
            dTimeTo: { kind: "string", nullable: true },
            dTimeFromOld: { kind: "string", nullable: true },
            dTimeToOld: { kind: "string", nullable: true },
            dDateOld: { kind: "string", nullable: true },
            dDate: { kind: "string" },
            dDateFrom: { kind: "string", nullable: true },
            dDateTo: { kind: "string", nullable: true },
            id: { kind: "number", integer: true },
          },
          required: [],
        },
      },
    },
    required: [],
  },
  "api.OrdersMetaDeleteRequest": {
    kind: "object",
    properties: {
      key: {
        kind: "string",
        enum: ["imei", "uin", "gtin", "sgtin", "customsDeclaration"],
      },
      orderIds: { kind: "array", items: { kind: "number", integer: true } },
    },
    required: ["key", "orderIds"],
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
    required: ["orderId", "gtin"],
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
      requestId: { kind: "string" },
      results: {
        kind: "array",
        items: { kind: "ref", name: "api.StatusSetResponse" },
      },
    },
    required: [],
  },
  "api.StatusSetResponse": {
    kind: "object",
    properties: {
      errors: {
        kind: "array",
        items: { kind: "ref", name: "api.BatchErrorResponse" },
      },
      isError: { kind: "boolean" },
      orderId: { kind: "number", integer: true },
    },
    required: [],
  },
  "api.StatusSetDeliverResponses": {
    kind: "object",
    properties: {
      requestId: { kind: "string" },
      results: {
        kind: "array",
        items: { kind: "ref", name: "api.StatusSetDeliverResponse" },
      },
    },
    required: [],
  },
  "api.StatusSetDeliverResponse": {
    kind: "object",
    properties: {
      errors: {
        kind: "array",
        items: { kind: "ref", name: "api.BatchErrorDeliverResponse" },
      },
      isError: { kind: "boolean" },
      orderId: { kind: "number", integer: true },
    },
    required: [],
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
                required: [],
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
                required: [],
              },
            },
          },
          required: ["isError"],
        },
      },
    },
    required: ["requestId"],
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
        items: { kind: "ref", name: "api.BatchErrorResponse" },
      },
      orderId: { kind: "number", integer: true },
      supplierStatus: { kind: "string" },
      wbStatus: { kind: "string" },
    },
    required: [],
  },
  "api.OrdersCodeRequest": {
    kind: "object",
    properties: {
      orders: {
        kind: "array",
        items: { kind: "ref", name: "api.OrderCodeRequest" },
      },
    },
    required: ["orders"],
  },
  "api.OrderCodeRequest": {
    kind: "object",
    properties: {
      code: { kind: "string" },
      orderId: { kind: "number", integer: true },
    },
    required: [],
  },
  "api.BatchError": {
    kind: "object",
    properties: {
      detail: { kind: "object", properties: {}, required: [] },
      origin: { kind: "string" },
      requestId: { kind: "string" },
      title: { kind: "string" },
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
  "api.BatchErrorDeliverResponse": {
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
            value: { kind: "string" },
            decision: { kind: "string" },
          },
          required: [],
        },
      },
    },
    required: [],
  },
  "api.BatchErrorResponse": {
    kind: "object",
    properties: {
      code: { kind: "number", integer: true },
      detail: { kind: "string" },
    },
    required: [],
  },
  "api.Error": {
    kind: "object",
    properties: {
      detail: { kind: "object", properties: {}, required: [] },
      origin: { kind: "string" },
      requestId: { kind: "string" },
      title: { kind: "string" },
    },
    required: [],
  },
  "api.B2bClientInfoResponses": {
    kind: "object",
    properties: {
      requestId: { kind: "string" },
      results: {
        kind: "array",
        items: { kind: "ref", name: "api.B2bClientInfoResponse" },
      },
    },
    required: ["requestId"],
  },
  "api.B2bClientInfoResponse": {
    kind: "object",
    properties: {
      data: { kind: "ref", name: "api.B2bClientInfo" },
      errors: {
        kind: "array",
        items: {
          kind: "object",
          properties: {
            code: { kind: "number", integer: true },
            detail: { kind: "string" },
          },
          required: [],
        },
      },
      isError: { kind: "boolean" },
      orderId: { kind: "number", integer: true },
    },
    required: ["isError", "orderId"],
  },
  "api.B2bClientInfo": {
    kind: "object",
    properties: {
      inn: { kind: "string" },
      kpp: { kind: "string" },
      orgName: { kind: "string" },
    },
    required: [],
  },
  Response403General: {
    kind: "object",
    properties: {
      title: { kind: "string" },
      detail: { kind: "string" },
      code: { kind: "string" },
      requestId: { kind: "string" },
      origin: { kind: "string" },
      status: { kind: "number" },
      statusText: { kind: "string" },
      timestamp: { kind: "string" },
    },
    required: [],
  },
};
