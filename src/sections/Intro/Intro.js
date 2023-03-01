import { GlitchText } from "../../components/GlitchText/GlichText";
import { Spacing } from "../../components/Misc/misc";
import MultiText from "../../components/MultiText/MultiText";
import "./style.css";

export default function Intro() {

    return (

        <section className="Intro content">
            <div className="left" style={{ "--delay": "5.5s" }}>
                <h3>Hello there, my name is </h3>
                <GlitchText size="xlarge" delay="6.25s">Matthew Hamel</GlitchText>
                <GlitchText size="small" delay="7.25s" center={false} animationOff={true}>Developer and Tech Enthusiast</GlitchText>
            </div>

            <div className="right" style={{ "--delay": "8.25s" }}>
                <h2>and I am a developer who likes making </h2>
                <MultiText size="72px" animOff={false} delay="9.25s">Web Apps, Automation Scripts, Android Apps, User Interfaces, Websites, Unity Games</MultiText>
            </div>
        </section>

    )
}

