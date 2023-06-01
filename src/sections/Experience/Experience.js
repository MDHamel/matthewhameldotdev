import { useState } from "react";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import "./style.css"

export default function Experience() {

    const content = [
        {
            title: "Freelance",
            body:
                <div>
                    <p>Following my graduation, I embarked on a path of freelancing, leveraging my expertise to provide a range of specialized services. My focus primarily revolves around crafting and delivering visual appealing web applications, system applications, and providing valuable consultations to clients.</p>
                    <p>When it comes to web applications, I harness the power of JavaScript, React.js, and CSS to develop tailored solutions. These projects span from elegant and informative static websites to intricate applications designed for data processing.</p>
                    <p>For system applications, I employ Python or C# based on the unique requirements and scale of each client's project, ensuring optimal functionality and efficiency.</p>
                </div>

        },
        {
            title: "theCoderSchool",
            body:
                <div>
                    <p>During my tenure at theCoderSchool, I actively expanded my expertise by immersing myself in diverse languages and technologies, enabling me to effectively impart knowledge to my students. Over a span of more than four years, I gained valuable insights and honed my skills through involvement in a multitude of projects encompassing various technologies, including:</p>
                    <ul>
                        <li>Android App Development utilizing <em><b>Java</b></em></li>
                        <li>Unity Game Development utilizing <em><b>C#</b></em></li>
                        <li>Web Development employing <em><b>HTML, CSS, JavaScript, and React</b></em></li>
                        <li>Python programming with a focus on <em><b>Panda, NumPy, BeautifulSoup, and Tkinter libraries</b></em></li>
                        <li>Including introductions to programming using languages such as <em><b>Python, Java, C++, and more.</b></em></li>
                    </ul>
                </div>
        },
        {
            title: "CSU East Bay",
            body:
                <div>
                    <p>During my academic journey at CSU East Bay, I had the privilege of delving into a diverse range of courses that enriched my understanding of key concepts in computer science. Here are a selection of notable courses that contributed to my comprehensive skill set:</p>
                    <ul>
                        <li>
                            <b>Software Engineering</b>
                            <p>This course delved into industry-standard practices, providing a deep understanding of software development methodologies. As a culmination of the course, my team engaged in a semester-long project, gradually building an Android app.</p>
                        </li>
                        <li>
                            <b>Intro to Networking</b>
                            <p>An introductory course that explored the intricate workings of computer networks, including protocols, system interactions, and the fundamentals of internet architecture. Topics covered included the OSI layers, web packets, TCP versus UDP, and essential aspects of web security.</p>
                        </li>
                        <li>
                            <b>Web Development</b>
                            <p>This course focused on the essentials of web development, covering HTML, CSS, and JavaScript. Additionally, we leveraged Python's Django framework to create dynamic and feature-rich websites.</p>
                        </li>
                        <li>
                            <b>Computer Graphics</b>
                            <p>As an upper-division course, Computer Graphics provided a comprehensive exploration of UI development using Qt. The curriculum also encompassed the mathematical principles and techniques involved in rendering three-dimensional objects using C++.</p>
                        </li>
                        <li>
                            <b>Mobile Development</b>
                            <p>Centered around Java and Android Studio, this course offered an in-depth exploration of Android app development. Throughout the course, we embarked on a series of projects, each introducing novel features and functionalities.</p>
                        </li>
                        <li>
                            <b>Analysis of Algorithms</b>
                            <p>This course delved into the study of algorithms, emphasizing the understanding and analysis of their efficiency. Notations such as Big O, Big Omega, and Big Theta were employed to assess algorithmic complexity.</p>
                        </li>
                        <li>
                            <b>Database Architecture</b>
                            <p>Database Architecture provided insights into the logical structure of databases and SQL commands. Through this course, I gained a solid foundation in managing and manipulating data within relational database systems.</p>
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
        <section id="Experience" className="Experience content">
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