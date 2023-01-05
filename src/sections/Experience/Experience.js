import { useState } from "react";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import "./style.css"

export default function Experience() {

    const content = [
        {
            title: "Freelance",
            body:
                <div>
                    <p>After graduating, I decided to take on freelance opportunities. Jobs vary from client to client, but my services usually include creating and developing web applications/websites, system applications, or consultations.</p>
                    <p>Web applications would consist of Javascript, React.js, and CSS. These projects would vary from simple, static websites to display a client's content to more complex applications used for data processing.</p>
                    <p>System applications are client specific but usually made in Python or C#, depending on the needs and scope of the project.</p>
                </div>

        },
        {
            title: "theCoderSchool",
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
            title: "CSU East Bay",
            body:
                <div>
                    <p>I was able to take a diverse assortment of classes at CSU East Bay. Here are a few notable courses:</p>
                    <ul>
                        <li>
                            <b>Software Engineering</b>
                            <p>This class went over the standard industry practices and had a semester-long group project where we slowly developed an Android app.</p>
                        </li>
                        <li>
                            <b>Intro to Networking</b>
                            <p>An introductory course that went over the different protocols and procedures of how the internet works and how computer systems interact. This course also included segments on the OSI layers, web packets, TCP versus UDP, and web security basics.</p>
                        </li>
                        <li>
                            <b>Web Development</b>
                            <p>This course reviewed the basics of HTML, CSS, and JavaScript. On top of that, we worked with Python's Django to generate websites.</p>
                        </li>
                        <li>
                            <b>Computer Graphics</b>
                            <p>A upper division course which discussed developing UIs with qt and the process for rendering three-dimensional objects using just C++ and math.</p>
                        </li>
                        <li>
                            <b>Mobile Development</b>
                            <p>Using Java and Android Studio, this course focused on Android development and we developed apps, each project introducing a new feature.</p>
                        </li>
                        <li>
                            <b>Analysis of Algorithms</b>
                            <p>This course was about understanding algorithms and analyzing their efficiency using Big O, Big Omega, and Big Theta notations.</p>
                        </li>
                        <li>
                            <b>Database Architecture</b>
                            <p>This course went over the logical structure of databases and SQL commands. </p>
                        </li>

                    </ul>
                </div>
        }
    ]

    const [i, setI] = useState(0);

    const list = content.map((item, index) => {
        return (
            <li id={index == i ? "selected" : ""} onClick={() => { setI(index) }} key={index}>{item.title}</li>
        )
    });

    return (
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