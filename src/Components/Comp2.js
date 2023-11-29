
/* ALUMNI REGISTRATION */
/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import React from 'react';

export default function Example() {
  const currentYear = new Date().getFullYear();
  const recentYears = Array.from({ length: 20 }, (_, index) => currentYear - index);

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 text-white"
        style={{ background: "url('/contact/contact-bg.jpg')", backgroundSize: "cover", filter: 'grayscale(10%)' }}
      >
        <div className="paper">
          <i className="pin"></i>
          <blockquote className="title">
            Register / Login
            <form className="space-y-6 w-full p-3">
              <select class="block appearance-none w-full bg-transparent border border-red-400 hover:border-red-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                <option>Student</option>
                <option>Alumni</option>
              </select>
              <input class="appearance-none bg-transparent border-b border-red-500 w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                type="text" placeholder="Name" aria-label="Full name" />
              <input class="appearance-none bg-transparent border-b border-red-500 w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                type="text" placeholder="Year" aria-label="Year" />
              <input class="appearance-none bg-transparent border-b border-red-500 w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                type="text" placeholder="Email" aria-label="email" />
              <input class="appearance-none bg-transparent border-b border-red-500 w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                type="password" placeholder="**********" aria-label="password" />
              <button
                type="submit"
                className="text-white flex w-full justify-center rounded-md bg-red-600 px-3 py-1.5 border-none text-sm font-semibold leading-6 text-white-900 shadow-sm hover:bg-red-300  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                SUBMIT
              </button>
            </form>
          </blockquote>
        </div>
      </div>
    </>
  )
}
