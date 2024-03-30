import React from 'react';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
// import Introduction from './pages/Introduction';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
// import Footer from './components/Footer';
import Home from './pages/Home';
// import Skills from './components/About';
import About from './pages/About';

function App() {
  return (
    <>
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router></>
  );
}

export default App;

