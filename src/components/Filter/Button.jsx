import React from 'react'

export const Button = ({ btntxt }) => {
  return (
    <button className='border sm:px-1 md:px-2 hover:bg-black hover:text-white dark:bg-black-variant hover:bg-primary rounded-md dark:hover:text-black'>
      {btntxt}
    </button>
  )
}
