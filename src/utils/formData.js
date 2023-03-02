const loginInputsFrom = [
  {
    index: 0,
    label: 'Email or Username',
    labelClass: 'block font-bold mb-4',
    type: 'text',
    id: 'userName',
    placeholder: 'email or username...',
    className: 'border-2 w-full p-2 rounded-md placeholder-gray shadow-md',
  },
  {
    index: 1,
    label: 'Password',
    labelClass: 'block font-bold mb-4',
    type: 'text',
    id: 'password',
    placeholder: 'Password...',
    className: 'border-2 w-full p-2 rounded-md placeholder-gray shadow-md',
  },
  {
    index: 2,
    label: 'Keep me signed in',
    type: 'checkbox',
    id: 'remember',
    name: 'remember',
    className: 'ml-2 text-black',
  },
  {
    index: 3,
    label: 'Forgot my password',
    type: 'Link',
    className: 'mb-4 text-black',
    href: '#',
  },
  {
    index: 4,
    type: 'submit',
    className:
      'bg-primary text-white font-bold uppercase px-3 py-2 w-3/4 rounded-sm mt-4 mb-4 cursor-pointer shadow-md',
    value: 'Log in',
  },
]

const registerInputsForm = [
  {
    index: 0,
    label: 'Name',
    labelClass: 'block font-bold pb-2',
    type: 'text',
    id: 'firstName',
    placeholder: 'First Name...',
    className: 'border-2 w-full rounded-md placeholder-gray shadow-md p-2',
  },
  {
    index: 1,
    label: 'Last name',
    labelClass: 'block font-bold pb-2',
    type: 'text',
    id: 'lastName',
    placeholder: 'Last name...',
    className: 'border-2 w-full rounded-md placeholder-gray shadow-md p-2',
  },
  {
    index: 2,
    label: 'User name',
    labelClass: 'block font-bold pb-2',
    type: 'text',
    id: 'userName',
    placeholder: 'User name...',
    className: 'border-2 w-full rounded-md placeholder-gray shadow-md p-2',
  },
  {
    index: 3,
    label: 'Email',
    labelClass: 'block font-bold pb-2',
    type: 'text',
    id: 'email',
    placeholder: 'Email...',
    className: 'border-2 w-full rounded-md placeholder-gray shadow-md p-2',
  },
  {
    index: 4,
    label: 'Password',
    labelClass: 'block font-bold pb-2',
    type: 'text',
    id: 'password',
    placeholder: 'Password...',
    className: 'border-2 w-full rounded-md placeholder-gray shadow-md p-2',
  },
  {
    index: 5,
    type: 'submit',
    className:
      'bg-primary text-white font-bold uppercase px-3 py-2 w-3/4 rounded-sm cursor-pointer shadow-md mt-2 mb-2',
    value: 'Create New Account',
  },
]

export { loginInputsFrom, registerInputsForm }
