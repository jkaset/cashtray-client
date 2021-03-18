import React, { useRef } from "react"
import { Link, useHistory } from "react-router-dom"
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import "./login.css"


export const Register = (props) => {
    const firstName = useRef()
    const lastName = useRef()
    const email = useRef()

    const password = useRef()
    const verifyPassword = useRef()
    const passwordDialog = useRef()
    const history = useHistory()

    const quit_date = useRef()
    const cigs_per_day = useRef()
    const cigs_per_pack = useRef()
    const price_per_pack = useRef()
    const start_smoking_year = useRef()

    const handleRegister = (e) => {
        e.preventDefault()

        if (password.current.value === verifyPassword.current.value) {
            const newUser = {
                "username": email.current.value,
                "first_name": firstName.current.value,
                "last_name": lastName.current.value,
                "email": email.current.value,
                "password": password.current.value,

                "quit_date": quit_date.current.value,
                "cigs_per_day": cigs_per_day.current.value,
                "cigs_per_pack": cigs_per_pack.current.value,
                "price_per_pack": price_per_pack.current.value,
                "start_smoking_year": start_smoking_year.current.value
            }

            return fetch("http://127.0.0.1:8000/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify(newUser)
            })
                .then(res => res.json())
                .then(res => {
                    if ("token" in res) {
                        localStorage.setItem("cashtray_token", res.token)
                        history.push("/")
                    }
                })
        } else {
            passwordDialog.current.showModal()
        }
    }

    return (
        <>
            <Container>

              


            <h2 class="display-4 walletHeader">Welcome Nonsmoker</h2>
                
                    <h4>Let's get a few details</h4>

                    <dialog className="dialog dialog--password" ref={passwordDialog}>
                        <div>Passwords do not match</div>
                        <Button className="button--close" onClick={e => passwordDialog.current.close()}>Close</Button>
                    </dialog>

                    <form className="form--login" onSubmit={handleRegister}>
                        
                        <fieldset>
                            <label htmlFor="firstName"> </label>
                            <input ref={firstName} type="text" name="firstName" className="form-control" placeholder="First name" required autoFocus />
                        </fieldset>
                        <fieldset>
                            <label htmlFor="lastName">  </label>
                            <input ref={lastName} type="text" name="lastName" className="form-control" placeholder="Last name" required />
                        </fieldset>
                        <fieldset>
                            <label htmlFor="inputEmail"></label>
                            <input ref={email} type="email" name="email" className="form-control" placeholder="Email address" required />
                        </fieldset>
                        <fieldset>
                            <label htmlFor="inputPassword"> </label>
                            <input ref={password} type="password" name="password" className="form-control" placeholder="Password" required />
                        </fieldset>
                        <fieldset>
                            <label htmlFor="verifyPassword"> </label>
                            <input ref={verifyPassword} type="password" name="verifyPassword" className="form-control" placeholder="Verify password" required />
                        </fieldset>

                        <fieldset>
                            <label></label>
                            <input ref={cigs_per_day} type="text" pattern="[0-9]*" name="cigs_per_day" required autoFocus className="form-control" placeholder="How many did/do you smoke per day" />
                        </fieldset>

                        <fieldset>
                            <label></label>
                            <input ref={cigs_per_pack} type="text" pattern="[0-9]*" name="cigs_per_pack" required autoFocus className="form-control" placeholder="How many smokes are in a pack" />
                        </fieldset>

                        <fieldset>
                            <label></label>
                            <input ref={price_per_pack} type="text" pattern="[0-9]*" name="price_per_pack" required autoFocus
                                className="form-control" placeholder="Cost of one pack" />
                        </fieldset>

                        <fieldset>
                            <label>When did you start smoking?</label>
                            <input ref={start_smoking_year} type="date" name="start_smoking_year" required autoFocus
                                className="form-control" />
                        </fieldset>

                        <fieldset>
                            <label>Quit Date:</label>
                            <input ref={quit_date} type="datetime-local" name="quit_date" required autoFocus className="form-control" placeholder="Quit Date" />
                        </fieldset>


                        <fieldset style={{
                            textAlign: "center"
                        }}>
                            <Button className="btn btn-1 btn-sep icon-send" type="submit">Register</Button>
                        </fieldset>


                    </form>
                    <section className="link--register">
                        Already registered? <Link to="/login">Login</Link>
                    </section>
               
            </Container>
        </>
    )
}