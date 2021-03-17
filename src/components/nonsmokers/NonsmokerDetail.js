import React, { useContext, useEffect, useState } from "react"
import { NonsmokerContext } from "./NonsmokerProvider"
import { CommentContext } from "../comments/CommentProvider"
import { Comment } from "../comments/Comment"
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';


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
      <Container>
        <div class="card text-white bg-primary mb-3" >

          <div class="card-body">
            <h4 class="card-title">Shout out to {nonsmoker.user.first_name} {nonsmoker.user.last_name}!</h4>

            {nonsmoker.time_smoke_free > 1 ?
              <p class="card-text">{nonsmoker.time_smoke_free} days without a cigarette </p> :
              <p class="card-text">Just gettin started!</p>}
            <Button  variant="secondary" onClick={() => {
              props.history.push(`/comments/${nonsmoker.id}/addcomment`)
            }}>Give Kudos!
      </Button>
          </div>
        </div>



        <div>

          {
            relatedComments.map(commentObj => <Comment key={commentObj.id} comment={commentObj} props={props} />)
          }

        </div>
      </Container>
    </>
  )
}


// { parseInt(localStorage.getItem("cashtray_token")) === cashtray.commenter.user_id ? <>
// <button onClick={() => { confirmDelete() }}>Delete My Comment</button>
//    <button onClick={() => { props.history.push(`/comments/edit/${comment.id}`) }}>
//      Edit My Comment</button> </> : <> {""}</>