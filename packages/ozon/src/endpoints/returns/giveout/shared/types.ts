export type OzonGiveoutStatusV1 = string;
export interface OzonGiveoutV1 {
  readonly approved_articles_count?: number;
  readonly created_at?: string;
  readonly giveout_id?: number;
  readonly giveout_status?: OzonGiveoutStatusV1;
  readonly total_articles_count?: number;
  readonly warehouse_address?: string;
  readonly warehouse_id?: number;
  readonly warehouse_name?: string;
}
export interface OzonGiveoutArticleV1 {
  readonly approved?: boolean;
  readonly delivery_schema?: string;
  readonly name?: string;
  readonly seller_id?: number;
}
