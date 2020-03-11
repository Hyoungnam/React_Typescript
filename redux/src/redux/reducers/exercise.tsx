import { createStore, Reducer } from "redux";

declare global {
  interface Window {
    store: any;
    unsubscribe: any;
  }
}
interface IState {
  counter: number;
  text: string;
  // list: Ilist[];
  list: Array<Ilist>;
}
interface Ilist {
  id: number;
  text: string;
}
interface IincreaseAction {
  type: typeof INCREASE;
}
interface IDecreaseAction {
  type: typeof DECREASE;
}
interface IChangeText {
  type: typeof CHANGE_TEXT;
  text: string;
}
interface IAddToList {
  type: typeof ADD_TO_LIST;
  item: Ilist;
}
//액션
const INCREASE = "INCREASE" as const;
const DECREASE = "DECREASE" as const;
const CHANGE_TEXT = "CHANGE_TEXT" as const;
const ADD_TO_LIST = "ADD_TO_LIST" as const;

//액션생성함수
////방법 1
////------------------------------------
// const increase = (): IincreaseAction => ({
//   type: INCREASE
// });
// const decrease = (): IDecreaseAction => ({
//   type: DECREASE
// });
// const changeText = (text: string): IChangeText => ({
//   type: CHANGE_TEXT,
//   text
// });
// const addToList = (item: Ilist): IAddToList => ({
//   type: ADD_TO_LIST,
//   item
// });
// const initialState: IState = {
//   counter: 0,
//   text: "",
//   list: []
// };

// type TNextAction = IincreaseAction | IDecreaseAction | IChangeText | IAddToList;

////방법 2 가독성 더 좋음
////------------------------------------
const increase = () => ({
  type: INCREASE
});
const decrease = () => ({
  type: DECREASE
});
const changeText = (text: string) => ({
  type: CHANGE_TEXT,
  text
});
const addToList = (item: Ilist) => ({
  type: ADD_TO_LIST,
  item
});

const initialState: IState = {
  counter: 0,
  text: "",
  list: []
};

type TNextAction = ReturnType<
  typeof increase | typeof decrease | typeof changeText | typeof addToList
>;

//리듀서
const reducer = (prev: IState = initialState, next: TNextAction): IState => {
  switch (next.type) {
    case INCREASE:
      return {
        ...prev,
        counter: prev.counter + 1
      };
    case DECREASE:
      return {
        ...prev,
        counter: prev.counter - 1
      };
    case CHANGE_TEXT:
      return {
        ...prev,
        text: next.text
      };
    case ADD_TO_LIST:
      return {
        ...prev,
        list: prev.list.concat(next.item)
      };
    default:
      return prev;
  }
};

const store = createStore(reducer as Reducer);
console.log("store.getState(): ", store.getState());

//getState하고 subscribe 사용하지는 않겠지만 경험삼아 타이핑 connect, useSelector등등 사용 예정

const listener = (): void => {
  const state = store.getState();
  console.log("state: ", state);
};
const unsubscribe = store.subscribe(listener);
store.dispatch(increase());
store.dispatch(decrease());
store.dispatch(changeText("안녕하세요"));
store.dispatch(addToList({ id: 1, text: "와우" }));

window.store = store;
window.unsubscribe = unsubscribe;
//console창에서 store.dispatch({type: "INCREASE"});
