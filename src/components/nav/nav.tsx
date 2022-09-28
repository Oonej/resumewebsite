import React from 'react'
import {useState} from 'react';

import './nav.css'
import {ImHome3} from 'react-icons/im';
import {BsFillBriefcaseFill} from 'react-icons/bs';
import {AiFillCode} from 'react-icons/ai';
import {MdEmail} from 'react-icons/md';


const ActiveNav: string = "#";

export default function Nav() {

    const [activeNav, setActivenav] = useState(ActiveNav);

    return (
        <>
        <nav>
            <a href="#" onClick={() => setActivenav('#')} className={activeNav === '#' ? 'active' : ''}><ImHome3 /></a> {/* Home */}
            <a href="#experience" onClick={() => setActivenav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BsFillBriefcaseFill /></a> {/* Experience */}
            <a href="#portfolio" onClick={() => setActivenav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><AiFillCode /></a> {/* Projects */}
            <a href="#contact" onClick={() => setActivenav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><MdEmail /></a> {/* Contact */}
        </nav>
        
        </>
    )
}