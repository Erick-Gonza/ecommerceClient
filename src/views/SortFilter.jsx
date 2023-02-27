import React from 'react'

const SortFilter = () => {
  return (
    <section className="bg-white min-h-screen w-80 fixed top-0 right-0">
      <div className="flex flex-row m-3 grid grid-cols-6">
        <div className="col-span-1">
        <button onClick={''}> 
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
        </button>
        </div>
        <div className="col-span-4">
            <h2 className="text-2xl font-bold text-center">SORT & FILTER</h2>
        </div>
        <div className="col-span-1">
        </div> 
      </div>
        
      
      
      
      
        
    </section>
  )
}

export default SortFilter