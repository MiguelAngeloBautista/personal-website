import Link from 'next/link'
import React from 'react'
import { SiGithub, SiLinkedin } from "react-icons/si";
import Title from './Title';

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
  
  return (
    <nav className='py-10 mx-5 lg:mx-3 flex justify-between items-center'>
      <Title text=" Miguel Bautista 😁" className='-rotate-2'/>

    <div className='flex items-center gap-5'>
      {socials.map((social, index) => {
        const Icon = social.icon

        return (
            <Link href={social.link} key={index} aria-label={social.label} target="_blank" rel="noopener noreferrer">
              <Icon className=' size-5 hover:scale-125 transition-all'/>
            </Link>
        )
      })}
    </div>

    </nav>
  )
}
