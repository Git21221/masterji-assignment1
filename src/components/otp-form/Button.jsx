import React from 'react'

function Button({content, className}) {
  return (
   <button className={`bg-[#112D4E] w-full text-white rounded-lg h-[64px] font-normal text-[25px] ${className}`}>{content}</button>
  )
}

export default Button