import React from 'react';
import './App.css';

function App() {
  const handleGetStarted = () => {
    window.location.href = '#plants';
  };

  return (
    <div className="landing-page">
      <h1>Paradise Nursery</h1>
      <p>
        Welcome to Paradise Nursery, your destination for beautiful
        houseplants. Discover the perfect plants to bring nature into
        your home.
      </p>
      <button
        className="get-started-button"
        onClick={handleGetStarted}
      >
        Get Started
      </button>
    </div>
  );
}

export default App;
