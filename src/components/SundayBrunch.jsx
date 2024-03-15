import { Fragment, useId, useRef, useState } from 'react'
import Image from 'next/image'
import clsx from 'clsx'
import { motion, useInView, useMotionValue } from 'framer-motion'

import { AppScreen } from '@/components/AppScreen'
import { AppStoreLink } from '@/components/AppStoreLink'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { PhoneFrame } from '@/components/PhoneFrame'
import logoBbc from '@/images/logos/bbc.svg'
import logoCbs from '@/images/logos/cbs.svg'
import logoCnn from '@/images/logos/cnn.svg'
import logoFastCompany from '@/images/logos/fast-company.svg'
import logoForbes from '@/images/logos/forbes.svg'
import logoHuffpost from '@/images/logos/huffpost.svg'
import logoTechcrunch from '@/images/logos/techcrunch.svg'
import logoWired from '@/images/logos/wired.svg'
import { SocialIcon } from 'react-social-icons'

import { Dialog, Transition } from '@headlessui/react'
import { CheckIcon, GiftIcon, XMarkIcon } from '@heroicons/react/24/outline'
import foodPrepColumn from '../../public/images/brunch/brunch-pastries.png'
import foodPrepSalad from '../../public/images/brunch/brunch-quiche.png'
import grandOpening from '../../public/images/grand-opening/county/01 County Preview - Scrub.00_08_12_22.Still015.jpg'
import signage from '../../public/images/grand-opening/county/01 County Preview - Scrub.00_22_20_16.Still024.jpg'
import celebration from '../../public/images/grand-opening/county/01 County Preview - Scrub.00_06_12_02.Still012.jpg'
import crossiant from '../../public/images/food/bridge-cafe-croissant-001.jpg'
import burger from '../../public/images/brunch/brunch-sandwich.png'
import { FadeIn, FadeInStagger } from './FadeIn'

