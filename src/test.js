import { GlitchHover, GlitchText } from "./components/GlitchText/GlichText";
import MultiText from "./components/MultiText/MultiText";

import "./test.css";
import MadeByMe from "./components/sections/MadeByMe/MadeByMe";


 export default function Test(){

    return(
        <div className="test">
            <ReachOut />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
        </div>
    )
}


function ReachOut(){
    //---------------------------------------------------------------------------------UPDATE EMAIL----------------------------------------------------------------------------------------------------------------------------
    const openResume = () => {  window.open('/test.pdf');   };
    const email = () =>{    document.location.href= 'mailto:test@example.com'; };

    return(
        <section className="ReachOut">
            <div>
                <GlitchText size="42px" nostack={true} center={true}>Contact Me</GlitchText>
            </div>
            <p>I am currently looking for new opportunities.<br />Feel free to drop me an email with any questions, and I will get back to you as soon as possible.<br />Thank you for your time!</p>
            <aside className="buttonBox">
                <span className="button" onClick={email}>Send an Email</span>
                <span className="button" onClick={openResume}>View Resume</span>
            </aside>
        </section>
    )
}

