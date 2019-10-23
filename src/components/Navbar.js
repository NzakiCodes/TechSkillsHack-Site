import React from 'react'
import '../styles/style.scss';
import { Link } from 'react-router-dom';
const Navbar = (props) => {
    // console.log(props);
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
                            <BtnLink class="w3-hide-small" to={"home"} navIconColor={props.NavIconColor}  icon={"home"}/>
                            <BtnLink class="w3-hide-small" to={"contact"} navIconColor={props.NavIconColor}  icon={"phone"}/> 
                            <BtnLink class="w3-hide-small" to={"learn"} navIconColor={props.NavIconColor}  icon={"book"}/>
                            <BtnLink to={"apps"} class={"w3-hide-large"} navIconColor={props.NavIconColor} icon={"apps"}/>
                           
                            
                        </div>
                    </div>
                
                <div className="tsh-nav-border tsh-disapear"></div>
            </div>
        </div>
    )
}


function BtnLink(props) {
    console.log(props);
    return (
        <Link to={`/${props.to}`}>
            <span className={`w3-bar-item ${props.class}`}>
               <i className={`material-icons fa-2x ${props.NavIconColor}`}>{props.icon}</i>
            </span>
        </Link>
            

    )
}

export default Navbar
