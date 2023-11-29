import { useEffect, useState } from "react";
import axios from 'axios';

const callouts = [
  {
    name: "CSAU",
    description: "Computer Society of Anna University [CSAU] is one of CEG's oldest technical clubs, functioning under Ramanujan Computing Centre [RCC]. The goal of CSAU is to extend the knowledge of computer science beyond the fields of CS and IT. In addition to helping students realize their technical interests, the club upskills them through knowledge sharing within the peer network. Our team at CSAU explores and experiments with new technologies with the goal of spreading the knowledge to the network.",
    imageSrc: "./logos/csau.png",
    imageAlt: "https://csau.in",
    href: "https://csau.in",
  },
  {
    name: "SAAS",
    description: "The Students Association & Arts Society of CEG (SAAS) is the official cultural and student representative body at College of Engineering, Guindy. With a dedicated team of 20+ elected representatives, every member has a unique role to play. SAAS strives hard for the welfare of the student community. We believe that every student has immense potential waiting to be fulfilled. To support the same, we at SAAS promote collective participation, cooperation and individuality.",
    imageSrc: "./logos/saas_logo.png",
    imageAlt: "https://saasceg.in",
    href: "https://saasceg.in",
  },
  {
    name: "Pixels",
    description: "Pixels, the official photography and videography club of CEG, is a rapturous platform for those who are passionate about the art of photography. The club was found in 2017 by two diligent final year students, Smrittika Sasidhar and Michael Jernil, who shared a keen passion for photography. Their vision was to create a community who'd learn, experiment, and express their creativity through photography. They also wanted the club to be a source of producing versatile photographers to the outside world.",
    imageSrc: "./logos/pixels-logo-white.png",
    imageAlt: "https://www.pixelsceg.com",
    href: "https://www.pixelsceg.com",
  }
];

export default function Collections() {

  const [count, setCount] = useState(1);
  const [clue, setClue] = useState("");

  useEffect(() => {
    try {
      document.querySelector(".welcome-message").remove();
    } catch (e) {

    }
    document.getElementById("page-dummy").insertAdjacentHTML('afterbegin', clue);
  }, [clue])

  setInterval(() => {
    try {
      document.getElementById("shakeAnimation").classList.toggle("active");
    } catch (e) {

    }
  }, [5000])

  useEffect(() => {
    if (count % 9 == 0) {
      axios.get(`${process.env.REACT_APP_SERVER_URL}/clickedPixels`)
        .then(function (response) {
          setClue(response.data.welcomeMessage)
          document.getElementById("popup").style.display = "block";
          document.querySelector(".page").style.display = "block";
        })
        .catch(function (error) {
          setClue("<p class='welcome-message'>Something went wrong</p>")
        });
    }
  }, [count]);


  return (
    <div className="bg-gradient-to-b text-white"
      style={{ background: "url('/red-background-with-dark-red-background.jpg')", backgroundSize: "cover", filter: 'grayscale(20%)' }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          <h2 className="text-4xl font-bold text-white mb-[4rem]">CLUBS and SOCIETIES OF CEG</h2>

          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-2 lg:gap-x-6 lg:gap-y-12 lg:space-y-0">
            {callouts.map((callout) => (
              <div key={callout.name} className="group relative">
                {
                  callout.name == "Pixels"
                    ? <a onClick={(e) => setCount((prev) => prev + 1)}>
                      <div className="relative h-80 w-full overflow-hidden rounded-lg sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-[10rem]"
                        style={{ pointerEvents: 'all' }}
                      >
                        <img
                          id={"shakeAnimation"}
                          src={callout.imageSrc}
                          alt={callout.imageAlt}
                          className="h-full w-full object-contain object-center"
                        />
                      </div>
                      <h3 className="mt-8 text-sm text-gray-100">
                        <span className="absolute inset-0" />
                        {callout.name}
                      </h3>
                    </a>
                    : <a
                      href={callout.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="relative h-80 w-full overflow-hidden rounded-lg sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-[10rem]">
                        <img
                          src={callout.imageSrc}
                          alt={callout.imageAlt}
                          className="h-full w-full object-contain object-center"
                        />
                      </div>
                      <h3 className="mt-8 text-sm text-gray-100">
                        <span className="absolute inset-0" />
                        {callout.name}
                      </h3>
                    </a>
                }
                <p className="text-base font-semibold text-gray-200 m-[15px]">
                  {callout.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div >
  );
}
