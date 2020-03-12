import * as React from 'react'
import Todos from "../components/Todos";
import {useSelector, useDispatch} from "react-redux";
import { RootState } from "@redux/reducers";
import { addTodo, toggleTodo, IState } from "@redux/reducers/todos";

export default function TodosContainer() {  
  const todos = useSelector((reducers:RootState)=> reducers.todos);
  const dispatch = useDispatch();

  ////가독성이 좋지 않을수도 하지만 반자동화
  // const onCreate = (text: IState["text"]) => dispatch(addTodo(text));
  const onCreate = (text: string) => dispatch(addTodo(text));
  const onToggle = (id: number) => dispatch(toggleTodo(id));

  return <Todos todos={todos}
                onCreate={onCreate}
                onToggle={onToggle}
         />
}
