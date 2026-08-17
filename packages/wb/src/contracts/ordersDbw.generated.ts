// Generated runtime schemas for this Wildberries API domain.
import type { WbSchemaComponents } from "../schema.js";

export const ordersDbwComponents: WbSchemaComponents = {
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
  "api.StatusSetResponses": {
    kind: "object",
    properties: {
      requestId: { kind: "string" },
      results: {
        kind: "array",
        items: { kind: "ref", name: "api.StatusSetResponse" },
      },
    },
    required: ["results"],
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
    required: ["isError", "orderId"],
  },
  "api.BatchErrorResponse": {
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
          required: ["decision", "key"],
        },
      },
    },
    required: ["code", "detail"],
  },
  "api.MetaDeleteResponses": {
    kind: "object",
    properties: {
      requestId: { kind: "string" },
      results: {
        kind: "array",
        items: {
          kind: "object",
          properties: {
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
            isError: { kind: "boolean" },
            orderId: { kind: "number", integer: true },
          },
          required: ["isError", "orderId"],
        },
      },
    },
    required: ["results"],
  },
  "api.OrdersRequestV2": {
    kind: "object",
    properties: {
      ordersIds: { kind: "array", items: { kind: "number", integer: true } },
    },
    required: ["ordersIds"],
  },
  "api.OrdersMetaDleteRequestV2": {
    kind: "object",
    properties: {
      key: { kind: "string", enum: ["imei", "uin", "gtin", "sgtin"] },
      ordersIds: { kind: "array", items: { kind: "number", integer: true } },
    },
    required: ["key", "ordersIds"],
  },
  ClientInfo: {
    kind: "object",
    properties: {
      replacementPhone: { kind: "string" },
      phone: { kind: "string" },
      firstName: { kind: "string" },
      fullName: { kind: "string" },
      additionalPhones: { kind: "array", items: { kind: "string" } },
      additionalPhoneCodes: {
        kind: "array",
        items: { kind: "number", integer: true },
      },
      orderId: { kind: "number", integer: true },
      phoneCode: { kind: "number", integer: true },
    },
    required: [],
  },
  ClientInfoResp: {
    kind: "object",
    properties: {
      orders: { kind: "array", items: { kind: "ref", name: "ClientInfo" } },
    },
    required: [],
  },
  OrderCourierInfo: {
    kind: "object",
    properties: {
      courierInfo: {
        kind: "object",
        properties: {
          contacts: {
            kind: "object",
            properties: {
              carNumber: { kind: "string" },
              fullName: { kind: "string" },
              phone: { kind: "string" },
              pTimeFrom: { kind: "string", nullable: true },
              pTimeTo: { kind: "string", nullable: true },
            },
            required: [],
            nullable: true,
          },
          mustBeAssigned: { kind: "boolean" },
          updatedAt: { kind: "string", nullable: true },
        },
        required: [],
      },
      orderID: { kind: "number", integer: true },
    },
    required: [],
  },
  OrderCourierInfoResp: {
    kind: "object",
    properties: {
      orders: {
        kind: "array",
        items: { kind: "ref", name: "OrderCourierInfo" },
      },
    },
    required: [],
  },
  CourierContactsResponse: {
    kind: "object",
    properties: {
      carNumber: { kind: "string" },
      fullName: { kind: "string" },
      phone: { kind: "string" },
      pTimeFrom: { kind: "string", nullable: true },
      pTimeTo: { kind: "string", nullable: true },
    },
    required: [],
  },
  CourierInfo: {
    kind: "object",
    properties: {
      contacts: {
        kind: "object",
        properties: {
          carNumber: { kind: "string" },
          fullName: { kind: "string" },
          phone: { kind: "string" },
          pTimeFrom: { kind: "string", nullable: true },
          pTimeTo: { kind: "string", nullable: true },
        },
        required: [],
        nullable: true,
      },
      mustBeAssigned: { kind: "boolean" },
      updatedAt: { kind: "string", nullable: true },
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
  "api.BatchError": {
    kind: "object",
    properties: {
      detail: { kind: "string", nullable: true },
      origin: { kind: "string" },
      requestId: { kind: "string" },
      title: { kind: "string" },
    },
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
  DeliveryDatesRequest: {
    kind: "object",
    properties: {
      orders: { kind: "array", items: { kind: "number", integer: true } },
    },
    required: [],
  },
  Next: { kind: "number", integer: true },
  OrderNewDBW: {
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
      orderUid: { kind: "string" },
      groupId: { kind: "string" },
      article: { kind: "string" },
      colorCode: { kind: "string" },
      rid: { kind: "string" },
      createdAt: { kind: "string" },
      skus: { kind: "array", items: { kind: "string" } },
      id: { kind: "number", integer: true },
      warehouseId: { kind: "number", integer: true },
      nmId: { kind: "number", integer: true },
      chrtId: { kind: "number", integer: true },
      price: { kind: "number", integer: true },
      convertedPrice: { kind: "number", integer: true },
      currencyCode: { kind: "number", integer: true },
      convertedCurrencyCode: { kind: "number", integer: true },
      cargoType: { kind: "number", integer: true, enum: [1, 2, 3] },
      isZeroOrder: { kind: "boolean" },
    },
    required: [],
  },
  Order: {
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
      options: {
        kind: "object",
        properties: { isB2b: { kind: "boolean" } },
        required: [],
      },
      orderUid: { kind: "string" },
      groupId: { kind: "string" },
      article: { kind: "string" },
      colorCode: { kind: "string" },
      rid: { kind: "string" },
      createdAt: { kind: "string" },
      skus: { kind: "array", items: { kind: "string" } },
      id: { kind: "number", integer: true },
      warehouseId: { kind: "number", integer: true },
      nmId: { kind: "number", integer: true },
      chrtId: { kind: "number", integer: true },
      price: { kind: "number", integer: true },
      convertedPrice: { kind: "number", integer: true },
      currencyCode: { kind: "number", integer: true },
      convertedCurrencyCode: { kind: "number", integer: true },
      cargoType: { kind: "number", integer: true, enum: [1, 2, 3] },
      comment: { kind: "string", maxLength: 300 },
      isZeroOrder: { kind: "boolean" },
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
            id: { kind: "number", integer: true },
          },
          required: [],
        },
      },
    },
    required: [],
  },
};
