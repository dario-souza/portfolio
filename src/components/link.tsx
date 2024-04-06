import Link, { LinkProps, } from 'next/link'
import { PropsWithChildren, ReactNode } from 'react'


type LinkProp = PropsWithChildren & {
  href: string
  className?: string
}

const CustomLink = ({ className, href, children, ...props }: LinkProp,) => {
  return (
    <Link href={href} {...props} className={className} >{children}</Link>
  )
}

export default CustomLink