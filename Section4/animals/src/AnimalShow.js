import './AnimalShow.css';
import { useState } from 'react';

// Import our animal images
import bird from './svg/bird.svg';
import cat from './svg/cat.svg';
import cow from './svg/cow.svg';
import dog from './svg/dog.svg';
import gator from './svg/gator.svg';
import heart from './svg/heart.svg';
import horse from './svg/horse.svg';

// Map our images to an object
const svgMap = {
    bird,
    cat,
    cow,
    dog,
    gator,
    horse
};

/*
    AnimalShow Component
*/
function AnimalShow({ type })
{
    // Define a piece of state clicks with default value of 0
    // 'clicks' can be thought of as an integer here
    const [clicks, setClicks] = useState(0);

    // Event Handler for when a user clicks on an image of an animal
    // to make the heart grow larger
    const handleClick = () => {
        setClicks(clicks + 1);
    };

   return ( 
        <div className='animal-show' onClick={handleClick}>
            <img className='animal' src={svgMap[type]} alt={type} height="200px"/>
            <img 
                className='heart'
                alt="heart" 
                src={heart}
                style={{ width: 10 + 10 * clicks + 'px' }} 
            />
        </div>
   );
}

export default AnimalShow;