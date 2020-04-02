import * as React from "react";
import {Ipost} from "../api/posts";

interface IPostProps {
  post: Ipost
}

const Post: React.FC<IPostProps> = ({ post }) => {
  const {title, body}  = post;
  return (
    <div>
      <h1>{title}</h1>
      <div>{body}</div>
    </div>
  )
}

export default Post;
