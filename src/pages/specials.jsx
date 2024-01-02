import Head from 'next/head'
import { Footer } from '@/components/Footer'
import { Banner } from '@/components/Banner'
import { DailySpecials } from '@/components/DailySpecials'
import { Header } from '@/components/Header'
import { groq } from 'next-sanity'
import { client } from '../../sanity/lib/client'
import React, { useEffect, useState } from 'react'

export const specialsQuery = groq`*[_type == "special-item" && defined(name) && available == true]{
  _id, name, price, link, description
}`

export default function Specials() {
  const [specials, setSpecials] = useState([])

  useEffect(() => {
    client.fetch(specialsQuery).then(setSpecials)

    const specialsSubscription = client
      .listen(specialsQuery)
      .subscribe((update) => {
        if (update.result) {
          // If an item was updated, find it in the array and replace it
          setSpecials((prevSpecials) =>
            prevSpecials.map((special) =>
              special._id === update.result._id ? update.result : special
            )
          )
        }
      })

    return () => {
      specialsSubscription.unsubscribe()
    }
  }, [])

  return (
    <>
      <Head>
        <title>The Bridge Cafe - Specials</title>
        <meta
          name="description"
          content="The Bridge Cafe is a social enterprise cafe run by Restorayive Partners. We envision a safer community where everyone belongs and strive to accomplish this through transforming lives impacted by crime through healing services and relationships."
        />
      </Head>
      <Banner />
      <Header />

      <main>
        <DailySpecials specials={specials} />
      </main>

      <Footer />
    </>
  )
}
