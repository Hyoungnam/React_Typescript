import * as React from "react";
import {useState} from "react";
import styled, { css } from "styled-components";
import { IState, toggleTodo } from "@redux/reducers/todos";

interface ITodoItem {
  key: number;
  todo: IState;
  onToggle: (id:number) => void;
}
// interface ITodoList extends Exclude<ITodos, "onCreate"> {
// }

interface ITodos {
  todos: Array<IState>;
  onCreate?: (text:string)=>void;
  onToggle: (id:number)=>void;
}

const TodoItem = React.memo(function TodoItem({ todo, onToggle }: ITodoItem) {
  return <Li done={todo.done} 
             onClick={()=>onToggle(todo.id)}>
          {todo.text}
         </Li>;
})


// function TodoList({todos, onToggle}: Exclude<ITodos, "onCreate">) {
const TodoList = React.memo(function TodoList({todos, onToggle}: ITodos) {
  return (<ul>
    {todos.map(todo=><TodoItem key={todo.id} 
                               todo={todo}
                               onToggle={onToggle} />)
    }
  </ul>)
})


function Todos({todos, onCreate, onToggle}:ITodos) {
  const [text, setText] = useState('')
  const onChange = (e:React.ChangeEvent<HTMLInputElement>) => setText(e.target.value);
  const onSubmit = (e:React.FormEvent) => {
    e.preventDefault();
    //방법 1
    // if(onCreate)  {
    //   onCreate(text);
    // }
    //방법 2
    onCreate!(text);
    setText('');
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={text} 
               onChange={onChange} 
               placeholder="할 일을 입력하세요"/>
        <button type="submit">등록</button>
      </form>
      <TodoList todos={todos} onToggle={onToggle} />
    </div>
  )
}

const Li = styled.li`
  ${(props: Partial<IState>) =>
     props.done ? `text-decoration: line-through;`
                : `text-decoration: none;`
   }
`;

export default React.memo(Todos);