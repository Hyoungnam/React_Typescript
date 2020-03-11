import * as React from "react";
import Counter from "../components/Counter";
import { useSelector, useDispatch } from "react-redux";
import { increase, decrease, setDiff } from "../redux/reducers/counter";
import { RootState } from "../redux/reducers/index";

export default function CounterContainer() {
  const { number, diff } = useSelector((reducers: RootState) => ({
    number: reducers.counter.number,
    diff: reducers.counter.diff
  }));
  const dispatch = useDispatch();

  const onIncrease = () => dispatch(increase());
  const onDecrease = () => dispatch(decrease());
  const onSetDiff = (diff: number) => dispatch(setDiff(diff));
  return (
    <Counter
      number={number}
      diff={diff}
      onIncrease={onIncrease}
      onDecrease={onDecrease}
      onSetDiff={onSetDiff}
    />
  );
}
