import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/NavBar';
import About from './components/About';
import Services from './components/Services';
import Yoga from './components/Yoga';
import Home from './components/Home';
import BookOnline from './components/BookOnline';
import Coaching from './components/Coaching';

function App() {
  return (
      <Router>
          <div>
              <Navbar />
              <Routes>
                  <Route path="/about" element={<About />} />
                  <Route path="/coaching" element={<Coaching />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/yoga" element={<Yoga />} />
                  <Route path="/book-online" element={<BookOnline />} />
                  <Route path="/" element={<Home />} />
              </Routes>
          </div>
      </Router>
  );
}

export default App;
