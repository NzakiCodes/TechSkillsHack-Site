import React from 'react'

function Header(props) {
    var img = Math.floor((Math.random()*6)+1);
    return (
        <div className={"paralax paralax"+img}>
           
        </div>
    )
}

export default Header
