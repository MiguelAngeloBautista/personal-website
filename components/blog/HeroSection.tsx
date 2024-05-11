import { HeroHighlight, Highlight } from '@/components/ui/hero-highlight'
import React from 'react'

export default function HeroSection() {
  return (
    <div>
      <HeroHighlight>
        <h1 className='animate-flyin-bottom text-2xl px-4 md:text-4xl lg:text-5xl font-bold max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto '> 
        {/* text-neutral-700 */}
          {"Hi! I'm"} <Highlight>Miguel Bautista</Highlight>
        </h1>
        
      </HeroHighlight>
      
    </div>
  )
}
