import { useRef } from "react";

export function useCustomMemo<T>(factory: () => T, deps: any[]): T {
  const cache = useRef<{ value: T; deps: any[] } | null>(null);

  const hasChanged =
    !cache.current || deps.some((dep, i) => dep !== cache.current!.deps[i]);

  if (hasChanged) {
    cache.current = { value: factory(), deps };
  }

  return cache.current!.value;
}
