import * as React from 'react'
import {useState} from "react";

//다른 function에서 이벤트를 처리할 수 있다!! react component가 아니라 완전히 다른 함수
//이벤트를 분리된 파일, 다른 entity에 연결해서 처리할 수 있다.
const useInput = <U extends Function> (initialValue:string, validator:U) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    // console.log(event.target);
    // const {target: {value}} = event;
    const { value } = event.target;
    let willUpdate = true;
    if(validator) {
      willUpdate = validator(value);
    }
    if(willUpdate) {
      setValue(value)
    }
  }
  return { value, onChange }
}

export const UseInput = () => {

  const maxLen = (value:string) => value.length < 10
  const include = (value:string) => !value.includes("@");
  const name = useInput("Mr.", maxLen)
  return (
    <div className="App">
      <h1>Hello</h1>
      <input placeholder="Name" {...name}/>
      {/* <input placeholder="Name" value={name.value}/> */}
      {/* <input placeholder="Name" value={name.value} onChange = {name.onChange}/> */}
    </div>
  )
}
