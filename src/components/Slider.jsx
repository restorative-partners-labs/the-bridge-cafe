import { Button } from '@/components/Button'
import Image from 'next/image'
import mealPrep from '../../public/images/prep/02 Food Prep - Scrub.00_04_25_07.Still006.jpg'
import grandOpening from '../../public/images/grand-opening/county/01 County Preview - Scrub.00_08_12_22.Still015.jpg'

import celebration from '../../public/images/grand-opening/county/01 County Preview - Scrub.00_06_12_02.Still012.jpg'
import grandopening1 from '../../public/images/grand-opening/ceremony/bridge-cafe-grand-opening-002.jpg'
import grandopening2 from '../../public/images/grand-opening/ceremony/bridge-cafe-grand-opening-006.jpg'
import grandopening3 from '../../public/images/grand-opening/ceremony/bridge-cafe-grand-opening-045.jpg'
import grandopening4 from '../../public/images/grand-opening/ceremony/bridge-cafe-grand-opening-058.jpg'
import grandopening6 from '../../public/images/grand-opening/ceremony/bridge-cafe-grand-opening-064.jpg'
import grandopening7 from '../../public/images/grand-opening/ceremony/bridge-cafe-grand-opening-065.jpg'
import grandopening8 from '../../public/images/grand-opening/ceremony/bridge-cafe-grand-opening-066.jpg'
import grandopening9 from '../../public/images/grand-opening/ceremony/bridge-cafe-grand-opening-067.jpg'
import grandopening10 from '../../public/images/grand-opening/ceremony/bridge-cafe-grand-opening-121.jpg'


import 'tw-elements'

const slides = [
  {
    id: 1,
    name: 'Meal Prep',
    imageSrc: mealPrep,
    imageAlt: 'Bridge Cafe Biscuit',
  },
]
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export function Slider() {
  return (
    <div
      id="carouselExampleControls"
      class="slide carousel carousel-fade relative sm:h-full"
      data-bs-ride="carousel"
    >
      <div class="carousel-inner relative w-full overflow-hidden">
        <div class="carousel-item relative float-left w-full">
          <Image src={grandopening3} class="block w-full" alt="Wild Landscape" />
        </div>
        <div class="carousel-item relative float-left w-full">
          <Image src={grandopening4} class="block w-full" alt="Wild Landscape" />
        </div>
        <div class="carousel-item relative float-left w-full">
          <Image src={grandopening5} class="block w-full" alt="Wild Landscape" />
        </div>
        <div class="carousel-item relative float-left w-full">
          <Image src={grandopening6} class="block w-full" alt="Wild Landscape" />
        </div>
        <div class="carousel-item active relative float-left w-full">
          <Image src={mealPrep} class="block w-full" alt="Wild Landscape" />
        </div>
        <div class="carousel-item relative float-left w-full">
          <Image src={grandOpening} class="block w-full" alt="Wild Landscape" />
        </div>
        <div class="carousel-item relative float-left w-full">
          <Image src={celebration} class="block w-full" alt="Wild Landscape" />
        </div>
        <div class="carousel-item relative float-left w-full">
          <Image src={grandopening1} class="block w-full" alt="Wild Landscape" />
        </div>
        <div class="carousel-item relative float-left w-full">
          <Image src={grandopening2} class="block w-full" alt="Wild Landscape" />
        </div>
        <div class="carousel-item relative float-left w-full">
          <Image src={grandopening7} class="block w-full" alt="Wild Landscape" />
        </div>
        <div class="carousel-item relative float-left w-full">
          <Image src={grandopening8} class="block w-full" alt="Wild Landscape" />
        </div>
        <div class="carousel-item relative float-left w-full">
          <Image src={grandopening9} class="block w-full" alt="Wild Landscape" />
        </div>
        <div class="carousel-item relative float-left w-full">
          <Image src={grandopening10} class="block w-full" alt="Wild Landscape" />
        </div>
      </div>
      <button
        class="carousel-control-prev absolute top-0 bottom-0 left-0 flex items-center justify-center border-0 p-0 text-center hover:no-underline hover:outline-none focus:no-underline focus:outline-none"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span
          class="carousel-control-prev-icon inline-block bg-no-repeat"
          aria-hidden="true"
        ></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next absolute top-0 bottom-0 right-0 flex items-center justify-center border-0 p-0 text-center hover:no-underline hover:outline-none focus:no-underline focus:outline-none"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span
          class="carousel-control-next-icon inline-block bg-no-repeat"
          aria-hidden="true"
        ></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  )
}
