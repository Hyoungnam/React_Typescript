import * as React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch }from "react-redux";
import { RootState } from "@redux/reducers/index";

// import { getPosts } from "@redux/reducers/posts";
// import { getPosts } from "@redux/reducers/posts_withAsyncUtils";
import { getPosts } from "@redux/reducers/posts_withCreatePromiseThunk";

import PostList from "../components/PostList";
const PostListContainer: React.FC = () => {
  const {data, loading, error } = useSelector((reducer: RootState) => 
    // reducer.posts.posts
    // reducer.posts_withAsyncUtils.posts
    reducer.posts_withCreatePromiseThunk.posts
  )
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts())
  }, [dispatch]);
  
  if(loading) return <div>로딩중...</div>
  if(error) return <div>에러 발생!</div>
  console.log("data: ", data);
  if(!data) return null;
  return (
    // <PostList posts={tempData} />
    <PostList posts={data} />
  )
}

export default PostListContainer;