import Dropdown from "../components/Dropdown";
import {useState} from 'react';

// DropdownPage component responsible for instantiating the 
// Dropdown component 
function DropdownPage() {

    // Create an array of hardcoded objects of colors for the dropdown component
    const options = [
        {label: 'Red', value: 'red'},
        {label: 'Green', value: 'green'},
        {label: 'Blue', value: 'blue'},
    ]

    // Piece of state 'selection' to determine if a user has selected a color 
    // from the dropdown. By default, no option has been selected
    const [selection, setSelection] = useState(null);

    // Event handler to update the users selected option
    const handleSelect = (option) => {
        setSelection(option);
    };

    return (
        <div className="flex">
            < Dropdown options={options} value={selection}  onChange={handleSelect}/>
        </div>
    );
}

export default DropdownPage;