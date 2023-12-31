import React from 'react'
import "./about.css"
import me from "./../../assets/Saber.jpg"
import { FaAward } from "react-icons/fa"
import { FiUsers } from "react-icons/fi"
import { VscFolderLibrary } from "react-icons/vsc"
const About = () => {
    return (
        <section id="about">
            <h5>Get to Know</h5>
            <h2>About Me</h2>
            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={me} alt="Mohamed Saber" />
                    </div>
                </div>
                <div className="about__content">
                    <div className="about__cards">
                        <article className="about__card">
                            <FaAward className="about__icon" />
                            <h5>Experience</h5>
                            <small>1+ Years Working</small>
                        </article>
                        <article className="about__card">
                            <FiUsers className="about__icon" />
                            <h5>Clients</h5>
                            <small>10+ WorldWide</small>
                        </article>
                        <article className="about__card">
                            <VscFolderLibrary className="about__icon" />
                            <h5>Projects</h5>
                            <small>30+ Projects</small>
                        </article>
                    </div>
                    <p>
                        Full Stack Developer with two years of experience developing web, and business intelligence solutions using React.JS, Next.JS, Node.JS, Express.JS, MongoDB and MySql. Expertise in requirements analysis, design, development, testing,maintenance, enhancement, and production support of business applications. Certified Web Development Professional with a deep passion for technology, extensive technological expertise, and well-developed teamwork abilities
                    </p>
                    <a href="#contact" className='btn btn-primary'>Let's Talk</a>
                </div>
            </div>
        </section>
    )
}

export default About