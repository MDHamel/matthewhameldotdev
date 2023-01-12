import { useState } from "react";
import { Button } from "../../components/GlitchText/GlichText";
import { pubUrl } from "../../components/Misc/misc";

import SectionTitle from "../../components/SectionTitle/SectionTitle";
import "./style.css"

export default function MadeByMe() {
    const blogger = {
        title: "Blogger",
        desc: "A personal blog I created in the classic Twitter style. Using my own server backend, I can generate new posts that display from newest to oldest. ( Note: You may need to wait for the server to start up before viewing posts. )",
        img: pubUrl("/previews/blogger-preview.jpg"),
        gif: pubUrl("/previews/blogger-preview.gif"),
        GitHub: "https://GitHub.com/MDHamel/Blogger",
        link: "https://blog.matthewhamel.dev"
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
        title: "Image-In",
        desc: "Keeping track of your photos is difficult, so naturally uploading them to the cloud is ideal. I created a custom image gallery using my own server backend and google drive storage to make a viewable image gallery with titles, comments, and tags. ( Note: App might need a few seconds to wake up server before content loads. )",
        img: pubUrl("/previews/image-in-preview.jpg"),
        gif: pubUrl("/previews/image-in-preview.gif"),
        GitHub: "https://GitHub.com/MDHamel/Image-in",
        link: "https://imagein.matthewhamel.dev"
    }

    return (
        <section className="MadeByMe content">
            <SectionTitle>Made by Me</SectionTitle>
            <div className="projectHolder">
                <Project data={blogger} />
                <Project data={ramblerumble} />
                <Project data={gallery} />
            </div>
            <Button onClick={() => { window.open("https://GitHub.com/MDHamel", '_blank') }} width="600px">Find other projects on my GitHub</Button>
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
            <aside>
                <div className="center">
                    <span className="glitchHover" style={{ fontSize: "20px" }} onClick={() => { openLink(props.data.GitHub) }} >GitHub Code</span>
                    <span className="glitchHover" style={{ fontSize: "20px" }} onClick={() => { openLink(props.data.link) }} >Link to Project</span>
                </div>
                <p>{props.data.desc}</p>


            </aside>
        </div>
    )

}