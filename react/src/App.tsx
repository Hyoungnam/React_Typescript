import * as React from "react";
import { Route, Switch } from 'react-router-dom';
import { Home, About } from './pages';
import Todos from "./Todos";

export const App = () => {
  return (
    <div>
        {/* https://github.com/gaearon/react-hot-loader/issues/620 */}
        <Route exact path="/" component={Home}/>
        <Route exact path="/about" component={About}>
        </Route>
          <Route path="/about/:name" component={About}/>
        {/* <Route exact path="/test" render={(props) =><Home />}/> */}
        {/* <Route exact path="/test/home" render={(props) =><Home />}/> */}
    </div>
  )
};
