import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import './Comment.css'

export const Comment = ({comment}) => (
    <div>
        <p>{comment.comment}</p>
        <p>From: {comment.commenter.user.first_name} {comment.commenter.user.last_name}</p>
        <p>{comment.created_on}</p>
    </div>
)