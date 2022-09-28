import React from 'react'
import './experience.css'
import { SiVisualstudio, SiCplusplus, SiCheckmarx, SiJavascript, SiJava, SiReact, SiTypescript, SiPython } from 'react-icons/si';
import { GrMysql } from 'react-icons/gr';

export default function Experience() {

    return (
        <>
            <section id='experience'>
                <h5>What Skills I Have</h5>
                <h2>My Experience</h2>

                <div className="container experience__container">
                    <div className="experience__languages">
                        <h3>Languages</h3>
                        <div className="experience__content">
                            <article className="experience__details">
                                <SiVisualstudio className="experience__details-icon" />
                                <div>
                                    <h4>C#</h4>
                                    <small className="text-light">Experienced</small>
                                </div>
                            </article>
                            <article className="experience__details">
                                <SiCplusplus className="experience__details-icon" />
                                <div>
                                    <h4>C++</h4>
                                    <small className="text-light">Knowledgable</small>
                                </div>
                            </article>
                            <article className="experience__details">
                                <SiCheckmarx className="experience__details-icon" />
                                <div>
                                    <h4>C</h4>
                                    <small className="text-light">Knowledgable</small>
                                </div>
                            </article>
                            <article className="experience__details">
                                <SiCheckmarx className="experience__details-icon" />
                                <div>
                                    <h4>ADA</h4>
                                    <small className="text-light">Knowledgable</small>
                                </div>
                            </article>
                            <article className="experience__details">
                                <SiJava className="experience__details-icon" />
                                <div>
                                    <h4>Java</h4>
                                    <small className="text-light">Knowledgable</small>
                                </div>
                            </article>
                            <article className="experience__details">
                                <SiJavascript className="experience__details-icon" />
                                <div>
                                    <h4>Javascript</h4>
                                    <small className="text-light">Knowledgable</small>
                                </div>
                            </article>
                            <article className="experience__details">
                                <SiReact className="experience__details-icon" />
                                <div>
                                    <h4>ReactJS</h4>
                                    <small className="text-light">Knowledgable</small>
                                </div>
                            </article>
                            <article className="experience__details">
                                <SiTypescript className="experience__details-icon" />
                                <div>
                                    <h4>Typescript</h4>
                                    <small className="text-light">Knowledgable</small>
                                </div>
                            </article>
                            <article className="experience__details">
                                <SiPython className="experience__details-icon" />
                                <div>
                                    <h4>Python</h4>
                                    <small className="text-light">Knowledgable</small>
                                </div>
                            </article>

                            <article className="experience__details">
                                <GrMysql className="experience__details-icon" />
                                <div>
                                    <h4>MySQL</h4>
                                    <small className="text-light">Knowledgable</small>
                                </div>
                            </article>
                        </div>
                    </div>
                    <div className="experience__skills">
                        <h3>Skills</h3>
                        <div className="experience__content">
                        <article className="experience__details">
                                <SiCheckmarx className="experience__details-icon" />
                                <div>
                                    <h4>Visual Studio</h4>
                                    <small className="text-light">Experienced</small>
                                </div>
                            </article>
                            <article className="experience__details">
                                <SiCheckmarx className="experience__details-icon" />
                                <div>
                                    <h4>Agile</h4>
                                    <small className="text-light">Experienced</small>
                                </div>
                            </article>
                            <article className="experience__details">
                                <SiCheckmarx className="experience__details-icon" />
                                <div>
                                    <h4>Photoshop</h4>
                                    <small className="text-light">Experienced</small>
                                </div>
                            </article>
                            <article className="experience__details">
                                <SiCheckmarx className="experience__details-icon" />
                                <div>
                                    <h4>Illustrator</h4>
                                    <small className="text-light">Experienced</small>
                                </div>
                            </article>
                            <article className="experience__details">
                                <SiCheckmarx className="experience__details-icon" />
                                <div>
                                    <h4>Unity</h4>
                                    <small className="text-light">Experienced</small>
                                </div>
                            </article>
                            <article className="experience__details">
                                <SiCheckmarx className="experience__details-icon" />
                                <div>
                                    <h4>Blender</h4>
                                    <small className="text-light">Knowledgable</small>
                                </div>
                            </article>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}