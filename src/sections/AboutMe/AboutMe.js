import "./style.css"

import SectionTitle from "../../components/SectionTitle/SectionTitle"
import { GlitchHover } from "../../components/GlitchText/GlichText"
import { pubUrl } from "../../components/Misc/misc";

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
        <section id="AboutMe" className="AboutMe content">
            <SectionTitle>About Me</SectionTitle>
            <div className="flex">
                <article>
                    <p>My name is Matthew Hamel, a driven developer based in the vibrant San Francisco Bay Area. From an early age, I have been captivated by the boundless potential of technology and its impact on the world.</p>
                    <p>To further my knowledge and skills, I pursued a degree in computer science at CSU East Bay, graduating with a bachelor's degree. Simultaneously, I embarked on a fulfilling journey as a tutor at theCoderSchool, mentoring students ranging from beginners to advanced learners. This experience allowed me to refine my expertise and adapt to diverse technological demands, catering to each student's unique requirements.</p>
                    <p>As I embark on a new chapter, I am eagerly seeking fresh opportunities. Please don't hesitate to get in touch if you have any exciting prospects or simply wish to connect.</p>
                    <p>I look forward to hearing from you!</p>
                </article>
                
                <img className="meImage" src={pubUrl("/profpic.jpg")} />

            </div>

            
            
        </section>
    )
}
