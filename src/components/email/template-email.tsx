import React from 'react'

const TemplateEmail = ({ name, email, message }: { name: string, email: string, message: string }) => {
  return (
    <div>
      <h1>{name}</h1>
      <span>{email}</span>
      <p>{message}</p>
    </div>
  )
}

export default TemplateEmail