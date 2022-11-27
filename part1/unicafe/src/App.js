import { useState } from "react";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h1>give feedback</h1>
      <div>
        <Button title="good" onClick={() => setGood(good + 1)} />
        <Button title="neutral" onClick={() => setNeutral(neutral + 1)} />
        <Button title="bad" onClick={() => setBad(bad + 1)} />
      </div>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

const Button = ({ title, onClick }) => {
  return <button onClick={onClick}>{title}</button>;
};

const Statistics = (props) => {
  const { good, neutral, bad } = props;
  const total = good + neutral + bad;
  const average = (good - bad) / total || 0;
  const positivePercentage = (good / total) * 100 || 0;

  if (good || neutral || bad) {
    return (
      <div>
        <h1>statistics</h1>
        <table>
          <tbody>
            <StatisticLine text="good" value={good} />
            <StatisticLine text="neutral" value={neutral} />
            <StatisticLine text="bad" value={bad} />
            <StatisticLine text="all" value={total} />
            <StatisticLine text="average" value={average} />
            <StatisticLine text="positive" value={positivePercentage + " %"} />
          </tbody>
        </table>
      </div>
    );
  } else {
    return (
      <>
        <h1>statistics</h1>
        <p>No feedback given</p>
      </>
    );
  }
};

const StatisticLine = ({ text, value }) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
);

export default App;
