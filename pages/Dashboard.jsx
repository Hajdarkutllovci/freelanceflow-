import React, { useState } from 'react';

function Dashboard() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  const toggleTimer = () => {
    setRunning(!running);
    if (!running) {
      const start = Date.now() - time;
      const interval = setInterval(() => {
        setTime(Date.now() - start);
      }, 1000);
      localStorage.setItem('intervalId', interval);
    } else {
      clearInterval(localStorage.getItem('intervalId'));
    }
  };

  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      <p>Tracked Time: {Math.floor(time / 1000)}s</p>
      <button onClick={toggleTimer}>{running ? 'Stop' : 'Start'} Timer</button>
    </div>
  );
}

export default Dashboard;