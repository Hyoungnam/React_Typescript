import * as React from "react"
import {useState, useRef} from "react"
export const UseRef: React.FC = () => {
  const potato = useRef<HTMLInputElement>(null);
  setTimeout(() => {
    if(potato.current) {
      potato.current.focus();
    }
  }, 5000);
  return (
    <div>
      <div>Hi</div>
      <input ref={potato} placeholder="la"/>
    </div>
  )
}
