import { Dispatch, Action } from "redux";
import * as postsAPI from "../../api/posts";
import { Ipost } from "../../api/posts";
import { reducerUtils, createPromiseThunk, createPromiseThunkById, handleAsyncActions, handleAsyncActionsById } from "../../lib/asyncUtils";

const GET_POSTS = 'GET_POSTS' as const;
const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS' as const;
const GET_POSTS_ERROR = 'GET_POSTS_ERROR' as const;
const GET_POST = 'GET_POST' as const;
const GET_POST_SUCCESS = 'GET_POST_SUCCESS' as const;
const GET_POST_ERROR = 'GET_POST_ERROR' as const;

const CLEAR_POST = "CLEAR_POST" as const;

// export const getPosts = () => async (dispatch: Dispatch) => {
//   //요청이 시작됨
//   dispatch({type: GET_POSTS})
//   //API를 호출
//   try {
//     const posts = await postsAPI.getPosts();
//     //성공했을 때
//     dispatch({
//       type:GET_POSTS_SUCCESS,
//       posts
//     });
//   } 
//   catch (e) {
//     //실패했을 때 
//     dispatch({
//       type:GET_POSTS_ERROR,
//       error: e
//     })
//   }
// }

// export const getPost = (id: number) => async (dispatch: Dispatch) => {
//   //요청이 시작됨
//   dispatch({type: GET_POST})
//   //API를 호출
//   try {
//     const post = await postsAPI.getPostById(id);
//     //성공했을 때
//     dispatch({
//       type:GET_POST_SUCCESS,
//       post
//     });
//   } 
//   catch (e) {
//     //실패했을 때 
//     dispatch({
//       type:GET_POST_ERROR,
//       error: e
//     })
//   }
// }

// const initialState = {
//   posts: {
//     loading: false,
//     data: null,
//     error: null
//   },
//   post: {
//     loading: false,
//     data: null,
//     error: null
//   }
// }

// export default function posts(prev = initialState, next: any) {
//   switch (next.type) {
//     case GET_POSTS:
//       return {
//         ...prev,
//         posts: {
//           loading: true,
//           data: null,
//           error: null
//         }
//       };
//     case GET_POSTS_SUCCESS: {
//       return {
//         ...prev,
//         posts: {
//           loading: false,
//           data: next.posts,
//           error: null
//         }
//       }
//     }
//     case GET_POSTS_ERROR: {
//       return {
//         ...prev,
//         posts: {
//           loading: false,
//           data: null,
//           error: next.error
//         }
//       }
//     }
//     case GET_POST:
//       return {
//         ...prev,
//         post: {
//           loading: true,
//           data: null,
//           error: null
//         }
//       };
//     case GET_POST_SUCCESS: {
//       return {
//         ...prev,
//         post: {
//           loading: false,
//           data: next.post,
//           error: null
//         }
//       }
//     }
//     case GET_POST_ERROR: {
//       return {
//         ...prev,
//         post: {
//           loading: false,
//           data: null,
//           error: next.error
//         }
//       }
//     }
//     default:
//       return prev;
//   }
// }

////refactoring using withAsyncUtils
// const initialState = {
//   posts: reducerUtils.initial(),
//   post: reducerUtils.initial()
// }

// export default function posts(prev = initialState, next: any) {
//   switch (next.type) {
//     case GET_POSTS:
//       return {
//         ...prev,
//         posts: reducerUtils.loading()
//       };
//     case GET_POSTS_SUCCESS: {
//       return {
//         ...prev,
//         posts: reducerUtils.success(next.posts)
//       }
//     }
//     case GET_POSTS_ERROR: {
//       return {
//         ...prev,
//         posts: reducerUtils.error(next.error)
//       }
//     }
//     case GET_POST:
//       return {
//         ...prev,
//         post: reducerUtils.loading()
//       };
//     case GET_POST_SUCCESS: {
//       return {
//         ...prev,
//         post: reducerUtils.success(next.post)
//       }
//     }
//     case GET_POST_ERROR: {
//       return {
//         ...prev,
//         post: reducerUtils.error(next.error)
//       }
//     }
//     default:
//       return prev;
//   }
// }

// //-1
export const getPosts = createPromiseThunk(GET_POSTS, postsAPI.getPosts); 
export const getPost = createPromiseThunkById(GET_POST, postsAPI.getPostById); 
export const clearPost = () => ({ type: CLEAR_POST });
export const goToHome = () => ( dispatch: Dispatch, getState: any, { history }: {history: any}) => {
  history.push("/");
};


const initialState = {
  posts: reducerUtils.initial(),
  post: {}
}

// const getPostsReducer = handleAsyncActions(GET_POSTS, "posts", true);
const getPostsReducer = handleAsyncActions(GET_POSTS, "posts");
const getPostReducer = handleAsyncActionsById(GET_POST, "post");

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
    case CLEAR_POST:
        return {
          ...prev,
          post: reducerUtils.initial()
        }
    default:
      return prev;
  }
}