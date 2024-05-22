
import PortfolioCards from '@/components/portfolio-card'
import { Metadata } from 'next'
import React from 'react'
import { Projects } from '../type/types-portfolios'
import { randomUUID } from 'crypto'
import { FaReact, FaSass } from 'react-icons/fa'
import { SiFirebase, SiPrismic, SiStyledcomponents, SiTypescript } from 'react-icons/si'
import { TbBrandNextjs } from "react-icons/tb";



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
      description: 'Projeto criado com REACTJS, utilizando a CLI CRA(create react app) para estilização do projeto usamos css modules, utilizo também typescript para ter uam segurança a mais nos tipos do javascript. É possivel adicionar tarefas, remover tarefas e editar tarefas',
      img: '/todo-list.png',
      techs: ['react', 'typescript']
    },
    {
      id: randomUUID(),
      title: 'Projeto dogs',
      subtitle: 'Uma espécie de rede social para cachorro',
      repo: 'https://github.com/Sh4kaa/dogs',
      url: 'https://dogs-by-dario.vercel.app',
      description: 'Projeto criado com REACTJS, utilizando a CLI CRA(create react app) para estilização do projeto usamos css modules, podemos criar contas de usuário, mas já existe também uma conta padrão, usuário: dog, senha: dog. Os uploads de fotos ficam apenas por 10 minutos no servidor, depois as fotos são deletadas. Esse Projeto é do curso "React Completo" que fiz na plataforma origamid.com onde é possivel aproveitar conceitos, estratégias, boas práticas com react js. O projeto conta também com uma biblioteca de gráficos chamada victory',
      img: '/projeto-dogs.png',
      techs: ['react']
    },
    {
      id: randomUUID(),
      title: 'Repo favorito',
      subtitle: 'Um site que lista repositórios com suas issues',
      repo: 'https://github.com/Sh4kaa/projeto-repositorios',
      url: 'https://repo-favorito.vercel.app',
      description: 'Este é um projeto simples que permite adicionar repositórios famosos do GitHub e exibir informações sobre eles, incluindo detalhes do projeto, issues e o status das issues.',
      img: '/repo-favorito.png',
      techs: ['react', 'typescript', 'styled-components']
    },
    {
      id: randomUUID(),
      title: 'Tarefas',
      subtitle: 'Aplicação de lista de tarefas',
      repo: 'https://github.com/Sh4kaa/tarefas',
      url: 'https://tarefas-sh4kaa.vercel.app',
      description: 'Este Projeto lembra muito um TodoList, mas com um alguns upgrades. O site com conta com autenticação google e foi utilizado o firebase como banco. Você cria uma tarefa, essa tarefa pode ser pública ou privada. Sendo possível compartilhar o link da tarefa com outras pessoas, fazer comentários nas tarefas que são públicas',
      img: '/tarefas.png',
      techs: ['nextjs', 'typescript', 'firebase']
    },
    {
      id: randomUUID(),
      title: 'Página web com CMS',
      subtitle: 'Uma página web com sistema de CMS',
      repo: 'https://github.com/Sh4kaa/pagina-web-com-cms',
      url: 'https://dario-cms.vercel.app',
      description: 'Este é um projeto desenvolvido com nextJS introduzindo o conceito de SSG(server-side-rendering) e ISG(incremental-static-regeneration) onde podemos unir um pouco dos dois mundos.',
      img: '/pagina-cms.png',
      techs: ['typescript', 'nextjs', 'sass', 'prismic']
    },
    {
      id: randomUUID(),
      title: 'Página web de compras',
      subtitle: 'Um e-commerce',
      repo: 'https://github.com/Sh4kaa/project-e-commerce',
      url: 'https://project-e-commerce-dario.vercel.app',
      description: 'Esse é projeto próprio de um protótipo de um site de venda de produtos comtodas as principais funcionalidades de um site de venda. O gerenciamento do carrinho é feito no localStorage onde é possivel persistir os dados. Foi utilizado também uma api para consumo dos dados https://fakestoreapi.com/products.',
      img: '/e-commerce.png',
      techs: ['nextjs', 'typescript']
    },
  ]
}

const PortfolioPage = () => {
  return (
    <section className='max-w-screen-lg mx-auto px-4 py-4 sm:px-8 grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4'>
      {data.portfolios.map(card => (
        <PortfolioCards key={card.id} card={card} />
      ))}
    </section>
  )
}

export default PortfolioPage