import * as React from "react"
import {useRef, useEffect} from "react";

const useClick = (onClick: ()=>void) => {
  const element = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if(element.current)
      element.current.addEventListener("click", onClick);
    return () => {
      element.current?.removeEventListener("click", onClick);
    }
  }, [])
  return element;
}

export const UseClick: React.FC = () => {
  const sayHello = () => console.log("say hello");
  const title = useClick(sayHello);
  return (
    <div>
      <h1 ref={title}>Hi</h1>
    </div>
  )
}
