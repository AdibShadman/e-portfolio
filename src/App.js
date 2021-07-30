import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Header from './components/header';
import Particles from 'react-particles-js';
import AboutMe from './components/aboutMe';
import Certifications from './components/certifications';
import Projects from './components/projects';
import DownloadResume from './components/downloadResume';
import Contacts from './components/Contacts';
import Footer from './components/footer';

function App() {
  return (
    <>
    <Particles
      params = {{
        particles:{
          number:{
            value:30,
            density:{
              enable: true,
              value_area:900
            }
          }
          
        }

      }}
    />
    <Navbar/>
    <Header/>
    <AboutMe/>
    <Certifications/>
    <Projects/>
    <DownloadResume/>
    <Contacts/>
    <Footer/> 
    </>
  );
}

export default App;
