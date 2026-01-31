import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Hero />
        <About />
      </div>
    </>
  )
}

export default App
