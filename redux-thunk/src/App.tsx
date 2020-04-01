import * as React from "react";
import PostListContainer from "./containers/PostListContainer";
// import "./redux/reducers/exercise";
export const App: React.FC = () => {
  return (
    <div>
      {/* <CounterContainer /> */}
      <PostListContainer />
      <div>test</div>
    </div>
  );
};
