import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card'
import Image from 'next/image'
import { Button } from './ui/button'
import { Portfolio } from '@/app/type/types-portfolios'


type ProjectsCardsProps = {
  card: Portfolio
}

const PortfolioCards = ({ card }: ProjectsCardsProps) => {
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
      <CardContent>
        <Image src={card.img} height={934} width={910} alt='dog' sizes='100vw' priority className='sm:mb-4' />
        <p className='hidden sm:block'>{card.description}</p>
      </CardContent>
      <CardFooter>
        <Button variant="destructive">Saiba mais</Button>
      </CardFooter>
    </Card>
  )
}

export default PortfolioCards