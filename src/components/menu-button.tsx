import { Button, buttonVariants } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Link from "next/link"
import React from "react"
import CustomLink from "./link"


type MenuButtonProps = {
  children: React.ReactNode
}

export function MenuButton({ children }: MenuButtonProps) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="secondary" className="sm:hidden">{children}</Button>
      </SheetTrigger>
      <SheetContent className="space-y-2">
        <CustomLink href="/" className={`${buttonVariants({ variant: 'outline' })} w-full`} >Home</CustomLink>
        <CustomLink href="/portifolio" className={`${buttonVariants({ variant: 'outline' })} w-full`} >Protifólio</CustomLink>
        <CustomLink href="/sobre" className={`${buttonVariants({ variant: 'outline' })} w-full`} >Sobre</CustomLink>
      </SheetContent>
    </Sheet>
  )
}
