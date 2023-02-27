const ProductDetail = () => {
  const productInfo = {
    id: 1,
    name: 'Product 1',
    price: 100,
    description: 'Product 1 description',
    image: 'https://picsum.photos/200/300',
    category: 'Category 1',
  }
  return (
    <section className="flex flex-col justify-center items-center w-full h-full px-3 py-4">
      <section className="flex flex-col justify-center items-center px-3 py-2 bg-primary shadow-md rounded-md lg:w-1/2 lg:flex-row">
        <img
          src={productInfo.image}
          alt={productInfo.name}
          className="rounded-sm object-cover w-full h-80 border border-gray-700"
        />
        <section className="flex flex-col w-full mt-2 lg:ml-2">
          <h1 className="text-xl font-bold text-white">{productInfo.name}</h1>
          <p className="text-lg font-semibold text-white">
            {productInfo.description}
          </p>
          <p className="text-lg font-semibold text-white">
            Category: {productInfo.category}
          </p>
          <p className="text-lg font-semibold text-white">
            Price: {productInfo.price}
          </p>
          <button className="px-3 py-1 bg-black rounded-sm text-white font-semibold mt-2">
            Add to cart
          </button>
        </section>
      </section>
    </section>
  )
}

export default ProductDetail
