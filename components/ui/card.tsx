import React from 'react'
import Image from 'next/image'
import Title from '@/components/blog/Title'
import Link from 'next/link'

export default function Card({projects
}:{
  projects: {
    title: string, 
    description: string, 
    image: string, 
    link: string
  }[]
}) 
{
  return (
    (projects.map((item, index) => {
      const img = item.image
    return (
      <Link href={item.link}>
      <div key={index} className='bg-indigo-500 p-5 rounded-md border-indigo-500 border-2 md:hover:scale-125 transition-all'>
        <Image src={img} alt={item.description} width={500} height={300} className="object-cover"></Image>
        <br/>
        <Title text={item.title} className="no-underline"></Title>
        {item.description? <p className='truncate'>{item.description}</p> : null} 
      </div>
      </Link>
    )
    }))
  )
}
