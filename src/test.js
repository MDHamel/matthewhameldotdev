import { Button, GlitchHover, GlitchText } from "./components/GlitchText/GlichText";
import MultiText from "./components/MultiText/MultiText";

import "./test.css";
import "./App.css";
import MadeByMe from "./sections/MadeByMe/MadeByMe";
import ReachOut from "./sections/ReachOut/ReachOut";
import AboutMe from "./sections/AboutMe/AboutMe";
import Navbar from "./components/NavBar/NavBar";
import Intro from "./sections/Intro/Intro";
import StartUp from "./sections/Boot/Boot";
import Experience from "./sections/Experience/Experience";



 export default function Test(){

    return(
        <div className="App">
        <main>
            <Navbar />
            <Intro />
            <AboutMe />
            <Experience />
            <MadeByMe />
            <ReachOut />
        </main>
    </div>
    )
}

/*
<div className="App">
    <StartUp />
    <main>
        <Navbar />
        <Intro />
    </main>
</div>

*/

