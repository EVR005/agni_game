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
    description: "Computer Society of Anna University",
    imageSrc: "./logos/csau_logo.png",
    imageAlt: "https://csau.in",
    href: "https://csau.in",
  },
  {
    name: "SAAS",
    description: "Students Association and Arts Society",
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
                <p className="text-base font-semibold text-gray-900">
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
