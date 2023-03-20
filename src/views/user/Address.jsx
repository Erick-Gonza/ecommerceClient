import { useContext, useState, useEffect } from 'react'
import { AuthContext } from '../../context/AuthContext'
import { useGetAddressesByUserIdQuery, useUpdateAddressMutation } from '../../store/service/address/addressService'

// import Form from '../components/Form/Form'

const Address = () => {
  const {id} = useContext(AuthContext)
  const [isEditMode, setIsEditMode] = useState(false)
  const {data} = useGetAddressesByUserIdQuery(id)
  const addressData = data?.data
  const [updateAddress] = useUpdateAddressMutation()
  const [addressEdit, setAddressEdit] = useState({...addressData})
  
  const toggleEditMode = () => {
    setIsEditMode(!isEditMode)
  }

  useEffect(() => {
    setAddressEdit({
      userId: id,
      street: addressData?.street,
      city: addressData?.City.name,
      state: addressData?.State.name,
      zipCode: addressData?.zipCode,
      county: addressData?.Country.name
    })
  }, [addressData])
  

  return (
    <section className='w-full flex flex-col justify-center items-center px-4 py-7'>
      <section className='w-full'>
        <h2 className='text-center text-2xl font-bold'>My Address</h2>
      </section>

      <section className='flex w-full flex-col justify-center items-right md:items-end md:flex-row mt-2 relative'>
        <section className='flex md:w-1/2 gap-4 px-1 py-5'>
          <section className='flex flex-col gap-y-2 w-1/2 text-right'>
            <h2 className='p-1'>Street</h2>
            <h2 className='p-1'>City</h2>
            <h2 className='p-1'>State</h2>
            <h2 className='p-1'>ZipCode</h2>
            <h2 className='p-1'>Country</h2>
          </section>

          {!isEditMode
            ? (
              <section className='flex flex-col md:w-1/2 gap-y-2'>
                <h2 className='p-1'>{addressData?.street}</h2>
                <h2 className='p-1'>{addressData?.City.name}</h2>
                <h2 className='p-1'>{addressData?.State.name}</h2>
                <h2 className='p-1'>{addressData?.zipCode}</h2>
                <h2 className='p-1'>{addressData?.Country.name}</h2>
              </section>
              )
            : (
              <form className='flex flex-col gap-2 md:w-1/2 w-1/2 px-5'>
                <input
                  className='md:w-full py-1 px-1 h-8 border rounded shadow-md hover:scale-105 bg-white-variant'
                  type='text'
                  id='street'
                  placeholder={addressEdit?.street}
                  onChange={(e)=>
                  setAddressEdit({...addressEdit, street: e.target.value})}
                  />
                    <select id='cityId' className='border rounded w-full h-11'>
                      <option disabled>-Select a city-</option>
                      <option>Citi1</option>
                    </select>
                    <select id='cityId' className='border rounded w-full h-11'>
                      <option disabled>-Select a state-</option>
                      <option>State</option>
                    </select>
                <input
                  className='md:w-full py-1 px-1 h-8 border rounded shadow-md hover:scale-105 bg-white-variant'
                  type='#'
                  placeholder='ZipCode'
                />
                    <select id='cityId' className='border rounded w-full h-11'>
                      <option disabled>-Select a country-</option>
                      <option>Country1</option>
                    </select>
              </form>
              )}
        </section>
        {!isEditMode 
        ?(<button
          onClick={toggleEditMode}
          className='flex w-40  hover:scale-105 drop-shadow-md justify-center bg-primary text-white font-bold px-3 py-2 rounded-lg mt-4 mb-4 cursor-pointer h-10'
        >
          Edit Info
        </button>) 
        : (<button
          onClick={()=>updateAddress({...addressEdit})}
          className='flex w-40  hover:scale-105 drop-shadow-md justify-center bg-primary text-white font-bold px-3 py-2 rounded-lg mt-4 mb-4 cursor-pointer h-10'
        >
          Save
        </button>) }
      </section>
    </section>
  )
}

export default Address
