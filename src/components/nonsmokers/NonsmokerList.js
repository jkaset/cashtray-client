//Display home page for nonsmoker
//Time smoke free
//Quit Date
//Oops button
import React, { useContext, useEffect, useState } from "react"
import { NonsmokerContext } from "./NonsmokerProvider"


export const NonsmokerList = () => {
  const { singleNonsmoker, getSingleNonsmoker, updateNonsmoker, refreshNonsmoker } = useContext(NonsmokerContext)

  useEffect(() => {
    getSingleNonsmoker()
  }, [])
  const date = new Date(singleNonsmoker.quit_date)
  console.log(date)

  const timeClean = singleNonsmoker.time_smoke_free

  const cigsNotSmoked = singleNonsmoker.cigs_per_day * singleNonsmoker.time_smoke_free

  const timeSaved = (cigsNotSmoked * 4)


  return (
    <>
      <h1>I QUIT</h1>
      <h2>Timer</h2>
      { timeClean < 1 ?
        <h1>DAY 1! You Got This!</h1> :
        <h1>{timeClean} DAYS STRONG</h1>
      }
      <h2>Quit Date</h2>

      <div>{date.toLocaleString("en-US", {
        year: "numeric",
        month: "numeric",
        day: "numeric",
        timeZone: "America/Chicago",
      })}</div>

      {timeClean < 1 ? "" :
        <>
          <div>Cigs not smoked: {cigsNotSmoked}</div>


          {timeSaved > 59 ?
            <div>Average time saved not smoking: {Math.round(timeSaved / 60)} hours</div> : <div>Average time saved not smoking: {timeSaved} minutes</div>

          }

          <div>Full days smoke free: {singleNonsmoker.time_smoke_free}</div>
        </>
      }




      <div>
        <button type="submit"
          onClick={event => {
            event.preventDefault()
            refreshNonsmoker()
          }}> oops
        </button>
      </div>

    </>
  )
}


// useEffect(() => {
//   getNonsmokers()

// }, [])


// return (
//   <>
//     {nonsmokers.map((nonsmoker)=>
//       <span>
//         {nonsmoker.quit_date}
//       </span>
//     )}


{/* <div>
      <h2>Time Smoke Free: {nonsmokers.time_smoke_free}</h2>
      <p>Quit Date: {nonsmokers.quit_date}</p>
    </div> */}
