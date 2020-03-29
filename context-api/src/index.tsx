import * as React from "react";
import * as ReactDOM from "react-dom";
import { hot } from "react-hot-loader/root";
import { App } from "./App";

const Hot = hot(App); //HOC

ReactDOM.render(<Hot />, document.querySelector("#root"));
