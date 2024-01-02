import Head from 'next/head'
import { RestorativePartnersCallToAction } from '@/components/RestorativePartnersCallToAction'
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

export const teamQuery = groq`*[_type == "teamMember" && defined(name)]{
  _id, name, image, role
}`

export const specialsQuery = groq`*[_type == "special-item" && defined(name)]{
  _id, name, price, link, description
}`

export default function Home() {
  const [team, setTeam] = useState([])
  const [specials, setSpecials] = useState([])

  useEffect(() => {
    const teamSubscription = client.listen(teamQuery).subscribe((update) => {
      const updatedTeam = update.result
      setTeam(updatedTeam)
    })

    const specialsSubscription = client
      .listen(specialsQuery)
      .subscribe((update) => {
        const updatedSpecials = update.result
        setSpecials(updatedSpecials)
      })

    client.fetch(teamQuery).then(setTeam)
    client.fetch(specialsQuery).then(setSpecials)

    return () => {
      specialsSubscription.unsubscribe()
      teamSubscription.unsubscribe()
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
        {/* <SpecialMenuBanner /> */}
        <DailySpecials specials={specials} />
        <AboutUs />
        {/* <PrimaryFeatures /> */}
        {/* <SecondaryFeatures /> */}
        <Team teamMembers={team} />
        <FoodDisplay />

        <RestorativePartnersCallToAction />
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
