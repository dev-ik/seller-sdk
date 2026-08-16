import { ozonDomainAliases, ozonDomainMethods } from "./domain-methods.js";
import type { GeneratedOzonDomainApi } from "./domain-api.generated.js";
import type { OzonOperations } from "./operations.js";
import { paginateOzonItems, paginateOzonPages } from "./pagination.js";
import type { OzonRequestOptions } from "./request-options.js";
import type {
  ListProductsRequest,
  ListProductsResponse,
  OzonProductListItem,
} from "./endpoints/product/list/types.js";
import type {
  ListFboPostingsV3Request,
  ListFboPostingsV3Response,
  OzonFboPostingV3,
} from "./endpoints/posting/fbo/list/v3/types.js";
import type {
  ListFbsPostingsV4Request,
  ListFbsPostingsV4Response,
} from "./endpoints/posting/fbs/list/v4/types.js";
import type { OzonFbsPostingV4 } from "./endpoints/posting/fbs/shared/v4/types.js";

type OzonOperationMethodName =
  (typeof ozonDomainMethods)[keyof typeof ozonDomainMethods][number];

type BoundOperationMethod<MethodName extends OzonOperationMethodName> =
  OzonOperations[MethodName] extends (...args: infer Arguments) => infer Result
    ? (...args: Arguments) => Result
    : never;

type BaseOzonDomainApi = GeneratedOzonDomainApi;

export type OzonFinanceApi = BaseOzonDomainApi["finance"] & {
  /** Актуальные методы начислений без версий в пользовательском API. */
  readonly accruals: {
    /** Получить начисления за день. Для следующей страницы передайте возвращённый `last_id`. */
    readonly byDay: BoundOperationMethod<"getFinanceAccrualByDayV1">;
    /** Получить начисления по номерам отправлений. */
    readonly byPostings: BoundOperationMethod<"getFinanceAccrualPostingsV1">;
    /** Получить справочник типов начислений. */
    readonly types: BoundOperationMethod<"listFinanceAccrualTypesV1">;
  };
};

export type OzonProductsApi = BaseOzonDomainApi["products"] & {
  /** Получить список товаров. Для следующей страницы передайте `last_id` из предыдущего ответа. */
  readonly list: BoundOperationMethod<"listProducts">;
  /** Последовательно получить страницы списка товаров. */
  readonly listPages: (
    input: ListProductsRequest,
    options?: OzonRequestOptions,
  ) => AsyncIterable<ListProductsResponse>;
  /** Последовательно получить товары со всех страниц без накопления в памяти. */
  readonly listAll: (
    input: ListProductsRequest,
    options?: OzonRequestOptions,
  ) => AsyncIterable<OzonProductListItem>;
  /** Управление жизненным циклом товаров. */
  readonly lifecycle: {
    /** Перенести товары в архив. */
    readonly archive: BoundOperationMethod<"archiveProducts">;
    /** Удалить товары без SKU из кабинета продавца. */
    readonly delete: BoundOperationMethod<"deleteProducts">;
    /** Вернуть товары из архива. */
    readonly unarchive: BoundOperationMethod<"unarchiveProducts">;
  };
  /** Изображения товаров. */
  readonly pictures: {
    /** Получить изображения товаров. */
    readonly get: BoundOperationMethod<"getProductPictures">;
    /** Загрузить или обновить изображения товара. */
    readonly import: BoundOperationMethod<"importProductPictures">;
  };
  /** Цены товаров. */
  readonly prices: {
    /** Получить цены товаров. */
    readonly get: BoundOperationMethod<"getProductPrices">;
    /** Получить подробную информацию о цене товара. */
    readonly getDetails: BoundOperationMethod<"getProductPriceDetailsV1">;
    /** Обновить цены товаров. */
    readonly update: BoundOperationMethod<"updateProductPrices">;
  };
  /** Остатки товаров. */
  readonly stocks: {
    /** Получить информацию об остатках товаров. */
    readonly get: BoundOperationMethod<"getProductStocks">;
    /** Получить остатки по складам. */
    readonly getByWarehouse: BoundOperationMethod<"getProductStocksByWarehouse">;
    /** Получить остатки по FBS-складам. */
    readonly getByWarehouseFbs: BoundOperationMethod<"getProductStocksByWarehouseFbsV2">;
    /** Обновить остатки на складах продавца. */
    readonly update: BoundOperationMethod<"updateProductStocks">;
  };
};

