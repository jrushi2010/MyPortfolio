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
      <Home />
      <About />
      <Skill />
      <Design />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
