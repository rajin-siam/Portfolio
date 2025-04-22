import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home'
import Projects from './components/Projects'
import ProblemSolving from "./components/ProblemSolving";
import Contact from './components/Contact'
import Footer from './components/Footer';
function App() {
  return (
    <>
      <Navbar/>
      <Home/>
      <Projects/>
      <ProblemSolving/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
