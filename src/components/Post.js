import {React, useEffect, useState} from "react";
import { fetchComments } from "../apis/commentsApi";
import Comment from "./Comment";

const Post = ({post: {id, title, body}}) => {
  const [comments, setComments] = useState([])

  useEffect( () => {
    fetchComments(setComments, id)
  }, [id])

  return(
    <li>
      <h3>{title}</h3>
      <p>{body}</p>
      <section>
        {
        comments.map((comment) => {
          return <Comment key={comment.id} comment={comment}/>
        })
        }
      </section>
    </li>
  )
}

export default Post;