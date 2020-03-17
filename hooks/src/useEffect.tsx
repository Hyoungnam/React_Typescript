import * as React from 'react'
import {useState, useEffect} from "react";

export const UseEffect = () => {
  const sayHello = () => {console.log("Hello");}
  const [number, setNumber] = useState(0);
  const [aNumber, setAnumber] = useState(0);
  // useEffect(sayHello);
  useEffect(sayHello, [number]);
  return (
    <div>
      <div>Hi</div>
      <button onClick={()=>setNumber(number + 1)}>{number}</button>
      <button onClick={()=>setAnumber(aNumber + 1)}>{aNumber}</button>
    </div>
  )
}
