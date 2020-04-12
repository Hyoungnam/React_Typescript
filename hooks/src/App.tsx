import * as React from "react";
import {UseState} from "./useState";
import {UseInputTwo} from "./useInputTwo";
import { UseTab } from "./useTab";
import { UseEffect } from "./useEffect";
import { UseTitle } from "./useTitle";
import { UseRef } from "./useRef";
import { UseClick } from "./useClick";
import FetchData from "./etc/fetchData";
import UseDataFetch from "./useDataFetch";
import {Example} from "./test";
import {Counter} from "./useCounter";
import {UseLocalStorage} from "./useLocalstorage";
import UseDataFetchTwo from "./useDataFetchTwo";
export const App: React.FC = () => {
  return (
  <div>
    <UseState/>
    <UseInputTwo/>
    <UseTab/>
    <UseEffect/>
    <UseTitle/>
    <UseRef/>
    <UseClick/>
    {/* <FetchData/> */}
    <UseDataFetch/>
    <Example/>
    <Counter/>
    <UseLocalStorage/>
    <UseDataFetchTwo />
  </div>);
};
