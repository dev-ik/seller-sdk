interface RequestSignalOptions {
  readonly callerSignal?: AbortSignal;
  readonly timeoutMs: number;
}

export interface RequestSignal {
  readonly signal: AbortSignal;
  readonly didTimeout: () => boolean;
  readonly dispose: () => void;
}

function abortReason(signal: AbortSignal): unknown {
  return (
    signal.reason ??
    new DOMException("The operation was aborted.", "AbortError")
  );
}

export function createRequestSignal(
  options: RequestSignalOptions,
): RequestSignal {
  const controller = new AbortController();
  let timedOut = false;

  const abortFromCaller = (): void => {
    controller.abort(
      options.callerSignal ? abortReason(options.callerSignal) : undefined,
    );
  };

  if (options.callerSignal?.aborted) {
    abortFromCaller();
  } else {
    options.callerSignal?.addEventListener("abort", abortFromCaller, {
      once: true,
    });
  }

  const timeoutId = setTimeout(() => {
    timedOut = true;
    controller.abort(
      new DOMException("The operation timed out.", "TimeoutError"),
    );
  }, options.timeoutMs);

  return {
    signal: controller.signal,
    didTimeout: () => timedOut,
    dispose: () => {
      clearTimeout(timeoutId);
      options.callerSignal?.removeEventListener("abort", abortFromCaller);
    },
  };
}

export async function waitForDelay(
  delayMs: number,
  signal?: AbortSignal,
): Promise<void> {
  if (signal?.aborted) throw abortReason(signal);

  await new Promise<void>((resolve, reject) => {
    const onAbort = (): void => {
      clearTimeout(timeoutId);
      reject(signal ? abortReason(signal) : undefined);
    };

    const timeoutId = setTimeout(() => {
      signal?.removeEventListener("abort", onAbort);
      resolve();
    }, delayMs);

    signal?.addEventListener("abort", onAbort, { once: true });
  });
}

export function throwIfAborted(signal?: AbortSignal): void {
  if (signal?.aborted) throw abortReason(signal);
}
