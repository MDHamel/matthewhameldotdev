import { useState } from "react";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import "./style.css"

export default function Experience(){

    const content = [
        {
            title:"Freelance",
            body: 
            <div>
                <p></p>
            </div>
            
        },
        {
            title:"theCoderSchool",
            body: 
            <div>
                <p>At theCoderSchool, I was able to learn new languages and technologies so that I could then educate my students. After working under their employment for 4+ years, 
                I cultivated a wealth of knowledge through working on a variety of projects. These projects included technologies such as:</p>
                <ul>
                    <li>Android App Development (Java)</li>
                    <li>Unity Game Development (C#)</li>
                    <li>Web Development (HTML, CSS, JavaScript, React)</li>
                    <li>Python (Panda, NumPy, BeautifulSoup, Tkinter)</li>
                    <li>Java</li>
                    <li>C/C++</li>
                </ul>
            </div>
        },
        {
            title:"CSU East Bay",
            body: 
            <div>

            </div> 
        }
    ]

    const [i, setI] = useState(0);

    const list = content.map((item, index) =>
    {
        return(
            <li id={index==i?"selected":""} onClick={()=>{setI(index)}} key={index}>{item.title}</li>
        )
    });

    return(
        <section className="Experience content">
            <SectionTitle>Experience</SectionTitle>
            <div className="flexbox">
                <ul className="menu">
                    {list}
                </ul>
                <aside>{content[i].body}</aside>
            </div>
        </section>
    )
}