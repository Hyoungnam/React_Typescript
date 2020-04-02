import * as React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch }from "react-redux";
import { RootState } from "@redux/reducers/index";
import { getPost, clearPost } from "@redux/reducers/posts";
import Post from "../components/Post";

interface IPostContainerProps {
  postId: number
}

const PostContainer: React.FC<IPostContainerProps> = ({ postId }) => {
  const {data, loading, error } = useSelector((reducer: RootState) => 
    reducer.posts.post
  )
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPost(postId));
    return () => {
      dispatch(clearPost());
    }
  }, [postId, dispatch]);
  
  if(loading) return <div>로딩중...</div>
  if(error) return <div>에러 발생!</div>
  if(!data) return null;
  return (
    <Post post={data} />
  )
}

export default PostContainer;