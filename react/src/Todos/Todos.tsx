import * as React from 'react';
import { useState, useRef, useCallback } from "react";
import TodoTemplate from "./TodoTemplate";
import TodoInsert from "./TodoInsert";
import TodoList from "./TodoList";


const Todos: React.FC = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "리액트 호호호호호",
      checked: true,
    },
    {
      id: 2,
      text: "리액트 호호호호호2",
      checked: false,
    },
    {
      id: 2,
      text: "리액트 호호호호호",
      checked: false,
    }
  ]);
  const nextId = useRef(4);
  const onInsert = useCallback(
    (text) => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      setTodos(todos.concat(todo));
      nextId.current += 1;
    },
    [todos],
  )

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert}/>
      <TodoList todos={todos} />
    </TodoTemplate>
  ) 
}
export default Todos;
