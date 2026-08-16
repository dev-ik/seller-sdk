export interface OzonPaginationContext<Input, Page> {
  readonly input: Input;
  readonly page: Page;
  readonly pageIndex: number;
}

export interface OzonPageIteratorConfig<Input, Page> {
  readonly initialInput: Input;
  readonly fetchPage: (input: Input) => Promise<Page>;
  /** Возвращает параметры следующей страницы или `undefined`, когда выборка завершена. */
  readonly getNextInput: (
    context: OzonPaginationContext<Input, Page>,
  ) => Input | undefined;
  /** Защита для фоновых задач; по умолчанию ограничение отсутствует. */
  readonly maxPages?: number;
}

export interface OzonItemIteratorConfig<Input, Page, Item>
  extends OzonPageIteratorConfig<Input, Page> {
  readonly getItems: (page: Page) => readonly Item[] | null | undefined;
}

export interface OzonCollectOptions {
  /** Максимальное количество элементов в памяти. Обязательное ограничение. */
  readonly limit: number;
}

export async function* paginateOzonPages<Input, Page>(
  config: OzonPageIteratorConfig<Input, Page>,
): AsyncGenerator<Page, void, undefined> {
  const maxPages = normalizePositiveLimit(config.maxPages);
  let input = config.initialInput;
  let pageIndex = 0;

  while (pageIndex < maxPages) {
    const page = await config.fetchPage(input);
    yield page;
    const nextInput = config.getNextInput({ input, page, pageIndex });
    if (nextInput === undefined) return;
    input = nextInput;
    pageIndex += 1;
  }
}

export async function* paginateOzonItems<Input, Page, Item>(
  config: OzonItemIteratorConfig<Input, Page, Item>,
): AsyncGenerator<Item, void, undefined> {
  for await (const page of paginateOzonPages(config)) {
    for (const item of config.getItems(page) ?? []) yield item;
  }
}

export async function collectOzonItems<Item>(
  items: AsyncIterable<Item>,
  options: OzonCollectOptions,
): Promise<readonly Item[]> {
  const limit = normalizeRequiredLimit(options.limit);
  const result: Item[] = [];
  for await (const item of items) {
    result.push(item);
    if (result.length >= limit) break;
  }
  return result;
}

function normalizePositiveLimit(value: number | undefined): number {
  if (value === undefined) return Number.POSITIVE_INFINITY;
  return normalizeRequiredLimit(value);
}

function normalizeRequiredLimit(value: number): number {
  if (!Number.isInteger(value) || value < 1) {
    throw new RangeError("Pagination limit must be a positive integer.");
  }
  return value;
}
