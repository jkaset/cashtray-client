import React, { useContext, useEffect, useState } from "react"
import { NonsmokerContext } from "../nonsmokers/NonsmokerProvider"
import { CommentForm } from "./CommentForm"
import { Link } from "react-router-dom"
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
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
        <h2 class="display-4 communityHeader">community</h2>
      
        <Card class="card text-white bg-primary mb-3">
        <ul class="list-group" variant="flush">
        <h4 class="card-header text-white bg-secondary">Click a name to give kudos</h4>

          {nonsmokers.map((nonsmoker) =>
            <>
              <Link to={{
                pathname: `/nonsmokers/${nonsmoker.id}`,
                state: { chosenNonsmoker: nonsmoker }
              }} style={{ textDecoration: 'none' }}>
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
                  </Card>
       
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