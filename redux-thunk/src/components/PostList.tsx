import * as React from "react";
import { Link } from "react-router-dom";
import { Ipost } from "../api/posts";

interface IPostListProps {
  posts: Array<Ipost>
}

const PostList: React.FC<IPostListProps> = ({ posts }) => {
  console.log("posts: ", posts);
  return  (
    <ul>
      {
        posts.map((post: Ipost)=> 
        <li key={post.id}>
          <Link to={`/${post.id}`}>{post.title}</Link>
        </li>
        )
      }
    </ul>
  ) 
}
export default PostList 