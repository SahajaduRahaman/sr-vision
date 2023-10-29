import './App.css';
import Contact from './components/contact/Contact';
import Education from './components/education/Education';
import Footer from './components/footer/Footer';
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';
import Projects from './components/projects/Projects';
import Services from './components/services/Services';
import Skill from './components/skill/Skill';
import ThemeContext from './ContextApi';
import { useContext } from 'react';


function App() {

  const theme = useContext(ThemeContext)
  const DarkMode = theme.state.darkMode;
  
  console.log(theme.state.darkMode);

  return (
    <div className="App" 
    style={{
      background: DarkMode ? "var(--blackColor)" : "",
      color: DarkMode ? "white" : "",
    }}>
      <Navbar />
      <Hero />
      <Services />
      <Projects/>
      <Skill />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;