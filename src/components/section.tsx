import { cn } from '@/lib/utils'
import React from 'react'

type SectionProps = React.ComponentProps<'section'>

const Section = ({ children, className }: SectionProps) => {
  return (
    <section className={cn('max-w-screen-lg mx-auto px-4 py-4 sm:px-8', className)}>
      {children}
    </section>
  )
}

export default Section