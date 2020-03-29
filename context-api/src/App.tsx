import * as React from "react";
import ColorBox from "./components/ColorBox";
import ColorContext from "./contexts";
export const App: React.FC = () => {
  return (
    <ColorContext.Provider value={{color:"red"}}>
      <div>
        <ColorBox/>
      </div>
    </ColorContext.Provider>
  )
};
