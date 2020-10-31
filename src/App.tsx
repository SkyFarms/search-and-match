import React from 'react';

import './App.css';

import NavBar from 'components/NavBar';

import LandingPage from 'pages/LandingPage';

function App() {
  return (
    <div className="App">
      <NavBar />
      <LandingPage />
    </div>
  );
}

export default App;
