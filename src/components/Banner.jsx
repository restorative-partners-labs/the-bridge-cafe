import {
  MegaphoneIcon,
  XMarkIcon,
  PhoneIcon,
} from '@heroicons/react/24/outline'
import { Button } from '@/components/Button'

export function Banner() {
  return (
    <div className="bg-bridge">
      <div className="mx-auto max-w-7xl py-3 px-3 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between">
          <div className="flex w-0 flex-1 items-center">
            <span className="flex rounded-lg bg-white p-2">
              <a href="tel:805-439-1689">
                <PhoneIcon className="sm:h-3 sm:w-3 md:h-6 md:w-6 text-bridge" aria-hidden="true" />
              </a>
            </span>
            <p className="ml-3 truncate text-xl text-white">
              <span className="text-xs md:hidden">
                Now Open! 7AM - 3PM Mon-Fri
              </span>
              <span className="hidden md:inline">
                Big news! We're now open! Come visit us 7 AM to 3 PM Monday thru
                Friday
              </span>
            </p>
          </div>
          <Button
            href="https://goo.gl/maps/xPmTbPBCEjicUs3g7"
            variant="outline"
            color="white"
            className="w-50 text-center text-xs text-white lg:block lg:text-xl"
          >
            1074 Higuera St, SLO
          </Button>
        </div>
      </div>
    </div>
  )
}
