import { combineReducers } from "redux";
import counter from "./counter";
import posts from "./posts";
import posts_withAsyncUtils from "./posts";
import posts_withCreatePromiseThunk from "./posts";

export type RootState = ReturnType<typeof rootReducer>;

const rootReducer = combineReducers({
  // counter, posts 
  // counter, posts_withAsyncUtils
  counter, posts_withCreatePromiseThunk
});
export default rootReducer;
