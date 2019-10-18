import React from 'react'

function Header() {
    // var img = Math.floor((Math.random()*6)+1);
    return (
        <div >
            <header id="home" className="w3-display-container paralax paralax6 w3-padding-32">
                <div className="w3-display-left w3-text-white" style={{padding:"48px"}}>
                            
                            <span className="w3-jumbo w3-hide-small w3-bold w3-wide w3-animate-right">Learn A Skill</span><br/>
                                <div className="w3-hide-small w3-animate-right">
                                <span className="w3-xxlarge w3-bold w3-animate-right">Stop Wasting Time Doing Nothing.</span>
                                    <h3 className="w3-wide w3-animate-right">Learn Something Profitable <br/>
                                        &lt;Tech Skills Hack&gt; <br/>We Are Here for you
                                    </h3>
                                </div>
                            <span className="w3-xxlarge w3-hide-large w3-hide-medium">Learn A Skill</span><br/>
                           <div className="w3-hide-large w3-hide-medium"> <span className="w3-large ">Stop Wasting Time Doing Nothing.</span>
                            <p className="w3-large">Learn Something Profitable <br/>
                                &lt;Tech Skills Hack&gt; <br/>We Are Here for you</p></div>
                            <p>
                            <a href="#about" className="w3-margin w3-round w3-xxlarge w3-button w3-white w3-padding-large w3-hover-opacity-off w3-large w3-margin-top ">
                                    Join Us
                                </a>
                                <a href="#about" className="w3-margin w3-round w3-xxlarge w3-button primary-color w3-yellow  w3-hover-opacity-off w3-padding-large w3-large w3-margin-top ">
                                    Learn More
                                </a>
                            </p>

                </div>
                <div className="w3-display-right w3-text-white" style={{padding:"48px"}}>
                            <br/>
                                <div className="w3-hide-small w3-animate-right w3-right-align">
                                <span className="w3-xxlarge w3-bold w3-animate-right">Code With Even Mobile Phones</span>
                                    <h3 className="w3-wide w3-animate-right">Learn to Code With Mobile Phones<br/>
                                       @ Tech Skills Hack<br/>
                                    </h3>
                                </div>
                           
                           

                </div>

                        <div className="w3-display-bottommiddle w3-padding-64">
                            <a href="#about">
                                    <i className="fa fa-chevron-down fa-4x fa-chev w3-text-yellow"></i>
                            </a>
                        </div>
            </header>
           
        </div>
    )
}

export default Header
