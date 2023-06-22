import React from "react";
import { NavLink } from "react-router-dom";

//Context
import { useContext } from "react";
import UserContext from "../context/UserContext";

const Header = () => {
    const { authUser } = useContext(UserContext);
    return (
        <header>
            <div className="wrap header--flex">
                <h1 className="header--logo"><NavLink to="/">Courses</NavLink></h1>
                <nav>
                    {
                        authUser === null ?
                            <>
                                <ul className="header--signedout">
                                    <li><NavLink to="signup">Sign Up</NavLink></li>
                                    <li><NavLink to="signin">Sign In</NavLink></li>
                                </ul>
                            </>
                            :
                            <>
                                <ul className="header--signedout">
                                    <li><span>Welcome {authUser.firstName} {authUser.lastName}!</span></li>
                                    <li><NavLink to="signout">Sign Out</NavLink></li>
                                </ul>
                            </>

                    }

                </nav>
            </div>
        </header>
    );
}

export default Header;