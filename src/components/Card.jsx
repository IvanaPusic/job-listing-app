import React from 'react'

const Card = ({ children, bg="bg-gray-100" }) => {
  return (
    <article className= {` ${bg} p-6 shadow-md rounded-lg`}>{ children }</article >
  )
}

export default Card