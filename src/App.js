import bootText from "./boot.json";
import './App.css';
import "./Logo.css";
import "./components/NavBar/nav.css";

import {useState, useEffect} from "react";

import MultiText from "./components/MultiText/MultiText";
import { GlitchHover, GlitchText, GlitchTitle } from "./components/GlitchText/GlichText";

function App() {
  return (
    <div className="App">

      <section className="bootScreen">
        <Boot/>
        <LogoStartup />
      </section> 
      <Navbar />
      <main>
        <Intro />
        <Spacing size="20vh" />
        <AboutMe />
      </main>
      
    </div>
  );
}

function LogoStartup(){
  return(
    <section className='middle'>
      <img className='logo magenta' src="/logo.png" />
      <img className='logo cyan' src="/logo.png" />
      <img className='logo white' src="/logo.png" />
    </section>
  );
}

function Logo(){
  return(
    <div className="logoBox">
      <img className='logoMini magenta' src="/logo.png"/>
      <img className='logoMini cyan' src="/logo.png" />
      <img className='logoMini white' src="/logo.png" />
    </div>
  )
}

function Boot(){
  const [inc, setInc] = useState(1);
  const display = bootText.text.slice(0, inc).map((item)=>{return <p >{item}</p>});

  function booting (i) {
    console.log(i)
    if(i <= bootText.text.length){
      setInc(i)
      setTimeout(()=>{booting(i+1)}, 13);
    }   
  };

  useEffect(()=>{
    setTimeout(()=>{booting(inc)}, 13);
    return () => {};
  }, [])
  
  return(
    <section className='boot'>
        {display}
    </section>
  )
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

function Spacing(props){
  return(<div style={{height:props.size, width:"100%"}} />)
}

function Navbar(){
  return(
    <nav style={{"--delay":"9.75s"}}>
      <Logo />
      <ul>
        <GlitchHover><li>Intro</li></GlitchHover>
        <li><GlitchHover>About Me</GlitchHover></li>
        <li><GlitchHover>Experience</GlitchHover></li>
        <li><GlitchHover>Made by Me</GlitchHover></li>
        <li><GlitchHover>Reach Out</GlitchHover></li>
      </ul>
      
    </nav>
  )
}

function Intro(){

  return(

    <section className="intro content">
      <div className="left" style={{"--delay":"5.5s"}}>
        <h3>Hello there, my name is </h3>
        <GlitchText size="100px" delay="6.25s">Matthew Hamel</GlitchText>
        <GlitchText size="24px" delay="7.25s" center = {true} animationOff={true}>Tech Enthusiast and Developer</GlitchText>
      </div>

      <div className="right" style={{"--delay":"8.25s"}}>
        <Spacing size="50vh" />
        <h2>and I am a developer who likes making </h2>
        <MultiText size="72px" animOff={false} delay="9.25s">Web Apps, Automation Scripts, Android Apps</MultiText>
      </div> 
    </section>

  )
}



function AboutMe(){
  return(
    <section className="aboutMe">
      <GlitchText size="36px">About Me</GlitchText>
      <p>adsfasdfdsafasdfads</p>
    </section>
  )
}
      
export default App;
