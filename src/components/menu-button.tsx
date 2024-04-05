import { Button } from "@/components/ui/button"
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
      <SheetContent>
        <div className="flex flex-col space-y-3">
          <CustomLink href="/" className="hover:bg-zinc-500 py-2 px-4 hover:rounded hover:text-white duration-500">Home</CustomLink>
          <CustomLink href="/contato" className="hover:bg-zinc-500 py-2 px-4 hover:rounded hover:text-white duration-500">Contato</CustomLink>
          <CustomLink href="/" className="hover:bg-zinc-500 py-2 px-4 hover:rounded hover:text-white duration-500">Sobre</CustomLink>
        </div>

      </SheetContent>
    </Sheet>
  )
}
