import "./style.css"

import SectionTitle from "../../components/SectionTitle/SectionTitle"
import { GlitchHover } from "../../components/GlitchText/GlichText"

export default function AboutMe(){

    const scroll = () =>{
        const section = "ReachOut";
        const element = document.getElementsByClassName(section.replace(/ /g, ''));
        console.log(element[0].offsetTop - 60);
        window.scrollTo({
        top: element[0].offsetTop - 60,
        behavior: 'smooth'
        });
      }

    return(
        <section className="AboutMe content">
            <SectionTitle>About Me</SectionTitle>

            <article>
                <img className="meImage" src="/test.png" />
                <p>My name is Matthew Hamel, and I am a developer born and raised in the San Fransisco bay area. I started programming in high school and, since then, have been captivated by the practice.</p>
                <p>I pursued my passion in college at CSU East Bay and graduated with a bachelor's in computer science. At the same time, I took the knowledge I was accumulating and started tutoring at theCoderSchool, where I coached students aged eight to eighteen on topics ranging from novice to advanced topics. At theCoderSchool, I honed my skills and learned new technologies to accommodate my students' individual needs. </p>
                <p>Today, I am looking for new opportunities, so feel free to reach out with opportunities or drop by and say hello!</p>
            </article>
            
        </section>
    )
}
