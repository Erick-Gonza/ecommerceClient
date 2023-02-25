import Form from '../components/Form/Form'

const SignUp = () => {
  const inputsForm = [
    {
      index: 0,
      label: 'Name',
      labelClass: 'block font-bold pb-2',
      type: 'text',
      id: 'name',
      placeholder: 'First Name...',
      className: 'border-2 w-full rounded-md placeholder-gray shadow-md p-1',
    },
    {
      index: 1,
      label: 'Last name',
      labelClass: 'block font-bold pb-2',
      type: 'text',
      id: 'lastName',
      placeholder: 'Last name...',
      className: 'border-2 w-full rounded-md placeholder-gray shadow-md p-1',
    },
    {
      index: 2,
      label: 'User name',
      labelClass: 'block font-bold pb-2',
      type: 'text',
      id: 'userName',
      placeholder: 'User name...',
      className: 'border-2 w-full rounded-md placeholder-gray shadow-md p-1',
    },
    {
      index: 3,
      label: 'Email',
      labelClass: 'block font-bold pb-2',
      type: 'text',
      id: 'email',
      placeholder: 'Email...',
      className: 'border-2 w-full rounded-md placeholder-gray shadow-md p-1',
    },
    {
      index: 4,
      label: 'Password',
      labelClass: 'block font-bold pb-2',
      type: 'text',
      id: 'password',
      placeholder: 'Password...',
      className: 'border-2 w-full rounded-md placeholder-gray shadow-md p-1',
    },
    {
      index: 5,
      type: 'submit',
      className:
        'bg-primary text-white font-bold uppercase px-3 py-2 w-3/4 rounded-sm cursor-pointer shadow-md mt-2 mb-2',
      value: 'SIGN UP',
    },
  ]
  return (
    <section className="flex flex-col items-center justify-center h-full mx-2 my-3 px-3 shadow-xl">
      <Form inputs={inputsForm} />
    </section>
  )
}

export default SignUp
