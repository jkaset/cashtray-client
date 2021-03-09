import React, { useState } from "react"

export const NonsmokerContext = React.createContext()

export const NonsmokerProvider = (props) => {

  const [nonsmokers, setNonsmokers] = useState([])

  const getNonsmokers = () => {
    return fetch("http://localhost:8000/nonsmokers", {
      "headers": {
        "Authorization": `Token ${localStorage.getItem("cashtray_user_id")}`
      }
    })
      .then(r => r.json())
      .then(setNonsmokers)
  }

  const getNonsmokerById = () => {
    return fetch(`http://localhost:8000/nonsmokers/${id}`, {
      "headers": {
        "Authorization": `Token ${localStorage.getItem("cashtray_user_id")}`
      }
    })
      .then(r => r.json())
  }

  const getSingleNonsmoker = (id) => {
    return fetch(`http://localhost:8000/nonsmokers/${id}`, {
      headers: {
        "Authorization": `Token ${localStorage.getItem("cashtray_token")}`
      }
    })
      .then(res => res.json())
      .then(setNonsmokers)
  }

  const updateNonsmoker = (nonsmoker) => {
    return fetch(`http://localhost:8000/nonsmokers/${nonsmoker.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Token ${localStorage.getItem("cashtray_token")}`
      },
      body: JSON.stringify(nonsmoker)
    })
      .then(getNonsmokers)
  }

  const addNonsmoker = (nonsmoker) => {
    return fetch("http://localhost:8000/nonsmokers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Token ${localStorage.getItem("cashtray_token")}`
      },
      body: JSON.stringify(nonsmoker)
    })
      .then(getNonsmokers)
  }



  return (
    <NonsmokerContext.Provider value={{
      nonsmokers, getNonsmokers, getNonsmokerById, getSingleNonsmoker, updateNonsmoker, addNonsmoker
    }}>
      {props.children}
    </PostContext.Provider>
  )
}
