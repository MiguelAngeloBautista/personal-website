"use client";
import Link from 'next/link'
import React, { useState } from 'react'
import { SiGithub, SiLinkedin } from "react-icons/si";
import Title from './Title';
import NavLink from './NavLink';



export default function Navbar() {
  const socials = [
    {
      link: "https://www.linkedin.com/in/miguelangelobautista/",
      label: "LinkedIn",
      icon: SiLinkedin,
    },
    {
      link: "https://github.com/MiguelAngeloBautista",
      label: "GitHub",
      icon: SiGithub,
    }
  ]

  const pages = [
    {
      link: '/',
      text: 'Home',
      newTab: false
    },
    {
      link: '/projects',
      text: 'Projects',
      newTab: false
    },
    {
      link: '/blog',
      text: 'Blog',
      newTab: false
    },
  ]
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="max-w-7xl mx-10 lg:mx-auto">
      <nav className='py-10 lg:mx-3 flex justify-between items-center'>
        <Link href="/">
          <Title text=" Miguel Bautista 😁" className='-rotate-2'/>
        </Link>
        
        {/* Hamburger Section */}
        <div className='flex items-center gap-5'>
          {/* Hamburger Menu */}
          <div className='hidden w-full items-center gap-5 lg:flex lg:w-max'>
            <ul className='items-stretch space-x-3 lg:flex '> {/*hidden lg:flex*/}
              {pages.map((page, index) => {
                return (
                  <NavLink id={index} key={index} url={page.link} text={page.text} newTab={page.newTab}  />
                )
              })}
              
              <li className="flex items-center gap-5">
                {socials.map((social, index) => {
                  const Icon = social.icon

                  return (
                      <Link href={social.link} key={index} aria-label={social.label} target="_blank" rel="noopener noreferrer">
                        <Icon className=' size-5 hover:scale-125 transition-all'/>
                      </Link>
                  )
                })}
              </li>
            </ul>
          </div>
          {/* <ModeToggle/> */}
          {/* Hamburger Menu Button */}
          <button  className="lg:hidden z-[31]" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle Navbar Menu">
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"  />
          </svg>
        </button>
        </div>

        <div className={`lg:hidden w-full absolute z-30  right-0 -top-4 
          ${isMenuOpen ? 'opacity-100 animate-swipe-left no-doc-scroll' : 'animate-swipe-left-out opacity-0'} 
          text-2xl bg-black bg-opacity-65 overflow-x-hidden`}
          >

          <div className=' pt-24 flex flex-col gap-7 font-medium mt-4 bg-gray-50  dark:bg-indigo-900 h-screen w-[80%] float-right '>
            <ul className='flex flex-col gap-7 min-h-[80%]'>
            {pages.map((page, index) => {
                return (
                    <NavLink  key={index} id={index} url={page.link} text={page.text} newTab={page.newTab}  />
                )
              })}
              
              
            </ul>
            <ul className=''>
              <li className=" flex items-center gap-5 py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white">
                  {socials.map((social, index) => {
                    const Icon = social.icon

                    return (
                        <Link href={social.link} key={index} aria-label={social.label} target="_blank" rel="noopener noreferrer">
                          <Icon className=' size-7 hover:scale-125 transition-all'/>
                        </Link>
                    )
                  })}
                </li>
              </ul>
          </div>
        </div>
      </nav>
      {/* block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white */}
      
    </div>
  )
}
