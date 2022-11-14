import { GlitchHover } from "../GlitchText/GlichText";
import "./nav.css";


export default function Navbar(){

  const navItems = ["Intro", "About Me", "Experience", "Made By Me", "Reach Out"]
  const scrollTo = (section) =>{
    const element = document.getElementsByClassName(section.replace(/ /g, ''));
    console.log(element[0].offsetTop - 60);
    window.scrollTo({
      top: element[0].offsetTop - 60,
      behavior: 'smooth'
    });
  }

  

  return(
    <nav style={{"--delay":"9.75s"}}>
      <Logo />
      <ul>
        {navItems.map((item, index)=>{return <li onClick={()=>{scrollTo(item)}} key={index}><GlitchHover>{item}</GlitchHover></li>})}
      </ul>
      
    </nav>
  )
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