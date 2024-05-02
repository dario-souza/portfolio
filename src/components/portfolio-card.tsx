import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import Image from 'next/image'

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
        <CardContent>
          <Image src="/dogs.jpg" height={934} width={910} alt='dog' sizes='100vw' priority />
        </CardContent>
      </CardHeader>
    </Card>
  )
}

export default ProjectCards