import { combineReducers } from "redux";
import counter from "./counter";
import todos from "./todos";

export type RootState = ReturnType<typeof rootReducer>;

const rootReducer = combineReducers({
  counter,
  todos
});
export default rootReducer;
