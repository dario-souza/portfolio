import React from 'react'

const TemplateEmail = ({ name, email, message }: { name: string, email: string, message: string }) => {
  return (
    <div>
      <h1>Nome: {name}</h1>
      <span><strong>Email: </strong>{email}</span>
      <p>{message}</p>
    </div>
  )
}

export default TemplateEmail