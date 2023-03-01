import React from 'react'
import { ProductCard } from '../Product/ProductCard'
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl'

const Carousel = () => {
  const categ = {
    id: 1,
    name: 'Bags',
  }
  const products = [
    {
      id: 1,
      name: 'Mochila',
      description: 'Lorem impsum',
      price: 23.99,
      imageUrl: '',
    },
    {
      id: 2,
      name: 'Bolso1',
      description: 'Lorem impsum',
      price: 40.5,
      imageUrl: '',
    },
    {
      id: 3,
      name: 'Mochila grande',
      description: 'Lorem impsum',
      price: 60.4,
      imageUrl: '',
    },
    {
      id: 4,
      name: 'Mochilita',
      description: 'Lorem impsum',
      price: 60.4,
      imageUrl: '',
    },
    {
      id: 5,
      name: 'Crossbody',
      description: 'Lorem impsum',
      price: 60.4,
      imageUrl: '',
    },
    {
      id: 5,
      name: 'Crossbody',
      description: 'Lorem impsum',
      price: 60.4,
      imageUrl: '',
    },
    {
      id: 5,
      name: 'Crossbody',
      description: 'Lorem impsum',
      price: 60.4,
      imageUrl: '',
    },
  ]

  const slideLeft = () => {
    var slider = document.getElementById('slider')
    slider.scrollLeft = slider.scrollLeft - 300
  }

  const slideRight = () => {
    var slider = document.getElementById('slider')
    slider.scrollLeft = slider.scrollLeft + 300
  }

  return (
    <section className="px-3 ">
      <h2 className="py-3">{categ.name}</h2>

      <div className="relative flex items-center">
        <SlArrowLeft
          onClick={slideLeft}
          className="w-7 h-7 md:w-10 md:h-10 opacity-50 cursor-pointer hover:opacity-100"
        />
        <div
          id="slider"
          className="w-full h-full scroll whitespace-nowrap scroll-smooth overflow-y-hidden overflow-x-hidden"
        >
          {products.map((product, index) => {
            return (
              <div
                className="px-3 inline-block cursor-pointer hover:scale-105 ease-in-out "
                key={index}
              >
                <ProductCard prodname={product.name} price={product.price} />
              </div>
            )
          })}
        </div>
        <SlArrowRight
          onClick={slideRight}
          className="w-7 h-7 md:w-10 md:h-10 opacity-50 cursor-pointer hover:opacity-100"
        />
      </div>
    </section>
  )
}

export default Carousel
