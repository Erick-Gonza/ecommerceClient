import { Link, useParams } from 'react-router-dom'

const OrderDetail = () => {
  const { id } = useParams()
  const dataProducts = [
    {
      id: 'id1',
      name: 'Product Name 1',
      price: '10.00',
      description: 'Product description 1',
      quantity: 1,
      img: 'https://picsum.photos/1920/800',
    },
    {
      id: 'id2',
      name: 'Product Name 2',
      price: '20.00',
      description: 'Product description 2',
      quantity: 1,
      img: 'https://picsum.photos/1920/800',
    },
    {
      id: 'id3',
      name: 'Product Name 3',
      price: '30.00',
      description: 'Product description 3',
      quantity: 1,
      img: 'https://picsum.photos/1920/800',
    },
  ]

  const totalQuantity = dataProducts.reduce(
    (total, product) => total + product.quantity,
    0
  )
  const totalPrice = dataProducts.reduce(
    (total, product) => total + parseFloat(product.price),
    0
  )
  return (
    <>
      <h2>{id}</h2>
      <section className="flex w-full flex-col justify-center items-center md:flex-row mt-2 relative ">
        <section className="flex md:w-1/2 gap-2 px-1 py-5">
          <section className="flex flex-col w-full gap-y-12 drop-shadow-lg items-center">
            {dataProducts.map((product) => (
              <section
                key={product.id}
                className="flex md:flex-row flex-col items-center"
              >
                <section className="md:w-full">
                  <h2 className="w-full p-1">Name: {product.name}</h2>
                  <h2 className="w-full p-1">
                    Description: {product.description}
                  </h2>
                  <h2 className="w-full p-1">Price: {product.price}</h2>
                  <h2 className="w-full p-1">Quantity: {product.quantity} </h2>
                </section>
                <section className="w-full items-end">
                  <img
                    className="object-cover aspect-square drop-shadow-lg rounded h-64 md:h-48"
                    src={product.img}
                    alt={product.name}
                  />
                </section>
              </section>
            ))}
          </section>
        </section>
      </section>

      <section className="flex flex-row font-bold justify-center">
        <section className="w-full gap-y-4">
          <h2>Total Quantity:</h2>
          <h2>Total Price: </h2>
        </section>
        <section className="w-full gap-y-4">
          <h2>{totalQuantity}</h2>
          <h2>{totalPrice.toFixed(2)}</h2>
        </section>
        <Link
          to={'/profile'}
          className="flex w-40  hover:scale-105 drop-shadow-md justify-center bg-primary text-white font-bold px-3 py-2 rounded-lg mt-4 mb-4 cursor-pointer h-10"
        >
          <p>Back</p>
        </Link>
      </section>
    </>
  )
}

export default OrderDetail
