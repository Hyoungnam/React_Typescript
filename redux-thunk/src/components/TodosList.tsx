import * as React from "react";
import { Link } from "react-router-dom";

interface ITodo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

interface ITodoListProps {
  data: Array<ITodo>
}
interface ITodosProps {
  todos: ITodoListProps
}

const TodoList: React.FC<ITodosProps> = ({ todos }) => {
  console.log("todos: ", todos);
  return  (
    <ul>
      {
        <ul>
        {todos.data.map((todo: ITodo)=> 
          <li>{todo.title}</li>)
        }
        </ul>

      }
    </ul>
  ) 
}
export default TodoList 