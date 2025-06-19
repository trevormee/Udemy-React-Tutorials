import { useContext } from "react";
import NavigationContext from "../context/navigation";

// Custom hook to remove like 3 lines of code from some of our src file
function useNavigation() {
    return useContext(NavigationContext);
}

export default useNavigation;