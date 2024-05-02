import ProjectCards from '@/components/portfolio-card'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'Dario | Portifólio'
}

const PortfolioPage = () => {
  return (
    <section className='fullscreen'>
      {Array.from({ length: 2 }).map((_, index) => (
        <ProjectCards key={index} />
      ))}
    </section>
  )
}

export default PortfolioPage