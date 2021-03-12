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



  // useEffect(() => {
  //   refreshNonsmoker()
  //   .then(getSingleNonsmoker())
  // }, [])

  return (
    <>
      <h2>Quit Date</h2>
      <span>{singleNonsmoker.quit_date}</span>
      <h2>Days smoke free</h2>
      <span>{singleNonsmoker.time_smoke_free}</span>
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
