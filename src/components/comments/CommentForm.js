import React, { useContext, useRef, useState, useEffect } from "react"
import { NonsmokerContext } from "../nonsmokers/NonsmokerProvider"
import { CommentContext } from "./CommentProvider"
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

export const CommentForm = (props) => {
    const { addComment, comments, getComments } = useContext(CommentContext)
    const { getNonsmokerById, nonsmoker } = useContext(NonsmokerContext)

    const [comment, setComment] = useState({})

    const chosenRecipient = nonsmoker

    const recipient_id = parseInt(chosenRecipient.id)
    const commenter_id = parseInt(localStorage.getItem("cashtray_token"))

    const handleControlledInputChange = (event) => {
        const newComment = Object.assign({}, comment)
        newComment["comment"] = event.target.value
        setComment(newComment)
    }


    useEffect(() => {
        getComments()

    }, [])


    const constructNewComment = () => {

        addComment({
            recipient_id,
            commenter_id,
            comment: comment.comment,
            // created_on is handled by class definition in models for Comment
        })
            .then(() => props.history.push(`/nonsmokers/${recipient_id}`))
    }


    return (
        <>
            <Container>
                <form className="commentForm">
                    <h2 className="commentForm__title commentForm">{"New Comment"}</h2>

                    <fieldset>
                        <div className="form-group">
                            <input type="text" id="comment" required autoFocus className="form-control"
                                proptype="varchar"
                                placeholder="kudos..."
                                defaultValue={comment.comment}
                                onChange={handleControlledInputChange}
                            />
                        </div>
                    </fieldset>

                    <Button type="submit" variant="secondary"
                        onClick={evt => {
                            evt.preventDefault() // Prevent browser from submitting the form
                            constructNewComment()

                        }}
                        className="btn btn-primary">
                        Submit</Button>
         
                </form>
            </Container>
        </>
    )

}



// export const CommentForm = (props) => {
//     const { addComment, updateComment, comments, getComments } = useContext(CommentContext)
//     const { getNonsmokerById, nonsmoker } = useContext(NonsmokerContext)

//     const [ comment, setComment ] = useState({})

//     const editMode = props.match.params.hasOwnProperty("id") 

//     const chosenRecipient = nonsmoker

//     const recipient_id = parseInt(chosenRecipient.id)
//     const commenter_id = parseInt(localStorage.getItem("cashtray_token"))

//     const handleControlledInputChange = (event) => {
//         const newComment = Object.assign({}, comment)
//         newComment["comment"] = event.target.value
//         setComment(newComment)
//     }

//     const getCommentInEditMode = () => {
//         if (editMode) {
//             const commentId = parseInt(props.match.params.id)
//             const selectedComment = comments.find(c => c.id === commentId) || {}
//             setComment(selectedComment)
//         }
//     }

//     useEffect(() =>{
//         getComments()

//     }, [])

//     useEffect(() =>{
//         getCommentInEditMode()
//     }, [comments])
//     // debugger
//     const constructNewComment = () => {
//         if (editMode) {
//             updateComment({
//                 recipient_id: comment.id,
//                 recipient: comment.recipient_id,
//                 commenter_id,
//                 comment: comment.comment,
//                 created_on: comment.created_on   
//             })
//             .then(() => props.history.push(`/nonsmokers/${recipient_id}`))
//         } else {
//             addComment({
//                 recipient_id,
//                 commenter_id,
//                 comment: comment.comment,
//                 // created_on is handled by class definition in models for Comment
//             })
//             .then(() => props.history.push(`/nonsmokers/${recipient_id}`))
//         }
//     } 

//     return (
//         <form className="commentForm">
//             <h2 className="commentForm__title">{editMode ? "Update Comment" : "New Comment"}</h2>

//             <fieldset>
//                 <div className="form-group">
//                     <input type="text" id="content" required autoFocus className="form-control"
//                         proptype="varchar"
//                         placeholder="some notes..." 
//                         defaultValue={comment.comment}
//                         onChange={handleControlledInputChange}    
//                     />
//                 </div>
//             </fieldset>

//             <button type="submit"
//                 onClick={evt => {
//                     evt.preventDefault() // Prevent browser from submitting the form
//                     constructNewComment()
//                 }}
//                 className="btn btn-primary">
//                 {editMode ? "Save Updates" : "Make Comment"}
//             </button>
//         </form>
//     )
// }