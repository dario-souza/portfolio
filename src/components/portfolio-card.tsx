import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card'
import Image from 'next/image'
import { Button } from './ui/button'

const ProjectCards = () => {
  return (
    <Card className='min-w-[250px] max-w-[400px]'>
      <CardHeader>
        <CardTitle>
          Portifólio 1
        </CardTitle>
        <CardDescription>
          Projeto Dogs
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Image src="/dogs.jpg" height={934} width={910} alt='dog' sizes='100vw' priority className='mb-4' />
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, in officiis consectetur totam maxime, voluptate beatae facere, hic pariatur quis veritatis voluptatem! Voluptatibus dignissimos saepe, molestias sit facere nulla esse!</p>
      </CardContent>
      <CardFooter>
        <Button variant="link">Saiba mais</Button>
      </CardFooter>
    </Card>
  )
}

export default ProjectCards