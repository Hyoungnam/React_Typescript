import * as React from "react";
import CounterContainer from "./containers/CounterContainer";
// import "./redux/reducers/exercise";
export const App: React.FC = () => {
  return (
    <div>
      <CounterContainer></CounterContainer>
    </div>
  );
};
