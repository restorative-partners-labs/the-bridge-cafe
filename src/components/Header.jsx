import Link from 'next/link'
import { Popover, Transition, Dialog } from '@headlessui/react'
import { AnimatePresence, motion } from 'framer-motion'
import { Fragment, useState, useRef } from 'react'
import { useRouter } from 'next/router'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import {
  UserGroupIcon,
  BuildingStorefrontIcon,
  BellAlertIcon,
  XCircleIcon,
  XMarkIcon,
  BookOpenIcon,
} from '@heroicons/react/24/outline'

function MenuIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M5 6h14M5 18h14M5 12h14"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function ChevronUpIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M17 14l-5-5-5 5"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function MobileNavLink({ children, ...props }) {
  return (
    <Popover.Button
      as={Link}
      className="block text-base leading-7 tracking-tight text-gray-700"
      {...props}
    >
      {children}
    </Popover.Button>
  )
}

const solutions = [
  {
    name: 'Cafe Menu',
    description: 'Take a look at our menu items',
    href: '/menu.png',
    icon: BuildingStorefrontIcon,
  },
  {
    name: 'Catering Menu',
    description: 'Learn more about our catering services',
    href: '/catering-menu',
    icon: UserGroupIcon,
  },
  {
    name: 'Specials Menu',
    description: 'Checkout our daily specials menu',
    href: '/specials',
    icon: BellAlertIcon,
  },

  {
    name: 'Holiday Menu',
    description: 'Checkout our Thanksgiving menu specials',
    href: '/holiday-menu.png',
    icon: BookOpenIcon,
  },
]

