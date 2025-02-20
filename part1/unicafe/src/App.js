import React, { useState } from 'react'

const Button = ({onClick, text}) => {
  return (
    <button onClick = {onClick}>
      {text}
    </button>
  )
}

const StatisticLine = ({name, count}) => {
  return (
    <p>{name} {count}</p>
  )
}

const Statistics = ({good, neutral, bad, all, average, positive}) => {
  if (all === 0) {
    return (
      <>
      <h1>statistics</h1>
      <p>No feedback given</p>
      </>
    )
  }
  console.log("here!")
  return (
    <>
    <h1>statistics</h1>
    <StatisticLine name="good" count={good}/>
    <StatisticLine name="neutral" count={neutral}/>
    <StatisticLine name="bad" count={bad}/>
    <StatisticLine name="all" count={all}/>
    <StatisticLine name="average" count={average}/>
    <StatisticLine name="positive" count={positive}/>
    </>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [sum, setSum] = useState(0)
  const all = good + neutral + bad
  const average = sum / all
  const positive = good / all

  const increaseGood = () => {
    setGood(good + 1)
    setSum(sum + 1)
  }

  const increaseNeutral = () => {
    setNeutral(neutral + 1)
    setSum(sum + 0)
  }

  const increaseBad = () => {
    setBad(bad + 1)
    setSum(sum - 1)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={increaseGood} text="good"/>
      <Button onClick={increaseNeutral} text="neutral"/>
      <Button onClick={increaseBad} text="bad"/>
      <Statistics good={good} neutral={neutral} bad={bad} sum={sum} all={all} average={average} positive={positive}/>
    </div>
  )
}

export default App
