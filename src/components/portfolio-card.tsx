'use client'
import React, { ReactElement } from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card'
import Image from 'next/image'
import { Button } from './ui/button'
import { Portfolio } from '@/app/type/types-portfolios'
import { GitHubLogoIcon, GlobeIcon } from '@radix-ui/react-icons'
import Link from 'next/link'
import useMedia from '@/app/hooks/use-media'
// icons
import Firebase from '@/icons/firebase'
import Prismic from '@/icons/prismic'
import ReactIcon from '@/icons/react'
import Sass from '@/icons/sass'
import Typescipt from '@/icons/typescript'
import StyledComponents from '@/icons/styled-components'
// import NextIcon from '@/icons/nextjs'
import { SiNextdotjs } from 'react-icons/si'
import { RiNextjsLine } from "react-icons/ri";
import NextjsIcon from '@/icons/nextjs'

type ProjectsCardsProps = {
  card: Portfolio
}

const icons: { [key: string]: ReactElement } = {
  react: <ReactIcon />,
  typescript: <Typescipt />,
  prismic: <Prismic />,
  nextjs: <SiNextdotjs size={25} />,
  firebase: <Firebase />,
  sass: <Sass />,
  'styled-components': <StyledComponents />
}

const PortfolioCards = ({ card }: ProjectsCardsProps) => {
  const screenSmall = useMedia('(max-width: 600px)')
  return (
    <Card className='hover:scale-[1.02] transition-all duration-300'>
      <CardHeader>
        <CardTitle>
          {card.title}
        </CardTitle>
        <CardDescription className='line-clamp-1 text-ellipsis'>
          {card.subtitle}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Image src={card.img} height={550} width={900} alt='dog' sizes='100vw' priority className='sm:mb-4' />
        <div className='sm:line-clamp-4 text-ellipsis'>
          <p className='hidden sm:block leading-6'>{card.description}</p>
        </div>
      </CardContent>
      <CardFooter>
        {screenSmall ? <Button variant='destructive' size='sm' >Saiba mais</Button> : <Button variant='destructive' >Saiba mais</Button>}
        <Link href={card.repo} className='ml-3' target='_blank'>
          <GitHubLogoIcon
            width={25}
            height={25}
            className='hover:text-[#918FF3] transition-all duration-500'
          />
        </Link>
        <Link href={card.url} className='ml-3 mr-auto' target='_blank'>
          <GlobeIcon
            width={25}
            height={25}
            className='hover:text-[#918FF3] transition-all duration-500'
          />
        </Link>
        <div className='hidden gap-3 min-[850px]:flex'>
          {card.techs.map((tech) => {
            const IconComponent = icons[tech]
            return IconComponent ? <span key={tech}>{IconComponent}</span> : null
          })}
        </div>
      </CardFooter>
    </Card>
  )
}

export default PortfolioCards