import React, {useState} from 'react'
import Navbar from './components/Navbar';
// import * as Image from './images';
// import Logo from './images/navlogo22.png';
import Logou from './images/navlogo2.png';
import BigLogo from './images/navlogo22.png';
import BigLogou from './images/navlogo2.png';
import Header from './components/Header';
import AboutSect from './components/AboutSect';
import About from './components/About';
import SkillsSect from './components/SkillsSect';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Contact from './components/Contact';
import Learn from './components/Learn';


function App() {
    const [logo, setlogo] = useState(BigLogou);
    const [navIconColor,setNIC] = useState('tsh-primary-text');
    document.title = "Tech Skills Hack";
    const scrollTo = (size)=>{
        const navlogo = document.getElementById('logond');
        const main_head = document.querySelector('#main-head');
        const tsh_nav_border = document.querySelector(".tsh-nav-border");
        const aSize =(Number(size) - 250 );
        // navb = document.querySelector("#navb")
        if (document.body.scrollTop > aSize || document.documentElement.scrollTop > aSize){
            navlogo.style.width = "70px";
            main_head.classList.add("w3-white");
            main_head.classList.add("w3-card-4");
            main_head.classList.replace("tsh-nav-ext","tsh-nav-main");
            main_head.classList.add("tsh-nav-main");
            tsh_nav_border.style.opacity = 1;
            tsh_nav_border.style.display = "block";
            setlogo(BigLogo);
            setNIC('w3-text-white');

        }else{
            navlogo.style.width = "90px";
            main_head.classList.remove("w3-white");
            main_head.classList.remove("w3-card-4");
            main_head.classList.replace("tsh-nav-main","tsh-nav-ext");
            tsh_nav_border.style.opacity = 0;
            setlogo(BigLogou);
            setNIC('tsh-primary-text');

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
            <Navbar logo={Logou} logo2={logo} navIconColor={navIconColor}/>
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
            <div className="w3-container w3-display-container w3-padding-48 paralax paralax5">
                <div className=" w3-display-middle w3-center">
                    <span className=" w3-text-white w3-jumbo w3-hide-small w3-bold w3-wide w3-animate-right">Learn A Skill</span>
                </div>
            </div> 
            <SkillsSect/>
            <div className="w3-container w3-padding-48 "></div>
            <div className="w3-container w3-padding-48 paralax paralax6"></div>
        </div>
        
    )
}


export default App
