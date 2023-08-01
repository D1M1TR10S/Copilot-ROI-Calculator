import './App.css';
import { useState } from 'react';

function App() {
  const [numDevelopers, setNumDevelopers] = useState(10);
  const [avgCompensation, setAvgCompensation] = useState(120000);
  const [avgWorkHours, setAvgWorkHours] = useState(2000);
  const [percentCodingTime, setPercentCodingTime] = useState(40);

  return (
    <div className="App">
      <header className="App-header">
        <p className="large">
          Copilot ROI Calculator
        </p>
        <p className="medium">
          Find out your annual hours and dollars saved with GitHub Copilot
        </p>
        <div className="input-container">
          <div className="input-group">
            <label htmlFor="num-developers" className="medium">Number of developers</label>
            <input
              type="number"
              id="num-developers"
              value={numDevelopers}
              onChange={(e) => setNumDevelopers(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label htmlFor="avg-compensation" className="medium">Average compensation per year</label>
            <input
              type="text"
              id="avg-compensation"
              value={`$${avgCompensation}`}
              onChange={(e) => setAvgCompensation(e.target.value.replace(/\D/, ''))}
            />
          </div>
          <div className="input-group">
            <label htmlFor="avg-work-hours" className="medium">Average annual work hours</label>
            <input
              type="number"
              id="avg-work-hours"
              value={avgWorkHours}
              onChange={(e) => setAvgWorkHours(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label htmlFor="percent-coding-time" className="medium">Percentage of time coding</label>
            <input
              type="text"
              id="percent-coding-time"
              value={`${percentCodingTime}%`}
              onChange={(e) => setPercentCodingTime(e.target.value.replace(/\D/, ''))}
            />
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
