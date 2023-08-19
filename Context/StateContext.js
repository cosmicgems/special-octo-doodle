import React, {createContext, 
    useContext, 
    useState, 
    useEffect} from "react";

const Context = createContext();

export const StateContext =({ children }) => {
    const [isWorkHoriBg, setIsWorkHoriBg] = useState(false);
    const [isWorkVertBg, setIsWorkVertBg] = useState(false);
    const [isAboutHoriBg, setIsAboutHoriBg] = useState(false);
    const [isAboutVertBg, setIsAboutVertBg] = useState(false);
    const [isPearlBox, setIsPearlBox] = useState(false);
    const [isCredit, setIsCredit] = useState(false);
    const [isCosmic, setIsCosmic] = useState(false);
    const [isWorkDefault, setIsWorkDefault] = useState(false);
    const [orientation, setOrientation] = useState(null);
  


    useEffect(() => {
      // Function to update the orientation state
      function updateOrientation() {
        if (window.innerWidth > window.innerHeight) {
          setOrientation('horizontal');
        } else {
          setOrientation('vertical');
        }
      }
  
      // Initial orientation check
      updateOrientation();
  
      // Add event listener for window resize
      window.addEventListener('resize', updateOrientation);
  
      // Clean up the event listener on component unmount
      return () => {
        window.removeEventListener('resize', updateOrientation);
      };
    }, []);

    


    return (
        <Context.Provider value={{isAboutHoriBg, isAboutVertBg, isWorkHoriBg, isWorkVertBg, setIsWorkHoriBg, setIsWorkVertBg, setIsAboutHoriBg, setIsAboutVertBg,  orientation, isPearlBox, setIsPearlBox, isCredit, setIsCredit, isCosmic, setIsCosmic, isWorkDefault, setIsWorkDefault}}>
            {children}
        </Context.Provider>
    )
}


export const useStateContext = () => useContext(Context);