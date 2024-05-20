import React from 'react'

export default function Title({text, className}:{text:string, className?:string}) {
  return (
    <div className={className}>
      <h1 className="lg:text-3xl font-bold underline underline-offset-8 decoration-indigo-500">{text}</h1>
    </div>
  )
}
