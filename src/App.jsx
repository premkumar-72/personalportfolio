import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar1 from './navbar';
import Home from './home';
import About1 from './about';
import Skills from './skills';
import Project from './project';
import Contact from './contact';

 

function App() {
  return (
    <BrowserRouter>
      <Navbar1 />
   {/* <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About1 />} />
  <Route path="/skills" element={<Skills />} />
  <Route path="/project" element={<Project />} />
</Routes> */}

      <Home/>
      <About1/>
      <Skills/>
      <Project/>
      <Contact/>
    </BrowserRouter>
  
  );
}

export default App;