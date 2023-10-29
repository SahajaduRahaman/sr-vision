import React from 'react'
import "./Services.css"
import Lottie from "lottie-react";
import servicesLottie from "../lottie/services.json"
import Resume from "../asset/Resume-Sahajadu Rahaman.pdf"
import Emoji from "../asset/thumbup.png"
import ServiceCard from '../serviceCard/ServiceCard';
import { Typewriter, Cursor } from "react-simple-typewriter"
import { motion } from "framer-motion";


const Services = () => {
    const transition = {
        duration: 1,
        type: "spring",
      };
    
    return (
        <div className="services" id='services'>
            <div className="services-left">
                <div className="services-title">
                    My Awesome
                    <br />
                    <span className='service-type'>
                        <Typewriter
                            words={["Services"]}
                            loop={true}
                            typeSpeed={60}
                            deleteSpeed={60}
                        />
                    </span>
                    <span className='service-type'>
                        <Cursor />
                    </span>
                </div>
                <div className="services-lottie">
                <Lottie animationData={servicesLottie} loop={true} />
                </div>
                <div className="service-details">
                    <p>I offer expert web development services, creating dynamic and responsive websites tailored to your needs, from design to deployment.</p>
                </div>
                <a className='resume-ancer' href={Resume} download={Resume}>
                    <button className="button resume-button">
                        Resume
                    </button>
                </a>
            </div>
            <div className="services-right">
                <motion.div className="s_card"
                initial={{ left: "28rem" }}
                whileInView={{ left: "2rem",}}
                transition={transition}
                >
                    <ServiceCard img={Emoji} txt1="Frontend" txt2="HTML, CSS, Javascript, React"/>
                </motion.div>
                
                <motion.div className="s_card"
                initial={{ left: "-15rem"}}
                whileInView={{ left: "17rem",}}
                transition={transition}
                >
                    <ServiceCard img={Emoji} txt1="Backend" txt2="Node-Js, Express-Js, MongoDb"/>
                </motion.div>
                <motion.div className="s_card"
                initial={{ left: "-20rem", }}
                whileInView={{ left: "10rem", top: "2rem" }}
                transition={transition}
                >
                    <ServiceCard img={Emoji} txt1="Mern" txt2="React, NodeJs, ExpressJs, MongoDb"/>
                </motion.div>
            </div>
        </div>
    )
}

export default Services