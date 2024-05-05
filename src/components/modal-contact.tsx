'use client'
import React from 'react'
import { Card, CardHeader } from './ui/card'

type ModalProps = {
  isModal: boolean
}

const ContactModal = ({ isModal }: ModalProps) => {
  const [modal, setModal] = React.useState(isModal)
  const handleOutside = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      setModal(false)
    }
  }
  return (
    <>
      {modal && (
        <div className='absolute h-screen w-full flex items-center justify-center backdrop-blur-sm z-50 top-0 left-0' onClick={handleOutside}>
          <Card>
            <CardHeader>
              E-mail enviado com sucesso 🎉
            </CardHeader>
          </Card>
        </div>
      )}
    </>
  )
}

export default ContactModal