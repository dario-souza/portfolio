import PortfolioCards from '@/components/portfolio-card'
import { Metadata } from 'next'
import React from 'react'
import { Projects } from '../type/types-portfolios'
import { randomUUID } from 'crypto'

export const metadata: Metadata = {
  title: 'Dario | Portifólio'
}
const data: Projects = {
  portfolios: [
    {
      id: randomUUID(),
      title: 'Todo-list',
      subtitle: 'Aplicação de lista de tarefas',
      repo: 'https://github.com/Sh4kaa/todo-list',
      url: 'https://todo-list-dario.vercel.app',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam itaque officiis inventore. Fugiat quisquam nemo architecto asperiores. Optio, deleniti laborum! Nobis odio natus quidem laudantium. Esse nostrum voluptatum mollitia consectetur!',
      img: '/todo-list.jpg'
    },
    {
      id: randomUUID(),
      title: 'Projeto dogs',
      subtitle: 'Uma espécie de rede social para cachorro',
      repo: 'https://github.com/Sh4kaa/dogs',
      url: 'https://dogs-by-dario.vercel.app',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam itaque officiis inventore. Fugiat quisquam nemo architecto asperiores. Optio, deleniti laborum! Nobis odio natus quidem laudantium. Esse nostrum voluptatum mollitia consectetur!',
      img: '/projeto-dogs.jpg'
    },
    {
      id: randomUUID(),
      title: 'Repo favorito',
      subtitle: 'Um site que lista repositórios com suas issues',
      repo: 'https://github.com/Sh4kaa/projeto-repositorios',
      url: 'https://repo-favorito.vercel.app',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam itaque officiis inventore. Fugiat quisquam nemo architecto asperiores. Optio, deleniti laborum! Nobis odio natus quidem laudantium. Esse nostrum voluptatum mollitia consectetur!',
      img: '/repo-favorito.jpg'
    },
    {
      id: randomUUID(),
      title: 'Tarefas',
      subtitle: 'Aplicação de lista de tarefas',
      repo: 'https://github.com/Sh4kaa/tarefas',
      url: 'https://tarefas-sh4kaa.vercel.app',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam itaque officiis inventore. Fugiat quisquam nemo architecto asperiores. Optio, deleniti laborum! Nobis odio natus quidem laudantium. Esse nostrum voluptatum mollitia consectetur!',
      img: '/tarefas.jpg'
    },
    {
      id: randomUUID(),
      title: 'Página web com CMS',
      subtitle: 'Uma página web com sistema de CMS',
      repo: 'https://github.com/Sh4kaa/pagina-web-com-cms',
      url: 'https://dario-cms.vercel.app',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam itaque officiis inventore. Fugiat quisquam nemo architecto asperiores. Optio, deleniti laborum! Nobis odio natus quidem laudantium. Esse nostrum voluptatum mollitia consectetur!',
      img: '/pagina-cms.jpg'
    },
    {
      id: randomUUID(),
      title: 'Página web de compras',
      subtitle: 'Um e-commerce',
      repo: 'https://github.com/Sh4kaa/project-e-commerce',
      url: 'https://project-e-commerce-dario.vercel.app',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam itaque officiis inventore. Fugiat quisquam nemo architecto asperiores. Optio, deleniti laborum! Nobis odio natus quidem laudantium. Esse nostrum voluptatum mollitia consectetur!',
      img: '/e-commerce.jpg'
    },
  ]

}

const PortfolioPage = () => {
  return (
    <section className='max-w-screen-lg mx-auto px-4 py-4 sm:px-8 grid grid-cols-1 sm:grid-cols-2  gap-2  sm:gap-4'>
      {data.portfolios.map(card => (
        <PortfolioCards key={card.id} card={card} />
      ))}
    </section>
  )
}

export default PortfolioPage