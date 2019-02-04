import ReactDOM from 'react-dom';
import './index.css';
import React, { useState } from 'react'

const Title = () => {
  return (
    <h1>Puhelinluettelo</h1>
  );
}

const FilterForm = (props) => {
  return (
    <div>
      Etsi:
        <input 
            value={props.search}
            onChange={props.handleSearch}
        />
    </div>
  );
}

const PersonForm = (props) => {
  return (
    <div>
      <h2>Lisää uusi</h2>
      <form onSubmit={props.addNew}>
        <div>
          nimi: 
          <input 
            value={props.newName}
            onChange={props.handleNewName}
          />
        </div>
        <div>
          puhelinnumero:
        <input 
            value={props.newNumber}
            onChange={props.handleNewNumber}
          />
        </div>
        <div>
          <button type='submit'>lisää</button>
        </div>
      </form>
    </div>
  );
}

const People = (props) => {
  const personList = props.persons.map((person) =>
    <li key={person.name}>
      {person.name} {person.number}
    </li>
  );
  return (
    <div>
      <h2>Numerot</h2>
      <ul>{personList}</ul>
    </div>
  )
}

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Some Name', number: '050-1234567' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ search, setNewSearch ] = useState('')
  
  const handleSearch = (event) => {   
    setNewSearch(event.target.value)
  }

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

  return (
    <div>
      <Title />
      <FilterForm search={search} setNewSearch={setNewSearch} />
      <PersonForm newName={newName} 
                  newNumber={newNumber} 
                  handleNewName={handleNewName} 
                  handleNewNumber={handleNewNumber} />
      <People persons={persons}/>
    </div>
  )

}

ReactDOM.render(<App />, document.getElementById('root'))

