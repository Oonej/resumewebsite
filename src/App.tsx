import React from 'react'
import Contact from './components/contact/contact';
import Experience from './components/experience/experience';
import Footer from './components/footer/footer';
import Header from './components/header/header'
import Nav from './components/nav/nav';
import Portfolio from './components/portfolio/portfolio';

export default function App() {

    return (
        <>
        
        <Nav />
        <Header />
        <Experience />
        <Portfolio />
        <Contact />
        <Footer />
        
        </>
    );
}