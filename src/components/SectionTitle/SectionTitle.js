import { GlitchText } from "../GlitchText/GlichText";
import { Spacing } from "../Misc/misc";
import "./style.css"


export default function SectionTitle(props) {
    return (
        <div>
            <aside className="titleSection">
                <Bar />
                <GlitchText size="36px" nostack={true} center={true}>{props.children}</GlitchText>
                <Bar />
            </aside>
            <Spacing size="75px" />
        </div>

    )
}

function Bar() {
    return (
        <figure className="bar" />
    )
}