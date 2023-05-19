import { useState } from "react";
import { Button } from "../../components/GlitchText/GlichText";
import { pubUrl } from "../../components/Misc/misc";

import SectionTitle from "../../components/SectionTitle/SectionTitle";
import "./style.css"

export default function MadeByMe() {
    const blogger = {
        title: "Focus Flow",
        desc: "A timer inspired by the Pomodoro Technique, designed to enhance productivity. Set your work intervals for 25 minutes, followed by a refreshing 5-minute break. Every 4th break offers a longer duration, ranging from 15 to 30 minutes. Personalize your timer with a selection of soothing background color palettes. Tailor the length of your work and break times to suit your preferences. Boost your focus and efficiency with this versatile and customizable timer.",
        img: pubUrl("/previews/focus-flow.png"),
        gif: pubUrl("/previews/focus-flow.gif"),
        GitHub: "https://github.com/MDHamel/FocusTimer",
        link: "https://focus.matthewhamel.dev"
    }

    const ramblerumble = {
        title: "Ramble Rumble",
        desc: "Inspired by Wordle, I created a new letter tile game. Instead of being playable once a day, I decided to create two new modes: high score and timed trial. Timed trial is where you try to guess as many words and get as many points as possible within the time limit. High score has you play until you miss the word! Along with these new game modes, I also added more tile colors to help the player. Play now by clicking on this project!",
        img: pubUrl("/previews/ramble-rumble-preview.jpg"),
        gif: pubUrl("/previews/ramble-rumble-preview.gif"),
        GitHub: "https://GitHub.com/MDHamel/ramblerumblev2",
        link: "https://ramblerumble.matthewhamel.dev"
    }

    const gallery = {
        title: "Shadow Stream",
        desc: "A specialized audio-video app for seamless streaming with Genki's ShadowCast capture card in mind. Enjoy 1080p/720p resolution and choose between 30/60fps at 720p or 30fps at 1080p. Minimal video and audio lag for an immersive gaming experience. Made in C# with OpenCV for optimal performance and low resource consumption.",
        img: pubUrl("/previews/shadow-stream.png"),
        gif: pubUrl("/previews/shadow-stream.gif"),
        GitHub: "https://github.com/MDHamel/ShadowStream",
        link: "https://github.com/MDHamel/ShadowStream/releases/"
    }

    return (
        <section id="MadeByMe" className="MadeByMe content">
            <SectionTitle>Made by Me</SectionTitle>
            <div className="projectHolder">
                <Project data={blogger} />
                <Project data={ramblerumble} />
                <Project data={gallery} />
            </div>
            <Button onClick={() => { window.open("https://GitHub.com/MDHamel", '_blank') }} width="40vw">Find other projects on my GitHub</Button>
        </section>

    )
}

function Project(props) {
    const [src, setSrc] = useState(props.data.img);

    const openLink = (l) => { window.open(l); };

    return (
        <div className="project" onMouseEnter={() => { setSrc(props.data.gif) }} onMouseLeave={() => { setSrc(props.data.img) }}>
            <h1>{props.data.title}</h1>
            <img src={src} />
            <div className="center">
                <span className="glitchHover xsmall" onClick={() => { openLink(props.data.GitHub) }} >GitHub Code</span>
                <span className="glitchHover xsmall" onClick={() => { openLink(props.data.link) }} >Link to Project</span>
            </div>
            <aside>
                
                <p>{props.data.desc}</p>


            </aside>
        </div>
    )

}