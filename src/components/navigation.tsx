
import React from 'react'
import CustomLink from './link'
import { AlignJustify } from 'lucide-react'
import { MenuButton } from './menu-button'
import { ModeToggle } from './theme'

const NavBarHeader = () => {
  return (
    <header className='border-b'>
      <div className='h-16 max-w-screen-lg mx-auto px-3 flex justify-between items-center'>
        <a href="">LOgo</a>
        <nav className="">
          <MenuButton>
            <AlignJustify />
          </MenuButton>
          <div className="hidden sm:flex gap-2 justify-center items-center">
            <CustomLink href="/">Home</CustomLink>
            <CustomLink href="/portfolio">Protifólio</CustomLink>
            <CustomLink href="/about">Sobre</CustomLink>
            <ModeToggle />
          </div>
        </nav>
      </div>
    </header>
  )
}

export default NavBarHeader