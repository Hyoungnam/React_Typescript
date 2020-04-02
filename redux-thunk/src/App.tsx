import * as React from "react";
// import PostListContainer from "./containers/PostListContainer";
import { Route } from "react-router-dom";
import PostListPage from "./pages/PostListPage";
import PostPage from "./pages/PostPage";

export const App: React.FC = () => {
  return (
    <div>
      {/* <CounterContainer /> */}
      {/* <PostListContainer /> */}
      <Route path="/" component={PostListPage} exact />
      <Route path="/:id" component={PostPage} />
    </div>
  );
};
