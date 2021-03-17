import React, { useContext, useEffect, useState } from "react"
import { NonsmokerContext } from "../nonsmokers/NonsmokerProvider"
import { CommentForm } from "./CommentForm"
import { Link } from "react-router-dom"
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment } from '@fortawesome/free-regular-svg-icons';
import "./Comment"

export const CommentCommunityList = ({ nonsmoker }) => {
  const { nonsmokers, getNonsmokers } = useContext(NonsmokerContext)

  useEffect(() => {
    getNonsmokers()

  }, [])



  return (

    <>
      <Container>

        <h2 class="display-4">community</h2>

        <ul class="list-group">

          {nonsmokers.map((nonsmoker) =>
            <>
              <Link to={{
                pathname: `/nonsmokers/${nonsmoker.id}`,
                state: { chosenNonsmoker: nonsmoker }
              }}>
                <li class="list-group-item d-flex justify-content-between align-items-center" >
                  <FontAwesomeIcon icon={faComment} />  {nonsmoker.user.first_name} {nonsmoker.user.last_name}

                  {nonsmoker.time_smoke_free > 1 ?
                    <span class="badge badge-primary badge-pill">
                      {nonsmoker.time_smoke_free} days</span>
                    :
                    <span class="badge badge-primary badge-pill">
                      1 day </span>
                  }
                </li></Link>
            </>
          )}
        </ul>


      </Container>
    </>

  )
}



{/* <ul>
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
        </ul> */}