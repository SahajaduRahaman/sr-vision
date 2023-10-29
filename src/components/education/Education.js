import React, { useContext } from 'react'
import "./Education.css"
import { Typewriter, Cursor } from "react-simple-typewriter"
import ThemeContext from '../../ContextApi'


const Education = () => {

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="education-experience-container" id='education'>
      <div className="education-container">
        <div className="edu-ex-title">My
          <span className='skill-heading2'>
            <Typewriter
              words={[" Education"]}
              loop={true}
              typeSpeed={60}
              deleteSpeed={60}
            />
            <Cursor />
          </span>
        </div>
        <div className="education">
          <div className="elu-line"></div>
          <div className="edu-box">
            <div className="edu-decsription">
              <div className="edu">B.Tech (Civil Engineering)</div>
              <div className="year" style={{color: darkMode && "white"}}>2018</div>
            </div>
            <div className="edu-school">Bengal Institute of Technology & management
            </div>
            <p className="edu-details">Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis dolorum tempora vero ea, deleniti numquam.</p>
          </div>
        </div>
        <div className="education">
          <div className="elu-line"></div>
          <div className="edu-box">
            <div className="edu-decsription">
              <div className="edu">Diploma (Civil Engineering)</div>
              <div className="year" style={{color: darkMode && "white"}}>2015</div>
            </div>
            <div className="edu-school">Nibedita Polytechnic
            </div>
            <p className="edu-details">Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis dolorum tempora vero ea, deleniti numquam.</p>
          </div>
        </div>
        <div className="education">
          <div className="elu-line"></div>
          <div className="edu-box">
            <div className="edu-decsription">
              <div className="edu">H.S</div>
              <div className="year" style={{color: darkMode && "white"}}>2011</div>
            </div>
            <div className="edu-school">Dinhata high school
            </div>
            <p className="edu-details">Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis dolorum tempora vero ea, deleniti numquam.</p>
          </div>
        </div>
        <div className="education">
          <div className="elu-line"></div>
          <div className="edu-box">
            <div className="edu-decsription">
              <div className="edu">Madhyamik</div>
              <div className="year" style={{color: darkMode && "white"}}>2009</div>
            </div>
            <div className="edu-school">Okrabari A.B high school
            </div>
            <p className="edu-details">Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis dolorum tempora vero ea, deleniti numquam.</p>
          </div>
        </div>
      </div>

      <div className="experience-container">
      <div className="edu-ex-title">My
        <span className='skill-heading2'>
          <Typewriter
            words={[" Experience"]}
            loop={true}
            typeSpeed={60}
            deleteSpeed={60}
          />
          <Cursor />
        </span>
      </div>
        <div className="education">
          <div className="elu-line"></div>
          <div className="edu-box">
            <div className="edu-decsription">
              <div className="edu">Full Stack Developer (Internship)</div>
              <div className="year" style={{color: darkMode && "white"}}>2022-2023</div>
            </div>
            <div className="edu-school">Newton school</div>
            <p className="edu-details">Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis dolorum tempora vero ea, deleniti numquam.</p>
          </div>
        </div>
        <div className="education">
          <div className="elu-line"></div>
          <div className="edu-box">
            <div className="edu-decsription">
              <div className="edu">Instructor (WCS)</div>
              <div className="year" style={{color: darkMode && "white"}}>2020-2022</div>
            </div>
            <div className="edu-school">Mathabhanga Govt. ITI</div>
            <p className="edu-details">Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis dolorum tempora vero ea, deleniti numquam.</p>
          </div>
        </div>
        <div className="education">
          <div className="elu-line"></div>
          <div className="edu-box">
            <div className="edu-decsription">
              <div className="edu">Skilled Technical Person (STP)</div>
              <div className="year" style={{color: darkMode && "white"}}>2019-2020</div>
            </div>
            <div className="edu-school">Gitaldaha G.P</div>
            <p className="edu-details">Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis dolorum tempora vero ea, deleniti numquam.</p>
          </div>
        </div>
        <div className="education">
          <div className="elu-line"></div>
          <div className="edu-box">
            <div className="edu-decsription">
              <div className="edu">Instructor (WCS)</div>
              <div className="year" style={{color: darkMode && "white"}}>2019-2019</div>
            </div>
            <div className="edu-school">Pathar Pratima Govt. ITI</div>
            <p className="edu-details">Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis dolorum tempora vero ea, deleniti numquam.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Education