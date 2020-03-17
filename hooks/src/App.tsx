import * as React from "react";
import {UseState} from "./useState";
import {UseInput} from "./useInput";
import { UseTab } from "./useTab";
import { UseEffect } from "./useEffect";
import { UseTitle } from "./useTitle";
export const App: React.FC = () => {
  return (
  <div>
    <UseState/>
    <UseInput/>
    <UseTab/>
    <UseEffect/>
    <UseTitle/>
  </div>);
};
