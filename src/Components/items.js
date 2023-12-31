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
const products = [
  {
    id: 1,
    imageSrc: "../events/1.jfif",
  },
  {
    id: 2,
    imageSrc: "../events/10.jpg",
  },
  {
    id: 3,
    imageSrc: "../events/3.jpeg",
  },
  {
    id: 4,
    imageSrc: "../events/4.jpeg",
  },
  {
    id: 5,
    imageSrc: "../events/5.jfif",
  },
  {
    id: 6,
    imageSrc: "../events/6.jpg",
  },
  {
    id: 7,
    imageSrc: "../events/7.png",
  },
  {
    id: 8,
    imageSrc: "../events/8.jfif",
  },
  {
    id: 9,
    imageSrc: "../events/9.jpg",
  },
];

export default function Items() {
  return (
    <div className="bg-gradient-to-b from-red-700 via-red-500 to-red-300 text-white">
      <div className="mx-auto max-w-2xl px-4 py-10 sm:px-6 lg:max-w-7xl lg:px-8">
        <p className="max-w-[700px] mx-auto mb-[2rem] text-transparent" style={{}}>
          Hopefully, you already know that the next place is the Main Gallery in CEG ground. When viewed from front, the path you should take is North - West.
        </p>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
          {products.map((product, k) => {
            return (
              <a key={product.id} className="group">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <img
                    src={product.imageSrc}
                    alt="event"
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                {/* <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">
                {product.price}
              </p> */}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
