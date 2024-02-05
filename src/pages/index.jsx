import Head from 'next/head'
import { FoodDisplay } from '@/components/FoodDisplay'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Banner } from '@/components/Banner'
import RewardSignup from '../components/RewardSignup'
import { DailySpecials } from '@/components/DailySpecials'
import AboutUs from '@/components/AboutUs'
import Team from '@/components/Team'
import SpecialMenuBanner from '@/components/SpecialMenuBanner'
import { client } from '../../sanity/lib/client'
import { groq } from 'next-sanity'
import React, { useEffect, useState } from 'react'
import RestorativePartnersBanner from '@/components/RestorativePartnersBanner'

export const teamQuery = groq`*[_type == "teamMember" && defined(name)]{
  _id, name, image, role
}`

export const specialsQuery = groq`*[_type == "special-item" && defined(name) && available == true]{
  _id, name, price, link, description
}`

export const specialMenuQuery = groq`*[_type == "specialMenu" && defined(name) && available == true]{
  _id, name, link, details, image
}`

export const menuPhotosQuery = groq`*[_type == "menuPhotos" && defined(name)]{
  _id, name, images, description
}`

export default function Home() {
  const [team, setTeam] = useState([])
  const [specials, setSpecials] = useState([])
  const [specialMenu, setSpecialMenu] = useState([])
  const [menuPhotos, setMenuPhotos] = useState([])

  useEffect(() => {
    client.fetch(teamQuery).then(setTeam)
    client.fetch(specialsQuery).then(setSpecials)
    client.fetch(specialMenuQuery).then(setSpecialMenu)
    client.fetch(menuPhotosQuery).then(setMenuPhotos)

    const teamSubscription = client.listen(teamQuery).subscribe((update) => {
      if (update.result) {
        // If an item was updated, find it in the array and replace it
        setTeam((prevTeam) =>
          prevTeam.map((team) =>
            team._id === update.result._id ? update.result : team
          )
        )
      }
    })

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

    const specialMenuSubscription = client
      .listen(specialsQuery)
      .subscribe((update) => {
        if (update.result) {
          // If an item was updated, find it in the array and replace it
          setSpecials((prevSpecialMenu) =>
            prevSpecialMenu.map((special) =>
              special._id === update.result._id ? update.result : special
            )
          )
        }
      })

    const menuPhotosSubscription = client
      .listen(menuPhotosQuery)
      .subscribe((update) => {
        if (update.result) {
          // If an item was updated, find it in the array and replace it
          setMenuPhotos((prevMenuPhotos) =>
            prevMenuPhotos.map((menuPhotos) =>
              menuPhotos._id === update.result._id ? update.result : menuPhotos
            )
          )
        }
      })

    return () => {
      specialsSubscription.unsubscribe()
      teamSubscription.unsubscribe()
      specialMenuSubscription.unsubscribe()
      menuPhotosSubscription.unsubscribe()
    }
  }, [])

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
        <SpecialMenuBanner specialMenu={specialMenu} />
        <DailySpecials specials={specials} />
        <AboutUs />
        {/* <PrimaryFeatures /> */}
        {/* <SecondaryFeatures /> */}
        <RestorativePartnersBanner />
        <Team teamMembers={team} />
        <FoodDisplay menuPhotos={menuPhotos} />

        {/* <RestorativePartnersCallToAction /> */}
        {/* <Reviews />
        <Pricing />
        <Faqs /> */}
        <RewardSignup />

        <figure data-behold-id="ufAMDKItfpizCThMoE9k"></figure>
      </main>

      <Footer />
    </>
  )
}
