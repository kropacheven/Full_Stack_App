import React from "react";
import { useContext, useRef, useState } from 'react';
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const UserSignUp = () => {
    //Navigation state
    let navigate = useNavigate();

    //State
    const firstname = useRef(null);
    const lastname = useRef(null);
    const email = useRef(null);
    const password = useRef(null);
    const [errors, setErrors] = useState([]);

    //Submit event handler function:
    const handleSubmit = async (event) => {
        event.preventDefault();

        // Build up user object from Refs above
        const user = {
            firstName: firstname.current.value,
            lastName: lastname.current.value,
            emailAddress: email.current.value,
            password: password.current.value
        }

        // Configure fetch options:
        const fetchOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },
            body: JSON.stringify(user)
        }


        try {
            const response = await fetch("http://localhost:5000/api/users", fetchOptions);
            //console.log(fetchOptions);
            //console.log(response);
            if (response.status === 201) {
                console.log(`${user.firstName} is successfully signed up and authenticated!`);
            } else if (response.status === 400) {
                const data = await response.json();
                //console.log(data);
                setErrors(data.errors);
            } else {
                throw new Error();
            }
        } catch (error) {
            console.log(error);
            navigate("/error");
        }

    };

    //Cancel event handler function:
    const handleCancel = (e) => {
        e.preventDefault();
        navigate("/");
    };

    //JSX
    return (
        <main>
            <div className="form--centered">
                <h2>Sign Up</h2>
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
                <form onSubmit={handleSubmit}>
                    <label htmlFor="firstName">First Name</label>
                    <input
                        id="firstName"
                        name="firstName"
                        type="text"
                        ref={firstname}>
                    </input>
                    <label htmlFor="lastName">Last Name</label>
                    <input
                        id="lastName"
                        name="lastName"
                        type="text"
                        ref={lastname}>
                    </input>
                    <label htmlFor="emailAddress">Email Address</label>
                    <input
                        id="emailAddress"
                        name="emailAddress"
                        type="email"
                        ref={email}>
                    </input>
                    <label htmlFor="password">Password</label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        ref={password}>
                    </input>
                    <button className="button" type="submit" onClick={handleSubmit}>Sign Up</button>
                    <button className="button button-secondary" onClick={handleCancel}>Cancel</button>
                </form>
                <p>Already have a user account? Click here to <NavLink to="/signin">sign in</NavLink>!</p>
            </div>
        </main>
    );
}

export default UserSignUp;