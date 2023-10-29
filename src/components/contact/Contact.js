import React, { useState, useEffect } from 'react'
import "./Contact.css"
import Lottie from "lottie-react";
import EmailLottie from "../lottie/helpUs2.json"
import { IoIosContact } from "react-icons/io"
import { MdEmail } from "react-icons/md"
import emailjs from '@emailjs/browser';
import SuccessfullLottie from "../lottie/successfull.json"


const Contact = () => {

    const [formData, setFormData] = useState({
        user_name: "",
        user_email: "",
        user_msg: "",
        to_name: "Raja Rahaman",
    });

    const [ hidden, setHidden] = useState("");

    useEffect(() => {
        const timer = setTimeout(() => {
          setHidden("");
        }, 5000);
        return () => clearTimeout(timer);
    }, [hidden]);

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name] : e.target.value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const serviceId = "service_y78qc7u";
        const templateId = "template_gfd0ndq";
        const publicKey = "b-yVoJiS0XoW9Ud5G";

        emailjs.send(serviceId, templateId, formData, publicKey)
        .then((response) => {
            console.log("Email send successfully");

            setHidden(response.text);

            setFormData({
                user_name: "",
                user_email: "",
                user_msg: "",
                to_name: "Raja Rahaman",
            })
        })
        .catch((err) => {
            console.error("Error sending mail", err)
        })
    }

    return (
        <div className="contact-container" id='contact'>
            <div className="contact-heading">Contact 
                <span className='contact-subheading'> Me!</span>
            </div>
            <div className="form-container">
                <div className="form-left">
                    <Lottie animationData={EmailLottie} loop={true} />
                </div>
                
                <div className="form-right">
                    {hidden &&
                    <div className='successfull'>
                        <Lottie animationData={SuccessfullLottie} loop={true} />
                    </div>
                    }
                    <form action="" className="contact">
                        <div className="contact-name">
                            <IoIosContact />
                            <input type="text" className="contact-nm" 
                            value={formData.user_name} 
                            name="user_name"
                            onChange={(e) => {handleChange(e)}}
                            placeholder='Enter your name'/>
                        </div>

                        <div className="contact-email">
                            <MdEmail />
                            <input type="email"
                            value={formData.user_email} 
                            name="user_email"
                            onChange={(e) => {handleChange(e)}} className="contact-mail" placeholder='Enter your email'/>
                        </div>

                        <div className="contact-msg">
                            <textarea id="" cols="30" rows="10" className="cntct-msg"
                            value={formData.user_msg} 
                            name="user_msg"
                            onChange={(e) => {handleChange(e)}}
                            placeholder='Enter your message'></textarea>
                        </div>
                    </form>
                    <div className="submit">
                        <button className="button submit-btn" onClick={handleSubmit}>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact