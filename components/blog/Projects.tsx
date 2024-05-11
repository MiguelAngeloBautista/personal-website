import React from 'react'
import Title from './Title'
import Card from '@/components/ui/card'
import Link from 'next/link'

export default function Projects() {
  const projects = [
    {
      title: 'Portfolio Website',
      description: '',
      image: '/project_1.png',
      link: ''
    },
    {
      title: 'C++ Course Game Project',
      description: '',
      image: '/project_2.png',
      link: 'https://github.com/MiguelAngeloBautista/DPCPP-Assignment1'
    },
    {
      title: 'Android Game Dev Project',
      description: '',
      image: '/project_2.png',
      link: ''
    },
    {
      title: 'Homelab',
      description: '',
      image: '/project_2.png',
      link: 'https://wiki.bautistahome.com/'
    },
    {
      title: 'Game Design Course UE5 Game',
      description: '',
      image: '/project_2.png',
      link: ''
    },
    // {
    //   title: 'Project 2',
    //   description: '',
    //   image: '/project_2.png',
    //   link: 'https://www.google.com'
    // },
  ]

  return (
    <div className='text-center mx-auto max-w-sm text-2xl lg:max-w-[60vw] lg:text-3xl py-20'>
      <Title text="Projects"/>
      <div className='grid justify-center grid-cols-1 lg:grid-cols-3 py-10 gap-5'>
        <Card projects={projects}/>
      </div>
      
    </div>
  )
}
