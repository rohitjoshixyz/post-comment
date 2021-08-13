import React from "react";

const Comment = ({comment: {email, body}}) => {
  return <li>
    <p>{email}</p>
    <p>{body}</p>
  </li>
}

export default Comment