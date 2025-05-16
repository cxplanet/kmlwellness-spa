import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import ReactGA from 'react-ga4';
import Navbar from './components/NavBar';
import About from './components/About';
import Services from './components/Services';
import Yoga from './components/Yoga';
import Home from './components/Home';
import Coaching from './components/Coaching';
import MenoQuiz from './components/MenoQuiz';

// Initialize Google Analytics
if (process.env.NODE_ENV === 'production') {
  ReactGA.initialize(process.env.REACT_APP_GA_MEASUREMENT_ID);
}

// Component to track page views
const PageViewTracker = () => {
  const location = useLocation();

  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      // Track pageview
      ReactGA.send({ 
        hitType: 'pageview', 
        page: location.pathname + location.search,
        title: document.title
      });
    }
  }, [location]);

  return null;
};

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <PageViewTracker />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/coaching" element={<Coaching />} />
          <Route path="/services" element={<Services />} />
          <Route path="/yoga" element={<Yoga />} />
          <Route path="/quiz" element={<MenoQuiz />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
