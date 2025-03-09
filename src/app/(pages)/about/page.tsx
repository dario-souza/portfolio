import Paragraph from '@/components/paragraph'
import Section from '@/components/section'
import { Metadata } from 'next'
import Image from 'next/image'
import React from 'react'

export const metadata: Metadata = {
  title: 'Dario | Sobre mim',
}

const AboutPage = () => {
  return (
    <Section className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-x-8">
      <div className="mb-8">
        <Image
          className="rounded-full shadow-md mx-auto"
          src="https://github.com/dario-souza.png"
          alt="Dario-foto"
          width={460}
          height={460}
          sizes="(max-width: 600px) 100vw, 60vw"
          priority
        />
        <Paragraph className="mt-4 italic text-center text-xs font-thin">
          Programação por paixão, dinheiro é consequência, e pagando bem, que
          mal tem rs
        </Paragraph>
      </div>
      <div className="sm:col-span-2 relative about">
        <h1 className="text-center text-2xl font-semibold my-6">
          Um pouco sobre mim...
        </h1>
        <Paragraph className="leading-6 font-medium">
          Me chamo Dário👋, sou natural de Osasco, São paulo, mas moro na zona
          oeste de são paulo, sou formado em Análise e desenvolvimento de
          sistemas pela{' '}
          <strong>
            Universidade Paulista <span className="italic">UNIP</span> campus
            Chácara Sto. Antonio, zona sul.{' '}
          </strong>{' '}
          Como todo apaixonado por tecnologia, tenho hobbies que já são de praxe
          para quem faz parte desse meio tecnológico, gosto de games, jogos de
          computador, dos mais atuais até os jogos mais retrô, gosto do bom e
          velho rock&apos;n roll também, toco um pouco de violão, gosto animes e
          de gatos 😼.
        </Paragraph>
        <h1 className="text-center text-2xl font-semibold my-6">
          O interesse por tecnologia
        </h1>
        <Paragraph className="leading-6">
          Meu interesse pela tecnologia surgiu desde minha adolescência, meu
          primeiro contato com tecnologia foi no ensino fundamental, onde uma
          vez por semana tínhamos aula de informática, foi quando aprendi à
          salvar um arquivo de imagem usando o aplicativo paint, na época o
          sistema operacional era Windows 98 e o acesso à informática era bem
          restrito, nem todo mundo tinha acesso a um computador pessoal, e eu
          estava nessa lista de pessoas. <br /> <br /> Desde então, fiquei
          fissurado por tecnologia, queria saber como realmente funcionava o
          sistema de um computador, como era possível emular jogos antigos no
          computador, quem desenvolvia os programas e como tudo aquilo era
          feito, eram questões que burbulhavam em minha mente naquela época.{' '}
        </Paragraph>
        <Paragraph>
          O que eu precisava era apenas de um computador, não precisava de
          internet e inclusive nessa época não existia internet banda larga, só
          internet discada, que cheguei à ter acesso graças ao meu primeiro
          trabalho, meu ex patrão tinha computador com internet discada, ele
          deixava eu usar aos finais de semana, ele também me ajudou a
          conquistar meu primeiro computador um &quot;AMD K6 550mhz&quot; e
          nessa época aprendi a fazer reparos em computador, tanto no sistema
          quanto na parte física montagem e manutenção.
        </Paragraph>

        <h1 className="text-center text-2xl font-semibold my-6">
          Habilidades Front-end
        </h1>
        <Paragraph className="leading-6">
          Tenho uma base sólida em lógica de programação, domino bem, Html, Css,
          Javascript, Typescript, Nextjs/React, programação orientada a objetos,
          versionamento com git e github. Dentro do escopo de front-end, entendo
          conceitos de SPA e server side rendering, na estilização do HTML sei
          utilizar Sass, Tailwindcss e Styled-components, Css modules e
          Back-end, consumo e tratamento de dados de API&apos;s e formulários.
          <br /> <br /> Procuro sempre me manter atualizado, participo de
          eventos de programação e imersões, como por exemplo NLW da rockeseat e
          atualmente estou estudando sobre aplicações em containers com docker e
          testes unitários.
        </Paragraph>

        <h1 className="text-center text-2xl font-semibold my-6">Cursos</h1>
        <ul className="ml-4 list-disc leading-6">
          <li>
            <a
              className="hover:text-[#918FF3] transition-colors"
              href="https://www.udemy.com/certificate/UC-437ed9f2-373d-4432-95c3-ecc375ca4eb8/"
              target="_blank"
            >
              C# COMPLETO Programação Orientada a Objetos + Projetos
            </a>
          </li>
          <li>
            <a
              className="hover:text-[#918FF3] transition-colors"
              href="https://www.udemy.com/certificate/UC-E5MFWN2X/"
              target="_blank"
            >
              C# primeiros passos: Lógica de Programação e Algoritmos
            </a>
          </li>
          <li>
            <a
              className="hover:text-[#918FF3] transition-colors"
              href="https://www.origamid.com/certificate/9991bd13/"
              target="_blank"
            >
              CSS Flexbox
            </a>
          </li>
          <li>
            <a
              className="hover:text-[#918FF3] transition-colors"
              href="https://www.origamid.com/certificate/2043cdc7/"
              target="_blank"
            >
              CSS Grid Layout
            </a>
          </li>
          <li>
            <a
              className="hover:text-[#918FF3] transition-colors"
              href="https://www.origamid.com/certificate/45472a0f/"
              target="_blank"
            >
              JavaScript Completo ES6+
            </a>
          </li>
          <li>
            <a
              className="hover:text-[#918FF3] transition-colors"
              href="https://www.origamid.com/certificate/448df1c2"
              target="_blank"
            >
              React Completo
            </a>
          </li>
          <li>
            <a
              className="hover:text-[#918FF3] transition-colors"
              href="https://www.udemy.com/certificate/UC-c4db004a-506a-40d4-a36a-4f9e12939343/"
              target="_blank"
            >
              TypeScript do básico ao avançado (c/ React, Express)
            </a>
          </li>
          <li>
            <a
              className="hover:text-[#918FF3] transition-colors"
              href="https://www.udemy.com/certificate/UC-6197c104-f92e-4e7c-a2b2-30b8db164a08/"
              target="_blank"
            >
              Tailwind CSS do básico ao avançado + Projetos
            </a>
          </li>
          <li>
            <a
              className="hover:text-[#918FF3] transition-colors"
              href="https://www.origamid.com/certificate/e31d6962"
              target="_blank"
            >
              TypeScript para Iniciantes
            </a>
          </li>
        </ul>
      </div>
    </Section>
  )
}

export default AboutPage
