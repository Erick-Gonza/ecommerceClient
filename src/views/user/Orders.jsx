import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'
import { useGetOrderListMutation } from '../../store/service/order/orderService'

const Order = () => {
  const { id } = useContext(AuthContext)
  const [getOrderList, { data, isSuccess }] = useGetOrderListMutation()

  useEffect(() => {
    getOrderList(id)
  }, [])

  return (
    <section className='w-full flex flex-col justify-center items-center px-4 py-2 gap-y-2 min-h-[40vh]'>
      <section className='w-full md:w-1/3 flex flex-col gap-4 px-3 py-4 bg-white rounded-lg dark:bg-black shadow-lg'>
        <section className='w-full'>
          <h2 className='text-center text-2xl font-bold '>My Orders</h2>
        </section>

      <section className='w-full md:w-1/2 flex flex-col gap-4 px-3 py-4 bg-white rounded-lg dark:bg-gray-variant'>
        {
          isSuccess && data?.data.map((order) => (
            <Link
              key={order?.id}
              className='w-full p-2 rounded-md shadow-md dark:bg-black'
              to={`/order/${order?.id}`}
            >
              <h2 className='text-center text-xl font-bold'>Order {order?.id}</h2>

              <div className='w-full text-center'>
                {order?.OrderDetails.map((item) => (
                  <div key={item?.id} className='flex w-full h-full justify-center items-center gap-2'>
                    <h2>Product Id: {item?.productId}</h2>
                    <h2>Quantity: {item?.quantity}</h2>
                  </div>
                ))}
              </div>
            </Link>
          ))
        }

      </section>
    </section>
  )
}

export default Order
