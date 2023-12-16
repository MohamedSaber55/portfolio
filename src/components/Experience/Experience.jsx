import React from 'react'
import "./experience.css"
import { BsFillPatchCheckFill } from "react-icons/bs"
const Experience = () => {
    return (
        <section id="experience">
            <h5>What Skills I Have</h5>
            <h2>My Experience</h2>
            <div className="container experience__container">
                <div className="experience__frontend">
                    <h3>Front-End Development</h3>
                    <div className="experience__content">
                        <article className="experience__details">
                            <BsFillPatchCheckFill className="experience__details-icon" />
                            <div className="">
                                <h4>HTML</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsFillPatchCheckFill className="experience__details-icon" />
                            <div className="">
                                <h4>CSS</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsFillPatchCheckFill className="experience__details-icon" />
                            <div className="">
                                <h4>JavaScript</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsFillPatchCheckFill className="experience__details-icon" />
                            <div className="">
                                <h4>TypeScript</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsFillPatchCheckFill className="experience__details-icon" />
                            <div className="">
                                <h4>BootStrap</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsFillPatchCheckFill className="experience__details-icon" />
                            <div className="">
                                <h4>TailWind CSS</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsFillPatchCheckFill className="experience__details-icon" />
                            <div className="">
                                <h4>React</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsFillPatchCheckFill className="experience__details-icon" />
                            <div className="">
                                <h4>Redux</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsFillPatchCheckFill className="experience__details-icon" />
                            <div className="">
                                <h4>Vite</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsFillPatchCheckFill className="experience__details-icon" />
                            <div className="">
                                <h4>Next</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                        </article>
                    </div>
                </div>
                <div className="experience__backend">
                    <h3>Back-End Development</h3>
                    <div className="experience__content">
                        <article className="experience__details">
                            <BsFillPatchCheckFill className="experience__details-icon" />
                            <div className="">
                                <h4>Node JS</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsFillPatchCheckFill className="experience__details-icon" />
                            <div className="">
                                <h4>Express JS</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsFillPatchCheckFill className="experience__details-icon" />
                            <div className="">
                                <h4>MongoDB</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsFillPatchCheckFill className="experience__details-icon" />
                            <div className="">
                                <h4>MySQL</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsFillPatchCheckFill className="experience__details-icon" />
                            <div className="">
                                <h4>Mongoose</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsFillPatchCheckFill className="experience__details-icon" />
                            <div className="">
                                <h4>Sequelize</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsFillPatchCheckFill className="experience__details-icon" />
                            <div className="">
                                <h4> Socket.IO</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsFillPatchCheckFill className="experience__details-icon" />
                            <div className="">
                                <h4> RestAPI</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsFillPatchCheckFill className="experience__details-icon" />
                            <div className="">
                                <h4>GraphQL</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsFillPatchCheckFill className="experience__details-icon" />
                            <div className="">
                                <h4> MVC</h4>
                                <small className="text-light">Basic</small>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience