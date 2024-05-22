'use client'
import React, { ReactElement } from 'react'
import { FaReact } from 'react-icons/fa'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card'
import Image from 'next/image'
import { Button } from './ui/button'
import { Portfolio } from '@/app/type/types-portfolios'
import { GitHubLogoIcon, GlobeIcon } from '@radix-ui/react-icons'
import Link from 'next/link'
import useMedia from '@/app/hooks/use-media'
import { SiFirebase, SiPrismic, SiSass, SiTypescript } from 'react-icons/si'
import { RiNextjsFill } from 'react-icons/ri'

type ProjectsCardsProps = {
  card: Portfolio
}



const icons: { [key: string]: ReactElement } = {
  react: <FaReact />,
  typescript: <SiTypescript />,
  prismic: <SiPrismic />,
  nexjs: <RiNextjsFill />,
  firebase: <SiFirebase />,
  sass: <SiSass />
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
          {card.techs.map((tech, index) => <span className='text-[22px]' key={index}>{icons[tech]}</span>)}
        </div>
      </CardFooter>
    </Card>
  )
}

export default PortfolioCards