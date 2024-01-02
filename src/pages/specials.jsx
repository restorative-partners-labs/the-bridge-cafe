import Head from 'next/head'
import { Footer } from '@/components/Footer'
import { Banner } from '@/components/Banner'
import { DailySpecials } from '@/components/DailySpecials'
import { Header } from '@/components/Header'
import { groq } from 'next-sanity'
import { client } from '../../sanity/lib/client'




export const specialsQuery = groq`*[_type == "special-item" && defined(name)]{
  _id, name, price, link, description
}`

export const getStaticProps = async () => {
  const specialsData = await client.fetch(specialsQuery)
  console.log(specialsData)

  return { props: { specialsData } }
}

export default function Specials({ specialsData }) {
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
        <DailySpecials specials={specialsData} />
      </main>

      <Footer />
    </>
  )
}
