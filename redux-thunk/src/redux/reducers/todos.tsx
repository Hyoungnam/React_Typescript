import { Dispatch, Action } from "redux";
import * as todosAPI from "../../api/todos";

const initialState = {
  todos: {
    loading: false,
    data: null,
    error: null
  }
}
const GET_TODOS = 'GET_TODOS' as const;
const GET_TODOS_SUCCESS = 'GET_TODOS_SUCCESS' as const;
const GET_TODOS_ERROR = 'GET_TODOS_ERROR' as const;

export const getTodos = () => async (dispatch: Dispatch) => {
  //요청이 시작됨
  dispatch({ type: GET_TODOS })
  //API를 호출
  try {
    const todos = await todosAPI.getTodos();
    //성공했을 때
    dispatch({
      type:GET_TODOS_SUCCESS,
      todos
    });
  } 
  catch (e) {
    //실패했을 때 
    dispatch({
      type:GET_TODOS_ERROR,
      error: e
    })
  }
}

export default function todos(prev = initialState, next: any) {
  switch (next.type) {
    case GET_TODOS:
      return {
        ...prev,
        todos: {
          loading: true,
          data: null,
          error: null
        }
      };
    case GET_TODOS_SUCCESS: {
      return {
        ...prev,
        todos: {
          loading: false,
          data: next.todos,
          error: null
        }
      }
    }
    case GET_TODOS_ERROR: {
      return {
        ...prev,
        todos: {
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
