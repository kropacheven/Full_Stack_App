import React from "react";
import { NavLink } from "react-router-dom";

const UserSignIn = () => {
    return (
        <main>
        <div class="form--centered">
            <h2>Sign In</h2>
            
            <form>
                <label for="emailAddress">Email Address</label>
                <input id="emailAddress" name="emailAddress" type="email" value=""></input>
                <label for="password">Password</label>
                <input id="password" name="password" type="password" value=""></input>
                <button class="button" type="submit">Sign In</button><button class="button button-secondary" onclick="event.preventDefault(); location.href='index.html';">Cancel</button>
            </form>
            <p>Don't have a user account? Click here to <NavLink to="/signup">sign up</NavLink>!</p>
            
        </div>
    </main>
    );
}

export default UserSignIn;