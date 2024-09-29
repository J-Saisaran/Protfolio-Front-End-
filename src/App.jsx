import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import PersonalInfo from './components/PersonalInfo';
import Projects from './components/Projects';
import Footer from './footer/Footer';
import './App.css'; // Import the CSS file

const App = () => {
  return (
    <Router>
      <div className="background" /> {/* Background image here */}
      <div className="gradient-overlay" /> {/* Optional: Animated gradient overlay */}
      <div className="container"> {/* Wrap content in a container */}
        <Navbar />
        <Routes>
          <Route path="/" element={<PersonalInfo />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
        <Footer className="footer" /> 
      </div>
    </Router>
  );
};

export default App;
