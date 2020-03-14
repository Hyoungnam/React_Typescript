import * as React from "react";
import {UseState} from "./useState";
import {UseInput} from "./useInput";
import { UseTab } from "./useTab";
export const App: React.FC = () => {
  return (
  <div>
    <UseState/>
    <UseInput/>
    <UseTab/>
  </div>);
};
