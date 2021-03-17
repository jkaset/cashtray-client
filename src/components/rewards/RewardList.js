import React, { useContext, useEffect, useState } from "react"
import { NonsmokerContext } from "../nonsmokers/NonsmokerProvider"
import { RewardContext } from "./RewardProvider"
import "./Reward.css"


export const RewardList = (props) => {

  const { rewards, getRewards, redeemReward, unredeemReward, deleteReward } = useContext(RewardContext)
  const { singleNonsmoker, getSingleNonsmoker } = useContext(NonsmokerContext)
  const [spentCashAmount, setSpentCashAmount] = useState(0)
  const [availableCashAmount, setAvailableCashAmount] = useState()


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
      <h1>Wallet</h1>
      
      All-time savings: {allTimeTotal}
      <p>Available cash: {availableCashAmount}</p>
      <p>Total Spent: {spentCashAmount}</p>
      <h3>My Rewards List</h3>
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
                      if (availableCashAmount - reward.reward_cost > 0) {
                        redeemReward(reward)
                      } else {
                        //alert user not enough cash
                        alert("Not enough available Cash!")
                      }
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


      <button onClick={() => {
        props.history.push("/wallet/create")
      }}>Create Reward
      </button>

    </>
  )
}