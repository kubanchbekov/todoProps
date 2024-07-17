import React from 'react'
import styled from 'styled-components'

const Button = ({children,type,onClick,...rest}) => {
  return (
    <div>
        <StyledButton type={type} onClick={onClick} {...rest}>{children}</StyledButton>
    </div>
    
  )
}

export default Button

const StyledButton =styled.button`
    background-color: #3d3dd8;
    border: none;
    border-radius: 8px;
    color: white;
    padding: 20px 10px;
    font-size: 18px;
    font-weight: bold;
`