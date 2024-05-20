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
      text: 'UE 5',
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
    <div className='text-center py-20 text-2xl lg:text-3xl'>
      
      <Title text="Skills ✏️"/>
      <div className='flex flex-col lg:grid items-center lg:grid-cols-3 py-10 gap-24 mx-[100px] xl:mx-[200px] 2xl:mx-[300px] 3xl:mx-[500px]'>
        <Card items={skill}/>
      </div>
      
    </div>
  )
}
