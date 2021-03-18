import React, { useContext, useEffect, useState } from "react"
import { NonsmokerContext } from "../nonsmokers/NonsmokerProvider"
import Container from 'react-bootstrap/Container';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Spinner from 'react-bootstrap/Spinner';
import "./Health.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLungs } from '@fortawesome/free-solid-svg-icons';



export const HealthList = () => {

  const { singleNonsmoker, getSingleNonsmoker } = useContext(NonsmokerContext)

  useEffect(() => {
    getSingleNonsmoker()
  }, [])

  const timeClean = singleNonsmoker.time_smoke_free
  // console.log(timeClean)
  const userCirculation = Math.round((timeClean/90)*100)
  // console.log("circ", userCirculation)
  const userBreath = Math.round((timeClean/14)*100)
  // console.log("breath", userBreath)
  const userCarbon = Math.round((timeClean/1)*100)
  const userNic = Math.round((timeClean/2)*100)
  const userEnergy = Math.round((timeClean/4)*100)
  const userLung = Math.round((timeClean/138)*100)
  const userHeart = Math.round((timeClean/365)*100)



  return (
    <>
      <Container>
        {timeClean > 0 ?
        <>
        <h2 class="display-4 healthHeader">health</h2>

        <h4>carbon monoxide expelled</h4>
        <div>
          {userCarbon >= 100 ?
            <>
            <ProgressBar animated now={100} label="100%" /> 
            <p>Carbon Monoxide levels in body are eliminated </p> 
            </>
          :
          <>
          <ProgressBar animated now={userCarbon} label={`${userCarbon}%`} />
            <p>In {1 - timeClean} day, your carbon manoxide from smoking will be eliminated</p>
            </> }
        </div>

        

        <h4>nicotine levels expelled</h4>
        <div>
          {userNic >= 100 ?
            <>
            <ProgressBar variant="success" animated now={100} label="100%" /> 
            <p>Nicotine levels in body are eliminated. Levels are that of a nonsmoker! </p> 
            </>
          :
          <>
          <ProgressBar variant="success"  animated now={userNic} label={`${userNic}%`} />
            <p>In {2 - timeClean} days, your nicotine level should return to that of a nonsmoker!</p>
            </> }
        </div>

        <h4>energy</h4>
        <div>
          {userEnergy >= 100 ?
            <>
            <ProgressBar variant="info" animated now={100} label="100%" /> 
            <p>Your energy level is back!</p> 
            </>
          :
          <>
          <ProgressBar variant="info" animated now={userEnergy} label={`${userEnergy}%`} />
            <p>In {4 - timeClean} days, your energy levels should return to normal.</p>
            </> }
        </div>

        <h4>bad breath gone</h4>
        <div>
          {userBreath >= 100 ?
            <>
            <ProgressBar variant="success" animated now={100} label="100%" /> 
            <p>Smoking related bad breath is gone.</p> 
            </>
          :
          <>
          <ProgressBar variant="success"  animated now={userBreath} label={`${userBreath}%`} />
            <p>In {14 - timeClean} days, smoking related bad breath should be gone.</p>
            </> }
        </div>

        <h4>circulation</h4>
        <div>
          {userCirculation >= 100 ?
            <>
            <ProgressBar animated now={100} label="100%" /> 
            <p>Circulation is at 100%</p> 
            </>
          :
          <>
          <ProgressBar animated now={userCirculation} label={`${userCirculation}%`} />
            <p>In {90 - timeClean} days, your circulation will be that of a nonsmoker.</p>
            </> }
        </div>

        <h4>immunity</h4>
        <div>
          {userLung >= 100 ?
            <>
            <ProgressBar variant="info" animated now={100} label="100%" /> 
            <p>Your immunity and lung function should be improved.</p> 
            </>
          :
          <>
          <ProgressBar variant="info" animated now={userLung} label={`${userLung}%`} />
            <p>In  {138 - timeClean} days, your immunity and lung function with be significantly improved.</p>
            </> }
        </div>

        <h4>heart</h4>
        <div>
          {userHeart >= 100 ?
            <>
            <ProgressBar variant="success" animated now={100} label="100%" /> 
            <p>Your risk of heart disease is about half of that of a smoker.</p> 
            </>
          :
          <>
          <ProgressBar variant="success" animated now={userHeart} label={`${userHeart}%`} />
            <p>In {365 - timeClean} days, your risk of heart disease will be about half of that of a smoker.</p>
            </> }
        </div>
        </> :
        <>
        <h2 class="display-4 healthHeader"> 
       
        your health starts improving today </h2>
        
        <p class="">Check back tomorrow for more stats!</p>
        <FontAwesomeIcon class="lungs animate-flicker fa-2x" icon={faLungs} />
       
        
        </>
        }
      </Container>
    </>
  )
}