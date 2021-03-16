import React, { useContext, useEffect, useState } from "react"
import { NonsmokerContext } from "./NonsmokerProvider"
import { CommentContext } from "../comments/CommentProvider"
import { Comment } from "../comments/Comment"
import { Link } from "react-router-dom"


export const NonsmokerDetail = (props) => {
  const { getSingleNonsmoker, nonsmoker, setSingleNonsmoker, singleNonsmoker } = useContext(NonsmokerContext)
  const { comments, relatedComments, getCommentsByNonsmokerId } = useContext(CommentContext)


  const nonsmokerId = parseInt(props.match.params.nonsmoker_id)

  useEffect(() => {

    getCommentsByNonsmokerId(nonsmokerId)

    getSingleNonsmoker(nonsmokerId)

      .then(setSingleNonsmoker(nonsmoker))
  }, [])


  useEffect(() => {
    const nonsmokerId = parseInt(props.match.params.nonsmoker_id)
    getCommentsByNonsmokerId(nonsmokerId)
  }, [comments])


  return (
    <>
      <div>{nonsmoker.user.first_name} {nonsmoker.user.last_name}: {nonsmoker.time_smoke_free}</div>
      
      
      <h3>Comments</h3>
      {
        relatedComments.map(commentObj => <Comment key={commentObj.id} comment={commentObj} props={props} />)
      }
      <button onClick={() => {
        props.history.push(`/comments/${nonsmoker.id}/addcomment`)
      }}>Add a Comment
            </button>
   
    </>
  )
}


// { parseInt(localStorage.getItem("cashtray_token")) === cashtray.commenter.user_id ? <>
//         <button onClick={() => { confirmDelete() }}>Delete My Comment</button>
//         <button onClick={() => { props.history.push(`/comments/edit/${comment.id}`) }}>
//           Edit My Comment</button> </> : <> {""}</>
//       }