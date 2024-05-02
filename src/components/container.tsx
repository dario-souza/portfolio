
import React from 'react'

type ContainerProps = React.ComponentProps<'div'>
const Container = ({ children, ...props }: ContainerProps) => {
  return (
    <div {...props} >
      {children}
    </div>
  )
}

export default Container