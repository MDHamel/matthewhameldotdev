import {useState} from "react";
import "./style.css"

export default function MadeByMe(){

    const testdata = {
        title:"Test Project",
        desc: "This is to test the capacity of my Made By Me section, which is in turn made by me! Filling out the text so that I can properly test longer descriptions, probably using a smaller, scrllable window at the bottom, below the screen shot :) again, This is to test the capacity of my Made By Me section, which is in turn made by me! Filling out the text so that I can properly test longer descriptions, probably using a smaller, scrllable window at the bottom, below the screen shot :) AGAIN This is to test the capacity of my Made By Me section, which is in turn made by me! Filling out the text so that I can properly test longer descriptions, probably using a smaller, scrllable window at the bottom, below the screen shot :)",
        link: "#",
        png: "/test.png",
        gif: "/test.gif"
    }

    return(
        <section className="MadeByMe">
            <div className="projectHolder">
                <Project data={testdata} />
                <Project data={testdata} />
                <Project data={testdata} />
            </div>
            <aside className="gitBox"><span id="githubButton">Find other projects on my GitHub</span></aside>
        </section>
        
    )
}

function Project(props){
    const [src, setSrc] = useState(props.data.png);

    return(
        <div className="project" onMouseEnter={()=>{setSrc(props.data.gif)}} onMouseLeave={()=>{setSrc(props.data.png)}}>
            <h1>{props.data.title}</h1>
            <img src={src} />
            <aside><p>{props.data.desc}</p></aside>
        </div>
    )

}