import Link, { LinkProps, } from 'next/link'
import React, { PropsWithChildren, ReactNode } from 'react'

type LinkProp = LinkProps & {
  children: ReactNode
  className?: string
}

const CustomLink = ({ children, className, ...props }: LinkProp,) => {
  return (
    <Link {...props} className={className} >{children}</Link>
  )
}

export default CustomLink