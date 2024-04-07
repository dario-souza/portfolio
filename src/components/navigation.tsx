
import React from 'react'
import CustomLink from './link'
import { AlignJustify } from 'lucide-react'
import { MenuButton } from './menu-button'
import { buttonVariants } from './ui/button'
import { ModeToggle } from './theme'


const NavBarHeader = () => {
  return (
    <header className='border-b-[1px] border-b-zinc-300'>
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
            <ModeToggle />
          </div>
        </nav>
      </div>
    </header>

  )
}

export default NavBarHeader