function BackgroundIllustration(props) {
  let id = useId()

  return (
    <div {...props}>
      <svg
        viewBox="0 0 1026 1026"
        fill="none"
        aria-hidden="true"
        className="absolute inset-0 h-full w-full animate-spin-slow"
      >
        <path
          d="M1025 513c0 282.77-229.23 512-512 512S1 795.77 1 513 230.23 1 513 1s512 229.23 512 512Z"
          stroke="#D4D4D4"
          strokeOpacity="0.7"
        />
        <path
          d="M513 1025C230.23 1025 1 795.77 1 513"
          stroke={`url(#${id}-gradient-1)`}
          strokeLinecap="round"
        />
        <defs>
          <linearGradient
            id={`${id}-gradient-1`}
            x1="1"
            y1="513"
            x2="1"
            y2="1025"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#06b6d4" />
            <stop offset="1" stopColor="#06b6d4" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
      <svg
        viewBox="0 0 1026 1026"
        fill="none"
        aria-hidden="true"
        className="absolute inset-0 h-full w-full animate-spin-reverse-slower"
      >
        <path
          d="M913 513c0 220.914-179.086 400-400 400S113 733.914 113 513s179.086-400 400-400 400 179.086 400 400Z"
          stroke="#D4D4D4"
          strokeOpacity="0.7"
        />
        <path
          d="M913 513c0 220.914-179.086 400-400 400"
          stroke={`url(#${id}-gradient-2)`}
          strokeLinecap="round"
        />
        <defs>
          <linearGradient
            id={`${id}-gradient-2`}
            x1="913"
            y1="513"
            x2="913"
            y2="913"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#06b6d4" />
            <stop offset="1" stopColor="#06b6d4" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}

function PlayIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      viewBox="0 0 24 24"
      stroke="currentColor"
      fill="currentColor"
    >
      <path d="M1.04,17.52q.1-.16.32-.02a21.3078,21.3078,0,0,0,10.88,2.9,21.52431,21.52431,0,0,0,7.74-1.46q.1-.04.29-.12t.27-.12a.35611.35611,0,0,1,.47.12q.17.24-.11.44-.36.26-.92.6a14.99023,14.99023,0,0,1-3.84,1.58A16.1749,16.1749,0,0,1,12,22a16.01714,16.01714,0,0,1-5.9-1.09,16.24638,16.24638,0,0,1-4.98-3.07.273.273,0,0,1-.12-.2A.215.215,0,0,1,1.04,17.52Zm6.02-5.7a4.03628,4.03628,0,0,1,.68-2.36A4.19676,4.19676,0,0,1,9.6,7.98a10.06288,10.06288,0,0,1,2.66-.66q.54-.06,1.76-.16V6.82a3.56151,3.56151,0,0,0-.28-1.72,1.49917,1.49917,0,0,0-1.32-.6h-.16a2.18852,2.18852,0,0,0-1.14.42,1.63936,1.63936,0,0,0-.62,1,.50779.50779,0,0,1-.4.46L7.8,6.1q-.34-.08-.34-.36a.58734.58734,0,0,1,.02-.14A3.83352,3.83352,0,0,1,9.15,2.96,6.26811,6.26811,0,0,1,12.26,2h.5a5.05441,5.05441,0,0,1,3.56,1.18,3.81,3.81,0,0,1,.37.43,3.8746,3.8746,0,0,1,.27.41,2.09844,2.09844,0,0,1,.18.52q.08.34.12.47a2.85611,2.85611,0,0,1,.06.56q.02.43.02.51v4.84a2.86841,2.86841,0,0,0,.15.95,2.47465,2.47465,0,0,0,.29.62q.14.19.46.61a.59856.59856,0,0,1,.12.32.346.346,0,0,1-.16.28q-1.66,1.44-1.8,1.56a.557.557,0,0,1-.58.04q-.28-.24-.49-.46t-.3-.32a4.46629,4.46629,0,0,1-.29-.39q-.2-.29-.28-.39a4.91083,4.91083,0,0,1-2.2,1.52,6.03757,6.03757,0,0,1-1.68.2,3.50454,3.50454,0,0,1-2.53-.95A3.553,3.553,0,0,1,7.06,11.82Zm3.44-.4a1.89505,1.89505,0,0,0,.39,1.25,1.29375,1.29375,0,0,0,1.05.47,1.022,1.022,0,0,0,.17-.02,1.02168,1.02168,0,0,1,.15-.02,2.03262,2.03262,0,0,0,1.3-1.08,3.13045,3.13045,0,0,0,.33-.83,3.80062,3.80062,0,0,0,.12-.73q.01-.28.01-.92v-.5a7.28689,7.28689,0,0,0-1.76.16A2.1441,2.1441,0,0,0,10.5,11.42Zm8.4,6.44a.62647.62647,0,0,1,.12-.16,3.13921,3.13921,0,0,1,.96-.46,6.52032,6.52032,0,0,1,1.48-.22,1.19457,1.19457,0,0,1,.38.02q.9.08,1.08.3a.65471.65471,0,0,1,.08.36v.14a4.55955,4.55955,0,0,1-.38,1.65,3.84046,3.84046,0,0,1-1.06,1.53.302.302,0,0,1-.18.08.17736.17736,0,0,1-.08-.02q-.12-.06-.06-.22a7.63215,7.63215,0,0,0,.74-2.42.51274.51274,0,0,0-.08-.32q-.2-.24-1.12-.24-.34,0-.8.04-.5.06-.92.12A.23166.23166,0,0,1,18.9,18a.06531.06531,0,0,1-.02-.08A.15332.15332,0,0,1,18.9,17.86Z" />
    </svg>
  )
}

function MoneyIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="h-6 w-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  )
}

const prices = [
  997.56, 944.34, 972.25, 832.4, 888.76, 834.8, 805.56, 767.38, 861.21, 669.6,
  694.39, 721.32, 694.03, 610.1, 502.2, 549.56, 611.03, 583.4, 610.14, 660.6,
  752.11, 721.19, 638.89, 661.7, 694.51, 580.3, 638.0, 613.3, 651.64, 560.51,
  611.45, 670.68, 752.56,
]
const maxPrice = Math.max(...prices)
const minPrice = Math.min(...prices)

