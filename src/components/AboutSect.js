import React from 'react'
// import Card from './Card'
import IconCard from './IconCard';
import { Link } from 'react-router-dom';

function AboutSect(props) {
    var link;
    if (props.link === true) {
         link =  <Link to="/about">
         <span className=" w3-round w3-xxlarge w3-button primary-color w3-yellow w3-opacity w3-hover-opacity-off w3-padding-large w3-large w3-margin-top "> Know More <i className="fa fa-chevron-right"></i></span>
         </Link>;
    } else {
        link = <br/>
    }
    return (
        <div id="about">
            <div className=" tsh-aboutsect w3-container w3-padding-64">
            <h1 className="w3-center w3-animate-left">What We Strive To Do</h1>
            <p className="w3-large w3-center w3-animate-right"></p>
            <div className="w3-row-padding w3-center " id="aboutsectch" style={{marginTop: 64 +'px'}}>
            <div className="w3-col l1 tsh-ivc"> .</div>
                <IconCard 
                    line
                    Styles={"w3-col l3 w3-padding-left w3-card tsh-anim-up tsh-abs1"} 
                    iconType
                    icon={"book-open"} 
                    IconText={"Learn"} 
                    DetailText={"Forse sua cose esser e transitorie come ancora di e che, beati al per dare cosa come. Durare e potra."}
               />
                <div className="w3-col l1 tsh-ivc"> .</div>
                <IconCard
                    line            
                    Styles={"w3-col l3 w3-padding-left w3-card tsh-anim-up tsh-abs2"} 
                    iconType
                    icon={"share-alt"} 
                    IconText={"Share"} 
                    DetailText={"Forse sua cose esser e transitorie come ancora di e che, beati al per dare cosa come. Durare e potra."}
               />
                  <div className="w3-col l1 tsh-ivc"> .</div>
                <IconCard 
                    line
                    Styles={"w3-col l3 w3-padding-left w3-card tsh-anim-up tsh-abs3"} 
                    iconType
                    icon={"user-friends"} 
                    IconText={"Collabourate"} 
                    DetailText={"Forse sua cose esser e transitorie come ancora di e che, beati al per dare cosa come. Durare e potra."}
                />
                <div className="w3-padding-64" style={{marginTop:"148px!important"}}>
                     <p>
                        {link}
                     </p>
                </div>
               
                <div className="w3-padding-64 tsh-ivc">.</div>
                <div className="w3-padding-32 tsh-ivc">.</div>
                
            </div>
        </div>
        {/* <div className="w3-container w3-padding-48 paralax paralax5"></div>
        <div className="w3-container w3-padding-48 "></div>
        <div className="w3-container w3-padding-48 paralax paralax6"></div> */}
        </div>
    )
}

export default AboutSect
