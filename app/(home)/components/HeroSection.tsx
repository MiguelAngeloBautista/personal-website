import { HeroHighlight, Highlight } from '@/components/ui/hero-highlight'
import React from 'react'

export default function HeroSection() {
  return (
    <div>
      <HeroHighlight>
        <h1 className='animate-flyin-bottom text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto '>
          {"Hi! I'm"} <Highlight>Miguel Bautista</Highlight>
        </h1>
        
      </HeroHighlight>
      
    </div>
  )
}
