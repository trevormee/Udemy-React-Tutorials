import { createContext, useState, useEffect } from "react";

const NavigationContext = createContext();

// Context setup so that any component that shares/uses the following pieces of states
// and functions, does not have to passed thru the prop system
function NavigationProvider({children}) {

    // Declare a piece of state 'currentPath' and init. it with the current pathname in the addr bar
    const [currentPath, setCurrentPath] = useState(window.location.pathname);

    useEffect(() => {
        const handler = () => {
            setCurrentPath(window.location.pathname);
        };  

        // popstate event listener to prevent our JS project from re-rendering and dumping all of our
        // JS code/data each time we go to a differnt page (our project doenst actually go to different
        // web pages, we just trick the user into thinking it does by changing the addr. bar)
        window.addEventListener('popstate', handler);
    
        // Clean up function
        return () => {
            window.removeEventListener('popstate', handler);
        };
    }, []);

    /*
        navigate function
        param: 'to' is the path we are going to. ex) to --> '/accoridon'
               if we were to go to the accordion page
    */
    const navigate = (to) => {
        window.history.pushState({}, '', to);
        setCurrentPath(to);
    }

    return <NavigationContext.Provider value={{currentPath, navigate}}>
        {children}
    </NavigationContext.Provider>

};

export { NavigationProvider };
export default NavigationContext;