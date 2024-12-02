import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import PersonalInfo from './components/PersonalInfo';
import Projects from './components/Projects';
import Footer from './footer/Footer';
import './App.css'; // Import the CSS file
import About from './components/About';

const App = () => {
  return (
    <Router>
      <ul className="background">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <div className="gradient-overlay" /> {/* Optional: Animated gradient overlay */}
      <div className="container"> {/* Wrap content in a container */}
        <Navbar />
        <Routes>
          <Route path="/" element={<PersonalInfo />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer className="footer" />
      </div>
    </Router>
  );
};

export default App;
