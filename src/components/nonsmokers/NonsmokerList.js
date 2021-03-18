//Display home page for nonsmoker
//Time smoke free
//Quit Date
//Oops button
import React, { useContext, useEffect, useState } from "react"
import { NonsmokerContext } from "./NonsmokerProvider"
import "./Nonsmoker.css"
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import CardDeck from 'react-bootstrap/CardDeck';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';


export const NonsmokerList = (props) => {
  const { singleNonsmoker, getSingleNonsmoker, updateNonsmoker, refreshNonsmoker } = useContext(NonsmokerContext)




  useEffect(() => {
    getSingleNonsmoker()
  }, [])
  const date = new Date(singleNonsmoker.quit_date)
  console.log(date)

  const timeClean = singleNonsmoker.time_smoke_free

  const cigsNotSmoked = singleNonsmoker.cigs_per_day * singleNonsmoker.time_smoke_free

  // const userName = singleNonsmoker.user.first_name

  const timeSaved = (cigsNotSmoked * 4)
  const timeSavedRadio = (cigsNotSmoked * 6)

  const confirmOops = () => {
    const prompt = window.confirm("Fall off the wagon?")
    if (prompt === true) {
      refreshNonsmoker()
        .then(() => { props.history.push("/") })
    }
  }


  return (
    <>
      <Container>

        {timeClean < 1 ?

          <div class="jumbotron">
            <h1 class="display-3">DAY 1 </h1>
            <h2 class="display-4">You Got This!</h2>
            <p class="lead">“Eight hours after putting out a cigarette, you are 97% nicotine-free. After just three days of not smoking, you are 100% nicotine-free.”</p>

            <p className="float-right">― Allen Carr, The Easyway to Stop Smoking</p>
            <p class="lead">
              <a class="btn btn-secondary btn-lg" href="/community" role="button">Join the Nonsmoker Community</a>
            </p>
          </div>
          :

          <div class="jumbotron">
            <h1 class="display-3">{timeClean} DAYS STRONG</h1>

            <p class="lead">“Once you understand you’re not making a sacrifice, you’re well on your way to freedom.”</p>

            <p className="float-right">― Allen Carr, Quit Smoking Without Willpower</p>
            <p class="lead">
              <a class="btn btn-secondary btn-lg" href="/wallet" role="button">Cashtray Wallet</a>
            </p>
          </div>
        }

<CardDeck>
        <div class="card text-white bg-primary  mb-3">
          <div class="card-header">Nonsmoker Since</div>
          <div class="card-body">
            <h4 class="card-title">{date.toLocaleString("en-US", {
              year: "numeric",
              month: "numeric",
              day: "numeric",
              timeZone: "America/Chicago",
            })}</h4>
            <p class="card-text"></p>
          </div>
        </div>
        {timeClean < 1 ? "" :
          <>
            <div class="card text-white bg-primary  mb-3" >
              <div class="card-header">Time Saved</div>
              <div class="card-body">
                <h4 class="card-title">{timeSaved > 59 ?
                  <div>{Math.round(timeSaved / 60)} hours</div> : <div>Average time saved not smoking: {timeSaved} minutes</div>
                }</h4>
                <p class="card-text">freed up by not smoking</p>
              </div>
            </div>
            <div class="card text-white bg-primary mb-3" >
              <div class="card-header">Cigarettes unsmoked</div>
              <div class="card-body">
                <h4 class="card-title">{cigsNotSmoked}</h4>
                <p class="card-text">"no thank you's"</p>
              </div>
            </div>
          </>
        } </CardDeck>




        {/* <div>
          <Button variant="danger" type="submit"
            onClick={event => {
              event.preventDefault()
              refreshNonsmoker()
            }}> oops
        </Button>
        </div> */}
        <Button variant="danger" className="miscbutton oops float-right" onClick={() => {
          confirmOops()
        }}>
          <FontAwesomeIcon icon={faExclamationTriangle} /></Button>

      </Container>
    </>
  )
}


