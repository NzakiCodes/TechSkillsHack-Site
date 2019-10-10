import React from 'react'

function Card(props) {
    return (
        <div>
            <div className={"w3-padding-16 w3-round w3-container w3-hover-shadow "+props.Styles}>
               {props.children}
            </div>
        </div>
    )
}

export default Card