
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
    
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-white">
        <body class="h-full">
        ```
      */}
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-red-700 text-white">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-20 w-auto"
            src="https://previews.123rf.com/images/faysalfarhan/faysalfarhan1711/faysalfarhan171117235/89427621-contact-us-email-icon-isolated-on-red-square-button-abstract-illustration.jpg"
            alt="Alumni Logo"
        
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white-900">
          CONTACT US
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
          <div className="mt-2">
        <label htmlFor="userType" className="block text-sm font-medium leading-6 text-white-900">
          Who are you?
        </label>
        <div className="items-center mt-1">
          <input
            id="student"
            name="userType"
            type="radio"
            value="student"
            required
            className="mr-2"
          />
          <label htmlFor="student" className="text-sm text-white-900">
            Student
          </label>
          <input
            id="alumni"
            name="userType"
            type="radio"
            value="alumni"
            required
            className="ml-4 mr-2"
          />
          <label htmlFor="alumni" className="text-sm text-white-900">
            Alumni
          </label>
        </div>
      </div>

      <div className="mt-2">
        <label htmlFor="batch" className="block text-sm font-medium leading-6 text-white-900">
          Batch
        </label>
        <div className="mt-1">
          <select
            id="batch"
            name="batch"
            required
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-yellow-600 placeholder:text-gray-400 focus:outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 sm:text-sm sm:leading-6"
          >
            <option value="" disabled selected>Select your batch</option>
            {recentYears.map((year) => (
              <option key={year} value={year}>
                {year+4} 
              </option>
            ))}
          </select>
        </div>
      </div>
            <div>
              <label htmlFor="query" className="block text-sm font-medium leading-6 text-white-900">
                Query
              </label>
              <div className="mt-2">
                <input
                  id="query"
                  name="query"
                  type="text"
                  autoComplete="query"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label htmlFor="description" className="block text-sm font-medium leading-6 text-white-900">
              Description
              </label>
              <div className="mt-2">
                <input
                  id="description"
                  name="description"
                  type="text"
                  autoComplete="description"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-white-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium leading-6 text-white-900">
                Phone Number
              </label>
              <div className="mt-2">
                <input
                  id="phone"
                  name="phone"
                  type="text"
                  autoComplete="phone"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              {/* <div className="flex items-center justify-between"> */}
                <label htmlFor="feedback" className="block text-sm font-medium leading-6 text-white-900">
                  Feedback
                </label>
                {/* <div className="text-sm">
                  <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Forgot password?
                  </a>
                </div> */}
              
              <div className="mt-2">
                <input
                  id="feedback"
                  name="feedback"
                  type="text"
                  autoComplete="feedback"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-red-600 px-3 py-1.5 border-0 shadow-sm ring-1 ring-inset ring-gray-300 text-sm font-semibold leading-6 text-white-900 shadow-sm hover:bg-yellow-500  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600"
              >
                SUBMIT
              </button>
            </div>
          </form>

          {/* <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{' '}
            <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              Start a 14 day free trial
            </a>
          </p> */}
        </div>
      </div>
    </>
  )
}
