import React, { useContext } from "react"
import { CommentContext } from "./CommentProvider"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import './Comment.css'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

export const Comment = ({ comment, props }) => {

    const { deleteComment } = useContext(CommentContext)
    const recipientId = parseInt(comment.recipient.id)
    // console.log(recipientId)
    const thatsMine = comment.my_comment
    console.log(thatsMine)
    const date = new Date(comment.created_on)
    const confirmDeleteComment = () => {
        const prompt = window.confirm("Are you sure you want to delete this comment?")
        if (prompt === true) {
            deleteComment(comment.id)
                .then(() => { props.history.push(`/nonsmokers/${recipientId}`) })
        }
    }

    return (
        <>
            <Container>
                <div className="comment">
                    <div>"{comment.comment}" -{comment.commenter.user.first_name}</div>

                    <div>{date.toLocaleString("en-US", {
                        year: "numeric",
                        month: "numeric",
                        day: "numeric",
                        timeZone: "America/Chicago",
                    })}</div>



                    {comment.my_comment ? <>
                        <Button className="miscbutton" onClick={() => {
                            confirmDeleteComment()
                        }}>
                            Delete
                </Button>  </>
                        : ""}

                </div>
            </Container>
        </>
    )

}

{/* <button className="miscbutton" onClick={() => {
                    props.history.push({
                        pathname: `/comments/edit/${comment.id}`,
                        commentId: comment.id,
                        state: { chosenPost: recipientId }
                    })
                }}>
                    Edit
                </button> */}


