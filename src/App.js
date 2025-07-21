import './App.css';

function App() {
  return (
    <div className="App" style={{ textAlign: 'center', padding: '40px', fontFamily: 'Arial' }}>
      <h1>🌙 Welcome to Your Self-Hypnosis Studio</h1>
      <p>Relax. Breathe. When you're ready, click below to begin building your custom session.</p>
      <button 
        onClick={() => alert("Session builder coming soon!")} 
        style={{ padding: '15px 30px', fontSize: '18px', borderRadius: '10px', backgroundColor: '#4CAF50', color: 'white', border: 'none' }}
      >
        Start My Session
      </button>
    </div>
  );
}

export default App;
