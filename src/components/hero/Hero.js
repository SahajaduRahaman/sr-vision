import React from 'react'
import { Typewriter, Cursor } from "react-simple-typewriter"
import "./Hero.css"
import GitHub from "../asset/github.png"
import Linkedin from "../asset/linkedin.png"
import Instagram from "../asset/instagram.png"
import Lottie from "lottie-react";
import Developer from "../lottie/developer.json"
import { Link } from 'react-scroll';


const Hero = () => {

    return (
    <div className="hero-container" id='home'>
        <div className="hero-left-section">
            <div className="hero-detailes">
                <div className="title">
                    <div className="intro">
                        Hi ! I am
                        <br />
                        <span className="hero-name">
                            <Typewriter
                                words={["Sahajadu Rahaman"]}
                                loop={true}
                                typeSpeed={60}
                                deleteSpeed={60}
                            />
                        </span>
                        <span className="hero-name">
                            <Cursor />
                        </span>
                        
                    </div>
                    <p className="details">
                    As a passionate full stack web developer, I blend creative design with robust coding to craft immersive online experiences. With a keen eye for detail and a commitment to innovation, I bring your digital vision to life.
                    </p>
                </div>
                <Link to="contact" smooth={true} spy={true}>
                    <button className="button hire-me">
                        Hire Me
                    </button>
                </Link>
            </div>
            <div className="hero-social">
                <a href="https://linkedin.com/in/sahajadu" rel="noreferrer" target='_blank'>
                    <div className="circle">
                        <img src={Linkedin} alt="LinkedIn" />
                    </div>
                </a>
                <a href="https://github.com/SahajaduRahaman" rel="noreferrer" target='_blank'>
                    <div className="circle">
                        <img src={GitHub} alt="GitHub" />
                    </div>
                </a>
                <a href="https://instagram.com/deep_motivation_story/" rel="noreferrer" target='_blank'>
                    <div className="circle">
                        <img src={Instagram} alt="Facebook" />
                    </div>
                </a>
            </div>
        </div>
        <div className="hero-right-section">
            <Lottie animationData={Developer} loop={true} />
        </div>
    </div>
  )
}

export default Hero