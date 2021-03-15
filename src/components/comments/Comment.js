import React from "react"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import './Comment.css'

export const Comment = ({comment, post, props}) => (
    <div>
        <p>{comment.comment}</p>
        <p>Shout out from: {comment.commenter.user.first_name} {comment.commenter.user.last_name}</p>
        {(Date(comment.created_on))}
        {/* {parseInt(nonsmoker.user_id) === parseInt(commenter.id) */}
        {/* // parseInt(localStorage.getItem("cashtray_token")) */}
                    ? <FontAwesomeIcon onClick={() => props.history.push(`/addComment/${comment.id}`, {comment})} icon={faEdit}  />
                    : ""
    </div>
)