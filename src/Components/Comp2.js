import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function Example() {

  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [year, setYear] = useState("");
  const [password, setPassword] = useState("");
  const [option, setOption] = useState("1");
  const [clue, setClue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    try {
      document.querySelector(".welcome-message").remove();
    } catch (e) {

    }
    document.getElementById("page-dummy").insertAdjacentHTML('afterbegin', clue);
  }, [clue])

  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();

    if (!name || !email || !year || !password) {
      setErrorMessage("Please enter all required details!");
      setLoading(false);
      return;
    }

    const subRoute = option === "1" ? "student" : "alumni";
    axios.post(`${process.env.REACT_APP_SERVER_URL}/${subRoute}`, {
      name, email, year, password
    })
      .then(function (response) {
        if (response.data.success) {
          setClue(response.data.welcomeMessage)
          document.getElementById("popup").style.display = "block";
          document.querySelector(".page").style.display = "block";
          setErrorMessage("");
        } else {
          setErrorMessage("Invalid attempt. Enter details correctly!");
          setClue("");
        }

        setLoading(false);
      })
      .catch(function (error) {
        setErrorMessage("Something went wrong! Try again or contact CSAU.");
        setClue("");

        setLoading(false);
      });

  }

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 text-white"
        style={{ background: "url('/contact/contact-bg.jpg')", backgroundSize: "cover", filter: 'grayscale(10%)' }}
      >
        <div className="paper">
          <i className="pin"></i>
          <blockquote className="title">
            Register / Login
            {errorMessage ? <p className='text-red-500 my-2'>{errorMessage}</p> : <></>}
            <form className="space-y-6 w-full p-3">
              <select value={option} onChange={(e) => setOption(e.target.value)} className="block appearance-none w-full bg-transparent border border-red-400 hover:border-red-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                <option value="1">Student</option>
                <option value="2">Alumni</option>
              </select>
              <input required={true} className="appearance-none bg-transparent border-b border-red-500 w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                type="text" placeholder="Name" aria-label="Full name" value={name} onChange={(e) => setName(e.target.value)} />
              <input required={true} className="appearance-none bg-transparent border-b border-red-500 w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                type="text" placeholder="Grad. Year" aria-label="Year" value={year} onChange={(e) => setYear(e.target.value)} />
              <input required={true} className="appearance-none bg-transparent border-b border-red-500 w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                type="text" placeholder="Email" aria-label="email" value={email} onChange={(e) => setEmail(e.target.value)} />
              <input required={true} className="appearance-none bg-transparent border-b border-red-500 w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                type="password" placeholder="**********" aria-label="password" value={password} onChange={(e) => setPassword(e.target.value)} />
              <button
                type="submit"
                disabled={loading}
                onClick={handleSubmit}
                className="text-white flex w-full justify-center rounded-md bg-red-600 px-3 py-1.5 border-none text-sm font-semibold leading-6 text-white-900 shadow-sm hover:bg-red-300  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                {loading ? <span id="loader"></span> : "SUBMIT"}
              </button>
            </form>
          </blockquote>
        </div>
      </div>
    </>
  )
}
