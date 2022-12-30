import { AppStoreLink } from '@/components/AppStoreLink'
import { CircleBackground } from '@/components/CircleBackground'
import { Container } from '@/components/Container'
import { Button } from '@/components/Button'
function PlayIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <circle cx="12" cy="12" r="11.5" stroke="#FFF" />
      <path
        d="M9.5 14.382V9.618a.5.5 0 0 1 .724-.447l4.764 2.382a.5.5 0 0 1 0 .894l-4.764 2.382a.5.5 0 0 1-.724-.447Z"
        fill="#FFF"
        stroke="#FFF"
      />
    </svg>
  )
}

export function CallToAction() {
  return (
    <section
      id="get-free-shares-today"
      className="relative overflow-hidden bg-gray-900 py-20 sm:py-28"
      style={{ background: '#C3D9CD' }}
    >
      <div className="absolute top-1/2 left-20 -translate-y-1/2 sm:left-1/2 sm:-translate-x-1/2">
        <CircleBackground color="#fff" className="animate-spin-slower" />
      </div>
      <Container className="relative">
        <div className="mx-auto max-w-md sm:text-center">
          <h2 className="text-3xl font-medium tracking-tight text-white sm:text-4xl">
            Grand Opening
          </h2>
          <h2 className="text-3xl font-medium tracking-tight text-white sm:text-4xl">
            January 2023
          </h2>
          <p className="mt-4 text-2xl text-white">
            We are excited for you join us for our Grand Opening! Please
            subscribe to our newsletter and follow our social medias for the
            latest updates.
          </p>
          <div className="mt-8 flex justify-center">
            <Button
              href="https://restorativepartnersinc.salsalabs.org/TheBridgeCafeNewsletter/index.html"
              variant="outline"
              color="theme"
            >
              <PlayIcon className="h-6 w-6 flex-none" />
              <span className="ml-2.5">
                <p className="text-xl">Join Mailing List</p>
              </span>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
