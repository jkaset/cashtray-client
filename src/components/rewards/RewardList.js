import React, { useContext, useEffect, useState } from "react"
import { NonsmokerContext } from "../nonsmokers/NonsmokerProvider"
import { RewardContext } from "./RewardProvider"

export const RewardList = () => {

  const { rewards, getRewards, redeemReward, deleteReward, available, setAvailable } = useContext(RewardContext)
  const { singleNonsmoker, getSingleNonsmoker } = useContext(NonsmokerContext)
 

  useEffect(() => {
    getSingleNonsmoker()
      .then(getRewards)
       
  }, [])





  const daily_cost = ((singleNonsmoker.cigs_per_day) / (singleNonsmoker.cigs_per_pack)) * (singleNonsmoker.price_per_pack)

  const allTimeTotal = (singleNonsmoker.time_smoke_free) * daily_cost

  console.log(singleNonsmoker.time_smoke_free)
  console.log(allTimeTotal)

  //function that removes buttons and greys out redeemed rewards
  // const redeemedClass = 
  //   rewards.map((reward) => {
  //     if (reward.redeemed === true) {
  //       return allTimeTotal - spentCashTotal
  //   }

  //this function "works" but needs to change state
  let spentCashTotal = 0 
  const spentCash = 
    rewards.map((reward) => {
      if (reward.redeemed === true) {
        return spentCashTotal += parseInt(reward.reward_cost)
      }
    })
  // console.log(spentCashTotal)
  const availableCash = 
    rewards.map((reward) => {
      if (reward.redeemed === true) {
        return allTimeTotal - spentCashTotal
      }
     
    }) 
  


  return (
    <>
      <p>my rewards</p>
      All-time savings: {allTimeTotal}
      <p>Total Spent: {spentCash}</p>
      <p>Available cash: {availableCash}

      </p>
      <ul>
        {rewards.map((reward) => {

          return <li>
            {reward.reward_name} : {reward.reward_cost}
            <button type="submit"
              onClick={event => {
                event.preventDefault()
                redeemReward(reward)
                // .then(minusRedeemedValues)
              }}> redeem

            </button>
            <button type="submit"
              onClick={event => {
                event.preventDefault()
                deleteReward(reward)
                
              }}> delete

            </button>
          </li>
          //  }
        })}
      </ul>

    </>
  )
}