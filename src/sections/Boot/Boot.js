import "./Logo.css"
import {useState, useEffect} from "react";
import bootText from "./boot.json";

function Boot() {
    const [inc, setInc] = useState(1);
    const display = bootText.text.slice(0, inc).map((item) => { return <p >{item}</p> });

    function booting(i) {
        console.log(i)
        if (i <= bootText.text.length) {
            setInc(i)
            setTimeout(() => { booting(i + 1) }, 13);
        }
    };

    useEffect(() => {
        setTimeout(() => { booting(inc) }, 13);
        return () => { };
    }, [])

    return (
        <section className='boot'>
            {display}
        </section>
    )
}

function LogoStartup() {
    return (
        <section className='middle'>
            <img className='logo magenta' src="/logo.png" />
            <img className='logo cyan' src="/logo.png" />
            <img className='logo white' src="/logo.png" />
        </section>
    );
}


export default function StartUp() {
    return(
        <section className="bootScreen">
            <Boot/>
            <LogoStartup />
        </section> 
    )
}