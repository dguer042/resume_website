import React from 'react';
import './App.css';
import Hero from './components/hero';
import Skills from './components/skills';
import Projects from './components/projects';
import Interests from './components/interests';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Hero/>
      <Skills/>
      <Projects/>
      <Interests/>
      <Footer/>
    </div>
  );
}
export default App;

