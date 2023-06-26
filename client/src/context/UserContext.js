import { createContext, useState } from "react";
import Cookies from "js-cookie"; // cookie

//Creating new context
const UserContext = createContext(null);

//Creating context provider:
export const UserProvider = (props) => {
    const cookie = Cookies.get("authenticatedUser"); // cookie
    const [authUser, setAuthUser] = useState(cookie ? JSON.parse(cookie) : null); // cookie
    console.log(authUser);
    // Sign-in function 
    const signIn = async (credentials) => {

        const encodedCredentials = btoa(`${credentials.emailAddress}:${credentials.password}`);

        const fetchOptions = {
            method: "GET",
            headers: {
                Authorization: `Basic ${encodedCredentials}`
            }
        };

        const response = await fetch("http://localhost:5000/api/users", fetchOptions);
        //console.log(response);
        if (response.status === 200) {
            const user = await response.json();
            //console.log(`SUCCESS! ${user.firstName} is successfully signedin.`);
            setAuthUser(user);
            Cookies.set("authenticatedUser", JSON.stringify(user), {expires: 1}); // cookie
            return user;
        } else if (response.status === 401) {
            return null;
        } else {
            throw new Error();
        }
    }

    // Sign-out function:
    const signOut = () => {
        setAuthUser(null);
        Cookies.remove("authenticatedUser"); //
    }

    // JSX of the component as Provider
    return (
        <UserContext.Provider value={{
            authUser,
            actions: {
                signIn,
                signOut
            }
        }}>
            {props.children}
        </UserContext.Provider>
    );
}

// Exporting context
export default UserContext;