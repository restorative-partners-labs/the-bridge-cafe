import biscuit from '../../public/images/food/bridge-cafe-biscuit-001.jpg'
import burger from '../../public/images/food/bridge-cafe-burger-002.jpg'
import chickenSalad from '../../public/images/food/bridge-cafe-chicken-salad-001.jpg'
import chickenSandwich from '../../public/images/food/bridge-cafe-chicken-sandwich-001.jpg'
import chickenWrap from '../../public/images/food/bridge-cafe-chicken-wrap-002.jpg'
import chilaquilles from '../../public/images/food/bridge-cafe-chilaquiles-002.jpg'
import crossiant from '../../public/images/food/bridge-cafe-croissant-002.jpg'
import fries from '../../public/images/food/bridge-cafe-fried-001.jpg'
import quiche from '../../public/images/food/bridge-cafe-quiche-001.jpg'
import Image from 'next/image'
import Link from 'next/link'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { SectionIntro } from '@/components/SectionIntro'
import { client } from '../../sanity/lib/client'
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(client)

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

export function FoodDisplay({ menuPhotos = [] }) {
  return (
    <>
      <SectionIntro
        title="Cafe Delights Captured in Every Bite"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Dive into a collection of mouthwatering entrées that span a diverse
          range of cuisines and flavors. Whether you&#39;re reminiscing about
          beloved comfort foods or seeking your next café indulgence, our entrée
          images bring the flavors of America to life.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {menuPhotos.map((menu) => (
            <FadeIn key={menu._id} className="flex">
              {menu.images.map((image) => {
                <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-bridgelight transition hover:bg-bridgelight sm:p-8">
                  <Image
                    src={builder.image(image).url()}
                    alt={image.alt}
                    className="h-full w-full rounded-md object-cover object-center"
                  />
                </article>
              })}
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </>
  )
}
