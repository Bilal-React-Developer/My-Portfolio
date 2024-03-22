import React from 'react';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Introduction from './pages/Introduction';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
// import About from './pages/About';
import Footer from './components/Footer';
import Home from './pages/Home';

function App() {
  return (
    <>
    {/* <Navbar/> */}
    {/* <Home/> */}
    {/* <Introduction/> */}
    {/* <Projects/> */}
    {/* <Contact/> */}
    {/* <Footer/> */}
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/introduction" element={<Introduction />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer/>
      </div>
    </Router></>
  );
}

export default App;

