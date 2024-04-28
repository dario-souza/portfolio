'use client'
import Container from '@/components/container'
// import { Metadata } from 'next'
import React from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { error } from 'console'


// export const metadata: Metadata = {
//   title: 'Dario | Contato'
// }
const ContactSchema = z.object({
  name: z.string().min(2, 'Você precisa inserir o campo nome'),
  email: z.string().min(2).email('Email obrigatório'),
  message: z.string().min(5, 'A mensagem precisa ter no mínimo 5 caracteres')
})


type ContactForm = z.infer<typeof ContactSchema>



const ContactPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<ContactForm>({ resolver: zodResolver(ContactSchema) })

  const submitForm = (data: ContactForm) => {
    console.log(data.message)
  }
  return (
    <section>
      <Container>
        <form onSubmit={handleSubmit(submitForm)}>
          {/* field name */}
          <div>
            <label htmlFor="name">Nome</label>
            <input type="text" {...register('name')} />
          </div>
          {errors.name && <span>{errors.name.message}</span>}
          {/* field Email */}
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" {...register('email')} />
          </div>
          {errors.email && <span>{errors.email.message}</span>}
          {/* field message */}
          <div>
            <label className='block' htmlFor="message">Mensagem</label>
            <textarea {...register('message')} />
          </div>
          {errors.message && <span className='block'>{errors.message.message}</span>}
          <input type="submit" value="Enviar" className='bg-zinc-300 py-2 px-4 rounded' />
        </form>
      </Container>
    </section>
  )
}

export default ContactPage