export type OzonPostingsApi = BaseOzonDomainApi["postings"] & {
  /** Отправления FBO. */
  readonly fbo: {
    /** Отменить FBO-отправление. */
    readonly cancel: BoundOperationMethod<"cancelFboPosting">;
    /** Получить FBO-отправление. */
    readonly get: BoundOperationMethod<"getFboPostingV2">;
    /** Получить статус отмены FBO-отправления. */
    readonly getCancellationStatus: BoundOperationMethod<"getFboPostingCancellationStatus">;
    /** Получить маркировку товаров в FBO-отправлении. */
    readonly getMarks: BoundOperationMethod<"getFboPostingMarks">;
    /** Получить список FBO-отправлений через актуальную версию API. */
    readonly list: BoundOperationMethod<"listFboPostingsV3">;
    readonly listPages: (
      input: ListFboPostingsV3Request,
      options?: OzonRequestOptions,
    ) => AsyncIterable<ListFboPostingsV3Response>;
    readonly listAll: (
      input: ListFboPostingsV3Request,
      options?: OzonRequestOptions,
    ) => AsyncIterable<OzonFboPostingV3>;
    /** Получить причины отмены FBO-отправлений. */
    readonly listCancelReasons: BoundOperationMethod<"listFboPostingCancelReasons">;
    /** @deprecated Ozon отключает v2 31 августа 2026 года. Используйте `list`. */
    readonly listV2: BoundOperationMethod<"listFboPostingsV2">;
    readonly listV3: BoundOperationMethod<"listFboPostingsV3">;
  };
  /** Отправления FBS. */
  readonly fbs: {
    /** Получить FBS-отправление. */
    readonly get: BoundOperationMethod<"getFbsPostingV3">;
    /** Получить список FBS-отправлений через актуальную версию API. */
    readonly list: BoundOperationMethod<"listFbsPostingsV4">;
    readonly listPages: (
      input: ListFbsPostingsV4Request,
      options?: OzonRequestOptions,
    ) => AsyncIterable<ListFbsPostingsV4Response>;
    readonly listAll: (
      input: ListFbsPostingsV4Request,
      options?: OzonRequestOptions,
    ) => AsyncIterable<OzonFbsPostingV4>;
    /** @deprecated Ozon отключает v3 31 августа 2026 года. Используйте `list`. */
    readonly listV3: BoundOperationMethod<"listFbsPostingsV3">;
    readonly listV4: BoundOperationMethod<"listFbsPostingsV4">;
  };
};

export type OzonDomainApi = Omit<
  BaseOzonDomainApi,
  "finance" | "postings" | "products"
> & {
  readonly finance: OzonFinanceApi;
  readonly postings: OzonPostingsApi;
  readonly products: OzonProductsApi;
};

export function createOzonDomainApi(operations: OzonOperations): OzonDomainApi {
  const domains: Record<string, Record<string, unknown>> = {};

  for (const [domainName, methodNames] of Object.entries(ozonDomainMethods)) {
    const domain: Record<string, unknown> = {};
    for (const methodName of methodNames) {
      const method = operations[methodName] as (...args: never[]) => unknown;
      domain[methodName] = method.bind(operations);
    }
    domains[domainName] = domain;
  }

  for (const [domainName, aliases] of Object.entries(ozonDomainAliases)) {
    const domain = domains[domainName];
    if (domain === undefined) continue;
    for (const [alias, methodName] of Object.entries(aliases)) {
      domain[alias] = domain[methodName];
    }
  }

  const baseApi = domains as unknown as BaseOzonDomainApi;

  return {
    ...baseApi,
    finance: {
      ...baseApi.finance,
      accruals: {
        byDay: baseApi.finance.getFinanceAccrualByDayV1,
        byPostings: baseApi.finance.getFinanceAccrualPostingsV1,
        types: baseApi.finance.listFinanceAccrualTypesV1,
      },
    },
    postings: {
      ...baseApi.postings,
      fbo: {
        cancel: baseApi.postings.cancelFboPosting,
        get: baseApi.postings.getFboPostingV2,
        getCancellationStatus: baseApi.postings.getFboPostingCancellationStatus,
        getMarks: baseApi.postings.getFboPostingMarks,
        list: baseApi.postings.listFboPostingsV3,
        listPages: (input, options) =>
          paginateFboPostingPages(
            baseApi.postings.listFboPostingsV3,
            input,
            options,
          ),
        listAll: (input, options) =>
          paginateOzonItems({
            ...createFboPostingPagination(
              baseApi.postings.listFboPostingsV3,
              input,
              options,
            ),
            getItems: (page) => page.postings,
          }),
        listCancelReasons: baseApi.postings.listFboPostingCancelReasons,
        listV2: baseApi.postings.listFboPostingsV2,
        listV3: baseApi.postings.listFboPostingsV3,
      },
      fbs: {
        get: baseApi.postings.getFbsPostingV3,
        list: baseApi.postings.listFbsPostingsV4,
        listPages: (input, options) =>
          paginateFbsPostingPages(
            baseApi.postings.listFbsPostingsV4,
            input,
            options,
          ),
        listAll: (input, options) =>
          paginateOzonItems({
            ...createFbsPostingPagination(
              baseApi.postings.listFbsPostingsV4,
              input,
              options,
            ),
            getItems: (page) => page.postings,
          }),
        listV3: baseApi.postings.listFbsPostingsV3,
        listV4: baseApi.postings.listFbsPostingsV4,
      },
    },
    products: {
      ...baseApi.products,
      list: baseApi.products.listProducts,
      listPages: (input, options) =>
        paginateProductPages(baseApi.products.listProducts, input, options),
      listAll: (input, options) =>
        paginateOzonItems({
          ...createProductPagination(
            baseApi.products.listProducts,
            input,
            options,
          ),
          getItems: (page) => page.result?.items,
        }),
      lifecycle: {
        archive: baseApi.products.archiveProducts,
        delete: baseApi.products.deleteProducts,
        unarchive: baseApi.products.unarchiveProducts,
      },
      pictures: {
        get: baseApi.products.getProductPictures,
        import: baseApi.products.importProductPictures,
      },
      prices: {
        get: baseApi.products.getProductPrices,
        getDetails: baseApi.products.getProductPriceDetailsV1,
        update: baseApi.products.updateProductPrices,
      },
      stocks: {
        get: baseApi.products.getProductStocks,
        getByWarehouse: baseApi.products.getProductStocksByWarehouse,
        getByWarehouseFbs: baseApi.products.getProductStocksByWarehouseFbsV2,
        update: baseApi.products.updateProductStocks,
      },
    },
  };
}