function Chart({
  className,
  activePointIndex,
  onChangeActivePointIndex,
  width: totalWidth,
  height: totalHeight,
  paddingX = 0,
  paddingY = 0,
  gridLines = 6,
  ...props
}) {
  let width = totalWidth - paddingX * 2
  let height = totalHeight - paddingY * 2

  let id = useId()
  let svgRef = useRef()
  let pathRef = useRef()
  let isInView = useInView(svgRef, { amount: 0.5, once: true })
  let pathWidth = useMotionValue(0)
  let [interactionEnabled, setInteractionEnabled] = useState(false)

  let path = ''
  let points = []

  for (let index = 0; index < prices.length; index++) {
    let x = paddingX + (index / (prices.length - 1)) * width
    let y =
      paddingY +
      (1 - (prices[index] - minPrice) / (maxPrice - minPrice)) * height
    points.push({ x, y })
    path += `${index === 0 ? 'M' : 'L'} ${x.toFixed(4)} ${y.toFixed(4)}`
  }

  return (
    <svg
      ref={svgRef}
      viewBox={`0 0 ${totalWidth} ${totalHeight}`}
      className={clsx(className, 'overflow-visible')}
      {...(interactionEnabled
        ? {
            onPointerLeave: () => onChangeActivePointIndex(null),
            onPointerMove: (event) => {
              let x = event.nativeEvent.offsetX
              let closestPointIndex
              let closestDistance = Infinity
              for (
                let pointIndex = 0;
                pointIndex < points.length;
                pointIndex++
              ) {
                let point = points[pointIndex]
                let distance = Math.abs(point.x - x)
                if (distance < closestDistance) {
                  closestDistance = distance
                  closestPointIndex = pointIndex
                } else {
                  break
                }
              }
              onChangeActivePointIndex(closestPointIndex)
            },
          }
        : {})}
      {...props}
    >
      <defs>
        <clipPath id={`${id}-clip`}>
          <path d={`${path} V ${height + paddingY} H ${paddingX} Z`} />
        </clipPath>
        <linearGradient id={`${id}-gradient`} x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#13B5C8" />
          <stop offset="100%" stopColor="#13B5C8" stopOpacity="0" />
        </linearGradient>
      </defs>
      {[...Array(gridLines - 1).keys()].map((index) => (
        <line
          key={index}
          stroke="#a3a3a3"
          opacity="0.1"
          x1="0"
          y1={(totalHeight / gridLines) * (index + 1)}
          x2={totalWidth}
          y2={(totalHeight / gridLines) * (index + 1)}
        />
      ))}
      <motion.rect
        y={paddingY}
        width={pathWidth}
        height={height}
        fill={`url(#${id}-gradient)`}
        clipPath={`url(#${id}-clip)`}
        opacity="0.5"
      />
      <motion.path
        ref={pathRef}
        d={path}
        fill="none"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        transition={{ duration: 1 }}
        {...(isInView ? { stroke: '#06b6d4', animate: { pathLength: 1 } } : {})}
        onUpdate={({ pathLength }) => {
          pathWidth.set(
            pathRef.current.getPointAtLength(
              pathLength * pathRef.current.getTotalLength()
            ).x
          )
        }}
        onAnimationComplete={() => setInteractionEnabled(true)}
      />
      {activePointIndex !== null && (
        <>
          <line
            x1="0"
            y1={points[activePointIndex].y}
            x2={totalWidth}
            y2={points[activePointIndex].y}
            stroke="#06b6d4"
            strokeDasharray="1 3"
          />
          <circle
            r="4"
            cx={points[activePointIndex].x}
            cy={points[activePointIndex].y}
            fill="#fff"
            strokeWidth="2"
            stroke="#06b6d4"
          />
        </>
      )}
    </svg>
  )
}

