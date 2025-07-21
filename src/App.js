import React from 'react';
import { HashRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import StartSession from './StartSession';

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="App" style={{ textAlign: 'center', padding: '40px', fontFamily: 'Arial' }}>
      <h1>🌙 Welcome to Your Self-Hypnosis Studio</h1>
      <p>Relax. Breathe. When you're ready, click below to begin building your custom session.</p>
      <button
        onClick={() => navigate('/start-session')}
        style={{
          padding: '15px 30px',
          fontSize: '18px',
          borderRadius: '10px',
          backgroundColor: '#4CAF50',
          color: 'white',
          border: 'none',
          cursor: 'pointer',
          marginTop: '20px',
        }}
      >
        Start My Session
      </button>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/start-session" element={<StartSession />} />
      </Routes>
    </Router>
  );
}

export default App;
