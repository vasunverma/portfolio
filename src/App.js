import './App.css';
import { Navbar } from './components/navbar'
import { Home } from './components/home'
import { About } from './components/about'
import { Projects } from './components/projects'
import { Contact } from './components/contact'
import { Experience } from './components/experience';
import { Skills } from './components/skills';
import { LoadingScreen } from './components/loading';
import { ScrollToTopButton } from './components/scrollToTop';
import { BackgroundAnimation } from './components/background';
import { useEffect, useState } from 'react';

function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);


  return (
    loading ? <LoadingScreen /> :
        <div className="App">
          <Navbar ></Navbar>
          <Home></Home>
          <About></About>
          <Skills></Skills>
          <Experience></Experience>
          <Projects></Projects>
          <Contact></Contact>
          <ScrollToTopButton></ScrollToTopButton>
        </div>
  );
}

export default App;
