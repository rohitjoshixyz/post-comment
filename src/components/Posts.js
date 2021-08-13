import { React, useEffect, useState } from "react";
import { fetchPosts } from "../apis/postsApi";
import Post from "./Post"

const Posts = () => {
  const [posts, setPosts] = useState([])

  useEffect( () => {
    fetchPosts(setPosts)
  }, [])
  return (
    <ul className="post-list">
      {
        posts.slice(0, 5).map((post)=> {
          return <Post key={post.id} post={post} />
        })
      }
    </ul>
  );
}

export default Posts