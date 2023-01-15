import { useState } from 'react'
import { RadioGroup } from '@headlessui/react'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Logomark } from '@/components/Logo'

export function RestorativePartnersCallToAction() {
  let [activePeriod, setActivePeriod] = useState('Monthly')

  const stats = [
    { label: 'Founded', value: '2011' },
    { label: 'Staff', value: '50' },
    { label: 'Lives Changed', value: '1000' },
    { label: 'Jobs Landed', value: '300+' },
  ]

  return (
    <section
      id="restorative-partners"
      aria-labelledby="pricing-title"
      className="border-t border-gray-200 bg-white py-5 sm:py-32"
    >
      <div className="relative bg-white py-16 sm:py-24">
        <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:items-start lg:gap-24 lg:px-8">
          <div className="relative sm:py-16 lg:py-0">
            <div
              aria-hidden="true"
              className="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen"
            >
              <div className="absolute inset-y-0 right-1/2 w-full rounded-r-3xl bg-gray-50 lg:right-72" />
              <svg
                className="absolute top-8 left-1/2 -ml-3 lg:-right-8 lg:left-auto lg:top-12"
                width={404}
                height={392}
                fill="none"
                viewBox="0 0 404 392"
              >
                <defs>
                  <pattern
                    id="02f20b47-fd69-4224-a62a-4c9de5c763f7"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      x={0}
                      y={0}
                      width={4}
                      height={4}
                      className="text-gray-200"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect
                  width={404}
                  height={392}
                  fill="url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)"
                />
              </svg>
            </div>
            <div className="relative mx-auto max-w-md px-6 sm:max-w-3xl lg:max-w-none lg:px-0 lg:py-20">
              {/* Testimonial card*/}
              <a href='https://restorativepartners.org/'>
                {' '}
                <div className="relative overflow-hidden rounded-2xl pt-64 pb-10 shadow-xl">
                  <img
                    className="absolute inset-0 h-full w-full object-cover"
                    src="/rp-heart-logo.png"
                    alt=""
                  />
                  <div className="absolute inset-0 bg-transparent bg-bridge mix-blend-multiply" />
                  <div className="absolute inset-0 bg-gradient-to-t from-bridge via-bridge opacity-90 hover:bg-transparent" />
                  <div className="relative px-8">
                    <blockquote className="mt-8">
                      <footer className="mt-4">
                        <p className="text-2xl font-semibold text-white">
                          Restorative Partners, 501(c)(3) Non Profit
                        </p>
                      </footer>
                    </blockquote>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="relative mx-auto max-w-md px-6 sm:max-w-3xl lg:px-0">
            {/* Content area */}
            <div className="pt-12 sm:pt-16 lg:pt-20">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                On a mission to Transform Lives Impacted by Crime through
              </h2>
              <div className="mt-6 space-y-6 text-gray-500">
                <p className="text-2xl">
                  Restorative Partners provides services and programs for those
                  in-custody and for those released from the San Luis County
                  Juvenile Hall, Jail, Honor Farm and State Prisons. Our
                  restorative justice approach focuses on mind, body and
                  spiritual transformation, incorporates trauma informed care,
                  addresses responsibility and accountability, and offers
                  accompaniment through reentry mentorship. We also provide
                  clean and sober living homes for men and for women as well as
                  own and operate a home for women who are ready to reunite with
                  their children and move forward with their lives. The goal in
                  all of our transformative work is to reduce violence and lower
                  recidivism by providing a continuum of care from incarceration
                  through reincorporation to our community.
                </p>
                <p className="text-2xl leading-7">
                  We envision a safer community where everyone belongs. We
                  strive to accomplish this through transforming lives impacted
                  by crime through healing services and relationships.
                </p>
              </div>
            </div>

            {/* Stats section */}
            <div className="mt-10">
              <dl className="grid grid-cols-2 gap-x-4 gap-y-8">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="border-t-2 border-gray-100 pt-6"
                  >
                    <dt className="text-2xl font-medium text-gray-500">
                      {stat.label}
                    </dt>
                    <dd className="text-3xl font-bold tracking-tight text-gray-900">
                      {stat.value}
                    </dd>
                  </div>
                ))}
              </dl>
              <div className="mt-10">
                <a
                  href="https://restorativepartners.org/"
                  className="text-2xl font-medium text-bridge"
                >
                  Learn more about our approach of Restorative Justice
                  <span aria-hidden="true"> &rarr;</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
