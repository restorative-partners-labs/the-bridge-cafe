import Head from 'next/head'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Banner } from '@/components/Banner'
import SpecialMenuBanner from '@/components/SpecialMenuBanner'
import React, { useEffect, useState } from 'react'
import { client } from '../../sanity/lib/client'
import { groq } from 'next-sanity'

export const specialMenuQuery = groq`*[_type == "specialMenu" && defined(name) && available == true]{
  _id, name, link, details, image
}`

export default function ValentinesMenu  () {
  const [specialMenu, setSpecialMenu] = useState([])

  useEffect(() => {
    client.fetch(specialMenuQuery).then(setSpecialMenu)

    const specialMenuSubscription = client
      .listen(specialMenuQuery)
      .subscribe((update) => {
        if (update.result) {
          // If an item was updated, find it in the array and replace it
          setSpecialMenu((prevSpecialMenu) =>
            prevSpecialMenu.map((special) =>
              special._id === update.result._id ? update.result : special
            )
          )
        }
      })

    return () => {
      specialMenuSubscription.unsubscribe()
    }
  }, [])
  return (
    <>
      <Head>
        <title>The Bridge Cafe - Valentine's Day Menu</title>
        <meta
          name="description"
          content="The Bridge Cafe is a social enterprise cafe run by Restorayive Partners. We envision a safer community where everyone belongs and strive to accomplish this through transforming lives impacted by crime through healing services and relationships."
        />
      </Head>
      <Banner />
      <Header />

      <main>
        <SpecialMenuBanner specialMenu={specialMenu} />
      </main>

      <Footer />
    </>
  )
}
