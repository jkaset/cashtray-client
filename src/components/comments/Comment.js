import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import './Comment.css'

export const Comment = ({comment, post, props}) => (
    <div>
        <p>{comment.comment}</p>
        <p>Author: {comment.commenter.user.first_name} {comment.commenter.user.last_name}</p>
        <HumanDate date= {(Date(comment.created_on))} />
        {parseInt(post.user_id) === parseInt(localStorage.getItem("rare_user_id"))
                    ? <FontAwesomeIcon onClick={() => props.history.push(`/addComment/${comment.id}`, {chosenComment: comment})} icon={faEdit}  />
                    : ""}
    </div>
)