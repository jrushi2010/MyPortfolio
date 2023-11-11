import './App.css';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Work from './Components/Work/Work';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Skill from './Components/Skill/Skill';
import Design from './Components/Design/Design';
import Specialization from './Components/Specialization/Specialization';

function App() {
  return (
    <div>
      <div className='px-5 md:px-0'>
        <Home />
        <About />
      </div>
      <div className='px-0'>
        <Skill />
        <Design />
        <Specialization />
      </div>
      <div className='px-5 md:px-0'>
        <Work />
        <Contact />
      </div>
      <div className='px-0'>
        <Footer />
      </div>
    </div>
  );
}

export default App;
