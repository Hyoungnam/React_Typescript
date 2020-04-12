import * as React from 'react';
import { useState, useRef, useCallback } from "react";
import TodoTemplate from "./TodoTemplate";
import TodoInsert from "./TodoInsert";
import TodoList from "./TodoList";

function createBulkTodos() {
  const array = [];
  for(let i = 1; i <= 500; i++) {
    array.push({
      id: i,
      text: `할 일 ${i}`,
      checked: false,
    });
  }
  return array;
}

const Todos: React.FC = () => {
  const [todos, setTodos] = useState(createBulkTodos());
  const nextId = useRef(4);
  const onInsert = useCallback(
    (text) => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      setTodos(todos=> todos.concat(todo));
      nextId.current += 1;
    },
    [todos],
  )
  const onRemove = useCallback(
    (id) => {
      setTodos(todos => todos.filter(todo => todo.id !== id));
    },
    [todos],
  );
  const onToggle = useCallback(
    (id) => {
      setTodos(todos =>
        todos.map(todo=>todo.id===id ? {...todo, checked: !todo.checked} 
                                     : todo
      ));
    },
    [todos],
  );
  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert}/>
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle}/>
    </TodoTemplate>
  ) 
}
export default Todos;


// [
//   {
//     id: 1,
//     text: "리액트 호호호호호",
//     checked: true,
//   },
//   {
//     id: 2,
//     text: "리액트 호호호호호2",
//     checked: false,
//   },
//   {
//     id: 3,
//     text: "리액트 호호호호호3",
//     checked: false,
//   }
// ]