import { useReducer } from "react";
import ReactDOM from "react-dom/client";

function reducer(state, action) {
  switch (action) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return { count: state };
  }
}
export default function App21() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  function increment() {
    dispatch("increment" );
  }
  function decrement() {
    dispatch("decrement");
  }
  return (
    <>
      <input type="button" onClick={decrement} value="-"></input>
      {state.count}
      <input type="button" onClick={increment} value="+"></input>
    </>
  );
}