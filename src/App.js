import './App.css';
import { useState } from 'react';

function App() {
  const [numDevelopers, setNumDevelopers] = useState(10);
  const [avgCompensation, setAvgCompensation] = useState("120,000");
  const [avgWorkHours, setAvgWorkHours] = useState(2000);
  const [percentCodingTime, setPercentCodingTime] = useState(40);
  const [timeSavedPerTask, setTimeSavedPerTask] = useState(55);

  const safeValue = (value) => {
    return isNaN(value) ? 0 : value;
  };

  const formatAvgCompensation = (value) => {
    const numValue = parseInt(value.replace(/,/g, ''), 10);
    if (isNaN(numValue)) return ""; 
    return numValue.toLocaleString(); 
  };

  const commaAdd = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  const handleInputChange = (value, setter, formatFunction) => {
    if (formatFunction) {
      setter(formatFunction(value));
    } else {
      setter(Math.max(0, value)); 
    }
  }

  const numAvgCompensation = safeValue(parseInt(avgCompensation.replace(/,/g, ''), 10));
  const hoursSaved = Math.round(safeValue(numDevelopers * avgWorkHours * (percentCodingTime/100) * (timeSavedPerTask/100)));
  const moneySaved = Math.round(safeValue(numAvgCompensation / avgWorkHours * hoursSaved));
  const copilotCost = numDevelopers === 1 ? numDevelopers * 10 * 12 : numDevelopers * 19 * 12;
  const roi = moneySaved - copilotCost;

  return (
    <div className="App">
      <header className="App-header">
        <p className="large">
          Copilot ROI Calculator
        </p>
        <p className="small" id="subheader">
          Find out your potential annual savings with GitHub Copilot
        </p>

        <div className="container">
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

        <div className="container" id="output-container">
          <p className="full-width medium">
            Total savings
          </p>

          <div className="output-group full-width" id="hours-saved">
            <p className="left small">Time saved</p>
            <p className="right small">{commaAdd(hoursSaved)} hours / year</p>
          </div>

          <div className="output-group full-width" id="money-saved">
            <p className="left small">Money saved</p>
            <p className="right small">${moneySaved.toLocaleString()} / year</p>
          </div>

          <div className="output-group full-width" id="copilot-pricing">
            {
              numDevelopers === 1 ? (
                <p className="left small">Copilot for Individuals ($10 / month)</p>
              ) : (
                <p className="left small">Copilot for Business ($19 / user / month)</p>
              )
            }
            <p className="right small">${copilotCost.toLocaleString()} / year</p>
          </div>

          <div className="output-group full-width" id="money-saved">
            <p className="left small">Return on investment</p>
            <p className="right small">${roi.toLocaleString()} / year</p>
          </div>

          <div className="button-row full-width">
            <a href="https://github.com/github-copilot/signup" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                <button className="btn-secondary">Start a free trial</button>
            </a>
            <a href="https://github.com/settings/copilot" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                <button className="btn-secondary">Request Copilot</button>
            </a>
            <a href="https://github.com/github-copilot/business_signup" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                <button className="btn-primary">Buy Copilot for Business</button>
            </a>
          </div>

        </div>

      </header>
    </div>
  );
}

export default App;
