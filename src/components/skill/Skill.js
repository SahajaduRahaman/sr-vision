import React from 'react'
import "./Skill.css"
import { Typewriter, Cursor } from "react-simple-typewriter"
import { motion } from 'framer-motion' 


const Skill = () => {
  const anime = {
    duration: 1,
    type: "transition",
  }
  return (
    <div className="skills-container" id='skill'>
      <div className="skill-heading">
        My 
        <span className='skill-heading2'>
          <Typewriter
            words={[" Coding Skills"]}
            loop={true}
            typeSpeed={60}
            deleteSpeed={60}
          />
          <Cursor />
        </span>
      </div>
      <div className="skills-wrapper">
        <div className="skills-left">
          <div className="skill">
            <div className="skill-top">
              <div className="skill-name">HTML</div>
              <div className="skill-score">90%</div>
            </div>
            <div className="skill-buttom">
              <motion.div className="skill-range"
              initial={{ width: "1%" }}
              whileInView={{ width: "90%",}}
              transition={anime}
              >

              </motion.div>
            </div>
          </div>
          <div className="skill">
            <div className="skill-top">
              <div className="skill-name">CSS</div>
              <div className="skill-score">80%</div>
            </div>
            <div className="skill-buttom">
              <motion.div className="skill-range"
              initial={{ width: "1%" }}
              whileInView={{ width: "80%",}}
              transition={anime}
              >

              </motion.div>
            </div>
          </div>
          <div className="skill">
            <div className="skill-top">
              <div className="skill-name">JavaScript</div>
              <div className="skill-score">80%</div>
            </div>
            <div className="skill-buttom">
              <motion.div className="skill-range"
              initial={{ width: "1%" }}
              whileInView={{ width: "80%",}}
              transition={anime}
              >

              </motion.div>
            </div>
          </div>
          <div className="skill">
            <div className="skill-top">
              <div className="skill-name">React</div>
              <div className="skill-score">85%</div>
            </div>
            <div className="skill-buttom">
              <motion.div className="skill-range"
              initial={{ width: "1%" }}
              whileInView={{ width: "85%",}}
              transition={anime}
              >

              </motion.div>
            </div>
          </div>
          <div className="skill">
            <div className="skill-top">
              <div className="skill-name">Redux</div>
              <div className="skill-score">70%</div>
            </div>
            <div className="skill-buttom">
              <motion.div className="skill-range"
              initial={{ width: "1%" }}
              whileInView={{ width: "70%",}}
              transition={anime}
              >

              </motion.div>
            </div>
          </div>
          <div className="skill">
            <div className="skill-top">
              <div className="skill-name">Bootstrap</div>
              <div className="skill-score">60%</div>
            </div>
            <div className="skill-buttom">
              <motion.div className="skill-range"
              initial={{ width: "1%" }}
              whileInView={{ width: "60%",}}
              transition={anime}
              >

              </motion.div>
            </div>
          </div>
        </div>
        <div className="skills-right">
          <div className="skill">
            <div className="skill-top">
              <div className="skill-name">Node Js</div>
              <div className="skill-score">75%</div>
            </div>
            <div className="skill-buttom">
              <motion.div className="skill-range"
              initial={{ width: "1%" }}
              whileInView={{ width: "75%",}}
              transition={anime}
              >

              </motion.div>
            </div>
          </div>
          <div className="skill">
            <div className="skill-top">
              <div className="skill-name">Express Js</div>
              <div className="skill-score">80%</div>
            </div>
            <div className="skill-buttom">
              <motion.div className="skill-range"
              initial={{ width: "1%" }}
              whileInView={{ width: "80%",}}
              transition={anime}
              >

              </motion.div>
            </div>
          </div>
          <div className="skill">
            <div className="skill-top">
              <div className="skill-name">MongoDb</div>
              <div className="skill-score">70%</div>
            </div>
            <div className="skill-buttom">
              <motion.div className="skill-range"
              initial={{ width: "1%" }}
              whileInView={{ width: "70%",}}
              transition={anime}
              >

              </motion.div>
            </div>
          </div>
          <div className="skill">
            <div className="skill-top">
              <div className="skill-name">Java</div>
              <div className="skill-score">85%</div>
            </div>
            <div className="skill-buttom">
              <motion.div className="skill-range"
              initial={{ width: "1%" }}
              whileInView={{ width: "85%",}}
              transition={anime}
              >

              </motion.div>
            </div>
          </div>
          <div className="skill">
            <div className="skill-top">
              <div className="skill-name">GitHub</div>
              <div className="skill-score">65%</div>
            </div>
            <div className="skill-buttom">
              <motion.div className="skill-range"
              initial={{ width: "1%" }}
              whileInView={{ width: "65%",}}
              transition={anime}
              >

              </motion.div>
            </div>
          </div>
          <div className="skill">
            <div className="skill-top">
              <div className="skill-name">Tailwind CSS</div>
              <div className="skill-score">65%</div>
            </div>
            <div className="skill-buttom">
              <motion.div className="skill-range"
              initial={{ width: "1%" }}
              whileInView={{ width: "65%",}}
              transition={anime}
              >

              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skill