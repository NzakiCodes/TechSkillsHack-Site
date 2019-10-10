import React from 'react'

function ImageCard(props) {
    return (
        <div>
            <div className={"w3-card-4 w3-col m6 l3 w3-round-xlarge"+props.Styles}>
                <img src={props.DisplayImageSrc} alt={props.ImageAlt} style={{width:props.DisplayImageWidth}}/>
                <div classname="w3-container">
                    <h3>{props.headingText}</h3>
                    <p>{props.cardText}</p>
                </div>
            </div>
        </div>
    )
}

export default ImageCard