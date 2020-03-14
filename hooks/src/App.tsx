import * as React from "react";
import {UseState} from "./useState";
import {UseInput} from "./useInput";
export const App: React.FC = () => {
  return (
  <div>
    <UseState/>
    <UseInput/>
  </div>);
};
