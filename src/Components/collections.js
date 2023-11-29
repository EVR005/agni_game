/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
const callouts = [
  {
    name: "CSAU",
    description: "Computer Society of Anna University [CSAU] is one of CEG's oldest technical clubs, functioning under Ramanujan Computing Centre [RCC]. The goal of CSAU is to extend the knowledge of computer science beyond the fields of CS and IT. In addition to helping students realize their technical interests, the club upskills them through knowledge sharing within the peer network. Our team at CSAU explores and experiments with new technologies with the goal of spreading the knowledge to the network. Bringing together peers, juniors, and alumni, we create an informative network to raise awareness about current technologies and assist in upskilling students. In order to shed light on the latest technologies, we conduct a number of events where spokespersons from various industries share their knowledge and experiences of working with those technologies. In addition to exploring new technologies, we are always looking to expand our peer network to share knowledge",
    imageSrc: "./logos/csau_logo.png",
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
];

export default function Collections() {
  return (
    <div className="bg-gradient-to-b from-red-600 via-red-400 to-red-200 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          <h2 className="text-4xl font-bold text-white">CLUBS OF CEG</h2>

          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-2 lg:gap-x-6 lg:space-y-0">
            {callouts.map((callout) => (
              <div key={callout.name} className="group relative">
                <a
                  href={callout.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="relative h-80 w-full overflow-hidden rounded-lg sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                    <img
                      src={callout.imageSrc}
                      alt={callout.imageAlt}
                      className="h-full w-full object-contain object-center"
                    />
                  </div>
                  <h3 className="mt-8 text-sm text-gray-900">
                    <span className="absolute inset-0" />
                    {callout.name}
                  </h3>
                </a>
                <p className="text-base font-semibold text-gray-900 m-[15px]">
                  {callout.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
