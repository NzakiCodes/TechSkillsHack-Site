import React from 'react';


class SkillsSect extends React.Component {
   render(){
    // const images = [
    //     {
    //         id:1,
    //         src:"../images/bg1.jpg",
    //         title:"3D Modeling and Design"
    //     },
    //     {
    //         id:2,
    //         src:"../images/bg2.jpg",
    //         title:"Mobile Development"
    //     },
    //     {
    //         id:3,
    //         src:"../images/4.jpg",
    //         title:"Data Science"
    //     },
    //     {
    //         id:4,
    //         src:"../images/bg4.jpg",
    //         title:"Graphics Design"
    //     }
    // ];
    return (
        <div className="w3-container w3-center w3-light-gray" id="learn" style={{padding:"128px 16px"}}>
          {/* {if(this.props.header2===true){}}   */}
          <h1 className="w3-center tsh-primary-text">Skills To Learn</h1>
            <div className="w3-row-padding" style={{marginTop:"64px"}}>
                <Image src={require("../images/bg4.jpg")} alt={"Graphics Design"}/>
                <Image src={require("../images/5.jpg")} alt={"Mobile Development"} />
                <Image src={require("../images/bg1.jpg")} alt={"3D Modeling and Design"}/>
                <Image src={require("../images/4.jpg")} alt={"Data Science"}/>
            </div>
            <div className="w3-row-padding w3-section" style={{marginTop:"64px"}}>
                <Image src={require("../images/7.jpg")} alt={"Machine Learning"}/>
                <Image src={require("../images/6.png")} alt={"PC Repaire and Maintainance"} />
                <Image src={require("../images/bg1.jpg")} alt={"3D Modeling and Design"}/>
                <Image src={require("../images/4.jpg")} alt={"Data Science"}/>
            </div>
        </div>
    )
   }
   
}
class Image extends React.Component {
    render(){
            return (
                <div className="w3-col l3 m6  w3-margin-bottom">
                    <div className="w3-card w3-hover-shadow tsh-hi">
                    <img 
                                src={this.props.src} 
                                style={{width:"100%",maxHeight:"179px",minHeight:"179px",cursor: "pointer"}} 
                                className="" 
                                title={this.props.alt}
                                alt={this.props.alt} />
                        <div className="w3-container">
                            <h3 className="tsh-overflow">
                                {this.props.alt}
                            </h3>
                        </div>
                    </div>
                        
                        
                </div>
            )
    }
}
export default SkillsSect
// src={require('"' + props.image.src +'"')}