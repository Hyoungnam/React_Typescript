import * as React from "react";
import Counter from "../components/Counter";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { increase, decrease, setDiff } from "../redux/reducers/counter";
import { RootState } from "../redux/reducers/index";

export default function CounterContainer() {
  //selector에서 매번 새로운 객체를 가지고 오고 있음 최적화 상태 X
  
  //해결방법 1
  //useSelector 쪼개기
  //해결방법 2
  //useSelector의 equalityFn 이용
  //해결방법 3
  //shallowequal 사용, 말그대로 얕은 비교 객체를 너무 깊게 저장하면 이렇게 shallowequal같은거 못씀

  //해결방법 1 구현
  // const number = useSelector((reducers:RootState)=> reducers.counter.number);
  // const diff = useSelector((reducers:RootState)=> reducers.counter.diff);
  //해결방법 2 구현
  // const { number, diff } = useSelector((reducers: RootState) => ({
  //   number: reducers.counter.number,
  //   diff: reducers.counter.diff
  // }), ((left, right)=>{
  //   return left.diff === right.diff && left.number === right.number;
  // }));
  //해결방법 3 구현
  const { number, diff } = useSelector((reducers: RootState) => ({
    number: reducers.counter.number,
    diff: reducers.counter.diff
  }), shallowEqual);
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
