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
        
        <div className='flex items-center gap-5'>
          <div className='hidden w-full items-center gap-5 lg:flex lg:w-max '>
            <ul className='items-stretch space-x-3 lg:flex '> {/*hidden lg:flex*/}
              {pages.map((page, index) => {
                return (
                  <NavLink key={index} id={index} url={page.link} text={page.text} newTab={page.newTab}  />
                )
              })}
              
              <div className="flex items-center gap-5">
                {socials.map((social, index) => {
                  const Icon = social.icon

                  return (
                      <Link href={social.link} key={index} aria-label={social.label} target="_blank" rel="noopener noreferrer">
                        <Icon className=' size-5 hover:scale-125 transition-all'/>
                      </Link>
                  )
                })}
              </div>
            </ul>
          </div>
          {/* <ModeToggle/> */}
          <button  className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle Navbar Menu">
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"  />
          </svg>
        </button>
        </div>
      </nav>
      {/* block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white */}
      <div>
          <ul className={`w-full flex flex-col font-medium mt-4 rounded-lg bg-gray-50 gap-2 dark:bg-gray-800 dark:border-gray-700 ${isMenuOpen ? 'block' : 'hidden'}`}>
          {pages.map((page, index) => {
              return (
                  <NavLink key={index} id={index} url={page.link} text={page.text} newTab={page.newTab}  />
              )
            })}
            
            <li className="flex items-center gap-5 py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
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
    </div>
  )
}
