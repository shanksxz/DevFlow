"use client" 
import React, {createContext, useContext, useState, useEffect} from 'react'


//type
type ThemeContextType = {
    mode : string,
    setMode : (mode:string) => void;
}


const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

// appContext
export function ThemeProvider({children} : {children : React.ReactNode}) {
    const [mode, setMode] = useState('')
    const handleThemeChange = () => {
        if(mode === 'dark') 
        {
            setMode('light')
            document.documentElement.classList.add('light')
        } else {
            setMode('dark')
            document.documentElement.classList.add('dark')
        }

    }

    // ik
    useEffect(()=>{
        handleThemeChange()
    },[mode])

    return (
        <ThemeContext.Provider value = {{mode, setMode}}>{children}</ThemeContext.Provider>
    )
}


// custom hook
export function useTheme() {
    const context = useContext(ThemeContext)

    if(context===undefined) throw new Error('useTheme must be used within an provider')

    return context;
}