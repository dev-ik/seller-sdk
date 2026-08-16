import type {
  OzonClient,
  OzonClientConfig,
  OzonCredentials,
} from "@seller-sdk/ozon";

export const Marketplace = {
  Ozon: "ozon",
} as const;

export type Marketplace = (typeof Marketplace)[keyof typeof Marketplace];

export interface MarketplaceRegistry {
  readonly ozon: {
    readonly credentials: OzonCredentials;
    readonly client: OzonClient;
  };
}

export type SellerClientOptions = {
  [M in Marketplace]: {
    readonly marketplace: M;
    readonly credentials: MarketplaceRegistry[M]["credentials"];
    readonly config?: M extends typeof Marketplace.Ozon
      ? OzonClientConfig
      : never;
  };
}[Marketplace];
