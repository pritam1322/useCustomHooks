import React, { useState, useCallback, FC } from "react";

// Define props type for Child component
type ChildProps = {
  onClick: () => void;
};

// Annotate Child with type
const Child: FC<ChildProps> = React.memo(({ onClick }) => {
  console.log("Child rendered");
  return <button onClick={onClick}>Click me</button>;
});

// App component as FC (function component)
const UseCallbackExample: FC = () => {
  const [count, setCount] = useState<number>(0);

  const handleClick = useCallback(() => {
    console.log("Button clicked");
  },[]);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
      <Child onClick={handleClick} />
    </div>
  );
};

export default UseCallbackExample;
