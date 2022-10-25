import bootText from "./boot.json";
import './App.css';
import "./Logo.css";
import {useState, useEffect} from "react";

function App() {
  return (
    <div className="App">

      <section className="bootScreen">
        <Boot/>
        <LogoStartup />
      </section>

      <main>
        <Logo />

        <Intro />

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

function Spacing(props){
  return(<div style={{height:props.size, width:"100%"}} />)
}

function Intro(){

  return(
    <section className="intro content">
      <div>
        <p > Hello, my name is</p>
        <h1 id="name">Matthew Hamel</h1>
        <p >and I am a developer who likes making </p>
        <h2  id="multitext">Things</h2>
        
      </div>
      <Spacing size="100px"/>
      
    </section>

  )
}
//<p style={{width:"700px", margin:"auto", textAlign:"left"}}>I am a software engineer who likes to develope projects like web apps, data processing applications, and games. I consider myself a full-stack developer who enjoys working on the front and back end of applications.</p>
      
export default App;
