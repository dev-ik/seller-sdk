import type {
  CreateFbsPackageLabelBatchRequest,
  OzonFbsPackageLabelBatchTask,
} from "../../shared/types.js";
export type CreateFbsPackageLabelBatchV2Request =
  CreateFbsPackageLabelBatchRequest;
export interface CreateFbsPackageLabelBatchV2Response {
  readonly result?: {
    readonly tasks?: readonly OzonFbsPackageLabelBatchTask[];
  };
}
