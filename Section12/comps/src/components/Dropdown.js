
import {useState, useEffect, useRef} from 'react';
import { GoChevronDown } from 'react-icons/go';
import Panel from './Panel';

function Dropdown({ options, value, onChange }) {

    const [isOpen, setIsOpen] = useState(false);

    const divElement = useRef();

    useEffect(() => {
        const handler = (event) => {

            // Simple check to see if we even have a reference to an element
            // If we removed 'ref={divElement} from our return statement,
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

    const handleClick = () => {
        // Close Dropdown
        setIsOpen(!isOpen);
    };

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