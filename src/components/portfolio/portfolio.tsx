import React from 'react';
import img_gauge from '../../assets/images/gaugecreator.png';
import img_holograham from '../../assets/images/holograham.png';
import img_wailingwell from '../../assets/images/wailingwell.png';
import img_fossilhog from '../../assets/images/fossilhog.png';
import img_resume from '../../assets/images/tempimage.png';
import img_puzzle from '../../assets/images/puzzle.png';

import './portfolio.css';


export default function Portfolio() {

    return (
        <>
            <section id='portfolio'>
                <h5>My Projects</h5>
                <h2>Portfolio</h2>

                <div className="container portfolio__container">
                    <article className="portfolio__item">
                        <div className="portfolio__item-image">
                            <img src={img_gauge} alt="Gauge Creator" />
                        </div>
                        <div>
                            <h3>Animated Gauge Creator</h3>
                            <small className="text-light">Programmer, Designer</small>
                        </div>

                        <div className="portfolio__item-cta">
                            <a href="https://github.com/Oonej/gaugecreator" className='btn'>GitHub</a>
                            <a href="http://resume.tarbutton.org/gaugedemo" className='btn btn-primary'>Demo</a>
                        </div>
                    </article>
                    <article className="portfolio__item">
                        <div className="portfolio__item-image">
                            <img src={img_fossilhog} alt="Fossil Hog" />
                        </div>
                        <div>
                            <h3>Fossil Hog</h3>
                            <small className="text-light">Owner, Product Designer</small>
                        </div>
                        <div className="portfolio__item-cta">
                            <a href="https://www.fossilhog.com" className='btn btn-primary'>View</a>
                        </div>

                    </article>
                    <article className="portfolio__item">
                        <div className="portfolio__item-image">
                            <img src={img_resume} alt="Portfolio Resume" />
                        </div>
                        <div>
                            <h3>Online Portfolio/Resume</h3>
                            <small className="text-light">Programmer, Designer</small>
                        </div>
                        <div className="portfolio__item-cta">
                            <a href="https://github.com/Oonej/resumewebsite" className='btn'>GitHub</a>
                            <a href="#" className='btn btn-primary'>Home</a>
                        </div>
                    </article>
                    <article className="portfolio__item">
                        <div className="portfolio__item-image">
                            <img src={img_wailingwell} alt="The Wailing Well" />
                        </div>
                        <div>
                            <h3>The Wailing Well</h3>
                            <small className="text-light">Placed 3rd, Lead Programmer</small>
                        </div>

                        <div className="portfolio__item-cta">
                            <a href="https://kokutouchichi.itch.io/the-wailing-well" className='btn btn-primary'>Demo</a>
                        </div>
                    </article>
                    <article className="portfolio__item">
                        <div className="portfolio__item-image">
                            <img src={img_holograham} alt="Holo-Graham" />
                        </div>
                        <div>
                            <h3>Holo-Graham</h3>
                            <small className="text-light">Solo Programmer, Graphic Designer</small>
                        </div>
                        <div className="portfolio__item-cta">
                            <a href="https://store.steampowered.com/app/566140/HoloGraham/" className='btn'>Steam</a>
                            <a href="https://holograham.itch.io/holograham" className='btn btn-primary'>Demo</a>
                        </div>
                    </article>
                    <article className="portfolio__item">
                        <div className="portfolio__item-image">
                            <img src={img_puzzle} alt="Holo-Graham" />
                        </div>
                        <div>
                            <h3>Puzzle Design Competition</h3>
                            <small className="text-light">1st Place, Designer</small>
                        </div>
                        <div className="portfolio__item-cta">
                            <a href="https://www.myminifactory.com/object/3d-print-twisted-puzzle-68065" className='btn btn-primary'>View</a>
                        </div>
                    </article>
                </div>
            </section>
        </>
    )
}