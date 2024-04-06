
import React from 'react'
import CustomLink from './link'
import { AlignJustify } from 'lucide-react'
import { MenuButton } from './menu-button'
import { buttonVariants } from './ui/button'
import Link from 'next/link'

const NavBarHeader = () => {
  return (
    <header className='bg-zinc-500'>
      <div className='h-16 max-w-screen-lg mx-auto px-3 flex justify-between items-center'>
        <a href="">LOgo</a>
        <nav className="">
          <MenuButton>
            <AlignJustify />
          </MenuButton>
          <div className="hidden space-x-3 sm:flex" >
            <CustomLink href="/" className={`${buttonVariants({ variant: 'outline' })}`} >Home</CustomLink>
            <CustomLink href="/portfolio" className={`${buttonVariants({ variant: 'outline' })}`} >Protifólio</CustomLink>
            <CustomLink href="/about" className={`${buttonVariants({ variant: 'outline' })}`} >Sobre</CustomLink>
          </div>
        </nav>
      </div>
    </header>

  )
}

export default NavBarHeader