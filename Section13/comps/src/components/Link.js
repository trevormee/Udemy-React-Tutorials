import useNavigation from "../hooks/use-navigation";
import classNames from "classnames";


function Link({to, children, className, activeClassName}){

    const {navigate, currentPath} = useNavigation(); 

    const classes = classNames(
        "text-blue-500", 
        className,
        currentPath === to && activeClassName
    );

    const handleClick = (event) => {
        // Allows user to open our app in a new tab by holding down 
        // ctrlKey (windows) or metakey
        if(event.metaKey || event.ctrlKey){
            return;
        }

        event.preventDefault();

        navigate(to);
    };

    return <a className={classes}  href={to} onClick={handleClick}>{children}</a>
}

export default Link;