import ReactDOM from 'react-dom';
import './index.css';
import React, { useState, useEffect } from 'react'
import personService from './services/persons'

const Title = () => {
  return (
    <h1>Puhelinluettelo</h1>
  );
}

const Message = (props) => {
  if (props.message === null) {
    return null
  }
  return (
    <div className='message'>
      {props.message}
    </div>
  );
}

const ErrorMessage = (props) => {
  if (props.message === null) {
    return null
  }
  return (
    <div className='error'>
      {props.message}
    </div>
  );
}

const People = (props) => {
  const handleDelete = (event) => {
    console.log(event.target.value)
    personService
      .deleteOne(event.target.value)
  }

  const personList = props.persons.map((person) =>
    <li key={person.name}>
      {person.name} {person.number} 
      <button value={person.id} onClick={handleDelete}>poista</button>
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
  const [ persons, setPersons] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ search, setNewSearch ] = useState('')
  const [ message, setMessage ] = useState(null)
  const [ errorMessage, setErrorMessage ] = useState(null)
  
  const help = useEffect(() => {
    personService
      .getAll()
      .then(response => {
        setPersons(response.data)
      })
  }, [])

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
      setErrorMessage(          
        newName + ' on jo luettelossa'        
      )        
      setTimeout(() => {          
        setErrorMessage(null)        
      }, 5000)
    } else {
      const personObject = {
        name: newName,
        number: newNumber
      }
      personService
        .create(personObject)
        .then(response => {
          setPersons(persons.concat(personObject))
        })
      setMessage(
        newName + ' lisätty'
      ) 
      setTimeout(() => {          
        setMessage(null)        
      }, 5000)
    }
    setNewName('')
  }

  return (
    <div>
      <Title />
      <Message message={message} />
      <ErrorMessage message={errorMessage} />
        Etsi:
        <input 
            value={search}
            onChange={handleSearch}
        />
      <h2>Lisää uusi</h2>
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
          <button type='submit'>lisää</button>
        </div>
      </form>
      <People persons={persons}/>
    </div>
  )

}

ReactDOM.render(<App />, document.getElementById('root'))

