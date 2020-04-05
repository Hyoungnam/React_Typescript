import * as React from "react";
import { createContext, useState } from "react";

interface IColorProvider {
  children: React.ReactNode
}
interface IState {
  color: string;
  subColor: string;
}
interface IActions {
  setColor: Function
  setSubColor: Function
}
interface IColorContext {
  state: IState;
  actions: IActions;
}
//
const ColorContext = createContext<IColorContext>({
  state: { color: "black", subColor: "red"},
  actions: {
    setColor: () => {},
    setSubColor: () => {}
  }
});

const ColorProvider: React.FC<IColorProvider> = ({ children }) => {
  const [color, setColor] = useState("black");
  const [subColor, setSubColor] = useState("red");
  const value = {
    state : { color, subColor },
    actions : { setColor, setSubColor }
  }
  return (
    <ColorContext.Provider value={value}>{children}</ColorContext.Provider>
  )
}
//const ColorConsumer = ColorContext.Consumer;
const { Consumer: ColorConsumer } = ColorContext;
export { ColorProvider, ColorConsumer };

export default ColorContext;
