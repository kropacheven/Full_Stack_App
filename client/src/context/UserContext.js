import { createContext, useState } from "react";

//Creating new context
const UserContext = createContext(null);

//Creating context provider:
export const UserProvider = (props) => {

    //const [authUser, setAuthUser] = useState(null);

    // Sign-in function 
    const signIn = async () => {
        
    }

    // Sign-out function:
    const signOut = () => {
        //setAuthUser(null);
    }

    // JSX of the component as Provider
    return (
        <UserContext.Provider value={{}}>
            {props.children}
        </UserContext.Provider>
    );
}

// Exporting context
export default UserContext;