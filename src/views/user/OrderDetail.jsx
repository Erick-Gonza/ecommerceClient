import { Link, useParams } from 'react-router-dom'
import { useGetOrderDetailListQuery } from '../../store/service/order/orderService'

const OrderDetail = () => {
  const { id } = useParams()
  const { data } = useGetOrderDetailListQuery(id)
  const dataProducts = data?.data

  const totalQuantity = dataProducts?.reduce(
    (total, product) => total + product?.ProductQuantity,
    0
  )
  const totalPrice = dataProducts?.reduce(
    (total, product) => total + parseInt(product?.ProductPrice),
    0
  )
  return (
    <>
      <section className='flex w-full flex-col justify-center items-center md:flex-row mt-2 relative py-8'>
        <section className='flex md:w-1/2 w-full gap-2 px-1 py-5 dark:bg-black bg-white shadow-xl rounded-lg'>
          <section className='flex flex-col w-full gap-y-12 drop-shadow-lg items-center'>
            <h2 className='text-xl font-bold'>Order Id: {id}</h2>
            {dataProducts?.map((product, index) => (
              <section
                key={product.index}
                className='flex md:flex-row flex-col items-center bg-white-variant drop-shadow-md rounded-md dark:bg-black-variant md:w-2/3 px-4 py-4 gap-4'
              >
                <section className='md:w-full'>
                  <h2 className='w-full p-1'>Name: {product?.ProductName}</h2>
                  <h2 className='w-full p-1'>Price: {product?.ProductPrice}</h2>
                  <h2 className='w-full p-1'>Quantity: {product?.ProductQuantity} </h2>
                </section>
                <section className='w-full items-end'>
                  <img
                    className='object-cover aspect-square drop-shadow-lg rounded h-64 md:h-48 shadow-lg'
                    src={product?.ProductImage}
                    alt={product?.ProductName}
                  />
                </section>
              </section>
            ))}
            <section className='flex flex-row font-bold items-center justify-center md:w-1/2 w-full'>
              <section className='w-full gap-y-4 text-right px-2'>
                <h2>Total Quantity:</h2>
                <h2>Total Price: </h2>
              </section>
              <section className='w-full gap-y-4'>
                <h2>{totalQuantity}</h2>
                <h2>{parseInt(totalPrice)}</h2>
              </section>
            </section>
            <Link
              to='/profile'
              className='flex w-40 hover:scale-105 drop-shadow-md justify-center bg-primary text-white font-bold px-3 py-2 rounded-lg mt-4 mb-4 cursor-pointer h-10'
            >
              <p>Back</p>
            </Link>
          </section>
        </section>

      </section>
    </>
  )
}

export default OrderDetail
