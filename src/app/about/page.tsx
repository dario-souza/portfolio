import { Metadata } from 'next'
import Image from 'next/image'
import React from 'react'

export const metadata: Metadata = {
  title: 'Dario | Sobre mim'
}

const AboutPage = () => {
  return (
    <section className='max-w-screen-lg mx-auto px-4 py-4 sm:px-8 grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4'>
      <div className='mx-auto'>
        <Image className='rounded-full shadow-md' src="https://github.com/sh4kaa.png" alt='Dario-foto' width={460} height={460} sizes="(max-width: 600px) 100vw, 60vw" priority />
        <p className='mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem neque quam reprehenderit, quis, tempora ducimus officiis perspiciatis modi harum laborum quas nam dolores sint, accusamus autem porro? Corporis, aliquam esse?</p>
      </div>
      <div className='bg-red-500 sm:col-span-2'>
        <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse mollitia harum sunt atque itaque, voluptates nesciunt voluptatibus expedita, numquam molestiae minus deleniti temporibus laborum ab omnis doloribus ipsa ad! Repellat.

          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus pariatur recusandae in, temporibus officia dolores voluptates labore ducimus deleniti eaque minus magnam ad ratione, atque velit autem fugit ex placeat.</p>

        <p className='mt-4'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius distinctio voluptate molestiae cumque, neque magni, nam labore, fugiat officia sunt repudiandae recusandae. Suscipit necessitatibus dolorem, assumenda mollitia distinctio nihil quas?
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius distinctio voluptate molestiae cumque, neque magni, nam labore, fugiat officia sunt repudiandae recusandae. Suscipit necessitatibus dolorem, assumenda mollitia distinctio nihil quas?
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius distinctio voluptate molestiae cumque, neque magni, nam labore, fugiat officia sunt repudiandae recusandae. Suscipit necessitatibus dolorem, assumenda mollitia distinctio nihil quas?
        </p>
      </div>
    </section>
  )
}

export default AboutPage