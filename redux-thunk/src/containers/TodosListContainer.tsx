import * as React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch }from "react-redux";
import { RootState } from "@redux/reducers/index";
import { getTodos } from "@redux/reducers/todos";
import TodosList from "../components/TodosList";

const TodoListContainer: React.FC = () => {
  const { data, loading, error } = useSelector((reducer: RootState) => 
    reducer.todos.todos
  )
  const dispatch = useDispatch();
  useEffect(() => {
    if(data) return;
    dispatch(getTodos())
  }, [dispatch]);
  
  if(loading && !data) return <div>로딩중...</div>
  if(error) return <div>에러 발생!</div>
  console.log("data: ", data);
  if(!data) return null;
  return (
    <div>
    <div>TodoListContainer</div>
    <TodosList todos={data}/>
    {/* // <PostList posts={tempData} /> */}
    </div>
  )
}

export default TodoListContainer;