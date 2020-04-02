import { combineReducers } from "redux";
import counter from "./counter";
import posts from "./posts";

export type RootState = ReturnType<typeof rootReducer>;

const rootReducer = combineReducers({
  counter, posts 
});
export default rootReducer;
