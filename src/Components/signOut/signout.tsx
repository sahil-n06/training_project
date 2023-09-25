import React from "react";
import './signout.css'
import { useMsal } from "@azure/msal-react";

const SignOut = () =>{
    const { instance } = useMsal();

    const handleSignOut = ()=>{
        instance.logout();
    }
return(
    <img
    className="sign-out"
    src="./power.jpeg"
    title="sign out"
    onClick={handleSignOut}>
    </img>
)

};

export default SignOut;