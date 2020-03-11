const ADD_TODO = "todos/ADD_TODO" as const;
const TOGGLE_TODO = "todos/TOGGLE_TODO" as const;
const DECREASE = "counter/DECREASE" as const;

let nextId = 1;
export const addTodo = (text: string) => ({
  type: ADD_TODO,
  todo: {
    id: nextId++,
    text,
    done: false
  }
});
export const toggleTodo = (id: number) => ({ type: TOGGLE_TODO, id });

interface IState {
  id: number;
  text: string;
  done: boolean;
}

const initialState: Array<IState> = [
  // {
  //  id:1,
  //  text: "예시",
  //  done: false
  // }
];

type TNextAction = ReturnType<typeof addTodo | typeof toggleTodo>;

export default function todos(
  prev: Array<IState> = initialState,
  next: TNextAction
) {
  switch (next.type) {
    case ADD_TODO:
      return prev.concat(next.todo);
    case TOGGLE_TODO:
      return prev.map(todo =>
        todo.id === next.id ? { ...todo, done: !todo.done } : todo
      );
    default:
      return prev;
  }
}
