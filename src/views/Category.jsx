import Card from "../components/Categories/Card";


const Category = () => {
    return (
        <section className='lg:grid lg:grid-cols-3 px-4 py-2 h-auto w-full flex flex-col gap-6 rounded-2xl border-2 shadow-2xl'>
            <Card  imgUrl={"https://picsum.photos/1920/800"} title={"Banner"} />
            <Card  imgUrl={"https://picsum.photos/1920/800"} title={"Banner"} />
            <Card  imgUrl={"https://picsum.photos/1920/800"} title={"Banner"} />
            <Card  imgUrl={"https://picsum.photos/1920/800"} title={"Banner"} />
            <Card  imgUrl={"https://picsum.photos/1920/800"} title={"Banner"} />
        </section>
    );
}

export default Category