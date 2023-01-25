import Head from 'next/head'
import dynamic from 'next/dynamic'
const {} = dynamic(import('tw-elements'), { ssr: false })
import { CallToAction } from '@/components/CallToAction'
import { RestorativePartnersCallToAction } from '@/components/RestorativePartnersCallToAction'
import { ImagesDisplay } from '@/components/ImagesDisplay'
import { FoodDisplay } from '@/components/FoodDisplay'
import { Slider } from '@/components/Slider'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Pricing } from '@/components/Pricing'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { Reviews } from '@/components/Reviews'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import { createClient } from '../../prismicio'
import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'

const products = [
  {
    id: 1,
    name: 'Throwback Hip Bag',
    href: '#',
    color: 'Salmon',
    price: '$90.00',
    quantity: 1,
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg',
    imageAlt:
      'Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.',
  },
  {
    id: 2,
    name: 'Medium Stuff Satchel',
    href: '#',
    color: 'Blue',
    price: '$32.00',
    quantity: 1,
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg',
    imageAlt:
      'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.',
  },
  // More products...
]

// export async function getStaticProps({ previewData }) {
//   const client = createClient({ previewData })

//   const menuItems = await client.getAllByType('menu_item')
//   return {
//     props: { menuItems },
//   }
// }

export default function Home() {
  const [open, setOpen] = useState(true)
  return (
    <>
      <Head>
        <title>The Bridge Cafe</title>
        <meta
          name="description"
          content="The Bridge Cafe is a social enterprise cafe run by Restorayive Partners. We envision a safer community where everyone belongs and strive to accomplish this through transforming lives impacted by crime through healing services and relationships."
        />
      </Head>
      <Header />
      <main>
        <Hero />
        <Slider />
        <PrimaryFeatures />
        {/* <SecondaryFeatures /> */}
        <RestorativePartnersCallToAction />
        <FoodDisplay />
        <CallToAction />
        {/* <Reviews />
        <Pricing />
        <Faqs /> */}
      </main>
      <Footer />
    </>
  )
}
