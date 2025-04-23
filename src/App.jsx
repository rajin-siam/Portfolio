import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home'
import Projects from './components/Projects'
import ProblemSolving from "./components/ProblemSolving";
import Contact from './components/Contact'
import Footer from './components/Footer';
import fetchCodeforcesSolved from "./services/fetchCodeforcesSolved"
import { fetchLeetCodeSolved } from './services/fetchLeetCodeSolved'

fetchCodeforcesSolved("rajin_siam") 
fetchLeetCodeSolved("rajinsiam9")


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
