import "./style.css"
import "../GlitchText/style.css"

import {useState, useEffect} from "react";


export default function MultiText(props){
    const items = props.children.split(",");
    const [anim, setAnim] = useState(props.animOff?"wait":"stackWait");
    const [i, setI] = useState(0);
    const size = props.size?props.size:"32px";
    const delay = props.delay?props.delay:"10s";
    const interval = props.interval?props.interval:"1s";

    const animHandler = (e) =>{
      if(e.animationName === "glitchIn"){
        setAnim("glitchOut");
      }else if(e.animationName === "glitchOut"){
        setI(i+1 >= items.length ? 0 : i+1);
        setAnim("glitchIn");
      }
      
    };
  
    return(
      <div className="multitextBox large" style={{"--stacks": 3, "--delay-time":delay}}>
        <span style={{"--index": 0}} className={anim} onAnimationEnd={animHandler}>{items[i]}</span>
        <span style={{"--index": 1}} className={anim} onAnimationEnd={animHandler}>{items[i]}</span>
        <span style={{"--index": 2}} className={anim} onAnimationEnd={animHandler}>{items[i]}</span>
      </div>
      
    )
  }


  