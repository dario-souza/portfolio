'use client'
import Container from '@/components/container'
// import { Metadata } from 'next'
import React from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { error } from 'console'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'


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
  const form = useForm<ContactForm>({
    resolver: zodResolver(ContactSchema),
    defaultValues: {
      email: '',
      message: '',
      name: ''
    }
  })

  const submitForm = (data: ContactForm) => {
    console.log(data.message)
  }
  return (
    <section>
      <Container>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(submitForm)}>
            <FormField control={form.control} name='name' render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Nome</FormLabel>
                  <FormControl>
                    <Input type='text' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )
            }} />
            <FormField control={form.control} name='email' render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input type='email' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )
            }} />

            <FormField control={form.control} name='message' render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Mensagem</FormLabel>
                  <FormControl>
                    <Input type='text' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )
            }} />
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </Container>
    </section>
  )
}

export default ContactPage