import React from 'react'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'

const Home = () => {
  return (
    <>
      <Header />
      <main className="flex-1 flex flex-col w-full">
        <section className="w-full h-80">
          <img
            src="https://picsum.photos/1920/800"
            alt="Banner"
            className="object-cover w-full h-full"
          />
        </section>

        <section className="py-4 px-3">
          <h2>Carrousel</h2>
        </section>

        <section className="py-4 px-3">
          <h2>Categories</h2>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default Home
