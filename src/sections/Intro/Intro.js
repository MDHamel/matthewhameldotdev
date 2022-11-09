import { GlitchText } from "../../components/GlitchText/GlichText";
import MultiText from "../../components/MultiText/MultiText";
import "./style.css";

export default function Intro() {

    return (

        <section className="intro content">
            <div className="left" style={{ "--delay": "5.5s" }}>
                <h3>Hello there, my name is </h3>
                <GlitchText size="100px" delay="6.25s">Matthew Hamel</GlitchText>
                <GlitchText size="24px" delay="7.25s" center={true} animationOff={true}>Tech Enthusiast and Developer</GlitchText>
            </div>

            <div className="right" style={{ "--delay": "8.25s" }}>
                <Spacing size="50vh" />
                <h2>and I am a developer who likes making </h2>
                <MultiText size="72px" animOff={false} delay="9.25s">Web Apps, Automation Scripts, Android Apps</MultiText>
            </div>
        </section>

    )
}

function Spacing(props) {
    return (<div style={{ height: props.size, width: "100%" }} />)
}