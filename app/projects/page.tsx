import Navbar from '@/components/blog/Navbar'
import Projects from '@/components/blog/Projects'
import React from 'react'
import PageHeader from '../blog/components/PageHeader'

export default function Project() {
  return (
    <div>
      <div>
        <Navbar />

        <PageHeader heading={"My Projects"} text="Checkout Something Awesome" />
        <Projects limit={Number(process.env.NEXT_PUBLIC_PAGE_LIMIT)}/>
        
      </div>
    </div>
  )
}
