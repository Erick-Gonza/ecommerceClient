import { Link } from 'react-router-dom'

const Card = ({ categoryId, imgUrl, title }) => {
  return (
    <Link
      to={'/category/' + categoryId}
      className='relative h-64 hover:scale-110 shadow-md cursor-pointer'
    >
      <img
        src={imgUrl}
        alt={title}
        className='object-cover h-full w-full rounded-md blur-[1px] shadow-2xl'
      />
      <div className='h-auto text-2xl absolute top-1/2 w-full dark:text-white-variant text-center z-10 dark:bg-black bg-gray-variant dark:bg-opacity-50 bg-opacity-50 font-bold hover:text-scale-110'>
        {title}
      </div>
    </Link>
  )
}

export default Card
