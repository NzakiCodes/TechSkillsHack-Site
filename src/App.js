import React from 'react'
import Navbar from './components/Navbar';
// import * as Image from './images';
import Logo from './images/navlogo2.png';
import BigLogo from './images/logo.png';
import Header from './components/Header';
import AboutSect from './components/AboutSect';


function App() {
    document.title = "Tech Skills Hack";
    const scrollTo = (size)=>{
        const navlogo = document.getElementById('logond');
        const main_head = document.querySelector('#main-head');
        const tsh_nav_border = document.querySelector(".tsh-nav-border");
        // navb = document.querySelector("#navb")
        if (document.body.scrollTop > (Number(size) - 100 ) || document.documentElement.scrollTop > size){
            navlogo.style.width = "100px";
            main_head.classList.add("tsh-primary");
            main_head.classList.add("w3-padding");
            main_head.classList.remove("w3-padding-32");
            tsh_nav_border.style.opacity = 1;
            tsh_nav_border.style.display = "block";

        }else{
            main_head.classList.remove("tsh-primary");
            main_head.classList.add("w3-padding-32");
            navlogo.style.width = "200px";
            tsh_nav_border.style.opacity = 0;
        }
        if (document.body.scrollTop > size || document.documentElement.scrollTop > size) {
            document.getElementById('aboutsectch').style.display="block";
        } else {
            document.getElementById('aboutsectch').style.display="none";
            
        }
    }
    window.addEventListener('scroll',()=>{
        console.log('Scrolling');
    });
    window.onscroll = ()=>{scrollTo(300)};
    

    return (
        <div>
            <Navbar logo={Logo} logo2={BigLogo}/>
            <Header/>
            <AboutSect/>
        </div>
    )
}

export default App
