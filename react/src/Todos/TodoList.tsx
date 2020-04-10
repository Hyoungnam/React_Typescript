import * as React from 'react'
import TodoListItem from "./TodoListItem";
import styled from "styled-components";

interface ITodo {
  id: number,
  text: string,
  checked: boolean,
}
interface ITodos {
  todos: Array<ITodo>;
  onRemove: (id:number) => void;
  onToggle: (id:number) => void;
}

const TodoList: React.FC<ITodos> = ({todos, onRemove, onToggle}) => {
  return (
    <Wrapper>
      {todos.map(todo => (
        <TodoListItem key={todo.id}
                      todo={todo}  
                      onRemove={onRemove}
                      onToggle={onToggle}
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