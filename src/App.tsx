import Counter from "./components/Counter";
import SortedListExample from "./components/SortedListExample";
import UseCallbackExample from "./components/UseCallbackexample";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      {/* <SortedListExample /> */}
      <UseCallbackExample />
      <Counter />
    </div>
  );
}
