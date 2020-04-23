import * as React from "react";
import { Route, Link } from 'react-router-dom';
import { Home, About, Profile } from './pages';
import Todos from "./Todos";

export const App = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
        <li>
          <Link to="/profile/north">North 프로필</Link>
        </li>
        <li>
          <Link to="/profile/south">South 프로필</Link>
        </li>
      </ul>
      <hr />  
      {/* https://github.com/gaearon/react-hot-loader/issues/620 */}
      <Route exact path="/" component={Home}/>
      {/* <Route exact path="/about" component={About}> */}
      <Route exact path={["/about", "/info"]} component={About} />
      <Route path="/about/:name" component={About}/>
      <Route path="/profile/:username" component={Profile}/>
      {/* <Route exact path="/test" render={(props) =><Home />}/> */}
      {/* <Route exact path="/test/home" render={(props) =><Home />}/> */}
    </div>
  )
};
