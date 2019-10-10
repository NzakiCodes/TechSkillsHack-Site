import React from 'react'
import Navbar from './components/Navbar';
// import * as Image from './images';
import Logo from './images/navlogo2.png';
import BigLogo from './images/logo.png';
import Header from './components/Header';
import AboutSect from './components/AboutSect';
import About from './components/About';
import SkillsSect from './components/SkillsSect';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Contact from './components/Contact';
import Learn from './components/Learn';
function App() {
    document.title = "Tech Skills Hack";
    const scrollTo = (size)=>{
        const navlogo = document.getElementById('logond');
        const main_head = document.querySelector('#main-head');
        const tsh_nav_border = document.querySelector(".tsh-nav-border");
        const aSize =(Number(size) - 250 );
        // navb = document.querySelector("#navb")
        if (document.body.scrollTop > aSize || document.documentElement.scrollTop > aSize){
            navlogo.style.width = "70px";
            main_head.classList.add("tsh-primary");
            main_head.classList.replace("tsh-nav-ext","tsh-nav-main");
            main_head.classList.add("tsh-nav-main");
            tsh_nav_border.style.opacity = 1;
            tsh_nav_border.style.display = "block";

        }else{
            navlogo.style.width = "90px";
            main_head.classList.remove("tsh-primary");
            main_head.classList.replace("tsh-nav-main","tsh-nav-ext");
            tsh_nav_border.style.opacity = 0;
        }
        // if (document.body.scrollTop > size || document.documentElement.scrollTop > size) {
        //     document.getElementById('aboutsectch').style.display="block";
        // } else {
        //     document.getElementById('aboutsectch').style.display="none";
            
        // }
    }
    window.addEventListener('scroll',()=>{
        console.log('Scrolling');
    });
    window.onscroll = ()=>{scrollTo(300)};

    return (
        <Router>
            <div>
            <Navbar logo={Logo} logo2={BigLogo}/>
            <Switch>
                <Route  path="/" exact component={Home}/>
                <Route  path="/home" exact component={Home}/>
                <Route  path="/about" exact component={About}/>
                <Route  path="/contact" exact component={Contact}/>
                <Route  path="/learn" exact component={Learn}/>
            </Switch>
            
            
            </div>
        </Router>
    )
}

const Home = () => {
    return (
        <div>
            <Header/>
            <AboutSect link />
            <div className="w3-container w3-padding-48 paralax paralax5"></div> <SkillsSect/><div className="w3-container w3-padding-48 "></div>
        <div className="w3-container w3-padding-48 paralax paralax6"></div>
        </div>
        
    )
}


export default App
