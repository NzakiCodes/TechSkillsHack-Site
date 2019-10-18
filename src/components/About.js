import React from 'react'
import AboutSect from './AboutSect'

function About() {
    return (
       <div>
            <header id="home" className="w3-display-container about-paralax w3-padding-32">
                <div className="w3-center w3-text-white" style={{padding:48,marginTop:48}}>
                   <span className="w3-jumbo w3-hide-small  w3-bold w3-wide w3-animate-right">About Tech Skills Hack</span>
                   <span className="w3-xxlarge w3-padding-48 w3-margin-top w3-hide-large w3-hide-medium  w3-bold w3-wide w3-animate-right">About Tech Skills Hack</span>
                </div>
        </header>
        <span className="w3-center">
                <hr className="hr2"/>
           </span>
        <div className="w3-container  w3-padding-48 w3-center ">
            <h2 className="w3-container w3-bold w3-margin-top">What is Tech Skills Hack</h2>
            <p className="w3-large w3-container">
            Tech Skills Hack is a community dedicated to getting people equipped and ready with the right technical and digital skills <br/> for a world that's getting globally digitalized daily.
            </p>
           <span className="w3-center">
                <hr className="hr"/>
           </span>
        </div>
        <AboutSect/>
       </div>

    )
}

export default About
