import React, { useState } from "react"

export const NonsmokerContext = React.createContext()


export const NonsmokerProvider = (props) => {
  
  const [nonsmokers, setNonsmokers] = useState([])
  const [singleNonsmoker, setSingleNonsmoker] = useState([])

  const getNonsmokers = () => {
    return fetch("http://localhost:8000/nonsmokers", {
      "headers": {
        "Authorization": `Token ${localStorage.getItem("cashtray_token")}`
      }
    })
      .then(r => r.json())
      .then(setNonsmokers)
      .then(console.log(nonsmokers))
  }

  const getNonsmokerById = (id) => {
    return fetch(`http://localhost:8000/nonsmokers/${id}`, {
      "headers": {
        "Authorization": `Token ${localStorage.getItem("cashtray_token")}`
      }
    })
      .then(r => r.json())
  }

  const getSingleNonsmoker = () => {
    return fetch(`http://localhost:8000/nonsmokers/home`, {
      headers: {
        "Authorization": `Token ${localStorage.getItem("cashtray_token")}`
      }
    })
      .then(res => res.json())
      .then(setSingleNonsmoker)
      .then(console.log(singleNonsmoker))
  }

  const updateNonsmoker = (id) => {
    return fetch(`http://localhost:8000/nonsmokers/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Token ${localStorage.getItem("cashtray_token")}`
      },
      
    })
      .then(setSingleNonsmoker)
     
  }

  const refreshNonsmoker = () => {
    return fetch(`http://localhost:8000/nonsmokers/oops`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Token ${localStorage.getItem("cashtray_token")}`
      },
      
    })
   
    .then(setSingleNonsmoker)
    .then(console.log(singleNonsmoker))
    .then(getSingleNonsmoker)

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
    <>
    <NonsmokerContext.Provider value={{
      nonsmokers, singleNonsmoker, setSingleNonsmoker, setNonsmokers, getNonsmokers, getNonsmokerById, getSingleNonsmoker, updateNonsmoker, addNonsmoker, refreshNonsmoker
    }}>
      {props.children}
    </NonsmokerContext.Provider>
    </>
  )
}
