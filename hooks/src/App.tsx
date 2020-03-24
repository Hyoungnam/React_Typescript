import * as React from "react";
import {UseState} from "./useState";
import {UseInput} from "./useInput";
import { UseTab } from "./useTab";
import { UseEffect } from "./useEffect";
import { UseTitle } from "./useTitle";
import { UseRef } from "./useRef";
import { UseClick } from "./useClick";
import FetchData from "./etc/fetchData";
import UseDataFetch from "./useDataFetch";
import {Example} from "./test";
export const App: React.FC = () => {
  return (
  <div>
    <UseState/>
    <UseInput/>
    <UseTab/>
    <UseEffect/>
    <UseTitle/>
    <UseRef/>
    <UseClick/>
    {/* <FetchData/> */}
    <UseDataFetch/>
    <Example/>
  </div>);
};
