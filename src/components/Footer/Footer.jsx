const Footer = () => {
  return (
    <footer className="flex flex-col w-full overflow-hidden min-h-[14rem]">
      <button className="py-4 px-3 bg-slate-400 text-white font-bold cursor-pointer hover:scale-105">
        Back to top
      </button>
      <div className="flex justify-center w-full">
        <section className="w-full flex flex-col items-center justify-center py-2">
          <h3 className="text-xl font-bold">Lorem ipsum</h3>
          <ul className="list-inside list-none">
            <li className="p-1">Lorem ipsum</li>
            <li className="p-1">Lorem ipsum</li>
            <li className="p-1">Lorem ipsum</li>
            <li className="p-1">Lorem ipsum</li>
            <li className="p-1">Lorem ipsum</li>
            <li className="p-1">Lorem ipsum</li>
          </ul>
        </section>
        <section className="w-full flex flex-col items-center justify-center">
          <h3 className="text-xl font-bold">Lorem ipsum</h3>
          <ul className="list-none list-inside">
            <li className="p-1">Lorem ipsum</li>
            <li className="p-1">Lorem ipsum</li>
            <li className="p-1">Lorem ipsum</li>
            <li className="p-1">Lorem ipsum</li>
            <li className="p-1">Lorem ipsum</li>
          </ul>
        </section>
      </div>
    </footer>
  )
}

export default Footer
