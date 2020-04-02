import * as React from 'react'
import PostContainer from "../containers/PostContainer";
import { match, RouteComponentProps } from "react-router-dom";

interface IPostPageProps extends RouteComponentProps<IMatchParams> {}
interface IMatchParams {
  id: string;
}
const PostPage: React.FC<IPostPageProps> = ({ match }) => {
  const { id } = match.params;
  const postId = parseInt(id, 10);
  return (
    <PostContainer postId={postId} />
  )
}
export default PostPage;