import React from 'react'
import { data } from '../page'
import Section from '@/components/section'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

type Params = {
  params: { id: string }
}

const portfolios = data.portfolios

const PortfolioDetails = ({ params: { id } }: Params) => {
  const title = portfolios.find((title) =>
    title.id === id ? title.title : null
  )
  return (
    <Section>
      <h1 className="font-medium text-2xl text-center">{title?.title}</h1>
      {portfolios.map((port) =>
        port.id === id ? <p key={port.id}>{port.description}</p> : null
      )}
      <Link className="block mt-4" href="/portfolio">
        <Button>Voltar</Button>
      </Link>
    </Section>
  )
}

export default PortfolioDetails
