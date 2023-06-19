import React from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const UserSignIn = () => {
    let navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const handleCancel = (e) => {
        e.preventDefault();
        navigate("/");
    };


    return (
        <main>
        <div className="form--centered">
            <h2>Sign In</h2>
            
            <form>
                <label htmlFor="emailAddress">Email Address</label>
                <input id="emailAddress" name="emailAddress" type="email" value=""></input>
                <label htmlFor="password">Password</label>
                <input id="password" name="password" type="password" value=""></input>
                <button className="button" type="submit" onClick={handleSubmit}>Sign In</button><button className="button button-secondary" onClick={handleCancel}>Cancel</button>
            </form>
            <p>Don't have a user account? Click here to <NavLink to="/signup">sign up</NavLink>!</p>
            
        </div>
    </main>
    );
}

export default UserSignIn;