function AppDemo() {
  let [activePointIndex, setActivePointIndex] = useState(null)
  let activePriceIndex = activePointIndex ?? prices.length - 1
  let activeValue = prices[activePriceIndex]
  let previousValue = prices[activePriceIndex - 1]
  let percentageChange =
    activePriceIndex === 0
      ? null
      : ((activeValue - previousValue) / previousValue) * 100

  return (
    <AppScreen>
      <AppScreen.Body>
        <div className="p-4">
          <div className="flex gap-2">
            <div className="text-xs leading-6 text-gray-500">
              Tailwind Labs, Inc.
            </div>
            <div className="text-sm text-gray-900">$CSS</div>
            <svg viewBox="0 0 24 24" className="ml-auto h-6 w-6" fill="none">
              <path
                d="M5 12a7 7 0 1 1 14 0 7 7 0 0 1-14 0ZM12 9v6M15 12H9"
                stroke="#171717"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="mt-3 border-t border-gray-200 pt-5">
            <div className="flex items-baseline gap-2">
              <div className="text-2xl tabular-nums tracking-tight text-gray-900">
                {activeValue.toFixed(2)}
              </div>
              <div className="text-sm text-gray-900">USD</div>
              {percentageChange && (
                <div
                  className={clsx(
                    'ml-auto text-sm tabular-nums tracking-tight',
                    percentageChange >= 0 ? 'text-cyan-500' : 'text-gray-500'
                  )}
                >
                  {`${
                    percentageChange >= 0 ? '+' : ''
                  }${percentageChange.toFixed(2)}%`}
                </div>
              )}
            </div>
            <div className="mt-6 flex gap-4 text-xs text-gray-500">
              <div>1D</div>
              <div>5D</div>
              <div className="font-semibold text-cyan-600">1M</div>
              <div>6M</div>
              <div>1Y</div>
              <div>5Y</div>
            </div>
            <div className="mt-3 rounded-lg bg-gray-50 ring-1 ring-inset ring-black/5">
              <Chart
                width={286}
                height={208}
                paddingX={16}
                paddingY={32}
                activePointIndex={activePointIndex}
                onChangeActivePointIndex={setActivePointIndex}
              />
            </div>
            <div className="mt-4 rounded-lg bg-cyan-500 px-4 py-2 text-center text-sm font-semibold text-white">
              Trade
            </div>
            <div className="mt-3 divide-y divide-gray-100 text-sm">
              <div className="flex justify-between py-1">
                <div className="text-gray-500">Open</div>
                <div className="font-medium text-gray-900">6,387.55</div>
              </div>
              <div className="flex justify-between py-1">
                <div className="text-gray-500">Closed</div>
                <div className="font-medium text-gray-900">6,487.09</div>
              </div>
              <div className="flex justify-between py-1">
                <div className="text-gray-500">Low</div>
                <div className="font-medium text-gray-900">6,322.01</div>
              </div>
            </div>
          </div>
        </div>
      </AppScreen.Body>
    </AppScreen>
  )
}

