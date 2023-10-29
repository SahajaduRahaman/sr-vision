import React, { useContext } from 'react'
import "./Projects.css"
import { Typewriter, Cursor } from "react-simple-typewriter"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import YoutubeImg from "../asset/Youtube-Clone.png"
import MovieZone from "../asset/Movie-Zn.png"
import TaskManager from "../asset/Task-Manager.png"
import ImageSearch from "../asset/Image-Search.png"
import ProrgammerTask from "../asset/Programmer-Task.png"
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import ThemeContext from '../../ContextApi';


const Projects = () => {

  const theme = useContext(ThemeContext)
  const darkMode = theme.state.darkMode;

  return (
    <div className="projects-container" id='projects'>
      <div className="project-title">
        My Recent 
        <span className="project-span">
          <Typewriter
            words={[" Projects"]}
            loop={true}
            typeSpeed={60}
            deleteSpeed={60}
          />
          <Cursor />
        </span>
      </div>
      <div className="projects-box">
        <Swiper
        modules={[Pagination, Autoplay, Navigation]}
        autoplay={{delay: 3000}}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        spaceBetween={50}
        slidesPerView={1}
        className='mySwiper'
        breakpoints={{
          860: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1280: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        >
          <SwiperSlide>
            <div className="project" style={{color: darkMode && "black"}}>
              <div className="projectTitle">Movie-Zone</div>
              <img className="projectImg" src={MovieZone} alt="" />
              <dib className="projectDetails">
                <p>I've developed a Movie Details Website powered by The Movie Database (TMDb). Discover comprehensive information on your favorite films, actors, and directors in one user-friendly hub.</p>
              </dib>
              <div className="projectLinks">
                <a href="https://github.com/SahajaduRahaman/movie-info" className="link" target='_blank' rel="noreferrer">
                  <button className="button">Github</button>
                </a>
                <a href="https://movie-zn.vercel.app" className="link" target='_blank' rel="noreferrer">
                  <button className="button">Preview</button>
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="project" style={{color: darkMode && "black"}}>
              <div className="projectTitle">Youtube-Clone</div>
              <img src={YoutubeImg} alt="" />
              <dib className="projectDetails">
                <p>I've crafted a YouTube clone, a fully-featured video-streaming platform that mimics the user experience of the original, with customizations and enhancements to suit your unique vision.</p>
              </dib>
              <div className="projectLinks">
                <a href="https://github.com/SahajaduRahaman/youtube-clone" className="link" target='_blank' rel="noreferrer">
                  <button className="button">Github</button>
                </a>
                <a href="https://sr-youtube.netlify.app/" className="link" target='_blank' rel="noreferrer">
                  <button className="button">Preview</button>
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="project" style={{color: darkMode && "black"}}>
              <div className="projectTitle">Task-Manager</div>
              <img src={TaskManager} alt="" />
              <dib className="projectDetails">
                <p>I've designed a Task Manager Application to streamline your productivity. Organize, prioritize, and track tasks efficiently, making it simple to stay on top of your to-do list.</p>
              </dib>
              <div className="projectLinks">
                <a href="https://github.com/SahajaduRahaman/Task-Manager-App---JS-Placement-Project---6npdnoeyo9zj" className="link" target='_blank' rel="noreferrer">
                  <button className="button">Github</button>
                </a>
                <a href="https://sr-task-manager.netlify.app/" className="link" target='_blank' rel="noreferrer">
                  <button className="button">Preview</button>
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="project" style={{color: darkMode && "black"}}>
              <div className="projectTitle">Image-Search</div>
              <img src={ImageSearch} alt="" />
              <dib className="projectDetails">
                <p>I've built an Image Search Application for quick and easy exploration of a vast collection of images. Find, view, and save images effortlessly with intuitive search and filtering features.</p>
              </dib>
              <div className="projectLinks">
                <a href="https://github.com/SahajaduRahaman/Image-Search" className="link" target='_blank' rel="noreferrer">
                  <button className="button">Github</button>
                </a>
                <a href="https://sr-images.netlify.app/" className="link" target='_blank' rel="noreferrer">
                  <button className="button">Preview</button>
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="project" style={{color: darkMode && "black"}}>
              <div className="projectTitle">Programmer-Task</div>
              <img src={ProrgammerTask} alt="" />
              <dib className="projectDetails">
                <p>I've developed an Excel-Like Application, offering powerful spreadsheet capabilities with user-friendly functionality. Organize data, perform calculations, and create dynamic tables with ease.</p>
              </dib>
              <div className="projectLinks">
                <a href="https://github.com/SahajaduRahaman/Task_JS_Programmer" className="link" target='_blank' rel="noreferrer">
                  <button className="button">Github</button>
                </a>
                <a href="https://programmer-task.netlify.app/" className="link" target='_blank' rel="noreferrer">
                  <button className="button">Preview</button>
                </a>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}

export default Projects