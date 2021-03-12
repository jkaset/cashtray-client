
import React, { useContext, useState, useEffect } from "react"
import {RewardContext} from "./RewardProvider"
import {NonsmokerContext} from "../nonsmokers/NonsmokerProvider"

export const RewardForm=(props)=>{
	const {rewards, getRewards, addReward, deleteReward} = useContext(RewardContext)
    const {nonsmokers, getNonsmokers, singleNonsmoker, getSingleNonsmoker}=useContext(NonsmokerContext)
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
      <p>Add Cashtray Reward</p>
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
          }}> submit

      </button>
  </>
)
}