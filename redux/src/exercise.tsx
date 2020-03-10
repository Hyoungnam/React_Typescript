import { createStore, Reducer } from "redux";

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

const INCREASE = "INCREASE" as const;
const DECREASE = "DECREASE" as const;
const CHANGE_TEXT = "CHANGE_TEXT" as const;
const ADD_TO_LIST = "ADD_TO_LIST" as const;

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
export const increase = (): IincreaseAction => ({
  type: INCREASE
});
export const decrease = (): IDecreaseAction => ({
  type: DECREASE
});
export const changeText = (text: string): IChangeText => ({
  type: CHANGE_TEXT,
  text
});
export const addToList = (item: Ilist): IAddToList => ({
  type: ADD_TO_LIST,
  item
});
const initialState: IState = {
  counter: 0,
  text: "",
  list: []
};

export type TNextAction =
  | IincreaseAction
  | IDecreaseAction
  | IChangeText
  | IAddToList;

export const reducer = (
  prev: IState = initialState,
  next: TNextAction
): IState => {
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

export const store = createStore(reducer as Reducer);
