import React from 'react'
import TodoTemplate from "./TodoTemplate";
import TodoInsert from "./TodoInsert"
const Todos: React.FC = () => {
  return (
    <TodoTemplate>
      <TodoInsert />
    </TodoTemplate>
  )
}
export default Todos;
