import "./style.css";
import {useEffect, useState, useRef} from "react";

/*-----------------------------------------------

Two kinds of glitch text, 
one with an intro phase (GlitchTitle) and
another that is just constantlyglitching for 
headings and titles (GlitchText)

Both take two props: children for the text and 
size for the font size.

Glitch text also takes a delay to set the delay in
seconds.
-------------------------------------------------*/


export function GlitchText(props){
    const text = props.children;
    const size = props.size?props.size:"64px";

    const delay = props.delay?props.delay:"5s";

    const stack = props.nostack?"nostack":"stack";
    const display = props.center?stack + " center": stack;

    const anim = "glitchLine " + (props.animationOff? "off":"");
    const ref = useRef(null);

    const [width, setWidth] = useState(-1);

    useEffect(()=>{setWidth(ref.current.offsetWidth)})

    return(
        <div className={display} style={{"--stacks": 3, "--size":size, "--delay-time":delay,  "--width":width+"px"}}>
            <span ref ={ref} className={anim} style={{"--index": 0}}>{text}</span>
            <span className={anim} style={{"--index": 1}}>{text}</span>
            <span className={anim} style={{"--index": 2}}>{text}</span>
        </div>  
    )
}


// export function GlitchText(props){
//     const text = props.children;
//     const size = props.size?props.size:"32px";
//     const ref = useRef(null);
//     const [width, setWidth] = useState(-1);

//     useEffect(()=>{setWidth(ref.current.offsetWidth)})

//     return(
//         <div className="nostack" style={{"--stacks": 3, "--size":size, "--width":width+"px"}}>
//             <span  className="glitchLine" style={{"--index": 0}} >{text}</span>
//             <span className="glitchLine" style={{"--index": 1}}>{text}</span>
//             <span className="glitchLine" style={{"--index": 2}}>{text}</span>
//         </div>
//     )
// }

export function GlitchHover(props){
    const text = props.children;
    const size = props.size?props.size:"20px";
    return( 
        <h1 className="glitchHover" style={{"--size":size}}>{text}</h1>
    )
}
    
export function Button(props){
    const text = props.children;
    const width = props.width?props.width:"200px";
    return(
        <span className="button glitchHover" onClick={props.onClick} style={{"--width":width}}>{text}</span>
    )
}