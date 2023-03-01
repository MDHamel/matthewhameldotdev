import { GlitchHover } from "../GlitchText/GlichText";
import { pubUrl } from "../Misc/misc";
import "./nav.css";


export default function Navbar(){

  const navItems = ["Intro", "About Me", "Experience", "Made By Me", "Reach Out"]
  const scrollTo = (section) =>{
    const element = document.getElementsByClassName(section.replace(/ /g, ''));
    console.log(section, element[0].offsetTop);
    console.log(element)
    window.scrollTo({
      top: element[0].offsetTop - (75 * (1+(1/element[0].offsetHeight))),
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
    console.log(process.env.PUBLIC_URL)
    return(
      <div className="logoBox" onClick={()=>{window.location.reload()}}>
        <img className='logoMini magenta' src={pubUrl("/logo.png")} />
        <img className='logoMini cyan' src={pubUrl("/logo.png")} />
        <img className='logoMini white' src={pubUrl("/logo.png")} />
      </div>
    )
  }