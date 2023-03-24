import { Link } from 'react-router-dom'

const Card = ({ categoryId, imgUrl, title }) => {
  return (
    <section className='max-w-[600px] group transition cursor-pointer'>
      <Link
        to={'/category/' + categoryId}
        className='relative h-64 shadow-md'
      >
        <div>
          <img
            src={imgUrl}
            alt={title}
            className='object-cover md:h-[300px] md:w-[450px] lg:h-[400px] lg:w-[600px] rounded-md blur-[1px] shadow-2xl'
          />
        </div>
        <div className='h-auto absolute top-1/2 w-full text-center z-10 dark:bg-black bg-pink-200 bg-opacity-50'>
          <h2 className='text-2xl text-white font-bold group-hover:scale-110 transition duration-200'>{title}</h2>
        </div>
      </Link>
    </section>

  )
}

export default Card
