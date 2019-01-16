import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ handleClick, text }) => (  
  <button onClick={handleClick}>    
    {text}  
  </button>
)

const Statistic = ({ text, value, text2 }) => {
  return(
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const Statistics = ({ good, bad, neutral }) => {
  const amount = good+bad+neutral
  if (amount === 0) {
    return (
      <p>Ei yhtään palautetta annettu</p>
    )
  }
  const average = (good+bad*(-1))/amount
  const positive = good/amount*100
  return (
    <div>
      <table>
        <tbody>
          <Statistic text="hyvä" value={good}/>
          <Statistic text="neutraali" value={neutral}/>
          <Statistic text="huono" value={bad}/>
          <Statistic text="yhteensä" value={amount}/>
          <Statistic text="keskiarvo" value={average}/>
          <Statistic text="positiivisia" value={positive + " %"}/>
        </tbody>
      </table>
    </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const setGoodValue = (newValue) => {
    setGood(good+1)
  }

  const setNeutralValue = (newValue) => {
    setNeutral(neutral+1)
  }

  const setBadValue = (newValue) => {
    setBad(bad+1)
  }

  return (
    <div>
      <h1>anna palautetta</h1>
      <Button handleClick={setGoodValue} text="hyvä"/>
      <Button handleClick={setNeutralValue} text="neutral"/>
      <Button handleClick={setBadValue} text="bad"/>
      <h1>statistiikka</h1>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
