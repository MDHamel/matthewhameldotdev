import { GlitchHover } from "../GlitchText/GlichText";
import "./nav.css";


export default function Navbar(){
    return(
      <nav style={{"--delay":"9.75s"}}>
        <Logo />
        <ul>
          <li><GlitchHover>Intro</GlitchHover></li>
          <li><GlitchHover>About Me</GlitchHover></li>
          <li><GlitchHover>Experience</GlitchHover></li>
          <li><GlitchHover>Made by Me</GlitchHover></li>
          <li><GlitchHover>Reach Out</GlitchHover></li>
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