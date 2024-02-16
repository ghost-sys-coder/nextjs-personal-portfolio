"use client";

import React, { useEffect, useState } from 'react';
import { DarkModeSwitch } from "react-toggle-dark-mode";


const Switcher = () => {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        themeCheck()
    }, [darkMode])

    useEffect(() => {
        themeCheck()
    }, [])

    const themeCheck = () => {
        if (localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
            document.documentElement.classList.add('dark', new Boolean(setDarkMode(true)).toString())
        } else {
            document.documentElement.classList.remove('dark');
            setDarkMode(false);
        }
    }

    const toggleDarkMode = () => {
        const theme = localStorage.getItem('theme');
        if (theme) {
            localStorage.setItem('theme', theme === 'dark' ? 'light' : 'dark');
        } else {
            localStorage.setItem('theme', 'dark')
        }
        setDarkMode(!darkMode)
    }
    return (
        <div className='flex justify-end items-center gap-1 mt-10'>
            <DarkModeSwitch
                checked={!darkMode}
                onChange={toggleDarkMode}
                size={50}
                className={!darkMode ? 'text-gray-900' : 'text-yellow-600'}
            />
            <p onClick={toggleDarkMode} className='text-dark-button text-sm dark:text-light-button sm:inline hidden'>{darkMode === true ? 'LightMode' : 'DarkMode'}</p>
        </div>
    )
}

export default Switcher