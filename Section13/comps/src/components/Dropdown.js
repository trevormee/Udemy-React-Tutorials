
import {useState, useEffect, useRef} from 'react';
import { GoChevronDown } from 'react-icons/go';
import Panel from './Panel';

// Dropdown component that takes in the colors options, the selection (value),
// and handleSelect() function from DropdownPage
function Dropdown({ options, value, onChange }) {

    // 'isOpen' piece of state (like a boolean) to check if the dropdown is open
    const [isOpen, setIsOpen] = useState(false);
    
    // create an element to access/manipulate specific DOM elements
    const divElement = useRef();

    useEffect(() => {
        const handler = (event) => {

            // Simple check to see if we even have a reference to an element
            // If we removed 'ref={divElement}' from our return statement,
            // this useEffect function would exit here
            if(!divElement.current){
                return;
            }

            // Closes the dropdown if we click outside of the dropdown 
            if(!divElement.current.contains(event.target)){
                setIsOpen(false);
            }
        };

        document.addEventListener('click', handler, true);

        // Clean Up Function when our dropdown is abt to removed from the screen
        return () => {
            document.removeEventListener('click', handler);
        };
    }, []);

    // Event handler to close the dropdown options 
    const handleClick = () => {
        // Close Dropdown
        setIsOpen(!isOpen);
    };

    // Event handler to close the dropdown after a user selects an item,
    // 
    const handleOptionClick = (option) => {
        // Close the dropdown
        setIsOpen(false);
        // What option did the user click on?
        onChange(option);
    };
    
    const renderedOptions = options.map((option) => {
        return <div className='hover:bg-sky-100 rounded cursor-pointer p-1' onClick={() => handleOptionClick(option)} key={option.value}>
            {option.label}
        </div>
    });

    
    return (
        <div ref={divElement} className='w-48 relative'>
            <Panel className='flex justify-between items-center cursor-pointer'
                 onClick={handleClick}>

                {/* If selection is null, output 'Select...', else output the color*/}
                {value?.label || 'Select...'}   
                <GoChevronDown className='text-lg'/>
            </Panel>
            {isOpen && (
                <Panel className='absolute top-full'>
                    {renderedOptions}
                </Panel>
            )}
        </div>
    )
}

export default Dropdown;