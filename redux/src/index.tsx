import * as React from "react";
import * as ReactDOM from "react-dom";
import { hot } from "react-hot-loader/root";
import { App } from "./App";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./redux/reducers";
import { composeWithDevTools } from "redux-devtools-extension";

const Hot = hot(App); //HOC
const store = createStore(rootReducer, composeWithDevTools());
console.log("store.getState(): ", store.getState());
ReactDOM.render(
  <Provider store={store}>
    <Hot />
  </Provider>,
  document.querySelector("#root")
);
