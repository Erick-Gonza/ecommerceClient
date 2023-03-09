import { useState } from 'react'

export const Dropdown = () => {
  const subcats = [
    {
      id: 1,
      name: 'Dresses'
    },
    {
      id: 3,
      name: 'Skirts'
    },
    {
      id: 2,
      name: 'Tops'
    }
  ]
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(!open)
  }
  return (
    <div className=''>
      <div
        className={`py-2 flex flex-row justify-between ${
          open ? 'border-b-0' : 'border-b'
        } `}
      >
        <button
          className='w-full relative flex justify-between'
          onClick={handleOpen}
        >
          <p className=''>Subcategory</p>
          <div>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth='1.5'
              stroke='currentColor'
              className='w-6 h-6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M19.5 8.25l-7.5 7.5-7.5-7.5'
              />
            </svg>
          </div>
        </button>
      </div>

      <div
        className={`static border-b w-full ${open ? 'inline-block' : 'hidden'}`}
      >
        <ul className='space-y-1'>
          <li>
            {subcats.map((sc, index) => {
              return (
                <p className='flex' key={index}>
                  <input type='checkbox' />
                  <span>{sc.name}</span>
                </p>
              )
            })}
          </li>
        </ul>
      </div>
    </div>
  )
}
