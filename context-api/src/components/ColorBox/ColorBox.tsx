import * as React from "react";
import  ColorContext  from "../../contexts"

const ColorBox: React.FC = () => {
  return (
    <ColorContext.Consumer>
      {value => (<div style={{width: "64px", height: "64px", background: value.color}}/>)}
    </ColorContext.Consumer>
  )
}
export default ColorBox;