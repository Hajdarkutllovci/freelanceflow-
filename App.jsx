import React from 'react';
import Dashboard from './pages/Dashboard';
import Projects from './pages/Projects';
import './style.css';

function App() {
  return (
    <div className="app">
      <h1>FreelanceFlow</h1>
      <Dashboard />
      <Projects />
    </div>
  );
}

export default App;