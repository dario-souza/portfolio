import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import React from "react"
import CustomLink from "./link"
import { ModeToggle } from "./theme"

type MenuButtonProps = {
  children: React.ReactNode
}

export function MenuMobile({ children }: MenuButtonProps) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" className="sm:hidden">{children}</Button>
      </SheetTrigger>
      <SheetContent className="space-y-2">
        <CustomLink href="/">Home</CustomLink>
        <CustomLink href="/portfolio">Protifólio</CustomLink>
        <CustomLink href="/about">Sobre</CustomLink>
        <ModeToggle />
      </SheetContent>
    </Sheet>
  )
}
