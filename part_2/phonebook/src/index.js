import ReactDOM from 'react-dom';
import './index.css';
import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '050-1234567' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')

  const handleNewName = (event) => {   
    setNewName(event.target.value)  
  }

  const handleNewNumber = (event) => {   
    setNewNumber(event.target.value)  
  }

  const addNew = (event) => {
    event.preventDefault()
    if (persons.some(e => e.name === newName)) {
      alert('${newName} on jo luettelossa')
    } else {
      const personObject = {
        name: newName,
        number: newNumber
      }
      setPersons(persons.concat(personObject))
    }
    setNewName('')
  }

  const personList = persons.map((person) =>
    <li key={person.name}>
      {person.name} {person.number}
    </li>
  );

  return (
    <div>
      <h2>Puhelinluettelo</h2>
      <form onSubmit={addNew}>
        <div>
          nimi: 
          <input 
            value={newName}
            onChange={handleNewName}
          />
        </div>
        <div>
          puhelinnumero:
        <input 
            value={newNumber}
            onChange={handleNewNumber}
          />
        </div>
        <div>
          <button type="submit">lisää</button>
        </div>
      </form>
      <h2>Numerot</h2>
      <ul>{personList}</ul>
    </div>
  )

}

ReactDOM.render(<App />, document.getElementById('root'))

