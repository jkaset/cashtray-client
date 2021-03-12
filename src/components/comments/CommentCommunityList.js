import React, { useContext, useEffect, useState } from "react"
import { NonsmokerContext } from "../nonsmokers/NonsmokerProvider"

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
         <li>
           {nonsmoker.user.first_name} {nonsmoker.user.last_name}: {nonsmoker.time_smoke_free} 
         </li>
       )}
      </ul> 
      </>
    )
}