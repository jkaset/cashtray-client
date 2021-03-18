import React, { useContext, useEffect, useState } from "react"
import { NonsmokerContext } from "../nonsmokers/NonsmokerProvider"
import { RewardContext } from "./RewardProvider"
import "./Reward.css"
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import CardDeck from 'react-bootstrap/CardDeck';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import "./Reward.css"
import { faDonate } from '@fortawesome/free-solid-svg-icons';


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

  const time = singleNonsmoker.time_smoke_free




  return (
    <>
      { time > 1 ?
        <>
          <Container>
            <h2 class="display-4 walletHeader">wallet</h2>


            <CardDeck>

              <div class="card text-white bg-primary  mb-3" >
                <div class="card-body">
                  <h4 class="card-title">All-time Savings</h4>
                  <p class="card-text">{allTimeTotal}</p>
                </div>
              </div>
              <div class="card text-white bg-primary  mb-3 " >
                <div class="card-body  ">
                  <h4 class="card-title">Cash Available  </h4>
                  <p class="card-text">{availableCashAmount}</p>
                </div>
              </div>
              <div class="card text-white bg-primary  mb-3" >

                <div class="card-body ">
                  <h4 class="card-title">Total Cash Spent</h4>
                  <p class="card-text">{spentCashAmount}</p>
                </div>
              </div>
            </CardDeck>

            <h4>my rewards</h4>
            <ul class="list-group">
              {
                rewards.map(reward => {

                  return <li class="list-group-item d-flex justify-content-between align-items-center" key={reward.id} >
                    <div>{reward.reward_name} :  ${reward.reward_cost}</div>  <div></div>

                    {reward.redeemed ?
                      <div></div> :
                      <>
                        <ButtonGroup>
                          <Button variant="outline-primary" type="submit"
                            onClick={event => {
                              event.preventDefault()
                              if (availableCashAmount - reward.reward_cost > 0) {
                                redeemReward(reward)
                              } else {
                                //alert user not enough cash
                                alert("Not enough available Cash!")



                              }
                            }}> redeem </Button>
                          <Button variant="outline-primary" type="submit"
                            onClick={event => {
                              event.preventDefault()

                              deleteReward(reward)

                            }}> <FontAwesomeIcon icon={faTrashAlt} /></Button> </ButtonGroup></>
                    }
                  </li>

                })}
            </ul>


            <div>
              <Button id="create" variant="secondary" onClick={() => {
                props.history.push("/wallet/create")
              }}>Create Reward
        </Button>
            </div>

          </Container >
        </> :
        <>
          <Container>
          <h2 class="display-4 walletHeader"> 
       
            your wallet starts growing today </h2>
       
       <p class="">Check back tomorrow for more stats!</p>
       <FontAwesomeIcon class="dollar" icon={faDonate} />
          </Container>
        </>
      } </>
  )
}