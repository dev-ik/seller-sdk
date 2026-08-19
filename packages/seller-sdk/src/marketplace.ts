import type {
  OzonClient,
  OzonClientConfig,
  OzonCredentials,
} from "@seller-sdk/ozon";
import type { WbClient, WbClientConfig, WbCredentials } from "@seller-sdk/wb";
import type { YmClient, YmClientConfig, YmCredentials } from "@seller-sdk/ym";

export const Marketplace = {
  Ozon: "ozon",
  Wb: "wb",
  Ym: "ym",
} as const;

export type Marketplace = (typeof Marketplace)[keyof typeof Marketplace];

export interface MarketplaceRegistry {
  readonly ozon: {
    readonly credentials: OzonCredentials;
    readonly client: OzonClient;
    readonly config: OzonClientConfig;
  };
  readonly wb: {
    readonly credentials: WbCredentials;
    readonly client: WbClient;
    readonly config: WbClientConfig;
  };
  readonly ym: {
    readonly credentials: YmCredentials;
    readonly client: YmClient;
    readonly config: YmClientConfig;
  };
}

export type SellerClientOptions<M extends Marketplace = Marketplace> = {
  [K in M]: {
    readonly marketplace: K;
    readonly credentials: MarketplaceRegistry[K]["credentials"];
    readonly config?: MarketplaceRegistry[K]["config"];
  };
}[M];
