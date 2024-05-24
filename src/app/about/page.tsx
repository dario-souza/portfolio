import { Metadata } from 'next'
import Image from 'next/image'
import React from 'react'

export const metadata: Metadata = {
  title: 'Dario | Sobre mim'
}

const AboutPage = () => {
  return (
    <section className='max-w-screen-lg mx-auto px-4 py-4 sm:px-8 grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-x-8'>
      <div>
        <Image className='rounded-full shadow-md mx-auto' src="https://github.com/sh4kaa.png" alt='Dario-foto' width={460} height={460} sizes="(max-width: 600px) 100vw, 60vw" priority />
        <p className='mt-4 italic text-center text-xs font-thin'>Programação por paixão, dinheiro é consequência, e pagando bem, que mal tem rs</p>
      </div>
      <div className='sm:col-span-2 relative about'>
        <h1 className='text-center text-2xl font-semibold'>Um pouco sobre mim...</h1>
        <p className='leading-6 font-medium'>
          Me chamo Dário👋, sou natural de Osasco, São paulo, mas moro na zona oeste de são paulo, sou formado em Análise e desenvolvimento de sistemas pela <strong>Universidade Paulista <span className='italic'>UNIP</span> campus Chácara Sto. Antonio, zona sul. </strong>   Como todo apaixonado por tecnologia, é natural ter hobbies que façam jus à tecnologia, como por exemplo gostar de games, jogos de computador, dos mais atuais até os jogos mais retrô, gosto do bom e velho rock&apos;n roll também, toco um pouco de violão, gosto animes e de gatos 😼.
        </p>
        <h1 className='text-center text-2xl font-semibold'>O interesse</h1>
        <p className='leading-6'>
          Meu interesse pela tecnologia surgiu desde minha adolescência, meu primeiro contato com tecnologia foi no ensino fundamental, onde uma vez por semana tínhamos aula de informática, foi quando aprendi à salvar um arquivo de imagem usando o aplicativo paint, na época o sistema operacional era Windows 98 e o acesso à informática era bem restrito, nem todo mundo tinha acesso a um computador pessoal, e eu estava nessa lista de pessoas. <br /> <br /> Desde então fiquei fissurado por tecnologia, queria saber como funcionava realmente o sistema de um computador, como era possível emular jogos antigos no computador, quem desenvolvia os programas e como tudo aquilo era feito, eram questões que burbulhavam em minha mente naquela época.

          O que eu precisa era apenas de um computador, não precisa de internet e inclusive nessa época não existia internet banda larga, só internet discada, que cheguei à ter acesso graças ao meu primeiro trabalho, meu ex patrão tinha computador com internet discada, ele deixava eu usar aos finais de semana, ele também me ajudou a conquistar meu primeiro computador um &quot;AMD K6 550mhz&quot; e nessa época aprendi a fazer reparos em computador, tanto no sistema quanto na parte física montagem e manutenção.
        </p>

        <h1 className='text-center text-2xl font-semibold'>Atualmente</h1>
        <p className='leading-6'>
          Atualmente trabalho como como analista de suporte, reservo sempre um tempo para programar e estudar programação, participo de eventos e imersões de programação, dentro do escopo de front-end e back-end. Tenho bons conhecimentos em desenvolvimento web utilizando as tecnologias HTML Javascript e css puro, e também utilizando frameworks e bibliotecas como por exemplo, React e Nextjs, onde é possível desenvolver aplicações web escaláveis de uma forma mais moderna e robusta e de fácil manutenabilidade. Tenho conhecimento de como integrar API&apos;s no front-end, tenho um pouco de familiaridade com back-end utilizando NodeJS
        </p>

      </div>
    </section>
  )
}

export default AboutPage