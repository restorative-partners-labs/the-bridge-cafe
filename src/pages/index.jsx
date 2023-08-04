import Head from 'next/head'
import dynamic from 'next/dynamic'
const {} = dynamic(import('tw-elements'), { ssr: false })
import { RestorativePartnersCallToAction } from '@/components/RestorativePartnersCallToAction'
import { FoodDisplay } from '@/components/FoodDisplay'
import { Slider } from '@/components/Slider'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { Banner } from '@/components/Banner'
import { useState, useEffect } from 'react'
import PDFViewer from '../components/PDFViewer'

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
  return (
    <>
      <Head>
        <title>The Bridge Cafe</title>
        <meta
          name="description"
          content="The Bridge Cafe is a social enterprise cafe run by Restorayive Partners. We envision a safer community where everyone belongs and strive to accomplish this through transforming lives impacted by crime through healing services and relationships."
        />
      </Head>
      <Banner />
      <Header />
      <main>
        <Hero />
        <Slider />

        <PrimaryFeatures />
        {/* <SecondaryFeatures /> */}
        <FoodDisplay />
        <RestorativePartnersCallToAction />
        {/* <Reviews />
        <Pricing />
        <Faqs /> */}

        <figure data-behold-id="ufAMDKItfpizCThMoE9k"></figure>

      </main>

      <Footer />
    </>
  )
}
