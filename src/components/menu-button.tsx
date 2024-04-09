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
import { ModeToggle } from "./theme"


type MenuButtonProps = {
  children: React.ReactNode
}

export function MenuButton({ children }: MenuButtonProps) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" className="sm:hidden">{children}</Button>
      </SheetTrigger>
      <SheetContent>
        <CustomLink href="/">Home</CustomLink>
        <CustomLink href="/portfolio">Protifólio</CustomLink>
        <CustomLink href="/about">Sobre</CustomLink>
        <ModeToggle />
      </SheetContent>
    </Sheet>
  )
}
