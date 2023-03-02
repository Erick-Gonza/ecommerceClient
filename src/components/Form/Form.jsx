import Input from './Input'

const Form = ({
  inputs,
  handleChange,
  handleSubmit,
  error,
  setIsLogin,
  data,
  isLogin,
}) => {
  return (
    <section className="flex flex-col justify-center items-center shadow-lg px-3 py-4 bg-white border rounded-md w-full md:w-1/2 lg:w-1/3">
      <h2 className="font-bold text-center text-2xl mb-4">
        {isLogin ? 'Login' : 'Register'}
      </h2>
      <section className="w-full flex gap-2">
        <button
          className={`w-full text-black border-b-2 ${
            isLogin ? 'border-primary' : 'border-gray-200'
          }`}
          onClick={() => setIsLogin(true)}
        >
          <p className="w-full">Log in</p>
        </button>
        <button
          className={`w-full text-black border-b-2 ${
            !isLogin ? 'border-primary' : 'border-gray-200'
          }`}
          onClick={() => setIsLogin(false)}
        >
          <p className="w-full">Create an account</p>
        </button>
      </section>

      <form
        className="flex flex-col justify-center items-center px-3 py-4  rounded-md w-full md:w-4/5"
        onSubmit={handleSubmit}
      >
        {/* If error shows alert */}
        {error && (
          <p className="bg-red-800 border-r-4 border-black p-4 mb-4 text-white">
            <strong className="font-bold">Error!</strong>
            <span className="block">Please fill all the fields to sign in</span>
          </p>
        )}

        {inputs.map((input, index) => {
          return (
            <Input
              input={input}
              key={index}
              index={index}
              handleChange={handleChange}
              data={data}
            />
          )
        })}
      </form>
    </section>
  )
}

export default Form
