import Carousel from '../components/Carousel/Carousel'
import Card from '../components/Categories/Card'
import { useGetAllCategoriesQuery } from '../store/service/category/categoryService'

const Home = () => {
  const { data, isError, isLoading, error } = useGetAllCategoriesQuery()

  const categories = data?.data

  return (
    <>
      <section className='w-full h-80'>
        <img
          src='https://picsum.photos/1920/800'
          alt='Banner'
          className='object-cover w-full h-full'
        />
      </section>

      {isLoading && !isError
        ? (
          <section>Loading...</section>
          )
        : (
          <>
            <section className='py-4 px-3'>
              <Carousel />
            </section>
            <h2 className='py-3 text-2xl md:text-4xl font-bold text-center'>CATEGORIES</h2>

            <section className='lg:grid lg:grid-cols-3 px-4 py-2 h-auto w-full flex flex-col gap-6  rounded-2xl border-2 shadow-2xl'>
              {categories.map((category, index) => {
                return (
                  <Card
                    key={index}
                    imgUrl='https://picsum.photos/1920/800'
                    title={category.name}
                    categoryId={category.id}
                  />
                )
              })}
            </section>
          </>
          )}
      {isError && <section>Something went wrong. ${error?.message}</section>}
    </>
  )
}

export default Home
