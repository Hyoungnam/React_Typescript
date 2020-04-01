import { Dispatch, Action } from "redux";
import * as postsAPI from "../../api/posts";
// import {Ipost} from "../../api/posts"
import { reducerUtils, createPromiseThunk, handleAsyncActions } from "../../lib/asyncUtils";

const GET_POSTS = 'GET_POSTS' as const;
const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS' as const;
const GET_POSTS_ERROR = 'GET_POSTS_ERROR' as const;
const GET_POST = 'GET_POST' as const;
const GET_POST_SUCCESS = 'GET_POST_SUCCESS' as const;
const GET_POST_ERROR = 'GET_POST_ERROR' as const;

//-1
export const getPosts = createPromiseThunk(GET_POSTS, postsAPI.getPosts); 
export const getPost = createPromiseThunk(GET_POST, postsAPI.getPostById);
//-2 reducer 바꾸어야 함
const initialState = {
  posts: reducerUtils.initial(),
  post: reducerUtils.initial()
}

//next.payload로 바뀜
const getPostsReducer = handleAsyncActions(GET_POSTS, "posts");
const getPostReducer = handleAsyncActions(GET_POST, "post");

export default function posts(prev = initialState, next: any) {
  switch (next.type) {
    case GET_POSTS:
    case GET_POSTS_SUCCESS:
    case GET_POSTS_ERROR:
        return getPostsReducer(prev, next);
    case GET_POST:
    case GET_POST_SUCCESS:
    case GET_POST_ERROR:
        return getPostReducer(prev, next);
    default:
      return prev;
  }
}