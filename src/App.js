
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Header from './components/header';
import Particles from 'react-particles-js';
import AboutMe from './components/aboutMe';

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
    </>
  );
}

export default App;
