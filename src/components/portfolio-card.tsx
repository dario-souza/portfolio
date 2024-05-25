'use client'
import React, { ReactElement } from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card'
import Image from 'next/image'
import { buttonVariants } from './ui/button'
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
        {screenSmall ?
          <Link href={card.url} target='_blank' className={buttonVariants({ variant: 'secondary', size: 'sm' })} >Ver site</Link>
          :
          <Link href={card.url} target='_blank' className={buttonVariants({ variant: 'secondary', size: 'lg' })} >Ver site</Link>
        }
        <Link href={card.repo} className='ml-3 mr-auto' target='_blank'>
          <GitHubLogoIcon
            width={25}
            height={25}
            className='hover:text-[#918FF3] transition-all duration-500'
          />
        </Link>

        <div className={`hidden gap-3 max-[600px]:flex min-[840px]:flex`}>
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