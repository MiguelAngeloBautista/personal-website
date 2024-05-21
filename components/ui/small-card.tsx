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
      <div key={index} className='flex items-center justify-center gap-3 bg-white text-black dark:bg-black dark:text-white p-2 rounded-md'>
        <Icon size={30}/>
        <p>{item.text}</p>
      </div>
    )
    }
  ))
  )
}
