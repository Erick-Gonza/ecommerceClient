import React from 'react'

export const Button = ({ btntxt }) => {
  return (
    <button className='border sm:px-1 md:px-2 hover:bg-black hover:text-white dark:bg-black-variant dark:hover:bg-primary rounded-md'>
      {btntxt}
    </button>
  )
}
