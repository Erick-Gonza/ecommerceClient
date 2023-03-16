import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section className='bg-pink-200 h-[600px] bg-hero bg-no-repeat bg-cover bg-center py-24'>
      <div className='container mx-auto flex justify-around h-full'>
        {/* text */}
        <div className='flex flex-col justify-center'>
          <div className='font-semibold flex items-center uppercase'>
            <div className='w-10 h-[2px] bg-red-500 mr-3' />
            <h2 className=''>New Trends</h2>
          </div>
          <h2 className='text-[70px] leading-[1.1] font-light mb-4'>PINK NEON <br />
            <span className='font-semibold'>WOMENS</span>
          </h2>
          <Link to='/' className='self-start uppercase font-semibold border-b-2 border-primary'>
            Discover More
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Hero
