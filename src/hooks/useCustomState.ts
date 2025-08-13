import { useRef, useCallback } from "react";

type Setter<T> = (value: T | ((prev: T) => T)) => void;

export function useCustomState<T>(
  initialValue: T,
  forceUpdate: () => void
): [() => T, Setter<T>] {
  // Store the current state in a ref
  const stateRef = useRef<T>(initialValue);

  // Setter function
  const setState: Setter<T> = useCallback((value) => {
    if (typeof value === "function") {
      stateRef.current = (value as (prev: T) => T)(stateRef.current);
    } else {
      stateRef.current = value;
    }

    // Trigger component re-render manually
    forceUpdate();
  }, [forceUpdate]);

  // Return getter function and setter
  return [() => stateRef.current, setState];
}
