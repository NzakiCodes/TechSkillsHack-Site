import React from 'react'
import '../styles/style.scss';
const Navbar = (props) => {
    
    return (
        <div>
            <div id="navb" className="w3-top">
                <div id="main-head" className=" w3-bar w3-padding-32 tsh-padding-left-16 ">
                    <a href="/" className="w3-bar-item w3-left w3-wide w3-center">
                        <img src={props.logo2} alt="TSH" id="logond" className="tsh-logond"/>
                    </a>
                    <div className="w3-right">
                        <a href="#home" className="w3-bar-item ">
                            <i className="material-icons w3-text-white fa-2x">home</i>
                        </a>
                    </div>
                    
                </div>
                
                <div className=" tsh-nav-border tsh-disapear"></div>
            </div>
        </div>
    )
}

export default Navbar
