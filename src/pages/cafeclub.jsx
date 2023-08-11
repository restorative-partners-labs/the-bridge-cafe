import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import imageCafeClub from '@/images/logos/cafe-club-logo.png'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Banner } from '@/components/Banner'
import axios from 'axios'

import { Fragment, useRef, useState, useId } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import {
  CheckIcon,
  ShoppingCartIcon,
  BuildingStorefrontIcon,
  GiftIcon,
} from '@heroicons/react/24/outline'

function TextInput({ label, ...props }) {
  let id = useId()

  return (
    <div className="group relative z-0 transition-all focus-within:z-10">
      <input
        type="text"
        id={id}
        {...props}
        placeholder=" "
        className="text-base/6 text-neutral-950 focus:border-neutral-950 focus:ring-neutral-950/5 peer block w-full border border-neutral-300 bg-transparent px-6 pb-4 pt-12 ring-transparent transition focus:border-bridge focus:outline-none focus:ring-0 group-first:rounded-t-2xl group-last:rounded-b-2xl"
      />
      <label
        htmlFor={id}
        className="text-base/6 peer-focus:text-neutral-950 peer-[:not(:placeholder-shown)]:text-neutral-950 pointer-events-none absolute left-6 top-1/2 -mt-3 origin-left text-neutral-500 transition-all duration-200 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-[:not(:placeholder-shown)]:-translate-y-4 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:font-semibold"
      >
        {label}
      </label>
    </div>
  )
}

function RadioInput({ label, ...props }) {
  return (
    <label className="flex gap-x-3">
      <input
        type="radio"
        {...props}
        className="border-neutral-950/20 checked:border-neutral-950 focus-visible:ring-neutral-950 h-6 w-6 flex-none appearance-none rounded-full border outline-none checked:border-[0.5rem] focus-visible:ring-1 focus-visible:ring-offset-2"
      />
      <span className="text-base/6 text-neutral-950">{label}</span>
    </label>
  )
}

function ContactForm({ handleInput, handleForm, formData }) {
  return (
    <FadeIn className="order-2 sm:order-first lg:order-last">
      <form onSubmit={handleForm}>
        <div className="isolate mt-6 -space-y-px rounded-2xl bg-white/50">
          <TextInput
            label="First Name"
            name="firstName"
            value={formData.firstName}
            autoComplete="name"
            onChange={handleInput}
            required
          />
          <TextInput
            label="Last Name"
            name="lastName"
            value={formData.lastName}
            autoComplete="name"
            onChange={handleInput}
            required
          />
          <TextInput
            label="Email"
            type="email"
            name="email"
            autoComplete="email"
            onChange={handleInput}
            value={formData.email}
            required
          />
          <TextInput
            onChange={handleInput}
            label="Phone"
            type="tel"
            name="phone"
            autoComplete="tel"
            value={formData.phone}
            required
          />
          <TextInput
            onChange={handleInput}
            label="Birthday"
            type="date"
            name="dob"
            value={formData.dob}
            required
          />
        </div>
        <Button
          variant="outline"
          color="themecta"
          type="submit"
          className="mt-10"
          onChange={handleInput}
        >
          Join Cafe Club VIP
        </Button>
      </form>
    </FadeIn>
  )
}

function ContactDetails() {
  return (
    <FadeIn className="order-1">
      <Image
        src={imageCafeClub}
        sizes="(min-width: 512px) 41rem, 31rem"
        className="justify-center lg:justify-end"
      />
    </FadeIn>
  )
}

export const metadata = {
  title: 'Contact Us',
  description: 'Let’s work together. We can’t wait to hear from you.',
}

export const benefits = [
  {
    href: '',
    logo: <BuildingStorefrontIcon className="h-16 w-16 fill-bridge" />,
    client: '',
    title: 'ORDER ONLINE + JOIN',
    description:
      'Join our loyalty program - its easy and free. Join by placing on online order, submitting for above, or at the cash register.',
  },
  {
    href: '',
    logo: <ShoppingCartIcon className="h-16 w-16 fill-bridge" />,
    client: '',
    title: 'PURCHASES EARN POINTS',
    description:
      'Every time you make a purchase online or at the cafe you accumulate points to earn rewards. ',
  },
  {
    href: '',
    logo: <GiftIcon className="h-16 w-16 fill-bridge" />,
    client: '',
    title: 'SPECIAL BONUSES',
    description: 'Discounts, Double Point Days, Birthday Specials & More!',
  },
]

function LoyaltyBenefits({ benefits }) {
  return (
    <>
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {benefits.map((benefit) => (
            <FadeIn key={benefit.href} className="flex">
              <article className="relative flex w-full flex-col rounded-3xl p-6 ring-2 ring-bridge transition hover:bg-bridgelight sm:p-8">
                <h3>
                  <span className="absolute inset-0 rounded-3xl" />

                  {benefit.logo}
                </h3>

                <p className="font-display text-neutral-950 mt-6 text-2xl font-semibold">
                  {benefit.title}
                </p>
                <p className="mt-4 text-base text-neutral-600">
                  {benefit.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </>
  )
}

export default function Contact() {
  const [formData, setFormData] = useState({})
  const [open, setOpen] = useState(false)

  const cancelButtonRef = useRef(null)

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await axios.post('/api/cafeclub', formData)
      console.log(response.data)
    } catch (error) {
      console.error(error)
    }
    setFormData({
      firstName: '',
      lastName: '',
      phone: '',
      dob: '',
      email: '',
    })
    setOpen(true)
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({ ...prevData, [name]: value }))
  }
  return (
    <>
      <Head>
        <title>The Bridge Cafe Club</title>
        <meta
          name="description"
          content="The Bridge Cafe is a social enterprise cafe run by Restorayive Partners. We envision a safer community where everyone belongs and strive to accomplish this through transforming lives impacted by crime through healing services and relationships."
        />
      </Head>
      <Banner />
      <Header />
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          initialFocus={cancelButtonRef}
          onClose={setOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                  <div>
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                      <CheckIcon
                        className="h-6 w-6 text-green-600"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="mt-3 text-center sm:mt-5">
                      <Dialog.Title
                        as="h3"
                        className="text-xl font-semibold leading-6 text-gray-900"
                      >
                        You&apos;re In!
                      </Dialog.Title>
                      <div className="mt-2">
                        <p className="text-xl text-gray-500">
                          Thank you for joining the Cafe Club Loyalty Program!
                          Your membership automatically adds you to our customer
                          email subscription list to receive menu specials, VIP
                          Member discounts & cafe updates. You are welcome to
                          unsubscribe anytime.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="text-xl mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
                    <Button
                      href="https://order.spoton.com/so-the-bridge-cafe-10987/san-luis-obispo-ca/63338b3bf3ebec0040438b39"
                      variant="outline"
                      color="themecta"
                      type="button"
                      className="inline-flex w-full justify-center rounded-md px-3 py-2 text-xl font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 sm:col-start-2"
                      onClick={() => setOpen(false)}
                    >
                      Order Online
                    </Button>
                    <button
                      type="button"
                      href="https://thebridgecafe.org"
                      className="text-xl mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:col-start-1 sm:mt-0"
                      onClick={() => setOpen(false)}
                    >
                      Close
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <div className="grid grid-cols-1 items-center justify-center gap-x-8 gap-y-24 lg:grid-cols-2">
          <ContactForm
            handleInput={handleInputChange}
            handleForm={handleSubmit}
            formData={formData}
          />
          <ContactDetails />
        </div>
        <LoyaltyBenefits benefits={benefits} />
        <Footer />
      </Container>
    </>
  )
}
