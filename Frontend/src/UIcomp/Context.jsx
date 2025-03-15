import React from "react";
import { createContext , useContext , useState } from "react";

export const ThemeContext = createContext({
    
}) 

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("light");

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export default function useTheme() {
    return useContext(ThemeContext)
}
