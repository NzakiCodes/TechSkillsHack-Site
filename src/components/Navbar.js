import React from 'react'
import '../styles/style.scss';
const Navbar = (props) => {
    
    return (
        <div className="w3-top">
            <div className="w3-bar primary-faded w3-border-white">
                <a href="/" className="w3-bar-item  w3-wide">
                    <img src={props.logo} alt="TSH"/>
                </a>
            </div>
            <div className=" tsh-nav-border"></div>
        </div>
    )
}

export default Navbar
