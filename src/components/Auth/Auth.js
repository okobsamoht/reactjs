import React from 'react';
import './Auth.css';
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import SignOut from "./SignOut";
import ResetPass from "./ResetPass";
import {Route, Routes} from "react-router-dom";

const Auth = (props) => {
    return (
        <div className="Auth">
            <div>
                <Routes>
                    <Route path="/" element={<SignIn/>}/>
                    <Route path="/signin" element={<SignIn/>}/>
                    <Route path="/signup" element={<SignUp/>}/>
                    <Route path="/signout" element={<SignOut/>}/>
                    <Route path="/resetpass" element={<ResetPass/>}/>
                </Routes>
            </div>
        </div>
    );
};

export default Auth;