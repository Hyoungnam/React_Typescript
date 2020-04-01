import { Dispatch, Action } from "redux";
import * as postsAPI from "../../api/posts";
import {Ipost} from "../../api/posts";
import { reducerUtils } from "src/lib/asyncUtils";

const GET_POSTS = 'GET_POSTS' as const;
const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS' as const;
const GET_POSTS_ERROR = 'GET_POSTS_ERROR' as const;
const GET_POST = 'GET_POST' as const;
const GET_POST_SUCCESS = 'GET_POST_SUCCESS' as const;
const GET_POST_ERROR = 'GET_POST_ERROR' as const;


export const getPosts = () => async (dispatch: Dispatch) => {
  //요청이 시작됨
  dispatch({type: GET_POSTS})
  //API를 호출
  try {
    const posts = await postsAPI.getPosts();
    //성공했을 때
    dispatch({
      type:GET_POSTS_SUCCESS,
      posts
    });
  } 
  catch (e) {
    //실패했을 때 
    dispatch({
      type:GET_POSTS_ERROR,
      error: e
    })
  }
}

export const getPost = (id: number) => async (dispatch: Dispatch) => {
  //요청이 시작됨
  dispatch({type: GET_POSTS})
  //API를 호출
  try {
    const post = await postsAPI.getPostById(id);
    //성공했을 때
    dispatch({
      type:GET_POSTS_SUCCESS,
      post
    });
  } 
  catch (e) {
    //실패했을 때 
    dispatch({
      type:GET_POSTS_ERROR,
      error: e
    })
  }
}
// interface IpostData {
//   loading: boolean;
//   data: Ipost | null;
//   error: Error | null
// }

// interface GET_POSTS_Action extends Action<"GET_POSTS"> {}
// interface GET_POSTS_SUCCESS_Action extends Action<"GET_POSTS_SUCCESS"> {
  //   posts: IpostData;
  // }
  // interface GET_POSTS_ERROR_Action extends Action<"GET_POSTS_ERROR"> {
    //   posts: IpostData;
    // }
    // type NextAction = | GET_POSTS_Action 
    //                   | GET_POSTS_SUCCESS_Action
    //                   | GET_POSTS_ERROR_Action
    
  const initialState = {
    posts: {
      loading: false,
      data: null,
      error: null
    },
    post: {
      loading: false,
      data: null,
      error: null
    }
  }

export default function posts(prev = initialState, next: any) {
  switch (next.type) {
    case GET_POSTS:
      return {
        ...prev,
        posts: {
          loading: true,
          data: null,
          error: null
        }
      };
    case GET_POSTS_SUCCESS: {
      return {
        ...prev,
        posts: {
          loading: false,
          data: next.posts,
          error: null
        }
      }
    }
    case GET_POSTS_ERROR: {
      return {
        ...prev,
        posts: {
          loading: false,
          data: null,
          error: next.error
        }
      }
    }
    case GET_POST:
      return {
        ...prev,
        posts: {
          loading: true,
          data: null,
          error: null
        }
      };
    case GET_POST_SUCCESS: {
      return {
        ...prev,
        posts: {
          loading: false,
          data: next.posts,
          error: null
        }
      }
    }
    case GET_POST_ERROR: {
      return {
        ...prev,
        posts: {
          loading: false,
          data: null,
          error: next.error
        }
      }
    }
    default:
      return prev;
  }
}