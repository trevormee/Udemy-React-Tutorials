// Import the custom hook that provides navigation-related data and actions
import useNavigation from "../hooks/use-navigation";

// Define the Route component
// Props:
// - path: the URL path that this Route should match
// - children: the elements/components to render if the path matches
function Route({path, children}){
    // Destructure currentPath from the navigation context (e.g., current URL)
    const {currentPath} = useNavigation();

    // If the provided path matches the current path, render the children (i.e., the route content)
    if(path === currentPath){
        return children;
    }
    // If the paths don't match, render nothing (null)
    return null;
}

export default Route;