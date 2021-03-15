import React, { useContext, useEffect, useState } from "react"
import { NonsmokerContext } from "../nonsmokers/NonsmokerProvider"
import { CommentForm } from "./CommentForm"

export const CommentCommunityList = () => {
  const { nonsmokers, getNonsmokers } = useContext(NonsmokerContext)
  
    useEffect(() => {
    getNonsmokers()

  }, [])



    return (
      <>
      <h1>community</h1>
      <p>{nonsmokers.quit_date}</p>
    
      <ul>
       {nonsmokers.map((nonsmoker)=>
       <>
         <li>
           <div>{nonsmoker.user.first_name} {nonsmoker.user.last_name}: {nonsmoker.time_smoke_free}</div>
           
           
           <button type="submit"
            onClick={event => {
              event.preventDefault()
              CommentForm()
            }}> give kudos
            
            </button>
         </li>
      </> 
       )}
      </ul> 
      </>
    )
}