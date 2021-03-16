import React, { useContext, useEffect, useState } from "react"
import { NonsmokerContext } from "./NonsmokerProvider"
import { CommentContext } from "../comments/CommentProvider"
import { Comment } from "../comments/Comment"
import { Link } from "react-router-dom"


export const NonsmokerDetail = (props) => {
  const { nonsmoker, getNonsmokerById } = useContext(NonsmokerContext)
  const { comments, relatedComments, getCommentsByNonsmokerId } = useContext(CommentContext)

  const nonsmokerId = parseInt(props.match.params.nonsmokerId)

  useEffect(() => {
    getCommentsByNonsmokerId(nonsmokerId)
    getNonsmokerById(nonsmokerId)
     
  }, [])

//if nonsmokerId === nonsmoker.recipient.id
  useEffect(() => {
    const nonsmokerId = parseInt(props.match.params.nonsmokerId)
    getCommentsByNonsmokerId(nonsmokerId)
  }, [comments])


  return (
    <>

      <p>Shout outs to {nonsmoker.user.first_name} {nonsmoker.user.last_name}</p>
      <p>{nonsmoker.time_smoke_free} days without a cigarette!</p>

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
// <button onClick={() => { confirmDelete() }}>Delete My Comment</button>
//    <button onClick={() => { props.history.push(`/comments/edit/${comment.id}`) }}>
//      Edit My Comment</button> </> : <> {""}</>