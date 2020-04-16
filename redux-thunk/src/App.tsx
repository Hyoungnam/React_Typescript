import * as React from "react";
// import PostListContainer from "./containers/PostListContainer";
import { Route } from "react-router-dom";
import PostListPage from "./pages/PostListPage";
import PostPage from "./pages/PostPage";
import TodosListPage from "./pages/TodosListPage";

export const App: React.FC = () => {
  return (
    <div>
      {/* <CounterContainer /> */}
      {/* <PostListContainer /> */}
      <TodosListPage />
      {/* <Route exact path="/" component={PostListPage} /> */}
      {/* <Route exact path="/todos" component={TodosListPage} /> */}
      {/* <Route exact path="/:id" component={PostPage} /> */}
    </div>
  );
};
