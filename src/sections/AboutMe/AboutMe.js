import "./style.css"

import SectionTitle from "../../components/SectionTitle/SectionTitle"

export default function AboutMe(){

    return(
        <section className="AboutMe content">
            <SectionTitle>About Me</SectionTitle>

            <article>
                <MeImage />
                <p>My name is Matthew Hamel, and I am a developer born and raised in the San Fransisco bay area. I started programming in high school and, since then, have been captivated by the practice.</p>
                <p>I pursued my passion in college at CSU East Bay and graduated with a bachelor's in computer science. At the same time, I took the knowledge I was accumulating and started tutoring at theCoderSchool, where I coached students aged eight to eighteen on topics ranging from novice to advanced topics. At theCoderSchool, I honed my skills and learned new technologies to accommodate my students' individual needs. </p>
                <p>Today I am looking to start my career, so feel free to *Reach Out* with opportunities or drop by and say hello!</p>
            </article>
            
        </section>
    )
}

function MeImage(){
    return(
        <div className="meImage">
            <figure className="back c"/>
            <figure className="back m"/>
            <img  src="/test.png" />
        </div>
    )
}

