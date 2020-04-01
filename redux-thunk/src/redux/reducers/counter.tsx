import { Dispatch } from "redux";

interface IState {
  number: number;
  diff: number;
}

const initialState: IState = {
  number: 0,
  diff: 1
};


const SET_DIFF = "counter/SET_DIIF" as const;
const INCREASE = "counter/INCREASE" as const;
const DECREASE = "counter/DECREASE" as const;

export const setDiff = (diff: number) => ({ type: SET_DIFF, diff });
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });

type NextAction = ReturnType<
  typeof setDiff | typeof increase | typeof decrease
>;

export const increaseAsync = () => (dispatch: Dispatch) => {
  setTimeout(() => {
    dispatch(increase());
  }, 1000);
}

export const decreaseAsync = () => (dispatch: Dispatch) => {
  setTimeout(() => {
    dispatch(decrease());
  }, 1000);
}



export default function counter(prev: IState = initialState, next: NextAction) {
  switch (next.type) {
    case SET_DIFF:
      return {
        ...prev,
        diff: next.diff
      };
    case INCREASE:
      return {
        ...prev,
        number: prev.number + prev.diff
      };
    case DECREASE:
      return {
        ...prev,
        number: prev.number - prev.diff
      };
    default:
      return prev;
  }
}
