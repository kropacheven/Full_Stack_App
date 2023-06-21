import React from "react";
import { useContext, useRef, useState } from 'react';
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const UserSignIn = () => {
    let navigate = useNavigate();

    // State
    const email = useRef(null);
    const password = useRef(null);
    const [errors, setErrors] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const credentials = {
            emailAddress: email.current.value,
            password: password.current.value
        }

        const encodedCredentials = btoa(`${credentials.emailAddress}:${credentials.password}`);

        const fetchOptions = {
            method: "GET",
            headers: {
                Authorization: `Basic ${encodedCredentials}`
            }
        };

        try {
            const response = await fetch("http://localhost:5000/api/users", fetchOptions);
            //console.log(response);
            if (response.status === 200) {
                const user = await response.json();
                console.log(`SUCCESS! ${user.firstName} is successfully signedin.`);
                navigate("/");
            } else if (response.status === 401) {
                setErrors(["Sign-in was unsuccessful"]);
            } else {
                throw new Error();
            }
        } catch (error) {
            console.log(error);
            navigate("/error");
        }
    };

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