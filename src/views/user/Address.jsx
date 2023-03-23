import { useContext, useState, useEffect } from 'react'
import Swal from 'sweetalert2'
import { AuthContext } from '../../context/AuthContext'
import { useGetAddressesByUserIdQuery, useGetAllCitiesQuery, useGetAllCountriesQuery, useGetAllStatesQuery, useUpdateAddressMutation } from '../../store/service/address/addressService'

// import Form from '../components/Form/Form'

const Address = () => {
  const { id } = useContext(AuthContext)
  const [isEditMode, setIsEditMode] = useState(false)
  const [countryId, setCountryId] = useState(2)
  const [stateId, setStateId] = useState(2)
  const { data } = useGetAddressesByUserIdQuery(id)
  const addressData = data?.data
  const [updateAddress] = useUpdateAddressMutation()
  const [addressEdit, setAddressEdit] = useState({ ...addressData })
  const { data: citiesData } = useGetAllCitiesQuery(stateId)
  const { data: countriesData } = useGetAllCountriesQuery()
  const { data: statesData } = useGetAllStatesQuery(countryId)
  const cities = citiesData?.cities
  const countries = countriesData?.countries
  const states = statesData?.states

  const toggleEditMode = () => {
    setIsEditMode(!isEditMode)
  }

  useEffect(() => {
    setAddressEdit({
      id: addressData?.id,
      street: addressData?.street,
      city: addressData?.City?.name,
      state: addressData?.State?.name,
      zipCode: addressData?.zipCode,
      county: addressData?.Country?.name
    })
  }, [addressData])

  const handleChange = (e) => {
    const value = parseInt(e.target.value)
    setAddressEdit({
      ...addressEdit,
      cityId: value
    })
  }

  const handleChangeState = (e) => {
    const value = parseInt(e.target.value)
    setAddressEdit({
      ...addressEdit,
      stateId: value
    })
    setStateId(value)
  }

  const handleChangeCountry = (e) => {
    const value = parseInt(e.target.value)
    setAddressEdit({
      ...addressEdit,
      countryId: value

    })
    setCountryId(value)
  }
  const handleSubmitEdit = () => {
    updateAddress({ ...addressEdit })
    Swal.fire({
      target: 'main',
      position: 'center',
      width: '30rem',
      heightAuto: false,
      icon: 'success',
      iconColor: '#green',
      backdrop: true,
      background: '#DE76B5',
      color: '#efefef',
      title: 'Data Saved',
      showConfirmButton: false,
      timer: 1500
    });
  }

  return (
    <section className='flex w-full justify-center items-center'>
      <section className='flex flex-col px-4 py-7 bg-white w-full md:w-1/3 dark:bg-black rounded-md shadow-lg items-center'>
        <section className='w-full'>
          <h2 className='text-center text-2xl font-bold'>My Address</h2>
        </section>

        <section className='flex w-full flex-col justify-center items-right md:items-end md:flex-row mt-2 relative'>
          <section className='flex md:w-full gap-4 px-1 py-5'>
            <section className='flex flex-col gap-y-2 w-1/3 text-right'>
              <h2 className='p-1'>Country</h2>
              <h2 className='p-1'>State/Province</h2>
              <h2 className='p-1'>City</h2>
              <h2 className='p-1'>Street</h2>
              <h2 className='p-1'>ZipCode</h2>

            </section>

            {!isEditMode
              ? (
                <section className='flex flex-col w-2/3 gap-y-2'>
                  <h2 className='p-1 border-2 dark:bg-black-variant border-transparent h-8 rounded shadow'>{addressData?.Country?.name}</h2>
                  <h2 className='p-1 border-2 dark:bg-black-variant border-transparent h-8 rounded shadow'>{addressData?.State?.name}</h2>
                  <h2 className='p-1 border-2 dark:bg-black-variant border-transparent h-8 rounded shadow'>{addressData?.City?.name}</h2>
                  <h2 className='p-1 border-2 dark:bg-black-variant border-transparent h-8 rounded shadow'>{addressData?.street}</h2>
                  <h2 className='p-1 border-2 dark:bg-black-variant border-transparent h-8 rounded shadow'>{addressData?.zipCode}</h2>
black             </section>
              )
              : (
                <form className='flex flex-col gap-2 md:w-1/2 w-1/2 px-5'>
                  <select onChange={handleChangeCountry} id='countryId' className='border rounded w-full h-8 dark:bg-black-variant'>
                    <option disabled>-Select a country-</option>
                    {countries.filter((country) => {
                      if (country.id > 1) {
                        return country
                      }
                    }).map((country, key) => {
                      return (
                        <option key={key} value={country?.id}>{country?.name}</option>
                      )
                    })}
                  </select>
                  <select onChange={handleChangeState} id='stateId' className='border rounded w-full h-8 dark:bg-black-variant'>
                    <option disabled>-Select a state-</option>
                    {states.filter((state) => {
                      if (state?.id > 1) {
                        return state
                      }
                    }).map((state, key) => {
                      return (
                        <option key={key} value={state?.id}>{state?.name}</option>
                      )
                    })}
                  </select>
                  <select type='#' onChange={handleChange} id='cityId' className='border rounded w-full h-8 dark:bg-black-variant'>
                    <option disabled>-Select a city-</option>
                    {cities.filter((city) => {
                      if (city.id > 1) {
                        return city
                      }
                    }).map((city, key) => {
                      return (
                        <option key={key} value={city?.id}>{city?.name}</option>
                      )
                    })}
                  </select>

                  <input
                    className='md:w-full py-1 px-1 h-8 border rounded shadow-md hover:scale-105 bg-white-variant dark:bg-black-variant'
                    type='text'
                    id='street'
                    value={addressEdit?.street}
                    onChange={(e) =>
                      setAddressEdit({ ...addressEdit, street: e.target.value })}
                  />

                  <input
                    className='md:w-full py-1 px-1 h-8 border rounded shadow-md hover:scale-105 bg-white-variant dark:bg-black-variant'
                    type='#'
                    id='zipCode'
                    value={addressEdit?.zipCode}
                    onChange={(e) =>
                      setAddressEdit({ ...addressEdit, zipCode: e.target.value })}
                  />

                </form>
              )}
        </section>
          </section>
          {!isEditMode
            ? (<button
              onClick={toggleEditMode}
              className='flex w-40  hover:scale-105 drop-shadow-md justify-center bg-primary text-white font-bold px-3 py-2 rounded-lg mt-4 mb-4 cursor-pointer h-10'
            >
              Edit Info
            </button>)
            : (<button
              onClick={() => {
                toggleEditMode();
                handleSubmitEdit();
              }}
              className='flex w-40  hover:scale-105 drop-shadow-md justify-center bg-primary text-white font-bold px-3 py-2 rounded-lg mt-4 mb-4 cursor-pointer h-10'
            >
              Save
            </button>)}
      </section>
    </section>
  )
}

export default Address
