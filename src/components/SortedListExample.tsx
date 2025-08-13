import { useState, useMemo } from "react";
import { useCustomMemo } from "../hooks/useCustomMemo";

export default function SortedListExample() {
  const [sortOrder, setSortOrder] = useState("asc");

  const numbers = useCustomMemo(() => [5, 2, 8, 1, 9, 4, 7], []);

  // Memoized sorting
  const sortedNumbers = useCustomMemo(() => {
    console.log("Sorting numbers...");
    return [...numbers].sort((a, b) => (sortOrder === "asc" ? a - b : b - a));
  }, [numbers, sortOrder]); // Recomputes only when `numbers` or `sortOrder` change

  return (
    <div>
      <button onClick={() => setSortOrder("asc")}>Sort Ascending</button>
      <button onClick={() => setSortOrder("desc")}>Sort Descending</button>

      <ul>
        {sortedNumbers.map((num: number) => (
          <li key={num}>{num}</li>
        ))}
      </ul>

      <button>Sort Descending</button>
    </div>
  );
}
