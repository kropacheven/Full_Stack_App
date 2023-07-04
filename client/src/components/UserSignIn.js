import React from "react";
import { useContext, useRef, useState } from 'react';
import { NavLink } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";

//Context
import UserContext from "../context/UserContext";

const UserSignIn = () => {
    const navigate = useNavigate();
    const location = useLocation();
    //console.log(location);
    const { actions } = useContext(UserContext);
    // State
    const email = useRef(null);
    const password = useRef(null);
    const [errors, setErrors] = useState([]);

    //Submit event handler function:
    const handleSubmit = async (e) => {
        e.preventDefault();
        let from = '/';
        if (location.state) {
            from=location.state.from;
        }
        //User credentials for auth:
        const credentials = {
            emailAddress: email.current.value,
            password: password.current.value
        }

        try {
            const user = await actions.signIn(credentials);
            if (user) {
                navigate(from);
            } else {
                setErrors(["Sign-in was unsuccessful."]);
            }
            //TODO: Get User from user context
             // Success (user !== null) => navigate to authenticated route
             // Failure (user === null) => update error state
        } catch (error) {
            console.log(error);
            navigate("/error");
        }
    };

    // Cancel button event handlerer:
    const handleCancel = (e) => {
        e.preventDefault();
        navigate("/");
    };


    return (
        <main>
            <div className="form--centered">
                <h2>Sign In</h2>
                {errors.length ? (
                    <div>
                        <h2 className="validation--errors--label">Validation errors</h2>
                        <div className="validation-errors">
                            <ul>
                                {errors.map((error, i) => <li key={i}>{error}</li>)}
                            </ul>
                        </div>
                    </div>
                ) : null}
                <form>
                    <label htmlFor="emailAddress">Email Address</label>
                    <input
                        id="emailAddress"
                        name="emailAddress"
                        type="email"
                        ref={email}
                    ></input>
                    <label htmlFor="password">Password</label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        ref={password}
                    ></input>
                    <button className="button" type="submit" onClick={handleSubmit}>Sign In</button><button className="button button-secondary" onClick={handleCancel}>Cancel</button>
                </form>
                <p>Don't have a user account? Click here to <NavLink to="/signup">sign up</NavLink>!</p>

            </div>
        </main>
    );
}

export default UserSignIn;