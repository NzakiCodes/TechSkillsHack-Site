import React from 'react'
import Navbar from './components/Navbar';
// import * as Image from './images';
import Logo from './images/navlogo2.png'
import Header from './components/Header';

function App() {
    return (
        <div>
            <Navbar logo={Logo}/>
            <Header/>
        </div>
    )
}

export default App
