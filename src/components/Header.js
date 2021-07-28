import React from 'react';
import homeIcon from '../images/home-icon.png';
import {Link} from "react-router-dom";
import LogIn from "./LogIn";

export default function Header() {
    return (
        <div className="content-wrapper header-wrapper">

            <Link to="/" className="home-link">
                <div className="home-link-button basic-button">
                    <img className="home-link-icon" src={homeIcon} alt="Иконка домика"/>
                </div>
            </Link>

            <LogIn/>

        </div>
    );
}
