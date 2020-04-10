import * as React from 'react'
import TodoListItem from "./TodoListItem";
import styled from "styled-components";

interface ITodo {
  id: number,
  text: string,
  checked: boolean,
}
interface ITodos {
  todos: Array<ITodo>
}

const TodoList: React.FC<ITodos> = ({todos}) => {
  return (
    <Wrapper>
      {todos.map(todo => (
        <TodoListItem key={todo.id}
                      todo={todo}  
        />
      ))}
    </Wrapper>
  )
}

export default TodoList;

const Wrapper = styled.div`
  min-height: 320px;
  max-height: 513px;
  overflow-y: auto;
`