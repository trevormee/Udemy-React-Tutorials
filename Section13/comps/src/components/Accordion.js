import { useState } from 'react';
import { GoChevronDown, GoChevronLeft } from 'react-icons/go';

// Accordion component, takes in the items array from AccordionPage as a prop
function Accordion({ items}) {

    // Piece of state 'expandedIndex' to be used to determine/keep track
    // of what items in the accordion should be displayed at a time.
    // By default, all accordion items and their content should not be visible
    const [expandedIndex, setExpandedIndex] = useState(-1);

    // Event handler for when a user 
    const handleClick = (nextIndex) => {
        if(expandedIndex === nextIndex){
            setExpandedIndex(-1);
        }else {
            setExpandedIndex(nextIndex);
        }
    }
    
    // mapping function to show a new list of items to the user 
    const renderedItems = items.map((item, index) => {
        const isExpanded = index === expandedIndex;    // Check if the current item is expanded

        // If an item in the accordion is expanded, show the content
        const content = isExpanded && <div className='border-b p-5'>{item.content}</div>

        // if isExpanded true --> down, else --> leftArrow
        const icon = <span className='text-2xl'>
            {isExpanded ? < GoChevronDown /> : <GoChevronLeft />}  
        </span>

        return (
            <div key={item.id}>
                <div className='flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer' onClick={() => handleClick(index)}>
                    {icon}
                    {item.label}
                </div>
                <div>{content}</div>
            </div>
        );
    });
    
    return (
        <div className='border-x border-t rounded'>
            {renderedItems}
        </div>
    );
}

export default Accordion;