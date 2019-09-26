import React from 'react'
import Navbar from './components/Navbar';
// import * as Image from './images';
import Logo from './images/navlogo2.png'
import Header from './components/Header';
import AboutSect from './components/AboutSect';


function App() {
    const scrollTo = (size)=>{
        if (document.body.scrollTop > size || document.documentElement.scrollTop > size) {
            document.getElementById('aboutsectch').style.display="block";
        } else {
           
            
        }
    }
    window.addEventListener('scroll',()=>{
        console.log('Scrolling');
    });
    window.onscroll = ()=>{scrollTo(300)};
    

    return (
        <div>
            <Navbar logo={Logo}/>
            <Header/>
            <AboutSect/>
        </div>
    )
}

export default App
