import React, { useContext } from "react"
import { CommentContext } from "./CommentProvider"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import './Comment.css'

export const Comment = ({ comment, props }) => {

    const { deleteComment } = useContext(CommentContext)
    const recipientId = parseInt(comment.recipient.id)
    console.log(recipientId)
    const date = new Date(comment.created_on)
    const confirmDeleteComment = () => {
        const prompt = window.confirm("Are you sure you want to delete this comment?")
        if (prompt === true) {
            deleteComment(comment.id)
                .then(() => { props.history.push(`/nonsmokers/${recipientId}`) })
        }
    }
    console.log(comment)
    if (localStorage.getItem("cashtray_token")) {
        return (
            <div className="comment">
                <div>Comment content: {comment.comment}</div>
                <div>Author: {comment.commenter.user.first_name}</div>
                <div>Date Created on: {date.toLocaleString("en-US", {
                    year: "numeric",
                    month: "numeric",
                    day: "numeric",
                    timeZone: "America/Chicago",
                })}</div>
                <button className="miscbutton" onClick={() => {
                    confirmDeleteComment()
                }}>
                    Delete
                </button>
                <button className="miscbutton" onClick={() => {
                    props.history.push({
                        pathname: `/comments/edit/${comment.id}`,
                        commentId: comment.id,
                        state: { chosenPost: recipientId }
                    })
                }}>
                    Edit
                </button>
            </div>
        )
    } else {
        return (
            <div>
                No comments
            </div>
        )
    }
}


    // return (
    //     <>
    //         <div>
    //             <p>{comment.comment}</p>
    //             <p>From: {comment.commenter.user.first_name} {comment.commenter.user.last_name}</p>
    //             <p>{comment.created_on}</p>
    //         </div>
    //         )