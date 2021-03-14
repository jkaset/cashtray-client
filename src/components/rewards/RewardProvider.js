import React, { useState } from "react"

export const RewardContext = React.createContext()


export const RewardProvider = (props) => {
  
  const [rewards, setRewards] = useState([])
  const [singleReward, setSingleReward] = useState([])
  const [available, setAvailable] = useState()
  

  const getRewards = () => {
    return fetch("http://localhost:8000/rewards", {
      "headers": {
        "Authorization": `Token ${localStorage.getItem("cashtray_token")}`
      }
    })
      .then(r => r.json())
      .then(setRewards)
      .then(console.log(rewards))
  }

  const getRewardById = (id) => {
    return fetch(`http://localhost:8000/rewards/${id}`, {
      "headers": {
        "Authorization": `Token ${localStorage.getItem("cashtray_token")}`
      }
    })
      .then(r => r.json())
      .then(setSingleReward)
      .then(console.log(singleReward))
  }


  const redeemReward = (reward) => {
    return fetch(`http://localhost:8000/rewards/${reward.id}/redeem`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Token ${localStorage.getItem("cashtray_token")}`
      }
    
    })
      .then(getRewards)
  }

  const addReward = (reward) => {
    return fetch("http://localhost:8000/rewards", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Token ${localStorage.getItem("cashtray_token")}`
      },
      body: JSON.stringify(reward)
    })
      .then(getRewards)
  }

  const deleteReward = reward => {
    return fetch(`http://localhost:8000/rewards/${reward.id}`, {
        headers: {
            "Authorization": `Token ${localStorage.getItem("cashtray_token")}`
          },
        method: "DELETE"
    })
    .then(getRewards)
}

  return (
    <>
    <RewardContext.Provider value={{
      rewards, setRewards, singleReward, setSingleReward, deleteReward, getRewards, getRewardById, redeemReward, addReward, available, setAvailable
    }}>
      {props.children}
    </RewardContext.Provider>
    </>
  )
}