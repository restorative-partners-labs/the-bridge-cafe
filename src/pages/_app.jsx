import '../styles/tailwind.css'
import '../styles/overrides.modules.css'
import 'focus-visible'
import Link from 'next/link'
import { PrismicProvider } from '@prismicio/react'
import { PrismicPreview } from '@prismicio/next'
import { repositoryName } from '../../prismicio'
import { GoogleAnalytics, event } from 'nextjs-google-analytics'
import { Analytics } from '@vercel/analytics/react'

export function reportWebVitals({ id, name, label, value }) {
  event(name, {
    category: label === 'web-vital' ? 'Web Vitals' : 'Next.js custom metric',
    value: Math.round(name === 'CLS' ? value * 1000 : value), // values must be integers
    label: id, // id unique to current page load
    nonInteraction: true, // avoids affecting bounce rate.
  })
}

export default function App({ Component, pageProps }) {
  return (
    <PrismicProvider internalLinkComponent={Link}>
      <PrismicPreview repositoryName={repositoryName}>
        <GoogleAnalytics trackPageViews />
        <Component {...pageProps} />
        <Analytics />
      </PrismicPreview>
    </PrismicProvider>
  )
}
