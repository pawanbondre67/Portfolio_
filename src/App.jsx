import { useState , useEffect} from 'react';

import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Project from './components/projects/Project';


function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
  
    <div className={darkMode ? "dark-mode" : ""}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode}/>

      <main className="main" id='Main'>
      <Home/>
      <About/>
     <Skills/>
     <Project/>
    </main>
  </div>
  )
}

export default App
