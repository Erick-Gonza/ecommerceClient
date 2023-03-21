import { useContext } from 'react'
import { Button } from '../components/Filter/Button'
import { Dropdown } from '../components/Filter/Dropdown'
import { modalsContext } from '../context/ModalsContext'
import { HiX } from 'react-icons/hi'

const SortFilter = () => {
  const { openCard, openFilter, isCardOpen, isFilterOpen } =
    useContext(modalsContext)

  return (
    <section
      className={`dark:bg-black-variant dark:text-white-variant bg-white min-h-screen w-80 fixed top-0 right-0 z-50 ${
        openFilter !== true ? 'hidden' : 'block'
      } `}
    >
      <div className='flex-row m-3 grid grid-cols-6' onClick={isFilterOpen}>
        <div className='col-span-1 '>
          <button>
            <HiX className='w-6 h-6 hover:scale-105' />
          </button>
        </div>
        <div className='col-span-4 '>
          <h2 className='text-2xl font-bold text-center '>SORT & FILTER</h2>
        </div>
        <div className='col-span-1' />
      </div>
      <div className='m-3'>
        <p className='my-3 font-bold'>SORT BY</p>
        <div className='flex justify-evenly'>
          <Button btntxt='Newest' />
          <Button btntxt='Price lowest' />
          <Button btntxt='Price highest' />
        </div>
      </div>
      <div className='m-3'>
        <p className='font-bold'>FILTER</p>
        <Dropdown />
        <Dropdown />
        <Dropdown />
        <button className='dark:bg-primary hover:bg-primary dark:text-black font-semibold bg-black text-white w-full mt-4 rounded-md hover:scale-105'>APPLY</button>
      </div>
    </section>
  )
}

export default SortFilter
