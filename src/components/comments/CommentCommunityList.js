import React, { useContext, useEffect, useState } from "react"
import { NonsmokerContext } from "../nonsmokers/NonsmokerProvider"
import { CommentForm } from "./CommentForm"
import { Link } from "react-router-dom"

export const CommentCommunityList = ({ nonsmoker }) => {
  const { nonsmokers, getNonsmokers } = useContext(NonsmokerContext)

  useEffect(() => {
    getNonsmokers()

  }, [])



  return (

    <>

      <h1>community</h1>
      <p>{nonsmokers.quit_date}</p>

      <ul>
        {nonsmokers.map((nonsmoker) =>
          <>
            <li>

              <Link to={{
                pathname: `/nonsmokers/${nonsmoker.id}`,
                state: { chosenNonsmoker: nonsmoker }
              }}> {nonsmoker.user.first_name} {nonsmoker.user.last_name}: {nonsmoker.time_smoke_free}</Link>
              

            </li>
          </>
        )}
      </ul>
    </>

  )
}