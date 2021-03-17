import React from "react"
import { Link, useHistory } from "react-router-dom"
import "./NavBar.css"
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';


export const NavBar = () => {
  const history = useHistory()

  return (
    <>
    <Nav>
    <Nav.Item>
    <Nav.Link href="/">Home</Nav.Link>
    </Nav.Item>

    <Nav.Item>
    <Nav.Link href="/wallet">Wallet</Nav.Link>
    </Nav.Item>

    <Nav.Item>
    <Nav.Link href="/community">Community</Nav.Link>
    </Nav.Item>


{/* 
      <li className="navbar__item">
        <Link className="navbar__link" to="/">Home</Link>
      </li>
      <li className="navbar__item">
        <Link className="navbar__link" to="/wallet">Wallet</Link>
      </li>
      <li className="navbar__item">
        <Link className="navbar__link" to="/community">Community</Link>
      </li> */}
    <Button>
      {
        (localStorage.getItem("cashtray_token") !== null) ?
          <li className="nav-item">
            <button className="nav-link fakeLink"
              onClick={() => {
                localStorage.removeItem("cashtray_token")
                history.push({ pathname: "/" })
              }}
            >Logout</button>
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
    </Button>
    {/* </ul> */}
    </Nav>
      </>
  )
}