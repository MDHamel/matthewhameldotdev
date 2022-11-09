
import './App.css';

import {useState, useEffect} from "react";

import MultiText from "./components/MultiText/MultiText";
import { GlitchHover, GlitchText, GlitchTitle } from "./components/GlitchText/GlichText";
import Navbar from "./components/NavBar/NavBar";
import StartUp from "./sections/Boot/Boot";
import Intro from './sections/Intro/Intro';

function App() {
  return (
    <div className="App">
            <StartUp />
            <main>
                <Navbar />
                <Intro />
            </main>
        </div>
  );
}



function LinkSideBar(){
  return(
    <div className="sidebar">
      <img className="icon" src="/logo/email.png" />
      <img className="icon" src="/logo/github.png" />
      <img className="icon" src="/logo/linkedin.png" />
      <hr/>
    </div>
  )
}




      
export default App;
