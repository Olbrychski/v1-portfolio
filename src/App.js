import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Contacts from './components/Contacts';
import Education from './components/Education';
import Navigation from './components/Navigation';
import Projects from './components/Projects';
import {useRef} from 'react';
import Experience from './components/Experience';
import { Link } from "react-router-dom"
import file from './images/Resume.pdf';

function App() {

  const aboutRef = useRef(null);
  const educationRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const contactsRef = useRef(null);


  const onDownload = () => {
    fetch(file).then((response) => {
      response.blob().then((blob) => {
        let url = window.URL.createObjectURL(blob);
        let a = document.createElement("a");
        a.href = url;
        a.download = "Resume.pdf";
        a.click();
      });
    });
  };


  return (
    <Router>
    <div className="App bg-white text-black min-h-screen">
      <nav class="fixed bg-white top-0 z-50 w-full">
        <Navigation aboutRef={aboutRef} educationRef={educationRef} projectsRef={projectsRef} contactsRef={contactsRef} experienceRef={experienceRef} />
      </nav>
      <br /><br />
      <main class="pt-12">

      <Route exact path={["/","/#about","/#education", "/#skills" ,"/#experience","/#projects","/#contacts"]}>

        <About aboutRef={aboutRef} projectsRef={projectsRef} />
        <br />
        <Education educationRef={educationRef} />
        <br />
        <Experience experienceRef={experienceRef} />
        <br />
        <center>
          <Link to="" onClick={onDownload} class="bg-white text-black p-4 bg-yellow-300 hover:bg-yellow-400 text-center font-semibold shadow-xl">Download CV</Link>
        </center>
        <br />
        <Projects projectsRef={projectsRef} />
        <br />
        <Contacts contactsRef={contactsRef} />

      </Route>

      </main>

    </div>
    </Router>
  );
}

export default App;
