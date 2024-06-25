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
            <span className="rounded-lg bg-white p-2">
              <a href="tel:805-439-1689">
                <PhoneIcon
                  className="text-bridge h-4 w-4sm:h-4 xs:w-4 sm:h-8 md:w-8 md:text-bridge"
                  aria-hidden="true"
                />
              </a>
            </span>
            <p className="ml-3 truncate text-xl text-white">
              <div> <span className="text-xs md:hidden">
                7AM - 3PM Mon-Fri
              </span></div>

             
             
     
              <div class=""> <span className="hidden md:inline">
               Monday-Friday 7 AM to 3 PM
              </span></div> 

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
          <Button
            href="/cafeclub"
            variant="outline"
            color="white"
            className="w-50 ml-4 hidden text-center text-xs text-white sm:inline-block lg:block lg:text-xl"
          >
            Join Cafe Club VIP
          </Button>
        </div>
      </div>
    </div>
  )
}
