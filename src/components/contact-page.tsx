'use client'
import React from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import sendEmail from '@/app/utils/send-email'
import ContactModal from './modal-contact'

const ContactSchema = z.object({
  name: z.string().min(1, 'O campo nome deve ser preenchido').max(49, 'Esse nome é muito grande my friend'),
  email: z.string().min(1, 'O campo e-mail está vazio').email('Insira um e-mail válido'),
  message: z.string().min(10, 'A mensagem precisa ter no mínimo 10 caracteres')
})

type ContactForm = z.infer<typeof ContactSchema>

/* Component */
const ContactPage = () => {
  const form = useForm<ContactForm>({
    resolver: zodResolver(ContactSchema),
    defaultValues: {
      email: '',
      message: '',
      name: ''
    }
  })
  const submitForm = async (data: ContactForm) => {
    const response = await sendEmail(data)
    if (!response.error) {
      form.reset()
    }
  }
  return (
    <Form {...form}>
      <form className='w-full max-w-[410px]' onSubmit={form.handleSubmit(submitForm)}>
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
                <Textarea {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )
        }} />
        <Button className='mt-4' type="submit" disabled={form.formState.isSubmitting}>{form.formState.isSubmitting ? 'Enviando...' : 'Enviar'}</Button>
        {form.formState.isSubmitSuccessful && (
          <ContactModal isModal={true} />
        )}
      </form>
    </Form>
  )
}

export default ContactPage