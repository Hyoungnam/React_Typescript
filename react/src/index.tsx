import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom';
import { hot } from "react-hot-loader/root";
import { App } from "./App";
import Root from './Root';

const Hot = hot(Root); //HOC

ReactDOM.render(<Hot />, document.querySelector("#root"));
