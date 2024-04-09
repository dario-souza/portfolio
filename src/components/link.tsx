'use client'
import Link from 'next/link'
import { PropsWithChildren } from 'react'
import {
  NavigationMenu,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle
} from './ui/navigation-menu'


type LinkProp = PropsWithChildren & {
  href: string
}

const CustomLink = ({ href, children }: LinkProp) => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <Link href={href} legacyBehavior passHref>
          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            {children}
          </NavigationMenuLink>
        </Link>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

export default CustomLink