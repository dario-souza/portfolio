import React from 'react'

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex justify-center items-center max-w-screen-lg mx-auto px-4 h-[calc(100vh-145px)]">
      {children}
    </div>
  )
}

export default Container