import React from 'react'

function Button({
    children,
    className='',
    btnColor='bg-purple-500',
    textColor='text-white',
    type='button',
    ...props
}) {
  return (
    <button className={`px-6 py-2 inline-block duration-200 rounded-full ${btnColor} ${textColor} ${className} hover:bg-purple-400`} {...props} type={type}>
        {children}
    </button>
  )
}

export default Button