import React, { useContext, useEffect, useState } from "react"
import { NonsmokerContext } from "../nonsmokers/NonsmokerProvider"
import { RewardContext } from "./RewardProvider"
import "./Reward.css"

export const RewardList = () => {

  const { rewards, getRewards, redeemReward, deleteReward } = useContext(RewardContext)
  const { singleNonsmoker, getSingleNonsmoker } = useContext(NonsmokerContext)
  const [spentCashAmount, setSpentCashAmount] = useState(0)
  const [availableCashAmount, setAvailableCashAmount] = useState()

  const [isRedeemed, setRedeemed] = useState("false")

  const handleToggle = () => {
    setRedeemed(!isRedeemed)
  }


  useEffect(() => {
    getSingleNonsmoker()
      .then(getRewards)
  }, [])


  useEffect(() => {
    const newTotal = allTimeTotal - spentCashAmount
    setAvailableCashAmount(newTotal)
  }, [spentCashAmount])

  useEffect(() => {
    let redeemedRewardsArray = [0]
    const reducer = (accumulator, currentValue) => accumulator + currentValue
    rewards.forEach(r => {
      if (r.redeemed === true) {
        redeemedRewardsArray.push(r.reward_cost)
      }
      // console.log(redeemedRewardsArray)
      const redeemedTotal = redeemedRewardsArray.reduce(reducer)
      setSpentCashAmount(redeemedTotal)
      
    })
  }, [rewards])


  const daily_cost = ((singleNonsmoker.cigs_per_day) / (singleNonsmoker.cigs_per_pack)) * (singleNonsmoker.price_per_pack)

  const allTimeTotal = (singleNonsmoker.time_smoke_free) * daily_cost


  return (
    <>
      <p>My Rewards</p>
      All-time savings: {allTimeTotal}
      <p>Available cash: {availableCashAmount}</p>
      <p>Total Spent: {spentCashAmount}</p>
      <ul>
        {
          rewards.map(reward => {

          return <li key={reward.id} >
            <div>{reward.reward_name} : {reward.reward_cost}</div>

            {reward.redeemed ? 
            <div></div> :
            <>
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

            </button> </> 
            }
          </li>

        })}
      </ul>

    </>
  )
}