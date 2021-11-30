import './App.css';
import { useState } from "react";
import contactsData from './contacts.json'

const remainingContacts = [...contactsData]
const fiveFirst = remainingContacts.splice(0,5)

function App() {
  const [agenda, setAgenda] = useState(fiveFirst)

  const addContact = ()=>{
    const randomIndex = Math.floor(Math.random() * remainingContacts.length)
    const randomContact = remainingContacts.splice(randomIndex, 1)
  
    setAgenda(agenda.concat(randomContact))
    //setAgenda([...agenda, randomContact]) Otra manera de hacerlo
  }
  const sortByName = ()=>{
    const agendaSorted = agenda.sort((a,b)=>a.name > b.name ? 1 : -1)
    console.log(agendaSorted)
    setAgenda([...agendaSorted])
  }

  const sortByPopularity = ()=>{
    const popularitySorted = agenda.sort((a,b)=>a.popularity < b.popularity ? 1 : -1)
    console.log(popularitySorted)
    setAgenda([...popularitySorted])
  }
  const deleteContact = (idContact) =>{
    console.log("idContact",idContact)
    const filteredContacts = agenda.filter(contact => {
      console.log("----->",contact.id)
      return contact.id !== idContact
    })
    console.log(filteredContacts)
    setAgenda(filteredContacts)
  }

  return (
    <>
      <h1>IRONCONTACTS</h1>
      <button onClick={addContact}>Add Contact</button>
      <button onClick={sortByName}>Sort by Name</button>
      <button onClick={sortByPopularity}>Sort by Popularity</button>
      <div className="App">
       <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won an Oscar</th>
            <th>Won an Emmy</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
        {agenda.map((contact)=>{

          return (
            <tr key={contact.id}>
                <td><img src={contact.pictureUrl} alt={contact.name} width="100px" height="150px"/></td>
                <td>{contact.name}</td>
                <td>{contact.popularity.toFixed(2)}</td>
                <td>{contact.wonOscar && "🏆"}</td>
                <td>{contact.wonEmmy && "🏆"}</td>
                <td><button onClick={() => deleteContact(contact.id)}>Delete</button></td>
            </tr>
          )
        })}  
        </tbody>
       </table>
      </div>
    </>  
  );
}

export default App;
