import useNavigation from "../hooks/use-navigation";
import classNames from "classnames";

// Link component definition
// Props:
// - to: the target path the link should navigate to
// - children: the content to be displayed inside the link (usually text or elements)
// - className: additional custom CSS classes passed to the link
// - activeClassName: CSS class to be applied if the link is currently active
function Link({to, children, className, activeClassName}){

    // Destructure navigate function and currentPath value from the custom navigation hook
    const {navigate, currentPath} = useNavigation(); 

    // Compute the CSS classes for the link element
    // Includes:
    // - a base style ("text-blue-500")
    // - any additional classes passed in via props
    // - the active class if the current path matches the link's "to" destination
    const classes = classNames(
        "text-blue-500", 
        className,
        currentPath === to && activeClassName
    );

    // Event handler for link clicks
    const handleClick = (event) => {
        // Allows user to open our app in a new tab by holding down ctrlKey (windows) or metakey
        if(event.metaKey || event.ctrlKey){
            return;
        }

        // Prevent the default browser behavior of navigating and reloading the page 
        event.preventDefault();

        // Use the custom navigate function to change routes without a full page reload
        navigate(to);
    };
    // Return the anchor element with proper class names and click behavior
    return <a className={classes}  href={to} onClick={handleClick}>
                {children}
            </a>
}

export default Link;