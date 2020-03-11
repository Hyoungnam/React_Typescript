import * as React from "react";

interface ICounterProps {
  number: number;
  diff: number;
  onIncrease: () => void;
  onDecrease: () => void;
  onSetDiff: (diff: number) => void;
}
export default function Counter({
  number,
  diff,
  onIncrease,
  onDecrease,
  onSetDiff
}: ICounterProps) {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSetDiff(parseInt(e.target.value, 10));
  };
  return (
    <div>
      <h1>{number}</h1>
      <div>
        <input type="number" value={diff} onChange={onChange}></input>
        <button onClick={onIncrease}>+</button>
        <button onClick={onDecrease}>-</button>
      </div>
    </div>
  );
}
