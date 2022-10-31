import bootText from "./boot.json";
import './App.css';
import "./Logo.css";
import "./nav.css";

import {useState, useEffect} from "react";


function App() {
  return (
    <div className="App">

      {/* <section className="bootScreen">
        <Boot/>
        <LogoStartup />
      </section> */}
      <Navbar />
      <main>
        <Intro />
        <AboutMe />
      </main>
      
    </div>
  );
}

function LogoStartup(){
  return(
    <section className='center'>
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
    <nav>
      <Logo />
      <ul>
        <li>Intro</li>
        <li>About Me</li>
        <li>Experience</li>
        <li>Made by Me</li>
        <li>Reach Out</li>
      </ul>
      
    </nav>
  )
}

function Intro(){

  return(
    <section className="intro content">
        <div className="left">
        <h2>Hello there, my name is </h2>
        <Spacing size="20px" />
        <h1 id="name">Matthew</h1>
        <h1 id="name">Hamel</h1>
        <h3 id="dev">Tech Enthusiast and Developer</h3>
      </div>
      <div className="right">
        <h2>and I am a developer who likes making </h2>
        <MultiText>Web Apps, Automation Scripts, Android Apps</MultiText>
      </div> 
    </section>

  )
}

function MultiText(props){
  const items = props.children.split(",");
  const [anim, setAnim] = useState("wait");
  const [i, setI] = useState(0);

  const animHandler = () =>{
    console.log(i)
    if(anim === "goingMid"){
      setAnim("goingTop");
    }else{
      setI(prev=>prev+1 >= items.length ? 0 : prev+1);
      setAnim("goingMid");
      
    }
    
  };

  return(
    <div id="multitextBox">
      <h1 id="multitext" className={anim} onAnimationEnd={animHandler}>{items[i]}</h1>
    </div>
    
  )
}

function AboutMe(){
  return(
    <section className="aboutMe">
      <h1>About Me</h1>
      <p>adsfasdfdsafasdfads</p>
    </section>
  )
}
      
export default App;
