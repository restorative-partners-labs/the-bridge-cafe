import { Button } from '@/components/Button'
import Image from 'next/image'
import biscuit from '../../public/images/food/bridge-cafe-biscuit-001.jpg'
import burger from '../../public/images/food/bridge-cafe-burger-002.jpg'
import chickenSalad from '../../public/images/food/bridge-cafe-chicken-salad-001.jpg'
import chickenSandwich from '../../public/images/food/bridge-cafe-chicken-sandwich-001.jpg'
import chickenWrap from '../../public/images/food/bridge-cafe-chicken-wrap-002.jpg'
import chilaquilles from '../../public/images/food/bridge-cafe-chilaquiles-002.jpg'
import crossiant from '../../public/images/food/bridge-cafe-croissant-002.jpg'
import fries from '../../public/images/food/bridge-cafe-fried-001.jpg'
import onionRings from '../../public/images/food/bridge-cafe-onion-rings-001.jpg'
import quiche from '../../public/images/food/bridge-cafe-quiche-001.jpg'

const favorites = [
  {
    id: 1,
    name: 'Black Basic Tee',
    price: '$32',
    href: '#',
    imageSrc: biscuit,
    imageAlt: 'Bridge Cafe Biscuit',
  },
  {
    id: 2,
    name: 'Off-White Basic Tee',
    price: '$32',
    href: '#',
    imageSrc: burger,
    imageAlt: 'Bridge Cafe Burger',
  },
  {
    id: 3,
    name: 'Mountains Artwork Tee',
    price: '$36',
    href: '#',
    imageSrc: chickenSalad,
    imageAlt: 'Bridge Cafe Chicken Salad',
  },
  // {
  //   id: 4,
  //   name: 'Mountains Artwork Tee',
  //   price: '$36',
  //   href: '#',
  //   imageSrc: chickenSalad,
  //   imageAlt: 'Bridge Cafe Chicken Salad',
  // },
  {
    id: 5,
    name: 'Mountains Artwork Tee',
    price: '$36',
    href: '#',
    imageSrc: chickenSandwich,
    imageAlt: 'Bridge Cafe Chicken Sandwich',
  },
  {
    id: 6,
    name: 'Mountains Artwork Tee',
    price: '$36',
    href: '#',
    imageSrc: chickenWrap,
    imageAlt: 'Bridge Cafe Chicken Wrap',
  },

  {
    id: 7,
    name: 'Mountains Artwork Tee',
    price: '$36',
    href: '#',
    imageSrc: chilaquilles,
    imageAlt: 'Bridge Cafe Chilaquiles',
  },
  {
    id: 8,
    name: 'Mountains Artwork Tee',
    price: '$36',
    href: '#',
    imageSrc: crossiant,
    imageAlt: 'Bridge Cafe Crossiant',
  },
  {
    id: 9,
    name: 'Mountains Artwork Tee',
    price: '$36',
    href: '#',
    imageSrc: fries,
    imageAlt: 'Bridge Cafe Fries',
  },
  // {
  //   id: 10,
  //   name: 'Mountains Artwork Tee',
  //   price: '$36',
  //   href: '#',
  //   imageSrc: onionRings,
  //   imageAlt: 'Bridge Cafe Onion Rings',
  // },
  {
    id: 11,
    name: 'Mountains Artwork Tee',
    price: '$36',
    href: '#',
    imageSrc: quiche,
    imageAlt: 'Bridge Cafe Quiche',
  },
]
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export function FoodDisplay() {
  return (
    <div className="bg-white">
      <main>
        {/* Favorites section */}
        <section aria-labelledby="favorites-heading">
          <div className="mx-auto max-w-7xl py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
            <div className="sm:flex sm:items-baseline sm:justify-between">
              <h2
                id="favorites-heading"
                className="text-2xl font-bold tracking-tight text-gray-900"
              >
                Our Creations
              </h2>
              <Button
                href="https://order.spoton.com/so-the-bridge-cafe-10987/san-luis-obispo-ca/63338b3bf3ebec0040438b39"
                className="w-40 text-center text-xl lg:block"
                variant="outline"
                color="themecta"
              >
                Order Online
              </Button>
            </div>

            <div className="grid grid-cols-1 gap-y-2 sm:grid-cols-3 sm:gap-y-0 sm:gap-x-6 lg:gap-x-8">
              {favorites.map((favorite) => (
                <div key={favorite.id} className="group relative py-6 sm:py-2">
                  <div className="sm:aspect-w-2 sm:aspect-h-3 h-96 w-full overflow-hidden rounded-lg group-hover:opacity-75 sm:h-auto">
                    <Image
                      src={favorite.imageSrc}
                      alt={favorite.imageAlt}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-gray-900">
                    {/* <a>
                      <span className="absolute inset-0" />
                      {favorite.name}
                    </a> */}
                  </h3>
                  {/* <p className="mt-1 text-sm text-gray-500">{favorite.price}</p> */}
                </div>
              ))}
            </div>

            <div className="mt-6 sm:hidden">
              <a
                href="#"
                className="block text-sm font-semibold text-indigo-600 hover:text-indigo-500"
              >
                Browse all favorites
                <span aria-hidden="true"> &rarr;</span>
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
