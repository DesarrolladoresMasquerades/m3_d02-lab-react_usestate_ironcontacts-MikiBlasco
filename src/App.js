import './App.css';
import contactList from "./contacts.json"

import { useState } from 'react';

const restContacts = [...contactList];
const initAgenda = restContacts.splice(0,5)

function App() {

 const [contacts, setContacts] = useState(initAgenda)

 function addRandom(e){
   const random = (Math.floor(Math.random()*restContacts.length))
   const randomContact = restContacts.splice(random, 1);
   //setContacts(contacts.push(randomContact))
   setContacts(contacts.concat(randomContact))
 }

 function sortByName(e){
  console.log("button clicked")
  const sortedByName = contacts.slice().sort((el1, el2)=>{
    if(el1.name < el2.name) return -1;
    if(el1.name > el2.name) return 1;
    return 0;
  })
  console.log(sortedByName);
  setContacts(sortedByName)
}

function sortByPop(e){
  console.log("button clicked")
  const sortedByPop = contacts.slice().sort((el1, el2)=>{
    return (el2.popularity - el1.popularity);
  })
  console.log(sortedByPop);
  setContacts(sortedByPop)
}

function deleteContact(id){
  const deletedOne = contacts.filter((el) => {
    return el.id !==id
  })

  setContacts(deletedOne)

}

  return (
  <div className="App">

    <button onClick={addRandom}> Add Random Contact </button>
    <button onClick={sortByName}> Sort by Name </button>
    <button onClick={sortByPop}> Sort by Popularity </button>


    <table>
     <tbody>
      <tr>
        <th>Picture</th>
        <th>Name</th>
        <th>Popularity</th>
        <td>Won Oscar</td>
        <td>Won Emy</td>

      </tr>
   </tbody>
  <tbody>
    {contacts.map(el => {
    return (
    <tr key={el.id}>
    <td><img src={el.pictureUrl} alt="" srcset="" className="picture"/ ></td>
    <td>{el.name}</td>
    <td>{el.popularity}</td>
    <td>{el.wonOscar ? <p>🏆</p> : <p></p>}</td>
    <td>{el.wonEmmy ? <p>🏆</p> : <p></p>}</td>
    <td> <button onClick={()=>deleteContact(el.id)}> Delete </button></td>
    </tr>
    )
    })}

  </tbody>

</table>
    </div>
  );
}

export default App;
