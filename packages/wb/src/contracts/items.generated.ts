// Generated runtime schemas for this Wildberries API domain.
import type { WbSchemaComponents } from "../schema.js";

export const itemsComponents: WbSchemaComponents = {
  BrandsResponse: {
    kind: "object",
    properties: {
      brands: {
        kind: "array",
        items: {
          kind: "object",
          properties: {
            id: { kind: "number", integer: true },
            logoUrl: { kind: "string" },
            name: { kind: "string" },
          },
          required: ["id", "logoUrl", "name"],
        },
      },
      next: { kind: "number", integer: true },
      total: { kind: "number", integer: true },
    },
    required: ["brands", "total"],
  },
  BrandsResponseError: {
    kind: "object",
    properties: {
      title: { kind: "string" },
      detail: { kind: "string" },
      origin: { kind: "string" },
      requestId: { kind: "string" },
      errors: {
        kind: "array",
        items: {
          kind: "object",
          properties: {
            message: { kind: "string" },
            location: { kind: "string" },
            value: { kind: "unknown" },
          },
          required: [],
        },
      },
    },
    required: ["title", "detail", "origin", "requestId"],
  },
  StoreContactRequestBody: {
    kind: "object",
    properties: {
      contacts: {
        kind: "array",
        items: {
          kind: "object",
          properties: {
            comment: { kind: "string", maxLength: 1000 },
            phone: { kind: "string" },
          },
          required: [],
        },
      },
    },
    required: [],
  },
  responseItemList: {
    kind: "object",
    properties: {
      data: { kind: "object", properties: {}, required: [], nullable: true },
      error: { kind: "boolean" },
      errorText: { kind: "string" },
      additionalErrors: {
        kind: "union",
        choices: [
          {
            kind: "object",
            properties: { string: { kind: "string" } },
            required: [],
            additionalProperties: false,
            nullable: true,
          },
          { kind: "string", nullable: true },
          {
            kind: "object",
            properties: { error: { kind: "string" } },
            required: ["error"],
          },
        ],
      },
    },
    required: [],
  },
  requestMoveNmsImtConn: {
    kind: "object",
    properties: {
      targetIMT: { kind: "number", integer: true },
      nmIDs: { kind: "array", items: { kind: "number", integer: true } },
    },
    required: ["targetIMT", "nmIDs"],
  },
  requestMoveNmsImtDisconn: {
    kind: "object",
    properties: {
      nmIDs: { kind: "array", items: { kind: "number", integer: true } },
    },
    required: ["nmIDs"],
    additionalProperties: false,
  },
  responseIncorrectDate: {
    kind: "object",
    properties: { error: { kind: "string" } },
    required: [],
    additionalProperties: false,
  },
  responseBodyContentError400: {
    kind: "object",
    properties: {
      data: { kind: "object", properties: {}, required: [], nullable: true },
      error: { kind: "boolean" },
      errorText: { kind: "string" },
      additionalErrors: {
        kind: "object",
        properties: {},
        required: [],
        nullable: true,
      },
    },
    required: [],
  },
  responseBodyContentError403: {
    kind: "object",
    properties: {
      data: { kind: "object", properties: {}, required: [], nullable: true },
      error: { kind: "boolean" },
      errorText: { kind: "string" },
      additionalErrors: { kind: "string", nullable: true },
    },
    required: [],
  },
  responseContentError: {
    kind: "object",
    properties: {
      data: { kind: "object", properties: {}, required: [], nullable: true },
      error: { kind: "boolean" },
      errorText: { kind: "string" },
      additionalErrors: { kind: "string", nullable: true },
    },
    required: [],
  },
  mediaErrors: {
    kind: "object",
    properties: {
      additionalErrors: {
        kind: "object",
        properties: {},
        required: [],
        nullable: true,
      },
      data: { kind: "object", properties: {}, required: [], nullable: true },
      error: { kind: "boolean" },
      errorText: { kind: "string" },
    },
    required: [],
  },
  ResponseError: {
    kind: "object",
    properties: {
      data: { kind: "object", properties: {}, required: [], nullable: true },
      error: { kind: "boolean" },
      errorText: { kind: "string" },
    },
    required: [],
  },
  ResponseErrorV3: {
    kind: "object",
    properties: {
      status: { kind: "number", integer: true },
      title: { kind: "string" },
      detail: { kind: "string" },
      requestId: { kind: "string" },
      origin: { kind: "string" },
    },
    required: ["status", "title", "detail", "requestId", "origin"],
  },
  RequestAlreadyExistsError: {
    kind: "object",
    properties: {
      data: {
        kind: "object",
        properties: {
          id: { kind: "number", integer: true },
          alreadyExists: { kind: "boolean" },
        },
        required: [],
      },
      error: { kind: "boolean" },
      errorText: { kind: "string" },
    },
    required: [],
  },
  UpdateBlocked: {
    kind: "object",
    properties: {
      code: { kind: "string" },
      message: { kind: "string" },
      data: { kind: "object", properties: {}, required: [], nullable: true },
    },
    required: [],
  },
  StocksWarehouseError: {
    kind: "array",
    items: {
      kind: "object",
      properties: {
        data: {
          kind: "array",
          items: {
            kind: "object",
            properties: {
              sku: { kind: "string" },
              chrtId: { kind: "number", integer: true },
              amount: { kind: "number", integer: true },
            },
            required: [],
          },
          nullable: true,
        },
        code: { kind: "string" },
        message: { kind: "string" },
      },
      required: [],
    },
  },
  TaskCreated: {
    kind: "object",
    properties: {
      data: {
        kind: "object",
        properties: {
          id: { kind: "number", integer: true },
          alreadyExists: { kind: "boolean" },
        },
        required: [],
      },
      error: { kind: "boolean" },
      errorText: { kind: "string" },
    },
    required: [],
  },
  Items: { kind: "array", items: { kind: "ref", name: "Good" } },
  Good: {
    kind: "object",
    properties: {
      nmID: { kind: "number", integer: true },
      price: { kind: "number", integer: true },
      discount: { kind: "number", integer: true },
    },
    required: ["nmID"],
  },
  SizeItemsBody: { kind: "array", items: { kind: "ref", name: "SizeGoodReq" } },
  SizeGoodReq: {
    kind: "object",
    properties: {
      nmID: { kind: "number", integer: true },
      sizeID: { kind: "number", integer: true },
      price: { kind: "number", integer: true },
    },
    required: ["nmID", "sizeID", "price"],
  },
  ClubDisc: { kind: "array", items: { kind: "ref", name: "ClubDiscReq" } },
  ClubDiscReq: {
    kind: "object",
    properties: {
      nmID: { kind: "number", integer: true },
      clubDiscount: { kind: "number", integer: true },
    },
    required: ["nmID", "clubDiscount"],
  },
  B2BWholesale: {
    kind: "array",
    items: {
      kind: "object",
      properties: {
        nmId: { kind: "number", integer: true },
        wholesaleDiscountThreshold: {
          kind: "array",
          items: { kind: "ref", name: "WholesaleDiscountThresholdReq" },
        },
      },
      required: ["nmId", "wholesaleDiscountThreshold"],
    },
  },
  WholesaleDiscountThresholdReq: {
    kind: "object",
    properties: {
      minQuantity: { kind: "number", integer: true },
      wholesaleDiscount: { kind: "number", integer: true },
      level: { kind: "number", integer: true },
    },
    required: ["minQuantity", "wholesaleDiscount", "level"],
  },
  WholesaleDiscountThresholdRes: {
    kind: "object",
    properties: {
      minQuantity: { kind: "number", integer: true },
      wholesaleDiscount: { kind: "number", integer: true },
      level: { kind: "number", integer: true },
    },
    required: ["minQuantity", "wholesaleDiscount", "level"],
  },
  ItemsList: {
    kind: "object",
    properties: {
      nmID: { kind: "number", integer: true },
      vendorCode: { kind: "string" },
      sizes: {
        kind: "array",
        items: {
          kind: "object",
          properties: {
            sizeID: { kind: "number", integer: true },
            price: { kind: "number", integer: true },
            discountedPrice: { kind: "number" },
            clubDiscountedPrice: { kind: "number" },
            techSizeName: { kind: "string" },
          },
          required: [
            "sizeID",
            "price",
            "discountedPrice",
            "clubDiscountedPrice",
            "techSizeName",
          ],
        },
      },
      currencyIsoCode4217: { kind: "string" },
      discount: { kind: "number", integer: true },
      clubDiscount: { kind: "number", integer: true },
      editableSizePrice: { kind: "boolean" },
      wholesaleDiscountThreshold: {
        kind: "array",
        items: { kind: "ref", name: "WholesaleDiscountThresholdRes" },
      },
      isBadTurnover: { kind: "boolean" },
    },
    required: [],
  },
  SizeGood: {
    kind: "object",
    properties: {
      nmID: { kind: "number", integer: true },
      sizeID: { kind: "number", integer: true },
      vendorCode: { kind: "string" },
      price: { kind: "number", integer: true },
      currencyIsoCode4217: { kind: "string" },
      discountedPrice: { kind: "number" },
      clubDiscountedPrice: { kind: "number" },
      discount: { kind: "number", integer: true },
      clubDiscount: { kind: "number", integer: true },
      techSizeName: { kind: "string" },
      editableSizePrice: { kind: "boolean" },
      isBadTurnover: { kind: "boolean" },
    },
    required: [],
  },
  GoodBufferHistory: {
    kind: "object",
    properties: {
      nmID: { kind: "number", integer: true },
      vendorCode: { kind: "string" },
      sizeID: { kind: "number", integer: true },
      techSizeName: { kind: "string" },
      price: { kind: "number", integer: true },
      currencyIsoCode4217: { kind: "string" },
      discount: { kind: "number", integer: true },
      clubDiscount: { kind: "number", integer: true },
      status: { kind: "ref", name: "ItemStatusBuffer" },
      errorText: { kind: "string", nullable: true },
    },
    required: [],
  },
  GoodHistory: {
    kind: "object",
    properties: {
      nmID: { kind: "number", integer: true },
      vendorCode: { kind: "string" },
      sizeID: { kind: "number", integer: true, nullable: true },
      techSizeName: { kind: "string" },
      price: { kind: "number", integer: true, nullable: true },
      currencyIsoCode4217: { kind: "string" },
      discount: { kind: "number", integer: true },
      clubDiscount: { kind: "number", integer: true, nullable: true },
      status: { kind: "ref", name: "ItemStatus" },
      errorText: { kind: "string", nullable: true },
    },
    required: [],
  },
  SellerTaskMetadata: {
    kind: "object",
    properties: {
      uploadID: { kind: "number", integer: true },
      status: { kind: "ref", name: "TaskStatus" },
      uploadDate: { kind: "ref", name: "Date" },
      activationDate: { kind: "ref", name: "Date1" },
      overAllGoodsNumber: { kind: "number", integer: true },
      successGoodsNumber: { kind: "number", integer: true },
    },
    required: [],
    nullable: true,
  },
  SellerTaskMetadataBuffer: {
    kind: "object",
    properties: {
      uploadID: { kind: "number", integer: true },
      status: { kind: "ref", name: "TaskStatusBuffer" },
      uploadDate: { kind: "ref", name: "Date" },
      activationDate: { kind: "ref", name: "Date1" },
      overAllGoodsNumber: { kind: "number", integer: true },
      successGoodsNumber: { kind: "number", integer: true },
    },
    required: [],
    nullable: true,
  },
  Date: { kind: "string" },
  Date1: { kind: "string" },
  TaskStatus: { kind: "number", integer: true },
  TaskStatusBuffer: { kind: "number", integer: true },
  ItemStatus: { kind: "number", integer: true },
  ItemStatusBuffer: { kind: "number", integer: true },
  Error: {
    kind: "object",
    properties: {
      code: { kind: "string" },
      message: { kind: "string" },
      data: { kind: "object", properties: {}, required: [], nullable: true },
    },
    required: [],
  },
  QuarantineItems: {
    kind: "object",
    properties: {
      nmID: { kind: "number", integer: true },
      sizeID: { kind: "number", integer: true, nullable: true },
      techSizeName: { kind: "string" },
      currencyIsoCode4217: { kind: "string" },
      newPrice: { kind: "number", nullable: true },
      oldPrice: { kind: "number" },
      newDiscount: { kind: "number", integer: true, nullable: true },
      oldDiscount: { kind: "number", integer: true },
      priceDiff: { kind: "number" },
    },
    required: [],
  },
  Office: {
    kind: "object",
    properties: {
      address: { kind: "string" },
      name: { kind: "string" },
      city: { kind: "string" },
      id: { kind: "number", integer: true },
      longitude: { kind: "number" },
      latitude: { kind: "number" },
      cargoType: { kind: "number", integer: true, enum: [1, 3] },
      deliveryType: { kind: "number", integer: true, enum: [1, 2, 3, 5, 6] },
      federalDistrict: { kind: "string", nullable: true },
      selected: { kind: "boolean" },
    },
    required: [],
  },
  Warehouse: {
    kind: "object",
    properties: {
      name: { kind: "string" },
      officeId: { kind: "number", integer: true },
      id: { kind: "number", integer: true },
      cargoType: { kind: "number", integer: true, enum: [1, 2, 3] },
      deliveryType: { kind: "number", integer: true, enum: [1, 2, 3, 5, 6] },
      isDeleting: { kind: "boolean" },
      isProcessing: { kind: "boolean" },
    },
    required: [],
  },
  responsePublicViewerPublicErrorsTableListV2: {
    kind: "object",
    properties: {
      data: { kind: "ref", name: "models.ErrorTableListPublicRespV2" },
      error: { kind: "boolean" },
      errorText: { kind: "string" },
      additionalErrors: {
        kind: "object",
        properties: {},
        required: [],
        nullable: true,
      },
    },
    required: ["data", "error", "errorText", "additionalErrors"],
  },
  "models.ErrorTableListPublicRespV2": {
    kind: "object",
    properties: {
      items: {
        kind: "array",
        items: { kind: "ref", name: "models.ErrorTableListPublicRespV2Item" },
      },
      cursor: { kind: "ref", name: "viewer_contract.PublicErrorsCursorOutput" },
    },
    required: ["items", "cursor"],
  },
  "models.ErrorTableListPublicRespV2Item": {
    kind: "object",
    properties: {
      batchUUID: { kind: "string" },
      subjects: {
        kind: "object",
        properties: {},
        required: [],
        additionalProperties: { kind: "ref", name: "models.ErrorSubcategory" },
      },
      brands: {
        kind: "object",
        properties: {},
        required: [],
        additionalProperties: { kind: "ref", name: "models.ErrorBrand" },
      },
      vendorCodes: { kind: "array", items: { kind: "string" } },
      errors: {
        kind: "object",
        properties: {},
        required: [],
        additionalProperties: { kind: "array", items: { kind: "string" } },
      },
      updatedAt: { kind: "string" },
    },
    required: [
      "batchUUID",
      "subjects",
      "brands",
      "vendorCodes",
      "errors",
      "updatedAt",
    ],
  },
  "viewer_contract.PublicErrorsCursorOutput": {
    kind: "object",
    properties: {
      next: { kind: "boolean" },
      updatedAt: { kind: "string" },
      batchUUID: { kind: "string" },
    },
    required: ["next", "updatedAt", "batchUUID"],
  },
  "models.ErrorSubcategory": {
    kind: "object",
    properties: { id: { kind: "number" }, name: { kind: "string" } },
    required: ["id", "name"],
  },
  "models.ErrorBrand": {
    kind: "object",
    properties: { id: { kind: "number" }, name: { kind: "string" } },
    required: [],
  },
  requestPublicViewerPublicErrorsTableListV2: {
    kind: "object",
    properties: {
      cursor: { kind: "ref", name: "swagger.PublicErrorsCursorInput" },
      order: { kind: "ref", name: "swagger.PublicErrorsOrderV2" },
    },
    required: [],
  },
  "swagger.PublicErrorsCursorInput": {
    kind: "object",
    properties: {
      limit: { kind: "number", maximum: 100 },
      updatedAt: { kind: "string" },
      batchUUID: { kind: "string" },
    },
    required: [],
  },
  "swagger.PublicErrorsOrderV2": {
    kind: "object",
    properties: { ascending: { kind: "boolean" } },
    required: [],
  },
  GetRecomReq: {
    kind: "object",
    properties: {
      brandNames: { kind: "array", items: { kind: "string" } },
      limit: { kind: "number", integer: true, minimum: 0, maximum: 5000 },
      next: { kind: "number", integer: true },
      search: { kind: "string", maxLength: 72 },
      subjectIds: { kind: "array", items: { kind: "number", integer: true } },
    },
    required: [],
  },
  GetRecomRes: {
    kind: "object",
    properties: {
      data: {
        kind: "array",
        items: {
          kind: "object",
          properties: {
            nmId: { kind: "number", integer: true },
            imtId: { kind: "number", integer: true },
            vendorCode: { kind: "string" },
            brandName: { kind: "string" },
            updatedAt: { kind: "string", nullable: true },
            picsCount: { kind: "number", integer: true },
            title: { kind: "string" },
            subjectName: { kind: "string" },
            pic: { kind: "string" },
            recomCount: { kind: "number", integer: true },
            recomPics: { kind: "array", items: { kind: "string" } },
            recomNms: {
              kind: "array",
              items: { kind: "number", integer: true },
            },
          },
          required: [
            "brandName",
            "imtId",
            "nmId",
            "pic",
            "picsCount",
            "recomCount",
            "recomPics",
            "recomNms",
            "subjectName",
            "title",
            "vendorCode",
          ],
        },
      },
      next: { kind: "number", integer: true },
    },
    required: ["data", "next"],
  },
  response400GetRecom: {
    kind: "object",
    properties: {
      requestId: { kind: "string" },
      origin: { kind: "string" },
      title: { kind: "string" },
      detail: { kind: "string" },
    },
    required: ["detail", "origin", "requestId", "title"],
  },
  SetRecomReq: {
    kind: "object",
    properties: {
      recList: {
        kind: "array",
        items: {
          kind: "object",
          properties: {
            nmId: { kind: "number", integer: true },
            recommendations: {
              kind: "array",
              items: {
                kind: "object",
                properties: {
                  recomNm: { kind: "number", integer: true },
                  sort: {
                    kind: "number",
                    integer: true,
                    minimum: 0,
                    maximum: 20,
                  },
                },
                required: [],
              },
            },
          },
          required: [],
        },
      },
      replace: { kind: "boolean" },
    },
    required: ["recList"],
  },
  SetRecomRes: {
    kind: "object",
    properties: {
      isError: { kind: "boolean" },
      errors: {
        kind: "array",
        items: {
          kind: "object",
          properties: {
            mainNm: { kind: "string" },
            recomNm: { kind: "string" },
            message: { kind: "string" },
          },
          required: ["mainNm", "message", "recomNm"],
        },
      },
    },
    required: ["isError"],
  },
  response208SetRecom: {
    kind: "object",
    properties: {
      requestId: { kind: "string" },
      origin: { kind: "string" },
      title: { kind: "string" },
      detail: { kind: "string" },
    },
    required: ["detail", "origin", "requestId", "title"],
  },
  response400SetRecom: {
    kind: "object",
    properties: {
      requestId: { kind: "string" },
      origin: { kind: "string" },
      title: { kind: "string" },
      detail: { kind: "string" },
    },
    required: ["detail", "origin", "requestId", "title"],
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
