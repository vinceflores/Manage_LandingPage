import React from 'react'

const Button = ({title, styles}) => {
  return (
    <button className={`${styles} font-vietnam  h-[2.5rem]  p-0  px-3 py-2  rounded-[20px] `}>
    {title}

    
    </button>
  )
}

export default Button