import "./misc.css";

export function Spacing(props) {
    return (<div style={{ height: props.size, width: "100%" }} />)
}

export function pubUrl(path){
    return process.env.PUBLIC_URL + path;
}