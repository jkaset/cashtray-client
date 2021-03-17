import React, { useContext, useEffect, useState } from "react"
import { NonsmokerContext } from "../nonsmokers/NonsmokerProvider"
import { RewardContext } from "./RewardProvider"
import "./Reward.css"
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';


export const RewardList = (props) => {

  const { rewards, getRewards, redeemReward, deleteReward } = useContext(RewardContext)
  const { singleNonsmoker, getSingleNonsmoker } = useContext(NonsmokerContext)
  const [spentCashAmount, setSpentCashAmount] = useState(0)
  const [availableCashAmount, setAvailableCashAmount] = useState()


  useEffect(() => {
    getSingleNonsmoker()
      .then(getRewards)
  }, [])


  useEffect(() => {
    const newTotal = allTimeTotal - spentCashAmount
    setAvailableCashAmount((newTotal).toFixed(2))
  }, [spentCashAmount])

  useEffect(() => {
    let redeemedRewardsArray = [0]
    const reducer = (accumulator, currentValue) => accumulator + currentValue
    rewards.forEach(r => {
      if (r.redeemed === true) {
        redeemedRewardsArray.push(r.reward_cost)
      }

      const redeemedTotal = (redeemedRewardsArray.reduce(reducer)).toFixed(2)
      setSpentCashAmount(redeemedTotal)

    })
  }, [rewards])


  const daily_cost = ((singleNonsmoker.cigs_per_day) / (singleNonsmoker.cigs_per_pack)) * (singleNonsmoker.price_per_pack)

  const allTimeTotal = ((singleNonsmoker.time_smoke_free) * daily_cost).toFixed(2)





  return (
    <>
      <Container>
      <h2 class="display-4">wallet</h2>
        <p>All-time savings: {allTimeTotal}</p>
        <p>Available cash: {availableCashAmount}</p>
        <p>Total Spent: {spentCashAmount}</p>
        <div>
        <Button variant="danger" onClick={() => {
          props.history.push("/wallet/create")
        }}>Create Reward
        </Button>
        </div>
        <h3>My Rewards List</h3>
        <ul>
          {
            rewards.map(reward => {

              return <li key={reward.id} >
                <div>{reward.reward_name} : {reward.reward_cost}</div>
                
                {reward.redeemed ?
                  <div></div> :
                  <>
                    <Button type="submit"
                      onClick={event => {
                        event.preventDefault()
                        if (availableCashAmount - reward.reward_cost > 0) {
                          redeemReward(reward)
                        } else {
                          //alert user not enough cash
                          alert("Not enough available Cash!")
                        }
                      }}> redeem </Button>
                    <Button type="submit"
                      onClick={event => {
                        event.preventDefault()

                        deleteReward(reward)

                      }}> delete </Button> </>
                }
              </li>

            })}
        </ul>



      </Container>
    </>
  )
}