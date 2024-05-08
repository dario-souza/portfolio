import ProjectCards from '@/components/portfolio-card'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'Dario | Portifólio'
}

const PortfolioPage = () => {
  return (
    <section className='max-w-screen-lg mx-auto px-4 py-4 sm:px-8 grid grid-cols-1 sm:grid-cols-2  gap-2  sm:gap-4'>
      {Array.from({ length: 10 }).map((_, index) => (
        <ProjectCards key={index} />
      ))}
    </section>
  )
}

export default PortfolioPage