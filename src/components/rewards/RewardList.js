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


    
  const [spentCashAmount, setSpentCashAmount] = useState(0)
    
  useEffect(() => {
    
      let redeemedRewardsArray = [0]
      const reducer = (accumulator, currentValue) => accumulator + currentValue
      rewards.forEach(r=> {
        if (r.redeemed === true) {
          redeemedRewardsArray.push(r.reward_cost)
        }
        console.log(redeemedRewardsArray)
        const redeemedTotal = redeemedRewardsArray.reduce(reducer)
        setSpentCashAmount(redeemedTotal)
      })
    }, [rewards])

  const [availableCashAmount, setAvailableCashAmount] = useState(0)

  useEffect(() => {
      const newTotal = allTimeTotal - spentCashAmount
      setAvailableCashAmount(newTotal)
  }, [rewards])


  const daily_cost = ((singleNonsmoker.cigs_per_day) / (singleNonsmoker.cigs_per_pack)) * (singleNonsmoker.price_per_pack)

  const allTimeTotal = (singleNonsmoker.time_smoke_free) * daily_cost

  console.log(singleNonsmoker.time_smoke_free)
  console.log(allTimeTotal)

  


  return (
    <>
      <p>my rewards</p>
      All-time savings: {allTimeTotal}
      <p>Total Spent: {spentCashAmount}</p>
      <p>Available cash: {availableCashAmount}</p>
      <ul>
        {rewards.map((reward) => {

          return <li>
            {reward.reward_name} : {reward.reward_cost}
            <button type="submit"
              onClick={event => {
                event.preventDefault()
                redeemReward(reward)
                
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