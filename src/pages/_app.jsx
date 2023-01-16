import '@/styles/tailwind.css'
import 'focus-visible'
import Link from 'next/link'
import { PrismicProvider } from '@prismicio/react'
import { PrismicPreview } from '@prismicio/next'
import { repositoryName } from '../../prismicio'
import { GoogleAnalytics } from "nextjs-google-analytics";

export default function App({ Component, pageProps }) {
  return (
    <PrismicProvider internalLinkComponent={Link}>
      <PrismicPreview repositoryName={repositoryName}>
      <GoogleAnalytics trackPageViews />
        <Component {...pageProps} />
      </PrismicPreview>
    </PrismicProvider>
  )
}