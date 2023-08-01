import './App.css';
import { useState } from 'react';

function App() {
  const [numDevelopers, setNumDevelopers] = useState(10);
  const [avgCompensation, setAvgCompensation] = useState("120,000");
  const [avgWorkHours, setAvgWorkHours] = useState(2000);
  const [percentCodingTime, setPercentCodingTime] = useState(40);
  const [timeSavedPerTask, setTimeSavedPerTask] = useState(55);

  const formatAvgCompensation = (value) => {
    const numValue = parseInt(value.replace(/,/g, ''), 10);
    if (isNaN(numValue)) return ""; 
    return numValue.toLocaleString(); 
  };

  const handleInputChange = (value, setter, formatFunction) => {
    if (formatFunction) {
      setter(formatFunction(value));
    } else {
      setter(Math.max(0, value)); 
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <p className="large">
          Copilot ROI Calculator
        </p>
        <p className="small" id="subheader">
          Find out your potential annual savings with GitHub Copilot
        </p>
        <div className="input-container">
          <div className="input-group">
            <label htmlFor="num-developers" className="small-bold">Number of developers</label>
            <input
              type="number"
              className="input-fields overlay-input"
              id="num-developers"
              value={numDevelopers}
              onChange={(e) => handleInputChange(parseInt(e.target.value), setNumDevelopers)}
              autoComplete="off"
            />
          </div>

          <div className="input-group">
            <label htmlFor="avg-compensation" className="small-bold">Average developer cost / year</label>
            <div className="input-overlay small">
              <span className="input-symbol">$</span>
              <input
                type="text"
                className="input-fields overlay-input"
                id="avg-compensation"
                value={avgCompensation}
                onChange={(e) => handleInputChange(e.target.value, setAvgCompensation, formatAvgCompensation)}
                autoComplete="off"
              />
            </div>
          </div>

          <div className="input-group">
            <label htmlFor="avg-work-hours" className="small-bold">Average working hours / year</label>
            <input
              type="number"
              className="input-fields overlay-input"
              id="avg-work-hours"
              value={avgWorkHours}
              onChange={(e) => handleInputChange(parseInt(e.target.value), setAvgWorkHours)}
              autoComplete="off"
            />
          </div>

          <div className="input-group">
            <label htmlFor="percent-coding-time" className="small-bold">Percentage of time coding</label>
            <div className="input-overlay small">
              <input
                type="number"
                className="input-fields overlay-input"
                id="percent-coding-time"
                value={percentCodingTime}
                onChange={(e) => handleInputChange(parseInt(e.target.value), setPercentCodingTime)}
                autoComplete="off"
              />
              <span className="input-symbol right">%</span>
            </div>
          </div>

          <div className="input-group full-width" id="time-saved">
            <label htmlFor="time-saved-per-task" className="small-bold">Time saved per task <span className="small">(55% average)</span></label>
            <div className="input-overlay small">
              <input
                type="number"
                className="input-fields overlay-input percent-input"
                id="time-saved-per-task"
                value={timeSavedPerTask}
                onChange={(e) => handleInputChange(parseInt(e.target.value), setTimeSavedPerTask)}
                autoComplete="off"
              />
              <span className="input-symbol right">%</span>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
