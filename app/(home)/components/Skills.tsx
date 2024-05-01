import React from 'react'
import Title from './Title'
import Card from '@/components/ui/small-card'
import { SiCplusplus, SiDocker, SiHtml5, SiJavascript, SiNextdotjs, SiProxmox, SiPython, SiReact, SiUnrealengine } from 'react-icons/si'
import { FaJava } from 'react-icons/fa6'
import { IoGameController } from 'react-icons/io5'

export const Skills = () => {
  const skill = [
    {
      text: 'Python',
      icon: SiPython
    },
    {
      text: 'Java',
      icon: FaJava
    },
    {
      text: 'C++',
      icon: SiCplusplus
    },
    {
      text: 'Javascript',
      icon: SiJavascript
    },
    {
      text: 'HTML/CSS',
      icon: SiHtml5
    },
    {
      text: 'Unreal Engine',
      icon: SiUnrealengine
    },
    {
      text: 'Game Dev',
      icon: IoGameController
    },
    {
      text: 'Docker',
      icon: SiDocker
    },
    {
      text: 'Proxmox',
      icon: SiProxmox
    },

    // { Not Fully
    //   text: 'Next.JS',
    //   icon: SiNextdotjs
    // },
  ]

  return (
    <div className='text-center max-w-7xl mx-auto py-20 text-2xl lg:text-3xl'>
      
      <Title text="Skills ✏️"/>
      <div className='flex flex-col lg:grid items-center lg:grid-cols-5 py-10 gap-5'>
        <Card items={skill}/>
      </div>
      
    </div>
  )
}
