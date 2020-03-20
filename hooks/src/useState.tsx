import * as React from 'react'
import {useState} from "react";

export const UseState: React.FC = () => {
  //  const [item] = useState(1)[0]
  const [item, setItem] = useState(1);
  const incrementItem = () => setItem(item + 1);
  const decrementItem = () => setItem(item + 1);
  return (
    <div className="App">
      <h1>Hello {item}</h1>
      <h2>Start editing to see more magic happen</h2>
      <button onClick={incrementItem}>Increment</button>
      <button onClick={decrementItem}>Decrement</button>
    </div>
  )
}
