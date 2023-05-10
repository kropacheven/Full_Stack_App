import React from "react";
import { NavLink } from "react-router-dom";

const UserSignUp = () => {
    return (
        <main>
        <div class="form--centered">
            <h2>Sign Up</h2>
            
            <form>
                <label for="firstName">First Name</label>
                <input id="firstName" name="firstName" type="text" value=""></input>
                <label for="lastName">Last Name</label>
                <input id="lastName" name="lastName" type="text" value=""></input>
                <label for="emailAddress">Email Address</label>
                <input id="emailAddress" name="emailAddress" type="email" value=""></input>
                <label for="password">Password</label>
                <input id="password" name="password" type="password" value=""></input>
                <button class="button" type="submit">Sign Up</button><button class="button button-secondary" onclick="event.preventDefault(); location.href='index.html';">Cancel</button>
            </form>
            <p>Already have a user account? Click here to <NavLink to="/signin">sign in</NavLink>!</p>
        </div>
    </main>
    );
}

export default UserSignUp;