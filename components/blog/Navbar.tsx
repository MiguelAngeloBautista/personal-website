"use client";
import Link from 'next/link'
import React from 'react'
import { SiGithub, SiLinkedin } from "react-icons/si";
import Title from './Title';
// import { ModeToggle } from '@/components/ui/drop-down-btn';
import NavLink from './NavLink';
// import { usePathname } from "next/navigation";



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
    // {
    //   link: '/projects',
    //   text: 'Projects',
    //   newTab: false
    // },
    {
      link: '/blog',
      text: 'Blog',
      newTab: false
    },
  ]
  
  return (
    <div className="max-w-7xl mx-auto">
    <nav className='py-10 lg:mx-3 flex justify-between items-center'>
      <Link href="/">
        <Title text=" Miguel Bautista 😁" className='-rotate-2'/>
      </Link>

      <div className='flex items-center gap-5'>
        <ul className='items-stretch hidden space-x-3 lg:flex'>
          {pages.map((page, index) => {
            return (
              <NavLink key={index} id={index} url={page.link} text={page.text} newTab={page.newTab}  />
            )
          })}
        </ul>
        
      </div>

      <div className='flex items-center gap-5'>
        {socials.map((social, index) => {
          const Icon = social.icon

          return (
              <Link href={social.link} key={index} aria-label={social.label} target="_blank" rel="noopener noreferrer">
                <Icon className=' size-5 hover:scale-125 transition-all'/>
              </Link>
          )
        })}
        {/* <ModeToggle/> */}
      </div>
    

    </nav>
    </div>
  )
}
