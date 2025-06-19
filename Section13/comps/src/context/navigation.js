import { createContext, useState, useEffect } from "react";

const NavigationContext = createContext();

function NavigationProvider({children}) {

    const [currentPath, setCurrentPath] = useState(window.location.pathname);

    useEffect(() => {
        const handler = () => {
            setCurrentPath(window.location.pathname);
        };  

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