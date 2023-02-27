const Card = ({ imgUrl, title }) => {
  return (
    <div className="relative h-64 hover:scale-105 shadow-md ">
      <img
        src={imgUrl}
        alt={title}
        className="object-cover h-full w-full rounded-md blur-[1px]"
      />
      <button className="absolute top-1/2 w-full text-center z-10 bg-gray-variant bg-opacity-50 font-bold hover:text-scale-110">
        {title}
      </button>
    </div>
  )
}

export default Card
