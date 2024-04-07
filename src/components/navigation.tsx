
import React from 'react'
import CustomLink from './link'
import { AlignJustify } from 'lucide-react'
import { MenuButton } from './menu-button'
import { buttonVariants } from './ui/button'
import { ModeToggle } from './theme'
import { Separator } from './ui/separator'


const NavBarHeader = () => {
  return (
    <header className='border-b'>
      <div className='h-16 max-w-screen-lg mx-auto px-3 flex justify-between items-center'>
        <a href="">LOgo</a>
        <nav className="">

          <MenuButton>
            <AlignJustify />
          </MenuButton>

          <div className="hidden sm:flex gap-8 justify-center items-center" >
            <CustomLink href="/" className="underline">Home</CustomLink>
            <CustomLink href="/portfolio" className="underline" >Protifólio</CustomLink>
            <CustomLink href="/about" className="underline" >Sobre</CustomLink>
            <ModeToggle />
          </div>
        </nav>
      </div>
    </header>

  )
}

export default NavBarHeader