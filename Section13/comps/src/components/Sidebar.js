// Import the custom Link component used for navigation
import Link from './Link';

function Sidebar() {

    // Define a list of navigation links, each with a label and corresponding path
    const links = [
        {label: 'Dropdown', path:'/'},
        {label: 'Accordion', path: '/accordion'},
        {label: 'Buttons', path: '/buttons'},
    ];

    // Map over the links array to create an array of Link components
    // Each link is styled with margin and has an active state style
    const renderedLinks = links.map((link) => {
        return <Link key={link.label} 
                    to={link.path} 
                    className='mb-3' 
                    activeClassName='font-bold border-l-4 border-blue-500 pl-2'> 
                        {link.label} 
                </Link>
    });

    // Render the sidebar container with vertical layout and scrolling behavior
    return (
        <div className='sticky top-0 overflow-y-scroll flex flex-col items-start'>
            {renderedLinks}
        </div>
    );
}

export default Sidebar;