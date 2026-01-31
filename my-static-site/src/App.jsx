import { useState } from 'react'
import './App.css'
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';

function App() {
  return (
    <>
      <div>
        <Hero />
        <About />
        <Projects />
      </div>
    </>
  )
}

export default App
