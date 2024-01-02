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

export const teamQuery = groq`*[_type == "teamMember" && defined(name)]{
  _id, name, image, role
}`

export const specialsQuery = groq`*[_type == "special-item" && defined(name)]{
  _id, name, price, link, description
}`

export const getStaticProps = async () => {
  const teamData = await client.fetch(teamQuery)
  const specialsData = await client.fetch(specialsQuery)

  return { props: { teamData, specialsData } }
}

export default function Home({ teamData, specialsData }) {
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
        <DailySpecials specials={specialsData} />
        <AboutUs />
        {/* <PrimaryFeatures /> */}
        {/* <SecondaryFeatures /> */}
        <Team teamMembers={teamData} />
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
