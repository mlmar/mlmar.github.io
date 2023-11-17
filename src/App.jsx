import './App.css'
import About from './components/About';
import Projects from './components/Projects';
import Education from './components/Education';

const App = () => {
  return (
    <main className="app">
      <About/>
      <Education/>
      <Projects/>
    </main>
  )
}

export default App
