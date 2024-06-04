
import React from 'react'

type ParagraphProps = React.ComponentProps<'p'>

const Paragraph = ({ children, ...props }: ParagraphProps) => {
  return (
    <p {...props}>{children}</p>
  )
}

export default Paragraph