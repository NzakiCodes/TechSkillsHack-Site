import React from 'react'

function IconCard(props) {
    var IT;
    switch (props.iconType) {
        case "brand":
        case "Brand":
            IT = "fab"
            break;
        case "solid":
        case "Solid":
                IT = "fas"
                break;
        case "regular":
        case "Regular":
                IT = "far"
            break;
        default:
            IT = "fa"
            break;
    }
    if(props.line===true){
        var HR = (<hr/>);
    }
    return (
        <div className="w3-hover-shadow ">
            <div className={"w3-padding-32 w3-round w3-container w3-hover-shadow "+props.Styles}>
            <i className={IT+" fa-10x w3-margin-bottom w3-center iconstxt fa-"+props.icon}></i>  
            {HR}
            <h2>{props.IconText}</h2>
            <p>{props.DetailText}</p>
               {props.children}
            </div>
        </div>
    )
}

export default IconCard