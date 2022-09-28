import React from 'react'
import './header.css'
import {BsLinkedin, BsGithub} from 'react-icons/bs';
import {IoMdDocument} from 'react-icons/io';
import {MdEmail} from 'react-icons/md';

export default function Header() {

    return (
        <>
        <header>
            <div className="container header__container">
                
                <h5>Hello I'm</h5>
                <h1>Chad Tarbutton</h1>
                <h5 className="text-light">Senior Software Engineer</h5>

                <div className="social__container">
                    <a href="https://resume.tarbutton.org/resume.pdf" target="_blank"><IoMdDocument /></a>
                    <a href="https://www.linkedin.com/in/chad-tarbutton-5b7592100/" target="_blank"><BsLinkedin /></a>
                    <a href="https://github.com/Oonej" target="_blank"><BsGithub /></a>
                    <a href="mailto:chad@tarbutton.org" target="_blank"><MdEmail /></a>
                </div>
            </div>
        </header>
        </>
    )
}