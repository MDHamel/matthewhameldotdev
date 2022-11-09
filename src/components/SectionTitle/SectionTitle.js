import {GlitchText} from "../GlitchText/GlichText";
import "./style.css"


export default function SectionTitle(props){
    return(
        <aside className="titleSection">
            <Bar />
            <GlitchText size="36px" nostack={true} center={true}>{props.children}</GlitchText>
            <Bar />
        </aside>
    )
}

function Bar(){
    return(
        <figure className="bar" />
    )
}