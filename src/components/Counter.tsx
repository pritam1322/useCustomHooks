import React, { useReducer } from "react";
import { useCustomState } from "../hooks/useCustomState";

export default function Counter() {
  // Create a manual re-render trigger using useReducer
  const [, forceUpdate] = useReducer(x => x + 1, 0);

  // Use custom state
  const [getCount, setCount] = useCustomState(0, forceUpdate);

  return (
    <div>
      <p>Count: {getCount()}</p>
      <button onClick={() => setCount(prev => prev + 1)}>Increment</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}
