import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber] = useState('')
  const [ newSearch, setNewSearch] = useState('')

  // Add a person to the phonebook
  const addPerson =  (event) => {
    event.preventDefault()
    const newPerson = {
      name: newName,
      number: newNumber
    }
    if (persons.some(person => person.name === newName)) {
      // Alert user that person is already in the phonebook
      window.alert(`${newName} is already added to phonebook`)
    } else {
      //Update persons state
      setPersons(persons.concat(newPerson))
    }
    
    //Reset input box
    setNewName('')
    setNewNumber('')
  }

  // Event handler that synchronizes the changes made to the input with the component's state
  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleSearchChange = (event) => {
    setNewSearch(event.target.value)
  }

  const peopleToShow = !(newSearch === '') ? persons.filter(person => person.name.toLowerCase().includes(newSearch.toLowerCase())) : persons

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
          filter shown with <input value={newSearch} onChange={handleSearchChange}/>
      </div>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {peopleToShow.map(person => <p>{person.name}</p>)}
    </div>
  )
}

export default App