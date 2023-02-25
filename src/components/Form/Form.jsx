import { useState } from 'react'
import Input from './Input'

const Form = ({ inputs }) => {
  const [error, setError] = useState(false)

  const handleError = () => {
    setError(!error)
  }

  return (
    <form className="flex flex-col justify-center items-center shadow-lg px-3 py-4 bg-white border rounded-md w-full md:w-1/2 lg:w-1/3">
      <h2 className="font-bold text-center text-2xl mb-4">Sign In</h2>

      {/* If error shows alert */}
      {error && (
        <p className="bg-red border-r-4 border-black p-4 mb-4 text-white">
          <strong className="font-bold">Error!</strong>
          <span className="block">Please fill all the fields to sign in</span>
        </p>
      )}

      {inputs.map((input, index) => {
        return <Input input={input} key={index} index={index} />
      })}
    </form>
  )
}

export default Form
