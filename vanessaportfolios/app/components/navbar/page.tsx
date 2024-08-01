'use client'

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

export default function Navbar() {
    // State variable 'isOpen' and its setter function 'setIsOpen'
    // Initially, 'isOpen' state is 'false', indicating the menu is hidden
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();

    //items-center => para centrar horizontalmente
    //justify-center => para centrar verticalmente
    return (
    <nav className="bg-[#3C096C] p-4"> {/* Navbar container with background color and padding */}
        <div className="container mx-auto flex flex-wrap items-center justify-between">
            <div className="text-white text-lg px-15">Vanessa Vargas</div>
                {/* Menu toggle button (hamburger icon) visible on small screens */}
                {/* md:hidden - Button is visible only on small screens */}
                {/* setIsOpen(!isOpen) -  Toggle 'isOpen' state on button click - onClick attribute */}
                <button className="text-white block md:hidden" onClick={() => setIsOpen(!isOpen)}>
                    {/* Hamburger Icon */}
                    {/* svg - Scalable Vector Graphics*/}
                    {/* strokeLinejoin , to set the shape of the corner */}
                    {/*strokeLinecap - sets the shape of the ends of the lines - width of the lines=2*/}
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
        
            {/* Menu items container: hidden on small screens unless 'isOpen' is true */}
            <div className={`w-full md:flex md:items-center md:w-auto ${isOpen ? '' : 'hidden'}`}>
                <ul className="flex flex-col md:flex-row md:space-x-4 mt-4 md:mt-0">
                    {/* Menu items stacked vertically on small screens, horizontally on medium+ screens */}
                    <li onClick={() => router.push('/')} className="text-white block py-2 px-4 cursor-pointer rounded hover:bg-[#5A189A]">Home</li>
                    <li onClick={() => router.push('/components/education/client')} className="text-white block py-2 px-4 cursor-pointer rounded hover:bg-[#5A189A]">Education</li>
                    <li onClick={() => router.push('/components/experience/client')} className="text-white block py-2 px-4 cursor-pointer rounded hover:bg-[#5A189A]">Experience</li>
                    <li onClick={() => router.push('/components/projects/client')} className="text-white block py-2 px-4 cursor-pointer rounded hover:bg-[#5A189A]">Projects</li>
                    <li onClick={() => router.push('/components/skills')} className="text-white block py-2 px-4 cursor-pointer rounded hover:bg-[#5A189A]">Skills</li>
                    <li onClick={() => router.push('/components/contactme/client')} className="text-white block py-2 px-4 cursor-pointer rounded hover:bg-[#5A189A]">Contact me</li>
                    <li onClick={() => router.push('/components/curiosities/client')} className="text-white block py-2 px-4 cursor-pointer rounded hover:bg-[#5A189A]">Curiosities</li>
                    <li onClick={() => router.push('/components/apiDocumentation')} className="text-white block py-2 px-4 cursor-pointer rounded hover:bg-[#5A189A]">API Doc</li>              
                </ul>
            </div>
        </div>
    </nav>
    );
}
