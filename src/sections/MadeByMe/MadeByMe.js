import {useState} from "react";
import { Button } from "../../components/GlitchText/GlichText";
import { pubUrl } from "../../components/Misc/misc";

import SectionTitle from "../../components/SectionTitle/SectionTitle";
import "./style.css"

export default function MadeByMe(){

    const testdata = {
        title:"Test Project",
        desc: " the bottom, below the screen shot :) again, This is to test the capacity of my Made By Me section, which is in turn made by me! Filling out the text so that I can properly test longer descriptions, probably using a smaller, scrllable window at the bottom, below the screen shot :) AGAIN This is to test the capacity of my Made By Me section, which is in turn made by me! Filling out the text so that I can properly test longer descriptions, probably using a smaller, scrllable window at the bottom, below the screen shot :)",
        link: "#",
        img: pubUrl("/previews/blogger-preview.jpg"),
        gif: pubUrl("/previews/blogger-preview.gif")
    }

    const blogger = {
        title:"Blogger",
        desc: "A personal blog I created in the classic Twitter style. Using my own server backend, I can generate new posts that display from newest to oldest. Note: You may need to wait for the server to start up before viewing posts.",
        link: "#",
        img: pubUrl("/previews/blogger-preview.jpg"),
        gif: pubUrl("/previews/blogger-preview.gif")
    }

    const ramblerumble = {
        title:"Ramble Rumble",
        desc: "Inspired by Wordle, I created a new letter tile game. Instead of being playable once a day, I decided to create two new modes: high score and timed trial. Timed trial is where you try to guess as many words and get as many points as possible within the time limit. High score has you play until you miss the word! Along with these new game modes, I also added more tile colors to help the player. Play now by clicking on this project!",
        link: "#",
        img: pubUrl("/previews/ramble-rumble-preview.jpg"),
        gif: pubUrl("/previews/ramble-rumble-preview.gif")
    }

    const gallery = {
        title:"Image-In",
        desc: "Keeping track of your photos is difficult, so naturally uploading them to the cloud is ideal. I created a custom image gallery using my own server backend and google drive storage to make a viewable image gallery with titles, comments, and tags.",
        link: "#",
        img: pubUrl("/previews/image-in-preview.jpg"),
        gif: pubUrl("/previews/image-in-preview.gif")
    }

    return(
        <section className="MadeByMe content">
            <SectionTitle>Made by Me</SectionTitle>
            <div className="projectHolder">
                <Project data={blogger} />
                <Project data={ramblerumble} />
                <Project data={gallery} />
            </div>
            <Button onClick={()=>{window.open("https://github.com/MDHamel", '_blank')}} width="600px">Find other projects on my GitHub</Button>
        </section>
        
    )
}

function Project(props){
    const [src, setSrc] = useState(props.data.img);

    return(
        <div className="project" onMouseEnter={()=>{setSrc(props.data.gif)}} onMouseLeave={()=>{setSrc(props.data.img)}}>
            <h1>{props.data.title}</h1>
            <img src={src} />
            <aside><p>{props.data.desc}</p></aside>
        </div>
    )

}