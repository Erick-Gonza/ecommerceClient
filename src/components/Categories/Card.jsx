import { Link } from 'react-router-dom'

const Card = ({ categoryId, imgUrl, title }) => {
  return (
    <Link
      to={'/category/' + categoryId}
      className="relative h-64 hover:scale-105 shadow-md cursor-pointer"
    >
      <img
        src={imgUrl}
        alt={title}
        className="object-cover h-full w-full rounded-md blur-[1px]"
      />
      <div className="absolute top-1/2 w-full text-center z-10 bg-gray-variant bg-opacity-50 font-bold hover:text-scale-110">
        {title}
      </div>
    </Link>
  )
}

export default Card
