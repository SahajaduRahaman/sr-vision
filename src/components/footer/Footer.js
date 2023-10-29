import React from 'react'
import "./Footer.css"
import Lottie from 'lottie-react'
import thankYou from "../lottie/thank-you-red.json"
import GitHub from "../asset/github.png"
import Linkedin from "../asset/linkedin.png"
import Instagram from "../asset/instagram.png"
import { FaMobileScreen } from "react-icons/fa6"
import { MdEmail } from "react-icons/md"
import { FaRegAddressCard } from "react-icons/fa6"


const Footer = () => {
  return (
    <div className="footer-container">
        <div className="footer-left">
          <div className="options">
            <div className="option">
              <FaMobileScreen />
              <div>+91 9547332860</div>
            </div>
            <div className="option">
              <MdEmail />
              <div>sahajadurahaman@gmail.com</div>
            </div>
            <div className="option">
              <FaRegAddressCard />
              <div>West Bengal, India</div>
            </div>
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
        <div className="footer-right">
          <Lottie animationData={thankYou} loop={true} style={{width: "200px"}}/>
        </div>
    </div>
  )
}

export default Footer