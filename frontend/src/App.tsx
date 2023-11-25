import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import LandingPage from './pages/LandingPage';
import MariaPage from './pages/MariaPage';
// Import other components you want to route to

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/maria" element={<MariaPage />} />
          {/* Define other routes here */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
