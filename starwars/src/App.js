import React, {useState, useEffect} from 'react';
import './App.css';
import axios from "axios";
import Character from "./components/Character"; 

const App = () => {

  const [characterItems, setItems] = useState([]);
  // Try to think through what state you'll need for this app before 
  //starting. Then build out the state properties here.
  useEffect (() => {
    axios
    .get(`https://swapi.dev/api/people/`)
    .then(res =>{
      console.log ('this is res from App', res);
      setItems(res.data.results);
    })
    .catch(err =>{
      console.log("well.. shit", err)
    });
  }, []);


  // Fetch characters from the API in an effect hook. Remember, anytime
  // you have a side effect in a component, you want to think about which state
  // and/or props it should sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <div className ="CharacterList">
        {characterItems.map(person => (
         <Character
          key = {person.name}
          name ={person.name}
          birthYear = {person.birth_year}
          eyeColor = {person.eye_color}
          gender = {person.gender}
          //homeworld = {person.homeworld}
          //films = {person.films}
          
          /> 
        
        ))}
      </div>
    </div>
  );
};

export default App;
