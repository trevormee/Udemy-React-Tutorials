import React, { useState } from 'react';


function App()  {
    
    const [counter, setCount] = useState(0);

    const handleClick = () => {
        setCount(counter + 1);
    };

    return ( 
        <div>
            <button onClick={handleClick}>Add Animal</button>
            <p>Times clicked {counter}</p>
        </div>
    );
}
export default App;