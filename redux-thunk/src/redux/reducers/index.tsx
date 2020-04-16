import { combineReducers } from "redux";
import counter from "./counter";
import posts from "./posts";
import todos from "./todos";

export type RootState = ReturnType<typeof rootReducer>;

const rootReducer = combineReducers({
  counter, posts , todos
});
export default rootReducer;
