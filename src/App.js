import './App.css';
import { Projects } from './components/project-components/Project';
import { Contact } from './components/email-contact/Contact';
import { Experience } from './components/Experience';
import { Intro } from './components/Intro';

function App() {
  return(
    <div className='Container'>
      <Intro/>
      <Experience/>
      <Projects/>
      <Contact/>
    </div>
  )
}

export default App;
