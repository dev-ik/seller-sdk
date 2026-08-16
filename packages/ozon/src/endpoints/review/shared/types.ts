export interface OzonReviewPhoto {
  readonly height?: number;
  readonly url?: string;
  readonly width?: number;
}

export interface OzonReviewVideo {
  readonly height?: number;
  readonly preview_url?: string;
  readonly short_video_preview_url?: string;
  readonly url?: string;
  readonly width?: number;
}

export interface OzonReviewSummary {
  readonly comments_amount?: number;
  readonly id?: string;
  readonly is_rating_participant?: boolean;
  readonly order_status?: string;
  readonly photos_amount?: number;
  readonly published_at?: string;
  readonly rating?: number;
  readonly sku?: number;
  readonly status?: string;
  readonly text?: string;
  readonly videos_amount?: number;
}

export interface OzonReviewDetails extends OzonReviewSummary {
  readonly dislikes_amount?: number;
  readonly likes_amount?: number;
  readonly photos?: readonly OzonReviewPhoto[];
  readonly videos?: readonly OzonReviewVideo[];
}
