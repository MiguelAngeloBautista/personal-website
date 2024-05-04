import React from 'react'
import { IconType } from 'react-icons';

export default function Card({items
}:{
  items: {
    text: string; 
    icon: IconType;
  }[]
}) 
{
  return (
    (items.map((item, index) => {
    const Icon = item.icon
    return (
      <div key={index} className='flex items-center gap-3 bg-white text-black dark:bg-black dark:text-white p-2 rounded-md border-indigo-500 border-2 border-opacity-0'>
        <Icon className='size-5 lg:size-7'/>
        <p>{item.text}</p>
      </div>
    )
    }
  ))
  )
}
