import Card from '../components/Categories/Card'

const Home = () => {
  return (
    <>
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

      <section className="lg:grid lg:grid-cols-3 px-4 py-2 h-auto w-full flex flex-col gap-6  rounded-2xl border-2 shadow-2xl">
        <Card imgUrl={'https://picsum.photos/1920/800'} title={'Banner'} />
        <Card imgUrl={'https://picsum.photos/1920/800'} title={'Banner'} />
        <Card imgUrl={'https://picsum.photos/1920/800'} title={'Banner'} />
        <Card imgUrl={'https://picsum.photos/1920/800'} title={'Banner'} />
        <Card imgUrl={'https://picsum.photos/1920/800'} title={'Banner'} />
        <Card imgUrl={'https://picsum.photos/1920/800'} title={'Banner'} />
      </section>
    </>
  )
}

export default Home
