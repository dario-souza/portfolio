'use client'
import { Typewriter } from 'react-simple-typewriter'
import React from 'react'


const HomePagePresentation = () => {
  const text = Typewriter({ words: ['em construção...',], loop: true, cursor: true })
  return (
    <div>
      <h1 className="text-4xl mb-2 sm:text-5xl md:text-6xl lg:text-8xl">Página em construção 🏗️🚧</h1>
      <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center text-anime" ><strong>{text}</strong></p>

    </div>
  )
}

export default HomePagePresentation