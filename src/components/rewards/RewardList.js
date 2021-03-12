import React, { useContext, useEffect, useState } from "react"
import { NonsmokerContext } from "../nonsmokers/NonsmokerProvider"
import { RewardContext } from "./RewardProvider"

export const RewardList = () => {

  const { rewards, getRewards, redeemReward } = useContext(RewardContext)
  const { nonsmokers, getNonsmokers } = useContext(NonsmokerContext)
  
  useEffect(() => {
    getNonsmokers()
    .then(getRewards)
  }, [])



  return (
    <>
      <p>my rewards</p>
     
      <ul>
       {rewards.map((reward)=> {
       
        //  if (reward.user === localStorage.getItem("cashtray_token")) {
         return <li>
           {reward.reward_name} :       
          <button type="submit"
          onClick={event=>{
              event.preventDefault()
              redeemReward(reward)
          }}> submit

      </button>
         </li> 
        //  }
      })}
      </ul> 
     
    </>
  )
}