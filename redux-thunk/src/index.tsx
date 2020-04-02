import * as React from "react";
import * as ReactDOM from "react-dom";
import { hot } from "react-hot-loader/root";
import { App } from "./App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, Middleware } from "redux";
import rootReducer from "@redux/reducers";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk"
// import { BrowserRouter } from "react-router-dom";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";

const customHistory = createBrowserHistory();

const Hot = hot(App); //HOC

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger, thunk.withExtraArgument({
  history: customHistory
}))));

ReactDOM.render(
  <Router history={customHistory}>
    <Provider store={store}>
      <Hot />
    </Provider>
  </Router>,
  document.querySelector("#root")
);
