import './App.css'
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';
import GithubStats from './components/GithubStats.jsx';

function App() {
  return (
    <>
      <div className="container">
        <Hero />
        <About />
        <GithubStats />
        <Projects />
      </div>
    </>
  )
}

export default App
