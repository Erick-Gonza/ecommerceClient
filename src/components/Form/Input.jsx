import React from 'react'
import { Link } from 'react-router-dom'

const Input = ({ input, index, handleChange }) => {
  {
    if (input.type === 'text') {
      return (
        <section className="mb-4 w-3/4" key={index}>
          <label htmlFor={input.id} className={input.labelClass}>
            {input.label}
          </label>
          <input
            type={input.type}
            id={input.id}
            placeholder={input.placeholder}
            className={input.className}
            onChange={handleChange}
          />
        </section>
      )
    }
    if (input.type === 'checkbox') {
      return (
        <section className="mb-4" key={index}>
          <label>
            <input type={input.type} id={input.id} name={input.name} />
            <span className={input.className}>Keep me signed in</span>
          </label>
        </section>
      )
    }
    if (input.type === 'Link') {
      return (
        <section className="mb-4" key={index}>
          <Link
            href={input.href}
            className="text-black underline underline-offset-2"
          >
            Forgot my password.
          </Link>
        </section>
      )
    }
    if (input.type === 'submit') {
      return (
        <input
          type={input.type}
          className={input.className}
          value={input.value}
          key={index}
        />
      )
    }
  }
}

export default Input
