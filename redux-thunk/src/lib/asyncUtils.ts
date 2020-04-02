export const reducerUtils = {
  initial: (initialData = null) => ({
    loading: false,
    data: initialData,
    error: null
  }),
  loading: (prevState = null) => ({
    loading: true,
    data: prevState,
    error: null
  }),
  success: (payload: any) => ({
    loading: false,
    data: payload,
    error: null
  }),
  error: (error: any) => ({
    loading: false,
    data: null,
    error: error
  })
}

export const createPromiseThunk = (type: any, promiseCreator: any) => {
  const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];
  // const thunkCreator = (param?: any) => async (dispatch: any) => {
  return (param?: any) => async (dispatch: any) => {
  dispatch({type});
    try {
      const payload = await promiseCreator(param);
      dispatch({
        type: SUCCESS,
        payload
      });
    } catch(e) {
      dispatch({
        type: ERROR,
        payload: e,
        error: true,
      })
    }
  }
  // return thunkCreator;
}

const defaultIdSelector = (param:any) => param;

export const createPromiseThunkById = (type: any, promiseCreator: any, idSelector = defaultIdSelector) => {
  const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];
  // const thunkCreator = (param?: any) => async (dispatch: any) => {
  return (param?: any) => async (dispatch: any) => {
  const id = idSelector(param);
  dispatch({type, meta: id});
    try {
      const payload = await promiseCreator(param);
      dispatch({
        type: SUCCESS,
        payload,
        meta: id
      });
    } catch(e) {
      dispatch({
        type: ERROR,
        payload: e,
        error: true,
        meta: id
      })
    }
  }
}

export const handleAsyncActions = (type: any, key: any, keepData?: boolean) => {
  const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];
  return (prev: any, next: any) => {
    switch (next.type) {
      case type:
        return {
          ...prev,
          [key]: reducerUtils.loading(keepData ? next[key].data : null)
        };
      case SUCCESS:
        return {
          ...prev,
          [key]: reducerUtils.success(next.payload)
        };
      case ERROR:
        return {
          ...prev,
          [key]: reducerUtils.error(next.payload)
        };
      default:
        return prev;
    }
  };
}
export const handleAsyncActionsById = (type: any, key: any, keepData?: boolean) => {
  const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];
  return (prev: any, next: any) => {
    const id = next.meta;
    switch (next.type) {
      case type:
        return {
          ...prev,
          [key]: {
            ...prev[key],
            [id]: reducerUtils.loading(keepData ? next[key][id] && next[key][id].data : null)
          }
        };
      case SUCCESS:
        return {
          ...prev,
          [key]: {
            ...prev[key],
            [id]: reducerUtils.success(next.payload)
          }
        };
      case ERROR:
        return {
          ...prev,
          [key]: {
            ...prev[key],
            [id]: reducerUtils.error(next.payload)
          }
        };
      default:
        return prev;
    }
  };
}