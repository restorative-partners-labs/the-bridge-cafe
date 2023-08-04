import { useState } from 'react'
import { Tab } from '@headlessui/react'
import Image from 'next/image'
import rpStaff from '../../public/images/restorative-partners/admin-staff.jpg'
import annasHomeOpening from '../../public/images/restorative-partners/annas-home-opening.jpg'
import graduation from '../../public/images/restorative-partners/graduation.jpg'
import prayerCircle from '../../public/images/restorative-partners/prayer-circle.jpg'
import trustCircle from '../../public/images/restorative-partners/trust-circle.jpg'
import womensGroup from '../../public/images/restorative-partners/womens-group.jpg'

export function RestorativePartnersCallToAction() {
  let [activePeriod, setActivePeriod] = useState('Monthly')

  const stats = [
    { label: 'Founded', value: '2011' },
    { label: 'Staff', value: '50' },
    { label: 'Lives Changed', value: '1000' },
    { label: 'Jobs Landed', value: '300+' },
  ]
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  const product = {
    name: 'Zip Tote Basket',
    price: '$140',
    rating: 4,
    images: [
      {
        id: 1,
        name: 'Angled view',
        src: trustCircle,
        alt: 'Angled front view with bag zipped and handles upright.',
      },
      {
        id: 1,
        name: 'Angled view',
        src: prayerCircle,
        alt: 'Angled front view with bag zipped and handles upright.',
      },
      {
        id: 1,
        name: 'Angled view',
        src: graduation,
        alt: 'Angled front view with bag zipped and handles upright.',
      },
      {
        id: 1,
        name: 'Angled view',
        src: annasHomeOpening,
        alt: 'Angled front view with bag zipped and handles upright.',
      }
      // More images...
    ],
    colors: [
      {
        name: 'Washed Black',
        bgColor: 'bg-gray-700',
        selectedColor: 'ring-gray-700',
      },
      { name: 'White', bgColor: 'bg-white', selectedColor: 'ring-gray-400' },
      {
        name: 'Washed Gray',
        bgColor: 'bg-gray-500',
        selectedColor: 'ring-gray-500',
      },
    ],
    description: `
      <p>The Zip Tote Basket is the perfect midpoint between shopping tote and comfy backpack. With convertible straps, you can hand carry, should sling, or backpack this convenient and spacious bag. The zip top and durable canvas construction keeps your goods protected for all-day use.</p>
    `,
    details: [
      {
        name: 'Features',
        items: [
          'Multiple strap configurations',
          'Spacious interior with top zip',
          'Leather handle and tabs',
          'Interior dividers',
          'Stainless strap loops',
          'Double stitched construction',
          'Water-resistant',
        ],
      },
      // More sections...
    ],
  }

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
              <a href="https://restorativepartners.org/">
                {' '}
                <div className="relative overflow-hidden rounded-2xl pt-80 pb-10 shadow-xl">
                  <img
                    className="absolute inset-0 h-full w-full object-cover"
                    src="/rp-heart-logo.png"
                    alt=""
                  />
                  <div className="absolute inset-0 bg-transparent bg-bridge mix-blend-multiply" />
                  <div className="absolute inset-0 bg-gradient-to-t from-bridge via-bridge opacity-70 hover:bg-transparent" />
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
              <Tab.Group as="div" className="py-8 flex flex-col-reverse">
                {/* Image selector */}
                <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
                  <Tab.List className="grid grid-cols-4 gap-6">
                    {product.images.map((image) => (
                      <Tab
                        key={image.id}
                        className="relative flex h-24 cursor-pointer items-center justify-center rounded-md bg-white text-sm font-medium uppercase text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-offset-4"
                      >
                        {({ selected }) => (
                          <>
                            <span className="sr-only"> {image.name} </span>
                            <span className="absolute inset-0 overflow-hidden rounded-md">
                              <Image
                                src={image.src}
                                alt=""
                                className="h-full w-full object-cover object-center"
                              />
                            </span>
                            <span
                              className={classNames(
                                selected
                                  ? 'ring-bridge'
                                  : 'ring-transparent',
                                'pointer-events-none absolute inset-0 rounded-md ring-2 ring-offset-2'
                              )}
                              aria-hidden="true"
                            />
                          </>
                        )}
                      </Tab>
                    ))}
                  </Tab.List>
                </div>

                <Tab.Panels className="aspect-w-1 aspect-h-1 w-full">
                  {product.images.map((image) => (
                    <Tab.Panel key={image.id}>
                      <Image
                        src={image.src}
                        alt={image.alt}
                        className="h-full w-full object-cover object-center sm:rounded-lg"
                      />
                    </Tab.Panel>
                  ))}
                </Tab.Panels>
              </Tab.Group>
            </div>
          </div>

          <div className="relative mx-auto max-w-md px-6 sm:max-w-3xl lg:px-0">
            {/* Content area */}
            <div className="pt-12 sm:pt-16 lg:pt-20">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                On a mission to Transform Lives Impacted by Crime through
                Healing Services & Relationships
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
                <p className="text-2xl">
                  We envision a safer community where everyone belongs. We
                  strive to accomplish this through transforming lives impacted
                  by crime through healing services and relationships. Tax ID
                  47-4825349
                </p>
              </div>
            </div>

            {/* Stats section */}
            <div className="mt-10">
              {/* <dl className="grid grid-cols-2 gap-x-4 gap-y-8">
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
              </dl> */}
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
