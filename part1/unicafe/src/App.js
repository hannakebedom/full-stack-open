import React, { useState } from 'react'

const Button = ({onClick, text}) => {
  return (
    <button onClick = {onClick}>
      {text}
    </button>
  )
}

const Display = ({name, count}) => {
  return (
    <p>{name} {count}</p>
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
      <h1>statistics</h1>
      <Display name="good" count={good}/>
      <Display name="neutral" count={neutral}/>
      <Display name="bad" count={bad}/>
      <Display name="all" count={all}/>
      <Display name="average" count={average}/>
      <Display name="positive" count={positive}/>
    </div>
  )
}

export default App
