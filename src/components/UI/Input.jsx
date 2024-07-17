import React from 'react'

const Input = ({type='text',onChange,value,...rest}) => {
  return (
    <>
    <input type={type} onChange={onChange} value={value} {...rest} />
    </>
  )
}

export default Input