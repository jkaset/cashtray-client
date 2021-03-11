import React from "react"
import { Route, Redirect } from "react-router-dom"
import { ApplicationViews } from "./ApplicationViews"
import { NavBar } from "./nav/NavBar"
import { Login } from "./auth/login"
import { Register } from "./auth/register"

export const Cashtray = (props) => (
  <>
   
    <Route render={() => {
      if (localStorage.getItem("cashtray_token")) {
        return <>
          <NavBar />
          <ApplicationViews />
        </>
      } else {
        return <Redirect to="/login" />
      }
    }} />


    <Route path="/login" render={() => {
      if (localStorage.getItem("cashtray_token")) {
        return <Redirect to="/" />
      } else {
        return <Login />
      }
    }} />

    <Route path="/register" render={() => {
      if (localStorage.getItem("cashtray_token")) {
        return <Redirect to="/" />
      } else {
        return <Register />
      }
    }} />
  </>
)