import { Button } from '@/components/Button'
import Image from 'next/image'
import mealPrep from '../../public/images/prep/02 Food Prep - Scrub.00_04_25_07.Still006.jpg'
import grandOpening from '../../public/images/grand-opening/county/01 County Preview - Scrub.00_08_12_22.Still015.jpg'

import celebration from '../../public/images/grand-opening/county/01 County Preview - Scrub.00_06_12_02.Still012.jpg'

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
        <div class="carousel-item active relative float-left w-full">
          <Image src={mealPrep} class="block w-full" alt="Wild Landscape" />
        </div>
        <div class="carousel-item relative float-left w-full">
          <Image src={grandOpening} class="block w-full" alt="Wild Landscape" />
        </div>
        <div class="carousel-item relative float-left w-full">
          <Image src={celebration} class="block w-full" alt="Wild Landscape" />
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
