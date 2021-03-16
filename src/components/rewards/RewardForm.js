
import React, { useContext, useState, useEffect } from "react"
import {RewardContext} from "./RewardProvider"
import {NonsmokerContext} from "../nonsmokers/NonsmokerProvider"

export const RewardForm=(props)=>{
	const {addReward} = useContext(RewardContext)

    const [reward, setReward]=useState({
        user:(localStorage.getItem("cashtray_token")),
        reward_name:"",
        reward_cost:"",
    })
    

    const changeRewardState = (domEvent) => {
        const newRewardState = Object.assign({}, reward)
        newRewardState[domEvent.target.name] = domEvent.target.value
        setReward(newRewardState)
    }

return(
  <>
      <h3>Create Reward</h3>
      <form className="rewardForm">

          <fieldset>
              <label> Name it</label>
              <input type="text" name="reward_name" defaultValue={reward.reward_name}  onChange={changeRewardState}></input>
          </fieldset>

          <fieldset>
              <label> Reward Cost</label>
              <input type="text" name="reward_cost" defaultValue={reward.reward_cost} onChange={changeRewardState}></input>
          </fieldset>
          


      </form>
      <button type="submit"
          onClick={event=>{
              event.preventDefault()
              addReward(reward)
              .then(props.history.push("/wallet"))
          }}> submit

      </button>
  </>
)
}