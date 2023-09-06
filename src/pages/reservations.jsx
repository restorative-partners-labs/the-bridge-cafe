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

async function fetchData() {
  // Fetch data from your API
  const response = await fetch(
    'https://api.cal.com/v1/availability?apiKey=cal_live_2c319e79d32d3442d2801259cf6c1794&userId=115819&dateFrom=2023-09-15T00:00:00.000Z&dateTo=2023-09-21T00:00:00.000Z'
  )
  const data = await response.json()

  const slots = await generateBookingSlots(data.dateRanges, 90)

  return { slots }
}

function formatTime(date) {
  const inputDate = new Date(date)

  const hours = inputDate.getHours()
  const minutes = inputDate.getMinutes()
  const ampm = hours >= 12 ? 'PM' : 'AM'

  // Convert hours to 12-hour format
  const formattedHours = hours % 12 || 12 // Ensure 12:00 AM is displayed as 12:00 AM, not 0:00 AM

  return `${formattedHours}:${minutes.toString().padStart(2, '0')} ${ampm}`
}

async function generateBookingSlots(dateRanges, slotDurationMinutes) {
  const bookingSlots = []
  for (const dateRange of dateRanges) {
    const startTime = new Date(dateRange.start)
    const endTime = new Date(dateRange.end)

    while (startTime < endTime) {
      const inputDate = new Date(startTime.toISOString())

      const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }

      const formattedDate = inputDate.toLocaleDateString('en-US', options)

      const slotEndTime = new Date(
        startTime.getTime() + slotDurationMinutes * 60000
      )
      bookingSlots.push({
        start: startTime.toISOString(),
        end: slotEndTime.toISOString(),
        window: `${formattedDate} ${formatTime(
          startTime.toISOString()
        )} - ${formatTime(slotEndTime.toISOString())}`,
      })
      startTime.setTime(slotEndTime.getTime())
    }
  }
  return bookingSlots
}

function TextInput({ label, ...props }) {
  let id = useId()

  return (
    <div className="group relative z-0 transition-all focus-within:z-10">
      <input
        type="text"
        id={id}
        {...props}
        placeholder=" "
        className="peer block w-full border border-neutral-300 bg-transparent px-6 pb-4 pt-12 text-base/6 text-neutral-950 ring-transparent transition focus:border-bridge focus:border-neutral-950 focus:outline-none focus:ring-0 focus:ring-neutral-950/5 group-first:rounded-t-2xl group-last:rounded-b-2xl"
      />
      <label
        htmlFor={id}
        className="pointer-events-none absolute left-6 top-1/2 -mt-3 origin-left text-base/6 text-neutral-500 transition-all duration-200 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-neutral-950 peer-[:not(:placeholder-shown)]:-translate-y-4 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:font-semibold peer-[:not(:placeholder-shown)]:text-neutral-950"
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
        className="h-6 w-6 flex-none appearance-none rounded-full border border-neutral-950/20 outline-none checked:border-[0.5rem] checked:border-neutral-950 focus-visible:ring-1 focus-visible:ring-neutral-950 focus-visible:ring-offset-2"
      />
      <span className="text-base/6 text-neutral-950">{label}</span>
    </label>
  )
}

