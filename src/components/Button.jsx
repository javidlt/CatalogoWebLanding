import React from 'react'

const Button = ({styles, onClick}) => {
  return (
    <button 
      onClick={onClick}
      className={`py-4 px-6 bg-third text-white font-poppins font-medium text-[18px] outline-none ${styles}`}>
      Contactanos
    </button>
  )
}

export default Button