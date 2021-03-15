import React, { useContext, useEffect, useState } from "react"
import { NonsmokerContext } from "../nonsmokers/NonsmokerProvider"
import { CommentContext } from "./CommentProvider"
import { Comment } from "./Comment"

export const CommentCommunityList = () => {
  const { nonsmokers, getNonsmokers } = useContext(NonsmokerContext)
  const { comments, getComments } = useContext(CommentContext)
  
    useEffect(() => {
    getNonsmokers()
    .then(getComments)
  }, [])



    return (
      <>
      <h1>community</h1>
      <p>{nonsmokers.quit_date}</p>
    
      <ul>
       {nonsmokers.map((nonsmoker)=>
         <li>
           {nonsmoker.user.first_name} {nonsmoker.user.last_name}: {nonsmoker.time_smoke_free} 
           <button>say hey</button>

         </li>
       )}
      </ul> 
      <ul>
       {comments.map((comment)=>
         <li>
           From: {comment.commenter.user.first_name} to: {comment.recipient.user.first_name} {comment.comment} 

         </li>
       )}
      </ul> 
      </>
    )
}