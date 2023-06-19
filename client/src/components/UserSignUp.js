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

    //Event handlers:
    const handleSubmit = async (event) => {
        event.preventDefault();

        // Build up user object from Refs
        const user = {
            firstname: firstname.current.value,
            lastname: lastname.current.value,
            email: email.current.value,
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
            //console.log(response);
            if (response.status === 201) {
              console.log(`${user.username} is succesfully signed up and authenticated!`)
              //await actions.signIn(user);  ---- bug - must be SignUp - ? or may be not
              //navigate("/authenticated");
            } else if (response.status === 400) {
              const data = await response.json();
              //console.log(data);
              setErrors(data.errors);
            } else {
              throw new Error();
            }
          } catch (error) {
            //console.log(error);
            navigate('/error');
          }


    };

    const handleCancel = (e) => {
        e.preventDefault();
        navigate("/");
    };


    return (
        <main>
            <div class="form--centered">
                <h2>Sign Up</h2>

                <form onSubmit={handleSubmit}>
                    <label for="firstName">First Name</label>
                    <input
                        id="firstName"
                        name="firstName"
                        type="text"
                        ref={firstname}>
                    </input>
                    <label for="lastName">Last Name</label>
                    <input
                        id="lastName"
                        name="lastName"
                        type="text"
                        ref={lastname}>
                    </input>
                    <label for="emailAddress">Email Address</label>
                    <input
                        id="emailAddress"
                        name="emailAddress"
                        type="email"
                        ref={email}>
                    </input>
                    <label for="password">Password</label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        ref={password}>
                    </input>
                    <button class="button" type="submit" onClick={handleSubmit}>Sign Up</button>
                    <button class="button button-secondary" onClick={handleCancel}>Cancel</button>
                </form>
                <p>Already have a user account? Click here to <NavLink to="/signin">sign in</NavLink>!</p>
            </div>
        </main>
    );
}

export default UserSignUp;