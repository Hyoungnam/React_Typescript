import * as React from "react";
import {useState} from "react";

function useCounter(initialState: number, step: number) {
  const [count, setCount] = useState(initialState);
  const increment = () => setCount(count + step);
  return {count, increment}   
}

export function Counter() {
  const {count, increment} = useCounter(0, 5);
  return <button onClick={increment}>{count}</button>
}