import React, { useState } from 'react';

function StartSession() {
  const [goal, setGoal] = useState('');
  const [duration, setDuration] = useState('');
  const [tone, setTone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`🎯 Goal: ${goal}\n⏱ Duration: ${duration} minutes\n🎭 Tone: ${tone}\n\n✅ Next: Call OpenAI and ElevenLabs`);
    // TODO: Replace alert with API call to generate script + audio
  };

  return (
    <div
      style={{
        maxWidth: '600px',
        margin: '0 auto',
        fontFamily: 'Arial',
        padding: '2rem',
        backgroundColor: '#f9f9f9',
        borderRadius: '12px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
      }}
    >
      <h2>🌀 Build Your Custom Session</h2>
      <form onSubmit={handleSubmit}>

        {/* Goal */}
        <div style={{ marginBottom: '1.5rem' }}>
          <label><strong>What’s your goal?</strong></label><br />
          <select
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
            required
            style={{
              width: '100%',
              padding: '12px',
              fontSize: '16px',
              borderRadius: '6px',
              border: '1px solid #ccc',
              marginTop: '8px',
              boxSizing: 'border-box'
            }}
          >
            <option value="">-- Select --</option>
            <option value="Sleep">Sleep 😴</option>
            <option value="Reduce Stress">Reduce Stress 😌</option>
            <option value="Confidence Boost">Confidence Boost 💪</option>
            <option value="Focus & Clarity">Focus & Clarity 🧠</option>
          </select>
        </div>

        {/* Duration */}
        <div style={{ marginBottom: '1.5rem' }}>
          <label><strong>How long should it be?</strong></label><br />
          <select
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            required
            style={{
              width: '100%',
              padding: '12px',
              fontSize: '16px',
              borderRadius: '6px',
              border: '1px solid #ccc',
              marginTop: '8px',
              boxSizing: 'border-box'
            }}
          >
            <option value="">-- Select --</option>
            <option value="3">3 minutes</option>
            <option value="5">5 minutes</option>
            <option value="10">10 minutes</option>
          </select>
        </div>

        {/* Tone */}
        <div style={{ marginBottom: '1.5rem' }}>
          <label><strong>What emotional tone do you prefer?</strong></label><br />
          <select
            value={tone}
            onChange={(e) => setTone(e.target.value)}
            required
            style={{
              width: '100%',
              padding: '12px',
              fontSize: '16px',
              borderRadius: '6px',
              border: '1px solid #ccc',
              marginTop: '8px',
              boxSizing: 'border-box'
            }}
          >
            <option value="">-- Select --</option>
            <option value="Peaceful & Neutral">Peaceful & Neutral 🌿</option>
            <option value="Warm & Nurturing">Warm & Nurturing 💗</option>
            <option value="Firm & Empowering">Firm & Empowering 🔥</option>
          </select>
        </div>

        <button 
          type="submit"
          style={{
            padding: '12px 24px',
            fontSize: '16px',
            backgroundColor: '#4CAF50',
            color: '#fff',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer'
          }}
        >
          Generate My Session
        </button>
      </form>
    </div>
  );
}

export default StartSession;
