export interface OzonReviewCommentV1 {
  readonly deviation_reason?: string;
  readonly dislikes_amount?: number;
  readonly id?: string;
  readonly is_official?: boolean;
  readonly is_owner?: boolean;
  readonly is_published?: boolean;
  readonly is_rejected?: boolean;
  readonly likes_amount?: number;
  readonly parent_comment_id?: string;
  readonly published_at?: string;
  readonly text?: string;
}
