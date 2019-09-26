import React from 'react'

function Header() {
    var img = Math.floor((Math.random()*6)+1);
    return (
        <div className={"w3-display-container paralax paralax"+img}>
           <div className="w3-display-topleft w3-padding-64 w3-margin-left">
               <h1 className="w3-text-white  w3-center w3-animate-bottom header-txt1">
                   Tech Skills Hack
               </h1>
           </div>
           <div className="w3-display-bottommiddle" id="classy-learn">
               {/* <img src="images/learn-2001940_1920.jpg" alt="botttm img"/> */}
           </div>
        </div>
    )
}

export default Header
