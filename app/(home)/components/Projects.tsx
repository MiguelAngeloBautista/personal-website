import React from 'react'
import Title from './Title'
import Card from '@/components/ui/card'

export default function Projects() {
  const projects = [
    {
      title: 'Project 1',
      description: 'This is a project',
      image: '/project_1.png',
      link: 'https://www.google.com'
    },
    {
      title: 'Project 2',
      description: 'This is a project',
      image: '/project_2.png',
      link: 'https://www.google.com'
    },
    {
      title: 'Project 2',
      description: 'This is a project',
      image: '/project_2.png',
      link: 'https://www.google.com'
    },
    {
      title: 'Project 2',
      description: 'This is a project',
      image: '/project_2.png',
      link: 'https://www.google.com'
    },
    {
      title: 'Project 2',
      description: 'This is a project',
      image: '/project_2.png',
      link: 'https://www.google.com'
    },
    {
      title: 'Project 2',
      description: 'This is a project',
      image: '/project_2.png',
      link: 'https://www.google.com'
    },
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
