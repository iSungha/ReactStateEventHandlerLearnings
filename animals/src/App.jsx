import { useState } from "react";
import AnimalShow from "./AnimalShow.jsx";
import "./CSS/App.css"

//Get a random animal from animals array and return it
const getRandomAnimal = () => {
    const animals = ['cat','dog', 'gator', 'bird', 'horse','cow'];
    const randomIndexForAnimalArray  = Math.floor(Math.random() * animals.length);
    return animals[randomIndexForAnimalArray]; 
};

const App = () => {
    //   Initialize state with useState, useState call returns an array: [stateValue, updaterFunction] 
    //   const state = useState(0);               

    //   Destructure state value and updater function
    //   const count = state[0];                  The current state value
    //   const setCount = state[1];               The function to update the state

    // const [count, setCount] = useState(0);

    // const handleClick = () => {
    //     setCount(count + 1);
    //     console.log(count);
    //};
    /*
    * Two common type of events we usually end up using are 
    * onClick and onChange (user type in a text input)
    * note : in react we do not call function like functionName () in  <button onclick="activateLasers()">, we pass reference like <button onClick={activateLasers}>.   
    */
    //    First one logs the funtion while second one calls it.
    //    console.log(handleClick);
    //    console.log(handleClick());

    const [animals, setAnimal] = useState([]);

    const handleClick = () => {
      setAnimal([...animals,getRandomAnimal()]);
    };
    
    const renderedListOfAnimals = animals.map(
        (animal, i)=>{
        return <AnimalShow  name = {animal} key = {i}/>
        }
    );
    return (
        <div className="app">
            <button onClick={handleClick}>Add Animals</button>
            <div className="animalList">{renderedListOfAnimals}</div>
        </div>
    );
}
export default App;