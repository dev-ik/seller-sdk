export interface OzonChatDetailsV3 {
  readonly chat_id?: string;
  readonly chat_status?: string;
  readonly chat_type?: string;
  readonly created_at?: string;
}
export interface OzonChatV3 {
  readonly chat?: OzonChatDetailsV3;
  readonly first_unread_message_id?: number;
  readonly last_message_id?: number;
  readonly unread_count?: number;
}
export interface OzonChatMessageV3 {
  readonly context?: { readonly order_number?: string; readonly sku?: string };
  readonly created_at?: string;
  readonly data?: readonly string[];
  readonly is_image?: boolean;
  readonly is_read?: boolean;
  readonly message_id?: number;
  readonly moderate_image_status?: string;
  readonly user?: { readonly id?: string; readonly type?: string };
}
