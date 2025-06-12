import './App.css';
import { useState } from 'react';
import AnimalShow from './AnimalShow';

function getRandomAnimal() {
    const animals = ['bird', 'cat', 'cow', 'dog', 'gator', 'horse'];

    // Math.random() returns a decimal
    // Math.floor() rounds down to an integer value
    return animals[Math.floor(Math.random() * animals.length)]
}
console.log(getRandomAnimal());

function App()  {
    
    const [animals, setAnimals] = useState([]);
    
    const handleClick = () => {
        setAnimals([...animals, getRandomAnimal()]);
    };

    // When you call map, you take every element inside of the array,
    // and 1 by 1, you pass every element into a transformation function.
    // In this case, we are mapping each animal into the (animal, index)
    // arrow function
    // Ex: If you click the button once after restarting browser and the random animal
    // is cat, cat is passed to the 'animal' paramter and it will have an index of 1
    const renderedAnimals = animals.map((animal, index) => {
        return <AnimalShow type={animal} key={index} />
    });

    return ( 
        <div className='app'>
            <button onClick={handleClick}>Add Animal</button>
            <div className='animal-list'>
                Animls to show: {renderedAnimals}
            </div>
        </div>
    );
}
export default App;