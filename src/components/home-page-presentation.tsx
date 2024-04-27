'use client'
import { typerWriter } from '@/app/utils/type-writer';
import React, { useRef } from 'react'


const HomePagePresentation = () => {
  let paragraph = useRef<HTMLParagraphElement>(null);

  React.useEffect(() => {
    if (paragraph.current) {
      typerWriter(paragraph.current.innerText, paragraph.current)
    }
  }, [])

  return (
    <div>
      <h1 className="text-4xl mb-2 sm:text-5xl md:text-6xl lg:text-8xl">Dario de souza</h1>
      <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center text-anime" ref={paragraph} >I am <strong>Web developer</strong></p>
    </div>
  )
}

export default HomePagePresentation