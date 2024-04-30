
import React from 'react'
import CustomLink from './link'
import { AlignJustify } from 'lucide-react'
import { MenuMobile } from './menu-mobile'
import { ModeToggle } from './theme'

export const HeaderComponent = () => {
  return (
    <header className='border-b fixed top-0 w-full backdrop-blur-sm'>
      <div className='h-16 max-w-screen-lg mx-auto px-4 md:px-8 flex justify-between items-center'>
        <a href="">LOgo</a>
        <nav className="">
          <MenuMobile>
            <AlignJustify />
          </MenuMobile>
          <div className="hidden sm:flex gap-2 justify-center items-center">
            <CustomLink href="/">Home</CustomLink>
            <CustomLink href="/portfolio">Protifólio</CustomLink>
            <CustomLink href="/about">Sobre</CustomLink>
            <CustomLink href="/contact">Contato</CustomLink>
            <ModeToggle />
          </div>
        </nav>
      </div>
    </header>
  )
}

