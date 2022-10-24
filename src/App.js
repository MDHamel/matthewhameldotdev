import bootText from "./boot.json";
import './App.css';
import {useState } from "react";

function App() {
  return (
    <div className="App">
      <section className="bootScreen">
        <Boot/>
        <LogoStartup />
      </section>
      <main>
        <p>AHG</p>
        <Logo/>
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
  const [bootI, setBootI] = useState(1)
  const display = bootText.text.slice(0,bootI).map((item)=>{return <p>{item}</p>});


  const bootInc = () => {
    if(bootI >= bootText.text.length){
      clearInterval(inter);
    }
    setBootI(bootI+1);
  }
  
  const inter = setInterval(bootInc, 13);
  return(
    <section className='boot'>
        {display}
    </section>
  )
}

export default App;
