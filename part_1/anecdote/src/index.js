import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Anecdote = ({ anecdote, votes }) => {

  return (
    <div>
      <p>{anecdote}</p>
      <p>has {votes || 0} votes</p>
    </div>
  )
}

const findMostVoted = (anecdotes, votes) => {
  let maxVotes = 0
  let highestVoted = anecdotes[0]
  for (let i = 0; i < anecdotes.length; i++) {
    if (votes[i] > maxVotes) {
      maxVotes = votes[i]
      highestVoted = anecdotes[i]
    }
  }
  return { highestVoted, maxVotes }
}

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState({})

  let max = props.anecdotes.length - 1
  let min = 0

  const handleClick = () => {
    setSelected(Math.floor(Math.random() * (max - min + 1)) + min)
    console.log(votes)
  }

  const handleVote = () => {
    const newVotes = { ...votes }
    const currentVotes = newVotes[selected] || 0
    newVotes[selected] = currentVotes + 1
    setVotes(newVotes)
  }

  const mostVoted = findMostVoted(anecdotes, votes)

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <Anecdote anecdote={anecdotes[selected]} votes={votes[selected]}/>
      <button onClick={handleVote}>vote</button>
      <button onClick={handleClick}>next anecdote</button>
      <h1>Anecdote with most votes</h1>
      <Anecdote anecdote={mostVoted.highestVoted} votes={mostVoted.maxVotes}/>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)