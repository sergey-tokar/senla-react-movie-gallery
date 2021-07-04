import React from 'react';
import homeIcon from '../images/home-icon.png';

function Header() {
    return (
        <div className="content-wrapper header-wrapper">
            <div className="home-link-button basic-button">
                <a href="#" className="home-link">
                    <img className="home-link-icon" src={homeIcon} alt="Иконка домика"/>
                </a>
            </div>

            <div className="login-wrapper">
                <p className="login">Login name</p>
                <button className="sign-in-button basic-button">Sign IN / Sign UP</button>
            </div>
        </div>
);
}

export default Header;
