import React from "react"
import { Route, Redirect } from "react-router-dom"
import { ApplicationViews } from "./ApplicationViews"
import { NavBar } from "./nav/NavBar"
import { Login } from "./auth/login"
import { Register } from "./auth/register"

export const Cashtray = (props) => (
  <>
    <h1>CASHtray</h1>
    {/* <Route render={() => {
      if (localStorage.getItem("cashtray_user_id")) {
        return <>
          <Route render={NavBar} />
          <Route render={props => <ApplicationViews {...props} />} />
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
    }} /> */}
  </>
)