import * as React from "react";
import CounterContainer from "./containers/CounterContainer";
import TodosContainer from "./containers/TodosContainer";
// import "./redux/reducers/exercise";
export const App: React.FC = () => {
  return (
    <div>
      <CounterContainer />
      <hr/>
      <TodosContainer />
    </div>
  );
};
