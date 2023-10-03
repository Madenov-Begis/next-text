import React from 'react'

interface ButtonProps {
  text: string
  from: string
  to: string
  shadow: string
  type: 'button' | 'submit' | 'reset' | undefined
}

export const Button = ({ text, from, to, shadow, type }: ButtonProps) => {
  return (
    <button
      type={type}
      className={`w-full py-4 rounded-full shadow-[#fff] bg-gradient-to-l from-[#000] to-[${to}]`}
    >
      {text}
    </button>
  )
}