export function SundayBrunch() {
  const [open, setOpen] = useState(false)

  const cancelButtonRef = useRef(null)

  return (
    <div className="xl:pb-18 overflow-hidden pt-20 sm:py-32 lg:pb-16">
      <Container>
        <Transition.Root show={open} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-40 flex items-center justify-center"
            initialFocus={cancelButtonRef}
            onClose={() => setOpen(false)}
          >
            <div className="fixed inset-0 bg-white/90" aria-hidden="true" />
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

            <div className="fixed inset-0 z-40 overflow-y-auto">
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
                  <Dialog.Panel className="relative z-40 transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                    <div className="absolute right-0 top-0 pr-4 pt-4 sm:block">
                      <button
                        type="button"
                        className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-bridge focus:ring-offset-2"
                        onClick={() => setOpen(false)}
                      >
                        <span className="sr-only">Close</span>
                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>
                    <div>
                      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-bridge">
                        <GiftIcon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="mt-3 text-center sm:mt-5">
                        <Dialog.Title
                          as="h3"
                          className="text-3xl font-medium leading-6 text-gray-900"
                        >
                          Donate
                        </Dialog.Title>
                        <div className="mt-2">
                          <p className="text-xl text-gray-500">
                            Transform the lives of those impacted by crime
                            today! Your donation will help us provide jobs for
                            those who need and want to change their behavior,
                            heal from their trauma and acquire new skills,
                            accountability and compassion.
                          </p>
                          <p className="text-xl text-gray-500">
                            We could use your help via a donation to our General
                            Fund or through purchasing needed supplies through
                            our Amazon Registry.
                          </p>
                          <p className="text-xl text-gray-500"></p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
                      <Button
                        href="https://www.amazon.com/registries/custom/3R36VQR64GJ03/guest-view?pldnSite=1"
                        variant="outline"
                        color="theme"
                        className="inline-flex w-full justify-center rounded-md border border border-gray-300 px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-bridge focus:outline-none focus:ring-2 focus:ring-bridge focus:ring-offset-2 sm:col-start-2 sm:text-sm"
                        ref={cancelButtonRef}
                      >
                        <span className="ml-2.5">
                          <p className="text-xl">Amazon Registry</p>
                        </span>
                      </Button>
                      <Button
                        href="https://restorativepartners.org/donate/"
                        variant="outline"
                        color="theme"
                        className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-bridge focus:ring-offset-2 sm:col-start-1 sm:mt-0 sm:text-sm"
                        ref={cancelButtonRef}
                      >
                        <span className="ml-2.5">
                          <p className="text-xl">General Donation</p>
                        </span>
                      </Button>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition.Root>
        <div className="hidden pb-40 lg:grid lg:grid-cols-12 lg:gap-x-8 lg:gap-y-20">
          <div className="relative z-10 mx-auto max-w-2xl lg:col-span-7 lg:max-w-none lg:pt-6 xl:col-span-6">
            <h1 className="pb-8 text-6xl font-medium tracking-tight text-gray-900">

            </h1>
            <h1 className="text-4xl font-medium tracking-tight text-gray-900">
              Join us for Sunday Brunch!
            </h1>
            <p className="mt-6 text-2xl text-gray-600">
            Start your Sundays on a delightful note! Beginning Easter Sunday, we&#39;re excited to offer a special Brunch from 8 AM to 2 PM every Sunday. Join us to explore a carefully selected menu that blends traditional brunch classics with a touch of culinary innovation. Perfect for making your Sundays more memorable, our brunch is designed to cater to all tastes. Click below to discover our special menu. Make your Sundays special with us – where good food and great times come together.            </p>
            <div className="mt-8 flex flex-col flex-wrap items-center gap-x-4 gap-y-4 sm:flex-row">
              <Button
                href="/brunch-menu.png"
                variant="outline"
                color="theme"
                className="w-56"
              >
                <span className="ml-2.5">
                  <p className="text-xl">View Menu</p>
                </span>
              </Button>
              <Button
                href="/order"
                variant="outline"
                color="theme"
                className="w-56 bg-white"
              >
                <span className="ml-2.5">
                  <p className="text-xl">Order Now</p>
                </span>
              </Button>

              <div className="flex flex-row items-center justify-center space-x-4">
                <a
                  href="https://www.facebook.com/TheBridgeCafeSLO"
                  className="cursor-pointer"
                >
                  <div className="fb-hover flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-xl">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={20}
                      height={32}
                      viewBox="0 0 20 32"
                      fill="white"
                    >
                      <path
                        d="M0.666664 12.6667V19.3334H5.66666V31.0001H12.3333V19.3334H17.3333L19 12.6667H12.3333V9.33339C12.3333 8.89137 12.5089 8.46744 12.8215 8.15488C13.134 7.84232 13.558 7.66673 14 7.66673H19V1.00006H14C11.7899 1.00006 9.67024 1.87803 8.10744 3.44084C6.54464 5.00364 5.66666 7.12326 5.66666 9.33339V12.6667H0.666664Z"
                        stroke="#0F0F0F"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </a>
                {/* <a href="#" className="cursor-pointer">
                  <div className="w-12 h-12 bg-white mx-6 twitter-hover flex items-center justify-center shadow-xl rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={36}
                      height={28}
                      viewBox="0 0 36 28"
                      fill="white"
                    >
                      <path
                        d="M34.6667 0.683417C33 1.50008 31.3667 1.83175 29.6667 2.33342C27.7983 0.225083 25.0283 0.108417 22.3667 1.10508C19.705 2.10175 17.9617 4.53842 18 7.33342V9.00008C12.5917 9.13842 7.775 6.67508 4.66667 2.33342C4.66667 2.33342 -2.30333 14.7218 11.3333 20.6668C8.21333 22.7451 5.10167 24.1468 1.33333 24.0001C6.84667 27.0051 12.855 28.0384 18.0567 26.5284C24.0233 24.7951 28.9267 20.3234 30.8083 13.6251C31.3697 11.5879 31.6484 9.48318 31.6367 7.37008C31.6333 6.95508 34.1533 2.75008 34.6667 0.68175V0.683417Z"
                        stroke="#0F0F0F"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </a> */}
                <a
                  className="cursor-pointer"
                  href="https://www.instagram.com/thebridgecafeslo"
                >
                  <div className="insta-hover flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-xl">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-brand-instagram"
                      width={38}
                      height={38}
                      viewBox="0 0 24 24"
                      strokeWidth="0.75"
                      stroke="#0F0F0F"
                      fill="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <rect x={4} y={4} width={16} height={16} rx={4} />
                      <circle cx={12} cy={12} r={3} />
                      <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
                    </svg>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="relative mt-10 sm:mt-20 lg:col-span-5 lg:row-span-2 lg:mt-0 xl:col-span-6">
            <BackgroundIllustration className="absolute left-1/2 top-4 h-[1026px] w-[1026px] -translate-x-1/3 stroke-gray-300/70 [mask-image:linear-gradient(to_bottom,white_20%,transparent_75%)] sm:top-16 sm:-translate-x-1/2 lg:-top-16 lg:ml-12 xl:-top-14 xl:ml-0" />
            <FadeInStagger>
              {' '}
              <div className="absolute -top-32 hidden -translate-x-1/2 transform sm:top-6 sm:translate-x-0 lg:block">
                <div className="ml-24 flex min-w-max space-x-6 sm:ml-3 lg:space-x-8">
                  <div className="flex space-x-6 sm:flex-col sm:space-x-0 sm:space-y-6 lg:space-y-8">
                    <FadeIn>
                      {' '}
                      <div className="flex-shrink-0">
                        <Image
                          className="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72"
                          src={grandOpening}
                          alt=""
                        />
                      </div>
                    </FadeIn>
                    <FadeIn>
                      {' '}
                      <div className="mt-6 flex-shrink-0 sm:mt-0">
                        <Image
                          className="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72"
                          src={foodPrepColumn}
                          alt=""
                        />
                      </div>
                    </FadeIn>
                  </div>
                  <div className="flex space-x-6 sm:-mt-20 sm:flex-col sm:space-x-0 sm:space-y-6 lg:space-y-8">
                    <FadeIn>
                      {' '}
                      <div className="flex-shrink-0">
                        <Image
                          className="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72"
                          src={foodPrepSalad}
                          alt=""
                        />
                      </div>
                    </FadeIn>

                    <FadeIn>
                      {' '}
                      <div className="mt-6 flex-shrink-0 sm:mt-0">
                        <Image
                          className="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72"
                          src={signage}
                          alt=""
                        />
                      </div>
                    </FadeIn>
                  </div>
                  <div className="flex space-x-6 sm:flex-col sm:space-x-0 sm:space-y-6 lg:space-y-8">
                    <FadeIn>
                      {' '}
                      <div className="flex-shrink-0">
                        <Image
                          className="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72"
                          src={crossiant}
                          alt=""
                        />
                      </div>
                    </FadeIn>

                    <FadeIn>
                      {' '}
                      <div className="mt-6 flex-shrink-0 sm:mt-0">
                        <Image
                          className="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72"
                          src={burger}
                          alt=""
                        />
                      </div>
                    </FadeIn>
                  </div>
                </div>
              </div>
            </FadeInStagger>

            {/* <img
              className="lg:hidden"
              loading="lazy"
              src="/360-muffin.png"
              alt="logo"
            /> */}

            {/* <div className="-mx-4 h-[448px] px-9 [mask-image:linear-gradient(to_bottom,white_60%,transparent)] sm:mx-0 lg:absolute lg:-inset-x-10 lg:-top-10 lg:-bottom-20 lg:h-auto lg:px-0 lg:pt-10 xl:-bottom-32"></div> */}
          </div>

          {/* <div className="relative -mt-4 lg:col-span-7 lg:mt-0 xl:col-span-6">
            <p className="text-center text-sm font-semibold text-gray-900 lg:text-left">
              As featured in
            </p>
            <ul
              role="list"
              className="mx-auto mt-8 flex max-w-xl flex-wrap justify-center gap-x-10 gap-y-8 lg:mx-0 lg:justify-start"
            >
              {[
                ['Forbes', logoForbes],
                ['TechCrunch', logoTechcrunch],
                ['Wired', logoWired],
                ['CNN', logoCnn, 'hidden xl:block'],
                ['BBC', logoBbc],
                ['CBS', logoCbs],
                ['Fast Company', logoFastCompany],
                ['HuffPost', logoHuffpost, 'hidden xl:block'],
              ].map(([name, logo, className]) => (
                <li key={name} className={clsx('flex', className)}>
                  <Image src={logo} alt={name} className="h-8" unoptimized />
                </li>
              ))}
            </ul>
          </div> */}
        </div>
        <div className="relative isolate -z-10 lg:hidden">
          <svg
            className="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-gray-200 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84"
                width={200}
                height={200}
                x="50%"
                y={-1}
                patternUnits="userSpaceOnUse"
              >
                <path d="M.5 200V.5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
              <path
                d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect
              width="100%"
              height="100%"
              strokeWidth={0}
              fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)"
            />
          </svg>
          <div
            className="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
            aria-hidden="true"
          >
            <div
              className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
              style={{
                clipPath:
                  'polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)',
              }}
            />
          </div>
          <div className="overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 pb-32 lg:px-8 lg:pt-32">
              <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
                <div className="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
                  <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                    Meals with a Mission.
                  </h1>
                  <p className="relative mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none">
                    The Bridge Cafe is the Central Coast&apos;s first social
                    enterprise restaurant brought to you by Restorative
                    Partners. We envision a safer community where everyone
                    belongs, and we strive to accomplish this by transforming
                    lives impacted by crime through healing services and
                    relationships. Join our mailing list below to stay up to
                    date!
                  </p>
                </div>
                <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                  <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                    <div className="relative">
                      <Image
                        src={grandOpening}
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                  <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                    <div className="relative">
                      <Image
                        src={foodPrepColumn}
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                    <div className="relative">
                      <Image
                        src={foodPrepSalad}
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                  <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                    <div className="relative">
                      <Image
                        src={signage}
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                    <div className="relative">
                      <Image
                        src={crossiant}
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                </div>
                <div className="mt-8 flex flex-col flex-wrap items-center gap-x-4 gap-y-4 sm:flex-row">
                <Button
                href="/brunch-menu.png"
                variant="outline"
                color="theme"
                className="w-56"
              >
                <span className="ml-2.5">
                  <p className="text-xl">View Menu</p>
                </span>
              </Button>
              <Button
                href="/order"
                variant="outline"
                color="theme"
                className="w-56 bg-white"
              >
                <span className="ml-2.5">
                  <p className="text-xl">Order Now</p>
                </span>
              </Button>

                  <div className="flex flex-row items-center justify-center space-x-4">
                    <a
                      href="https://www.facebook.com/TheBridgeCafeSLO"
                      className="cursor-pointer"
                    >
                      <div className="fb-hover flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-xl">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={20}
                          height={32}
                          viewBox="0 0 20 32"
                          fill="white"
                        >
                          <path
                            d="M0.666664 12.6667V19.3334H5.66666V31.0001H12.3333V19.3334H17.3333L19 12.6667H12.3333V9.33339C12.3333 8.89137 12.5089 8.46744 12.8215 8.15488C13.134 7.84232 13.558 7.66673 14 7.66673H19V1.00006H14C11.7899 1.00006 9.67024 1.87803 8.10744 3.44084C6.54464 5.00364 5.66666 7.12326 5.66666 9.33339V12.6667H0.666664Z"
                            stroke="#0F0F0F"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </a>
                    {/* <a href="#" className="cursor-pointer">
                  <div className="w-12 h-12 bg-white mx-6 twitter-hover flex items-center justify-center shadow-xl rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={36}
                      height={28}
                      viewBox="0 0 36 28"
                      fill="white"
                    >
                      <path
                        d="M34.6667 0.683417C33 1.50008 31.3667 1.83175 29.6667 2.33342C27.7983 0.225083 25.0283 0.108417 22.3667 1.10508C19.705 2.10175 17.9617 4.53842 18 7.33342V9.00008C12.5917 9.13842 7.775 6.67508 4.66667 2.33342C4.66667 2.33342 -2.30333 14.7218 11.3333 20.6668C8.21333 22.7451 5.10167 24.1468 1.33333 24.0001C6.84667 27.0051 12.855 28.0384 18.0567 26.5284C24.0233 24.7951 28.9267 20.3234 30.8083 13.6251C31.3697 11.5879 31.6484 9.48318 31.6367 7.37008C31.6333 6.95508 34.1533 2.75008 34.6667 0.68175V0.683417Z"
                        stroke="#0F0F0F"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </a> */}
                    <a
                      className="cursor-pointer"
                      href="https://www.instagram.com/thebridgecafeslo"
                    >
                      <div className="insta-hover flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-xl">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-brand-instagram"
                          width={38}
                          height={38}
                          viewBox="0 0 24 24"
                          strokeWidth="0.75"
                          stroke="#0F0F0F"
                          fill="white"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <rect x={4} y={4} width={16} height={16} rx={4} />
                          <circle cx={12} cy={12} r={3} />
                          <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
                        </svg>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