function Form({
  selectedOption,
  handleSelectChange,
  handleInput,
  handleForm,
  formData,
  slots,
}) {
  return (
    <FadeIn className="pb-50 order-2 sm:order-first lg:order-last">
      <form onSubmit={handleForm}>
        <div className="flex items-center justify-center">
          <div className="isolate mt-6 w-full -space-y-px rounded-2xl bg-white/50 lg:w-1/2">
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
              label="Number of Guests"
              type="number"
              name="guestCount"
              value={formData.guestCount}
              required
            />
            <div className="group relative z-0 transition-all focus-within:z-10">
              <label className="pointer-events-none absolute left-6 top-1/2 -mt-3 origin-left text-base/6 text-neutral-500 transition-all duration-200 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-neutral-950 peer-[:not(:placeholder-shown)]:-translate-y-4 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:font-semibold peer-[:not(:placeholder-shown)]:text-neutral-950">
                Time{' '}
              </label>
              <select
                value={selectedOption}
                onChange={handleSelectChange}
                id="timeSlot"
                class="peer block w-full border border-neutral-300 bg-transparent px-6 pb-4 pt-12 text-base/6 text-neutral-950 ring-transparent transition focus:border-bridge focus:border-neutral-950 focus:outline-none focus:ring-0 focus:ring-neutral-950/5 group-first:rounded-t-2xl group-last:rounded-b-2xl"
              >
                <option value="empty"></option>
                {slots.map((slot) => {
                  return (
                    <option value={slot.start} key={slot.start}>
                      {slot.window}
                    </option>
                  )
                })}
              </select>
            </div>
          </div>
        </div>
        <div className="pb-50 flex w-full items-center justify-center">
          <div>
            {' '}
            <Button
              variant="outline"
              type="submit"
              className="mt-10 w-full px-20"
              onChange={handleInput}
            >
              RESERVE
            </Button>
          </div>
        </div>
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

                <p className="font-display mt-6 text-2xl font-semibold text-neutral-950">
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

export default function Contact(props) {
  const [formData, setFormData] = useState({})
  const [open, setOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState('')

  console.log(props.data)

  const cancelButtonRef = useRef(null)

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      var data = {
        eventTypeId: 399443,
        start: selectedOption,
        responses: {
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
        },
        metadata: {
          campaign: 'Cal Poly Wow Week',
          numberOfGuests: formData.guestCount,
        },
        timeZone: 'America/Los_Angeles',
        language: 'english',
        title: 'Wow Week Reservation w/',
      }

      const response = await axios.post('/api/reservations', data)
      console.log(response.data)
    } catch (error) {
      console.error(error)
    }
    setOpen(true)
    // Parse the input date string into a Date object
    const inputDate = new Date(selectedOption)

    // Create a Date object representing the same moment in PST (UTC-8)
    const pstDate = new Date(inputDate.getTime() - 8 * 60 * 60 * 1000)

    // Format the date and time in PST with AM/PM notation
    const options = {
      timeZone: 'America/Los_Angeles', // PST timezone
      hour12: true, // Use AM/PM notation
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
    }

    const pstFormatter = new Intl.DateTimeFormat('en-US', options)
    const pstFormatted = pstFormatter.format(pstDate)
    setSelectedOption(pstFormatted)
    setFormData({
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      timeSlot: '',
      guestCount: '',
    })
  }
  // Handle changes to the select input
  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value)
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
                        You&apos;re Spot is Reserved!
                      </Dialog.Title>
                      <div className="mt-2">
                        <p className="text-xl text-gray-500">
                          Thank you for making your reservation! We are excited
                          to host your WOW group for your meal!Please let us
                          know if you have any questions befoprehand. See you{' '}
                          {selectedOption}!.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-5 text-xl sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
                    <Button
                      href="/menu/png"
                      variant="outline"
                      color="themecta"
                      type="button"
                      className="inline-flex w-full justify-center rounded-md px-3 py-2 text-xl font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 sm:col-start-2"
                      onClick={() => setOpen(false)}
                    >
                      View Menu
                    </Button>
                    <button
                      type="button"
                      href="https://thebridgecafe.org"
                      className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm text-xl font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:col-start-1 sm:mt-0"
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

      <Container className="mb-40 mt-24 sm:mt-32 lg:mt-40">
        <div className="grid grid-cols-1 items-center justify-center gap-x-8 gap-y-24">
          <Form
            handleInput={handleInputChange}
            handleForm={handleSubmit}
            selectedOption={selectedOption}
            handleSelectChange={handleSelectChange}
            formData={formData}
            slots={props.data.slots}
          />
          {/* <ContactDetails /> */}
        </div>
        {/* <LoyaltyBenefits benefits={benefits} /> */}
        <Footer />
      </Container>
    </>
  )
}

export async function getServerSideProps() {
  const data = await fetchData()
  return {
    props: { data },
  }
}
