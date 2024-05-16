'use client'
import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card'
import Image from 'next/image'
import { Button } from './ui/button'
import { Portfolio } from '@/app/type/types-portfolios'
import { GitHubLogoIcon, GlobeIcon } from '@radix-ui/react-icons'
import Link from 'next/link'
import useMedia from '@/app/hooks/use-media'

type ProjectsCardsProps = {
  card: Portfolio
}

const PortfolioCards = ({ card }: ProjectsCardsProps) => {
  const screenSmall = useMedia('(max-width: 600px)')

  return (
    <Card className='hover:scale-[1.02] transition-all duration-300'>
      <CardHeader>
        <CardTitle>
          {card.title}
        </CardTitle>
        <CardDescription>
          {card.subtitle}
        </CardDescription>
      </CardHeader>
      <CardContent className='sm:line-clamp-4 sm:mb-4'>
        <Image src={card.img} height={550} width={900} alt='dog' sizes='100vw' priority className='sm:mb-4' />
        <p className='hidden sm:block leading-6 text-ellipsis'>{card.description}</p>
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
        <Link href={card.url} className='ml-3' target='_blank'>
          <GlobeIcon
            width={25}
            height={25}
            className='hover:text-[#918FF3] transition-all duration-500'
          />
        </Link>
      </CardFooter>
    </Card>
  )
}

export default PortfolioCards