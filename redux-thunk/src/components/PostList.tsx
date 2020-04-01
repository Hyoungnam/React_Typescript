import * as React from "react";
import posts from "@redux/reducers/posts_withCreatePromiseThunk";
import {Ipost} from "../api/posts";
interface IPostListProps {
  posts: Array<Ipost>
}
const PostList: React.FC<IPostListProps> = ({ posts }) => {
  return  (
    <ul>
      {
        posts.map((post: Ipost)=> <li key={post.id}>{post.title}</li>)
      }
    </ul>
  ) 
}
export default PostList 