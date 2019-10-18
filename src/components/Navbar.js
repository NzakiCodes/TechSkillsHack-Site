import React from 'react'
import '../styles/style.scss';
import { Link } from 'react-router-dom';
const Navbar = (props) => {
    
    return (
        <div>
            <div id="navb" className="w3-top">
                <div id="main-head" className=" w3-bar tsh-nav-ext">
                   <Link to="/">
                     <span className="w3-bar-item w3-left w3-wide w3-center">
                        <img src={props.logo2} alt="TSH" id="logond" className="tsh-logond "/>
                    </span>
                   </Link>
                   

                        <div className="w3-right">
                            <BtnLink class="w3-hide-small" to={"home"} icon={"home"}/>
                            <BtnLink class="w3-hide-small" to={"contact"} icon={"phone"}/> 
                            <BtnLink class="w3-hide-small" to={"learn"} icon={"book"}/>
                            <BtnLink to={"apps"} class={"w3-hide-large"} icon={"apps"}/>
                           
                            
                        </div>
                    </div>
                
                <div className="tsh-nav-border tsh-disapear"></div>
            </div>
        </div>
    )
}


function BtnLink(props) {
    return (
        <Link to={`/${props.to}`}>
            <span className={`w3-bar-item ${props.class}`}>
               <i className="material-icons w3-text-white fa-2x">{props.icon}</i>
            </span>
        </Link>
            

    )
}

export default Navbar
