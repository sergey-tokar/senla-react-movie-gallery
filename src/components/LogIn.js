import React from "react";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {logOut} from "../store/actions/authorization-actions";

export default function LogIn() {
    const {currentUser, isAuthorized} = useSelector((state) => state.authorization);
    const dispatch = useDispatch();

    const handleLogOut = () => {
        dispatch(logOut());
    }

    if (isAuthorized) {
        return (
            <div className="login-wrapper">
                 <p className="login">{currentUser.login}</p>
                <button onClick={handleLogOut} className="sign-in-button basic-button">LogOUT</button>
            </div>
        );
    } else {
        return (
            <div className="login-wrapper">
                <Link to={"/login"} className="sign-in-button basic-button">LogIN</Link>
            </div>
        );
    }


}
