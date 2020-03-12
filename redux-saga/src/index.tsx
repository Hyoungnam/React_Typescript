import * as React from "react";
import * as ReactDOM from "react-dom";
import { hot } from "react-hot-loader/root";
import { App } from "./App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, Middleware } from "redux";
import rootReducer from "@redux/reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import myLogger from "./middlewares/myLogger";

const Hot = hot(App); //HOC
// composeWithDevTools()
const store = createStore(rootReducer, applyMiddleware(myLogger as any));
console.log("store.getState(): ", store.getState());
ReactDOM.render(
  <Provider store={store}>
    <Hot />
  </Provider>,
  document.querySelector("#root")
);
