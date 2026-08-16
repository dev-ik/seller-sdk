import type {
  Transport,
  TransportRequest,
  TransportResponse,
} from "./transport.js";

type MockResult = TransportResponse | Error;

export class MockTransport implements Transport {
  readonly requests: TransportRequest[] = [];
  readonly #results: MockResult[] = [];

  enqueueResponse(response: TransportResponse): void {
    this.#results.push(response);
  }

  enqueueError(error: Error): void {
    this.#results.push(error);
  }

  async request(request: TransportRequest): Promise<TransportResponse> {
    this.requests.push(request);
    const result = this.#results.shift();
    if (result === undefined)
      throw new Error("MockTransport has no queued result.");
    if (result instanceof Error) throw result;
    return result;
  }
}
