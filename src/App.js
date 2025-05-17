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

// Initialize Google Analytics with enhanced measurement and cookie settings
const gaOptions = {
  debug: process.env.NODE_ENV === 'development',
  gaOptions: {
    // Disable automatic cookie configuration
    storage: 'none',
    storeGac: false,
    // Use session storage instead of cookies
    clientId: window.localStorage.getItem('ga_clientId') || null,
    // Disable features that require cookies
    allowAdFeatures: false,
    allowAdPersonalizationSignals: false,
    // Disable advertising features
    restrictDataProcessing: true,
    // Use server-side tagging if available
    sendPageView: true
  },
  gtagOptions: {
    // Disable advertising features
    allow_google_signals: false,
    allow_ad_personalization_signals: false,
    // Disable advertising features that require cookies
    anonymize_ip: true,
    // Use minimal data collection
    send_page_view: true
  }
};

// Only initialize in production
if (process.env.REACT_APP_GA_MEASUREMENT_ID) {
  ReactGA.initialize(process.env.REACT_APP_GA_MEASUREMENT_ID, gaOptions);
  
  // Set a client ID if one doesn't exist
  if (!window.localStorage.getItem('ga_clientId')) {
    const clientId = Math.random().toString(36).substring(2) + Date.now().toString(36);
    window.localStorage.setItem('ga_clientId', clientId);
  }
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
