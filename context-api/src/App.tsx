import * as React from "react";
import { useState } from "react";
import ColorBox from "./components/ColorBox";
import ColorContext from "./contexts";
import RenderPropsSample from "./RenderProps/RenderProps";
export const App: React.FC = () => {
  return (
    // value 이름 명시해주어야 함.
    <ColorContext.Provider value={{color:"red"}}>
      <div>
        <ColorBox/>
        <RenderPropsSample>{value => 2 * value }</RenderPropsSample>
      </div>
    </ColorContext.Provider>
    
  )
};