export function Header() {
  const router = useRouter()
  const [showOnlineOrderClose, setShowOnlineOrderClose] = useState(false)
  const cancelButtonRef = useRef(null)

  const handleOrderOnlineNavigation = async () => {
    router.push('https://order.toasttab.com/online/the-bridge-cafe')
  }
  return (
    <>
      <header>
        <nav>
          <Container className="relative z-50 flex justify-between py-8">
            <div className="relative z-10 flex items-center gap-16">
              <Link href="/" aria-label="Home">
                <Logo className="h-10 w-auto " />
              </Link>
              <div className="hidden lg:flex lg:gap-10">
                {/* <NavLinks /> */}
              </div>
            </div>

            <div className="flex items-center gap-6">
              <Popover className="lg:hidden">
                {({ open }) => (
                  <>
                    <Popover.Button
                      className="relative z-10 -m-2 inline-flex items-center rounded-lg stroke-gray-900 p-2 hover:bg-gray-200/50 hover:stroke-gray-600 active:stroke-gray-900 [&:not(:focus-visible)]:focus:outline-none"
                      aria-label="Toggle site navigation"
                    >
                      {({ open }) =>
                        open ? (
                          <ChevronUpIcon className="h-6 w-6" />
                        ) : (
                          <MenuIcon className="h-6 w-6" />
                        )
                      }
                    </Popover.Button>
                    <AnimatePresence initial={false}>
                      {open && (
                        <>
                          <Popover.Overlay
                            static
                            as={motion.div}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-0 bg-gray-300/60 backdrop-blur"
                          />
                          <Popover.Panel
                            static
                            as={motion.div}
                            initial={{ opacity: 0, y: -32 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{
                              opacity: 0,
                              y: -32,
                              transition: { duration: 0.2 },
                            }}
                            className="absolute inset-x-0 top-0 z-0 origin-top rounded-b-2xl bg-gray-50 px-6 pb-6 pt-32 shadow-2xl shadow-gray-900/20"
                          >
                            <div className="space-y-4">
                              <MobileNavLink href="/">
                                <span className="text-2xl">Home</span>
                              </MobileNavLink>

                              <Popover className="relative">
                                <Popover.Button className="inline-flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
                                  <span className="text-2xl">Menu</span>
                                </Popover.Button>

                                <Transition
                                  as={Fragment}
                                  enter="transition ease-out duration-200"
                                  enterFrom="opacity-0 translate-y-1"
                                  enterTo="opacity-100 translate-y-0"
                                  leave="transition ease-in duration-150"
                                  leaveFrom="opacity-100 translate-y-0"
                                  leaveTo="opacity-0 translate-y-1"
                                >
                                  <Popover.Panel className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4">
                                    <div className="w-screen max-w-sm flex-auto rounded-3xl bg-white p-4 text-sm leading-6 shadow-lg ring-1 ring-bridge">
                                      {solutions.map((item) => (
                                        <div
                                          key={item.name}
                                          className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-bridgelight"
                                        >
                                          <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                            <item.icon
                                              className="h-6 w-6 text-gray-600 hover:bg-black"
                                              aria-hidden="true"
                                              color="theme"
                                            />
                                          </div>
                                          <div>
                                            <a
                                              href={item.href}
                                              className="font-semibold text-gray-900"
                                            >
                                              {item.name}
                                              <span className="absolute inset-0" />
                                            </a>
                                            <p className="mt-1 text-gray-600">
                                              {item.description}
                                            </p>
                                          </div>
                                        </div>
                                      ))}
                                    </div>
                                  </Popover.Panel>
                                </Transition>
                              </Popover>
                              <MobileNavLink href="#contact">
                                <span className="text-2xl">Contact</span>
                              </MobileNavLink>
                            </div>

                            <div className="mt-8 flex flex-col gap-4">
                              <Button href="/catering-menu" variant="outline">
                                <span className="text-2xl">Catering</span>
                              </Button>
                              <Button
                                href="https://restorativepartners.org/donate/"
                                variant="outline"
                              >
                                <span className="text-2xl">Donate</span>
                              </Button>
                              <Button
                                onClick={() => {
                                  handleOrderOnlineNavigation()
                                }}
                                style={{ background: '#05716c' }}
                              >
                                <span className="text-2xl">Order</span>
                              </Button>
                              <Button
                                style={{ background: '#05716c' }}
                                href="https://thebridgecafe.org/cafeclub"
                              >
                                <span className="text-2xl">Join Cafe Club</span>
                              </Button>
                            </div>
                          </Popover.Panel>
                        </>
                      )}
                    </AnimatePresence>
                  </>
                )}
              </Popover>
              <Button
                href="/#about"
                variant="outline"
                color="theme"
                className="hidden w-32 text-center text-xl lg:block"
              >
                About
              </Button>
              <Button
                href="/#contact"
                variant="outline"
                color="theme"
                className="hidden w-32 text-center text-xl lg:block"
              >
                Contact
              </Button>
              <Button
                href="/#restorative-partners"
                variant="outline"
                color="theme"
                className="w-50 hidden text-center text-xl lg:block"
              >
                Restorative Partners
              </Button>

              <Popover className="relative">
                <Popover.Button className="inline-flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
                  <Button
                    variant="outline"
                    color="theme"
                    className="hidden w-32 text-center text-xl lg:block"
                  >
                    View Menu
                  </Button>
                </Popover.Button>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <Popover.Panel className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4">
                    <div className="w-screen max-w-sm flex-auto rounded-3xl bg-white p-4 text-sm leading-6 shadow-lg ring-1 ring-bridge">
                      {solutions.map((item) => (
                        <div
                          key={item.name}
                          className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-bridgelight"
                        >
                          <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                            <item.icon
                              className="h-6 w-6 text-gray-600 hover:bg-black"
                              aria-hidden="true"
                              color="theme"
                            />
                          </div>
                          <div>
                            <a
                              href={item.href}
                              className="font-semibold text-gray-900"
                            >
                              {item.name}
                              <span className="absolute inset-0" />
                            </a>
                            <p className="mt-1 text-gray-600">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </Popover.Panel>
                </Transition>
              </Popover>
              <Button
                className="hidden w-40 text-center text-xl lg:block"
                variant="outline"
                color="themecta"
                onClick={() => handleOrderOnlineNavigation()}
              >
                Order Online
              </Button>
            </div>
          </Container>
        </nav>
      </header>
      <Transition.Root show={showOnlineOrderClose} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          initialFocus={cancelButtonRef}
          onClose={setShowOnlineOrderClose}
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
                  <div className="absolute right-0 top-0 hidden pr-4 pt-4 sm:block">
                    <button
                      type="button"
                      className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-bridge focus:ring-offset-2"
                      onClick={() => setShowOnlineOrderClose(false)}
                    >
                      <span className="sr-only">Close</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  <div>
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                      <XCircleIcon
                        className="h-6 w-6 text-green-600"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="mt-3 text-center sm:mt-5">
                      <Dialog.Title
                        as="h3"
                        className="text-xl font-semibold leading-6 text-gray-900"
                      >
                        Online Ordering Closed
                      </Dialog.Title>
                      <div className="mt-2">
                        <p className="text-xl text-gray-500">
                          Our cafe is currently closed as per our business hours
                          7 AM to 3 PM We apologize for any inconvenience
                          caused. Please come back to place your online orders
                          during our operating hours. Thank you for your
                          understanding! In the mean time please take a look at
                          our menu and specials!
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-5 text-xl sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
                    <Button
                      href="/menu.png"
                      variant="outline"
                      color="themecta"
                      type="button"
                      className="inline-flex w-full justify-center rounded-md px-3 py-2 text-xl font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 sm:col-start-2"
                      onClick={() => setShowOnlineOrderClose(false)}
                    >
                      View Menu
                    </Button>
                    <button
                      type="button"
                      href="https://thebridgecafe.org#daily-specials"
                      className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm text-xl font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:col-start-1 sm:mt-0"
                      onClick={() => {
                        setShowOnlineOrderClose(false)
                        router.push('#daily-specials')
                      }}
                    >
                      View Specials
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  )
}
