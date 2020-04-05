import * as React from "react";
import { useState } from "react";
import ColorBox from "./components/ColorBox";
import ColorContext from "./contexts";
import RenderPropsSample from "./RenderProps/RenderProps";
import { ColorProvider } from "./contexts/color";
import SelectColors from "./components/ColorBox/SelectColors";

export const App: React.FC = () => {
  return (
    // value 이름 명시해주어야 함.
    <ColorProvider>
      <div>
        <SelectColors />
        <ColorBox/>
      </div>
    </ColorProvider>
    
  )
};
