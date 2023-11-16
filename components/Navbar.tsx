'use client';

import React, { useState } from 'react'
import Link from 'next/link'
import { FaTimes, FaBars } from 'react-icons/fa';
import { Switcher } from '.';

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [color, setColor] = useState(false);
    const changeColor = () => {
        if (window.scrollY) {
            setColor(true)
        } else {
            setColor(false)
        }
    }
    window.addEventListener("scroll", changeColor);
    const handleOpen = () => {
        setOpen(value => !value)
    }
    return (
        <div className={
            color ? "nav-container bg-light-theme dark:bg-dark-theme" : "nav-container"
        }>
            <Link className='logo' href={"/"}>TF</Link>
            <nav>
                <Link href={"#about"}>about</Link>
                <Link href={"#experience"}>experience</Link>
                <Link href={"#projects"}>projects</Link>
                <Link href={"#contact"}>contact</Link>
            </nav>
            <div className='sm:hidden'>
                <FaBars
                    size={25}
                    className='text-dark-text dark:text-light-text-1'
                    onClick={handleOpen}
                />
            </div>
            {open && (
                <div className='mobile-menu'>
                    <div className='flex justify-end items-center mb-2'>
                    <FaTimes
                        size={40}
                        className='text-dark-theme dark:text-light-text-1 text-right'
                        onClick={handleOpen}
                    />
                    </div>
                    <Link onClick={handleOpen} href={"#about"}>about</Link>
                    <Link onClick={handleOpen} href={"#experience"}>experience</Link>
                    <Link onClick={handleOpen} href={"#projects"}>projects</Link>
                    <Link onClick={handleOpen} href={"#contact"}>contact</Link>
                    <Switcher />
                </div>
            )}
        </div>
    )
}

export default Navbar