type PageMethod<Input, Page> = (
  input: Input,
  options?: OzonRequestOptions,
) => Promise<Page>;

function createProductPagination(
  method: PageMethod<ListProductsRequest, ListProductsResponse>,
  initialInput: ListProductsRequest,
  options?: OzonRequestOptions,
) {
  return {
    initialInput,
    fetchPage: (input: ListProductsRequest) => method(input, options),
    getNextInput: ({
      input,
      page,
    }: {
      input: ListProductsRequest;
      page: ListProductsResponse;
    }) => {
      const cursor = page.result?.last_id;
      if (
        cursor === undefined ||
        cursor.length === 0 ||
        cursor === input.last_id ||
        (page.result?.items?.length ?? 0) === 0
      ) {
        return undefined;
      }
      return { ...input, last_id: cursor };
    },
  };
}

function paginateProductPages(
  method: PageMethod<ListProductsRequest, ListProductsResponse>,
  input: ListProductsRequest,
  options?: OzonRequestOptions,
): AsyncIterable<ListProductsResponse> {
  return paginateOzonPages(createProductPagination(method, input, options));
}

function createFboPostingPagination(
  method: PageMethod<ListFboPostingsV3Request, ListFboPostingsV3Response>,
  initialInput: ListFboPostingsV3Request,
  options?: OzonRequestOptions,
) {
  return {
    initialInput,
    fetchPage: (input: ListFboPostingsV3Request) => method(input, options),
    getNextInput: ({
      input,
      page,
    }: {
      input: ListFboPostingsV3Request;
      page: ListFboPostingsV3Response;
    }) => {
      const cursor = page.cursor;
      if (page.has_next !== true || !cursor || cursor === input.cursor) {
        return undefined;
      }
      return { ...input, cursor };
    },
  };
}

function paginateFboPostingPages(
  method: PageMethod<ListFboPostingsV3Request, ListFboPostingsV3Response>,
  input: ListFboPostingsV3Request,
  options?: OzonRequestOptions,
): AsyncIterable<ListFboPostingsV3Response> {
  return paginateOzonPages(createFboPostingPagination(method, input, options));
}

function createFbsPostingPagination(
  method: PageMethod<ListFbsPostingsV4Request, ListFbsPostingsV4Response>,
  initialInput: ListFbsPostingsV4Request,
  options?: OzonRequestOptions,
) {
  return {
    initialInput,
    fetchPage: (input: ListFbsPostingsV4Request) => method(input, options),
    getNextInput: ({
      input,
      page,
    }: {
      input: ListFbsPostingsV4Request;
      page: ListFbsPostingsV4Response;
    }) => {
      const cursor = page.cursor;
      if (page.has_next !== true || !cursor || cursor === input.cursor) {
        return undefined;
      }
      return { ...input, cursor };
    },
  };
}

function paginateFbsPostingPages(
  method: PageMethod<ListFbsPostingsV4Request, ListFbsPostingsV4Response>,
  input: ListFbsPostingsV4Request,
  options?: OzonRequestOptions,
): AsyncIterable<ListFbsPostingsV4Response> {
  return paginateOzonPages(createFbsPostingPagination(method, input, options));
}
