import { Button, GlitchText } from "../../components/GlitchText/GlichText";
import "./style.css"

export default function ReachOut(){
    //---------------------------------------------------------------------------------UPDATE EMAIL----------------------------------------------------------------------------------------------------------------------------
    const openResume = () => {  window.open('/Hamel-Resume-Jan-2023.pdf');   };
    const email = () =>{    document.location.href= 'mailto:matt@matthewhamel.dev'; };

    return(
        <section className="ReachOut content">
            <div>
                <GlitchText size="42px" nostack={true} center={true}>Contact Me</GlitchText>
            </div>
            <p>I am currently looking for new opportunities.<br />Feel free to drop me an email with any questions, and I will get back to you as soon as possible.<br />Thank you for your time!</p>
            <aside className="buttonBox">
                <Button onClick={email}>Send an Email</Button>
                <Button onClick={openResume}>View Resume</Button>
            </aside>
        </section>
    )
}
