import React, { useEffect, useState, useContext } from 'react'
import {useAtom, atom} from "jotai"

export const darkTheme = atom(false)

export function ThemeSwitcher() {
    
    const [isDark, setTheme] = useAtom(darkTheme)

    function handleThemeChange() {
        !isDark ? localStorage.theme = 'dark' : localStorage.theme = 'light'
        setTheme(!isDark)
    }

    useEffect(() => {
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            setTheme(true)
        } else {
            setTheme(false)
        }
    }, [])

    return(
        <div className='absolute right-0 bottom-0 m-4 z-10'>
            <div className='inline-flex relative items-center'>
                <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300 mr-2">Dark Mode</span>
                <label className="inline-flex relative items-center cursor-pointer">
                    <input type="checkbox" onChange={() => handleThemeChange()} id="theme-toggle" className="sr-only peer" checked={isDark}/>
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                </label>
            </div>
        </div>
        
    )
}