import React from 'react'
import '../styles/style.scss';
const Navbar = (props) => {
    
    return (
        <div className="w3-top">
            <div className="w3-bar w3-card primary-background">
                <a href="/" className="w3-bar-item w3-button w3-wide">
                    <img src={props.logo} alt="TSH"/>
                </a>
            </div>
        </div>
    )
}

export default Navbar
