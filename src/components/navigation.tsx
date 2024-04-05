
import React from 'react'
import CustomLink from './link'
import { AlignJustify } from 'lucide-react'

const NavBarHeader = () => {
  return (
    <header className='bg-zinc-500'>
      <div className='h-16 max-w-screen-lg mx-auto px-3 flex justify-between items-center'>
        <a href="">LOgo</a>
        <nav className="">
          <AlignJustify className='sm:hidden' />
          <div className="hidden space-x-3 sm:flex" >
            <CustomLink href="/" className="block p-4 hover:bg-slate-300 transition-all duration-500">Home</CustomLink>
            <CustomLink href="/" className="block p-4 hover:bg-slate-300 transition-all duration-500">Contato</CustomLink>
            <CustomLink href="/" className="block p-4 hover:bg-slate-300 transition-all duration-500">Projetos</CustomLink>
          </div>
        </nav>
      </div>
    </header>

  )
}

export default NavBarHeader