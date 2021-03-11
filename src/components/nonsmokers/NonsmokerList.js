//Display home page for nonsmoker
//Time smoke free
//Quit Date
//Oops button
import React, { useContext, useEffect, useState } from "react"
import { NonsmokerContext } from "./NonsmokerProvider"


export const NonsmokerList = () => {
  const { nonsmokers, getNonsmokers, singleNonsmoker, getSingleNonsmoker } = useContext(NonsmokerContext)
  
    useEffect(() => {
    getSingleNonsmoker()

  }, [])

    return (
    <>
    <span>{singleNonsmoker.quit_date}</span>  
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
