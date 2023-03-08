import React from 'react'
import { ProductCard } from '../Product/ProductCard'
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl'
import { useGetAllProductsQuery } from '../../store/service/product/productService'

const Carousel = () => {
  const { data, isError, isLoading, error } = useGetAllProductsQuery()
  const products = data?.data

  console.log({ isError, isLoading, error })
  const slideLeft = () => {
    const slider = document.getElementById('slider')
    slider.scrollLeft = slider.scrollLeft - 300
  }

  const slideRight = () => {
    const slider = document.getElementById('slider')
    slider.scrollLeft = slider.scrollLeft + 300
  }

  return (
    <section className='px-3 '>
      <h2 className='py-3 text-2xl md:text-4xl font-bold text-center'>NEW PRODUCTS</h2>

      <div className='relative flex items-center'>
        <SlArrowLeft
          onClick={slideLeft}
          className='w-7 h-7 md:w-10 md:h-10 opacity-50 cursor-pointer hover:opacity-100'
        />
        <div
          id='slider'
          className='py-8 w-full h-full scroll whitespace-nowrap scroll-smooth overflow-y-hidden overflow-x-hidden'
        >
          {products?.map((product, index) => {
            return (
              <div
                className='px-3 inline-block cursor-pointer hover:scale-110 ease-in-out '
                key={index}
              >
                <ProductCard
                  name={product.name}
                  price={product.price}
                  productId={product.id}
                />
              </div>
            )
          })}
        </div>
        <SlArrowRight
          onClick={slideRight}
          className='w-7 h-7 md:w-10 md:h-10 opacity-50 cursor-pointer hover:opacity-100'
        />
      </div>
    </section>
  )
}

export default Carousel
