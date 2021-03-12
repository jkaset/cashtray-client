
import React, { useContext, useState, useEffect } from "react"
import {RewardContext} from "./RewardProvider"
import {NonsmokerContext} from "../nonsmokers/NonsmokerProvider"

export const RewardForm=(props)=>{
	const {rewards, getRewards, addReward, deleteReward} = useContext(RewardContext)
    const {nonsmokers, getNonsmokers, singleNonsmoker, getSingleNonsmoker}=useContext(NonsmokerContext)
    const [reward, setReward]=useState({})
    
  //   useEffect(() => {

  //       getRewards()
        
	// }, [])

  const handleControlledInputChange = (reward) => {
       
    const newReward = Object.assign({}, reward)  
           
    newReward[reward.target.reward_name] = reward.target.value  
    setReward(newReward)                                 
}
 

return(
  <>
      <p>Add Cashtray Reward</p>
      <form className="rewardForm">

          <fieldset>
              <label> Name it</label>
              {reward&&<input type="text" name="reward_name" defaultValue={reward.reward_name}  onChange={handleControlledInputChange}></input>}
          </fieldset>

          <fieldset>
              <label> Reward Cost</label>
              {reward&&<input type="text" name="reward_cost" defaultValue={reward.reward_cost} onChange={handleControlledInputChange}></input>}
          </fieldset>
          


      </form>
      <button type="submit"
          onClick={event=>{
              event.preventDefault()
              addReward()
          }}> submit

      </button>
  </>
)
}