import Carousel from '../components/Carousel/Carousel'
import Card from '../components/Categories/Card'
import Hero from '../components/Hero/Hero'
import { useGetAllCategoriesQuery } from '../store/service/category/categoryService'

const Home = () => {
  const { data, isError, isLoading, error } = useGetAllCategoriesQuery()

  const categories = data?.data

  return (
    <section>
      <Hero />
      {isLoading && !isError
        ? (
          <section>Loading...</section>
          )
        : (
          <div className='py-8'>
            <div className='container mx-auto'>
              <Carousel />
            </div>

            <div>
              <div>
                <h2 className='py-3 text-2xl md:text-4xl font-bold text-center'>CATEGORIES</h2>
              </div>
              <section className='md:grid md:grid-cols-2 lg:grid-cols-3 px-4 py-2 h-auto w-full flex flex-col gap-6 lg:place-items-center'>
                {categories?.map((category, index) => {
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
            </div>
          </div>
          )}
      {isError && <section>Something went wrong. ${error?.message}</section>}
    </section>
  )
}

export default Home
