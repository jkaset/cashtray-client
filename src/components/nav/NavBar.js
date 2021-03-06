import React from "react"
import { Link, useHistory } from "react-router-dom"
import "./NavBar.css"
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';


export const NavBar = () => {
  const history = useHistory()

  return (
    <>
      <Container>
        <Nav class="nav">
          <Button variant="outline-primary" className="nav-link fakeLink"
            onClick={() => {
              history.push({ pathname: "/" })
            }}>Home</Button>

          <Button variant="outline-primary" className="nav-link fakeLink"
            onClick={() => {
              history.push({ pathname: "/wallet" })
            }}>Wallet</Button>

          <Button variant="outline-primary" className="nav-link fakeLink"
            onClick={() => {
              history.push({ pathname: "/community" })
            }}>Community</Button>

          <Button variant="outline-primary" className="nav-link fakeLink"
            onClick={() => {
              history.push({ pathname: "/health" })
            }}>Health</Button>


          {
            (localStorage.getItem("cashtray_token") !== null) ?
              <li className="nav-item">
                <Button variant="outline-primary" className="nav-link fakeLink"
                  onClick={() => {
                    localStorage.removeItem("cashtray_token")
                    history.push({ pathname: "/" })
                  }}
                >Logout</Button>
              </li> :
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">Login</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/register">Register</Link>
                </li>
              </>
          }

          {/* </ul> */}
        </Nav>
      </Container>
    </>
  )
}