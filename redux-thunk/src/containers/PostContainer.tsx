import * as React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch }from "react-redux";
import { RootState } from "@redux/reducers/index";
import { getPost, goToHome } from "@redux/reducers/posts";
import Post from "../components/Post";
import { reducerUtils } from "../../src/lib/asyncUtils";

interface IPostContainerProps {
  postId: number
}

const PostContainer: React.FC<IPostContainerProps> = ({ postId }) => {
  const {data, loading, error } = useSelector((reducer: RootState) => 
    reducer.posts.post[postId] || reducerUtils.initial()
  )
  const dispatch = useDispatch();
  useEffect(() => {
    if(data) return;
    dispatch(getPost(postId));
  }, [postId, dispatch]);
  
  if(loading && !data) return <div>로딩중...</div>
  if(error) return <div>에러 발생!</div>
  if(!data) return null;
  return (
    <>
      <button onClick={ ()=> dispatch(goToHome()) }>홈으로 이동</button>
      <Post post={data} />
    </>
  )
}

export default PostContainer;