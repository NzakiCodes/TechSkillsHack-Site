import React from 'react'

function Header() {
    // var img = Math.floor((Math.random()*6)+1);
    return (
        <div id="home" className="w3-display-container paralax paralax7">
           <div className="w3-display-middle w3-padding-64 w3-margin-left w3-hide-small">
               <h1 className="w3-text-white w3-center w3-animate-zoom header-txt1">
                   Tech Skills Hack
               </h1>
           </div>
           <div className="w3-display-bottommiddle w3-padding-64">
               <a href="#about">
                    <i className="fa fa-chevron-down fa-4x fa-chev w3-text-yellow"></i>
               </a>
           </div>
        </div>
    )
}

export default Header
