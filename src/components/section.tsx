import React from 'react'

const Section = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="flex justify-center items-center max-w-screen-lg mx-auto px-4 md:px-8 h-[calc(100vh-145px)]">
      {children}
    </section>
  )
}

export default Section