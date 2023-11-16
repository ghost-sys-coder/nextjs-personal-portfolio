"use client";

import React, { useState, useEffect } from "react";

export default function useDarkMode() {
    const [theme, setTheme] = useState(localStorage.theme);
    const colorTheme = theme === "dark" ? "light" : "dark";
    localStorage.setItem("theme", theme);

    useEffect(() => {
        const root = window.document.documentElement;
        root.classList.remove(colorTheme);
        root.classList.add(theme);
        if (localStorage.theme === "dark") {
            // localStorage.removeItem("theme");
            localStorage.setItem("theme", "light")
        } else {
            localStorage.setItem("theme", 'dark')
        }
    }, [colorTheme, theme]);

    return { colorTheme, setTheme }
}