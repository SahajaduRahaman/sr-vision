import React, { useState, useEffect, useContext, useRef } from 'react'
import './Navbar.css'
import { BsMoonStars } from "react-icons/bs"
import { BsSun } from "react-icons/bs"
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from 'react-scroll';
import ThemeContext from '../../ContextApi';


const Navbar = () => {

  const navRef = useRef();

  const Theme = useContext(ThemeContext)
  const DarkMode = Theme.state.darkMode;

  const handleToggle = () => {
    Theme.dispatch({ type : "toggle"})
  };

  const [ navBarClass, setNavBarClass ] = useState("navbar-container");

  const changeNavBackground = () => {
    let position = window.scrollY;

    if (position > 0) {
      setNavBarClass("navbar-container navColorChange");
    }
    else {
      setNavBarClass("navbar-container");
    }
  }

  const HandleNavButton = () => {
    navRef.current.classList.toggle("responsive_nav")
  }

  useEffect(() => {
    window.addEventListener("scroll", changeNavBackground);

    return () => {
      window.removeEventListener("scroll", changeNavBackground);
    };
  }, [])


  return (
    <div className={navBarClass}>
      <div className="navbar-left-section">
        <div className="name">S.Rahaman</div>
        <div className="toggle-theme" onClick={handleToggle}>
          <BsSun />
          <BsMoonStars />
          <button className='toggle-btn' style={DarkMode ? { left: "2px" } : { right: "2px" }}></button>
        </div>
      </div>
      <div className="navbar-right-section" ref={navRef}>
        <ul className="navbar-items">
          <Link to="home" smooth={true} spy={true}>
            <li className="nav-item" onClick={HandleNavButton}>Home</li>
          </Link >
          <Link to="services" smooth={true} spy={true}>
            <li className="nav-item" onClick={HandleNavButton}>Services</li>
          </Link>
          <Link to="projects" smooth={true} spy={true}>
            <li className="nav-item" onClick={HandleNavButton}>Project</li>
          </Link>
          <Link to="skill" smooth={true} spy={true}>
            <li className="nav-item" onClick={HandleNavButton}>Skill</li>
          </Link>
          <Link to="education" smooth={true} spy={true}>
            <li className="nav-item" onClick={HandleNavButton}>Education</li>
          </Link>
        </ul>
        <Link to="contact" smooth={true} spy={true}>
          <button className="button" onClick={HandleNavButton}>Contact</button>
        </Link>
        <button className='nav-btn nav-close-btn' onClick={HandleNavButton}>
          <FaTimes />
        </button>
      </div>
      <button className='nav-btn' onClick={HandleNavButton}>
        <FaBars />
      </button>
    </div>
  )
}

export default Navbar