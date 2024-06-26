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

  import tshirt from './tshirt.jpg'
  import boyst from './boyst.jpg'
  import kidst from './kidst.jpg'
import { Link } from 'react-router-dom'

const products = [
    {
      id: 1,
      name: 'Basic Tee',
      price: '₹320',
      href: '#',
      imageSrc: tshirt,
      imageAlt: "Model wearing women's  tee.",
    },
    {
      id: 1,
      name: 'Basic Tee',
      price: '₹320',
      href: '#',
      imageSrc: boyst,
      imageAlt: "Model wearing boys's  tee.",
    },
    {
      id: 1,
      name: 'Basic Tee',
      price: '₹320',
      href: '#',
      imageSrc: kidst,
      imageAlt: "Model wearing kids  tee.",
    },
    // More products...
  ]
  
  export default function Favorite() {
    return (
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="sm:flex sm:items-baseline sm:justify-between">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">Our Favorites</h2>
            {/* <a href="#" className="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block">
              Browse all favorites
              <span aria-hidden="true"> &rarr;</span>
            </a> */}
          </div>
  
          <div className="mt-6 grid grid-cols-1 gap-y-10 sm:grid-cols-3 sm:gap-x-6 sm:gap-y-0 lg:gap-x-8">
            {products.map((product) => (
              <div key={product.id} className="group relative">
                <div className="h-96 w-full overflow-hidden rounded-lg sm:aspect-h-3 sm:aspect-w-2 group-hover:opacity-75 sm:h-auto">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <h3 className="mt-4 text-base font-semibold text-gray-900">
                  <Link to="/category/woman/tshirt/2">
                    <span className="absolute inset-0" />
                    {product.name}
                  </Link>
                </h3>
                <p className="mt-1 text-sm text-gray-500">{product.price}</p>
              </div>
            ))}
          </div>
  
          <div className="mt-6 sm:hidden">
            <a href="#" className="block text-sm font-semibold text-indigo-600 hover:text-indigo-500">
              Browse all favorites
              <span aria-hidden="true"> &rarr;</span>
            </a>
          </div>
        </div>
      </div>
    )
  }
  