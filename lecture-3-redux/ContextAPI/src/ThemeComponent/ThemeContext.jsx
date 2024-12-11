import React, { useContext, useState } from 'react'

const ThemeWrapper = React.createContext();

export function useTheme(){
    return useContext(ThemeWrapper);
}


function ThemeContext({children}) {
    const [CTheme, setCTheme] = useState('light');
    const toggleTheme = () =>{
        const newTheme = CTheme == 'light' ? 'dark' : 'light';
        setCTheme(newTheme);
    }
  return (
    <ThemeWrapper.Provider value={{CTheme,toggleTheme}}>
        {children}
    </ThemeWrapper.Provider>
  )
}

export default ThemeContext