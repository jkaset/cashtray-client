import React, { useContext, useEffect, useState } from "react"
import { NonsmokerContext } from "../nonsmokers/NonsmokerProvider"
import { RewardContext } from "./RewardProvider"

export const RewardList = () => {

  const { rewards, getRewards, redeemReward, deleteReward } = useContext(RewardContext)
  const { singleNonsmoker, getSingleNonsmoker } = useContext(NonsmokerContext)

  useEffect(() => {
    getSingleNonsmoker()
      .then(getRewards)
  }, [])



  const daily_cost = ((singleNonsmoker.cigs_per_day) / (singleNonsmoker.cigs_per_pack)) * (singleNonsmoker.price_per_pack)

  const allTimeTotal = (singleNonsmoker.time_smoke_free) * daily_cost

  console.log(singleNonsmoker.time_smoke_free)
  console.log(allTimeTotal)

  // const minusRedeemedValues = () => {
  //   if (rewards.redeemed === true) {
  //     return allTimeTotal - rewards.reward_cost
  //   } 
  // }

  //adjustCost function
  // const availableCash = allTimeTotal - reward.reward_cost if redeemed = true

  return (
    <>
      <p>my rewards</p>
      All-time savings: {allTimeTotal}
      <p>Available cash: { }</p>
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
                // .then(minusRedeemedValues)
              }}> delete

            </button>
          </li>
          //  }
        })}
      </ul>

    </>
  )
}