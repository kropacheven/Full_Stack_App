import { createContext, useState } from "react";

//Creating new context
const UserContext = createContext(null);

//Creating context provider:
export const UserProvider = (props) => {

    const [authUser, setAuthUser] = useState(null);

    // Sign-in function 
    const signIn = async (credentials) => {

        const encodedCredentials = btoa(`${credentials.username}:${credentials.password}`);

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
            setAuthUser(user);
            //Cookies.set("authenticatedUser", JSON.stringify(user), {expires: 1 });
            return user;
            //console.log(`SUCCESS! ${user.username} is successfully signed in.`);
        } else if (response.status === 401) {
            return null;
        } else {
            throw new Error();
        }
    }

    // Sign-out function:
    const signOut = () => {
        setAuthUser(null);
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