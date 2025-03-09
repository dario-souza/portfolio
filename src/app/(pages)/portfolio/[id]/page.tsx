import React from 'react'
import { data } from '../page'
import Section from '@/components/section'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

type Params = {
  params: { id: string }
}

const portfolios = data.portfolios

const PortfolioDetails = async ({ params: { id } }: Params) => {
  const portfolio = portfolios.find((port) => port.id === id)

  if (!portfolio) {
    return <div>Portfolio not found</div>
  }

  return (
    <Section>
      <h1 className="font-medium text-2xl text-center">{portfolio.title}</h1>
      <p>{portfolio.description}</p>
      <Link className="block mt-4" href="/portfolio">
        <Button>Voltar</Button>
      </Link>
    </Section>
  )
}

export default PortfolioDetails
